"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getDealById, claimDeal } from "@/lib/api";
import { motion } from "framer-motion";

export default function DealDetailsPage() {
    const { id } = useParams();
    const [deal, setDeal] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getDealById(id as string)
            .then(setDeal)
            .catch(() => setError("Failed to load deal"))
            .finally(() => setLoading(false));
    }, [id]);

    const handleClaim = async () => {
        try {
            await claimDeal(deal._id);
            alert("Deal claimed successfully");
        } catch (err: any) {
            alert(err.message || "Unable to claim deal");
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    const isLocked = deal.accessLevel === "locked";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto"
        >
            <h1 className="text-4xl font-bold">{deal.title}</h1>
            <p className="text-gray-500 mt-2">{deal.partnerName}</p>

            <p className="mt-6">{deal.description}</p>

            <div className="mt-6">
                <h3 className="font-semibold">Eligibility</h3>
                <p className="text-sm text-gray-600">{deal.eligibilityText}</p>
            </div>

            {isLocked && (
                <p className="mt-4 text-red-500">
                    This deal is locked and requires account verification.
                </p>
            )}

            <button
                onClick={handleClaim}
                disabled={isLocked}
                className={`mt-8 px-6 py-3 rounded text-white transition
          ${isLocked ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:scale-105"}
        `}
            >
                Claim Deal
            </button>
        </motion.div>
    );
}
