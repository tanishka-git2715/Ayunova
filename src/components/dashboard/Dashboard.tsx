import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { 
  Heart, 
  Brain, 
  Leaf, 
  Calendar, 
  MessageCircle, 
  BarChart3,
  LogOut,
  User
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Profile {
  id: string;
  full_name: string | null;
  constitution_type: string | null;
}

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;

      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('id, full_name, constitution_type')
          .eq('id', user.id)
          .single();

        if (error) {
          console.error('Error fetching profile:', error);
        } else {
          setProfile(data);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: 'Error',
        description: 'Failed to sign out',
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Leaf className="h-12 w-12 text-primary animate-pulse mx-auto mb-4" />
          <p className="text-muted-foreground">Loading your wellness dashboard...</p>
        </div>
      </div>
    );
  }

  const dashboardCards = [
    {
      title: 'Dosha Assessment',
      description: 'Discover your unique Ayurvedic constitution',
      icon: Brain,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      action: 'Take Assessment',
    },
    {
      title: 'Wellness Plan',
      description: 'Your personalized Ayurvedic wellness journey',
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      action: 'View Plan',
    },
    {
      title: 'Lifestyle Tracking',
      description: 'Track your daily wellness habits',
      icon: BarChart3,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      action: 'Log Today',
    },
    {
      title: 'AyurGPT Chat',
      description: 'Get AI-powered Ayurvedic guidance',
      icon: MessageCircle,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      action: 'Start Chat',
    },
    {
      title: 'Consultations',
      description: 'Book sessions with Ayurvedic practitioners',
      icon: Calendar,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      action: 'Book Now',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-sand-100">
      {/* Header */}
      <header className="bg-white border-b border-sage-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Leaf className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold gradient-text">Ayunova</h1>
                <p className="text-sm text-muted-foreground">Your Wellness Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium">{profile?.full_name || 'Welcome'}</p>
                <p className="text-xs text-muted-foreground">
                  {profile?.constitution_type ? `${profile.constitution_type} Constitution` : 'Complete assessment to see your dosha'}
                </p>
              </div>
              <Button variant="outline" size="icon" onClick={handleSignOut}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Welcome to Your Wellness Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            Heal naturally with AI-powered Ayurveda. Start by discovering your dosha.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {dashboardCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200 cursor-pointer ayurveda-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${card.bgColor}`}>
                      <Icon className={`h-6 w-6 ${card.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{card.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {card.description}
                  </CardDescription>
                  <Button className="w-full">
                    {card.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary">0</div>
              <div className="text-sm text-muted-foreground">Assessments Completed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary">0</div>
              <div className="text-sm text-muted-foreground">Days Tracked</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary">0</div>
              <div className="text-sm text-muted-foreground">Consultations</div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
