import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import dealRoutes from "./routes/deal.routes";
import claimRoutes from "./routes/claim.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/deals", dealRoutes);
app.use("/api/claims", claimRoutes);

export default app;
