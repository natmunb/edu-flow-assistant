import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft,
  Sparkles,
  TrendingUp,
  TrendingDown,
  Users,
  BookOpen,
  CheckCircle2,
  Clock,
  BarChart3,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Analytics = () => {
  const navigate = useNavigate();

  const performanceMetrics = [
    {
      label: 'Average Engagement',
      value: '92%',
      change: '+5%',
      trend: 'up',
      icon: TrendingUp,
    },
    {
      label: 'IB Compliance Rate',
      value: '98%',
      change: '+2%',
      trend: 'up',
      icon: CheckCircle2,
    },
    {
      label: 'Questions per Class',
      value: '11.5',
      change: '+3.2',
      trend: 'up',
      icon: Users,
    },
    {
      label: 'Avg Class Duration',
      value: '51 min',
      change: '-2 min',
      trend: 'down',
      icon: Clock,
    },
  ];

  const topPerformingClasses = [
    {
      name: 'Advanced Biology - Cellular Processes',
      engagement: 94,
      questions: 12,
      compliance: 100,
    },
    {
      name: 'Calculus II - Integration Techniques',
      engagement: 91,
      questions: 15,
      compliance: 98,
    },
    {
      name: 'International Relations - Modern Conflicts',
      engagement: 89,
      questions: 8,
      compliance: 96,
    },
  ];

  const studentInsights = [
    {
      student: 'Emma Rodriguez',
      needsReview: ['Krebs Cycle', 'Electron Transport'],
      strength: 'Glycolysis',
      engagement: 96,
    },
    {
      student: 'James Chen',
      needsReview: ['Oxidative Phosphorylation'],
      strength: 'Cellular Respiration Overview',
      engagement: 92,
    },
    {
      student: 'Sofia Martinez',
      needsReview: ['ATP Production', 'Mitochondrial Function'],
      strength: 'Metabolic Pathways',
      engagement: 88,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => navigate('/dashboard')}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  ThinkForge
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Performance Analytics</h1>
          </div>
          <p className="text-muted-foreground">
            Comprehensive insights into teaching effectiveness and student performance
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {performanceMetrics.map((metric, index) => (
            <Card key={index} className="p-6 bg-gradient-card hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <metric.icon className="h-8 w-8 text-primary" />
                <Badge 
                  variant={metric.trend === 'up' ? 'default' : 'secondary'}
                  className={metric.trend === 'up' ? 'bg-success text-success-foreground' : ''}
                >
                  {metric.trend === 'up' ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                  {metric.change}
                </Badge>
              </div>
              <p className="text-3xl font-bold mb-1">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Top Performing Classes */}
          <Card className="p-6 bg-gradient-card">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold">Top Performing Classes</h2>
            </div>
            <div className="space-y-4">
              {topPerformingClasses.map((classItem, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold mb-3">{classItem.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Engagement</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary" 
                            style={{ width: `${classItem.engagement}%` }}
                          />
                        </div>
                        <span className="font-semibold">{classItem.engagement}%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">IB Compliance</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-success" 
                            style={{ width: `${classItem.compliance}%` }}
                          />
                        </div>
                        <span className="font-semibold">{classItem.compliance}%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Questions</span>
                      <Badge variant="outline">{classItem.questions}</Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          {/* Student Insights */}
          <Card className="p-6 bg-gradient-card">
            <div className="flex items-center gap-2 mb-6">
              <Users className="h-5 w-5 text-secondary" />
              <h2 className="text-2xl font-semibold">Student Insights</h2>
            </div>
            <div className="space-y-4">
              {studentInsights.map((student, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">{student.student}</h3>
                    <Badge variant="outline">{student.engagement}%</Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Needs Review:</p>
                      <div className="flex flex-wrap gap-1">
                        {student.needsReview.map((topic, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-muted-foreground mb-1">Strength:</p>
                      <Badge className="bg-success text-success-foreground text-xs">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        {student.strength}
                      </Badge>
                    </div>
                  </div>
                  
                  <Button size="sm" variant="outline" className="w-full mt-3">
                    Generate Study Plan
                  </Button>
                </Card>
              ))}
            </div>
          </Card>
        </div>

        {/* Teaching Recommendations */}
        <Card className="p-6 bg-gradient-card">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">AI Teaching Recommendations</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-4 bg-primary/5 border-primary/20">
              <h3 className="font-semibold mb-2">Next Lesson Focus</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Review electron transport chain with visual aids based on student questions
              </p>
              <Button size="sm" variant="outline">View Details</Button>
            </Card>
            
            <Card className="p-4 bg-secondary/5 border-secondary/20">
              <h3 className="font-semibold mb-2">Teaching Strategy</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Incorporate more interactive diagrams to improve complex concept retention
              </p>
              <Button size="sm" variant="outline">Apply Strategy</Button>
            </Card>
            
            <Card className="p-4 bg-accent/5 border-accent/20">
              <h3 className="font-semibold mb-2">Resource Suggestion</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Add supplementary materials on mitochondrial structure for struggling students
              </p>
              <Button size="sm" variant="outline">Get Resources</Button>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
