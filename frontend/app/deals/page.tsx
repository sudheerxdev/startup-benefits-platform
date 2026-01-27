"use client";

import { useEffect, useState } from "react";
import DealCard from "@/components/DealCard";
import { getDeals } from "@/lib/api";

export default function DealsPage() {
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        getDeals().then(setDeals);
    }, []);

    return (
        <div>
            <h2 className="text-3xl font-semibold mb-6">Available Deals</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {deals.map((deal: any) => (
                    <DealCard key={deal._id} deal={deal} />
                ))}
            </div>
        </div>
    );
}
