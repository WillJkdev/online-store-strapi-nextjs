# 🛒 Tienda Online - E-commerce Completo

<p align="center">
  <img src="public/nextjs.jpeg" alt="Next.js" width="48" height="48" />
  <img src="public/strapi.png" alt="Strapi" width="48" height="48" />
</p>





Una aplicación completa de comercio electrónico moderna construida con **Strapi** como backend y **Next.js** como frontend. Esta tienda online ofrece una experiencia de compra completa con gestión de productos, usuarios, pedidos y una interfaz moderna y responsiva.

## 🏗️ Arquitectura del Proyecto

Este proyecto está estructurado en dos partes principales:

### 🎯 Backend (Strapi + GraphQL)

- **CMS Headless**: Strapi para gestión de contenido
- **API GraphQL**: Endpoints optimizados para consultas complejas
- **Gestión de datos**: Productos, usuarios, pedidos, categorías
- **Autenticación**: Sistema de usuarios y permisos
- **Panel de administración**: Interfaz intuitiva para gestión

### 🎨 Frontend (Next.js + TypeScript)

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript para type safety
- **UI/UX**: Tailwind CSS + Radix UI
- **Estado**: Apollo Client para GraphQL
- **Rendimiento**: Optimizado con Turbopack

## ✨ Características Principales

- **🛍️ Catálogo Completo**: Navegación por categorías y productos
- **🔍 Búsqueda Avanzada**: Filtros y búsqueda en tiempo real
- **🛒 Carrito Inteligente**: Gestión completa con persistencia
- **👤 Sistema de Usuarios**: Registro, login y perfiles
- **📱 Responsive Design**: Optimizado para todos los dispositivos
- **⚡ Rendimiento**: Carga rápida y experiencia fluida
- **🔐 Seguridad**: Autenticación y autorización robusta
- **📊 Dashboard**: Panel de administración completo

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+
- npm o yarn
- Git

### Instalación

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/WillJkdev/online-store-strapi-nextjs.git
   cd tienda-online
   ```

2. **Configura el Backend**

   ```bash
   cd backend
   npm install
   npm run develop
   ```

3. **Configura el Frontend**

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Accede a las aplicaciones**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend Admin: [http://localhost:1337/admin](http://localhost:1337/admin)
   - GraphQL Playground: [http://localhost:1337/graphql](http://localhost:1337/graphql)

## 📚 Documentación

### [📖 Backend - Strapi](./backend/README.md)

Documentación completa del backend con Strapi, incluyendo:

- Configuración y comandos
- API GraphQL
- Gestión de contenido
- Despliegue

### [🎨 Frontend - Next.js](./frontend/README.md)

Documentación del frontend con Next.js, incluyendo:

- Instalación y configuración
- Estructura del proyecto
- Tecnologías utilizadas
- Despliegue

## 🛠️ Stack Tecnológico

### Backend

- **Strapi** - CMS Headless
- **GraphQL** - API moderna
- **PostgreSQL/MySQL** - Base de datos
- **JWT** - Autenticación

### Frontend

- **Next.js 15** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilos
- **Radix UI** - Componentes
- **Apollo Client** - GraphQL client
- **Lucide React** - Iconos

## 📁 Estructura del Proyecto

```
tienda-online/
├── backend/           # Strapi CMS
│   ├── src/
│   ├── config/
│   └── README.md
├── frontend/          # Next.js App
│   ├── src/
│   ├── public/
│   └── README.md
├── docs/             # Documentación
└── README.md         # Este archivo
```

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](./frontend/LICENSE) para más detalles.

```
MIT License

Copyright (c) 2024 Williams JPM (WillJkdev)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🔗 Enlaces Útiles

- **Repositorio GitHub**: [https://github.com/WillJkdev/online-store-strapi-nextjs](https://github.com/WillJkdev/online-store-strapi-nextjs)
- **Documentación Strapi**: [https://docs.strapi.io](https://docs.strapi.io)
- **Documentación Next.js**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **GraphQL**: [https://graphql.org](https://graphql.org)

## 📞 Soporte

Si tienes alguna pregunta o problema:

- Abre un issue en GitHub
- Revisa la documentación específica de cada parte
- Consulta las guías de instalación

---

Desarrollado con ❤️ por [Williams JPM (WillJkdev)](https://github.com/WillJkdev)

**Tecnologías**: Strapi + Next.js + GraphQL + TypeScript
