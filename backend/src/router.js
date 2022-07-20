const express = require("express");
const multer = require("./middleware/multer");

// const upload = multer({ dest: "uploads/items" });

const { ItemController } = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
// Renvoie l'item sans les prix
router.get("/items/:id", ItemController.read);
// Renvoie les achats d'un item
router.get("/items/:id/purchases", ItemController.readPurchasesByItem);
router.put("/items/:id", ItemController.edit);
// Ajout d'un nouveu produit
router.post("/items", multer, ItemController.add);
// Ajout d'un prix et d'une date à un item
router.post("/items/:id/purchases", ItemController.addPurchase);
router.delete("/items/:id", ItemController.delete);

module.exports = router;
