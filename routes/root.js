const express = require("express");
const router = express.Router();
const path = require("path");

const viewsPath = path.join(__dirname, "..", "views");

router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(viewsPath, "index.html"));
});

module.exports = router;
