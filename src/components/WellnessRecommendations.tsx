import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, 
  Moon, 
  Coffee, 
  Music, 
  Book, 
  Users, 
  Activity, 
  Wind,
  CheckCircle 
} from "lucide-react";

const recommendations = [
  {
    id: 1,
    title: "Take a 10-minute mindfulness break",
    description: "Based on your mood patterns, a short meditation can help boost your energy.",
    category: "Mindfulness",
    icon: Wind,
    difficulty: "Easy",
    duration: "10 min",
    moodBoost: "+2",
    completed: false
  },
  {
    id: 2,
    title: "Connect with a friend",
    description: "Social connection tends to improve your mood, especially on weekdays.",
    category: "Social",
    icon: Users,
    difficulty: "Easy",
    duration: "30 min",
    moodBoost: "+3",
    completed: false
  },
  {
    id: 3,
    title: "Go for a walk outside",
    description: "Physical activity and fresh air can significantly improve your wellness score.",
    category: "Physical",
    icon: Activity,
    difficulty: "Medium",
    duration: "20 min",
    moodBoost: "+4",
    completed: true
  },
  {
    id: 4,
    title: "Practice gratitude journaling",
    description: "Writing down positive thoughts can help maintain your improving mood trend.",
    category: "Mental",
    icon: Book,
    difficulty: "Easy",
    duration: "15 min",
    moodBoost: "+2",
    completed: false
  },
  {
    id: 5,
    title: "Listen to uplifting music",
    description: "Music therapy can be particularly effective for your current mood level.",
    category: "Creative",
    icon: Music,
    difficulty: "Easy",
    duration: "20 min",
    moodBoost: "+3",
    completed: false
  },
  {
    id: 6,
    title: "Maintain a regular sleep schedule",
    description: "Your mood data suggests better sleep hygiene could enhance your wellness.",
    category: "Sleep",
    icon: Moon,
    difficulty: "Medium",
    duration: "8 hours",
    moodBoost: "+5",
    completed: false
  }
];

const categoryColors = {
  Mindfulness: "bg-primary/10 text-primary",
  Social: "bg-secondary/10 text-secondary-foreground",
  Physical: "bg-mood-good/10 text-mood-good",
  Mental: "bg-accent/10 text-accent-foreground",
  Creative: "bg-mood-okay/10 text-mood-okay",
  Sleep: "bg-mood-excellent/10 text-mood-excellent"
};

const WellnessRecommendations = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
        <h2 className="text-4xl font-bold mb-4">Personalized Recommendations</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Based on your mood patterns and wellness data, here are some activities 
          that could help improve your mental health today.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Badge variant="secondary" className="px-4 py-2">
          💡 AI-Powered Suggestions
        </Badge>
        <Badge variant="outline" className="px-4 py-2">
          📊 Based on Your Data
        </Badge>
        <Badge variant="outline" className="px-4 py-2">
          🎯 Personalized for You
        </Badge>
      </div>

      {/* Recommendations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((rec) => {
          const IconComponent = rec.icon;
          return (
            <Card 
              key={rec.id} 
              className={`
                p-6 shadow-soft transition-all duration-300 hover:shadow-mood hover:-translate-y-1
                ${rec.completed ? 'bg-mood-excellent/5 border-mood-excellent/20' : ''}
              `}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  ${categoryColors[rec.category as keyof typeof categoryColors] || 'bg-primary/10 text-primary'}
                `}>
                  <IconComponent className="w-6 h-6" />
                </div>
                {rec.completed && (
                  <CheckCircle className="w-6 h-6 text-mood-excellent" />
                )}
              </div>

              {/* Content */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">{rec.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge 
                    variant="secondary" 
                    className={categoryColors[rec.category as keyof typeof categoryColors]}
                  >
                    {rec.category}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {rec.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    ⏱️ {rec.duration}
                  </Badge>
                  <Badge variant="outline" className="text-xs text-mood-good">
                    {rec.moodBoost} mood
                  </Badge>
                </div>
              </div>

              {/* Action Button */}
              <Button 
                variant={rec.completed ? "secondary" : "default"}
                className="w-full transition-smooth"
                disabled={rec.completed}
              >
                {rec.completed ? (
                  <>
                    <CheckCircle className="mr-2 w-4 h-4" />
                    Completed
                  </>
                ) : (
                  <>
                    Start Activity
                  </>
                )}
              </Button>
            </Card>
          );
        })}
      </div>

      {/* Daily Challenge */}
      <Card className="p-8 gradient-wellness shadow-mood">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <Coffee className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Today's Wellness Challenge</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Try to complete 3 recommendations today to earn your "Daily Wellness Warrior" badge!
          </p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className={`
                    w-3 h-3 rounded-full
                    ${i === 1 ? 'bg-mood-excellent' : 'bg-muted'}
                  `}
                />
              ))}
            </div>
            <span className="text-sm font-medium">1/3 Complete</span>
          </div>
          <Button variant="secondary" className="px-8">
            View All Challenges
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default WellnessRecommendations;