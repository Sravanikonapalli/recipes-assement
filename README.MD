# Recipe Explorer

A full-stack Recipe Explorer application using **Node.js + Express + SQLite** for the backend and **React** for the frontend.

Users can view recipes, search by filters, and see detailed recipe information in a drawer with pagination.

---

## Live urls
[Backend](https://recipes-assement.onrender.com)
[Frontend]()

---------------
## Features

- List recipes with pagination
- Search recipes by title, cuisine, rating, and total time
- View detailed recipe info (description, nutrients, total time, serves)
- Fully functional backend using SQLite (`database.db`)
- Frontend built with React and plain CSS, bootstrap
- Easy setup and seed with JSON dataset (`US_recipes.json`)

---

## Tech Stack

**Backend:** Node.js, Express, SQLite3  
**Frontend:** React, Axios, CSS, bootstrap

---

## Folder Structure

```
project/
│
├─ backend/
│   ├─ db.js
│   ├─ server.js
│   ├─ controllers/
│   │   └─ recipeController.js
│   ├─ models/
│   │   └─ recipeModel.js
│   ├─ routes/
│   │   └─ recipeRoutes.js
│   ├─ scripts/
│   │   └─ seed.js
│   ├─ data/
│   │   └─ US_recipes.json
│   └─ package.json
│
├─ frontend/
│   ├─ src/
│   │   ├─ components/
│   │   │   ├─ RecipeTable.js
│   │   │   ├─ RecipeDrawer.js
│   │   │   └─ PaginationControls.js
│   │   ├─ App.js
│   │   └─ App.css
│   ├─ public/
│   │   └─ index.html
│   └─ package.json
│
└─ README.md
```

---

## Backend Setup (SQLite)

git clone https://github.com/Sravanikonapalli/recipes-assement.git
reciipesassessment

1. **Navigate to backend folder**
    ```bash
    cd backend
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Seed database**
    ```bash
    node scripts/seed.js
    ```
    - Creates `database.db` and inserts all recipes from `US_recipes.json`.

4. **Run backend server**
    ```bash
    node server.js
    ```
    - Backend runs on [http://localhost:5000/api/recipes](http://localhost:5000/api/recipes)

5. **Test API**
    - List recipes:  
      `GET http://localhost:5000/api/recipes?page=1&limit=10`
    - Search recipes:  
      `GET http://localhost:5000/api/recipes/search?title=pasta`

---

## Frontend Setup (React)

1. **Navigate to frontend folder**
    ```bash
    cd frontend
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Start frontend**
    ```bash
    npm start
    ```
    - Runs on [http://localhost:3000](http://localhost:3000) by default.
    - Connects to backend API automatically.

---

## Usage

- Use pagination controls to browse recipes.
- Click a recipe row to open the drawer with details.
- Use search filters (`title`, `cuisine`, `rating`, `total_time`) in API query or implement search bar.

---

## Commands Summary

| Command                   | Description                           |
|---------------------------|---------------------------------------|
| `node scripts/seed.js`    | Seed SQLite database with recipes     |
| `node server.js`          | Start backend server                  |
| `npm start`               | Start React frontend                  |
| `sqlite3 database.db`     | Open SQLite CLI to query database     |

---

## Dependencies

### Backend

- express
- cors
- sqlite3
- dotenv
- fs

### Frontend

- react
- react-dom
- axios
