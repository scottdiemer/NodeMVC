const express = require("express");
const router = express.Router();
const path = require("path");

const viewsPath = path.join(__dirname, "..", "views");

router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(viewsPath, "index.html"));
});

router.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(viewsPath, "new-page.html"));
});

router.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html"); // 302 by default
});

module.exports = router
