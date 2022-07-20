const express = require("express");
const multer = require("./middleware/multer");

// const upload = multer({ dest: "uploads/items" });

const { ItemController } = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", multer, ItemController.add);
router.delete("/items/:id", ItemController.delete);

module.exports = router;
