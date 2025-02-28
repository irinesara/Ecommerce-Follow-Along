Ecommerce Follow Along
Welcome to the Ecommerce Follow Along project.This guide will help to build a fully functional ecommerce platform while gaining hands-on experience with modern web technologies.

Project Description
This project aims to create an interactive ecommerce website with essential features such as:
Product Listings
Shopping Cart
Secure Checkout
User Authentication

Will build these features, gaining practical experience in:

Front-end Development: HTML, CSS, JavaScript (React)
Back-end Development: Node.js, Express and database integration
Version Control: Git and GitHub for collaboration
Full-stack Application Setup

Milestone 1: Project Overview
In this initial phase I focused on laying the foundation:

Planning
Defined key components: product catalog, user authentication and payment processing.

Technologies Used
Front-end: HTML, CSS, JavaScript (React)
Back-end: Node.js with Express for APIs
Database: MongoDB or SQL for storing product and user data

Repository & Version Control
GitHub Repository: Set up for managing the codebase.
Version Control: Using Git branches, commits and pull requests to track progress.
This milestone provides a clear roadmap for the next phases of development.

Milestone 2: Project Setup & Login Page
This milestone focuses on creating the project structure,configuring tools and starting with the first user-facing feature – the Login Page.

Create a structured folder hierarchy for the project.
Set up a React app for the frontend.
Set up a Node.js server for the backend.
Configure Tailwind CSS for streamlined styling.
Add optional extensions for improving development efficiency.
Build a functional and styled Login Page for the frontend.

Key Features of Milestone 2
Project Folder Structure: Organize project files into separate frontend and backend directories.
React Frontend Setup: Initialize a React application for building the user interface.
Node.js Backend Setup: Set up a simple Node.js server for future API integration.
Tailwind CSS Configuration: Integrate and configure Tailwind CSS for modern, responsive styling.
Login Page Development: Create the first user interface of the e-commerce application, focusing on functionality and styling.

 Milestone 3: Backend Setup & Database Integration
In this milestone, we focused on setting up the backend, defining a structured folder hierarchy, and integrating MongoDB for data storage.
This was a crucial step in establishing a scalable and organized backend architecture that will support future API development.

Learning Goals
Created a structured backend folder hierarchy with dedicated directories for routes, controllers, models, and middleware.
Set up a backend server using Node.js and Express.
Configured the server to listen on a designated port.
Integrated MongoDB and established a successful connection to the database.
Implemented basic error handling to provide clear error messages for debugging and user feedback.

Key Features of Milestone 3
Backend Folder Structure:
Organized project files with clear separation of concerns (routes, controllers, models, middleware).
Introduced utils and middlewares for modular and reusable code.
Server Setup:
Configured an Express server to handle API requests.
Set up the server to listen on a designated port.
Database Connection:
Integrated MongoDB for efficient data storage.
Established a successful connection between the server and MongoDB.
Error Handling:
Implemented basic error-handling middleware.
Ensured that meaningful error messages are returned for debugging and user feedback.

Milestone 4: User Model, Controllers & File Uploads
With the backend structure in place we focused on defining the User Model, implementing controllers for user-related operations and enabling file uploads using Multer.

Learning Goals
Created a User Model to define how user data is stored in MongoDB.
Implemented a User Controller to manage user-related API actions.
Integrated Multer to handle file uploads efficiently.
Updated the README file to document progress.

Key Features of Milestone 4
User Model Creation:
Designed the User Schema using Mongoose to define user attributes (name, email, password, etc.).
Ensured proper validation and schema constraints.
User Controller Implementation:
Developed routes to create users, fetch user data, and manage authentication.
Implemented request handling logic for user-related actions.
File Uploads with Multer:
Integrated Multer to allow users to upload profile pictures.
Configured storage settings to handle image uploads efficiently.
API Documentation & Cleanup:
Improved code structure and comments for clarity.
Updated the README file to reflect progress.

Milestone 7: Project Overview
It involves the creation of a secure login endpoint that facilitates user authentication. The process begins when the user submits their credentials, which can be either an email or a username along with a password. The backend then queries the database to find the corresponding user account. Once the account is found, the entered password is hashed using bcrypt, a secure hashing algorithm. This hashed password is then compared with the hashed version stored in the database. If the two hashes match, the user is authenticated and granted access. This approach ensures that sensitive data, such as passwords, are never stored or transmitted in plain text, providing a high level of security for user logins.
