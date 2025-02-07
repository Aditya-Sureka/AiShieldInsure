import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Shield, AlertTriangle, CheckCircle, Play, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fraudScenarios = [
  {
    id: 1,
    title: "Multiple Claims Pattern",
    description: "Simulation of multiple claims filed for the same incident across different insurers.",
    steps: [
      { step: "Initial Claim Filing", analysis: "System detects multiple policy lookups" },
      { step: "Cross-Reference Check", analysis: "AI identifies similar claims in database" },
      { step: "Pattern Recognition", analysis: "Multiple claims pattern detected" },
      { step: "Risk Score Calculation", analysis: "High risk score assigned" }
    ],
    riskScore: 85
  },
  {
    id: 2,
    title: "Inflated Damage Claims",
    description: "Demonstration of how AI detects artificially inflated claim amounts.",
    steps: [
      { step: "Claim Amount Analysis", analysis: "Comparing with historical data" },
      { step: "Market Value Check", analysis: "Verification against standard prices" },
      { step: "Documentation Review", analysis: "Inconsistencies in reported damages" },
      { step: "Final Assessment", analysis: "Inflation pattern identified" }
    ],
    riskScore: 72
  },
  {
    id: 3,
    title: "Identity Manipulation",
    description: "Shows how system detects potential identity-related fraud attempts.",
    steps: [
      { step: "Identity Verification", analysis: "Document authenticity check" },
      { step: "Historical Data Analysis", analysis: "Past claims patterns review" },
      { step: "Network Analysis", analysis: "Related claims investigation" },
      { step: "Risk Evaluation", analysis: "Suspicious pattern detected" }
    ],
    riskScore: 93
  }
];

export default function FraudSimulator() {
  const [currentScenario, setCurrentScenario] = useState(fraudScenarios[0]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [isSimulating, setIsSimulating] = useState(false);

  const startSimulation = () => {
    setIsSimulating(true);
    setCurrentStep(0);
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= currentScenario.steps.length - 1) {
          clearInterval(interval);
          setIsSimulating(false);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);
  };

  const resetSimulation = () => {
    setCurrentStep(-1);
    setIsSimulating(false);
  };

  const getRiskColor = (score: number) => {
    if (score < 50) return "text-green-500";
    if (score < 75) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Fraud Detection Simulator</h1>
        
        {/* Scenario Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {fraudScenarios.map((scenario) => (
            <Card
              key={scenario.id}
              className={`cursor-pointer hover:shadow-lg transition-shadow ${
                currentScenario.id === scenario.id ? "border-primary" : ""
              }`}
              onClick={() => {
                resetSimulation();
                setCurrentScenario(scenario);
              }}
            >
              <CardHeader>
                <CardTitle className="text-lg">{scenario.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{scenario.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Simulation Display */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{currentScenario.title} Simulation</CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  onClick={startSimulation}
                  disabled={isSimulating}
                >
                  <Play className="h-4 w-4 mr-2" />
                  Start Simulation
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={resetSimulation}
                  disabled={currentStep === -1}
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Progress Timeline */}
            <div className="mb-8">
              <Progress 
                value={((currentStep + 1) / currentScenario.steps.length) * 100}
                className="mb-4"
              />
              <div className="grid grid-cols-1 gap-4">
                {currentScenario.steps.map((step, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${
                      index <= currentStep ? "bg-primary/5" : "bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{step.step}</h3>
                      {index <= currentStep && (
                        <Badge variant="outline">In Progress</Badge>
                      )}
                    </div>
                    {index <= currentStep && (
                      <p className="text-sm text-muted-foreground">
                        {step.analysis}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Score */}
            {currentStep === currentScenario.steps.length - 1 && (
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Final Risk Assessment</h3>
                <div className={`text-4xl font-bold ${getRiskColor(currentScenario.riskScore)}`}>
                  {currentScenario.riskScore}%
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Risk Score indicates the probability of fraudulent activity
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
