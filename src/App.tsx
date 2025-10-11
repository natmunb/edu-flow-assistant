import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Subscribe from "@/pages/Subscribe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
    </Router>
  );
}

export default App;
