# GIFs App
## Descripción
GIFs App es una aplicación web desarrollada con React y TypeScript que permite buscar y visualizar GIFs utilizando la API de Giphy. La aplicación permite realizar búsquedas de GIFs, visualizarlos en una cuadrícula y mantiene un historial de búsquedas recientes.

## Características principales
- Búsqueda de GIFs mediante la API de Giphy
- Visualización de GIFs en una cuadrícula responsive
- Historial de búsquedas recientes
- Interfaz de usuario intuitiva y moderna
- Diseño responsive para diferentes dispositivos
## Tecnologías utilizadas
- React 19 : Biblioteca de JavaScript para construir interfaces de usuario
- TypeScript : Superset tipado de JavaScript
- Vite : Herramienta de construcción que proporciona un entorno de desarrollo más rápido
- Axios : Cliente HTTP basado en promesas para realizar peticiones a la API
- ESLint : Herramienta de análisis de código estático
- SWC : Compilador de JavaScript/TypeScript rápido para el desarrollo
## Estructura del proyecto
```
├── src/
│   ├── GifsApp.tsx            # Componente principal de la aplicación
│   ├── gifs/                  # Módulo relacionado con los GIFs
│   │   ├── actions/           # Acciones para obtener datos de la API
│   │   ├── api/               # Configuración de la API
│   │   ├── components/        # Componentes específicos de GIFs
│   │   └── interfaces/        # Interfaces TypeScript para GIFs
│   ├── mock-data/             # Datos de prueba
│   ├── shared/                # Componentes compartidos
│   │   └── components/        # Componentes reutilizables
│   ├── index.css              # Estilos globales
│   └── main.tsx               # Punto de entrada de la aplicación
```
## Requisitos previos
- Node.js (versión 18 o superior)
- npm o yarn
## Instalación
1. 1.
   Clona este repositorio:

   ```
   git clone <url-del-repositorio>
   cd 03-gifts-app
   ```
2. 2.
   Instala las dependencias:

   ```
   npm install
   ```
3. 3.
   Crea un archivo .env en la raíz del proyecto basado en .env.template y añade tu API key de Giphy:

   ```
   VITE_GIPHY_API_KEY=tu_api_key_de_giphy
   ```
   Puedes obtener una API key registrándote en Giphy Developers .
## Ejecución
### Desarrollo
Para iniciar el servidor de desarrollo:

```
npm run dev
```
La aplicación estará disponible en http://localhost:5173 .

### Producción
Para construir la aplicación para producción:

```
npm run build
```
Para previsualizar la versión de producción:

```
npm run preview
```
## Linting
Para ejecutar el linter:

```
npm run lint
```
