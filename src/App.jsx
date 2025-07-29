import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
