# Inventory API

A RESTful inventory management API built with Node.js, Express, Sequelize, PostgreSQL, bcrypt, and JWT authentication.

## Overview

This project is a backend-only API for managing inventory items and categories. It includes user registration and login, password hashing, JWT-based route protection, and CRUD operations for items and categories.

## Features

* User registration and login
* Password hashing with bcrypt
* JWT authentication
* Protected item routes
* CRUD operations for items
* CRUD operations for categories
* Sequelize models and associations
* Validation for key request fields
* Error handling with appropriate status codes

## Tech Stack

* Node.js
* Express.js
* Sequelize
* PostgreSQL
* bcrypt
* JSON Web Token (JWT)
* dotenv

## Project Structure

* `controllers/` — request handling logic
* `routes/` — API route definitions
* `models/` — Sequelize models and associations
* `middleware/` — authentication middleware
* `config/` — database configuration

## Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd inventory-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Example:

```env
PORT=3000
TOKEN_SECRET=your_jwt_secret_here
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
```

### 4. Run the database and migrations

Use your normal Sequelize workflow for creating the database and running migrations.

### 5. Start the server

```bash
npm start
```

The API will run at:

```bash
http://localhost:3000
```

## Authentication Flow

### Register a user

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "password": "password123"
  }'
```

### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "password": "password123"
  }'
```

Example response:

```json
{
  "accessToken": "your_jwt_token"
}
```

Use the returned token in protected routes:

```bash
-H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## API Routes

### Auth

* `POST /api/auth/register` — register a new user
* `POST /api/auth/login` — login and receive a JWT

### Items

* `GET /api/items` — list items (protected)
* `POST /api/items` — create item (protected)
* `PUT /api/items/:id` — update item (protected)
* `DELETE /api/items/:id` — delete item (protected)

### Categories

* `GET /api/categories` — list categories
* `POST /api/categories` — create category
* `PUT /api/categories/:id` — update category
* `DELETE /api/categories/:id` — delete category

## Example Requests

### Get items

```bash
curl -X GET http://localhost:3000/api/items \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Create category

```bash
curl -X POST http://localhost:3000/api/categories \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Electronics",
    "description": "Electronic products"
  }'
```

### Create item

```bash
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "name": "Keyboard",
    "description": "Mechanical keyboard",
    "quantity": 10,
    "price": 79.99,
    "categoryId": 1
  }'
```

### Update item

```bash
curl -X PUT http://localhost:3000/api/items/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "name": "Updated Keyboard",
    "description": "Updated description",
    "quantity": 5,
    "price": 49.99,
    "categoryId": 1
  }'
```

### Delete item

```bash
curl -X DELETE http://localhost:3000/api/items/1 \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Validation and Error Handling

The API includes validation and structured error responses such as:

* `400 Bad Request` for missing or invalid input
* `401 Unauthorized` for missing or invalid token / invalid credentials
* `404 Not Found` for missing items or categories
* `500 Internal Server Error` for unexpected server issues

## What I Learned

This project helped me practice:

* building RESTful APIs with Express
* structuring controllers and routes
* working with Sequelize models and associations
* handling authentication with JWT
* hashing passwords securely with bcrypt
* validating input and returning meaningful status codes
* debugging route protection and authentication flow

## Future Improvements

* add duplicate username checks during registration
* add password strength rules
* add tests for controllers and routes
* add a Postman collection for easier demo/testing
* deploy the API for live demonstration

## Notes

This project is backend-only, so there is no frontend UI. It is intended to be tested with curl, Postman, or another API client.
