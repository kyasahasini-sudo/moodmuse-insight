import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Heart, TrendingUp } from "lucide-react";
import heroImage from "@/assets/wellness-hero.jpg";

const WellnessHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-wellness opacity-50" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-soft/20 text-primary mb-6 transition-bounce">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Your Mental Wellness Journey</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Track Your</span>
            <span className="block bg-gradient-to-r from-primary to-accent-soft bg-clip-text text-transparent">
              Mental Wellness
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Daily mood check-ins, personalized insights, and wellness recommendations 
            designed specifically for students navigating their mental health journey.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="gradient-primary text-primary-foreground shadow-mood hover:shadow-lg transition-smooth px-8 py-4 text-lg">
            Start Your Check-in
            <Heart className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-4 text-lg transition-smooth hover:bg-primary-soft/20">
            View Your Dashboard
            <TrendingUp className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 shadow-soft transition-smooth hover:shadow-mood hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4 mx-auto">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Daily Check-ins</h3>
            <p className="text-muted-foreground">Track your mood and emotions with simple, intuitive daily assessments.</p>
          </Card>
          
          <Card className="p-6 shadow-soft transition-smooth hover:shadow-mood hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center mb-4 mx-auto">
              <TrendingUp className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Trend Analysis</h3>
            <p className="text-muted-foreground">Visualize your mental health patterns and progress over time.</p>
          </Card>
          
          <Card className="p-6 shadow-soft transition-smooth hover:shadow-mood hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center mb-4 mx-auto">
              <Sparkles className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Personalized Tips</h3>
            <p className="text-muted-foreground">Get tailored wellness recommendations based on your mood patterns.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WellnessHero;