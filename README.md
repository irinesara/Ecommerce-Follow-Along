Welcome to the Ecommerce Follow Along
This project is designed to guide you through the development of a fully functional ecommerce platform, providing hands-on experience in building real-world applications using modern web technologies.

Project Description
The purpose of this project is to build an ecommerce website that users can interact with, featuring common ecommerce functionality such as product listings, shopping cart, checkout process, and user authentication. The project will be built incrementally, with each milestone adding a new set of features.

Throughout this project, you will gain experience in:

Front-end development (HTML, CSS, JavaScript)
Back-end development (Node.js, Express, databases)
Version control using Git and GitHub
Setting up a full-stack web application
The project will be broken down into milestones that focus on specific features and functionality. By the end of this project, you will have a working ecommerce platform and a strong understanding of how to develop such systems.

Milestone 1: Project Overview
In this first session, we focused on the foundational steps required to kickstart the project:

Planning: We discussed the project’s structure and planned out the necessary components, such as product catalogs, user authentication, and payment processing.
Technologies: We reviewed the tools and technologies that will be used in the project, including:
Front-end: HTML, CSS, JavaScript (with potential frameworks like React or Vue.js)
Back-end: Node.js with Express for creating APIs
Database: MongoDB or SQL database to store product and user data
Repository Setup: We created the GitHub repository to manage the codebase and track progress.
Version Control: Introduction to Git and how we will manage project changes using branches, commits, and pull requests.
This session served as the groundwork for the following milestones and gave an overview of how the project will evolve.

Features to be Implemented
Here’s a high-level list of features that will be included as the project progresses:

User Authentication: Allow users to create accounts, log in, and manage their profiles.
Product Catalog: Display a collection of products with sorting and filtering options.
Shopping Cart: Enable users to add products to their cart and manage the cart's contents.
Checkout Process: Implement a checkout process where users can enter shipping information and complete their purchase.
Payment Integration: Integrate with a payment provider (e.g., Stripe or PayPal) to process payments securely.
Admin Panel: Create an admin panel where administrators can manage products, orders, and users.

Milestone 19
Backend: In this milestone I added the endpoint for the put request from the frontend and then also did app.use(cors()). I also routed it in the controller as well as adding the logic for it.

Frontend: I added the components cart.jsx and cartcomponent.jsx where I will render the frontend for cart page. I also used fetch request to get and display the products in the cart. I also added fetch request to put and update the changes made to the quantity of the page using the + and - icons on each product card.
