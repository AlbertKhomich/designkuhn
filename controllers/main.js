exports.getIndex = (req, res, next) => {
  res.render("index", {
    pageTitle:
      "Designstudio und Atelier von Oksana Kuhn | Kleideranfertigung | Atelier | Design",
  });
};
