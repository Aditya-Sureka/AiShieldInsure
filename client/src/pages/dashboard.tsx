import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = {
  recentClaims: [
    { id: 1, date: "2024-03-20", amount: 5000, riskScore: 0.2 },
    { id: 2, date: "2024-03-19", amount: 12000, riskScore: 0.8 },
    { id: 3, date: "2024-03-18", amount: 3000, riskScore: 0.1 },
  ],
  fraudTrends: [
    { month: "Jan", cases: 45 },
    { month: "Feb", cases: 52 },
    { month: "Mar", cases: 48 },
    { month: "Apr", cases: 61 },
    { month: "May", cases: 55 },
    { month: "Jun", cases: 67 },
  ],
  stats: {
    totalClaims: 1254,
    fraudulentClaims: 87,
    savingsAmount: 450000,
  }
};

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Fraud Detection Dashboard</h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Claims</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="text-2xl font-bold">{mockData.stats.totalClaims}</div>
              <ArrowUpRight className="ml-2 h-4 w-4 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Fraudulent Claims</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="text-2xl font-bold">{mockData.stats.fraudulentClaims}</div>
              <ArrowDownRight className="ml-2 h-4 w-4 text-red-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Savings Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${mockData.stats.savingsAmount.toLocaleString()}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fraud Trends Chart */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Fraud Detection Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData.fraudTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="cases" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Recent Claims */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Claims Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockData.recentClaims.map(claim => (
              <Alert key={claim.id} variant={claim.riskScore > 0.7 ? "destructive" : "default"}>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Claim #{claim.id}</AlertTitle>
                <AlertDescription>
                  Amount: ${claim.amount} | Date: {claim.date} | 
                  Risk Score: {(claim.riskScore * 100).toFixed(1)}%
                </AlertDescription>
              </Alert>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
