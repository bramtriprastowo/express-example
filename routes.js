const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
  res.send(`<h2>Hallo ini halaman Home</h2>`);
});

router.get("/json", (req, res) => {
  res.json({
    status: "Success",
    message: "Welcome to Express JS",
  });
});

router.get("/query", (req, res) => {
  const { page } = req.query;
  res.send({
    page,
  });
});

router.get("/product/:id", (req, res) => {
  res.send({
    id: req.params.id,
    produk: `Produk ${req.params.id}`,
  });
});

module.exports = router;
