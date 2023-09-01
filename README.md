# A dynamic online store for organic products using React and Node.js.

## Description
The project is an online platform designed to facilitate the purchase of organic products. It combines front-end technologies like **React** with back-end technologies like **Node.js** to create a user-friendly and interactive online store. Users can explore a variety of organic products, view detailed information about each item, add products to their shopping cart, and place orders. The project also includes features such as dynamic product sorting, real-time updates on cart contents and costs, and a responsive design to ensure a seamless experience across devices. Additionally, the project incorporates database integration using **MySQL** to manage product data and order information. The project is fully responsive, ensuring an optimal user experience on various devices.

## Instructions for starting this project:

Before you begin, ensure you have MySQL Workbench installed. 

### Database Setup:
- Open MySQL Workbench.
- Import the "organick.sql" file into MySQL Workbench to create the database schema and initial data. It's located in "sql" folder of this project.

### NPM Install:
- Use npm -i (npm install) in "server" and "client" folders to download all necessary dependancies for the server and for the frontend.

### Environment Variables
- In the "server" folder, create a ".env" file if one doesn't already exist.
- Inside the ".env" file, configure the following environment variables:
`PORT`: Set the desired port number for your server (default is 4004).
`PASSWORD`: Set a secure password for connecting to the database (e.g., '112233').

### Starting the Server and Frontend:
- In "server" folder use "npm start" command to start server.
- In "client" folder use "npm start" command as well to start frontend part.

### Open your web browser and access the project by navigating to the appropriate URL (usually http://localhost:3000/).
