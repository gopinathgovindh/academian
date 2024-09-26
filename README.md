Academian
Academian is a web project that uses Tailwind CSS for designing and styling. The project is set up with Tailwind CSS and includes a custom configuration for extended theming and utility classes.

Features
Tailwind CSS: Rapidly build modern websites without writing custom CSS.
Custom Font: Uses the Poppins font throughout the site.
Custom Config: Tailwind configuration allows extending the default styles and optimizing CSS for production.
Installation
To install the project dependencies, run:

bash
Copy code
npm install
Development
Tailwind CSS is configured to automatically compile your CSS when making changes.

To watch for changes and compile the CSS in real-time, run:

bash
Copy code
npx tailwindcss -i ./assets/css/styles.css -o ./assets/css/output.css --watch
Explanation:
npx tailwindcss: This runs the Tailwind CLI using npx without installing it globally.
-i ./assets/css/styles.css: This specifies the input CSS file (in this case, styles.css) where you include the @tailwind directives (@tailwind base; @tailwind components; @tailwind utilities;).
-o ./assets/css/output.css: This specifies the output file where the compiled CSS will be saved.
--watch: This flag tells Tailwind to keep watching for changes in your CSS and automatically recompile when changes are detected.
Configuration
Tailwind is configured using the following tailwind.config.js:

js
Copy code
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './assets/**/*.html',
    './assets/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
Explanation:
content: Specifies the files where Tailwind should look for class names. This ensures unused styles are purged in production.

./*.html: Targets all HTML files in the root directory.
./assets/**/*.html: Targets HTML files in the assets directory and its subdirectories.
./assets/**/*.js: Targets JavaScript files in the assets directory and subdirectories.
theme.extend: Allows you to customize or extend the default Tailwind theme. In this case, it adds the Poppins font as the default sans-serif font.

plugins: An empty array is provided in case you want to add plugins later.

Package Information
This is the package.json file that contains the dependencies and scripts for the project:

json
Copy code
{
  "name": "academian",
  "version": "1.0.0",
  "description": "A web project using Tailwind CSS",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["tailwind", "css", "academian"],
  "author": "Your Name",
  "license": "ISC",
  "dependencies": {
    "tailwindcss": "^3.4.12"
  }
}
Explanation of package.json:
name: The project name (academian).
version: The version of the project (e.g., 1.0.0).
description: A brief description of the project.
main: The entry point of the project (not used in this case).
scripts: Custom npm scripts (like tests or build commands).
keywords: Keywords related to the project for easier discovery.
author: The author of the project (replace "Your Name" with your name).
license: The license type.
dependencies: Lists the tailwindcss package as a dependency (version ^3.4.12).
