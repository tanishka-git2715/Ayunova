import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome to Ayunova</h1>
            <Button onClick={handleSignOut} variant="outline">
              Sign Out
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Wellness Assessment</CardTitle>
                <CardDescription>
                  Take a comprehensive wellness assessment to understand your current health status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Start Assessment</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Consultations</CardTitle>
                <CardDescription>
                  Book appointments with wellness experts and healthcare professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Book Consultation</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Health Records</CardTitle>
                <CardDescription>
                  View and manage your health records and medical history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">View Records</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Wellness Programs</CardTitle>
                <CardDescription>
                  Access personalized wellness programs and recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Browse Programs</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Chat Support</CardTitle>
                <CardDescription>
                  Get instant support from our AI wellness assistant
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Start Chat</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>
                  Track your wellness journey and monitor your progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">View Progress</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
