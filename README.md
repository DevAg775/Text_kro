# 💬 Real-Time Chat Application

A room-based real-time chat web application built using **Node.js, Express, EJS, MongoDB, and Socket.IO**.
Users can create or join chat rooms and exchange messages instantly with persistent chat history.

---

## 🚀 Features

* 🔐 User Authentication (Signup & Login)
* 🏠 Create and Join Chat Rooms
* ⚡ Real-Time Messaging using Socket.IO
* 💾 Message Persistence with MongoDB
* 🔄 Chat History available after refresh
* 🌐 Simple and clean UI using EJS

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** EJS, HTML, CSS, Vanilla JS
* **Database:** MongoDB (Mongoose)
* **Realtime:** Socket.IO
* **Authentication:** Express Sessions + Bcrypt

---

## 📂 Project Structure

```
chat-app/
│
├── models/
│   ├── User.js
│   ├── Room.js
│   └── Message.js
│
├── routes/
│   ├── auth.js
│   └── room.js
│
├── views/
│   ├── signup.ejs
│   ├── login.ejs
│   ├── dashboard.ejs
│   └── chat.ejs
│
├── public/
│   ├── css/
│   └── js/
│       └── chat.js
│
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
PORT=3000
```

### 4. Run the application

```bash
npm run dev
```

or

```bash
npm start
```

---

## 🌍 Usage

1. Open browser at:

```
http://localhost:3000
```

2. Sign up or log in

3. Create a new room or join using room ID

4. Share the room ID with another user

5. Start chatting in real-time 🎉

---

## 🧠 How It Works

* User authentication is handled using sessions
* Socket.IO manages real-time communication
* Each room is handled using Socket.IO rooms
* Messages are stored in MongoDB
* On joining a room, previous messages are fetched and displayed

---

## 📌 Future Improvements

* Typing indicator
* Online/offline status
* Unread message count
* Seen/Delivered status
* File/Image sharing
* Better UI with Tailwind CSS

---

## 📷 Screenshots

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/90f81b12-a3c9-4070-996c-00d7f9b05a73" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e150ead3-27f5-4adb-be24-c5a5d29dd7bc" />


---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Devansh Agarwal**

* GitHub: https://github.com/DevAg775

---

⭐ If you found this project helpful, give it a star!
