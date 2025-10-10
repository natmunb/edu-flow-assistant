import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LanguageSwitcher, Language } from '@/components/LanguageSwitcher';
import { translations } from '@/lib/translations';
import { 
  Plus, 
  Users, 
  MessageCircle, 
  Clock,
  Sparkles,
  BarChart3,
  BookOpen,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];
  const navigate = useNavigate();

  const mockClasses = [
    {
      id: 1,
      name: 'Advanced Biology - Cellular Processes',
      subject: 'Biology',
      students: 28,
      date: '2025-01-09',
      duration: '45 min',
      questions: 12,
      status: 'completed',
    },
    {
      id: 2,
      name: 'International Relations - Modern Conflicts',
      subject: 'History',
      students: 32,
      date: '2025-01-08',
      duration: '60 min',
      questions: 8,
      status: 'completed',
    },
    {
      id: 3,
      name: 'Calculus II - Integration Techniques',
      subject: 'Mathematics',
      students: 24,
      date: '2025-01-07',
      duration: '50 min',
      questions: 15,
      status: 'completed',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                ThinkForge
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
              >
                Home
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => navigate('/analytics')}
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Analytics
              </Button>
              <LanguageSwitcher onLanguageChange={setLanguage} />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{t.dashboard.title}</h1>
          <p className="text-muted-foreground">Manage your classes and track student progress</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-card">
            <div className="flex items-center justify-between mb-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <Badge variant="secondary">This Week</Badge>
            </div>
            <h3 className="text-3xl font-bold mb-1">3</h3>
            <p className="text-muted-foreground">Classes Recorded</p>
          </Card>
          
          <Card className="p-6 bg-gradient-card">
            <div className="flex items-center justify-between mb-2">
              <Users className="h-8 w-8 text-secondary" />
              <Badge variant="secondary">Active</Badge>
            </div>
            <h3 className="text-3xl font-bold mb-1">84</h3>
            <p className="text-muted-foreground">Total Students</p>
          </Card>
          
          <Card className="p-6 bg-gradient-card">
            <div className="flex items-center justify-between mb-2">
              <MessageCircle className="h-8 w-8 text-accent" />
              <Badge variant="secondary">Pending</Badge>
            </div>
            <h3 className="text-3xl font-bold mb-1">35</h3>
            <p className="text-muted-foreground">Student Questions</p>
          </Card>
        </div>

        {/* Classes Section */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{t.dashboard.myClasses}</h2>
          <Button 
            className="gap-2"
            onClick={() => navigate('/record')}
          >
            <Plus className="h-4 w-4" />
            {t.dashboard.newClass}
          </Button>
        </div>

        <div className="grid gap-4">
          {mockClasses.map((classItem) => (
            <Card 
              key={classItem.id} 
              className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer bg-gradient-card"
              onClick={() => navigate(`/class/${classItem.id}`)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{classItem.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline">{classItem.subject}</Badge>
                    <Badge className="bg-success text-success-foreground">IB Compliant</Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{classItem.students} {t.dashboard.students}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{classItem.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>{classItem.questions} {t.dashboard.questions}</span>
                </div>
                <div className="ml-auto text-muted-foreground">
                  {new Date(classItem.date).toLocaleDateString()}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
