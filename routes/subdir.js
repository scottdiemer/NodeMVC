const express = require("express");
const router = express.Router();
const path = require("path");

const viewsPath = path.join(__dirname, "..", "views", "subdir");

router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(viewsPath, "index.html"));
});

router.get("/test(.html)?", (req, res) => {
  res.sendFile(path.join(viewsPath, "test.html"));
});

module.exports = router;
