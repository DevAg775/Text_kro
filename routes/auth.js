const express = require("express")
const bcrypt = require("bcrypt")
const User = require("../models/user")

const router = express.Router();

router.get("/signup", (req,res)=>{
    res.render("signup");
})

router.post("/signup", async (req,res)=>{
    const { username, email , password} = req.body
    console.log(req.body)
    const existingEmail = await User.findOne({ email })
    if (existingEmail) return res.send("Email already in use")

    const existingUsername = await User.findOne({ username })
    if (existingUsername) return res.send("Username already taken")

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
    username,
    email,
    password: hashedPassword,
    });

    req.session.user = {
        _id: user._id,
        username: user.username,
        email: user.email,
    };

    res.redirect("/dashboard");
});

router.get("/signin", (req,res)=>{
    res.render("signin")
});

router.post("/signin", async (req,res)=>{
    const {email, password} = req.body;

    const user = await User.findOne({email})
    if(!user) return res.send("Invalid email")

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.send("Invalid Password")

    req.session.user = {
    _id: user._id,
    username: user.username,
    email: user.email
  };

  res.redirect("/dashboard");
})

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/signin");
  });
});

module.exports = router;