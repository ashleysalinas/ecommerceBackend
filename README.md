# ecommerceBackend
Week 13 - ORM assignment for the Trilogy/Southern Methodist University Web Development Bootcamp

## About
This project was created for Week 13 - ORM of the Trilogy/Southern Methodist University Web Development Bootcamp. It demonstrates the use of MySQL/Sequelize to create API routes that can GET (all or by ID), POST, UPDATE, and DELETE items for an ecommerce site.
## Built With
  * NodeJS
    * Sequelize
  * Express
  * MySQL
  * dotenv

## Getting Started
  ### Prerequisites
  You must have MySQL, Insomnia, and Node (as well as the Sequelize, Express, and dotenv packages) installed.
  
  Step 1.
  Clone the repo and CD into your local copy
  ``` git clone https://github.com/ashleysalinas/ecommerceBackend.git ```
  
  ``` cd ecommerceBackend ```
  
  Step 2. Add a .env file with your process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD for the config file.
  Step 3. Run the seeds into MySQL
  
  ```
  node seeds/index.js
  ```
  
  Step 4. Start the server and test routes in Insomnia.
  ```
  node server.js
  ```

 
 ## License
 Distributed under the MIT Licencse.
