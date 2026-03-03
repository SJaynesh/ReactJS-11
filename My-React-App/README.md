# 🛒 E-Commerce Web Application

A full-stack E-Commerce Web Application built using **Node.js (Backend API)** and **Next.js (Frontend)**.  
This application provides authentication, product management, cart system, order management and admin panel functionality.

---

## 🚀 Tech Stack

### 🔹 Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt
- Multer (Image Upload)

### 🔹 Frontend
- Next.js
- React.js
- Axios
- Tailwind CSS / CSS Modules

---

## 📁 Project Structure

```
ecommerce-app/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── frontend/
│   ├── app/ or pages/
│   ├── components/
│   ├── services/
│   ├── styles/
│   └── next.config.js
│
└── README.md
```

---

## ✨ Features

### 👤 Authentication
- User Registration
- User Login
- Admin Login
- JWT Based Authentication
- Role Based Authorization (Admin / User)

### 🛍️ Product Management
- Create Product (Admin)
- Update Product (Admin)
- Delete Product (Admin)
- View All Products
- View Single Product
- Upload Product Images

### 🛒 Cart System
- Add to Cart
- Remove from Cart
- Update Quantity
- View Cart Items

### 📦 Order System
- Place Order
- Order History (User)
- Order Management (Admin)
- Update Order Status

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend` folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/yourusername/ecommerce-app.git
cd ecommerce-app
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
npm run dev
```

Backend will run on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:3000
```

---

## 📡 Sample API Endpoints

### 🔹 Auth Routes

| Method | Endpoint | Description |
|--------|----------|------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

---

### 🔹 Product Routes

| Method | Endpoint | Description |
|--------|----------|------------|
| GET | /api/products | Get All Products |
| GET | /api/products/:id | Get Single Product |
| POST | /api/products | Create Product (Admin) |
| PUT | /api/products/:id | Update Product |
| DELETE | /api/products/:id | Delete Product |

---

### 🔹 Cart Routes

| Method | Endpoint | Description |
|--------|----------|------------|
| POST | /api/cart | Add To Cart |
| GET | /api/cart | Get Cart Items |
| DELETE | /api/cart/:id | Remove Item |

---

### 🔹 Order Routes

| Method | Endpoint | Description |
|--------|----------|------------|
| POST | /api/orders | Place Order |
| GET | /api/orders | Get User Orders |
| GET | /api/admin/orders | Get All Orders (Admin) |

---

## 🧪 Testing

You can test APIs using:
- Postman
- Thunder Client (VS Code Extension)

---

## 🚀 Future Enhancements

- Payment Gateway Integration (Stripe / Razorpay)
- Wishlist Feature
- Product Reviews & Ratings
- Admin Dashboard Analytics
- Email Notifications
- Inventory Management
- Deployment on Vercel / Render / AWS

---

## 🤝 Contributing

Contributions are welcome!  
If you'd like to improve this project, feel free to fork and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Developed by **Your Name**

