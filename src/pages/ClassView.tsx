import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  ArrowLeft,
  Sparkles,
  FileText,
  CheckCircle2,
  MessageCircle,
  TrendingUp,
  Users,
  BookOpen,
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const ClassView = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const mockTranscript = [
    {
      section: 'Introduction to Cellular Respiration',
      content: 'Today we\'ll explore the fundamental process of how cells convert glucose into ATP. This is crucial for understanding energy metabolism in living organisms.',
      timestamp: '00:00',
      ibCompliant: true,
    },
    {
      section: 'Glycolysis Process',
      content: 'Glycolysis occurs in the cytoplasm and breaks down one glucose molecule into two pyruvate molecules, producing a net gain of 2 ATP and 2 NADH.',
      timestamp: '05:30',
      ibCompliant: true,
    },
    {
      section: 'Krebs Cycle Details',
      content: 'The Krebs cycle, also known as the citric acid cycle, takes place in the mitochondrial matrix. Each turn produces 3 NADH, 1 FADH2, and 1 ATP.',
      timestamp: '15:20',
      ibCompliant: true,
    },
  ];

  const mockQuestions = [
    {
      student: 'Emma Rodriguez',
      question: 'Why does glycolysis happen in the cytoplasm instead of the mitochondria?',
      topic: 'Glycolysis Process',
      status: 'pending',
    },
    {
      student: 'James Chen',
      question: 'Can you explain the difference between substrate-level and oxidative phosphorylation?',
      topic: 'Krebs Cycle Details',
      status: 'answered',
    },
    {
      student: 'Sofia Martinez',
      question: 'How many total ATP molecules are produced from one glucose molecule?',
      topic: 'Introduction to Cellular Respiration',
      status: 'pending',
    },
  ];

  const mockInsights = [
    {
      type: 'strength',
      message: 'Students showed strong understanding of glycolysis fundamentals',
      action: 'Continue with current teaching pace',
    },
    {
      type: 'improvement',
      message: '3 students need additional review on Krebs cycle',
      action: 'Recommend practice problems for Emma, James, and Sofia',
    },
    {
      type: 'suggestion',
      message: 'Consider adding visual diagrams for the electron transport chain',
      action: 'Use animated graphics in next lesson',
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
        {/* Class Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Advanced Biology - Cellular Processes</h1>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Badge variant="outline">Biology</Badge>
                <Badge className="bg-success text-success-foreground">IB Compliant</Badge>
                <span>January 9, 2025</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="p-4 bg-gradient-card">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">28</p>
                  <p className="text-sm text-muted-foreground">Students</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 bg-gradient-card">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-8 w-8 text-secondary" />
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Questions</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 bg-gradient-card">
              <div className="flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-muted-foreground">Topics</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 bg-gradient-card">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">94%</p>
                  <p className="text-sm text-muted-foreground">Engagement</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="transcript" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="transcript">Transcript & Structure</TabsTrigger>
            <TabsTrigger value="questions">Student Questions</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="transcript">
            <Card className="p-6 bg-gradient-card">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Class Transcript</h2>
              </div>
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-6">
                  {mockTranscript.map((section, index) => (
                    <div key={index} className="pb-6 border-b border-border last:border-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold">{section.section}</h3>
                        <div className="flex items-center gap-2">
                          {section.ibCompliant && (
                            <Badge className="bg-success text-success-foreground">
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              IB Aligned
                            </Badge>
                          )}
                          <Badge variant="outline">{section.timestamp}</Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </Card>
          </TabsContent>

          <TabsContent value="questions">
            <Card className="p-6 bg-gradient-card">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="h-5 w-5 text-secondary" />
                <h2 className="text-xl font-semibold">Student Questions</h2>
              </div>
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-4">
                  {mockQuestions.map((q, index) => (
                    <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold">{q.student}</p>
                          <Badge variant="outline" className="mt-1">{q.topic}</Badge>
                        </div>
                        <Badge variant={q.status === 'answered' ? 'default' : 'secondary'}>
                          {q.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mt-2">{q.question}</p>
                      {q.status === 'pending' && (
                        <Button size="sm" variant="outline" className="mt-3">
                          Answer Question
                        </Button>
                      )}
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </Card>
          </TabsContent>

          <TabsContent value="insights">
            <Card className="p-6 bg-gradient-card">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">AI-Generated Insights</h2>
              </div>
              <div className="space-y-4">
                {mockInsights.map((insight, index) => (
                  <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${
                        insight.type === 'strength' ? 'bg-success/10' :
                        insight.type === 'improvement' ? 'bg-warning/10' :
                        'bg-primary/10'
                      }`}>
                        <TrendingUp className={`h-5 w-5 ${
                          insight.type === 'strength' ? 'text-success' :
                          insight.type === 'improvement' ? 'text-warning' :
                          'text-primary'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1">{insight.message}</p>
                        <p className="text-sm text-muted-foreground mb-2">{insight.action}</p>
                        <Button size="sm" variant="outline">Apply Suggestion</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClassView;
