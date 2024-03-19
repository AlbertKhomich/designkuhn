const express = require("express");
const app = express();

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
