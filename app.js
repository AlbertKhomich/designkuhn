const express = require("express");
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 1000,
  message: "Too many requests from this IP, please try again later.",
});

app.use(limiter);

app.use(bodyParser.urlencoded({ extended: true }));

const mainRoutes = require("./routes/main");
const { handle404 } = require("./middleware/errors");

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(mainRoutes);

app.use(handle404);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port${PORT}`);
});
