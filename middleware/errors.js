exports.errorHandle = (err, req, res, next) => {
  res.status(err.status || 500).render("error", {
    status: err.status || 500,
    message: err.message,
    pageTitle: "Error",
    portfolio: false,
  });
};

exports.handle404 = (req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
};
