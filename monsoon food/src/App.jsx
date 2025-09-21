import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleRecipeAdded = () => {
    setRefresh(!refresh);
  };
  return (
    <>
      <Navbar />
      <Outlet context={{ handleRecipeAdded, refresh }} />
      <Footer />
    </>
  );
};

export default App;
