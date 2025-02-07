import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, ArrowUpRight, ArrowDownRight, Clock } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Badge } from "@/components/ui/badge";

const mockData = {
  recentClaims: [
    { id: 1, date: "2024-03-20", amount: 5000, riskScore: 0.2, status: "Verified" },
    { id: 2, date: "2024-03-19", amount: 12000, riskScore: 0.8, status: "Under Review" },
    { id: 3, date: "2024-03-18", amount: 3000, riskScore: 0.1, status: "Approved" },
  ],
  fraudTrends: [
    { month: "Jan", cases: 45, detected: 40 },
    { month: "Feb", cases: 52, detected: 48 },
    { month: "Mar", cases: 48, detected: 45 },
    { month: "Apr", cases: 61, detected: 58 },
    { month: "May", cases: 55, detected: 52 },
    { month: "Jun", cases: 67, detected: 63 },
  ],
  stats: {
    totalClaims: 1254,
    fraudulentClaims: 87,
    savingsAmount: 450000,
    aiAccuracy: 94.5
  },
  patternAnalysis: [
    { pattern: "Duplicate Claims", count: 28 },
    { pattern: "Inflated Amounts", count: 35 },
    { pattern: "Identity Fraud", count: 15 },
    { pattern: "Policy Abuse", count: 9 }
  ]
};

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "verified":
      return "bg-green-100 text-green-800";
    case "under review":
      return "bg-yellow-100 text-yellow-800";
    case "approved":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">AI-Powered Fraud Detection Dashboard</h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">AI Accuracy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockData.stats.aiAccuracy}%
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Detection Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
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
                    name="Total Cases"
                    dataKey="cases" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    name="Detected"
                    dataKey="detected" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fraud Pattern Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockData.patternAnalysis}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="pattern" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Claims with Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Claims Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockData.recentClaims.map(claim => (
              <Alert key={claim.id} variant={claim.riskScore > 0.7 ? "destructive" : "default"}>
                <AlertCircle className="h-4 w-4" />
                <div className="flex items-center justify-between">
                  <div>
                    <AlertTitle>Claim #{claim.id}</AlertTitle>
                    <AlertDescription>
                      Amount: ${claim.amount} | Date: {claim.date} | 
                      Risk Score: {(claim.riskScore * 100).toFixed(1)}%
                    </AlertDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <Badge className={getStatusColor(claim.status)}>
                      {claim.status}
                    </Badge>
                  </div>
                </div>
              </Alert>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}