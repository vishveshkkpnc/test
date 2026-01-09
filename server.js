const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Dummy login data (temporary)
const users = {
    "admin": "1234",
    "worker01": "work123",
    "student01": "vnit123"
};

// Login route
app.post("/login", (req, res) => {
    const { userid, password } = req.body;

    if (users[userid] && users[userid] === password) {
        res.redirect("/home.html");
    } else {
        res.send("<h2>Invalid Login ❌</h2><a href='/'>Go Back</a>");
    }
});

// Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
