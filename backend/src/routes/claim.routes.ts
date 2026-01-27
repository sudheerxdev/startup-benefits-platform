import { Router } from "express";
import { claimDeal, getMyClaims } from "../controllers/claim.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/", authMiddleware, claimDeal);
router.get("/me", authMiddleware, getMyClaims);

export default router;
