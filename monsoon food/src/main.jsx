import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import RecipeCard from "./components/RecipeCard.jsx";
import AddRecipeForm from "./components/AddRecipeForm.jsx";
import MyRecipes from "./components/MyRecipes.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <RecipeCard />,
      },
      {
        path: "/add-recipe",
        element:<AddRecipeForm/>
      },
      {
        path: "/my-recipes",
        element:<MyRecipes/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
