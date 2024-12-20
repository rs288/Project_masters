const questions = [
    {
        question: "¿Qué es Scrum?",
        options: ["Un marco ágil para gestionar proyectos.", "Un tipo de lenguaje de programación", "Un software de desarrollo web."],
        answer: 1
    },
    {
        question: "¿Cuál es el principal rol del Scrum Master?",
        options: ["Tomar todas las decisiones del equipo", "Facilitar el proceso Scrum y eliminar impedimentos.", "Escribir el código del proyecto."],
        answer: 2
    },
    {
        question: "¿Qué es un Sprint en Scrum?",
        options: ["un periodo de tiempo fijo destinado a completar incrementos funcionales", "Una lista de tareas pendientes para el equipo", "Un documento que describe el proyecto"],
        answer: 1
    },
    {
        question: "¿Qué artefacto de Scrum contiene todo el trabajo pendiente para el proyecto?",
        options: ["Sprint Backlog","Increment","Product Backlog."],
        answer: 3
    },
    {
        question: "¿Quién es responsable de maximizar el valor del producto en Scrum?",
        options: ["El Product Owner","El Scrum Master","El Desarrollador"],
        answer : 1
    }
];

const questions2 = [
    {
        question: "¿Cuál es el principal objetivo del sistema Kanban?",
        options: ["Visualizar el flujo de trabajo y mejorar la eficiencia", "Maximizar las reuniones diarias", "Aumentar la cantidad de tareas en curso al mismo tiempo"],
        answer: 1
    },
    {
        question: "¿Cuál de los siguientes elementos es esencial en un tablero Kanban?",
        options: ["Columnas que representan las etapas del flujo de trabajo", "Un cronómetro para cada tarea", "Un gráfico de barras para medir ganancias financieras"],
        answer: 1
    },
    {
        question: "¿Qué significa el término \"WIP\" en Kanban? ",
        options: ["Workflow in Process (Flujo de Trabajo en Proceso)","Work in Progress (Trabajo en Progreso)","Work Improvement Plan (Plan de Mejora Laboral)"],
        answer: 2
    },
    {
        question: "¿Cuál es una de las reglas clave de Kanban?",
        options: ["Completar tareas sin seguir prioridades", "Evitar cambios en el proceso de trabajo", "Limitar la cantidad de trabajo en progreso"],
        answer: 3
    },
    {
        question: "¿De dónde proviene el concepto de Kanban?",
        options: ["De la filosofía ágil Scrum","De las prácticas de gestión de producción de Toyota","De los modelos de gestión de empresas de Silicon Valley"],
        answer : 2
    }
];
const questions3 = [
    {
        question: "¿Cuál de los siguientes documentos es publicado por el PMI y se considera una guía estándar para la gestión de proyectos?",
        options: ["PMBOK® Guide", "Agile Manifesto", "Six Sigma Handbook"],
        answer: 1
    },
    {
        question: "¿Qué certificación del PMI está orientada principalmente a la gestión de proyectos ágiles?",
        options: ["PMP® (Project Management Professional)", "CAPM® (Certified Associate in Project Management)", "PMI-ACP® (Agile Certified Practitioner)"],
        answer: 1
    },
    {
        question: "Según el PMI, un proyecto es exitoso si cumple con los siguientes tres criterios, EXCEPTO:",
        options: ["Cumplir con el alcance del proyecto", "Completar el proyecto a tiempo", "Maximizar la satisfacción del cliente"],
        answer: 3
    },
    {
        question: "¿Cuál de las siguientes áreas de conocimiento del PMBOK® Guide está relacionada con el proceso de identificar, analizar y responder a factores que pueden afectar al proyecto?",
        options: ["Gestión del cronograma","Gestión de riesgos","Gestión de calidad"],
        answer: 2
    },
    {
        question: "En la metodología del PMI, el ciclo de vida de un proyecto generalmente incluye todas las siguientes fases, EXCEPTO:",
        options: ["Iniciación","Planificación","Despliegue continuo"],
        answer : 3
    }
];
const questions4 = [
    {
        question: "¿Cuál de los siguientes principios es un pilar fundamental de Extreme Programming (XP)?",
        options: ["Documentación exhaustiva antes del desarrollo", "Codificación aislada sin revisiones", "Entrega continua de software funcional"],
        answer: 3
    },
    {
        question: "En XP, el concepto de \"programación en pareja\" se refiere a:",
        options: ["Dos desarrolladores trabajando en tareas independientes en la misma sala", "Un desarrollador y un tester colaborando para escribir pruebas unitarias", "Dos desarrolladores trabajando juntos en el mismo código, en un solo ordenador"],
        answer: 3
    },
    {
        question: "¿Cuál de los siguientes roles NO es un rol oficial en un equipo de XP?",
        options: ["Programador", "Scrum Master", "Cliente"],
        answer: 2
    },
    {
        question: "En XP, ¿qué práctica fomenta la mejora continua del código y la reducción de la deuda técnica?",
        options: ["Refactorización","Documentación detallada","Desarrollo en cascada"],
        answer: 1
    },
    {
        question: "Una de las prácticas centrales de XP es la \"integración continua\". ¿Qué significa esto?",
        options: ["Liberar una versión del software al cliente cada trimestre","Fusionar el código y probarlo con frecuencia para detectar errores tempranamente","Crear un entorno de desarrollo separado para cada integrante del equipo"],
        answer : 2
    }
];
const questions5 = [
    {
        question: "¿Cuál es el objetivo principal de PRINCE2?",
        options: ["Establecer tareas diarias para el equipo de proyecto", "Proporcionar una estructura flexible y adaptable de gestión de proyectos", "Asegurar la contratación del personal adecuado"],
        answer: 2
    },
    {
        question: "¿Cuántos temas principales tiene PRINCE2?",
        options: ["5", "7", "9"],
        answer: 2
    },
    {
        question: "¿Qué rol es responsable de la gestión diaria del proyecto en PRINCE2?",
        options: ["Patrocinador", "Jefe de equipo", "Director del proyecto"],
        answer: 3
    },
    {
        question: "En PRINCE2, ¿qué elemento se enfoca en los beneficios que el proyecto debe lograr?",
        options: ["Planificación","Justificación de negocio","Gestión de riesgos"],
        answer: 2
    },
    {
        question: "¿Cuál de los siguientes NO es un principio de PRINCE2?",
        options: ["Enfoque en productos","Justificación continua de negocio","Flexibilidad en objetivos"],
        answer : 3
    }
];
const questions6 = [
    {
        question: "¿Cuál es el papel del Scrum Master en la resolución de conflictos dentro del equipo?",
        options: ["Actuar como mediador y fomentar un ambiente de confianza.", "Facilitar la comunicación entre los miembros del equipo.", "Tomar decisiones por el equipo para evitar desacuerdos"],
        answer: 2
    },
    {
        question: "¿cuál es la mejor manera de manejar un cambio inesperado en los requisitos",
        options: ["Rechazar el cambio y seguir con el plan original", "Realizar una reunión extraordinaria para decidir si se debe incluir el cambio", "Evaluar el impacto del cambio en el Sprint Backlog y discutirlo con el Product Owner"],
        answer: 3
    },
    {
        question: "¿Qué se debe hacer si un miembro del equipo no está contribuyendo adecuadamente durante un Sprint?",
        options: ["Informar al Product Owner para que tome medidas", "Discutir la situación en la retrospectiva del Sprint para abordar el problema", "Asumir que todos los miembros tienen sus propias razones y no intervenir"],
        answer: 2
    },
    {
        question: "¿Qué es un \"Incremento\" en Scrum?",
        options: ["La cantidad total de trabajo completado durante un Sprint","La suma de los elementos del Product Backlog completados en un Sprint y los incrementos previos","Un documento que detalla las características nuevas del producto"],
        answer: 2
    },
    {
        question: "¿Cuál es el propósito de la reunión diaria (Daily Scrum) en un equipo Scrum?",
        options: ["Revisar el trabajo completado y planificar el próximo Sprint","Permitir que cada miembro del equipo comparta sus logros, planes y impedimentos","Presentar el trabajo al Product Owner y recibir retroalimentación"],
        answer : 2
    }
];
