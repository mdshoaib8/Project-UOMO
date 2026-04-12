# Project -UOMO

## Lesson - 1 Initial Setup

[Project UOMO Figma Link](https://www.figma.com/design/Ee7Ax8QPZ4BBiG9lSLHINH/Uomo_Theme--Copy---Copy---Copy-?node-id=0-1&p=f&t=csAyg0VpPePIU0N9-0)

### 1. Install Vite

#### Step 1: Check Node.js

Make sure Node.js is installed:

```bash
node -v
```

If not installed, install Node.js first.

#### Step 2: Create Vite Project

Run this command:

```bash
npm create vite@latest
```

#### Step 3: Project Setup

After running, it will ask:

##### 1. Project name

```bash
✔ Project name: my-app
```

##### 2. Framework

```bash
✔ Select a framework: React
```

##### 3. Variant

```bash
✔ Select a variant: JavaScript (or TypeScript)
```

#### Step 4: Go into Project Folder

```bash
cd my-app
```

#### Step 5: Install Dependencies

```bash
npm install
```

#### Step 6: Run Development Server

```bash
npm run dev
```

#### Step 7: Open in Browser

You will see something like:

```bash
Local: http://localhost:5173/
```

Open that URL in your browser

#### 📁 Project Structure (Important)

```plaintext
Project UOMO/
 ├── public/
 ├── src/
 │    ├── assets/
 │    ├── App.jsx
 │    └── main.jsx
 ├── index.html
 ├── package.json
```

---

#### Step 8: Clean Default Code (Recommended)

##### `App.jsx`

```jsx
function App() {
  return <h1>Hello</h1>;
}

export default App;
```

### 2. Install Tailwind CSS

#### Step 1: Install Tailwind

Run:

```bash
npm install tailwindcss @tailwindcss/vite
```

#### Step 2: Configure Vite Plugin

Open `vite.config.js` and update:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```


#### Step 3: Add Tailwind to CSS

Open your main CSS file:

usually: `src/index.css`

Replace everything with:

```css
@import "tailwindcss";
```

#### Step 4: Run Project

```bash
npm run dev
```

#### Step 5: Test Tailwind

Go to `App.jsx`:

```jsx
function App() {
  return (
    <h1 className="text-4xl text-blue-500 font-bold text-center mt-10">
      Tailwind is working.
    </h1>
  );
}

export default App;
```

#### 📁 Final Structure

```plaintext
src/
 ├── index.css   ← Tailwind here
 ├── App.jsx
 └── main.jsx
vite.config.js   ← plugin added
```

### 3. Tailwind Class Sorting with Prettier

#### Step 1: Install Required Packages

Run:

```bash
npm install -D prettier prettier-plugin-tailwindcss
```

`-D` = dev dependency (correct)

#### Step 2: Create Prettier Config File

Create a file in your root:

```plaintext
.prettierrc
```

Add this:

```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

#### Step 3: (Optional but Recommended) Add Settings

Update `.prettierrc`:

```json
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

#### Step 4: Install VS Code Extension

Install:

**Prettier – Code formatter**

(very important for auto formatting)

---

#### Step 5: Enable Auto Format in VS Code

Go to settings → search:

**Format On Save → Enable**

Or add to `settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

#### Step 6: Test It

Write messy Tailwind classes:

```jsx
<div className="text-center bg-blue-500 p-4 flex items-center justify-between text-white">
```

Save file → it becomes:

```jsx
<div className="flex items-center justify-between bg-blue-500 p-4 text-center text-white">
```

Automatically sorted

### 4. Install React Router

#### Step 1: Install React Router

Run:

```bash
npm install react-router-dom
```

### 5. File Tree

```
Project UOMO
├── 📁 markdown images
├── 📁 public
│   ├── 🖼️ favicon-16x16.png
│   ├── 🖼️ favicon.svg
│   └── 🖼️ icons.svg
├── 📁 src
│   ├── 📁 assets
│   │   ├── 🖼️ hero.png
│   │   ├── 🖼️ react.svg
│   │   └── 🖼️ vite.svg
│   ├── 📁 components
│   │   ├── 📁 common
│   │   ├── 📁 pages
│   │   │   ├── 📄 About.jsx
│   │   │   └── 📄 Home.jsx
│   │   └── 📁 ui
│   │       ├── 📄 Footer.jsx
│   │       ├── 📄 Header.jsx
│   │       ├── 📄 RootLayout.jsx
│   │       └── 📄 Test.jsx
│   ├── 🎨 App.css
│   ├── 📄 App.jsx
│   ├── 🎨 index.css
│   └── 📄 main.jsx
├── ⚙️ .gitignore
├── ⚙️ .prettierrc
├── 📝 README.md
├── 📄 eslint.config.js
├── 🌐 index.html
├── ⚙️ package-lock.json
├── ⚙️ package.json
└── 📄 vite.config.js
```

### 6. Components Config

*`main.jsx`*
```jsx
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const root = createRoot(document.getElementById('root'))

root.render(
  <App/>
)

```

*`App.jsx`*
```jsx
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import RootLayout from "./components/ui/RootLayout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children: [
        { index: true, Component: Home },
        { path: "about", Component: About },
      ],
    },
  ]);

  return <RouterProvider router={router} />
}
```

*`RootLayout.jsx`*
```jsx
import { Outlet } from "react-router-dom"

import Header from "./Header"
import Footer from "./Footer"
import { Test } from "../pages/Test"

export default function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            {/* <Test /> */}
        </>
    )
}
```

*`About.jsx`*
```jsx
export default function About() {
    return (
        <h1>About</h1>
    )
}
```

*`Home.jsx`*
```jsx
const Home = () => {
    return (
        <div>Home</div>
    )
}

export default Home
```

*`Header.jsx`*
```jsx
export default function Header() {
    return (
        <h1>
            Header
        </h1>
    )
}
```

*`Footer.jsx`*
```jsx
export default function Footer() {
    return (
        <h1>Footer</h1>
    )
}
```

## Lesson - 2 Header

[Project UOMO Figma Link](https://www.figma.com/design/Ee7Ax8QPZ4BBiG9lSLHINH/Uomo_Theme--Copy---Copy---Copy-?node-id=0-1&p=f&t=csAyg0VpPePIU0N9-0)

### 1. Create `images` folder with `Image.jsx`

```
├── 📁 public
│   ├── 📁 images
│   │   └── 🖼️ logo.png
│   ├── 🖼️ favicon-16x16.png
│   ├── 🖼️ favicon.svg
│   └── 🖼️ icons.svg
├── 📁 src
│   ├── 📁 assets
│   │   ├── 🖼️ hero.png
│   │   ├── 🖼️ react.svg
│   │   └── 🖼️ vite.svg
│   ├── 📁 components
│   │   ├── 📁 common
│   │   │   └── 📄 Image.jsx
```

*`Image.jsx`*
```jsx
export default function Image({ src, alt, className }) {
    return (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            className={className}
        />
    )
}
```

### 2. Develop `Header.jsx` & `Container.jsx`

*`Container.jsx`*
```jsx
export default function Container({ children }) {
    return (
        <div className="mx-auto max-w-352.5">
            {children}
        </div>
    );
}
```

*`Header.jsx`*
```jsx
import Image from "../common/Image";
import Container from "./Container";

export default function Header() {
    return (
        <header>
            <nav>
                <Container>
                    <Image
                        src="/images/logo.png"
                        alt="Project UOMO Logo"
                    />
                </Container>
            </nav>
        </header>
    );
}
```

### 3. Create `api` folder and `navbarData.js`

#### 1. 📁 Folder Tree

```
├── 📁 src
│   ├── 📁 api
│   │   └── 📄 navbardata.js
│   ├── 📁 assets
│   │   ├── 🖼️ hero.png
│   │   ├── 🖼️ react.svg
│   │   └── 🖼️ vite.svg
│   ├── 📁 components
│   │   ├── 📁 common
│   │   │   └── 📄 Image.jsx
```

#### 2. Dynamic `menu` with optional chaining and `map()`

*`Header.jsx`*
```jsx
import { navitems } from "../../api/navbardata";

<ul>
    {
        navitems?.map((item) =>(
            <li key={item.id}>{item.name}</li>
        ))
    }
</ul>
```

*`navbarData.js`*
```js
export const navitems = [
    {
        id: 1,
        name: "HOME",
    },
    {
        id: 2,
        name: "SHOP",
    },
    {
        id: 3,
        name: "COLLECTION",
    },
    {
        id: 4,
        name: "JOURNAL",
    },
    {
        id: 5,
        name: "LOOKBOOK",
    },
    {
        id: 6,
        name: "PAGES",
    },
];
```

*Display :*

![alt text](<markdown images/uomo-1.png>)

## Lesson - 3:

[Project UOMO Figma Link](https://www.figma.com/design/Ee7Ax8QPZ4BBiG9lSLHINH/Uomo_Theme--Copy---Copy---Copy-?node-id=0-1&p=f&t=csAyg0VpPePIU0N9-0)