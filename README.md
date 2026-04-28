# Inventory API

A production-deployed RESTful API for inventory management, built with Node.js, Express, Sequelize, PostgreSQL, bcrypt, and JWT authentication.

## Live Demo

**Base URL:** https://inventory-api-2-hldb.onrender.com

> Note: hosted on Render's free tier — first request may take ~50 seconds to wake up.

Try it immediately (no auth required):

GET https://inventory-api-2-hldb.onrender.com/api/categories

## Overview

This project is a backend API for managing inventory items and categories. It includes user registration and login, password hashing, JWT-based route protection, and CRUD operations for items and categories.

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

```env
PORT=3000
TOKEN_SECRET=your_jwt_secret_here
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
```

### 4. Run migrations

```bash
npm run migrate
```

### 5. Start the server

```bash
npm start
```

The API will run at `http://localhost:3000`

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

* `400 Bad Request` for missing or invalid input
* `401 Unauthorized` for missing or invalid token / invalid credentials
* `404 Not Found` for missing items or categories
* `500 Internal Server Error` for unexpected server issues

## What I Learned

* Building and deploying RESTful APIs with Express
* Structuring controllers, routes, and middleware
* Working with Sequelize models and associations
* Handling authentication with JWT
* Hashing passwords securely with bcrypt
* Configuring environment-specific database connections for production
* Deploying Node.js + PostgreSQL to Render

## Future Improvements

* Add duplicate username checks during registration
* Add password strength rules
* Add tests for controllers and routes
* Add a Postman collection for easier demo/testing
* Add role-based access control (admin vs standard user)
* Add pagination for item listings
