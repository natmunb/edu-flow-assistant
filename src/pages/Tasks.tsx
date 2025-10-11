import { useState } from "react";
import {
  BarChart3,
  CheckCircle,
  ListTodo,
  Users,
  Settings,
  Upload,
  FileAudio,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Tasks = () => {
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#FFF9E8] text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white/70 backdrop-blur-md border-r border-gray-200 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <img src="/logo_thinking.png" alt="ThinkForge Logo" className="h-8 w-8" />
            <h1 className="text-xl font-bold text-[#1E3A8A]">ThinkForge</h1>
          </div>

          {/* 🔹 Menu lateral */}
          <nav className="space-y-4 text-sm font-medium">
            <Link to="/dashboard" className="flex items-center gap-3 hover:text-[#1E3A8A] transition">
              <BarChart3 className="h-4 w-4" /> Dashboard
            </Link>

            <Link to="/tasks" className="flex items-center gap-3 text-[#1E3A8A] font-semibold">
              <ListTodo className="h-4 w-4" /> Tasks
            </Link>

            <Link to="/analytics" className="flex items-center gap-3 hover:text-[#1E3A8A] transition">
              <CheckCircle className="h-4 w-4" /> Analytics
            </Link>

            <Link to="/team" className="flex items-center gap-3 hover:text-[#1E3A8A] transition">
              <Users className="h-4 w-4" /> Team
            </Link>

            <Link to="/settings" className="flex items-center gap-3 hover:text-[#1E3A8A] transition">
              <Settings className="h-4 w-4" /> Settings
            </Link>
          </nav>
        </div>

        <Button
          variant="outline"
          className="w-full mt-8 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
        >
          Logout
        </Button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left - Uploads */}
        <section>
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">New Lesson Task</h2>

          <Card className="p-6 bg-white/80 border border-gray-200 shadow-md mb-6">
            <h3 className="text-lg font-semibold text-[#1E3A8A] mb-4">Audio Input</h3>
            <div className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 hover:border-[#1E3A8A] transition">
              <FileAudio className="h-8 w-8 mb-2" />
              <p>Upload or record your lesson audio</p>
              <input type="file" accept="audio/*" className="mt-4 text-sm" />
            </div>
          </Card>

          <Card className="p-6 bg-white/80 border border-gray-200 shadow-md mb-6">
            <h3 className="text-lg font-semibold text-[#1E3A8A] mb-4">Complementary Materials</h3>
            <div className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 hover:border-[#1E3A8A] transition">
              <Upload className="h-8 w-8 mb-2" />
              <p>Upload PDFs, Word docs, or guidelines</p>
              <input type="file" multiple accept=".pdf,.doc,.docx" className="mt-4 text-sm" />
            </div>
          </Card>

          <Card className="p-6 bg-white/80 border border-gray-200 shadow-md">
            <h3 className="text-lg font-semibold text-[#1E3A8A] mb-4">Lesson Plan</h3>
            <div className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 hover:border-[#1E3A8A] transition">
              <FileText className="h-8 w-8 mb-2" />
              <p>Attach your class plan (PDF, DOC)</p>
              <input type="file" accept=".pdf,.doc,.docx" className="mt-4 text-sm" />
            </div>
          </Card>

          <Button
            className="mt-8 w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-lg"
            onClick={() => setShowResults(true)}
          >
            Process Task
          </Button>
        </section>

        {/* Right - Resultado como imagem */}
        <section>
          {showResults ? (
            <Card className="p-6 bg-white/90 border border-gray-200 shadow-lg animate-in fade-in duration-700">
              <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-6 text-center">
                Consolidated Analysis
              </h3>

              <img
                src="./public/chart1.png"
                alt="Consolidated Task Analysis"
                className="w-full h-[400px] object-contain rounded-lg border border-gray-200"
              />

              <p className="text-center text-gray-600 mt-4">
                This image summarizes the relevance and alignment of your uploaded materials.
              </p>
            </Card>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 italic">
              Processed data will appear here after submission.
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Tasks;