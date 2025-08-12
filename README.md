# 🚀 LinkPlaza Backend API

<div align="center">
  <img src="./public/logo.png" alt="LinkPlaza Logo" width="120" height="120">
  
  **API REST robusta y escalable para la plataforma LinkPlaza**
  
  [![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Express](https://img.shields.io/badge/Express-5.1.0-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-8.15.1-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
</div>

<p align="center">
  <a href="https://thelinkplaza.netlify.app/" target="_blank">
    🌐 VISITA LA WEB DE TheLinkPlaza
  </a>
</p>

[Repositorio del FrontEnd](https://github.com/alu0101540153/LinkPlaza_FrontendDeploy)



---

## 📋 Descripción

LinkPlaza Backend es una **API REST moderna y robusta** construida con Node.js, Express y TypeScript que proporciona todos los servicios necesarios para la plataforma LinkPlaza. Incluye autenticación JWT, gestión de usuarios, subida de imágenes y un sistema completo de manejo de enlaces sociales.

### ✨ Características Principales

- 🔐 **Autenticación JWT** segura y escalable
- 👤 **Gestión completa de usuarios** (registro, login, perfiles)
- 🖼️ **Subida de imágenes** integrada con Cloudinary
- 🔗 **Sistema de enlaces sociales** con validación
- 🛡️ **Middleware de seguridad** y validación
- 📊 **Base de datos MongoDB** con Mongoose ODM
- 🔍 **Búsqueda de usuarios** en tiempo real
- 📝 **Validación robusta** con Express Validator
- 🎯 **API RESTful** siguiendo mejores prácticas



<div align="center">
  <img src="./public/bg.png" alt="LinkPlaza Background" width="600">
</div>

---



## 🛠️ Tecnologías Utilizadas

### Core Framework
- **Node.js 18+** - Runtime de JavaScript
- **Express 5.1.0** - Framework web minimalista y flexible
- **TypeScript 5.8.3** - Superset de JavaScript con tipado estático

### Base de Datos
- **MongoDB** - Base de datos NoSQL orientada a documentos
- **Mongoose 8.15.1** - ODM elegante para MongoDB

### Autenticación & Seguridad
- **JWT (jsonwebtoken 9.0.2)** - Tokens seguros para autenticación
- **bcrypt 6.0.0** - Hash seguro de contraseñas
- **Express Validator 7.2.1** - Validación y sanitización de datos

### Servicios en la Nube
- **Cloudinary 2.7.0** - Gestión y optimización de imágenes
- **CORS 2.8.5** - Control de acceso entre dominios

### Utilidades
- **UUID 11.1.0** - Generación de identificadores únicos
- **Slug 11.0.0** - Generación de URLs amigables
- **Formidable 3.5.4** - Procesamiento de formularios multipart
- **Colors 1.4.0** - Colores en consola para logs

### Herramientas de Desarrollo
- **Nodemon 3.1.10** - Recarga automática en desarrollo
- **ts-node 10.9.2** - Ejecución directa de TypeScript

---

## 🚀 Instalación y Configuración

### Prerrequisitos

Asegúrate de tener instalado:
- **Node.js** (versión 18 o superior)
- **npm** o **yarn**
- **MongoDB** (local o Atlas)
- **Cuenta de Cloudinary** (para imágenes)

### 1. Clonar el Repositorio

```bash
git clone https://github.com/alu0101540153/LinkPlaza_BackendDeploy.git
cd LinkPlaza_BackendDeploy
```

### 2. Instalar Dependencias

```bash
npm install
# o si prefieres yarn
yarn install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# Base de Datos
MONGO_URI=mongodb://localhost:27017/linkplaza
# o para MongoDB Atlas:
# MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/linkplaza

# JWT
JWT_SECRET=tu_jwt_secret_muy_seguro

# Cloudinary
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret

# Servidor
PORT=4000
FRONTEND_URL=http://localhost:5173

# Entorno
NODE_ENV=development
```

### 4. Iniciar el Servidor

```bash
# Desarrollo (con recarga automática)
npm run dev

# Producción
npm run build
npm start
```

El servidor estará disponible en `http://localhost:4000`

---

## 📜 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor en modo desarrollo con nodemon |
| `npm run dev:api` | Inicia solo la API (flag --api) |
| `npm run build` | Compila TypeScript a JavaScript |
| `npm start` | Inicia el servidor en producción |

---

## 🛣️ Endpoints de la API

### Autenticación
```http
POST   /api/auth/register     # Registrar usuario
POST   /api/auth/login        # Iniciar sesión
```

### Usuarios
```http
GET    /api/user              # Obtener perfil del usuario autenticado
PATCH  /api/user              # Actualizar perfil
POST   /api/user/image        # Subir imagen de perfil
```

### Perfiles Públicos
```http
GET    /api/:handle           # Obtener perfil público por handle
POST   /api/search            # Buscar usuarios por handle
```

### Ejemplo de Respuesta
```json
{
  "handle": "usuario123",
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "description": "Desarrollador Full Stack",
  "image": "https://cloudinary.com/imagen.jpg",
  "links": "[{\"id\":1,\"name\":\"github\",\"url\":\"https://github.com/usuario\",\"enabled\":true}]"
}
```

---

## 🔧 Desarrollo

### Comandos Útiles

```bash
# Instalar nueva dependencia
npm install package-name

# Instalar dependencia de desarrollo
npm install --save-dev package-name

# Actualizar dependencias
npm update

# Verificar vulnerabilidades
npm audit

# Limpiar node_modules
rm -rf node_modules && npm install
```

### Convenciones de Código
- Usar **TypeScript** para todo el código
- **Interfaces** para definir tipos de datos
- **Middleware** para funciones reutilizables
- **Manejo de errores** consistente
- **Validación** en todas las rutas

---

## 🔒 Seguridad

### Medidas Implementadas
- 🔐 **Hashing de contraseñas** con bcrypt
- 🎫 **Autenticación JWT** con tokens seguros
- 🛡️ **Validación de entrada** en todas las rutas
- 🌐 **CORS** configurado apropiadamente
- 📝 **Sanitización** de datos de usuario

### Middleware de Seguridad
```typescript
// Autenticación requerida
router.get('/protected', authenticate, handler)

// Validación de entrada
router.post('/user', [
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
], handleInputErrors, handler)
```

---

## 📊 Base de Datos

### Modelo de Usuario
```typescript
interface IUser {
  handle: string      // Nombre de usuario único
  name: string        // Nombre completo
  email: string       // Email único
  password: string    // Contraseña hasheada
  description: string // Descripción del perfil
  image: string       // URL de imagen de perfil
  links: string       // JSON con enlaces sociales
}
```

### Índices Optimizados
- `email` - Único, para login rápido
- `handle` - Único, para búsquedas de perfil
- Índices compuestos para consultas complejas

---

## 🌐 Despliegue

### Variables de Entorno para Producción

```env
NODE_ENV=production
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/linkplaza
JWT_SECRET=super_secret_jwt_key_production
CLOUDINARY_CLOUD_NAME=production_cloud
CLOUDINARY_API_KEY=production_key
CLOUDINARY_API_SECRET=production_secret
PORT=4000
FRONTEND_URL=https://tu-dominio.com
```

### Build para Producción

```bash
npm run build
npm start
```

---

## 📈 Monitoreo y Logs

### Logs de Desarrollo
```bash
# Los logs aparecen en consola con colores
🚀 Server is running on port 4000
🗄️  MongoDB conectado en cluster.mongodb.net:27017
```

### Métricas Importantes
- Tiempo de respuesta de API
- Conexiones a base de datos
- Subidas de imágenes exitosas
- Errores de autenticación

---

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Estándares de Código
- Seguir convenciones de TypeScript
- Documentar funciones complejas
- Escribir tests para nuevas features
- Mantener cobertura de tests > 80%

---

## 📄 Licencia

Este proyecto está bajo la licencia ISC. Ver el archivo `LICENSE` para más detalles.

---

## 👨‍💻 Autor

**Víctor Rodríguez Dorta**
- GitHub: [@alu0101540153](https://github.com/alu0101540153)
- Email: victor.rodriguez@example.com

---

## 🔗 Enlaces Relacionados

- [Frontend Repository](https://github.com/alu0101540153/LinkPlaza_FrontendDeploy)
- [Documentación API](https://api.linkplaza.com/docs)
- [Demo en Vivo](https://linkplaza.com)

---


<div align="center">
  <p>⭐ ¡Dale una estrella si te gusta el proyecto! ⭐</p>
  
  **Hecho con ❤️ y mucho ☕**
</div>

<div align="center">
  <img src="./public/background.png" alt="LinkPlaza Background" width="600">
</div>
