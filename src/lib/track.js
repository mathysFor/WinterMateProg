// src/lib/track.js
"use client";
import posthog from "posthog-js";

export function track(name, props = {}) {
  if (typeof window !== "undefined") {
    posthog.capture(name, props);
  }
}

export function trackCTA(position) {
  track("cta_click", { position: position });
}

// Track scroll depth as percentage (0-100)
export function trackScrollDepth() {
  if (typeof window === "undefined") return;

  function handleScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = Math.round((scrollTop / docHeight) * 100);

    // Send event at key milestones (25, 50, 75, 100)
    if ([25, 50, 75, 100].includes(scrolled)) {
      track("scroll_depth", { percentage: scrolled });
    }
  }

  window.addEventListener("scroll", handleScroll);

  // Optional: clean up when leaving the page
  return () => window.removeEventListener("scroll", handleScroll);
}
 