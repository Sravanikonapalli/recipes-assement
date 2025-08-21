import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeDrawer from "./RecipeDrawer";
import PaginationControls from "./PaginationControls";

const RecipeTable = () => {
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        let query = `http://localhost:5000/api/recipes?page=${page}&limit=${limit}`;
        if (searchTerm) query += `&search=${encodeURIComponent(searchTerm)}`;

        const res = await axios.get(query);
        setRecipes(res.data.data);
        setTotal(res.data.total);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRecipes();
  }, [page, limit, searchTerm]);

  return (
    <div>
      {/* Search Bar */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by title/cuisine/rating/total time..."
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value); setPage(1); }}
          style={{ width: "100%", padding: "8px", fontSize: "16px" }}
        />
      </div>

      {/* Recipe Table */}
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Cuisine</th>
            <th className="border px-4 py-2">Rating</th>
            <th className="border px-4 py-2">Total Time</th>
            <th className="border px-4 py-2">Serves</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((r) => (
            <tr key={r.id} onClick={() => setSelectedRecipe(r)} className="cursor-pointer hover:bg-gray-50">
              <td className="border px-4 py-2">{r.title}</td>
              <td className="border px-4 py-2">{r.cuisine}</td>
              <td className="border px-4 py-2">{r.rating || "N/A"}</td>
              <td className="border px-4 py-2">{r.total_time || "N/A"}</td>
              <td className="border px-4 py-2">{r.serves || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <PaginationControls
        page={page}
        setPage={setPage}
        limit={limit}
        setLimit={setLimit}
        total={total}
      />

      {recipes.length === 0 && <p className="mt-4 text-center">No results found</p>}

      {selectedRecipe && <RecipeDrawer recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />}
    </div>
  );
};

export default RecipeTable;
