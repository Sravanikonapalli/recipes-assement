require("dotenv").config();
const fs = require("fs");
const db = require("../db");

function runQuery(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function(err) {
      if (err) reject(err);
      else resolve(this.lastID);
    });
  });
}

async function seed() {
  try {
    await runQuery(`CREATE TABLE IF NOT EXISTS recipes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      cuisine TEXT,
      title TEXT,
      rating REAL,
      prep_time INTEGER,
      cook_time INTEGER,
      total_time INTEGER,
      description TEXT,
      nutrients TEXT,
      serves TEXT
    )`);

    let rawData = fs.readFileSync("./data/US_recipes.json", "utf-8");
    rawData = rawData.replace(/\bNaN\b/g, "null");
    const recipes = JSON.parse(rawData);

    for (const recipe of Object.values(recipes)) {
      const rating = isNaN(recipe.rating) ? null : recipe.rating;
      const prep_time = isNaN(recipe.prep_time) ? null : recipe.prep_time;
      const cook_time = isNaN(recipe.cook_time) ? null : recipe.cook_time;
      const total_time = isNaN(recipe.total_time) ? null : recipe.total_time;

      await runQuery(
        `INSERT INTO recipes (cuisine, title, rating, prep_time, cook_time, total_time, description, nutrients, serves)
         VALUES (?,?,?,?,?,?,?,?,?)`,
        [
          recipe.cuisine || null,
          recipe.title || null,
          rating,
          prep_time,
          cook_time,
          total_time,
          recipe.description || null,
          recipe.nutrients ? JSON.stringify(recipe.nutrients) : null,
          recipe.serves || null,
        ]
      );
    }

    console.log("Recipes inserted successfully!");
    process.exit();
  } catch (err) {
    console.error("Error seeding data:", err);
    process.exit(1);
  }
}

seed();
