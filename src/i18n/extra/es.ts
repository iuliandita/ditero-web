import type { ExtraCopy } from './types';

export const es: ExtraCopy = {
  ui: { tour: 'Explora Ditero', platforms: 'Web, Android y aplicación de escritorio experimental. CLI, TUI y MCP desde el código fuente.', details: 'Detalles', menu: 'Menú', heroIntro: 'Listas de la compra compartidas, tareas del hogar recurrentes y recordatorios para tu hogar. Gratis, de código abierto y autoalojado.', groups: 'Grupos de funciones', docs: 'Documentación' },
  setup: { steps: ["Inicia tu servidor con Docker Compose", "Crea tu cuenta en la aplicación web", "Invita a otras personas y comparte una lista"] },
  ai: {
    title: "Planifica con tu asistente",
    intro: "Conecta un asistente de IA que ya uses. Mediante MCP, convierte tus peticiones en tareas, prioridades y fechas de vencimiento.",
    exampleLabel: 'Ejemplo de petición',
    example: 'Planifica el picnic del sábado, asigna las compras y marca como prioridad alta reservar el tren.',
    resultLabel: "Plan de ejemplo",
    results: [{"title": "Planificar el picnic del sábado", "detail": "Lista compartida"}, {"title": "Comprar comida para el picnic", "detail": "Asignada a Alex"}, {"title": "Reservar el tren", "detail": "Prioridad alta"}],
    source: "Las descargas alfa no incluyen ejecutables independientes.",
    shortSource: "MCP se ejecuta desde el código fuente.",
    points: [
      'Es un asistente externo que tú conectas. Ditero no tiene chatbot integrado ni aloja ningún modelo de IA.',
      'Tu cliente MCP decide adónde van los resultados y las conversaciones. Usa un cliente de confianza.',
      'El acceso depende del token de acceso personal que proporcionas y de sus membresías en espacios de trabajo.',
    ],
    link: 'Leer la guía de MCP',
  },
  features: {
    groups: [
      { id: 'lists', title: 'Listas y colaboración', summary: "Compras, proyectos y responsabilidades compartidas", items: ["Compras, proyectos y listas de control", "Asigna tareas a otras personas", 'Listas tipadas para distintos tipos de trabajo', 'Subtareas dentro de las tareas', 'Prioridades y etiquetas', 'Espacios de trabajo compartidos con membresías', "Carpetas y plantillas", "Entrada rápida con fechas y prioridades", "Sincronización sin conexión"] },
      { id: 'routines', title: 'Hábitos y rutinas', summary: "Tareas recurrentes, hábitos y concentración", items: ["Tareas domésticas recurrentes", "Hábitos y rachas", 'Un modo de concentración para la tarea actual', "Temporizador de concentración", "Puntos por tareas y hábitos completados (Karma)"] },
      { id: 'reminders', title: 'Recordatorios', summary: "ntfy, Telegram, Discord, Slack y correo electrónico", items: ["Recordatorios de vencimiento", "Horas de silencio", 'Elige tus canales de envío', 'Confirmación de recordatorios', "Escalamiento de recordatorios sin respuesta"] },
      { id: 'views', title: 'Formas de ver las tareas', summary: "Calendario, tablero, tabla y paneles", items: ['Paneles', 'Calendario', 'Tablero', 'Tabla', 'Vistas guardadas'] },
      { id: 'files', title: 'Archivos y comentarios', summary: "Conversaciones sobre tareas y archivos adjuntos cifrados", items: ['Archivos adjuntos cifrados', 'Comentarios en las tareas'] },
      { id: 'recovery', title: 'Historial y exportación', summary: "Historial de finalización de tareas, importación y exportación", items: ['Historial de finalización de tareas', 'Exportación e importación, con exclusiones documentadas'] },
      { id: 'access', title: 'Acceso e integraciones', summary: "Passkeys, API, calendarios y herramientas para asistentes", items: ['Passkeys y TOTP', 'Tokens de acceso personal', "API HTTP y exportaciones iCal", "Clientes CLI, TUI y MCP desde el código fuente", "Suscripciones de calendario y webhooks (alfa)"] },
      { id: 'custom', title: 'Personalización', summary: "Seis idiomas, temas y opciones de lectura", items: ['Seis idiomas de interfaz, incluido el árabe de derecha a izquierda', "Temas claro y oscuro", 'Colores de acento y temas compartidos', 'Tamaño de lectura y una opción de alto contraste'] },
    ],
  },
};
