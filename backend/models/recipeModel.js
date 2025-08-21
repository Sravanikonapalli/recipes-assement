const db = require("../db");

// Wrap db.all in a Promise
function runAll(query, params = []) {
  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

// Wrap db.get in a Promise
function runGet(query, params = []) {
  return new Promise((resolve, reject) => {
    db.get(query, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

// Get all recipes with pagination
const getAllRecipes = async (page = 1, limit = 10) => {
  const offset = (page - 1) * limit;
  const rows = await runAll(
    "SELECT * FROM recipes ORDER BY rating DESC LIMIT ? OFFSET ?",
    [limit, offset]
  );
  const totalRow = await runGet("SELECT COUNT(*) as count FROM recipes");
  return { rows, total: totalRow.count };
};

// Search recipes by single term across multiple columns
const searchRecipes = async (searchTerm, page = 1, limit = 10) => {
  const offset = (page - 1) * limit;
  const likeTerm = `%${searchTerm}%`;

  const query = `
    SELECT *, COUNT(*) OVER() AS total_count
    FROM recipes
    WHERE title LIKE ? OR cuisine LIKE ? OR rating LIKE ? OR total_time LIKE ?
    LIMIT ? OFFSET ?
  `;

  const rows = await runAll(query, [likeTerm, likeTerm, likeTerm, likeTerm, limit, offset]);
  const total = rows[0] ? rows[0].total_count : 0;
  return { rows, total };
};

module.exports = { getAllRecipes, searchRecipes };
