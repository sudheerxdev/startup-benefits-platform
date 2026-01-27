import { Router } from "express";
import { getAllDeals, getDealById } from "../controllers/deal.controller";

const router = Router();

router.get("/", getAllDeals);
router.get("/:id", getDealById);

export default router;
