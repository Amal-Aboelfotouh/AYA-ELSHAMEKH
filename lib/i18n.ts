export type Language = "en" | "ar"

export interface Translations {
  // Navigation
  nav: {
    howItWorks: string
    features: string
    reviews: string
    forDoctors: string
    getStarted: string
    back: string
  }
  // Landing Page
  landing: {
    fdaApproved: string
    heroTitle: string
    heroSubtitle: string
    heroDescription: string
    startTherapy: string
    watchDemo: string
    users: string
    rating: string
    howItWorksTitle: string
    howItWorksSubtitle: string
    connectSetup: string
    connectDescription: string
    personalizedTherapy: string
    personalizedDescription: string
    trackProgress: string
    trackDescription: string
    featuresTitle: string
    featuresSubtitle: string
    ctaTitle: string
    ctaDescription: string
    orderDevice: string
    downloadApp: string
  }
  // Therapy Interface
  therapy: {
    therapySession: string
    deviceStatus: string
    connected: string
    disconnected: string
    battery: string
    intensity: string
    sessionTime: string
    duration: string
    selectProgram: string
    selectProgramDescription: string
    sessionControl: string
    progress: string
    intensityLevel: string
    gentle: string
    moderate: string
    strong: string
    startSession: string
    pause: string
    resume: string
    stop: string
    realTimeFeedback: string
    pulseRate: string
    painLevel: string
    effectiveness: string
  }
  // Dashboard
  dashboard: {
    progressDashboard: string
    totalSessions: string
    totalDuration: string
    painReduction: string
    effectiveness: string
    streakDays: string
    overview: string
    painTracking: string
    sessions: string
    insights: string
    painLevelTrend: string
    sessionEffectiveness: string
    programUsage: string
    recentSessions: string
    aiInsights: string
    goalsAchievements: string
  }
  // Onboarding
  onboarding: {
    welcomeTitle: string
    welcomeDescription: string
    chooseLanguage: string
    personalInfo: string
    personalInfoDescription: string
    firstName: string
    lastName: string
    email: string
    dateOfBirth: string
    gender: string
    painAssessment: string
    painAssessmentDescription: string
    whereIsPain: string
    currentPainLevel: string
    painDuration: string
    medicalHistory: string
    medicalHistoryDescription: string
    medicalConditions: string
    currentMedications: string
    previousTreatments: string
    therapyGoals: string
    therapyGoalsDescription: string
    yourGoals: string
    activityLevel: string
    privacyConsent: string
    privacyDescription: string
    termsOfService: string
    medicalDataSharing: string
    marketingCommunications: string
    completeSetup: string
    next: string
    previous: string
  }
  // Doctor Portal
  doctor: {
    doctorPortal: string
    totalPatients: string
    activeSessions: string
    avgPainReduction: string
    alerts: string
    patientManagement: string
    analytics: string
    reports: string
    patientManagementDescription: string
    searchPatients: string
    allPatients: string
    active: string
    needsAttention: string
    inactive: string
    patient: string
    condition: string
    lastSession: string
    progress: string
    status: string
    riskLevel: string
    actions: string
  }
  // Community
  community: {
    community: string
    activeMembers: string
    supportGroups: string
    postsThisWeek: string
    successStories: string
    communityFeed: string
    resources: string
    events: string
    newPost: string
    shareWithCommunity: string
    category: string
    yourMessage: string
    sharePost: string
    searchPosts: string
    allCategories: string
    milestones: string
    tips: string
    education: string
    support: string
    joinGroup: string
    learnMore: string
    register: string
    addToCalendar: string
  }
  // Common
  common: {
    loading: string
    error: string
    success: string
    cancel: string
    save: string
    delete: string
    edit: string
    view: string
    close: string
    yes: string
    no: string
    male: string
    female: string
    other: string
    preferNotToSay: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      howItWorks: "How It Works",
      features: "Features",
      reviews: "Reviews",
      forDoctors: "For Doctors",
      getStarted: "Get Started",
      back: "Back",
    },
    landing: {
      fdaApproved: "FDA Approved Technology",
      heroTitle: "Advanced Pain Relief",
      heroSubtitle: "Therapy",
      heroDescription:
        "Revolutionary TENS device with intelligent app integration for personalized pain management therapy. Trusted by healthcare professionals worldwide.",
      startTherapy: "Start Your Therapy",
      watchDemo: "Watch Demo",
      users: "users",
      rating: "rating",
      howItWorksTitle: "How Nervia Works",
      howItWorksSubtitle: "Three simple steps to personalized pain relief therapy",
      connectSetup: "Connect & Setup",
      connectDescription: "Pair your Nervia device with the app and complete your personalized health profile",
      personalizedTherapy: "Personalized Therapy",
      personalizedDescription:
        "AI-powered therapy recommendations based on your pain type, intensity, and medical history",
      trackProgress: "Track Progress",
      trackDescription:
        "Monitor your pain levels, therapy effectiveness, and share insights with your healthcare provider",
      featuresTitle: "Advanced Features",
      featuresSubtitle: "Cutting-edge technology designed for optimal pain management",
      ctaTitle: "Ready to Start Your Pain-Free Journey?",
      ctaDescription: "Join thousands of users who have found relief with Nervia's advanced therapy technology",
      orderDevice: "Order Nervia Device",
      downloadApp: "Download App",
    },
    therapy: {
      therapySession: "Therapy Session",
      deviceStatus: "Device Status",
      connected: "Connected",
      disconnected: "Disconnected",
      battery: "Battery",
      intensity: "Intensity",
      sessionTime: "Session Time",
      duration: "Duration",
      selectProgram: "Select Therapy Program",
      selectProgramDescription: "Choose the program that best matches your current needs",
      sessionControl: "Session Control",
      progress: "Progress",
      intensityLevel: "Intensity Level",
      gentle: "Gentle",
      moderate: "Moderate",
      strong: "Strong",
      startSession: "Start Session",
      pause: "Pause",
      resume: "Resume",
      stop: "Stop",
      realTimeFeedback: "Real-time Feedback",
      pulseRate: "Pulse Rate",
      painLevel: "Pain Level",
      effectiveness: "Effectiveness",
    },
    dashboard: {
      progressDashboard: "Progress Dashboard",
      totalSessions: "Total Sessions",
      totalDuration: "Total Duration",
      painReduction: "Pain Reduction",
      effectiveness: "Effectiveness",
      streakDays: "Streak Days",
      overview: "Overview",
      painTracking: "Pain Tracking",
      sessions: "Sessions",
      insights: "Insights",
      painLevelTrend: "Pain Level Trend",
      sessionEffectiveness: "Session Effectiveness",
      programUsage: "Program Usage",
      recentSessions: "Recent Sessions",
      aiInsights: "AI Insights",
      goalsAchievements: "Goals & Achievements",
    },
    onboarding: {
      welcomeTitle: "Welcome to Nervia",
      welcomeDescription: "Let's personalize your pain relief therapy experience",
      chooseLanguage: "Choose your preferred language",
      personalInfo: "Personal Information",
      personalInfoDescription: "Help us create your personalized profile",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      dateOfBirth: "Date of Birth",
      gender: "Gender",
      painAssessment: "Pain Assessment",
      painAssessmentDescription: "Tell us about your pain to personalize your therapy",
      whereIsPain: "Where do you experience pain? (Select all that apply)",
      currentPainLevel: "Current Pain Level (1-10)",
      painDuration: "How long have you had this pain?",
      medicalHistory: "Medical History",
      medicalHistoryDescription: "Help us understand your medical background for safer therapy",
      medicalConditions: "Do you have any of these medical conditions? (Select all that apply)",
      currentMedications: "Current Medications (Optional)",
      previousTreatments: "Previous treatments you've tried (Select all that apply)",
      therapyGoals: "Therapy Goals",
      therapyGoalsDescription: "What do you hope to achieve with Nervia therapy?",
      yourGoals: "Your therapy goals (Select all that apply)",
      activityLevel: "Current Activity Level",
      privacyConsent: "Privacy & Consent",
      privacyDescription: "Review and accept our terms to complete setup",
      termsOfService: "Terms of Service & Privacy Policy",
      medicalDataSharing: "Medical Data Sharing",
      marketingCommunications: "Marketing Communications (Optional)",
      completeSetup: "Complete Setup",
      next: "Next",
      previous: "Previous",
    },
    doctor: {
      doctorPortal: "Doctor Portal",
      totalPatients: "Total Patients",
      activeSessions: "Active Sessions",
      avgPainReduction: "Avg Pain Reduction",
      alerts: "Alerts",
      patientManagement: "Patient Management",
      analytics: "Analytics",
      reports: "Reports",
      patientManagementDescription: "Monitor and manage your patients' therapy progress",
      searchPatients: "Search patients by name or condition...",
      allPatients: "All Patients",
      active: "Active",
      needsAttention: "Needs Attention",
      inactive: "Inactive",
      patient: "Patient",
      condition: "Condition",
      lastSession: "Last Session",
      progress: "Progress",
      status: "Status",
      riskLevel: "Risk Level",
      actions: "Actions",
    },
    community: {
      community: "Community",
      activeMembers: "Active Members",
      supportGroups: "Support Groups",
      postsThisWeek: "Posts This Week",
      successStories: "Success Stories",
      communityFeed: "Community Feed",
      resources: "Resources",
      events: "Events",
      newPost: "New Post",
      shareWithCommunity: "Share with the Community",
      category: "Category",
      yourMessage: "Your Message",
      sharePost: "Share Post",
      searchPosts: "Search posts...",
      allCategories: "All Categories",
      milestones: "Milestones",
      tips: "Tips & Advice",
      education: "Education",
      support: "Support",
      joinGroup: "Join Group",
      learnMore: "Learn More",
      register: "Register",
      addToCalendar: "Add to Calendar",
    },
    common: {
      loading: "Loading...",
      error: "Error",
      success: "Success",
      cancel: "Cancel",
      save: "Save",
      delete: "Delete",
      edit: "Edit",
      view: "View",
      close: "Close",
      yes: "Yes",
      no: "No",
      male: "Male",
      female: "Female",
      other: "Other",
      preferNotToSay: "Prefer not to say",
    },
  },
  ar: {
    nav: {
      howItWorks: "كيف يعمل",
      features: "الميزات",
      reviews: "التقييمات",
      forDoctors: "للأطباء",
      getStarted: "ابدأ الآن",
      back: "رجوع",
    },
    landing: {
      fdaApproved: "تقنية معتمدة من إدارة الغذاء والدواء",
      heroTitle: "علاج متقدم",
      heroSubtitle: "لتخفيف الألم",
      heroDescription:
        "جهاز TENS ثوري مع تطبيق ذكي متكامل لعلاج الألم المخصص. موثوق به من قبل المتخصصين في الرعاية الصحية في جميع أنحاء العالم.",
      startTherapy: "ابدأ العلاج",
      watchDemo: "شاهد العرض التوضيحي",
      users: "مستخدم",
      rating: "تقييم",
      howItWorksTitle: "كيف يعمل نيرفيا",
      howItWorksSubtitle: "ثلاث خطوات بسيطة للعلاج المخصص لتخفيف الألم",
      connectSetup: "الاتصال والإعداد",
      connectDescription: "اربط جهاز نيرفيا بالتطبيق وأكمل ملفك الصحي المخصص",
      personalizedTherapy: "العلاج المخصص",
      personalizedDescription: "توصيات علاجية مدعومة بالذكاء الاصطناعي بناءً على نوع الألم وشدته وتاريخك الطبي",
      trackProgress: "تتبع التقدم",
      trackDescription: "راقب مستويات الألم وفعالية العلاج وشارك الرؤى مع مقدم الرعاية الصحية",
      featuresTitle: "الميزات المتقدمة",
      featuresSubtitle: "تقنية متطورة مصممة لإدارة الألم المثلى",
      ctaTitle: "هل أنت مستعد لبدء رحلتك الخالية من الألم؟",
      ctaDescription: "انضم إلى آلاف المستخدمين الذين وجدوا الراحة مع تقنية نيرفيا المتقدمة للعلاج",
      orderDevice: "اطلب جهاز نيرفيا",
      downloadApp: "تحميل التطبيق",
    },
    therapy: {
      therapySession: "جلسة العلاج",
      deviceStatus: "حالة الجهاز",
      connected: "متصل",
      disconnected: "غير متصل",
      battery: "البطارية",
      intensity: "الشدة",
      sessionTime: "وقت الجلسة",
      duration: "المدة",
      selectProgram: "اختر برنامج العلاج",
      selectProgramDescription: "اختر البرنامج الذي يناسب احتياجاتك الحالية",
      sessionControl: "التحكم في الجلسة",
      progress: "التقدم",
      intensityLevel: "مستوى الشدة",
      gentle: "لطيف",
      moderate: "متوسط",
      strong: "قوي",
      startSession: "بدء الجلسة",
      pause: "إيقاف مؤقت",
      resume: "استئناف",
      stop: "إيقاف",
      realTimeFeedback: "التغذية الراجعة في الوقت الفعلي",
      pulseRate: "معدل النبض",
      painLevel: "مستوى الألم",
      effectiveness: "الفعالية",
    },
    dashboard: {
      progressDashboard: "لوحة التقدم",
      totalSessions: "إجمالي الجلسات",
      totalDuration: "إجمالي المدة",
      painReduction: "تقليل الألم",
      effectiveness: "الفعالية",
      streakDays: "أيام متتالية",
      overview: "نظرة عامة",
      painTracking: "تتبع الألم",
      sessions: "الجلسات",
      insights: "الرؤى",
      painLevelTrend: "اتجاه مستوى الألم",
      sessionEffectiveness: "فعالية الجلسة",
      programUsage: "استخدام البرنامج",
      recentSessions: "الجلسات الأخيرة",
      aiInsights: "رؤى الذكاء الاصطناعي",
      goalsAchievements: "الأهداف والإنجازات",
    },
    onboarding: {
      welcomeTitle: "مرحباً بك في نيرفيا",
      welcomeDescription: "دعنا نخصص تجربة العلاج لتخفيف الألم الخاصة بك",
      chooseLanguage: "اختر لغتك المفضلة",
      personalInfo: "المعلومات الشخصية",
      personalInfoDescription: "ساعدنا في إنشاء ملفك الشخصي المخصص",
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      email: "عنوان البريد الإلكتروني",
      dateOfBirth: "تاريخ الميلاد",
      gender: "الجنس",
      painAssessment: "تقييم الألم",
      painAssessmentDescription: "أخبرنا عن ألمك لتخصيص العلاج",
      whereIsPain: "أين تشعر بالألم؟ (اختر كل ما ينطبق)",
      currentPainLevel: "مستوى الألم الحالي (1-10)",
      painDuration: "منذ متى وأنت تعاني من هذا الألم؟",
      medicalHistory: "التاريخ الطبي",
      medicalHistoryDescription: "ساعدنا في فهم خلفيتك الطبية للعلاج الآمن",
      medicalConditions: "هل لديك أي من هذه الحالات الطبية؟ (اختر كل ما ينطبق)",
      currentMedications: "الأدوية الحالية (اختياري)",
      previousTreatments: "العلاجات السابقة التي جربتها (اختر كل ما ينطبق)",
      therapyGoals: "أهداف العلاج",
      therapyGoalsDescription: "ما الذي تأمل في تحقيقه مع علاج نيرفيا؟",
      yourGoals: "أهدافك العلاجية (اختر كل ما ينطبق)",
      activityLevel: "مستوى النشاط الحالي",
      privacyConsent: "الخصوصية والموافقة",
      privacyDescription: "راجع واقبل شروطنا لإكمال الإعداد",
      termsOfService: "شروط الخدمة وسياسة الخصوصية",
      medicalDataSharing: "مشاركة البيانات الطبية",
      marketingCommunications: "الاتصالات التسويقية (اختياري)",
      completeSetup: "إكمال الإعداد",
      next: "التالي",
      previous: "السابق",
    },
    doctor: {
      doctorPortal: "بوابة الطبيب",
      totalPatients: "إجمالي المرضى",
      activeSessions: "الجلسات النشطة",
      avgPainReduction: "متوسط تقليل الألم",
      alerts: "التنبيهات",
      patientManagement: "إدارة المرضى",
      analytics: "التحليلات",
      reports: "التقارير",
      patientManagementDescription: "راقب وأدر تقدم العلاج لمرضاك",
      searchPatients: "البحث عن المرضى بالاسم أو الحالة...",
      allPatients: "جميع المرضى",
      active: "نشط",
      needsAttention: "يحتاج انتباه",
      inactive: "غير نشط",
      patient: "المريض",
      condition: "الحالة",
      lastSession: "آخر جلسة",
      progress: "التقدم",
      status: "الحالة",
      riskLevel: "مستوى المخاطر",
      actions: "الإجراءات",
    },
    community: {
      community: "المجتمع",
      activeMembers: "الأعضاء النشطون",
      supportGroups: "مجموعات الدعم",
      postsThisWeek: "المنشورات هذا الأسبوع",
      successStories: "قصص النجاح",
      communityFeed: "تغذية المجتمع",
      resources: "الموارد",
      events: "الأحداث",
      newPost: "منشور جديد",
      shareWithCommunity: "شارك مع المجتمع",
      category: "الفئة",
      yourMessage: "رسالتك",
      sharePost: "شارك المنشور",
      searchPosts: "البحث في المنشورات...",
      allCategories: "جميع الفئات",
      milestones: "المعالم",
      tips: "النصائح والمشورة",
      education: "التعليم",
      support: "الدعم",
      joinGroup: "انضم للمجموعة",
      learnMore: "تعلم المزيد",
      register: "سجل",
      addToCalendar: "أضف إلى التقويم",
    },
    common: {
      loading: "جاري التحميل...",
      error: "خطأ",
      success: "نجح",
      cancel: "إلغاء",
      save: "حفظ",
      delete: "حذف",
      edit: "تعديل",
      view: "عرض",
      close: "إغلاق",
      yes: "نعم",
      no: "لا",
      male: "ذكر",
      female: "أنثى",
      other: "آخر",
      preferNotToSay: "أفضل عدم القول",
    },
  },
}

export function getTranslation(language: Language): Translations {
  return translations[language] || translations.en
}

export function isRTL(language: Language): boolean {
  return language === "ar"
}
