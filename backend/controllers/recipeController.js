const Recipe = require("../models/recipeModel");

const getAllRecipes = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const searchTerm = req.query.search || "";

    let result;
    if (searchTerm) {
      result = await Recipe.searchRecipes(searchTerm, page, limit);
    } else {
      result = await Recipe.getAllRecipes(page, limit);
    }

    res.json({ page, limit, total: result.total, data: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getAllRecipes };
