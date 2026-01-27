"use client";

import { useEffect, useState } from "react";
import { getMyClaims } from "@/lib/api";

export default function DashboardPage() {
    const [claims, setClaims] = useState([]);

    useEffect(() => {
        getMyClaims().then(setClaims);
    }, []);

    return (
        <div>
            <h2 className="text-3xl font-semibold mb-6">My Claimed Deals</h2>

            {claims.length === 0 && (
                <p className="text-gray-500">No claimed deals yet.</p>
            )}

            <ul className="space-y-4">
                {claims.map((claim: any) => (
                    <li key={claim._id} className="border p-4 rounded">
                        <h4 className="font-semibold">
                            {claim.dealId.title}
                        </h4>
                        <span className="text-sm text-gray-500">
              Status: {claim.status}
            </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
