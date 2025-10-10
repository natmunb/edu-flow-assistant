import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { 
  Mic, 
  Square, 
  Play,
  Sparkles,
  FileText,
  CheckCircle2,
  Loader2,
  ArrowLeft,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RecordClass = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [className, setClassName] = useState('');
  const [subject, setSubject] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleStartRecording = () => {
    if (!className || !subject) {
      toast({
        title: 'Missing Information',
        description: 'Please enter class name and subject before recording.',
        variant: 'destructive',
      });
      return;
    }
    setIsRecording(true);
    // Simulate recording timer
    const interval = setInterval(() => {
      setRecordingTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: 'Class Recorded Successfully!',
        description: 'AI transcription and analysis complete.',
      });
      navigate('/dashboard');
    }, 3000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

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

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Record New Class</h1>
          <p className="text-muted-foreground">
            AI-powered transcription and IB compliance analysis
          </p>
        </div>

        {/* Class Information */}
        <Card className="p-6 mb-6 bg-gradient-card">
          <h2 className="text-xl font-semibold mb-4">Class Details</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="className">Class Name</Label>
              <Input 
                id="className"
                placeholder="e.g., Advanced Biology - DNA Structure"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                disabled={isRecording}
              />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input 
                id="subject"
                placeholder="e.g., Biology"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                disabled={isRecording}
              />
            </div>
          </div>
        </Card>

        {/* Recording Interface */}
        <Card className="p-8 bg-gradient-card">
          <div className="text-center">
            <div className="mb-6">
              {!isRecording && !isProcessing && (
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 mb-4">
                  <Mic className="h-16 w-16 text-primary" />
                </div>
              )}
              
              {isRecording && (
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-destructive/10 mb-4 animate-pulse">
                  <Mic className="h-16 w-16 text-destructive" />
                </div>
              )}

              {isProcessing && (
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 mb-4">
                  <Loader2 className="h-16 w-16 text-primary animate-spin" />
                </div>
              )}
            </div>

            {isRecording && (
              <div className="mb-6">
                <p className="text-4xl font-bold mb-2">{formatTime(recordingTime)}</p>
                <Badge variant="destructive" className="animate-pulse">Recording</Badge>
              </div>
            )}

            {isProcessing && (
              <div className="mb-6 max-w-md mx-auto">
                <p className="text-xl font-semibold mb-4">Processing Recording...</p>
                <Progress value={66} className="mb-2" />
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>AI is transcribing and analyzing your lesson</span>
                </div>
              </div>
            )}

            <div className="flex gap-4 justify-center">
              {!isRecording && !isProcessing && (
                <Button 
                  size="lg" 
                  className="gap-2"
                  onClick={handleStartRecording}
                >
                  <Play className="h-5 w-5" />
                  Start Recording
                </Button>
              )}

              {isRecording && (
                <Button 
                  size="lg" 
                  variant="destructive"
                  className="gap-2"
                  onClick={handleStopRecording}
                >
                  <Square className="h-5 w-5" />
                  Stop Recording
                </Button>
              )}
            </div>
          </div>
        </Card>

        {/* AI Features Preview */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <Card className="p-4 text-center bg-gradient-card">
            <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Auto Transcription</h3>
            <p className="text-sm text-muted-foreground">Speech to text conversion</p>
          </Card>
          
          <Card className="p-4 text-center bg-gradient-card">
            <Sparkles className="h-8 w-8 text-secondary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Content Structuring</h3>
            <p className="text-sm text-muted-foreground">Organized topics & sections</p>
          </Card>
          
          <Card className="p-4 text-center bg-gradient-card">
            <CheckCircle2 className="h-8 w-8 text-accent mx-auto mb-2" />
            <h3 className="font-semibold mb-1">IB Compliance</h3>
            <p className="text-sm text-muted-foreground">Standards verification</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RecordClass;
