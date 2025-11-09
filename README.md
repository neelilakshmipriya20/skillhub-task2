SkillHub Academy – Task 2
---------------------------------------------------------------------------------------
Project Overview
---------------------------------------------------------------------------------------
This project is a recreation of Task 1 (SkillHub Academy website) using a templating engine and task runner as part of the internship requirements.
The goal is to implement a modular and scalable frontend setup using modern web development tools.
---------------------------------------------------------------------------------------
Technology Stack
---------------------------------------------------------------------------------------
Category	Tool Used	Purpose:
Templating Engine	: Nunjucks	To create reusable HTML templates with layouts, partials, and content blocks.
Bundler / Task Runner	: Gulp	To automate building, compiling, and serving the site using BrowserSync for live reload.
Styling Framework	: Bootstrap 5	For responsive and modern UI design.
---------------------------------------------------------------------------------------
📂 Folder Structure
---------------------------------------------------------------------------------------
SkillHub/
│
├── src/
│   ├── templates/
│   │   ├── base.njk
│   │   ├── index.njk
│   │   ├── about.njk
│   │   ├── contact.njk
│   │   └── partials/
│   │       ├── head.njk
│   │       ├── header.njk
│   │       └── footer.njk
│   │
│   └── assets/
│       ├── css/
│       ├── js/
│       └── img/
│
├── dist/                 # Compiled output (auto-generated)
├── gulpfile.js           # Gulp configuration
├── package.json
└── README.md
---------------------------------------------------------------------------------------
⚙️ Installation & Setup
---------------------------------------------------------------------------------------
Follow these steps to run the project locally:

1️⃣ Clone the repository
git clone https://github.com/neelilakshmipriya20/skillhub-task2.git
cd skillhub-task2

2️⃣ Install dependencies

Make sure Node.js (v16 or higher) and npm are installed. Then run:

npm install

3️⃣ Build the project

To compile all Nunjucks templates and copy assets to the dist folder:

gulp build

4️⃣ Run the development server

To start a local server with live reloading:

gulp


This will open your project automatically at
http://localhost:3000/
---------------------------------------------------------------------------------------
💡 Features
---------------------------------------------------------------------------------------
 Modular Nunjucks templating (with includes and blocks)
 Automatic file watching and live reload with BrowserSync
 Bootstrap 5 integration for responsive UI
 Clean folder structure following modern frontend practices

---------------------------------------------------------------------------------------
🚀 Deployment
---------------------------------------------------------------------------------------

The dist folder contains your final production files.
You can host it easily using GitHub Pages.
