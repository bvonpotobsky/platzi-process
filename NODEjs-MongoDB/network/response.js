exports.success = (req, res, message) => {
  res.send({
    error: "",
    body: message,
  });
};

exports.error = (req, res, status, message) => {
  res.status(status || 500);
  res.send({
    error: message,
    body: "",
  });
};
