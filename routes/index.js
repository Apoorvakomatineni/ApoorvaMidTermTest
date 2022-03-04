// Website - Movie Database
// Author - Apoorva Komatineni
// File - movie
// ID - 301231336
var express = require("express");
var router = express.Router();
let controllerIndex = require("../controllers/index");

/* GET home page. */
router.get("/", controllerIndex.home);

module.exports = router;
