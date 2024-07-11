# LeafyCart Backend

## Project Overview

This project is the backend part of application, providing users with the ability to browse products, add them to the cart, and proceed to checkout. This project is built to deliver a seamless shopping experience. It includes functionalities such as product listing, search, filtering, cart management, and checkout process. The goal is to provide a user-friendly interface for customers to easily navigate and purchase products.

## Features

- **Browse a list of products**
- **Search for products by name or category**
- **Filter products by various criteria**
- **Add products to the cart**
- **View cart details**
- **Proceed to checkout**
- **Place an order**
- **Add, Edit or Delete product**

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Validation**: Zod
- **Other**: TypeScript, ES6+

## Setting Up and Using the Application

### Prerequisites

- Node.js (>=14.x)
- npm or yarn
- MongoDB

### Installation

1. **Clone the repository**:

   ```sh
   https://github.com/yasin-arafat-389/LeafyCart-Backend
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following variables:

   ```
   NODE_ENV=development
   PORT=5000
   DATABASE_URL=your mongodb URI

   ```

4. **Run the application**:
   ```sh
   npm run start:dev
   ```

### Usage

Once the server is running, you can use the following endpoints:

### API Endpoints

- **POST /api/v1/create-product**: Create new product
- **GET /api/v1**: Get all products
- **GET /api/v1/:id**: Get single product
- **DELETE /api/v1/delete-product**: Delete a product
- **PUT /api/v1/update-product**: Update a product
- **POST /api/v1/check-availability**: Check availability of a product
- **POST /api/v1/create-order**: Create order
