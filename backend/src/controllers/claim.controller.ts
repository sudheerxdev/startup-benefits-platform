import Claim from "../models/Claim";
import Deal from "../models/Deal";
import User from "../models/User";

export const claimDeal = async (req: any, res: any) => {
    const { dealId } = req.body;
    const userId = req.user.userId;

    const user = await User.findById(userId);
    const deal = await Deal.findById(dealId);

    if (!deal) {
        return res.status(404).json({ message: "Deal not found" });
    }

    if (deal.accessLevel === "locked" && !user?.isVerified) {
        return res.status(403).json({ message: "Verification required" });
    }

    const existingClaim = await Claim.findOne({ userId, dealId });
    if (existingClaim) {
        return res.status(400).json({ message: "Deal already claimed" });
    }

    const claim = await Claim.create({ userId, dealId });
    res.status(201).json(claim);
};

export const getMyClaims = async (req: any, res: any) => {
    const claims = await Claim.find({ userId: req.user.userId }).populate("dealId");
    res.json(claims);
};
