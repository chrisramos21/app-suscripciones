<h1 align="left">App SUSCRIPCIONES</h1>

###

<p align="left">Es una aplicación web creada con el objetivo de facilitar el registro, visualización y administración de suscripciones. Fue diseñada como proyecto académico para demostrar el uso de rutas protegidas, autenticación, enrutamiento entre componentes y manejo de interfaz amigable en una SPA (Single Page Application).</p>

###
<h2 align ="left"> Ejecución del proyecto </h2>

###

<p aling ="left">Link de vercel: https://despliegue-suscripcioneschristian.vercel.app/<br></br>Frontend: Vite + React (puerto por defecto: http://localhost:5173)<br></br>Backend: https://api-prueba-uno.onrender.com/<br></br>Usar usuario por defecto</p>

###

<h2 align="left">🖊️Descripción</h2>

###

<p align="left">La aplicación permite a los usuarios iniciar sesión y acceder a diversas secciones informativas, como Home, Suscripciones, mediante un menú de navegación lateral. Además, incorpora rutas privadas para proteger el contenido interno. La aplicación está conectada a una base de datos, lo que permite gestionar de manera real el flujo de autenticación, el almacenamiento de suscripciones.</p>

###

<h2 align="left">🛠️ Tecnologías Utilizadas</h2>

###

<p align="left">-> React JS – Biblioteca principal para la interfaz de usuario<br>-> JSON-Server – Simulación de API --> REST con datos en formato JSON<br>-> React Router DOM – Ruteo dinámico entre vistas<br>-> Axios – Cliente HTTP para conectar con la API<br>-> Fetch API – Alternativa para peticiones HTTP<br>-> SweetAlert2 – Alertas modernas y estilizadas<br>-> CSS – Estilos personalizados<br>-> Tailwind – Estilos <br>-> HTML – Estructura base del proyecto</p>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" height="40" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css3 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="40" alt="npm logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo"  />
</div>

###

<h2 align="left">🎨 Paleta de colores</h2>

###

<p align="left">#e8e8e8 — Fondo general<br><br>#ffffff — Fondo de tarjetas<br><br>#16a34a — Botón verde ("Agregar Suscripción")<br><br>#000000 — Botones "Editar/Eliminar", texto principal<br><br>#6b7280 — Texto gris (Tailwind gray-500)</p>

###

<h2 align="left">💾 Instalación</h2>

###

<p align="left"># 1. Clona el repositorio<br>git clone https://github.com/chrisramos21/app-suscripciones<br><br># 2. Instala las dependencias del frontend<br>npm install<br><br># 3. En una nueva terminal, inicia el frontend con Vite<br>npm run dev</p>

###

<h2 align="left">🗂️ Estructura del proyecto</h2>

###

<p align="left">app-suscripciones/<br>│<br>├── public/<br>│<br>├── src/<br>│   ├── components/      # Componentes reutilizables<br>│   ├── pages/           # Vistas principales de la app<br>│   ├── routes/          # Definición de rutas con React Router<br>│   ├── helpers/         # Funciones utilitarias y helpers<br>│   ├── servicios/       # Conexión con API (axios o fetch)<br>│   └── App.jsx<br>│<br>├── package.json<br>└── README.md</p>

###

<h2 align="left">🧩 Modelo de datos (NoSQL)</h2>

###

<p align="left">{<br>  "suscripciones": [<br>    {<br>    "id": "1",<br>    "usuarioId": 1,<br>    "servicio": "Netflix",<br>    "costo": 34000,<br>    "moneda": "COP",<br>    "fechaInicio": "2024-10-15",<br>    "fechaRenovacion": "2025-06-15",<br>    "frecuencia": "mensual",<br>    "estado": "activa",<br>    "notas": "Plan estándar compartido",<br>    "categoria": "Entretenimiento"<br>  }<br>  ],<br>  "usuarios": [<br>   {<br>    "id": "1",<br>    "nombre": "Jaime Zapata",<br>    "correo": "jaime@example.com",<br>    "password": "hashed_password",<br>    "fechaRegistro": "2025-06-03T10:00:00Z"<br>  }<br>  ]<br>}</p>

###

<h2 align="left">📫 Autor</h2>

###

<p align="left">Desarrollado por Christian Ramos Arias<br>cédula 1001366244<br>🚀 ¡Gracias por visitar este proyecto!</p>

###