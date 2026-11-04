import type { ExtraCopy } from './types';

export const es: ExtraCopy = {
  ui: { view: 'Vista', desktop: 'Escritorio', phone: 'Teléfono', tour: 'Explora Ditero', platforms: "La web está en beta; Android y escritorio son experimentales; CLI, TUI y MCP se distribuyen como paquetes Bun.", details: 'Detalles', menu: 'Menú', heroIntro: 'Listas de la compra compartidas, tareas del hogar recurrentes y recordatorios para tu hogar. Gratis, de código abierto y autoalojado.', groups: 'Grupos de funciones', docs: 'Documentación' },
  setup: { steps: ["Inicia tu servidor con Docker Compose", "Crea tu cuenta en la aplicación web", "Invita a otras personas y comparte una lista"] },
  ai: {
    title: "Planifica con tu asistente",
    intro: "Conecta un asistente de IA que ya uses. A través de MCP, el asistente convierte tus peticiones en tareas, prioridades y fechas de vencimiento.",
    exampleLabel: 'Ejemplo de petición',
    example: "Planifica el viaje en tren del sábado, asigna a Alex la elección de la ruta y marca la compra de billetes como prioridad alta.",
    resultLabel: "Plan de ejemplo",
    results: [{"title": "Planificar el viaje en tren del sábado", "detail": "Lista compartida"}, {"title": "Elegir la ruta", "detail": "Asignada a Alex"}, {"title": "Comprar billetes de tren", "detail": "Prioridad alta"}],
    source: "Los paquetes de CLI, TUI y MCP necesitan Bun 1.3.14 o posterior y están cualificados en Linux x64.",
    shortSource: "MCP se distribuye como paquete Bun.",
    points: [
      'Es un asistente externo que tú conectas. Ditero no tiene chatbot integrado ni aloja ningún modelo de IA.',
      'Tu cliente MCP decide adónde van los resultados y las conversaciones. Usa un cliente de confianza.',
      'El acceso depende del token de acceso personal que proporcionas y de sus membresías en espacios de trabajo.',
    ],
    link: 'Leer la guía de MCP',
  },
  features: {
    importNote: "Importa desde Todoist, TickTick, Microsoft To Do (Outlook CSV), Trello y CSV.",
    groups: [
      { id: 'lists', title: 'Listas compartidas', summary: "Compras y proyectos en grupo", items: ["Listas de tareas, compras, control, proyectos y hábitos", "Asigna tareas a otras personas", 'Subtareas dentro de las tareas', 'Prioridades y etiquetas', 'Espacios de trabajo para compartir con otras personas', "Carpetas y plantillas", "Entrada rápida con fechas y prioridades", "Los cambios sin conexión se sincronizan al reconectar"] },
      { id: 'routines', title: 'Hábitos y rutinas', summary: "Tareas recurrentes, hábitos y concentración", items: ["Tareas domésticas recurrentes", "Hábitos y rachas", 'Temporizador de concentración por tarea', "Puntos por tareas y hábitos completados (Karma)"] },
      { id: 'reminders', title: 'Recordatorios', summary: "Confirma recordatorios desde el mensaje o en la app", items: ["Recordatorios de vencimiento", "Horas de silencio", 'Elige tus canales de envío', 'Confirmación de recordatorios', "Escalamiento de recordatorios sin respuesta"] },
      { id: 'views', title: 'Vistas de tareas', summary: "Calendario, tablero, tabla y paneles", items: ['Paneles', 'Calendario', 'Tablero', 'Tabla', 'Vistas guardadas'] },
      { id: 'files', title: 'Archivos', summary: "Comentarios y adjuntos cifrados opcionales", items: ['Archivos adjuntos cifrados', 'Comentarios en las tareas'] },
      { id: 'recovery', title: 'Historial', summary: "Tareas completadas, importación y exportación", items: ['Historial de finalización de tareas', 'Exportación e importación, con exclusiones documentadas'] },
      { id: 'access', title: 'Acceso y API', summary: "Passkeys, API y asistentes", items: ['Passkeys y TOTP', 'Tokens de acceso personal', "API HTTP y exportaciones iCal", "Clientes CLI, TUI y MCP desde el código fuente", "Suscripciones de calendario y webhooks entrantes"] },
      { id: 'custom', title: 'Personalización', summary: "Seis idiomas, temas y opciones de lectura", items: ['Seis idiomas de interfaz, incluido el árabe de derecha a izquierda', "Temas claro y oscuro", 'Colores de acento y temas compartidos', 'Tamaño de lectura y una opción de alto contraste'] },
    ],
  },
};
