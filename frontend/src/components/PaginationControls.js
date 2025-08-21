import React from "react";

const PaginationControls = ({ page, setPage, limit, setLimit, total }) => {
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="pagination" style={{ marginTop: "20px" }}>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
      <span style={{ margin: "0 10px" }}>Page {page} of {totalPages}</span>
      <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>

      <select value={limit} onChange={(e) => setLimit(Number(e.target.value))} style={{ marginLeft: "10px" }}>
        {[10, 15, 20, 50].map(n => <option key={n} value={n}>{n}</option>)}
      </select>
    </div>
  );
};

export default PaginationControls;
