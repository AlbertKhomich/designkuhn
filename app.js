const express = require("express");
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");

const mainRoutes = require("./routes/main");
const { handle404, errorHandle } = require("./middleware/errors");

const app = express();

app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 1000,
  handler: (req, res, next) => {
    const error = new Error(
      "Too many requests from this IP, please try again later."
    );
    error.status = 429;
    next(error);
  },
});

app.use(limiter);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(mainRoutes);

app.use(handle404);

app.use(errorHandle);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port${PORT}`);
});
