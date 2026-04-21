require('dotenv').config()

const express = require("express")
const http = require("http");
const path = require("path");
const session = require("express-session");
const { Server } = require("socket.io");
// const { connect } = require("http2");
const authRoutes = require("./routes/auth")
const roomRoutes = require("./routes/room")
const connectDB = require("./config/connect")
const Message = require("./models/message")

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 8000;

connectDB(process.env.MONGO_URL)

app.set("view engine", "ejs");
app.set("views",path.resolve("./views"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve("./public")))

app.use(session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 }
}))

app.use((req,res,next)=>{
    res.locals.user = req.session.user || null;
    next()
})

app.use("/", authRoutes);
app.use("/", roomRoutes);


io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join-room", async ({ roomId, username }) => {
    socket.join(roomId);
    socket.to(roomId).emit("user-joined", {
      message: `${username} joined the room`
    });

    const oldMessages = await Message.find({ roomId })
    .sort({ createdAt: 1 })
    .limit(50)
    .populate("sender", "username");
    socket.emit("previous-messages", oldMessages);
  });

  socket.on("send-message", async ({ roomId, userId, username, text }) => {
    const savedMessage = await Message.create({
      roomId,
      sender: userId,
      text
    });

    io.to(roomId).emit("receive-message", {
      username,
      text,
      createdAt: savedMessage.createdAt
    });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});