# KeyPath API

Express and MongoDB backend for the KeyPath typing practice app. The server hosts the existing frontend from the workspace root and exposes a same-origin JSON API. Authentication uses a signed JWT in an HTTP-only, SameSite=Strict cookie; the browser never receives or stores the token.

## Folder structure

```text
backend/
  .env.example
  package.json
  src/
    config/db.js
    controllers/       # Auth, lessons, profile, results
    data/lessonCatalog.js
    middleware/        # JWT auth and centralized errors
    models/            # User, Lesson, PracticeResult
    routes/            # Versioned under /api
    seed.js
    server.js
```

## Setup

Requirements: Node.js 20+ and a running MongoDB instance or Atlas database.

```powershell
cd backend
npm install
Copy-Item .env.example .env
```

`MONGODB_URI` defaults to `mongodb://127.0.0.1:27017/keypath`, so a local MongoDB service must be running before the API starts. Set your Atlas URI in the ignored `.env` file for cloud storage; editing `.env.example` does not configure the running app. `JWT_SECRET` may remain blank in development, but the generated process-only value invalidates sessions after a restart. To use a stable local secret without printing it, set it in the current PowerShell session before starting the server:

```powershell
$env:JWT_SECRET = node -e "process.stdout.write(require('node:crypto').randomBytes(48).toString('hex'))"
npm run dev
```

Production requires a unique random `JWT_SECRET` of at least 32 characters, configured in the hosting provider's secret/environment settings; do not commit it or place it in frontend configuration. It also requires an HTTPS `PUBLIC_ORIGIN` and `COOKIE_SECURE=true`. `ALLOWED_ORIGINS` accepts comma-separated browser origins; `PUBLIC_ORIGIN` is also allowed automatically. The app uses Mongoose's normal pool defaults because deployment size and concurrent traffic have not been specified; monitor MongoDB Atlas connection metrics before tuning pool options.

CORS is configured for localhost/127.0.0.1 ports 3000, 5500, 5501, 5173, and 8080 with credentialed requests. Add other local frontend origins as a comma-separated `ALLOWED_ORIGINS` value in `.env`. Prefer serving the frontend from Express at `http://localhost:3000` so the API and secure session cookie remain same-origin.

For local development, use the PowerShell command above. For production, generate/store the secret directly in the hosting provider's secret manager and configure it as `JWT_SECRET`.

```powershell
npm run dev
```

The server seeds or updates 400 lesson records (100 lessons across each of four levels) at startup and serves the frontend at `http://localhost:3000`. With MongoDB running locally, `npm run dev` starts the app after dependencies are installed. Keep `.env` private. In production, configure HTTPS, backups, secret rotation, and a trusted proxy if TLS terminates before Express.

## Production SEO and deployment

The public site origin is currently `https://keypath.netlify.app`. The root `index.html` includes Arabic title/description, Open Graph and Twitter metadata, canonical and language links, and WebApplication JSON-LD. `robots.txt` allows public-page indexing (including common AI crawlers) while disallowing `/api/`; `sitemap.xml` lists the public root page. Express serves these files too. Update every canonical, sitemap, and robots URL if the production domain changes.

For a separate API host, set the frontend's `<meta name="api-base-url">` in `index.html` to the API origin and include the frontend site in the API's `ALLOWED_ORIGINS`. For cookie-based authentication, deploy the API behind a same-site custom domain or a same-origin `/api` proxy; a cross-site Netlify-to-API deployment can have its session cookie blocked by the current `SameSite=Strict` policy. Do not put secrets in frontend configuration. Set `NODE_ENV=production`, `PUBLIC_ORIGIN=https://keypath.netlify.app`, a strong `JWT_SECRET`, the Atlas `MONGODB_URI`, and `COOKIE_SECURE=true` in the backend hosting provider's environment settings.

## API

All request/response bodies are JSON. Authenticated endpoints use the HTTP-only session cookie issued by register/login.

| Method | Endpoint                        | Auth | Purpose                                                                                  |
| ------ | ------------------------------- | ---: | ---------------------------------------------------------------------------------------- |
| POST   | `/api/auth/register`            |   No | `{ "name": "Sam", "email": "sam@example.com", "password": "at-least-8-chars" }`          |
| POST   | `/api/auth/login`               |   No | `{ "email": "sam@example.com", "password": "..." }`                                      |
| POST   | `/api/auth/logout`              |   No | Clear the session cookie                                                                 |
| GET    | `/api/auth/me`                  |  Yes | Current account                                                                          |
| GET    | `/api/lessons?level=1&lang=en`  |   No | Lessons ordered by level and lesson                                                      |
| GET    | `/api/profile`                  |  Yes | Aggregate practice stats                                                                 |
| POST   | `/api/results`                  |  Yes | `{ "lessonId": "typing-01", "wpm": 32, "accuracy": 96, "errors": 2, "timeSeconds": 75 }` |
| GET    | `/api/results/history?limit=30` |  Yes | Recent attempts and completed lesson IDs                                                 |
| GET    | `/api/results/leaderboard`      |   No | Top 10 best WPM scores                                                                   |
| GET    | `/api/health`                   |   No | Server health                                                                            |

The API refuses to save a lesson result until the previous lesson has been passed. WPM and accuracy are still client-reported measurements, so the leaderboard is suitable for a learning demo, not a prize-bearing or fraud-resistant competition. Validate the typed text and timing against server-issued attempt tokens if this becomes a competitive product.

Lesson results may include a bounded `mistakeKeys` array (`[{ "key": "e", "count": 2, "averageDelayMs": 420, "samples": 4 }]`). Per-session error counts and inter-key delay summaries are stored with the result and returned in authenticated history to personalize the local, heuristic Ghost Twin coach. It is not a hosted AI model and makes no cloud inference; it ranks recurring expected-key errors and slower expected-key timings from up to 100 recent sessions. The Code-Spell sandbox is deliberately a fixed-snippet typing exercise: it matches against allowlisted examples and triggers built-in visual previews; it never evaluates user-entered JavaScript, HTML, or Python. Typing click sounds and ambient tones are generated locally with Web Audio and are never sent to the API. The pause reminder is a 3.5-second inter-key pause heuristic after ten characters, not health or medical advice.

## Thunder Client

1. Start MongoDB, copy `.env.example` to `.env`, set the URI and secret, then run `npm install` and `npm run dev`.
2. Create a Thunder Client environment variable `baseUrl` = `http://localhost:3000`.
3. Send `POST {{baseUrl}}/api/auth/register` with JSON body `{"name":"Sam","email":"sam@example.com","password":"correct-horse-battery"}`. Thunder Client should retain the response cookie; send subsequent authenticated requests in that same client.
4. Verify `GET {{baseUrl}}/api/auth/me`, `GET {{baseUrl}}/api/profile`, and `GET {{baseUrl}}/api/lessons?level=1&lang=en`.
5. Send `POST {{baseUrl}}/api/results` with the sample result body above; then inspect `GET {{baseUrl}}/api/results/history` and `GET {{baseUrl}}/api/profile`.
6. Test invalid credentials (401), duplicate registration (409), missing session (401), and invalid result fields (400).

## Frontend integration

The existing `app.js` calls `/api/auth/register`, `/api/auth/login`, `/api/auth/me`, `/api/auth/logout`, `/api/profile`, `/api/results/history`, and `/api/results`. When opened from a local development origin such as `http://localhost:5500`, requests are sent to `http://localhost:3000` with credentials so the HTTP-only session cookie works; Express CORS allows the configured local origins. Otherwise, requests use the current origin. You can also serve the frontend from Express at `http://localhost:3000`. Do not open `index.html` as a `file://` URL.

Google/Microsoft buttons are intentionally informational placeholders. To enable provider login, configure OAuth applications and add validated authorization-code flows on the server; never accept a provider identity asserted only by the browser.
