// src/pages/Dashboard.tsx
import { Link } from "react-router-dom";
import { BarChart3, CheckCircle, ListTodo, Users, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

// 🔹 IMPORTES DE IMAGENS (garante que apareçam em dev e produção)
import logo from "@/assets/logo_thinking.png";
import chart1 from "@/assets/chart1.png";
import chart2 from "@/assets/chart2.png";

const Dashboard = () => {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen bg-[#FFF9E8] text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white/70 backdrop-blur-md border-r border-gray-200 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <img
              src={logo}
              alt="ThinkForge Logo"
              className="h-8 w-8 object-contain"
              onError={(e) => {
                console.warn("Logo não encontrada em src/assets/logo_thinking.png");
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <h1 className="text-xl font-bold text-[#1E3A8A]">ThinkForge</h1>
          </div>

          {/* Navegação */}
          <nav className="space-y-4 text-sm font-medium">
            <Link to="/dashboard" className="flex items-center gap-3 text-[#1E3A8A] font-semibold">
              <BarChart3 className="h-4 w-4" /> {t.dashboard.title}
            </Link>

            {/* use as labels que preferir aqui; deixei “Características” vindo do nav/features */}
            <Link to="/tasks" className="flex items-center gap-3 hover:text-[#1E3A8A] transition">
              <ListTodo className="h-4 w-4" /> {t.nav.features}
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
      <main className="flex-1 p-10 overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#1E3A8A]">{t.dashboard.title}</h2>
          <div className="text-right">
            <p className="font-medium">{t.dashboard.teacherName}</p>
            <p className="text-sm text-gray-500">{t.dashboard.teacherRole}</p>
          </div>
        </header>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <Card className="p-6 bg-white/70 shadow-md border border-gray-200">
            <h3 className="font-semibold text-gray-700 mb-2">{t.dashboard.totalTasks}</h3>
            <p className="text-3xl font-bold text-[#1E3A8A]">24</p>
          </Card>
          <Card className="p-6 bg-white/70 shadow-md border border-gray-200">
            <h3 className="font-semibold text-gray-700 mb-2">{t.dashboard.classes}</h3>
            <p className="text-3xl font-bold text-[#1E3A8A]">6</p>
          </Card>
          <Card className="p-6 bg-white/70 shadow-md border border-gray-200">
            <h3 className="font-semibold text-gray-700 mb-2">{t.dashboard.students}</h3>
            <p className="text-3xl font-bold text-[#1E3A8A]">142</p>
          </Card>
          <Card className="p-6 bg-white/70 shadow-md border border-gray-200">
            <h3 className="font-semibold text-gray-700 mb-2">{t.dashboard.pendingTasks}</h3>
            <p className="text-3xl font-bold text-[#1E3A8A]">5</p>
          </Card>
        </div>

        {/* Seção de gráficos / imagens 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <Card className="p-6 bg-white/80 border border-gray-200 shadow-md col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-[#1E3A8A]">
              {t.dashboard.overview ?? "Task Overview"}
            </h3>
            <img
              src={chart1}
              alt="Task Overview Chart"
              className="h-48 w-full object-contain rounded-lg border border-gray-200"
              onError={(e) => {
                console.warn("chart1.png não encontrado em src/assets");
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </Card>

          <Card className="p-6 bg-white/80 border border-gray-200 shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-[#1E3A8A]">
              {t.dashboard.deadlines ?? "Upcoming Deadlines"}
            </h3>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>Math - Unit 6 Assessment (2 days left)</li>
              <li>Algebra Review (4 days left)</li>
              <li>Critical Thinking Project (1 week left)</li>
            </ul>
          </Card>
        </section>

        {/* Seção de gráficos / imagens 2 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 bg-white/80 border border-gray-200 shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-[#1E3A8A]">
              {t.dashboard.taskByClass ?? "Task by Class"}
            </h3>
            <img
              src={chart2}
              alt="Task by Class Chart"
              className="h-48 w-full object-contain rounded-lg border border-gray-200"
              onError={(e) => {
                console.warn("chart2.png não encontrado em src/assets");
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </Card>

          <Card className="p-6 bg-white/80 border border-gray-200 shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-[#1E3A8A]">
              {t.dashboard.taskPriority ?? "Task Priority"}
            </h3>
            <img
              src={chart1}
              alt="Task Priority Chart"
              className="h-48 w-full object-contain rounded-lg border border-gray-200"
              onError={(e) => {
                console.warn("chart1.png não encontrado em src/assets");
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;