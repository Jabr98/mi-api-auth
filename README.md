# 🔐 MI API AUTH

Backend de autenticación profesional desarrollado con **Node.js, Express y MongoDB**, pensado para portafolio y uso real en proyectos freelance.

Este proyecto implementa un **flujo completo de autenticación** con registro, login, protección de rutas mediante JWT y buenas prácticas de seguridad.

---

## 🚀 Tecnologías usadas

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **JWT (JSON Web Tokens)**
* **bcryptjs** (hash de contraseñas)
* **dotenv** (variables de entorno)
* **nodemon** (desarrollo)

---

## 📂 Estructura del proyecto

```bash
MI-API-AUTH/
├── src/
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── authRoutes.js
│   └── index.js
├── .env
├── .gitignore
├── package.json
└── package-lock.json
```

---

## ⚙️ Configuración del entorno

Crea un archivo **.env** en la raíz del proyecto con las siguientes variables:

```env
PORT=4000
MONGO_URI=mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/mi-api-auth
JWT_SECRET=tu_clave_secreta
```

⚠️ **Importante:**

* No incluyas los símbolos `< >`
* El archivo `.env` **NO se sube a GitHub**

---

## ▶️ Instalación y ejecución

```bash
npm install
npm run dev
```

Si todo está correcto, verás:

```bash
✅ Conectado a MongoDB Atlas
🚀 Servidor corriendo en http://localhost:4000
```

---

## 🔑 Endpoints de autenticación

### 📌 Registro de usuario

**POST** `/auth/register`

```json
{
  "username": "juan",
  "email": "juan@email.com",
  "password": "123456"
}
```

---

### 📌 Login

**POST** `/auth/login`

```json
{
  "email": "juan@email.com",
  "password": "123456"
}
```

Respuesta:

```json
{
  "mensaje": "Login exitoso",
  "token": "JWT_TOKEN"
}
```

---

### 🔒 Ruta protegida

**GET** `/auth/profile`

Headers:

```
Authorization: Bearer JWT_TOKEN
```

Respuesta:

```json
{
  "mensaje": "Accediste a la ruta protegida",
  "user": {
    "id": "..."
  }
}
```

---

## 🛡️ Seguridad

* Contraseñas hasheadas con **bcrypt**
* Autenticación basada en **JWT**
* Middleware para protección de rutas
* Variables sensibles protegidas con `.env`

---

## 📌 Estado del proyecto

✔ Flujo de autenticación completo y funcional
✔ Conexión a MongoDB Atlas verificada
✔ Listo para portafolio freelance

---

## 📈 Próximas mejoras

* Refresh tokens
* Roles de usuario (admin / user)
* Validaciones con Joi / Zod
* Documentación Swagger
* Tests automatizados

---

## 👨‍💻 Autor

Proyecto backend de autenticación diseñado como base reutilizable para aplicaciones reales.

Este repositorio demuestra:

* Implementación correcta de JWT

* Buenas prácticas de seguridad

* Estructura limpia y escalable en Node.js

* Preparación para entornos reales (producción / freelance)

Desarrollado y mantenido por el autor del repositorio.