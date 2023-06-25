import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import Character from "pages/Character";

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character/:id" element={<Character />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
