# Car Dealer API

A RESTful API for managing car dealerships, car manufacturers, and vehicle inventory built with Node.js, Express, TypeScript, and MongoDB.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Data Models](#data-models)

## ✨ Features

- **Dealer Management**: Create, read, update, and delete car dealerships
- **Car Make Management**: Manage car manufacturers and brands
- **Vehicle Inventory**: Track cars with dealer and manufacturer relationships
- **RESTful API**: Clean and intuitive API design
- **TypeScript**: Full type safety
- **MongoDB Integration**: NoSQL database with Mongoose ODM
- **Logging**: Winston-based logging system
- **Security**: Helmet.js for security headers
- **CORS Enabled**: Cross-origin resource sharing support

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js 5.1.0
- **Database**: MongoDB (via Mongoose 8.16.0)
- **Logging**: Winston 3.17.0
- **HTTP Logger**: Morgan 1.10.0
- **Security**: Helmet 8.1.0
- **ID Generation**: ULID 3.0.1
- **Development**: Nodemon, ts-node

## 📦 Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account or local MongoDB instance
- npm or yarn package manager

## 🚀 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd car-dealer
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory (see [Environment Variables](#environment-variables))

## 🔐 Environment Variables

Create a `.env` file with the following variables:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority&appName=CarDealer
NODE_ENV=development
```

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

### Format Code
```bash
npm run format
```

The server will start on `http://localhost:5000`

## 📡 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### 🏢 Dealer Endpoints

#### Create Dealer
```http
POST /car-dealer/
Content-Type: application/json

{
    "name": "Ahmed Motors",
    "email": "contact@ahmedmotors.com",
    "city": "Riyadh"
}
```

#### Get All Dealers
```http
GET /car-dealer/
```

#### Get Dealer by ID
```http
GET /car-dealer/:id
```

#### Update Dealer
```http
PUT /car-dealer/:id
Content-Type: application/json

{
    "name": "Ahmed For Cars"
}
```

#### Delete Dealer
```http
DELETE /car-dealer/:id
```

---

### 🏭 Car Make Endpoints

#### Create Car Make
```http
POST /car-make
Content-Type: application/json

{
    "brand": "Toyota",
    "country": "Japan"
}
```

#### Get All Car Makes
```http
GET /car-make
```

#### Get Car Make by ID
```http
GET /car-make/:id
```

#### Update Car Make
```http
PUT /car-make/:id
Content-Type: application/json

{
    "country": "China"
}
```

#### Delete Car Make
```http
DELETE /car-make/:id
```

---

### 🚗 Car Endpoints

#### Create Car
```http
POST /car/:dealerId/:carMakeId
Content-Type: application/json

{
    "name": "Camry",
    "color": "white",
    "price": 98000,
    "year": 2025
}
```

#### Get All Cars
```http
GET /car
```

#### Get Cars by Dealer ID
```http
GET /car/getCarsByDealer/:dealerId
```

#### Get Cars by Car Make ID
```http
GET /car/getCarsByMake/:carMakeId
```

#### Get Car by ID
```http
GET /car/:id
```

#### Update Car
```http
PUT /car/:id
Content-Type: application/json

{
    "price": 100000
}
```

#### Delete Car
```http
DELETE /car/:id
```

---

## 📁 Project Structure

```
car-dealer/
├── src/
│   ├── config/
│   │   └── db.ts              # Database configuration
│   ├── controllers/
│   │   ├── car.controller.ts
│   │   ├── carDealer.controller.ts
│   │   └── carMake.controller.ts
│   ├── models/
│   │   ├── car.model.ts
│   │   ├── carDealer.model.ts
│   │   └── carMake.model.ts
│   ├── routers/
│   │   ├── car.routes.ts
│   │   ├── carDealer.routes.ts
│   │   └── carMake.routes.ts
│   ├── utils/
│   │   ├── generate-id.ts
│   │   └── logger.ts
│   └── app.ts                 # Application entry point
├── logs/                      # Log files
├── postman/                   # Postman collection
├── .env                       # Environment variables
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## 📊 Data Models

### Dealer Schema
```typescript
{
    name: String (required),
    email: String (required),
    city: String (required),
    createdAt: Date,
    updatedAt: Date
}
```

### Car Make Schema
```typescript
{
    brand: String (required),
    country: String (required),
    createdAt: Date,
    updatedAt: Date
}
```

### Car Schema
```typescript
{
    name: String (required),
    dealerId: ObjectId (ref: 'Dealer'),
    carMakeId: ObjectId (ref: 'CarMake'),
    color: String,
    year: Number,
    price: Number,
    createdAt: Date,
    updatedAt: Date
}
```

## 🔍 Response Format

### Success Response
```json
{
    "success": true,
    "data": { /* resource data */ }
}
```

### Error Response
```json
{
    "success": false,
    "error": "Error message"
}
```

## 📝 Logging

The application uses Winston for logging:
- **Error logs**: `logs/error.log`
- **Combined logs**: `logs/combined.log`
- **Console logs**: Development environment only

## 🧪 Testing

Import the Postman collection from the `postman/` directory to test all endpoints.

Collection file: `Car-Dealer.postman_collection.json`

## 🔒 Security Features

- **Helmet.js**: Sets various HTTP headers for security
- **CORS**: Configured for cross-origin requests
- **Input Validation**: Required field validation on all endpoints
- **Error Handling**: Global error handling middleware



Built with ❤️ for efficient car dealership management

