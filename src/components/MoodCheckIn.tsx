import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Smile, Meh, Frown, Heart, CheckCircle } from "lucide-react";

const moods = [
  { 
    id: 5, 
    label: "Excellent", 
    icon: Smile, 
    color: "mood-excellent",
    bgColor: "bg-mood-excellent/10 hover:bg-mood-excellent/20",
    description: "Feeling great and energized!"
  },
  { 
    id: 4, 
    label: "Good", 
    icon: Smile, 
    color: "mood-good",
    bgColor: "bg-mood-good/10 hover:bg-mood-good/20",
    description: "Pretty good overall"
  },
  { 
    id: 3, 
    label: "Okay", 
    icon: Meh, 
    color: "mood-okay",
    bgColor: "bg-mood-okay/10 hover:bg-mood-okay/20",
    description: "Just getting by"
  },
  { 
    id: 2, 
    label: "Poor", 
    icon: Frown, 
    color: "mood-poor",
    bgColor: "bg-mood-poor/10 hover:bg-mood-poor/20",
    description: "Having a tough time"
  },
  { 
    id: 1, 
    label: "Terrible", 
    icon: Frown, 
    color: "mood-terrible",
    bgColor: "bg-mood-terrible/10 hover:bg-mood-terrible/20",
    description: "Really struggling today"
  },
];

const MoodCheckIn = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!selectedMood) {
      toast({
        title: "Please select your mood",
        description: "Choose how you're feeling today to continue.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically save to a database
    const moodData = {
      mood: selectedMood,
      notes: notes,
      date: new Date().toISOString(),
    };

    console.log("Saving mood data:", moodData);
    
    setIsSubmitted(true);
    toast({
      title: "Check-in completed! 🎉",
      description: "Your mood has been recorded. Great job taking care of your mental health!",
    });
  };

  if (isSubmitted) {
    return (
      <Card className="p-8 text-center shadow-soft">
        <CheckCircle className="w-16 h-16 text-mood-excellent mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Check-in Complete!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for taking the time to check in with yourself today. 
          Your mental wellness matters.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="transition-smooth"
        >
          Start New Check-in
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-8 shadow-soft">
      <div className="text-center mb-8">
        <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2">How are you feeling today?</h2>
        <p className="text-muted-foreground">
          Take a moment to check in with yourself. Your feelings are valid and important.
        </p>
      </div>

      {/* Mood Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {moods.map((mood) => {
          const IconComponent = mood.icon;
          const isSelected = selectedMood === mood.id;
          
          return (
            <button
              key={mood.id}
              onClick={() => setSelectedMood(mood.id)}
              className={`
                p-6 rounded-xl border-2 transition-all duration-300 text-center
                ${isSelected 
                  ? `border-${mood.color} shadow-mood scale-105 ${mood.bgColor}` 
                  : `border-muted hover:border-${mood.color}/50 ${mood.bgColor}`
                }
              `}
            >
              <IconComponent className={`w-8 h-8 mx-auto mb-3 ${mood.color}`} />
              <div className="font-semibold mb-1">{mood.label}</div>
              <div className="text-sm text-muted-foreground">{mood.description}</div>
            </button>
          );
        })}
      </div>

      {/* Notes Section */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-3">
          What's on your mind? (optional)
        </label>
        <Textarea
          placeholder="Share any thoughts, experiences, or reflections about your day..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="min-h-[120px] transition-smooth focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* Submit Button */}
      <Button 
        onClick={handleSubmit}
        className="w-full gradient-primary text-primary-foreground shadow-mood hover:shadow-lg transition-smooth"
        size="lg"
      >
        Complete Check-in
        <Heart className="ml-2 w-5 h-5" />
      </Button>
    </Card>
  );
};

export default MoodCheckIn;