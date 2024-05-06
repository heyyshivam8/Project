import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";

export default function App() {
  const { fetchData } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get("page")) || 1;

    let tag = null;
    let category = null;

    if (location.pathname.includes("tags")) {
      tag = decodeURIComponent(location.pathname.split("/").pop().replaceAll("-", " "));
    } else if (location.pathname.includes("categories")) {
      category = decodeURIComponent(location.pathname.split("/").pop().replaceAll("-", " "));
    }

    fetchData(page, tag, category);
  }, [location.pathname, fetchData, location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
  );
}
