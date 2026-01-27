"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";


export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body>
        <Navbar />
        <AnimatePresence mode="wait">
            <motion.main
                key={typeof window !== "undefined" ? location.pathname : "page"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="p-6"
            >
                {children}
            </motion.main>
        </AnimatePresence>
        </body>
        </html>
    );
}
