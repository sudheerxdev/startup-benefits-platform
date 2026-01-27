"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function DealCard({ deal }: any) {
    const locked = deal.accessLevel === "locked";

    return (
        <motion.div
            whileHover={!locked ? { scale: 1.03 } : {}}
            className={`border p-4 rounded ${
                locked ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
            <h3 className="font-semibold text-lg">{deal.title}</h3>
            <p className="text-sm text-gray-500">{deal.partnerName}</p>

            {locked && (
                <p className="text-sm text-red-500 mt-2">
                    Verification required
                </p>
            )}

            {!locked && (
                <Link
                    href={`/deals/${deal._id}`}
                    className="inline-block mt-3 text-blue-600"
                >
                    View details →
                </Link>
            )}
        </motion.div>
    );
}
