import Deal from "../models/Deal";

export const getAllDeals = async (_: any, res: any) => {
    const deals = await Deal.find({ isActive: true });
    res.json(deals);
};

export const getDealById = async (req: any, res: any) => {
    const deal = await Deal.findById(req.params.id);
    if (!deal) {
        return res.status(404).json({ message: "Deal not found" });
    }
    res.json(deal);
};
