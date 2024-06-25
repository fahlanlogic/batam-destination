import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Thumbnails from "./pages/Thumbnails";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}></Route>
        <Route
          path="/images"
          element={<Thumbnails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
