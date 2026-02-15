"use client";

import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Basic smooth scroll setup for now
    const handleScroll = (e: WheelEvent) => {
       // Optional: Custom scroll logic could go here if we wanted Lenis or similar
    };
    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div ref={scrollRef} className="smooth-wrapper">
      <div className="smooth-content">{children}</div>
    </div>
  );
}
