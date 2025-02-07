import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Shield, AlertTriangle, CheckCircle } from "lucide-react";

const riskQuestions = [
  {
    question: "How old is the insurance policy?",
    options: ["Less than 6 months", "6-12 months", "1-3 years", "More than 3 years"],
    weights: [3, 2, 1, 0],
  },
  {
    question: "Have there been any previous claims on this policy?",
    options: ["No claims", "1 claim", "2-3 claims", "More than 3 claims"],
    weights: [0, 1, 2, 3],
  },
  {
    question: "Is all required documentation complete and verified?",
    options: ["Yes, all verified", "Partially verified", "Under verification", "Missing documents"],
    weights: [0, 1, 2, 3],
  },
  {
    question: "Are there any discrepancies in the claim details?",
    options: ["No discrepancies", "Minor discrepancies", "Moderate issues", "Major inconsistencies"],
    weights: [0, 1, 2, 3],
  },
];

const tips = [
  {
    title: "Document Everything",
    description: "Keep detailed records of all insurance-related documents and communications.",
    icon: Shield,
  },
  {
    title: "Verify Service Providers",
    description: "Always work with licensed and reputable insurance professionals.",
    icon: CheckCircle,
  },
  {
    title: "Report Suspicious Activity",
    description: "If you suspect fraud, report it immediately to your insurance provider.",
    icon: AlertTriangle,
  },
];

export default function RiskAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (weight: number) => {
    const newAnswers = [...answers, weight];
    if (currentQuestion < riskQuestions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setAnswers(newAnswers);
      setShowResults(true);
    }
  };

  const calculateRiskScore = () => {
    const total = answers.reduce((sum, weight) => sum + weight, 0);
    const maxScore = riskQuestions.length * 3;
    return (total / maxScore) * 100;
  };

  const getRiskLevel = (score: number) => {
    if (score < 30) return { level: "Low", color: "text-green-500" };
    if (score < 60) return { level: "Medium", color: "text-yellow-500" };
    return { level: "High", color: "text-red-500" };
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  // Get a tip based on the current date to ensure it changes daily
  const getTodaysTip = () => {
    const dayOfYear = Math.floor(
      (new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
    );
    return tips[dayOfYear % tips.length];
  };

  const todaysTip = getTodaysTip();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Risk Assessment Tool</h1>

        {/* Daily Tip Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <todaysTip.icon className="h-5 w-5 text-primary" />
              Fraud Prevention Tip of the Day
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold mb-2">{todaysTip.title}</h3>
            <p className="text-muted-foreground">{todaysTip.description}</p>
          </CardContent>
        </Card>

        {/* Assessment Section */}
        <Card>
          {!showResults ? (
            <>
              <CardHeader>
                <CardTitle>Question {currentQuestion + 1} of {riskQuestions.length}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <Progress value={(currentQuestion / riskQuestions.length) * 100} />
                </div>
                <h2 className="text-xl mb-6">{riskQuestions[currentQuestion].question}</h2>
                <div className="space-y-4">
                  {riskQuestions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start text-left"
                      onClick={() => handleAnswer(riskQuestions[currentQuestion].weights[index])}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </>
          ) : (
            <>
              <CardHeader>
                <CardTitle>Risk Assessment Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-8">
                  <div className="mb-4">
                    <Progress value={calculateRiskScore()} className="h-4" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Risk Level:{" "}
                    <span className={getRiskLevel(calculateRiskScore()).color}>
                      {getRiskLevel(calculateRiskScore()).level}
                    </span>
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Score: {calculateRiskScore().toFixed(1)}%
                  </p>
                  <Button onClick={resetAssessment}>Start New Assessment</Button>
                </div>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}
