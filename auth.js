module.exports = (req, res, next) => {
  console.log("Authenticating...");
  next();
};
