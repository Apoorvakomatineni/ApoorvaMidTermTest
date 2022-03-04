// Website - Movie Database
// Author - Apoorva Komatineni
// File - index.js
// ID - 301231336
exports.home = function (req, res, next) {
  res.render("index", { title: "Home" });
};
