const express = require("express");
const { getAllRecipes } = require("../controllers/recipeController");

const router = express.Router();

router.get("/", getAllRecipes); // Handles both list & search

module.exports = router;
