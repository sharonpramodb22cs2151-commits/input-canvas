import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Mic, FileText, Video, Image, LogOut, Sparkles } from 'lucide-react';
import InputTypeCard from '@/components/InputTypeCard';
import { useToast } from '@/hooks/use-toast';

const inputTypes = [
  {
    icon: Mic,
    title: 'Audio',
    description: 'Record or upload audio files for processing',
    gradient: 'bg-gradient-to-br from-violet-500 to-purple-600',
  },
  {
    icon: FileText,
    title: 'Text',
    description: 'Enter or paste text content directly',
    gradient: 'bg-gradient-to-br from-primary to-cyan-500',
  },
  {
    icon: Video,
    title: 'Video',
    description: 'Upload video files for analysis',
    gradient: 'bg-gradient-to-br from-rose-500 to-pink-600',
  },
  {
    icon: Image,
    title: 'Image',
    description: 'Upload images for visual processing',
    gradient: 'bg-gradient-to-br from-accent to-emerald-500',
  },
];

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const handleInputSelect = (type: string) => {
    toast({
      title: `${type} selected`,
      description: `You've selected ${type.toLowerCase()} input type.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-foreground">InputHub</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden sm:block">
                {user?.email}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSignOut}
                className="text-muted-foreground hover:text-foreground"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Choose your input type
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Select how you'd like to provide your content for processing
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {inputTypes.map((type, index) => (
            <InputTypeCard
              key={type.title}
              icon={type.icon}
              title={type.title}
              description={type.description}
              gradient={type.gradient}
              index={index}
              onClick={() => handleInputSelect(type.title)}
            />
          ))}
        </div>

        {/* Footer hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          Select an input type above to get started
        </motion.p>
      </main>
    </div>
  );
};

export default Dashboard;
