export const translations = {
  en: {
    nav: {
      home: "Home",
      features: "Features",
      subscribe: "Join Waitlist", // 🆕 novo
      dashboard: "Dashboard",
      analytics: "Analytics",
    },
    hero: {
      title: "Strategic Lesson Planning",
      subtitle: "Powered by AI",
      description:
        "Transform your teaching with AI-powered transcription, IB compliance checks, and adaptive learning insights.",
      cta: "Get Started",
      demo: "Watch Demo",
    },
    features: {
      title: "Powerful Features for Modern Education",
      transcription: {
        title: "Auto Transcription",
        description:
          "Record and transcribe classes automatically with AI-powered accuracy.",
      },
      structure: {
        title: "Content Structuring",
        description:
          "Automatically organize lessons into logical sections and topics.",
      },
      compliance: {
        title: "IB Compliance",
        description:
          "Verify alignment with International Baccalaureate standards.",
      },
      interaction: {
        title: "Student Questions",
        description: "Enable real-time and asynchronous student engagement.",
      },
      adaptive: {
        title: "Adaptive Learning",
        description:
          "Personalized recommendations based on student performance.",
      },
      analytics: {
        title: "Performance Analytics",
        description: "Comprehensive insights for teachers and students.",
      },
    },
    dashboard: {
      title: "Teacher Dashboard",
      myClasses: "My Classes",
      newClass: "New Class",
      students: "Students",
      questions: "Questions",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      features: "Características",
      subscribe: "Unirse a la lista", // 🆕 novo
      dashboard: "Panel",
      analytics: "Analíticas",
    },

    hero: {
      title: "Planificación Estratégica de Lecciones",
      subtitle: "Impulsado por IA",
      description:
        "Transforma tu enseñanza con transcripción impulsada por IA, verificación de cumplimiento IB e insights de aprendizaje adaptativo.",
      cta: "Comenzar",
      demo: "Ver Demo",
    },
    features: {
      title: "Características Poderosas para la Educación Moderna",
      transcription: {
        title: "Transcripción Automática",
        description:
          "Graba y transcribe clases automáticamente con precisión de IA.",
      },
      structure: {
        title: "Estructuración de Contenido",
        description:
          "Organiza lecciones automáticamente en secciones y temas lógicos.",
      },
      compliance: {
        title: "Cumplimiento IB",
        description:
          "Verifica la alineación con los estándares del Bachillerato Internacional.",
      },
      interaction: {
        title: "Preguntas de Estudiantes",
        description:
          "Habilita la participación estudiantil en tiempo real y asíncrona.",
      },
      adaptive: {
        title: "Aprendizaje Adaptativo",
        description:
          "Recomendaciones personalizadas basadas en el rendimiento del estudiante.",
      },
      analytics: {
        title: "Analíticas de Rendimiento",
        description: "Información completa para profesores y estudiantes.",
      },
    },
    dashboard: {
      title: "Panel del Profesor",
      myClasses: "Mis Clases",
      newClass: "Nueva Clase",
      students: "Estudiantes",
      questions: "Preguntas",
    },
  },
};

export type TranslationKey = typeof translations.en;
