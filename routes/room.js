const express = require("express")
const Room = require("../models/room")
const crypto = require("crypto")

const router = express.Router();

//middleware for checking that user is login or not
function isLoggedIn(req, res, next) {
  if (!req.session.user) return res.redirect("/login");
  next();
}

router.get("/dashboard", isLoggedIn, (req, res) => {
  res.render("dashboard");
});

router.post("/create-room", isLoggedIn, async (req,res)=>{
    const roomId = crypto.randomBytes(4).toString("hex");

    await Room.create({
        roomId,
        createdBy: req.session.user._id,
    })

res.redirect(`/chat/${roomId}`);
});

router.post("/join-room", isLoggedIn, async (req,res)=>{
const { roomId } = req.body;

const room = await Room.findOne({roomId})
if(!room) return res.send("Room not found");

res.redirect(`/chat/${roomId}`);
});

router.get("/chat/:roomId",isLoggedIn, async (req,res)=>{
    const { roomId } = req.params;

    const room = await Room.findOne({ roomId});
    if(!room) return res.send("Invalid Room")

    res.render("chat",{
        roomId,
        user: req.session.user
    });
});

module.exports = router;