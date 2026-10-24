const lessons = [
  {
    title: "تعرّف على الصف الأوسط",
    subtitle: "ضع أصابعك على مفاتيح البداية",
    duration: "دقيقتان",
    focus: "مفاتيح الصف الأوسط",
    description:
      "ابدأ بوضع أصابعك برفق على المفاتيح الأساسية، وحافظ على استرخاء يديك.",
    keys: ["ت", "ن", "م", "ك"],
    challenge: "أكمل النص دون أي خطأ لتحصل على مكافأة الدقة.",
    xp: 20,
    target: "تعلّم الكتابة يبدأ من هنا، خطوة صغيرة كل يوم تصنع فرقاً كبيراً.",
  },
  {
    title: "حروف سهلة وإيقاع هادئ",
    subtitle: "درّب أصابعك على التنقّل",
    duration: "دقيقتان",
    focus: "الانتقال بين الحروف",
    description: "حرّك أصابعك بهدوء بين الحروف، ثم أعدها إلى مكانها الأساسي.",
    keys: ["س", "ش", "ر", "ل"],
    challenge: "حافظ على دقة 95٪ أو أكثر لتحصل على نجمة إضافية.",
    xp: 25,
    target: "كل مرة تتدرّب فيها تصبح حركتك بين الحروف أسهل وأكثر ثباتاً.",
  },
  {
    title: "كلمات من حولنا",
    subtitle: "اربط الحروف بكلمات مألوفة",
    duration: "3 دقائق",
    focus: "كتابة الكلمات",
    description:
      "اكتب كلمات قصيرة بإيقاع ثابت. انتبه للمسافة بين كل كلمة وأخرى.",
    keys: ["ب", "ي", "ت", "ا"],
    challenge: "أنهِ التمرين خلال 40 ثانية لتحصل على نقاط السرعة.",
    xp: 30,
    target: "بيتي قريب من المدرسة، وفي الطريق أرى شجرة جميلة.",
  },
  {
    title: "المسافات وعلامات الترقيم",
    subtitle: "اكتب جملاً واضحة",
    duration: "3 دقائق",
    focus: "المسافة والفاصلة",
    description:
      "استخدم زر المسافة بين الكلمات، وانتبه للفاصلة والنقطة في نهاية الجملة.",
    keys: ["،", ".", "Space"],
    challenge: "لا تنسَ أي مسافة أو علامة ترقيم في النص.",
    xp: 35,
    target: "أحب القراءة، فهي توسّع أفكاري. وأستمتع كل يوم بكتاب جديد.",
  },
  {
    title: "حروف الصف العلوي",
    subtitle: "وسّع نطاق حركة أصابعك",
    duration: "3 دقائق",
    focus: "الوصول إلى الصف العلوي",
    description: "مدّ أصابعك إلى الحروف الجديدة، ثم أعدها إلى الصف الأوسط.",
    keys: ["ق", "ف", "غ", "ع"],
    challenge: "اكتب النص بإيقاع ثابت دون التوقف في منتصفه.",
    xp: 40,
    target: "فوق الغيم يلمع القمر، وتغني العصافير قرب النافذة.",
  },
  {
    title: "جمل قصيرة وسريعة",
    subtitle: "اكتب بإيقاع متوازن",
    duration: "3 دقائق",
    focus: "السرعة مع الدقة",
    description: "حاول الحفاظ على نسق مريح. لا تسرع على حساب صحة الحروف.",
    keys: ["ج", "ح", "خ", "د"],
    challenge: "تجاوز سرعتك السابقة مع الحفاظ على دقة 85٪.",
    xp: 45,
    target: "النجاح يحتاج إلى صبر وممارسة، وكل محاولة تقرّبنا من الهدف.",
  },
  {
    title: "تدريب على الأرقام",
    subtitle: "أضف الأرقام إلى كتابتك",
    duration: "3 دقائق",
    focus: "الأرقام والتبديل",
    description: "تدرّب على الانتقال بين الحروف والأرقام دون أن تفقد تركيزك.",
    keys: ["١", "٢", "٣", "٤"],
    challenge: "أكمل النص دون خطأ في أي رقم.",
    xp: 50,
    target: "أقرأ ٣ قصص كل أسبوع، وأكتب ملخصاً من ٢ صفحة.",
  },
  {
    title: "اختبارك الأول",
    subtitle: "أرنا ما تعلّمته",
    duration: "4 دقائق",
    focus: "كتابة متكاملة",
    description: "اجمع مهاراتك: دقة، سرعة مناسبة، ومسافات واضحة.",
    keys: ["ا", "ل", "م", "ة"],
    challenge: "حقق دقة 90٪ لتحصل على شارة الكاتب الماهر.",
    xp: 60,
    target:
      "الكتابة مهارة تنمو بالتدريب. أستخدم أصابعي بثقة، وأكتب أفكاري بوضوح كل يوم.",
  },
];

const englishLessons = [
  {
    title: "Meet the home row",
    subtitle: "Rest your fingers on the home keys",
    focus: "Home row keys",
    description:
      "Rest your fingers gently on the home keys and keep your hands relaxed.",
    keys: ["ت", "ن", "م", "ك"],
    challenge: "Finish the text without a mistake to earn the accuracy bonus.",
    target: "Typing starts here. A small step each day makes a big difference.",
    duration: "2 min",
  },
  {
    title: "Easy letters, steady rhythm",
    subtitle: "Practice moving between keys",
    focus: "Moving between letters",
    description:
      "Move your fingers calmly between letters, then return them to the home row.",
    keys: ["س", "ش", "ر", "ل"],
    challenge: "Keep your accuracy at 95% or higher to earn a bonus star.",
    target:
      "Each time you practice, moving between letters feels easier and steadier.",
    duration: "2 min",
  },
  {
    title: "Words all around us",
    subtitle: "Connect letters to familiar words",
    focus: "Typing words",
    description:
      "Type short words at a steady pace. Remember to leave a space between each word.",
    keys: ["ب", "ي", "ت", "ا"],
    challenge:
      "Finish the exercise in under 40 seconds to earn the speed bonus.",
    target: "My home is near school, and I see a beautiful tree along the way.",
    duration: "3 min",
  },
  {
    title: "Spaces and punctuation",
    subtitle: "Write clear sentences",
    focus: "Spaces and punctuation",
    description:
      "Use the space bar between words, and notice commas and periods.",
    keys: [",", ".", "Space"],
    challenge: "Don't miss any spaces or punctuation in the text.",
    target:
      "I love reading, it expands my ideas. I enjoy a new book every day.",
    duration: "3 min",
  },
  {
    title: "Reach the top row",
    subtitle: "Expand your finger reach",
    focus: "Reaching the top row",
    description:
      "Reach for the new keys, then bring your fingers back to the home row.",
    keys: ["ق", "ف", "غ", "ع"],
    challenge: "Type the text at a steady rhythm without stopping midway.",
    target: "The moon shines above the clouds, and birds sing near the window.",
    duration: "3 min",
  },
  {
    title: "Short and speedy sentences",
    subtitle: "Find a balanced typing rhythm",
    focus: "Speed with accuracy",
    description:
      "Try to keep a comfortable rhythm. Don't trade accuracy for speed.",
    keys: ["ج", "ح", "خ", "د"],
    challenge: "Beat your previous speed while keeping at least 85% accuracy.",
    target:
      "Success takes patience and practice, and each try brings us closer to our goal.",
    duration: "3 min",
  },
  {
    title: "Practice with numbers",
    subtitle: "Add numbers to your typing",
    focus: "Numbers and switching",
    description:
      "Practice switching between letters and numbers without losing focus.",
    keys: ["1", "2", "3", "4"],
    challenge: "Finish the text without a mistake in any number.",
    target: "I read 3 stories each week and write a 2-page summary.",
    duration: "3 min",
  },
  {
    title: "Your first test",
    subtitle: "Show what you've learned",
    focus: "Putting it all together",
    description:
      "Bring your skills together: accuracy, a steady pace, and clear spacing.",
    keys: ["ا", "ل", "م", "ة"],
    challenge: "Reach 90% accuracy to earn the skilled typist badge.",
    target:
      "Typing is a skill that grows with practice. I use my fingers with confidence and write my ideas clearly every day.",
    duration: "4 min",
  },
];
const englishFocusKeys = [
  ["f", "j", "d", "k"],
  ["a", "s", "l", ";"],
  ["h", "o", "m", "e"],
  [",", ".", "Space"],
  ["q", "w", "e", "r"],
  ["u", "i", "o", "p"],
  ["1", "2", "3", "4"],
  ["t", "y", "p", "e"],
];

const messages = {
  en: {
    authEyebrow: "YOUR TYPING JOURNEY STARTS HERE",
    authTitle: "Welcome back",
    authDescription: "Sign in to save your progress and keep learning.",
    googleButton: "Continue with Google",
    microsoftButton: "Continue with Microsoft",
    orContinue: "or continue with email",
    nameLabel: "Your name",
    namePlaceholder: "Your name",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    passwordLabel: "Password",
    passwordPlaceholder: "At least 8 characters",
    showPassword: "Show",
    hidePassword: "Hide",
    signInButton: "Sign in",
    createAccount: "Create account",
    noAccount: "Don't have an account?",
    haveAccount: "Already have an account?",
    signUpTitle: "Create your account",
    signUpDescription: "Start your typing journey and track your progress.",
    authNotice:
      "Demo interface: Google and Microsoft sign-in require OAuth server setup. Email accounts are not securely stored in this browser-only demo.",
    authFooter: "Practice a little. Improve a lot.",
    signOut: "Sign out",
    navMain: "Main navigation",
    navPath: "Path",
    navPractice: "Practice",
    welcomeEyebrow: "YOUR JOURNEY STARTS HERE",
    welcomeTitle: "Every keystroke brings you closer to your goal.",
    welcomeCopy:
      "Practice typing in Arabic, one step at a time. Focus on accuracy first; speed will follow.",
    dailyGoal: "Today's goal",
    pathProgress: "Your path progress",
    progressEncouragement: "Keep going, you're building a great habit 👏",
    bestSpeed: "Your best speed",
    wordsPerMinute: "words / min",
    newRecord: "Set a new record in your next lesson",
    avgAccuracy: "Average accuracy",
    typingAccuracy: "typing accuracy",
    accuracyTip: "High accuracy builds a faster typist",
    totalPractice: "Total practice",
    minutesPracticed: "minutes practiced",
    practiceTimeTip: "Every minute helps you improve",
    levelOne: "LEVEL 1 · THE BASICS",
    learningPath: "Your typing path",
    lessonCount: "8 short lessons",
    smallTip: "A LITTLE TIP",
    tipTitle: "Calm is better than speed",
    tipCopy:
      "Sit comfortably and keep your eyes on the text, not the keyboard. Your fingers will learn the way.",
    tipFooter: "Practice 5 minutes every day",
    backToPath: "Back to path",
    levelOneShort: "Level 1",
    soundOff: "Sound off",
    soundOn: "Sound on",
    lessonReward: "Lesson reward",
    typeFollowing: "Type the following text",
    useArabicKeyboard: "Use the matching keyboard layout",
    restartLesson: "Restart lesson",
    restart: "Restart",
    typingInputLabel: "Type the text shown here",
    typingPlaceholder: "Click here and start typing...",
    keyboardTip: "Remember: don't look at the keyboard",
    liveStats: "Your live stats",
    speed: "Speed",
    wpm: " wpm",
    accuracy: "Accuracy",
    time: "Time",
    errors: "Errors",
    lessonFocus: "Lesson focus",
    bonusChallenge: "Bonus challenge",
    reward: "Reward",
    finishFirst: "Finish typing first",
    finishHint:
      "Complete the text with at least 80% accuracy to unlock the next lesson",
    close: "Close",
    wpmLong: "words per minute",
    experience: "XP earned",
    nextLesson: "Next lesson",
    finishPath: "Finish path",
    returnToPath: "Return to path",
    waiting: "Ready when you are",
    typingStatus: "You're in the zone! Keep going",
    typedComplete: "Text complete, nice work!",
    characters: "characters",
    lessonNumber: "Lesson {n}",
    challengeSuccess: "Amazing work!",
    lessonSuccess: "Nice work, keep going!",
    retryEyebrow: "One more try",
    resultSuccess: "Lesson complete",
    resultRetry: "Try the lesson again",
    challengeCopy:
      "You completed the lesson and the bonus challenge. What a focused effort!",
    passCopy:
      "You completed the exercise. Keep practicing to unlock more challenges and rewards.",
    retryCopy:
      "You reached the end of the text, but you need at least 80% accuracy to unlock the next lesson.",
    errorSave: "Your progress could not be saved on this device.",
    challengeToastOn: "A sound will play when you complete the lesson.",
    challengeToastOff: "Sound turned off.",
    finishedPathToast: "Congratulations! You completed every lesson.",
    oauthGoogle:
      "Google sign-in needs OAuth credentials and a configured server.",
    oauthMicrosoft:
      "Microsoft sign-in needs OAuth credentials and a configured server.",
    accountDemoSuccess: "Demo sign-in successful. Your password was not saved.",
    invalidDemo: "Enter a valid email and a password of at least 8 characters.",
    lessonRestartedLanguage:
      "The lesson restarted because its typing language changed.",
    lessonCatalogError: "The lesson catalog returned unexpected data.",
    serverUnavailable:
      "Cannot reach the server. Make sure the API server is running.",
    requestFailed: "The request could not be completed.",
    streakTitle: "XP earned",
    progressOverview: "Progress overview",
    learningStages: "Learning stages",
    avatar: "Learner account",
    themeDark: "Switch to dark mode",
    themeLight: "Switch to light mode",
    languageArabic: "العربية",
    languageEnglish: "English",
    minDuration: "min",
  },
  ar: {
    authEyebrow: "رحلتك في تعلّم الكتابة تبدأ هنا",
    authTitle: "مرحباً بعودتك",
    authDescription: "سجّل الدخول لحفظ تقدّمك ومواصلة التعلّم.",
    googleButton: "المتابعة باستخدام Google",
    microsoftButton: "المتابعة باستخدام Microsoft",
    orContinue: "أو المتابعة بالبريد الإلكتروني",
    nameLabel: "اسمك",
    namePlaceholder: "اسمك",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "you@example.com",
    passwordLabel: "كلمة المرور",
    passwordPlaceholder: "8 أحرف على الأقل",
    showPassword: "إظهار",
    hidePassword: "إخفاء",
    signInButton: "تسجيل الدخول",
    createAccount: "إنشاء حساب",
    noAccount: "ليس لديك حساب؟",
    haveAccount: "لديك حساب بالفعل؟",
    signUpTitle: "أنشئ حسابك",
    signUpDescription: "ابدأ رحلة تعلّم الكتابة وتابع تقدّمك.",
    authNotice:
      "واجهة تجريبية: يتطلب تسجيل الدخول عبر Google وMicrosoft إعداد OAuth وخادماً. لا تُحفظ حسابات البريد الإلكتروني بأمان في هذا النموذج الذي يعمل محلياً فقط.",
    authFooter: "تدرّب قليلاً، وتطوّر كثيراً.",
    signOut: "تسجيل الخروج",
    navMain: "التنقل الرئيسي",
    navPath: "المسار",
    navPractice: "التدريب",
    welcomeEyebrow: "رحلتك تبدأ من هنا",
    welcomeTitle: "كل ضغطة تقرّبك من هدفك.",
    welcomeCopy:
      "تدرّب على الكتابة بالعربية، خطوة بخطوة. ركّز على الدقة أولاً، وستأتي السرعة بعدها.",
    dailyGoal: "هدف اليوم",
    pathProgress: "تقدّمك في المسار",
    progressEncouragement: "استمر، أنت تبني عادة رائعة 👏",
    bestSpeed: "أفضل سرعة لك",
    wordsPerMinute: "كلمة / دقيقة",
    newRecord: "سجّل رقماً جديداً في الدرس القادم",
    avgAccuracy: "متوسط الدقة",
    typingAccuracy: "دقة الكتابة",
    accuracyTip: "الدقة العالية تصنع كاتباً أسرع",
    totalPractice: "إجمالي وقت التدريب",
    minutesPracticed: "دقيقة تدريب",
    practiceTimeTip: "كل دقيقة تساعدك على التطور",
    levelOne: "المستوى الأول · الأساسيات",
    learningPath: "مسار تعلّم الكتابة",
    lessonCount: "8 مراحل قصيرة",
    smallTip: "نصيحة صغيرة",
    tipTitle: "الهدوء أهم من السرعة",
    tipCopy:
      "اجلس بوضعية مريحة، واجعل عينيك على النص لا على لوحة المفاتيح. أصابعك ستتعلّم الطريق.",
    tipFooter: "تدرّب 5 دقائق كل يوم",
    backToPath: "العودة للمسار",
    levelOneShort: "المستوى الأول",
    soundOff: "الصوت مغلق",
    soundOn: "الصوت مفعّل",
    lessonReward: "مكافأة الدرس",
    typeFollowing: "اكتب النص التالي",
    useArabicKeyboard: "استخدم لوحة المفاتيح المناسبة للدرس",
    restartLesson: "إعادة الدرس",
    restart: "إعادة",
    typingInputLabel: "اكتب النص المعروض هنا",
    typingPlaceholder: "اضغط هنا وابدأ الكتابة...",
    keyboardTip: "تذكّر: لا تنظر إلى لوحة المفاتيح",
    liveStats: "إحصائياتك المباشرة",
    speed: "السرعة",
    wpm: " كلمة/د",
    accuracy: "الدقة",
    time: "الوقت",
    errors: "الأخطاء",
    lessonFocus: "تركيز المرحلة",
    bonusChallenge: "تحدّي إضافي",
    reward: "الجائزة",
    finishFirst: "أكمل الكتابة أولاً",
    finishHint: "أكمل النص بدقة 80٪ على الأقل لفتح المرحلة التالية",
    close: "إغلاق",
    wpmLong: "كلمة/دقيقة",
    experience: "نقاط الخبرة",
    nextLesson: "المرحلة التالية",
    finishPath: "إنهاء المسار",
    returnToPath: "العودة للمسار",
    waiting: "بانتظارك للبدء",
    typingStatus: "أنت في المنطقة! واصل الكتابة",
    typedComplete: "اكتمل النص، أحسنت!",
    characters: "حرف",
    lessonNumber: "الدرس {n}",
    challengeSuccess: "أداء رائع!",
    lessonSuccess: "أحسنت، استمر!",
    retryEyebrow: "محاولة أخرى",
    resultSuccess: "أنهيت المرحلة",
    resultRetry: "جرّب المرحلة مرة أخرى",
    challengeCopy:
      "أنجزت هدف المرحلة والتحدي الإضافي. مكافأة رائعة على تركيزك!",
    passCopy: "أكملت التمرين بنجاح. واصل التدريب لفتح تحديات ومكافآت إضافية.",
    retryCopy:
      "وصلت إلى نهاية النص، لكن دقتك تحتاج إلى 80٪ على الأقل لفتح المرحلة التالية.",
    errorSave: "تعذّر حفظ التقدّم على هذا الجهاز.",
    challengeToastOn: "سيصدر تنبيه عند إكمال المرحلة.",
    challengeToastOff: "تم إيقاف الصوت.",
    finishedPathToast: "تهانينا! أكملت جميع مراحل المسار.",
    oauthGoogle: "يتطلب تسجيل الدخول عبر Google بيانات OAuth وخادماً مُعدّاً.",
    oauthMicrosoft:
      "يتطلب تسجيل الدخول عبر Microsoft بيانات OAuth وخادماً مُعدّاً.",
    accountDemoSuccess: "تم تسجيل الدخول التجريبي. لم تُحفظ كلمة المرور.",
    invalidDemo:
      "أدخل بريداً إلكترونياً صالحاً وكلمة مرور من 8 أحرف على الأقل.",
    lessonRestartedLanguage: "أُعيد الدرس لأن لغة الكتابة تغيّرت.",
    lessonCatalogError: "أعاد الخادم بيانات غير متوقعة للدروس.",
    serverUnavailable: "تعذّر الاتصال بالخادم. تأكد من تشغيل واجهة API.",
    requestFailed: "تعذّر إكمال الطلب.",
    streakTitle: "نقاط الخبرة التي جمعتها",
    progressOverview: "ملخص التقدم",
    learningStages: "مراحل التعلّم",
    avatar: "حساب المتدرّب",
    themeDark: "التحويل إلى الوضع الداكن",
    themeLight: "التحويل إلى الوضع الفاتح",
    languageArabic: "العربية",
    languageEnglish: "English",
    minDuration: "دقائق",
  },
};

Object.assign(messages.en, {
  authNotice:
    "Google and Microsoft sign-in need OAuth provider credentials. Email passwords are securely hashed by the backend.",
  accountDemoSuccess: "Signed in successfully.",
  totalPractice: "Total practice",
  minutesPracticed: "minutes practiced",
  practiceTimeTip: "Every minute helps you improve",
  lessonCatalogError: "The lesson catalog returned unexpected data.",
  serverUnavailable:
    "Cannot reach the server. Make sure the API server is running.",
  requestFailed: "The request could not be completed.",
  lessonRestartedLanguage:
    "The lesson restarted because its typing language changed.",
  historyTitle: "Recent practice",
  emptyHistory: "Your completed practice sessions will appear here.",
  authFailed: "Your sign-in session is invalid. Please sign in again.",
  invalidRequest: "Some submitted information is invalid.",
  duplicateAccount: "An account with this email already exists.",
  lessonLocked: "Complete the previous lesson before continuing.",
  tooManyRequests: "Too many requests. Please wait a moment and try again.",
});
Object.assign(messages.ar, {
  authNotice:
    "يتطلب تسجيل الدخول عبر Google وMicrosoft إعداد OAuth. تُشفّر الواجهة الخلفية كلمات مرور البريد الإلكتروني بأمان.",
  accountDemoSuccess: "تم تسجيل الدخول بنجاح.",
  totalPractice: "إجمالي وقت التدريب",
  minutesPracticed: "دقيقة تدريب",
  practiceTimeTip: "كل دقيقة تساعدك على التطور",
  lessonCatalogError: "أعاد الخادم بيانات غير متوقعة للدروس.",
  serverUnavailable: "تعذّر الاتصال بالخادم. تأكد من تشغيل واجهة API.",
  requestFailed: "تعذّر إكمال الطلب.",
  lessonRestartedLanguage: "أُعيد الدرس لأن لغة الكتابة تغيّرت.",
  historyTitle: "التدريبات الأخيرة",
  emptyHistory: "ستظهر جلسات التدريب المكتملة هنا.",
  authFailed: "انتهت جلسة الدخول أو لم تعد صالحة. سجّل الدخول مجدداً.",
  invalidRequest: "بعض البيانات المرسلة غير صالحة.",
  duplicateAccount: "يوجد حساب مسجّل بهذا البريد الإلكتروني بالفعل.",
  lessonLocked: "أكمل المرحلة السابقة قبل المتابعة.",
  tooManyRequests: "طلبات كثيرة جداً. انتظر قليلاً ثم حاول مرة أخرى.",
});

const progressKey = "tariq-al-kitaba-progress-v1";
const dailyKey = "tariq-al-kitaba-daily-v1";
const keyboardRows = {
  ar: [
    "ض ص ث ق ف غ ع ه خ ح ج",
    "ش س ي ب ل ا ت ن م ك ة",
    "ئ ء ؤ ر لا ى ة و ز ظ",
  ],
  en: ["q w e r t y u i o p", "a s d f g h j k l", "z x c v b n m"],
};
const featureCopy = {
  en: {
    labEyebrow: "CODE-SPELL SANDBOX",
    labTitle: "Make your code come alive",
    labBadge: "Safe, instant preview",
    chooseSpell: "Choose a mini spell",
    codeInputLabel: "Type the code shown above",
    castSpell: "Run safe preview",
    codeHint: "Type the exact snippet to activate its visual preview.",
    codeSuccess: "Spell complete! Your safe visual preview is alive.",
    codeMiss: "Not quite yet — compare spaces, symbols, and line breaks.",
    previewReady: "Your preview will appear here",
    jsPreview: "A JavaScript glow effect",
    htmlPreview: "An HTML star button",
    pythonPreview: "A Python star loop",
    ghostTitle: "Weakness Ghost Twin",
    ghostEmpty: "Your rival adapts to the keys that challenge you most.",
    ghostReady: "Your rival is warming up. Practice to reveal a focus key.",
    ghostFocus: "Focus key: {key} · challenge intensity {score}%",
    ghostGuide:
      "Try a calm, accurate run on this key. Mistakes are counted for coaching, not grading.",
    breakTitle: "Time for a tiny reset?",
    breakCopy:
      "Pause, relax your hands, and gently stretch your fingers. This comfort reminder is not a medical assessment.",
    dismissBreak: "I’m ready",
    ambientOff: "Ambient off",
    ambientOn: "Ambient on",
    soundSupported: "Soft key clicks are on.",
  },
  ar: {
    labEyebrow: "مختبر تعاويذ الشيفرة",
    labTitle: "حوّل الشيفرة إلى تأثير حي",
    labBadge: "معاينة آمنة وفورية",
    chooseSpell: "اختر تعويذة برمجية",
    codeInputLabel: "اكتب الشيفرة الظاهرة أعلاه",
    castSpell: "تشغيل المعاينة الآمنة",
    codeHint: "اكتب المقطع كما هو لتفعيل المعاينة المرئية.",
    codeSuccess: "اكتملت التعويذة! ظهرت المعاينة الآمنة.",
    codeMiss: "ليس بعد — راجع المسافات والرموز وفواصل الأسطر.",
    previewReady: "ستظهر المعاينة هنا",
    jsPreview: "تأثير توهج بـ JavaScript",
    htmlPreview: "زر نجمة بـ HTML",
    pythonPreview: "حلقة نجوم بـ Python",
    ghostTitle: "شبح التحدي لنقاط الضعف",
    ghostEmpty: "يتكيف منافسك مع المفاتيح الأصعب عليك.",
    ghostReady: "منافسك يستعد. تدرب لاكتشاف المفتاح المستهدف.",
    ghostFocus: "المفتاح المستهدف: {key} · شدة التحدي {score}٪",
    ghostGuide:
      "جرّب الكتابة بهدوء ودقة على هذا المفتاح. الأخطاء للتدريب وليست للتقييم.",
    breakTitle: "حان وقت استراحة قصيرة؟",
    breakCopy:
      "توقف قليلاً وأرخِ يديك ومدّد أصابعك برفق. هذا تذكير للراحة وليس تقييماً طبياً.",
    dismissBreak: "متابعة",
    ambientOff: "الموسيقى هادئة مغلقة",
    ambientOn: "الموسيقى الهادئة مفعّلة",
    soundSupported: "صوت المفاتيح الخافت مفعّل.",
  },
};
const passwordPlaceholders = {
  en: { signin: "Enter your password", signup: "At least 8 characters" },
  ar: { signin: "أدخل كلمة المرور", signup: "8 أحرف على الأقل" },
};
const codeSpells = {
  js: { code: "const glow = true;\nif (glow) lightUp();", output: "jsPreview" },
  html: { code: '<button class="star">Shine</button>', output: "htmlPreview" },
  python: {
    code: "for star in stars:\n    shine(star)",
    output: "pythonPreview",
  },
};
function safeGetLocalStorage(key) {
  try {
    return globalThis.localStorage?.getItem(key) ?? null;
  } catch {
    return null;
  }
}

function safeSetLocalStorage(key, value) {
  try {
    globalThis.localStorage?.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

const state = {
  progress: loadProgress(),
  lessonIndex: 0,
  startedAt: null,
  timer: null,
  sound: false,
  ambient: false,
  audioContext: null,
  ambientNodes: [],
  mistakeCounts: Object.create(null),
  keyTiming: Object.create(null),
  historicalMistakes: Object.create(null),
  lastTypedValue: "",
  lastInputAt: 0,
  breakShown: false,
  locale: safeGetLocalStorage("keypath-locale") === "ar" ? "ar" : "en",
  theme: safeGetLocalStorage("keypath-theme") === "dark" ? "dark" : "light",
  authMode: "signin",
};

const $ = (selector) => document.querySelector(selector);
const home = $("#home");
const lessonScreen = $("#lesson-screen");
const typingInput = $("#typing-input");
const typingTarget = $("#typing-target");
const finishButton = $("#finish-button");
const resultModal = $("#result-modal");
const t = (key) => messages[state.locale][key] || messages.en[key] || key;
const currentLesson = () =>
  state.locale === "en"
    ? englishLessons[state.lessonIndex]
    : lessons[state.lessonIndex];

function applyLocale() {
  const isArabic = state.locale === "ar";
  document.documentElement.lang = state.locale;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.title = isArabic
    ? "KeyPath | تعلم واحتراف الطباعة السريعة"
    : "KeyPath | Learn to Type";
  document.querySelectorAll("[data-feature]").forEach((element) => {
    const key = element.dataset.feature;
    if (featureCopy[state.locale][key])
      element.textContent = featureCopy[state.locale][key];
  });
  renderCodeSpell();
  renderGhostCoach();
  if (!$("#code-input").value)
    $("#code-feedback").textContent = featureCopy[state.locale].codeHint;
  if (!$("#spell-preview").classList.contains("is-cast"))
    $("#spell-output").textContent = featureCopy[state.locale].previewReady;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (element.id === "auth-title" && state.authMode === "signup") return;
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });
  $("#auth-language-toggle").textContent = isArabic
    ? t("languageEnglish")
    : t("languageArabic");
  $("#language-toggle").textContent = isArabic
    ? t("languageEnglish")
    : t("languageArabic");
  $("#typing-input").dir = isArabic ? "rtl" : "ltr";
  $("#typing-target").dir = isArabic ? "rtl" : "ltr";
  $("#focus-keys").dir = isArabic ? "rtl" : "ltr";
  $("#password-toggle").textContent = t(
    $("#auth-password").type === "password" ? "showPassword" : "hidePassword",
  );
  $("#back-button").querySelector("span").textContent = isArabic ? "→" : "←";
  $("#avatar").textContent =
    sessionStorage.getItem("keypath-name")?.slice(0, 1) ||
    (isArabic ? "م" : "K");
  $("#avatar").setAttribute("aria-label", t("avatar"));
  $(".streak-pill").title = t("streakTitle");
  $("#sound-label").textContent = state.sound ? t("soundOn") : t("soundOff");
  $("#ambient-label").textContent =
    featureCopy[state.locale][state.ambient ? "ambientOn" : "ambientOff"];
  updateThemeControls();
  updateAuthMode();
  renderDashboard();
  if (
    !lessonScreen.classList.contains("hidden") &&
    resultModal.classList.contains("hidden")
  ) {
    const lessonWasStarted =
      typingInput.value.length > 0 || state.startedAt !== null;
    openLesson(state.lessonIndex);
    if (lessonWasStarted) showToast(t("lessonRestartedLanguage"));
  }
}

function updateThemeControls() {
  document.body.dataset.theme = state.theme;
  const dark = state.theme === "dark";
  for (const button of [$("#auth-theme-toggle"), $("#theme-toggle")]) {
    button.setAttribute("aria-label", t(dark ? "themeLight" : "themeDark"));
    button.innerHTML = `<span aria-hidden="true">${dark ? "☀" : "☾"}</span>`;
  }
  document.querySelector('meta[name="theme-color"]').content = dark
    ? "#191925"
    : "#f5f7fb";
}

function updateAuthMode() {
  const signup = state.authMode === "signup";
  $("#auth-title").textContent = t(signup ? "signUpTitle" : "authTitle");
  $(".auth-intro > p:last-child").textContent = t(
    signup ? "signUpDescription" : "authDescription",
  );
  $("#auth-name").classList.toggle("hidden", !signup);
  $("#name-label").classList.toggle("hidden", !signup);
  $("#auth-name").required = signup;
  $("#auth-password").autocomplete = signup
    ? "new-password"
    : "current-password";
  $("#auth-password").placeholder =
    passwordPlaceholders[state.locale][signup ? "signup" : "signin"];
  $("#auth-submit").textContent = t(signup ? "createAccount" : "signInButton");
  $("#auth-switch-copy").textContent = t(signup ? "haveAccount" : "noAccount");
  $("#auth-mode-toggle").textContent = t(
    signup ? "signInButton" : "createAccount",
  );
  $("#auth-feedback").textContent = "";
}

function loadProgress() {
  try {
    const parsed = JSON.parse(safeGetLocalStorage(progressKey) || "{}");
    return {
      completed: Array.isArray(parsed.completed)
        ? parsed.completed.filter(
            (item) =>
              Number.isInteger(item) && item >= 0 && item < lessons.length,
          )
        : [],
      bestSpeed: Number.isFinite(parsed.bestSpeed) ? parsed.bestSpeed : 0,
      accuracyTotal: Number.isFinite(parsed.accuracyTotal)
        ? parsed.accuracyTotal
        : 0,
      accuracyCount: Number.isFinite(parsed.accuracyCount)
        ? parsed.accuracyCount
        : 0,
      xp: Number.isFinite(parsed.xp) ? parsed.xp : 0,
    };
  } catch (error) {
    console.error("تعذّر تحميل تقدّمك المحفوظ:", error);
    return {
      completed: [],
      bestSpeed: 0,
      accuracyTotal: 0,
      accuracyCount: 0,
      xp: 0,
    };
  }
}

function saveProgress() {
  try {
    if (!safeSetLocalStorage(progressKey, JSON.stringify(state.progress))) {
      showToast(t("errorSave"));
    }
  } catch (error) {
    console.error("تعذّر حفظ تقدّمك:", error);
    showToast(t("errorSave"));
  }
}

function getDailyCount() {
  try {
    const saved = JSON.parse(safeGetLocalStorage(dailyKey) || "{}");
    return saved.date === new Date().toDateString() &&
      Number.isInteger(saved.count)
      ? saved.count
      : 0;
  } catch (error) {
    console.error("تعذّر تحميل هدف اليوم:", error);
    return 0;
  }
}

function addDailyLesson() {
  try {
    safeSetLocalStorage(
      dailyKey,
      JSON.stringify({
        date: new Date().toDateString(),
        count: getDailyCount() + 1,
      }),
    );
  } catch (error) {
    console.error("تعذّر حفظ هدف اليوم:", error);
  }
}

function renderDashboard() {
  const list = $("#lesson-list");
  list.replaceChildren();
  const completedCount = state.progress.completed.length;
  const completedSet = new Set(state.progress.completed);
  const levelNames =
    state.locale === "ar"
      ? [
          "صف الأساس",
          "الصف العلوي",
          "الصف السفلي",
          "الجمل المختلطة واختبارات السرعة",
        ]
      : [
          "Home row",
          "Top row",
          "Bottom row",
          "Mixed sentences and speed tests",
        ];
  const stageNames =
    state.locale === "ar"
      ? [
          "تعرّف وتأسيس",
          "تثبيت الأصابع",
          "التناوب بين اليدين",
          "أنماط قصيرة",
          "كلمات شائعة",
          "سلاسل متدرجة",
          "جولات الدقة",
          "إيقاع ثابت",
          "تطبيق شامل",
          "اختبار المرحلة",
        ]
      : [
          "Explore and place",
          "Anchor the fingers",
          "Alternate hands",
          "Short patterns",
          "Common words",
          "Build word chains",
          "Accuracy rounds",
          "Steady rhythm",
          "Full application",
          "Stage checkpoint",
        ];
  const levelDescriptions =
    state.locale === "ar"
      ? [
          "a, s, d, f, j, k, l, ;",
          "توسّع تدريجي إلى الصف العلوي",
          "توسّع تدريجي إلى الصف السفلي",
          "تطبيق شامل واختبارات متقدمة",
        ]
      : [
          "a, s, d, f, j, k, l, ;",
          "Reach and return with control",
          "Complete the keyboard foundation",
          "Apply every row and build speed",
        ];
  document.querySelector("#practice .section-heading .eyebrow").textContent =
    state.locale === "ar" ? "٤ مستويات متدرجة" : "4 PROGRESSIVE LEVELS";
  document.querySelector(
    "#practice .lesson-count span:last-child",
  ).textContent =
    state.locale === "ar"
      ? `${lessons.length} درساً`
      : `${lessons.length} lessons`;
  for (let level = 1; level <= 4; level += 1) {
    const levelLessons = lessons
      .map((lesson, index) => ({ lesson, index }))
      .filter(({ lesson }) => lesson.level === level);
    if (!levelLessons.length) continue;
    const group = document.createElement("section");
    group.className = "lesson-level";
    const heading = document.createElement("div");
    heading.className = "lesson-level-heading";
    const levelLabel = document.createElement("span");
    levelLabel.textContent =
      state.locale === "ar" ? `المستوى ${level}` : `LEVEL ${level}`;
    const title = document.createElement("h3");
    title.textContent = levelNames[level - 1];
    const description = document.createElement("p");
    description.textContent = levelDescriptions[level - 1];
    heading.append(levelLabel, title, description);
    const videoLesson = levelLessons[0].lesson;
    const tutorial = document.createElement("div");
    tutorial.className = "level-tutorial";
    const video = document.createElement("iframe");
    video.src = `https://www.youtube-nocookie.com/embed/${videoLesson.tutorialVideoId}?rel=0`;
    video.title =
      state.locale === "ar"
        ? `شرح المستوى ${level}: ${videoLesson.tutorialVideoTitle}`
        : `Level ${level} tutorial: ${videoLesson.tutorialVideoTitle}`;
    video.loading = "lazy";
    video.referrerPolicy = "strict-origin-when-cross-origin";
    video.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    video.allowFullscreen = true;
    const videoLink = document.createElement("a");
    videoLink.href = `https://www.youtube.com/watch?v=${videoLesson.tutorialVideoId}`;
    videoLink.target = "_blank";
    videoLink.rel = "noopener noreferrer";
    videoLink.textContent =
      state.locale === "ar"
        ? "تعذّر تشغيل الفيديو؟ افتحه على YouTube"
        : "Video unavailable? Open on YouTube";
    tutorial.append(video, videoLink);
    for (let stage = 1; stage <= 10; stage += 1) {
      const stageLessons = levelLessons.filter(
        ({ lesson }) => Math.ceil(lesson.order / 10) === stage,
      );
      const stageBlock = document.createElement("details");
      stageBlock.className = "lesson-stage";
      const stageSummary = document.createElement("summary");
      const stageTitle = document.createElement("span");
      stageTitle.className = "stage-title";
      stageTitle.textContent = `${state.locale === "ar" ? `المرحلة ${stage}` : `STAGE ${stage}`} · ${stageNames[stage - 1]}`;
      const stageProgress = document.createElement("span");
      stageProgress.className = "stage-progress";
      const finishedInStage = stageLessons.filter(({ index }) =>
        completedSet.has(index),
      ).length;
      stageProgress.textContent = `${finishedInStage} / 10`;
      stageSummary.append(stageTitle, stageProgress);
      stageBlock.append(stageSummary);
      const lessonList = document.createElement("div");
      lessonList.className = "lesson-level-list";
      for (const { lesson, index } of stageLessons) {
        const completed = completedSet.has(index);
        const unlocked = index === 0 || completedSet.has(index - 1);
        const card = document.createElement("button");
        card.type = "button";
        card.className = `lesson-card${completed ? " completed" : ""}${!unlocked ? " locked" : ""}${!completed && unlocked ? " current" : ""}`;
        card.disabled = !unlocked;
        card.setAttribute(
          "aria-label",
          `${state.locale === "ar" ? (completed ? "مكتمل: " : unlocked ? "ابدأ: " : "مقفل: ") : completed ? "Completed: " : unlocked ? "Start: " : "Locked: "}${lesson.title}`,
        );
        const number = document.createElement("span");
        number.className = "lesson-number";
        number.textContent = completed
          ? "✓"
          : String(lesson.order).padStart(2, "0");
        const info = document.createElement("span");
        info.className = "lesson-info";
        const lessonTitle = document.createElement("strong");
        lessonTitle.textContent = lesson.title;
        const subtitle = document.createElement("span");
        subtitle.textContent = lesson.subtitle;
        info.append(lessonTitle, subtitle);
        const duration = document.createElement("span");
        duration.className = "lesson-duration";
        duration.textContent =
          state.locale === "ar"
            ? `${Math.ceil(lesson.durationSeconds / 60)} د`
            : `${Math.ceil(lesson.durationSeconds / 60)} min`;
        const status = document.createElement("span");
        status.className = "lesson-status";
        status.textContent = completed
          ? "✓"
          : unlocked
            ? state.locale === "ar"
              ? "←"
              : "→"
            : "🔒";
        card.append(number, info, duration, status);
        if (unlocked) card.addEventListener("click", () => openLesson(index));
        lessonList.append(card);
      }
      stageBlock.open = stageLessons.some(
        ({ index }) => index === 0 || completedSet.has(index - 1),
      );
      stageBlock.append(lessonList);
      if (finishedInStage === 10) {
        const stageAction = document.createElement("button");
        stageAction.type = "button";
        stageAction.className = "stage-complete-button";
        const nextIndex = stageLessons.at(-1).index + 1;
        stageAction.textContent =
          nextIndex < lessons.length
            ? state.locale === "ar"
              ? `أحسنت! ابدأ المرحلة التالية ←`
              : `Stage complete. Continue →`
            : state.locale === "ar"
              ? "أكملت المسار! عرض النتائج"
              : "Path complete. Review progress";
        stageAction.addEventListener("click", () => {
          if (nextIndex < lessons.length) openLesson(nextIndex);
          else {
            goHome();
            showToast(t("finishedPathToast"));
          }
        });
        stageBlock.append(stageAction);
      }
      group.append(stageBlock);
    }
    list.append(group);
    group.insertBefore(tutorial, group.children[1]);
  }
  const percentage = Math.round((completedCount / lessons.length) * 100);
  $("#progress-label").textContent = `${percentage}%`;
  $("#completed-label").textContent =
    state.locale === "ar"
      ? `${completedCount} من ${lessons.length} دروس`
      : `${completedCount} of ${lessons.length} lessons`;
  $("#overall-progress").style.width = `${percentage}%`;
  $("#best-speed").textContent = state.progress.bestSpeed
    ? state.progress.bestSpeed
    : "—";
  $("#average-accuracy").textContent = state.progress.accuracyCount
    ? `${Math.round(state.progress.accuracyTotal / state.progress.accuracyCount)}%`
    : "—";
  $("#xp-count").textContent = `${state.progress.xp} XP`;
  const dailyCount = getDailyCount();
  $("#daily-goal-value").textContent =
    state.locale === "ar"
      ? `${Math.min(dailyCount, 3)} / 3 دروس`
      : `${Math.min(dailyCount, 3)} / 3 lessons`;
  $("#goal-percent").textContent =
    `${Math.min(100, Math.round((dailyCount / 3) * 100))}%`;
  $("#goal-ring").style.background =
    `conic-gradient(var(--purple) ${Math.min(360, dailyCount * 120)}deg, #eceaf8 0deg)`;
}

function renderCodeSpell() {
  const selector = $("#code-challenge");
  const reference = $("#code-reference");
  if (!selector || !reference) return;
  reference.textContent = codeSpells[selector.value].code;
  $("#code-input").setAttribute(
    "aria-label",
    featureCopy[state.locale].codeInputLabel,
  );
}

function renderGhostCoach() {
  const totals = Object.fromEntries(
    Object.entries(state.historicalMistakes).map(([key, insight]) => [
      key,
      { ...insight },
    ]),
  );
  for (const [key, count] of Object.entries(state.mistakeCounts)) {
    totals[key] ||= { count: 0, delayTotal: 0, samples: 0 };
    totals[key].count += count;
  }
  for (const [key, timing] of Object.entries(state.keyTiming)) {
    totals[key] ||= { count: 0, delayTotal: 0, samples: 0 };
    totals[key].delayTotal += timing.total;
    totals[key].samples += timing.samples;
  }
  const [focusKey, insight] =
    Object.entries(totals).sort((a, b) => {
      const score = ([, item]) =>
        item.count * 1000 + (item.samples ? item.delayTotal / item.samples : 0);
      return score(b) - score(a);
    })[0] || [];
  const message = $("#ghost-message");
  if (!message) return;
  if (!focusKey) {
    message.textContent = featureCopy[state.locale].ghostEmpty;
    $("#ghost-progress").style.width = "8%";
    $("#ghost-detail").textContent = featureCopy[state.locale].ghostReady;
    return;
  }
  const averageDelay = insight.samples
    ? Math.round(insight.delayTotal / insight.samples)
    : 0;
  const score = Math.min(
    100,
    insight.count * 12 +
      (averageDelay >= 650 ? Math.round((averageDelay - 600) / 50) : 0),
  );
  message.textContent = featureCopy[state.locale].ghostFocus
    .replace(
      "{key}",
      focusKey === " " ? (state.locale === "ar" ? "مسافة" : "Space") : focusKey,
    )
    .replace("{score}", score);
  $("#ghost-progress").style.width = `${Math.max(8, score)}%`;
  $("#ghost-detail").textContent = featureCopy[state.locale].ghostGuide;
}

function runCodeSpell() {
  const spell = codeSpells[$("#code-challenge").value];
  const preview = $("#spell-preview");
  const matched = $("#code-input").value === spell.code;
  preview.classList.toggle("is-cast", matched);
  $("#spell-output").textContent = matched
    ? featureCopy[state.locale][spell.output]
    : featureCopy[state.locale].previewReady;
  $("#code-feedback").textContent =
    featureCopy[state.locale][matched ? "codeSuccess" : "codeMiss"];
}

function getAudioContext() {
  if (!state.audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) state.audioContext = new AudioContextClass();
  }
  if (state.audioContext?.state === "suspended") state.audioContext.resume();
  return state.audioContext;
}

function playKeySound(speed) {
  if (!state.sound) return;
  try {
    const context = getAudioContext();
    if (!context) return;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "square";
    oscillator.frequency.value = 700 + Math.min(600, speed * 5);
    gain.gain.setValueAtTime(0.012, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.035);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.04);
  } catch (error) {
    console.error("Could not play typing sound:", error);
  }
}

function setAmbientAudio(enabled) {
  state.ambient = enabled;
  const toggle = $("#ambient-toggle");
  toggle.setAttribute("aria-pressed", String(enabled));
  $("#ambient-label").textContent =
    featureCopy[state.locale][enabled ? "ambientOn" : "ambientOff"];
  if (!enabled) {
    state.ambientNodes.forEach((node) => {
      if (typeof node.stop === "function") {
        try {
          node.stop();
        } catch {}
      }
      node.disconnect();
    });
    state.ambientNodes = [];
    return;
  }
  try {
    const context = getAudioContext();
    if (!context) {
      showToast(
        state.locale === "ar"
          ? "المتصفح لا يدعم الصوت."
          : "Audio is not supported in this browser.",
      );
      state.ambient = false;
      toggle.setAttribute("aria-pressed", "false");
      $("#ambient-label").textContent = featureCopy[state.locale].ambientOff;
      return;
    }
    const gain = context.createGain();
    gain.gain.value = 0.006;
    gain.connect(context.destination);
    for (const frequency of [130.81, 196]) {
      const oscillator = context.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      oscillator.connect(gain);
      oscillator.start();
      state.ambientNodes.push(oscillator);
    }
    state.ambientNodes.push(gain);
  } catch (error) {
    console.error("Could not start ambient sound:", error);
    state.ambient = false;
    toggle.setAttribute("aria-pressed", "false");
    $("#ambient-label").textContent = featureCopy[state.locale].ambientOff;
  }
}

function trackTypingInsights(value, target) {
  const previous = state.lastTypedValue;
  const now = Date.now();
  let firstChanged = 0;
  while (
    firstChanged < previous.length &&
    firstChanged < value.length &&
    previous[firstChanged] === value[firstChanged]
  )
    firstChanged += 1;
  let sharedSuffix = 0;
  while (
    sharedSuffix < previous.length - firstChanged &&
    sharedSuffix < value.length - firstChanged &&
    previous[previous.length - 1 - sharedSuffix] ===
      value[value.length - 1 - sharedSuffix]
  )
    sharedSuffix += 1;
  const insertedText = value.slice(firstChanged, value.length - sharedSuffix);
  for (let offset = 0; offset < insertedText.length; offset += 1) {
    const targetIndex = firstChanged + offset;
    if (
      insertedText[offset] !== target[targetIndex] &&
      target[targetIndex] !== undefined
    ) {
      const key = target[targetIndex];
      state.mistakeCounts[key] = Math.min(
        1000,
        (state.mistakeCounts[key] || 0) + 1,
      );
    }
  }
  if (insertedText.length === 1 && state.lastInputAt) {
    const delay = now - state.lastInputAt;
    const key = target[firstChanged];
    if (key !== undefined && delay >= 60 && delay <= 15000) {
      state.keyTiming[key] ||= { total: 0, samples: 0 };
      state.keyTiming[key].total += delay;
      state.keyTiming[key].samples = Math.min(
        1000,
        state.keyTiming[key].samples + 1,
      );
    }
  }
  if (
    !state.breakShown &&
    previous.length >= 10 &&
    value.length > previous.length &&
    now - state.lastInputAt >= 3500
  ) {
    $("#fatigue-nudge").classList.remove("hidden");
    state.breakShown = true;
  }
  if (insertedText.length) {
    const stats = getMetrics(value);
    playKeySound(stats.speed);
  }
  state.lastTypedValue = value;
  state.lastInputAt = now;
  renderGhostCoach();
}

function collectKeyInsights() {
  const keys = new Set([
    ...Object.keys(state.mistakeCounts),
    ...Object.keys(state.keyTiming),
  ]);
  return [...keys].slice(0, 12).map((key) => {
    const timing = state.keyTiming[key] || { total: 0, samples: 0 };
    return {
      key,
      count: state.mistakeCounts[key] || 0,
      averageDelayMs: timing.samples
        ? Math.round(timing.total / timing.samples)
        : 0,
      samples: timing.samples,
    };
  });
}

function openLesson(index) {
  if (
    !lessons[index] ||
    (index > 0 && !state.progress.completed.includes(index - 1))
  )
    return;
  state.lessonIndex = index;
  state.startedAt = null;
  state.completedOnce = false;
  state.mistakeCounts = Object.create(null);
  state.keyTiming = Object.create(null);
  state.lastTypedValue = "";
  state.lastInputAt = 0;
  state.breakShown = false;
  $("#fatigue-nudge").classList.add("hidden");
  renderGhostCoach();
  clearInterval(state.timer);
  const lesson = state.locale === "en" ? englishLessons[index] : lessons[index];
  home.classList.add("hidden");
  lessonScreen.classList.remove("hidden");
  $(".lesson-breadcrumb span:first-child").textContent =
    state.locale === "ar" ? `المستوى ${lesson.level}` : `Level ${lesson.level}`;
  $("#lesson-breadcrumb-title").textContent = t("lessonNumber").replace(
    "{n}",
    String(lesson.order).padStart(2, "0"),
  );
  $("#lesson-eyebrow").textContent =
    `${state.locale === "ar" ? `الدرس ${String(lesson.order).padStart(2, "0")}` : `LESSON ${String(lesson.order).padStart(2, "0")}`} · ${lesson.focus}`;
  $("#lesson-title").textContent = lesson.title;
  $("#lesson-xp-value").textContent = `+${lesson.xp} XP`;
  $("#focus-title").textContent = lesson.focus;
  $("#focus-description").textContent = lesson.description;
  $("#challenge-description").textContent = lesson.challenge;
  $("#challenge-reward").textContent = `+${Math.ceil(lesson.xp / 2)} XP`;
  const focusKeys = lesson.keys;
  $("#focus-keys").replaceChildren(
    ...focusKeys.map((key) => {
      const item = document.createElement("span");
      item.textContent =
        key === "Space" ? (state.locale === "ar" ? "مسافة" : "Space") : key;
      return item;
    }),
  );
  renderTarget("");
  typingInput.value = "";
  typingInput.disabled = false;
  finishButton.disabled = true;
  finishButton.innerHTML = `<span>${t("finishFirst")}</span> <span aria-hidden="true">${state.locale === "ar" ? "←" : "→"}</span>`;
  updateMetrics("", 0);
  $("#typing-status").textContent = t("waiting");
  renderKeyboard(0);
  $("#next-lesson-button").disabled = false;
  $("#next-lesson-button").textContent =
    index === lessons.length - 1
      ? t("finishPath")
      : `${t("nextLesson")} ${state.locale === "ar" ? "←" : "→"}`;
  setTimeout(() => typingInput.focus(), 100);
}

function renderKeyboard(position) {
  const keyboard = $("#keyboard");
  keyboard.replaceChildren();
  const nextChar = currentLesson().target[position];
  const nextKey = nextChar === " " ? "Space" : nextChar;
  keyboardRows[state.locale].forEach((row) => {
    const rowElement = document.createElement("div");
    rowElement.className = "keyboard-row";
    for (const character of row.split(" ")) {
      const key = document.createElement("span");
      key.className = `key${character === nextKey ? " active" : ""}`;
      key.textContent = character;
      rowElement.append(key);
    }
    keyboard.append(rowElement);
  });
  const space = document.createElement("span");
  space.className = `key space-key${nextKey === "Space" ? " active" : ""}`;
  space.textContent = state.locale === "ar" ? "مسافة" : "Space";
  keyboard.append(space);
}

function renderTarget(value) {
  const target = currentLesson().target;
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < target.length; index += 1) {
    const character = document.createElement("span");
    const typed = value[index];
    character.className =
      typed === undefined
        ? ""
        : typed === target[index]
          ? "char-correct"
          : "char-incorrect";
    if (index === value.length && value.length < target.length)
      character.classList.add("char-current");
    character.textContent = target[index];
    fragment.append(character);
  }
  typingTarget.replaceChildren(fragment);
}

function getCorrectCount(value) {
  const target = currentLesson().target;
  let correct = 0;
  for (
    let index = 0;
    index < Math.min(value.length, target.length);
    index += 1
  ) {
    if (value[index] === target[index]) correct += 1;
  }
  return correct;
}

function getMetrics(value) {
  const target = currentLesson().target;
  const correct = getCorrectCount(value);
  const elapsedSeconds = state.startedAt
    ? Math.max(1, (Date.now() - state.startedAt) / 1000)
    : 0;
  return {
    correct,
    elapsedSeconds,
    speed: elapsedSeconds ? Math.round(correct / 5 / (elapsedSeconds / 60)) : 0,
    accuracy: value.length ? Math.round((correct / value.length) * 100) : 100,
    errors: Math.max(0, value.length - correct),
    complete: value.length === target.length,
  };
}

function updateMetrics(value, elapsedSeconds) {
  const stats = getMetrics(value);
  $("#live-speed").textContent = stats.speed;
  $("#live-accuracy").textContent = stats.accuracy;
  $("#live-errors").textContent = stats.errors;
  $("#live-time").textContent = formatTime(elapsedSeconds);
  $("#character-count").textContent =
    `${Math.min(value.length, currentLesson().target.length)} / ${currentLesson().target.length} ${t("characters")}`;
}

function formatTime(seconds) {
  const total = Math.floor(seconds);
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

function onTyping() {
  const lesson = currentLesson();
  let value = typingInput.value;
  if (value.length > lesson.target.length) {
    value = value.slice(0, lesson.target.length);
    typingInput.value = value;
  }
  if (!state.startedAt && value.length) {
    state.startedAt = Date.now();
    $("#typing-status").textContent = t("typingStatus");
    state.timer = setInterval(
      () =>
        updateMetrics(typingInput.value, (Date.now() - state.startedAt) / 1000),
      1000,
    );
  }
  trackTypingInsights(value, lesson.target);
  renderTarget(value);
  renderKeyboard(value.length);
  const stats = getMetrics(value);
  updateMetrics(value, stats.elapsedSeconds);
  finishButton.disabled = !stats.complete;
  finishButton.innerHTML = `<span>${stats.complete ? (state.locale === "ar" ? "تحقّق من نتيجتي" : "Check my result") : t("finishFirst")}</span> <span aria-hidden="true">${state.locale === "ar" ? "←" : "→"}</span>`;
  if (stats.complete) {
    $("#typing-status").textContent = t("typedComplete");
    if (!state.completedOnce) {
      state.completedOnce = true;
      finishLesson();
    }
  }
}

async function finishLesson() {
  const lesson = currentLesson();
  const stats = getMetrics(typingInput.value);
  if (!stats.complete) return;
  clearInterval(state.timer);
  if (state.ambient) setAmbientAudio(false);
  const passed = stats.accuracy >= 80;
  const isStageComplete = passed && lesson.order % 10 === 0;
  let awardedXp = 0;
  let achievedChallenge = false;
  const firstPass =
    passed && !state.progress.completed.includes(state.lessonIndex);
  if (state.sound || (isStageComplete && firstPass)) playCompletionSound();
  finishButton.disabled = true;
  finishButton.querySelector("span").textContent =
    state.locale === "ar" ? "جارٍ حفظ النتيجة..." : "Saving result...";
  try {
    const result = await apiRequest("/api/results", {
      method: "POST",
      body: JSON.stringify({
        lessonId: lesson.id,
        wpm: stats.speed,
        accuracy: stats.accuracy,
        errors: stats.errors,
        timeSeconds: Math.max(1, Math.round(stats.elapsedSeconds)),
        mistakeKeys: collectKeyInsights(),
      }),
    });
    awardedXp = result.xpAwarded;
    achievedChallenge = result.challengePassed;
    $("#result-stars").textContent =
      "★".repeat(result.stars) + "☆".repeat(3 - result.stars);
    $("#result-stars").setAttribute(
      "aria-label",
      state.locale === "ar"
        ? `${result.stars} من 3 نجوم`
        : `${result.stars} of 3 stars`,
    );
    if (passed) {
      state.progress.completed = result.progress.completedLessons
        .map((id) => lessons.findIndex((item) => item.id === id))
        .filter((completedIndex) => completedIndex >= 0);
      state.progress.xp = result.progress.xp;
      state.progress.bestSpeed = Math.max(
        state.progress.bestSpeed,
        stats.speed,
      );
      if (firstPass) addDailyLesson();
      saveProgress();
      renderDashboard();
    }
  } catch (error) {
    finishButton.disabled = false;
    finishButton.querySelector("span").textContent =
      state.locale === "ar"
        ? "تعذّر الحفظ — حاول مجدداً"
        : "Save failed — try again";
    showToast(error.message);
    return;
  }
  refreshAccountData().catch((error) =>
    console.error("Could not refresh account statistics:", error),
  );
  typingInput.disabled = true;
  $("#result-badge").classList.toggle("needs-practice", !passed);
  $("#result-badge").textContent = passed ? "✓" : "↻";
  $("#result-eyebrow").textContent =
    isStageComplete && firstPass
      ? state.locale === "ar"
        ? `أحسنت! اكتملت المرحلة ${Math.ceil(lesson.order / 10)}`
        : `Brilliant! Stage ${Math.ceil(lesson.order / 10)} complete`
      : passed
        ? achievedChallenge
          ? t("challengeSuccess")
          : t("lessonSuccess")
        : t("retryEyebrow");
  $("#result-title").textContent = passed
    ? t("resultSuccess")
    : t("resultRetry");
  $("#result-copy").textContent = passed
    ? isStageComplete && firstPass
      ? state.locale === "ar"
        ? `أنهيت 10 دروس من المستوى ${lesson.level}. تقدّمك رائع؛ المرحلة التالية جاهزة لك!`
        : `You completed 10 lessons in level ${lesson.level}. Your progress is excellent. The next stage is ready!`
      : achievedChallenge
        ? t("challengeCopy")
        : t("passCopy")
    : t("retryCopy");
  $("#result-speed").textContent = stats.speed;
  $("#result-accuracy").textContent = `${stats.accuracy}%`;
  $("#result-xp").textContent = `+${awardedXp}`;
  $("#next-lesson-button").disabled = !passed;
  $("#next-lesson-button").textContent =
    isStageComplete && firstPass
      ? state.locale === "ar"
        ? "ابدأ المرحلة التالية ←"
        : "Continue to next stage →"
      : state.lessonIndex === lessons.length - 1
        ? t("finishPath")
        : `${t("nextLesson")} ${state.locale === "ar" ? "←" : "→"}`;
  resultModal.classList.remove("hidden");
}

function closeResult() {
  resultModal.classList.add("hidden");
}

function goHome() {
  closeResult();
  clearInterval(state.timer);
  if (state.ambient) setAmbientAudio(false);
  lessonScreen.classList.add("hidden");
  home.classList.remove("hidden");
  renderDashboard();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2400);
}

$("#back-button").addEventListener("click", goHome);
$("#result-home-button").addEventListener("click", goHome);
$("#modal-close").addEventListener("click", closeResult);
$("#restart-button").addEventListener("click", () =>
  openLesson(state.lessonIndex),
);
typingInput.addEventListener("input", onTyping);
$("#code-challenge").addEventListener("change", () => {
  $("#code-input").value = "";
  $("#code-feedback").textContent = featureCopy[state.locale].codeHint;
  $("#spell-preview").classList.remove("is-cast");
  $("#spell-output").textContent = featureCopy[state.locale].previewReady;
  renderCodeSpell();
});
$("#cast-spell").addEventListener("click", runCodeSpell);
$("#dismiss-break").addEventListener("click", () =>
  $("#fatigue-nudge").classList.add("hidden"),
);
finishButton.addEventListener("click", finishLesson);
$("#next-lesson-button").addEventListener("click", () => {
  if ($("#next-lesson-button").disabled) return;
  if (state.lessonIndex === lessons.length - 1) {
    goHome();
    showToast(t("finishedPathToast"));
    return;
  }
  closeResult();
  openLesson(state.lessonIndex + 1);
});
$("#sound-toggle").addEventListener("click", () => {
  state.sound = !state.sound;
  $("#sound-toggle").setAttribute("aria-pressed", String(state.sound));
  $("#sound-label").textContent = state.sound ? t("soundOn") : t("soundOff");
  showToast(state.sound ? t("challengeToastOn") : t("challengeToastOff"));
});
$("#ambient-toggle").addEventListener("click", () =>
  setAmbientAudio(!state.ambient),
);
$("#result-modal").addEventListener("click", (event) => {
  if (event.target === resultModal) closeResult();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !resultModal.classList.contains("hidden"))
    closeResult();
});

async function enterApp(name, email) {
  sessionStorage.setItem("keypath-name", name || email.split("@")[0]);
  sessionStorage.setItem("keypath-email", email);
  await refreshAccountData();
  $("#auth-screen").classList.add("hidden");
  $("#app-shell").classList.remove("hidden");
  applyLocale();
}

async function apiRequest(path, options = {}) {
  let response;
  const isLocalFrontend = ["localhost", "127.0.0.1"].includes(
    window.location.hostname,
  );
  const configuredApiBase = document
    .querySelector('meta[name="api-base-url"]')
    ?.content.trim()
    .replace(/\/+$/, "");
  const standaloneFrontendPorts = new Set(["5500", "5501", "5173", "8080"]);
  const apiBase =
    configuredApiBase ||
    (isLocalFrontend && standaloneFrontendPorts.has(window.location.port)
      ? `http://${window.location.hostname}:3000`
      : "");
  try {
    response = await fetch(`${apiBase}${path}`, {
      ...options,
      credentials: "include",
      headers: { "Content-Type": "application/json", ...options.headers },
    });
  } catch (error) {
    throw new Error(t("serverUnavailable"));
  }
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const localizedErrors = {
      400: t("invalidRequest"),
      401: t("authFailed"),
      403: t("lessonLocked"),
      409: t("duplicateAccount"),
      429: t("tooManyRequests"),
    };
    const error = new Error(
      localizedErrors[response.status] || payload.message || t("requestFailed"),
    );
    error.status = response.status;
    throw error;
  }
  return payload;
}

async function refreshAccountData() {
  const [profile, history, englishCatalog, arabicCatalog] = await Promise.all([
    apiRequest("/api/profile"),
    apiRequest("/api/results/history?limit=100"),
    apiRequest("/api/lessons?lang=en"),
    apiRequest("/api/lessons?lang=ar"),
  ]);
  if (
    englishCatalog.lessons.length !== arabicCatalog.lessons.length ||
    englishCatalog.lessons.length < 1
  )
    throw new Error(t("lessonCatalogError"));
  const englishLessonsFromApi = [];
  const arabicLessonsFromApi = [];
  for (let index = 0; index < englishCatalog.lessons.length; index += 1) {
    const english = englishCatalog.lessons[index];
    const arabic = arabicCatalog.lessons[index];
    if (
      !english?.id ||
      english.id !== arabic?.id ||
      english.level !== arabic.level ||
      english.order !== arabic.order
    )
      throw new Error(t("lessonCatalogError"));
    englishLessonsFromApi.push({
      ...english,
      duration: `${Math.ceil(english.durationSeconds / 60)} min`,
    });
    arabicLessonsFromApi.push({
      ...arabic,
      duration: `${Math.ceil(arabic.durationSeconds / 60)} دقيقة`,
    });
  }
  englishLessons.splice(0, englishLessons.length, ...englishLessonsFromApi);
  lessons.splice(0, lessons.length, ...arabicLessonsFromApi);
  sessionStorage.setItem("keypath-name", profile.user.name);
  $("#avatar").textContent = profile.user.name.slice(0, 1);
  $("#best-speed").textContent = profile.statistics.bestWpm || "—";
  $("#average-accuracy").textContent =
    profile.statistics.averageAccuracy === null
      ? "—"
      : `${profile.statistics.averageAccuracy}%`;
  $("#total-practice-time").textContent = Math.floor(
    profile.statistics.totalPracticeSeconds / 60,
  );
  state.progress.bestSpeed = profile.statistics.bestWpm;
  state.progress.xp = profile.statistics.xp;
  state.progress.accuracyCount = profile.statistics.sessions;
  state.progress.accuracyTotal =
    (profile.statistics.averageAccuracy || 0) * profile.statistics.sessions;
  state.historicalMistakes = Object.create(null);
  for (const result of history.results) {
    for (const item of result.mistakeKeys || []) {
      state.historicalMistakes[item.key] ||= {
        count: 0,
        delayTotal: 0,
        samples: 0,
      };
      state.historicalMistakes[item.key].count += item.count;
      const sampleCount = item.samples || 0;
      state.historicalMistakes[item.key].delayTotal +=
        (item.averageDelayMs || 0) * sampleCount;
      state.historicalMistakes[item.key].samples += sampleCount;
    }
  }
  renderGhostCoach();
  $("#completed-label").textContent =
    state.locale === "ar"
      ? `${history.progress.completedLessons} من ${lessons.length} دروس`
      : `${history.progress.completedLessons} of ${lessons.length} lessons`;
  const completedIds = new Set(history.progress.completedLessonIds);
  const completed = lessons
    .map((lesson, index) => (completedIds.has(lesson.id) ? index : -1))
    .filter((index) => index >= 0);
  const completedCount = completed.length;
  $("#progress-label").textContent =
    `${Math.round((completedCount / lessons.length) * 100)}%`;
  $("#overall-progress").style.width =
    `${Math.round((completedCount / lessons.length) * 100)}%`;
  state.progress.completed = completed;
  renderDashboard();
  const recentResults = history.results.slice(0, 10);
  $("#history-list").replaceChildren(
    ...recentResults.map((result) => {
      const item = document.createElement("li");
      const lessonName =
        (state.locale === "ar" ? lessons : englishLessons).find(
          (lesson) => lesson.id === result.lessonId,
        )?.title || result.lessonId;
      const date = new Date(result.createdAt).toLocaleDateString(
        state.locale === "ar" ? "ar" : "en",
      );
      item.textContent = `${lessonName} · ${result.wpm}${t("wpm")} · ${result.accuracy}% · ${date}`;
      return item;
    }),
  );
  $("#history-empty").classList.toggle("hidden", recentResults.length > 0);
}

$("#auth-mode-toggle").addEventListener("click", () => {
  state.authMode = state.authMode === "signin" ? "signup" : "signin";
  updateAuthMode();
});
$("#auth-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!$("#auth-form").reportValidity()) return;
  const submit = $("#auth-submit");
  submit.disabled = true;
  $("#auth-feedback").textContent = "";
  const credentials = {
    email: $("#auth-email").value.trim(),
    password: $("#auth-password").value,
  };
  if (state.authMode === "signup")
    credentials.name = $("#auth-name").value.trim();
  try {
    const { user } = await apiRequest(
      `/api/auth/${state.authMode === "signup" ? "register" : "login"}`,
      {
        method: "POST",
        body: JSON.stringify(credentials),
      },
    );
    await enterApp(user.name, user.email);
  } catch (error) {
    $("#auth-feedback").classList.remove("success");
    $("#auth-feedback").textContent = error.message;
  } finally {
    submit.disabled = false;
  }
});
document.querySelectorAll(".oauth-button").forEach((button) => {
  button.addEventListener("click", () => {
    const message =
      button.dataset.provider === "Google"
        ? t("oauthGoogle")
        : t("oauthMicrosoft");
    $("#auth-feedback").classList.remove("success");
    $("#auth-feedback").textContent = message;
  });
});
$("#password-toggle").addEventListener("click", () => {
  const password = $("#auth-password");
  const visible = password.type === "password";
  password.type = visible ? "text" : "password";
  $("#password-toggle").textContent = t(
    visible ? "hidePassword" : "showPassword",
  );
  $("#password-toggle").setAttribute(
    "aria-label",
    t(visible ? "hidePassword" : "showPassword"),
  );
});
$("#auth-language-toggle").addEventListener("click", () => {
  state.locale = state.locale === "en" ? "ar" : "en";
  safeSetLocalStorage("keypath-locale", state.locale);
  applyLocale();
});
$("#language-toggle").addEventListener("click", () => {
  state.locale = state.locale === "en" ? "ar" : "en";
  safeSetLocalStorage("keypath-locale", state.locale);
  applyLocale();
});
function toggleTheme() {
  state.theme = state.theme === "light" ? "dark" : "light";
  safeSetLocalStorage("keypath-theme", state.theme);
  updateThemeControls();
}
$("#auth-theme-toggle").addEventListener("click", toggleTheme);
$("#theme-toggle").addEventListener("click", toggleTheme);
$("#signout-button").addEventListener("click", () => {
  apiRequest("/api/auth/logout", { method: "POST" })
    .catch((error) => {
      console.error("Sign-out request failed:", error);
    })
    .finally(() => {
      sessionStorage.removeItem("keypath-name");
      sessionStorage.removeItem("keypath-email");
      $("#app-shell").classList.add("hidden");
      $("#auth-screen").classList.remove("hidden");
      $("#auth-password").value = "";
      $("#auth-feedback").textContent = "";
      state.authMode = "signin";
      updateAuthMode();
    });
});

applyLocale();
apiRequest("/api/auth/me")
  .then(({ user }) => {
    return enterApp(user.name, user.email);
  })
  .catch((error) => {
    if (error.status !== 401) {
      console.error("Could not restore the login session:", error);
      $("#auth-feedback").textContent = error.message;
    }
  });

function playCompletionSound() {
  if (typeof window.AudioContext !== "function") return;
  try {
    const context = new window.AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = 660;
    gain.gain.setValueAtTime(0.08, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.22);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.22);
    oscillator.addEventListener("ended", () => context.close());
  } catch (error) {
    console.error("تعذّر تشغيل تنبيه إكمال المرحلة:", error);
  }
}

renderDashboard();
