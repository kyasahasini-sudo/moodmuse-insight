import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { TrendingUp, Calendar, Target, Award, Heart, Brain } from "lucide-react";

// Sample data - in a real app this would come from your database
const moodData = [
  { date: "Mon", mood: 4, day: "Monday" },
  { date: "Tue", mood: 3, day: "Tuesday" },
  { date: "Wed", mood: 5, day: "Wednesday" },
  { date: "Thu", mood: 3, day: "Thursday" },
  { date: "Fri", mood: 4, day: "Friday" },
  { date: "Sat", mood: 5, day: "Saturday" },
  { date: "Sun", mood: 4, day: "Sunday" },
];

const weeklyStats = [
  { name: "Excellent", count: 2, color: "#22c55e" },
  { name: "Good", count: 3, color: "#84cc16" },
  { name: "Okay", count: 2, color: "#eab308" },
  { name: "Poor", count: 0, color: "#f97316" },
  { name: "Terrible", count: 0, color: "#ef4444" },
];

const insights = [
  {
    icon: TrendingUp,
    title: "Mood Trending Up",
    description: "Your mood has improved by 15% this week compared to last week.",
    type: "positive"
  },
  {
    icon: Calendar,
    title: "Consistent Check-ins",
    description: "You've completed 7 days of mood tracking this week. Great consistency!",
    type: "achievement"
  },
  {
    icon: Target,
    title: "Weekend Boost",
    description: "Your mood typically improves on weekends. Consider weekend activities for weekdays.",
    type: "insight"
  }
];

const WellnessDashboard = () => {
  const averageMood = (moodData.reduce((sum, day) => sum + day.mood, 0) / moodData.length).toFixed(1);
  const currentStreak = 7; // Days of consecutive check-ins

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Your Wellness Dashboard</h2>
        <p className="text-xl text-muted-foreground">
          Track your progress and discover patterns in your mental wellness journey
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 text-center shadow-soft">
          <Heart className="w-8 h-8 text-mood-excellent mx-auto mb-3" />
          <div className="text-2xl font-bold text-mood-excellent">{averageMood}</div>
          <div className="text-sm text-muted-foreground">Average Mood</div>
        </Card>
        
        <Card className="p-6 text-center shadow-soft">
          <Award className="w-8 h-8 text-primary mx-auto mb-3" />
          <div className="text-2xl font-bold text-primary">{currentStreak}</div>
          <div className="text-sm text-muted-foreground">Day Streak</div>
        </Card>
        
        <Card className="p-6 text-center shadow-soft">
          <Calendar className="w-8 h-8 text-secondary-foreground mx-auto mb-3" />
          <div className="text-2xl font-bold text-secondary-foreground">7/7</div>
          <div className="text-sm text-muted-foreground">Week Complete</div>
        </Card>
        
        <Card className="p-6 text-center shadow-soft">
          <Brain className="w-8 h-8 text-accent-foreground mx-auto mb-3" />
          <div className="text-2xl font-bold text-accent-foreground">85%</div>
          <div className="text-sm text-muted-foreground">Wellness Score</div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Mood Trend */}
        <Card className="p-6 shadow-soft">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            7-Day Mood Trend
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={moodData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="date" />
              <YAxis domain={[1, 5]} />
              <Tooltip 
                formatter={(value: number) => {
                  const moodLabels = ['', 'Terrible', 'Poor', 'Okay', 'Good', 'Excellent'];
                  return [moodLabels[value], 'Mood'];
                }}
                labelFormatter={(label) => {
                  const day = moodData.find(d => d.date === label)?.day;
                  return day || label;
                }}
              />
              <Line 
                type="monotone" 
                dataKey="mood" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Mood Distribution */}
        <Card className="p-6 shadow-soft">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            Mood Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyStats}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Insights */}
      <Card className="p-8 shadow-soft">
        <h3 className="text-2xl font-semibold mb-6">Personalized Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, index) => {
            const IconComponent = insight.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  ${insight.type === 'positive' ? 'bg-mood-excellent/10' : 
                    insight.type === 'achievement' ? 'bg-primary/10' : 'bg-accent/10'}
                `}>
                  <IconComponent className={`
                    w-6 h-6
                    ${insight.type === 'positive' ? 'text-mood-excellent' : 
                      insight.type === 'achievement' ? 'text-primary' : 'text-accent-foreground'}
                  `} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    {insight.title}
                    <Badge variant="secondary" className="text-xs">
                      {insight.type}
                    </Badge>
                  </h4>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default WellnessDashboard;