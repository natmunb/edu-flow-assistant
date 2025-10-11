import { BarChart3, CheckCircle, ListTodo, Users, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#FFF9E8] text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white/70 backdrop-blur-md border-r border-gray-200 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <img src="/logo_thinking.png" alt="ThinkForge Logo" className="h-8 w-8" />
            <h1 className="text-xl font-bold text-[#1E3A8A]">ThinkForge</h1>
          </div>

          <nav className="space-y-4 text-sm font-medium">
            <a href="#" className="flex items-center gap-3 text-[#1E3A8A]">
              <BarChart3 className="h-4 w-4" /> Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-[#1E3A8A]">
              <ListTodo className="h-4 w-4" /> Tasks
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-[#1E3A8A]">
              <CheckCircle className="h-4 w-4" /> Analytics
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-[#1E3A8A]">
              <Users className="h-4 w-4" /> Team
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-[#1E3A8A]">
              <Settings className="h-4 w-4" /> Settings
            </a>
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
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#1E3A8A]">Dashboard</h2>
          <div className="text-right">
            <p className="font-medium">Angelo Antonello Borges</p>
            <p className="text-sm text-gray-500">Programming teacher</p>
          </div>
        </header>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <Card className="p-6 bg-white/70 shadow-md border border-gray-200">
            <h3 className="font-semibold text-gray-700 mb-2">Total Tasks</h3>
            <p className="text-3xl font-bold text-[#1E3A8A]">24</p>
          </Card>
          <Card className="p-6 bg-white/70 shadow-md border border-gray-200">
            <h3 className="font-semibold text-gray-700 mb-2">Classes</h3>
            <p className="text-3xl font-bold text-[#1E3A8A]">6</p>
          </Card>
          <Card className="p-6 bg-white/70 shadow-md border border-gray-200">
            <h3 className="font-semibold text-gray-700 mb-2">Students</h3>
            <p className="text-3xl font-bold text-[#1E3A8A]">142</p>
          </Card>
          <Card className="p-6 bg-white/70 shadow-md border border-gray-200">
            <h3 className="font-semibold text-gray-700 mb-2">Pending Tasks</h3>
            <p className="text-3xl font-bold text-[#1E3A8A]">5</p>
          </Card>
        </div>

        {/* Dashboard 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <Card className="p-6 bg-white/80 border border-gray-200 shadow-md col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-[#1E3A8A]">Task Overview</h3>
            <div className="h-48 bg-[#E5E9F2] rounded-lg flex items-center justify-center text-gray-500">
              Chart Placeholder
            </div>
          </Card>

          <Card className="p-6 bg-white/80 border border-gray-200 shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-[#1E3A8A]">Upcoming Deadlines</h3>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>📘 Math - Unit 6 Assessment (2 days left)</li>
              <li>🧮 Algebra Review (4 days left)</li>
              <li>🧠 Critical Thinking Project (1 week left)</li>
            </ul>
          </Card>
        </section>

        {/* Dashboard 2 & 3 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 bg-white/80 border border-gray-200 shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-[#1E3A8A]">Task by Class</h3>
            <div className="h-40 bg-[#E5E9F2] rounded-lg flex items-center justify-center text-gray-500">
              Chart 1 Placeholder
            </div>
          </Card>

          <Card className="p-6 bg-white/80 border border-gray-200 shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-[#1E3A8A]">Task Priority</h3>
            <div className="h-40 bg-[#E5E9F2] rounded-lg flex items-center justify-center text-gray-500">
              Chart 2 Placeholder
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;