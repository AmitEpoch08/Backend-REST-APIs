# Backend REST APIs - FSD Practical 5 & 6

## Objective

### Practical 5
To create RESTful APIs for Products, Users, Cart, and Orders using Node.js and Express with proper middleware, validation, and server-side error handling.

### Practical 6
To integrate MongoDB Atlas with the backend using Mongoose, define schemas for Product, User, Cart, and Order, and perform CRUD operations.

---

## 🛠 Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman
- GitHub

---

## Project Structure
Backend/
├── controllers/
├── models/
├── routes/
├── app.js
├── package.json
├── .gitignore
├── README.md


---

## Installation Steps

1. Clone the repository:
git clone https://github.com/AmitEpoch08/Backend-REST-APIs.git


2. Install dependencies:
npm install


3. Create a `.env` file in root directory:
PORT=3000
MONGO_URI=your_mongodb_connection_string


4. Run the server:
node app.js
Server runs at:
http://localhost:3000


---

## API Endpoints

### Products
- POST /products
- GET /products
- GET /products/:id
- PUT /products/:id
- DELETE /products/:id

### Users
- POST /users
- GET /users

### Cart
- POST /cart
- GET /cart

### Orders
- POST /orders
- GET /orders

---

## Features Implemented

✔ REST API Development  
✔ Middleware (express.json)  
✔ Server-side validation  
✔ Error handling  
✔ MongoDB Atlas Integration  
✔ Mongoose Schemas  
✔ CRUD Operations  
✔ Tested using Postman  

---

## 🗄 MongoDB Schemas

- Product
- User
- Cart
- Order

Schemas are defined using Mongoose with validation and references using ObjectId.

---

## Testing

All CRUD operations were tested using Postman and verified in MongoDB Atlas.

---

## Conclusion

Practical 5 and Practical 6 were successfully completed.  
MongoDB Atlas was integrated using Mongoose, and full CRUD operations were implemented and tested successfully.

---

## Author

Amit Prajapati  
B.Tech CSE  
Full Stack Development
