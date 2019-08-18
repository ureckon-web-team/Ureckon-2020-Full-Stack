const express = require("express");
const router = express.Router();

// Get route for auth page
router.get("/", (req, res) => {
    res.render("auth");
});

// Post route for login form
router.post("/login", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

// Post route for signup form
router.post("/signup", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;
