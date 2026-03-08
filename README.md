📚 Book Store Application (MERN Stack)
📌 Project Overview

The Book Store Application is a web-based platform developed using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The application allows users to browse books online. Users can view free books without logging in, but after user login they can access all available books. The system focuses on a simple and user-friendly interface for book browsing.

🚀 Features

1.View free books without login
2.User authentication (Login & Signup)
3.After login, users can access all books
4.Responsive and clean UI
5.Dynamic book data fetched from backend
6.Secure API communication

🛠️ Technologies Used
- Frontend
- React.js
- HTML
- CSS
- JavaScript

Backend
- Node.js
- Express.js

Database
- MongoDB

Other Tools
- Axios
- JWT Authentication
- Git & GitHub

📂 Project Structure
BookStore-MERN
│
├── backend
│   ├── models
│   │   └── Book.js
│   ├── routes
│   │   └── bookRoutes.js
│   ├── controllers
│   │   └── bookController.js
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   └── BookList.jsx
│   │   ├── pages
│   │   │   └── Home.jsx
│   │   └── App.js
│
└── package.json
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/sakuu1915/bookStoreApp.git
2️⃣ Install backend dependencies
cd backend
npm install
3️⃣ Install frontend dependencies
cd frontend
npm install
4️⃣ Configure environment variables
Create a .env file in backend and add:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
5️⃣ Run the application
Start backend:
npm start
Start frontend:
npm run dev
💻 Usage

- Users can browse free books directly from the homepage.
- To access all books, users must create an account and log in.
- After login, the system displays complete book collection.

📚 Learning Outcomes

Through this project I learned:
- Building full-stack applications using MERN Stack
- Implementing user authentication
- Creating REST APIs using Express.js
- Connecting MongoDB with Node.js
- Managing frontend state using React.js

👩‍💻 Author

Sakshi Havaldar
MCA Student | MERN Stack Developer
