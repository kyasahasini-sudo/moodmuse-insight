import { useState } from "react";
import WellnessHero from "@/components/WellnessHero";
import MoodCheckIn from "@/components/MoodCheckIn";
import WellnessDashboard from "@/components/WellnessDashboard";
import WellnessRecommendations from "@/components/WellnessRecommendations";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <WellnessHero />;
      case 'checkin':
        return (
          <div className="min-h-screen py-20 px-6">
            <div className="max-w-2xl mx-auto">
              <MoodCheckIn />
            </div>
          </div>
        );
      case 'dashboard':
        return (
          <div className="min-h-screen py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <WellnessDashboard />
            </div>
          </div>
        );
      case 'recommendations':
        return (
          <div className="min-h-screen py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <WellnessRecommendations />
            </div>
          </div>
        );
      default:
        return <WellnessHero />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <main>
        {renderSection()}
      </main>
      
      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">MW</span>
            </div>
            <span className="text-lg font-semibold">MindWell</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Supporting student mental wellness through mindful tracking and personalized insights.
          </p>
          <p className="text-sm text-muted-foreground">
            Remember: This app is not a substitute for professional mental health care. 
            If you're experiencing severe mental health issues, please seek professional help.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
