
# 🧑‍💻 MERN User Dashboard

A full-stack user dashboard built with **MongoDB**, **Express**, **React (Vite)**, and **Node.js**. The application allows you to fetch and display a list of users stored in a MongoDB database.

---

## 🚀 Features

- Fetch and display users from MongoDB
- RESTful API built with Express
- React frontend with Axios and React Router
- Clean project structure with models, controllers, and routes
- Tailwind CSS-ready for styling (optional)

---

## 📁 Project Structure

```
mern-user-dashboard/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── src/
│   ├── index.html
│   └── vite.config.js
```

---

## 🛠️ Prerequisites

- Node.js & npm
- MongoDB (local or Atlas)
- Git (optional)

---

## 🖥️ Backend Setup

### 1. Navigate to backend folder:

```bash
cd backend
```

### 2. Install backend dependencies:

```bash
npm install
```

### 3. Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/userdb
```

> If you're using MongoDB Atlas, replace the URI accordingly.

### 4. Start the backend server:

```bash
node server.js
```

You should see:

```
MongoDB Connected
Server running on port 5000
```

---

## 💻 Frontend Setup (Vite + React)

### 1. Navigate to frontend folder:

```bash
cd ../frontend
```

### 2. Install frontend dependencies:

```bash
npm install
```

### 3. Run the frontend development server:

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🔄 API Proxy Setup (Optional but Recommended)

To avoid CORS issues and clean up Axios calls, add this to `vite.config.js` in the frontend:

```js
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true,
    },
  },
},
```

Now you can use:

```js
axios.get('/api/users')
```

Without hardcoding `localhost:5000`.

---

## 📬 API Endpoints

| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| GET    | /api/users     | Get all users         |
| POST   | /api/users     | Create a new user     |

---

## 🧪 Testing API

Use tools like **Postman** or **curl** to test:

```bash
GET http://localhost:5000/api/users
```

---

## 🧠 Future Enhancements

- Add user registration form
- Hash passwords (bcrypt)
- Add authentication (JWT)
- Style UI with Tailwind CSS
- Deploy to Netlify & Render

---

## 🤝 License

This project is open-source and free to use for educational or personal projects.

---

## 🙋‍♂️ Questions?

Feel free to reach out or open an issue for help.
