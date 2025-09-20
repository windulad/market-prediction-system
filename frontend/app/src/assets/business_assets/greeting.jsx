import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * GreetingHeader
 *
 * Props:
 * - name: string (required) - the name to show in the greeting
 * - captions: { morning?: string, afternoon?: string, evening?: string } (optional)
 * - timezoneOffsetMinutes: number (optional) - override timezone as minutes offset from UTC (e.g. +330 for Asia/Colombo)
 *
 * Usage:
 * import GreetingHeader from "./GreetingHeader";
 * <GreetingHeader name="Windula" />
 */

const defaultCaptions = {
    morning: "Here’s a quick glance at your business today — stay updated and plan ahead.",
    afternoon: "Track sales, manage ads, and grow your shop with ease throughout the day.",
    evening: "Review performance and prep for tomorrow with key insights from today.",
};

function getGreetingAndPeriod(date) {
    const hour = date.getHours();
    if (hour >= 5 && hour < 12) return { greeting: "Good Morning", period: "morning" };
    if (hour >= 12 && hour < 17) return { greeting: "Good Afternoon", period: "afternoon" };
    return { greeting: "Good Evening", period: "evening" };
}

export default function GreetingHeader({ name = "Windula", captions = {}, timezoneOffsetMinutes = null }) {
    const mergedCaptions = { ...defaultCaptions, ...captions };
    const [now, setNow] = useState(() => new Date());

    // If timezoneOffsetMinutes is provided, create a Date object in that timezone by offsetting UTC
    const makeDateWithOffset = (base = new Date()) => {
        if (typeof timezoneOffsetMinutes !== "number") return base;
        // base.getTime() - (base.getTimezoneOffset() * 60000) gives UTC millis
        const utcMillis = base.getTime() + base.getTimezoneOffset() * 60000;
        const targetMillis = utcMillis + timezoneOffsetMinutes * 60000;
        return new Date(targetMillis);
    };

    useEffect(() => {
        // update every 30 seconds so greeting changes promptly around boundaries
        const id = setInterval(() => setNow(new Date()), 30000);
        return () => clearInterval(id);
    }, []);

    const localNow = makeDateWithOffset(now);
    const { greeting, period } = getGreetingAndPeriod(localNow);
    const caption = mergedCaptions[period];

    return (
        <motion.header
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
        >
            
            <div>
                <h2 className="text-4xl font-bold mb-2">{greeting}, {name}</h2>
                <p className="font-semibold mb-2">{caption}</p>
            </div>
        </motion.header>
    );
}
