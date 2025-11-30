export type Language = 'en' | 'es' | 'pt';

export const translations = {
  en: {
    nav: { home: "Home", features: "Features", subscribe: "Join Waitlist" },
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
        description: "Record and transcribe classes automatically with AI-powered accuracy.",
      },
      structure: {
        title: "Content Structuring",
        description: "Automatically organize lessons into logical sections and topics.",
      },
      compliance: {
        title: "IB Compliance",
        description: "Verify alignment with International Baccalaureate standards.",
      },
      interaction: {
        title: "Student Questions",
        description: "Enable real-time and asynchronous student engagement.",
      },
      adaptive: {
        title: "Adaptive Learning",
        description: "Personalized recommendations based on student performance.",
      },
      analytics: {
        title: "Performance Analytics",
        description: "Comprehensive insights for teachers and students.",
      },
    },
    subscribe: {
      title: "Join the Waitlist",
      description: "Secure your spot and be the first to test our AI-powered teaching tools.",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your e-mail",
      button: "Join",
      back: "Back to Home",
      successTitle: "You’re In!",
      successMessage: "Thanks for joining our waitlist. We’ll be in touch soon!",
    },
    dashboard: {
      title: "Dashboard",
      teacherName: "Angelo Antonello Borges",
      teacherRole: "Programming Teacher",
      totalTasks: "Total Tasks",
      classes: "Classes",
      students: "Students",
      pendingTasks: "Pending Tasks",
      overview: "Task Overview",
      deadlines: "Upcoming Deadlines",
      taskByClass: "Task by Class",
      taskPriority: "Task Priority",
    },
    tasks: {
      title: "New Lesson Task",
      audioInput: "Audio Input",
      materials: "Complementary Materials",
      lessonPlan: "Lesson Plan",
      process: "Process Task",
      resultTitle: "Consolidated Analysis",
      resultHelp: "Processed data will appear here after submission.",
    },
  },

  es: {
    nav: { home: "Inicio", features: "Características", subscribe: "Lista de Espera" },
    hero: {
      title: "Planificación Estratégica de Lecciones",
      subtitle: "Impulsado por IA",
      description:
        "Transforma tu enseñanza con transcripción impulsada por IA, verificación de cumplimiento IB e insights adaptativos.",
      cta: "Comenzar",
      demo: "Ver Demo",
    },
    features: {
      title: "Funciones Poderosas para la Educación Moderna",
      transcription: {
        title: "Transcripción Automática",
        description: "Graba y transcribe clases automáticamente con precisión de IA.",
      },
      structure: {
        title: "Estructuración de Contenido",
        description: "Organiza lecciones automáticamente en secciones y temas lógicos.",
      },
      compliance: {
        title: "Cumplimiento IB",
        description: "Verifica la alineación con los estándares del Bachillerato Internacional.",
      },
      interaction: {
        title: "Preguntas de Estudiantes",
        description: "Habilita la participación estudiantil en tiempo real y asíncrona.",
      },
      adaptive: {
        title: "Aprendizaje Adaptativo",
        description: "Recomendaciones personalizadas basadas en el rendimiento del estudiante.",
      },
      analytics: {
        title: "Analíticas de Rendimiento",
        description: "Información completa para profesores y estudiantes.",
      },
    },
    subscribe: {
      title: "Únete a la Lista de Espera",
      description:
        "Asegura tu lugar y sé de los primeros en probar nuestras herramientas de enseñanza impulsadas por IA.",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu e-mail",
      button: "Inscribirme",
      back: "Volver al Inicio",
      successTitle: "¡Estás dentro!",
      successMessage: "Gracias por unirte a nuestra lista de espera. ¡Te contactaremos pronto!",
    },
    dashboard: {
      title: "Panel de Control",
      teacherName: "Angelo Antonello Borges",
      teacherRole: "Profesor de Programación",
      totalTasks: "Tareas Totales",
      classes: "Clases",
      students: "Estudiantes",
      pendingTasks: "Tareas Pendientes",
      overview: "Resumen de Tareas",
      deadlines: "Próximas Fechas Límite",
      taskByClass: "Tareas por Clase",
      taskPriority: "Prioridad de las Tareas",
    },
    tasks: {
      title: "Nueva Tarea de Lección",
      audioInput: "Entrada de Audio",
      materials: "Materiales Complementarios",
      lessonPlan: "Plan de Lección",
      process: "Procesar Tarea",
      resultTitle: "Análisis Consolidado",
      resultHelp: "Los datos procesados aparecerán aquí después del envío.",
    },
  },

  pt: {
    nav: { home: "Início", features: "Funcionalidades", subscribe: "Fila de Espera" },
    hero: {
      title: "Planejamento Estratégico de Aulas",
      subtitle: "Potencializado por IA",
      description:
        "Transforme seu ensino com transcrição automática, verificação de conformidade e insights personalizados.",
      cta: "Começar",
      demo: "Ver Demo",
    },
    features: {
      title: "Funcionalidades Poderosas para a Educação Moderna",
      transcription: {
        title: "Transcrição Automática",
        description: "Grave e transcreva aulas automaticamente com precisão de IA.",
      },
      structure: {
        title: "Estruturação de Conteúdo",
        description: "Organize as aulas automaticamente em seções e tópicos lógicos.",
      },
      compliance: {
        title: "Conformidade IB",
        description: "Verifique o alinhamento com os padrões do Bacharelado Internacional.",
      },
      interaction: {
        title: "Interação com Alunos",
        description: "Permita engajamento em tempo real e de forma assíncrona.",
      },
      adaptive: {
        title: "Aprendizado Adaptativo",
        description: "Recomendações personalizadas com base no desempenho dos alunos.",
      },
      analytics: {
        title: "Análises de Desempenho",
        description: "Insights completos para professores e estudantes.",
      },
    },
    subscribe: {
      title: "Entre na Fila de Espera",
      description: "Garanta seu lugar e seja o primeiro a testar nossas ferramentas de ensino com IA.",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "Seu e-mail",
      button: "Me inscrever",
      back: "← Voltar para o menu Home",
      successTitle: "Inscrição realizada!",
      successMessage: "Você foi adicionado à fila de espera. Em breve entraremos em contato.",
    },
    dashboard: {
      title: "Painel de Controle",
      teacherName: "Angelo Antonello Borges",
      teacherRole: "Professor de Programação",
      totalTasks: "Tarefas Totais",
      classes: "Turmas",
      students: "Alunos",
      pendingTasks: "Tarefas Pendentes",
      overview: "Visão Geral das Tarefas",
      deadlines: "Próximos Prazos",
      taskByClass: "Tarefas por Turma",
      taskPriority: "Prioridade das Tarefas",
    },
    tasks: {
      title: "Nova Tarefa de Aula",
      audioInput: "Entrada de Áudio",
      materials: "Materiais Complementares",
      lessonPlan: "Plano de Aula",
      process: "Processar Tarefa",
      resultTitle: "Análise Consolidada",
      resultHelp: "Os dados processados aparecerão aqui após o envio.",
    },
  },
};