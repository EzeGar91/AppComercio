const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.get("/", cartController.viewCart);
router.post("/add", cartController.addToCart);

module.exports = router;
