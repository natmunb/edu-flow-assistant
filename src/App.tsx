import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Subscribe from "@/pages/Subscribe";
import Dashboard from "@/pages/Dashboard";
import Tasks from "@/pages/Tasks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  );
}

export default App;