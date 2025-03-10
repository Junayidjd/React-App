# Persist Venture Assignment - Event Management App

This React application, built with **Vite**, **Redux Toolkit**, **Tailwind CSS**, **Material UI**, **Chakra UI**, and **Framer Motion**, offers a seamless event management experience. Users can efficiently filter, view detailed event information, and enjoy smooth animated transitions.

## ✨ Features

-   **Event Filtering**: Easily filter events based on:
    -   Today
    -   Tomorrow
    -   This Week
    -   This Month
-   **Detailed Event Views**: Access comprehensive details for each event.
-   **Smooth Animations**: Enjoy a fluid user experience with Framer Motion and GSAP.
-   **State Management**: Robust state management using Redux Toolkit.
-   **Modern & Responsive UI**: Built with Material UI and Chakra UI for a sleek, accessible, and responsive design.
-   **Utility-First Styling**: Leveraging Tailwind CSS for rapid and maintainable styling.

## 📂 Project Structure

your-project-directory/
├── public/
│   └── ... (static assets)
├── src/
│   ├── components/
│   │   ├── EventCard.jsx
│   │   ├── EventDetails.jsx
│   │   ├── FilterBar.jsx
│   │   └── ... (other components)
│   ├── features/
│   │   └── events/
│   │       ├── eventsSlice.js
│   │       └── eventsSelectors.js
│   ├── app/
│   │   └── store.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   ├── main.jsx
│   └── ... (other source files)
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md


## 🚀 Prerequisites

Ensure you have the following installed:

-   **Node.js**: v14 or higher ([Download Node.js](https://nodejs.org/))
-   **npm**: v6 or higher (comes with Node.js)

## 🛠️ Setup and Installation

### 1. **Clone the Repository**

```bash
git clone [https://github.com/Junayidjd/perisit-venture-react-assignment](https://github.com/Junayidjd/perisit-venture-react-assignment)
cd persist-venture-react-assignment
2. Install Dependencies
Bash

npm install
This command installs all necessary dependencies listed in package.json.

3. Start the Development Server
Bash

npm run dev
The application will be available at http://localhost:3000.

📦 Dependencies
Core Dependencies:
react: JavaScript library for building UIs.
react-dom: Entry point to the DOM and server renderers for React.
vite: Fast bundler and build tool.
@vitejs/plugin-react: Vite plugin for React.
State Management:
@reduxjs/toolkit: Efficient Redux development.
react-redux: Official React bindings for Redux.
UI Libraries:
@mui/material: Material Design components.
@chakra-ui/react: Modular and accessible React components.
@emotion/react, @emotion/styled: CSS-in-JS libraries for Chakra UI.
Styling and Tailwind CSS:
tailwindcss: Utility-first CSS framework.
@tailwindcss/vite: Tailwind CSS integration with Vite.
tailwind-merge: Merging Tailwind class names.
tailwindcss-animate: Animations for Tailwind CSS.
Animation Libraries:
framer-motion: Motion library for React.
gsap: High-performance JavaScript animations.
Utilities:
lucide-react: Icon library.
clsx: Conditional className utility.
@radix-ui/react-select: Customizable select dropdown.
Linting and TypeScript:
eslint: JavaScript and JSX linter.
typescript, @types/react, @types/react-dom, @types/node: TypeScript support.
📜 Summary of Commands
Clone the repository and navigate to the project folder:

Bash

git clone <repository-url>
cd persist-venture-react-assignment
Install dependencies:

Bash

npm install
Start the development server:

Bash

npm run dev
