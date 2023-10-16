
# Node API Boilerplate

This Node.js API serves as a foundational template for my projects. It has been meticulously built following the SOLID principles and Clean Architecture, ensuring that each layer is loosely coupled. The example domain used in this API is "user," implementing a single use case for login, serving as an architectural reference.

## Technologies

- **Node.js:** This project is built using Node.js, a popular JavaScript runtime for building server-side applications.

- **MongoDB:** MongoDB is employed as the database for this API, offering a flexible and scalable data storage solution.

- **pnpm:** We use pnpm as a package manager for efficient dependency management in Node.js applications.

- **Docker:** Docker is used for containerization, simplifying deployment across various environments.

- **docker-compose:** Docker Compose is utilized to define and manage multi-container Docker applications, facilitating the setup of both the application and the database.

- **TypeScript:** TypeScript provides static typing to JavaScript, enhancing code quality and developer productivity.

- **Swagger:** Swagger is utilized for API documentation, ensuring clear and accessible documentation of your endpoints.

## Project Structure

This API project meticulously adheres to SOLID principles and Clean Architecture, offering a well-organized structure:

- **Entities:** Represent core data models of the application, such as the "User" entity in this example.

- **Use Cases:** Define the business logic of the application, with an example use case for user login.

- **Repositories:** Manage data storage and retrieval, with MongoDB used as the database in this template.

- **Controllers:** Expose API endpoints and handle HTTP requests and responses.

- **Middleware:** Middleware functions perform actions before or after a route handler, enhancing the API's capabilities.

## Getting Started

To start using this Node API boilerplate, follow these steps:

1. Clone this repository to your local system:

   ```bash
   SSH: git clone git@git.jobsity.com:mateusdreher/node-challenge.git
   HTTPS: git clone https://git.jobsity.com/mateusdreher/node-challenge.git

2. Navigate to the project folder:
	```
		cd your-repository
3. Provide execute permission to the setup script:
	```
			chmod +x setup.sh
4. Run the script:
	```
		./start.sh
	```
	or

	```
			sh start.sh


The script will containerize both the application and the database and ensure communication between them. You will receive a link containing the container's IP to access the application.
After running script do you receive a message: 

```
The application is now running. You can access it by clicking the following link:
http://172.19.0.4:3004/docs
```
You can access the API documentation by following the provided link. The documentation allows you to test the API's endpoints and understand how it works. To make the login process easier, you can use the example email and password provided in swagger endpoint example.


**Please Note**: Before running the script (start.sh), make sure to configure your environment based on the `.env.example` file. This file provides the necessary configuration settings for your application.