const express = require("express");
const path = require("path");
const app = express();

// Set view engine
app.set("view engine", "ejs");

// Express BodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static files middleware:
app.use(express.static(path.join(__dirname, "/public")));

// Get route for index page
app.get("/", (req, res) => {
    res.render("index");
});

app.use("/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
