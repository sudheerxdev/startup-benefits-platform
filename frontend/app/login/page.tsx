"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/api";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const { token } = await loginUser({ email, password });
            localStorage.setItem("token", token);
            router.push("/dashboard");
        } catch (err: any) {
            setError(err.message || "Login failed");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20">
            <h2 className="text-3xl font-bold mb-6">Login</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-3 rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-3 rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded hover:opacity-90"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
