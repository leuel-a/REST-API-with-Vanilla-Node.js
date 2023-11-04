# REST API with Vanilla Node.js -- Product Managment

This repository contains a simple Node.js API for managing products, which supports basic CRUD (Create, Read, Update, Delete) operations. This REST API is built purely on Node.js without the use of any frameworks like Express.js, demonstrating a bare-bones approach to API development with Node's core `http` module.

## Features

- Retrieve a list of all products (`GET /api/products`)
- Fetch a single product by ID (`GET /api/products/:id`)
- Create a new product (`POST /api/products`)
- Update a product by ID (`PUT /api/products/:id`)
- Delete a product by ID (`DELETE /api/products/:id`)

## Getting Started

These instructions will help you set up a copy of the project running on your local machine for development and testing purposes.

### Prerequisites

You'll need to have the following installed to run the application:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (normally comes with Node.js)

### Installation

To get a local copy up and running, follow these simple steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/leuel-a/REST-API-with-Vanilla-Node.js
   ```
2. Navigate to the repository directory:
   ```bash
   cd REST-API-with-Vanilla-Node.js
   ```
3. Install NPM packages:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
   The server will be running at [http://localhost:5000](http://localhost:5000).

## Usage

Interact with the API using a tool like Postman or any other API client to test the endpoints described above.

## Built With

- [Node.js](https://nodejs.org/) - The JavaScript runtime environment used, without additional frameworks.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## Authors

- **[Leuel Asfaw](https://github.com/leuel-a)** - _Initial work_

See also the list of [contributors](https://github.com/your-username/your-repo-name/contributors) who participated in this project.
