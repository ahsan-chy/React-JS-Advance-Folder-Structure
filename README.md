# React JS Advance-Level Folder Structure

How to run the project
```javascript
npm i
```
and
```javascript
npm start
```

Before using This project install latest versions of following packages

- [Axios](https://www.npmjs.com/package/axios)
- Bootstrap - React Strap - MUI - AntD - Tailwind
- [React Icons](https://react-icons.github.io/react-icons/)
- React Router Dom [Latest React Router v6](https://reactrouter.com/en/dev/upgrading/reach#install-react-router-v6)
- Other Required packages

In the project I have just set Up most used folder structure:

```javascript
React JS Advanced Folder Structure
.
├── public
|     └── index.html
├── src
    ├── assets
    |     ├── audios
    |     ├── icons
    |     ├── images
    |     └── videos
    ├── components
    |     ├── Button
    |     |     ├── index.jsx
    |     |     └── button.module.css
    |	  ├── inputs
    |     |     ├── index.jsx
    |     |     └── inputs.module.css
    |	  ├── Modal
    |     |     ├── index.jsx
    |     |     └── modal.module.css
    |	  └── Tooltip
    |           ├── index.jsx
    |           └── tooltip.module.css
    |     └── index.js
    ├──  db
    |     ├── productsData.js
    |     └── userData.js
    ├── layout
    |     ├── Header
    |     |     ├── index.jsx
    |     |     └── header.module.css
    |     ├── Navbar.jsx
    |     |     ├── index.jsx
    |     |     └── navbar.module.css
    |     ├── Breadcrumbs.jsx
    |     |     ├── index.jsx
    |     |     └── breadcrumbs.module.css
    |     └── Footer.jsx
    |           ├── index.jsx
    |           └── footer.module.css
    |     └── index.js
    ├── pages
    |     ├── Home
    |     |     ├── index.jsx
    |     |     └── home.module.css
    |     ├── Login
    |     |     ├── index.jsx
    |     |     └── login.module.css
    |     ├── Signup
    |     |     ├── index.jsx
    |     |     └── signup.module.css
    |     └── About
    |           ├── index.jsx
    |           └── about.module.css
    |     └── index.js
    ├── Routers
    |     └── Routers.js
    ├── store
    |     ├── action.js  
    |     ├── reducers.js  
    |     └── store.js
    ├── services
    |     ├── api.js          // API request functions
    |     └── dataUtils.js    // Data manipulation functions
    ├── utils
    |     ├── constants
    |     |     ├── Strapi.js
    |     |     └── Firebase.js
    |     ├── helpers
    |     |     ├── arrays.js
    |     |     └── helpers.js
    |     └── hooks  
    |           └── useIsMobile.js  
    ├── .env
    ├── app.js
    ├── index.css
    ├── index.js
|
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Folders include

- `Public`
- `Assests`
- `Components`
- `db`
- `layout`
- `Pages`
- `Routes`
- `services`
- `store`
- `utils`
  - `Constants`
  - `helpers`
  - `hooks`
- `.env.example` / `.env.development`
- `.eslintrc.cjs`
- `.prettierrc.cjs`
- `.jsonconfig.json`
- `.gitignore`
- `package.json`
- `.vite.config.js`

### Public

Public mainly contain root file **`index.html`** which help to run react project.

### Assests

In Assets folder you can put following things.

- Images
- Video
- Icons
- CSS

### Components

Component will have all the components which are reuseable anywhere in website. Like - Button - Cards - DropDownBtn - inputs - Modal - Popups - Toast - Tooltip - Text/Heading/Title - Skeleton - Spiner/Loader

### Constants

Constants folder have **Tokens,** logins, and those details which we don't want to share with public. Like **Env** files are used to store sensitive credentials such as **API keys.**
An environment variable supports storing the API link at one location so that we do not need to change the Link in each file manually.

```javascript
const API_BASE_URL = 'https://api.example.com';
const MAX_ITEMS_PER_PAGE = 10;
```

### db

Here we provide JSON Formate of data in frontend in React APP.

- products data
- users data

### Helpers

Helpers used to store utility functions and modules that provide various helper functionalities. These functions are usually small, reusable, and not directly tied to the main business logic of your application.

- Array to Object
- Object to Array
- Date Formatting
- Number Formatting
- Validation
- Api Request

[Helper Functions Details](https://chat.openai.com/share/32e7459b-dd5a-495a-a418-db2453361370)

### Layout

This is just a special folder for **placing any layout based components.**

- Header
- Footer
- Breadcrumbs
- Navbar
- Sidebar

### Pages

Pages will have all the pages which we will use in website.

### Routes

Router will have all the Routes in website. Where we are going and where we want to go.

### Services

In Services we put configuration file, like when you are using google firebase then your firebase config file will be in services folder.

The **"services"** folder is often used to contain code related to making **\*`API`** requests and managing data from external sources. This folder helps separate the concerns of your application by isolating data fetching and manipulation logic from the components that render the UI.

```javascript
// services/apiService.js
import axios from 'axios';

export function fetchUserData(userId) {
  return axios.get(`/api/users/${userId}`);
}
```

### Store
"store" folder in a React application typically refers to a directory where you manage your application's state using state management libraries like 
- Redux 
- Redux Toolkit
- Zustand
- Context Api
- Mobx

```javascript
|-- store/
|   |-- actions.js        // Redux action creators
|   |-- reducers.js       // Redux reducers
|   |-- store.js          // Redux store configuration
```

### Utils

**`Utils`** folder is a common convention in many software projects, including React applications, for storing utility functions and helper modules that provide general-purpose functionality across different parts of the application. 
- constants
- helpers
- hooks

Example: 
```javascript
// utils/stringUtils.js
export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// utils/dateUtils.js
export function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
}
```

### .env.development

Env files are used to store sensitive credentials such as API keys.

```javascript
REACT_APP_API_URL=http://localhost:3001
REACT_APP_DEBUG_MODE=true
```

### .env.example

Env files are used to store sensitive credentials such as API keys.

```javascript
REACT_APP_API_KEY=
REACT_APP_API_URL=
```

### .eslintrc.cjs

ESLint, which is a popular tool for linting and enforcing coding style and best practices in JavaScript code. The .eslintrc.cjs file is written in CommonJS module format and is used to configure ESLint for your project.

### .gitignore

.gitignore file contain all those files,folders name which user want to skip to push online. If you don't want to push any specific file/folder then you should put their name in .gitignore

### .prettierrc.cjs

`.prettierrc.cjs` file is a configuration file used for Prettier, which is a widely used code formatting tool. Prettier helps ensure consistent and automatic code formatting across your codebase. The `.prettierrc.cjs` file is written in CommonJS module format and is used to configure Prettier's behavior for your project.

- File Format & Naming
- Configuration Setup
- Export Configuration

```javascript
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'es5',
};
```

### jscongig.json

- File Purpose
- Configuration Setup:
- JSON Format

```javascript
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### package.json

package.json file is core to the Nodejs ecosystem and is a fundamental part of understanding and working with Node. js , npm , and even modern JavaScript . This file is used as a manifest, storing information about applications, modules, packages, and more.

### vite.config.js

- File Purpose:
The vite.config.js file allows you to customize various aspects of your Vite project, including configuration options for the development server, build process, and plugin settings.

- Configuration Setup:
Inside the vite.config.js file, you export an object containing the configuration options for your Vite project. This object can include settings related to the development server, build process, plugins, and more.

- JavaScript Format:
The vite.config.js file is written in JavaScript, and it's named vite.config.js. It should be placed in the root directory of your Vite project.

```javascript
// vite.config.js
export default {
  server: {
    port: 3000
  },
  build: {
    minify: true
  },
  plugins: [/* your plugins here */]
};
```

@import 
```javascript
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '@page': '/src/page'
    }
  },
  plugins: [react()],
})
```
