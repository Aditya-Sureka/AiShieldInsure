import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";

// Mock data interfaces
interface Claim {
  id: number;
  userId: number;
  policyNumber: string;
  amount: number;
  date: string;
  description: string;
  riskScore: number;
}

// Mock claims storage
const claims = new Map<number, Claim>();
let claimId = 1;

export function registerRoutes(app: Express): Server {
  // Setup authentication routes (/api/register, /api/login, /api/logout, /api/user)
  setupAuth(app);

  // Submit new claim
  app.post("/api/claims", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { policyNumber, claimAmount, incidentDate, description } = req.body;

    // Mock AI risk assessment (random score between 0 and 1)
    const riskScore = Math.random();

    const claim: Claim = {
      id: claimId++,
      userId: req.user.id,
      policyNumber,
      amount: parseFloat(claimAmount),
      date: incidentDate,
      description,
      riskScore,
    };

    claims.set(claim.id, claim);
    res.status(201).json(claim);
  });

  // Get user's claims
  app.get("/api/claims", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userClaims = Array.from(claims.values()).filter(
      (claim) => claim.userId === req.user.id
    );
    res.json(userClaims);
  });

  // Get claim by id
  app.get("/api/claims/:id", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const claim = claims.get(parseInt(req.params.id));
    if (!claim) {
      return res.status(404).json({ message: "Claim not found" });
    }

    if (claim.userId !== req.user.id) {
      return res.status(403).json({ message: "Forbidden" });
    }

    res.json(claim);
  });

  const httpServer = createServer(app);
  return httpServer;
}
