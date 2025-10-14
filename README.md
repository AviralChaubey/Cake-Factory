🍰 Cake Factory

A modern React-based web application for browsing and ordering cakes. The project follows a modular structure for scalability and maintainability, with separate folders for components, pages, hooks, and global styles.

🚀 Live Preview

Localhost: http://localhost:3000/

🧩 Project Structure
cake-factory/
├── node_modules/
├── public/
├── src/
│   ├── assets/          # Images, fonts, and static resources
│   ├── components/      # Reusable UI components (buttons, cards, forms, etc.)
│   ├── context/         # Global state management (React Context API)
│   ├── data/            # Static or mock data files
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components (Home, About, Products, etc.)
│   ├── styles/          # Global and modular CSS / Tailwind / SCSS files
│   ├── App.jsx          # Main app component
│   ├── index.js         # Entry point for rendering the app
│   ├── logo.svg         # App logo
│   └── reportWebVitals.js # Performance tracking
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

🛠️ Tech Stack

Frontend: React.js

Styling: CSS Modules / TailwindCSS (based on your setup)

State Management: Context API (optional: Redux if added later)

Routing: React Router (if implemented)

Performance Monitoring: reportWebVitals

⚙️ Setup and Installation

Clone the repository

git clone https://github.com/your-username/cake-factory.git
cd cake-factory


Install dependencies

npm install


Start the development server

npm start


Open your browser and visit
👉 http://localhost:3000/

📁 Available Scripts
Command	Description
npm start	Runs the app in development mode
npm run build	Builds the app for production
npm test	Launches the test runner
npm run eject	Ejects from Create React App configuration
🧠 Folder Highlights

components/ → Reusable parts of the UI like Navbar, Footer, and CakeCard.

pages/ → Full-page components like HomePage, MenuPage, and ContactPage.

context/ → App-wide states like CartContext or ThemeContext.

hooks/ → Custom React hooks for reusability (e.g., useFetch, useCart).

styles/ → Centralized CSS or Tailwind configuration files.

💡 Future Enhancements

Integrate backend (Flask / Node.js) for dynamic data

Add authentication (login/signup)

Implement cart and payment gateway

Improve responsive UI

📜 License

This project is licensed under the MIT License — feel free to use and modify.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
