import type { ExtraCopy } from './types';

export const es: ExtraCopy = {
  ui: { details: 'Detalles', menu: 'Menú', heroIntro: 'Compras, tareas del hogar y planes, juntos. Gratis, de código abierto y autoalojado.', of: 'de', groups: 'Grupos de funciones', docs: 'Documentación' },
  setup: { steps: ["Inicia tu servidor con Docker Compose", "Crea tu cuenta en la aplicación web", "Invita a otras personas y comparte una lista"] },
  ai: {
    title: 'Pide a tu asistente que lo planifique',
    intro: 'Conecta un asistente de IA compatible con Ditero mediante MCP y describe lo que necesitas con tus palabras. El asistente crea y organiza tareas y puede fijar prioridades y fechas de vencimiento.',
    exampleLabel: 'Ejemplo de petición',
    example: 'Planifica el picnic del sábado, asigna las compras y marca como prioridad alta reservar el tren.',
    resultLabel: "Plan de ejemplo",
    results: [{"title": "Planificar el picnic del sábado", "detail": "Sábado"}, {"title": "Comprar comida para el picnic", "detail": "Asignada a Alex"}, {"title": "Reservar el tren", "detail": "Prioridad alta"}],
    points: [
      'Es un asistente externo que tú conectas. Ditero no tiene chatbot integrado ni aloja ningún modelo de IA.',
      'Tu cliente MCP decide adónde van los resultados y las conversaciones. Usa un cliente de confianza.',
      'El acceso depende del token de acceso personal que proporcionas y de sus membresías en espacios de trabajo.',
      'MCP está en el código fuente de desarrollo y en las compilaciones nightly, no en las descargas alfa.',
    ],
    link: 'Leer la guía de MCP',
  },
  carousel: {
    note: 'Estas funciones están disponibles en el código fuente de desarrollo. La versión alfa publicada contiene un subconjunto.',
    label: 'Carrusel de grupos de funciones',
    groups: [
      { id: 'lists', tab: 'Listas', title: 'Listas y colaboración', items: ["Compras, proyectos y listas de control", "Asigna tareas a otras personas", 'Listas tipadas para distintos tipos de trabajo', 'Subtareas dentro de las tareas', 'Prioridades y etiquetas', 'Espacios de trabajo compartidos con membresías', "Carpetas y plantillas", "Entrada rápida con fechas y prioridades", "Sincronización sin conexión"] },
      { id: 'routines', tab: 'Rutinas', title: 'Hábitos y rutinas', items: ["Tareas domésticas recurrentes", "Hábitos y rachas", 'Un modo de concentración para la tarea actual', "Temporizador de concentración", "Karma"] },
      { id: 'reminders', tab: 'Recordatorios', title: 'Recordatorios', items: ["Recordatorios de vencimiento", "Horas de silencio", 'Envío por ntfy, Telegram, Discord, Slack y correo electrónico', 'Confirmación de recordatorios', "Escalamiento de recordatorios sin respuesta"] },
      { id: 'views', tab: 'Vistas', title: 'Formas de ver las tareas', items: ['Paneles', 'Calendario', 'Tablero', 'Tabla', 'Vistas guardadas'] },
      { id: 'files', tab: 'Archivos', title: 'Archivos y recuperación', items: ['Archivos adjuntos cifrados', 'Comentarios en las tareas', 'Historial de cambios', 'Exportación e importación, con exclusiones documentadas'] },
      { id: 'access', tab: 'Acceso', title: 'Inicio de sesión e integraciones', items: ['Passkeys y TOTP', 'Tokens de acceso personal', 'API HTTP, feeds iCal y webhooks', 'CLI, TUI y MCP'] },
      { id: 'custom', tab: 'Aspecto', title: 'Personalización', items: ['Seis idiomas de interfaz, incluido el árabe de derecha a izquierda', "Temas claro y oscuro", 'Colores de acento y temas compartidos', 'Tamaño de lectura y una opción de alto contraste'] },
    ],
  },
};
