# 🚌 Akasha Lavishlines - Enterprise Bus Admin Panel

![Project Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=for-the-badge)
![Stack](https://img.shields.io/badge/Stack-MERN-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge)

A premium, full-stack administration dashboard designed for **Akasha Lavishlines** to manage luxury bus operations, bookings, and financial analytics. Built with modern web technologies, this system streamlines offline ticketing and provides real-time insights into fleet performance.

---

## ✨ Key Features

### 🔐 Secure & Robust
- **Role-Based Access**: Secured admin login flow using **JWT Authentication**.
- **Data Integrity**: Backend validation and error handling ensures reliable data processing.

### 📊 Interactive Dashboard
- **Real-Time Analytics**: Visual cards tracking Total Bookings, Active Passengers, and Revenue.
- **Dynamic Updates**: Dashboard reflects standard CRUD operations instantly.
- **Glassmorphism UI**: A visually stunning interface with modern aesthetics, gradients, and micro-interactions.

### 🎫 Booking Management System
- **Instant Ticketing**: "Point-of-Sale" style interface for generating offline tickets for walk-in passengers.
- **Live Preview**: See the ticket visual while typing passenger details.
- **Full Control**: View, Edit, and Cancel bookings with a seamless user experience.
- **Smart Filtering**: Filter bookings by status (Confirmed, Pending, Cancelled) or search by ID/Name.
- **Export Data**: One-click CSV export for offline accounting.

---

## 🛠️ Technology Stack

### Frontend (Client-Side)
- **Framework**: React.js (via Vite) for blazing fast performance.
- **Styling**: TailwindCSS for a custom, responsive, and premium design system.
- **Icons**: Lucide React for consistent and beautiful iconography.
- **State Management**: React Hooks & Context.
- **HTTP Client**: Axios with Interceptors for secure API communication.

### Backend (Server-Side)
- **Runtime**: Node.js & Express.js.
- **Database**: MongoDB (Atlas/Local) with Mongoose ODM.
- **Auth**: BCrypt for password hashing & JSON Web Tokens (JWT) for session management.
- **Security**: CORS enabled & Protected Route Middleware.

---

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (Local or Atlas Connection String)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/Tinku785/Akasha-Levishlines-AdminPanel.git
cd bus-admin-panel
```

### 2. Backend Setup
Navigate to the backend folder and install dependencies.
```bash
cd backend
npm install
```

**Configuration**:
Create a `.env` file in the `backend` root:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/bus-admin-panel
JWT_SECRET=your_super_secret_key_change_this
```

**Seed Admin User**:
Run the script to create your first admin account (`admin@akasha.com` / `admin123`).
```bash
node src/scripts/createAdmin.js
```

**Start Server**:
```bash
npm run dev
```

### 3. Frontend Setup
Open a new terminal, navigate to frontend, and install dependencies.
```bash
cd frontend
npm install
```

**Configuration**:
Create a `.env` file in the `frontend` root:
```env
VITE_API_URL=http://localhost:5000/api
```

**Start Application**:
```bash
npm run dev
```
Access the admin panel at `http://localhost:5173`.

---

## 📂 Project Structure

```bash
bus-admin-panel/
├── backend/                # Express API Server
│   ├── src/
│   │   ├── config/         # Database connection
│   │   ├── controllers/    # Request logic
│   │   ├── models/         # Mongoose Schemas
│   │   ├── routes/         # API Routes
│   │   └── server.js       # Entry point
│   └── ...
├── frontend/               # React Application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # View pages (Dashboard, Login, etc.)
│   │   ├── services/       # API integration
│   │   └── App.jsx         # Main Layout & Routing
│   └── ...
└── README.md
```

---

## 👨‍💻 Developer Guide

- **API Testing**: Use Postman or ThunderClient to test routes at `http://localhost:5000/api`.
- **Linting**: Both frontend and backend have linting scripts setup for code quality.

---

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

---

<p align="center">
  Built with ❤️ for Akasha Lavishlines
</p>
