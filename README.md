<div align="center">

# LolCoaching - Asistente de League of Legends

[![Node.js](https://img.shields.io/badge/Node.js-18.0%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

[//]: # (![League of Coaching Logo]&#40;https://github.com/Joabulla07/Proyecto2020-Python/blob/gh-pages/lol-logo.png?raw=true&#41;)

</div>

## 📝 Descripción
Plataforma de coaching para League of Legends que conecta a jugadores con información sobre como mejorar la jugabilidad y aprender conceptos fundamentales. 
La información utilizada de entrenamiento del modelo de LLM fue generada por un coaching profesional. Este repositorio contiene el backend de la aplicación, desarrollado con Node.js, Express y MongoDB.

## 🚀 Características

- Autenticación de usuarios (registro, login, recuperación de contraseña)
- Gestión de perfiles de usuarios
- Sistema de notificaciones por email
- API RESTful para integración con frontend
- Manejo de sesiones seguras
- Logging detallado

## 🛠️ Tecnologías

- **Backend:** 
  - ![Node.js](https://img.shields.io/badge/Node.js-18.0%2B-339933?logo=node.js&logoColor=white)
  - ![Express](https://img.shields.io/badge/Express-5.1.0-000000?logo=express&logoColor=white)
- **Base de datos:** 
  - ![MongoDB](https://img.shields.io/badge/MongoDB-6.0%2B-47A248?logo=mongodb&logoColor=white)
  - ![Mongoose](https://img.shields.io/badge/Mongoose-8.18.0-880000?logo=mongodb&logoColor=white)
- **Autenticación:** 
  - ![JWT](https://img.shields.io/badge/JWT-9.0.2-000000?logo=jsonwebtokens&logoColor=white)
- **Envío de emails:** 
  - ![Brevo](https://img.shields.io/badge/Brevo-3.0.1-00A4BD?logo=sendinblue&logoColor=white)
- **Utilidades:**
  - ![Winston](https://img.shields.io/badge/Winston-3.17.0-2C3E50?logo=winston&logoColor=white)
  - ![EJS](https://img.shields.io/badge/EJS-3.1.10-A81C7E?logo=ejs&logoColor=white)
  - ![dotenv](https://img.shields.io/badge/dotenv-17.2.2-ECD53F?logo=dotenv&logoColor=black)

## 📋 Requisitos Previos

- Node.js (v16 o superior)
- npm (v8 o superior)
- MongoDB (local o Atlas)
- Cuenta en Sendinblue (Brevo) para el envío de emails

## 🚀 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Joabulla07/TP-Backend-LoL-Coach.git
   cd TP-LOL-COACHING
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```env
   PORT=3000
   NODE_ENV=development
   MONGO_DB_CONNECTION_STRING=""
   BREVO_API_KEY=tu_api_key_de_brevo
   SESSION_SECRET=tu_secreto_de_sesion
   FRONTEND_URL=""
   ```

4. Inicia el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```
   O en producción:
   ```bash
   npm start
   ```

## 📚 Estructura del Proyecto

```
.
├── config/               # Configuraciones
├── controllers/          # Controladores
├── core/                 # Núcleo de la aplicación
├── logs/                 # Archivos de log
├── middleware/           # Middlewares
├── models/              # Modelos de datos
├── public/              # Archivos estáticos
├── routes/              # Rutas de la API
├── services/            # Lógica de negocio
├── templates/           # Plantillas de email
├── utils/               # Utilidades
├── views/               # Vistas (EJS)
├── .env                 # Variables de entorno (crear)
├── .gitignore
├── index.js             # Punto de entrada
└── package.json
```

## 🌐 Endpoints de la API

### Autenticación
- `POST /api/login` - Iniciar sesión
  - Body: `{ "email": "usuario@ejemplo.com", "password": "contraseña" }`


### Usuarios
- `POST /api/user/create` - Crear nuevo usuario
  - Body: 
    ```json
    {
      "email": "usuario@ejemplo.com",
      "password": "Contraseña123",
      "name": "Nombre",
      "lastname": "Apellido"
    }
    ```
- `GET /api/user/getUser/:id` - Traer un usuario por Id
    - Query param:
      - id
      
- `POST /api/user/resetPassword/:id` - Restablecer contraseña
  - Body: `{ "newPassword": "NuevaContraseña123" }`

### Emails
- `POST /api/email/send-to-me` - Enviar reporte
  - Body: 
    ```json
    {
      "from_email": "remitente@ejemplo.com",
      "subject": "Asunto del mensaje",
      "description_content": "Contenido del mensaje"
    }
    ```
- `POST /api/email/forgetPassword` - Solicitar restablecimiento de contraseña
  - Body: `{ "email": "usuario@ejemplo.com" }`

## 🔒 Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| PORT | Puerto del servidor | 3000 |
| NODE_ENV | Entorno de ejecución | development/production |
| MONGO_DB_CONNECTION_STRING | URL de conexión a MongoDB | mongodb://localhost:27017/lol-coaching |
| BREVO_API_KEY | API Key de Sendinblue (Brevo) | xkeysib-... |
| SESSION_SECRET | Secreto para las sesiones | secreto-seguro |
| FRONTEND_URL | URL del frontend | http://localhost:3001 |

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, lee las [pautas de contribución](CONTRIBUTING.md) antes de enviar un pull request.

## 📧 Contacto

Para consultas o soporte, por favor contacta a [joannabbado4748@gmail.com](mailto:joannabbado4748@gmail.com)

---

<div align="center">
  <p>Desarrollado con ❤️ por el equipo de League of Coaching</p>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express">
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
</div>
