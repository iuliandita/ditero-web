import type { ExtraCopy } from './types';

export const es: ExtraCopy = {
  ui: { prev: 'Anterior', next: 'Siguiente', of: 'de', groups: 'Grupos de funciones', docs: 'Documentación' },
  ai: {
    title: 'Pide a tu asistente que lo planifique',
    intro: 'Conecta un asistente de IA compatible con Ditero mediante MCP y describe lo que necesitas con tus palabras. El asistente crea y organiza tareas y puede fijar prioridades y fechas de vencimiento.',
    exampleLabel: 'Ejemplo de petición',
    example: 'Planifica el picnic del sábado, asigna las compras y marca como prioridad alta reservar el tren.',
    points: [
      'Es un asistente externo que tú conectas. Ditero no tiene chatbot integrado ni aloja ningún modelo de IA.',
      'Tu cliente MCP decide adónde van los resultados y las conversaciones. Usa un cliente de confianza.',
      'El acceso depende del token de acceso personal que proporcionas y de sus membresías en espacios de trabajo.',
      'MCP está en el código fuente de desarrollo y en las compilaciones nightly, no en las descargas alfa.',
    ],
    note: 'Es un ejemplo de petición, no una conversación grabada.',
    link: 'Leer la guía de MCP',
  },
  carousel: {
    title: 'Más de lo que ya está construido', intro: 'El resto de las funciones, agrupadas. Usa los botones, desliza o desplázate.',
    note: 'Estas funciones están disponibles en el código fuente de desarrollo. La versión alfa publicada contiene un subconjunto.',
    label: 'Carrusel de grupos de funciones',
    groups: [
      { id: 'lists', tab: 'Listas', title: 'Listas y colaboración', items: ['Listas tipadas para distintos tipos de trabajo', 'Subtareas dentro de las tareas', 'Prioridades y etiquetas', 'Asignación a miembros del espacio de trabajo', 'Espacios de trabajo compartidos con membresías'] },
      { id: 'routines', tab: 'Rutinas', title: 'Hábitos y rutinas', items: ['Hábitos que sigues a lo largo del tiempo', 'Tareas recurrentes', 'Rachas', 'Un modo de concentración para la tarea actual'] },
      { id: 'reminders', tab: 'Recordatorios', title: 'Recordatorios', items: ['Envío por ntfy, Telegram, Discord, Slack y correo electrónico', 'Horas de silencio', 'Confirmación de recordatorios'] },
      { id: 'views', tab: 'Vistas', title: 'Formas de ver las tareas', items: ['Paneles', 'Calendario', 'Tablero', 'Tabla', 'Vistas guardadas'] },
      { id: 'files', tab: 'Archivos', title: 'Archivos y recuperación', items: ['Archivos adjuntos cifrados', 'Comentarios en las tareas', 'Historial de cambios', 'Exportación e importación, con exclusiones documentadas'] },
      { id: 'access', tab: 'Acceso', title: 'Inicio de sesión e integraciones', items: ['Passkeys y TOTP', 'Tokens de acceso personal', 'API HTTP, feeds iCal y webhooks', 'CLI, TUI y MCP'] },
      { id: 'custom', tab: 'Aspecto', title: 'Personalización', items: ['Seis idiomas de interfaz, incluido el árabe de derecha a izquierda', 'Temas claro y oscuro', 'Colores de acento y temas compartidos', 'Tamaño de lectura y una opción de alto contraste'] },
    ],
  },
};
