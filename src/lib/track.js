// src/lib/track.js
"use client";
import posthog from "posthog-js";

export function track(name, props = {}) {
  if (typeof window !== "undefined") {
    posthog.capture(name, props);
  }
}

export function trackFooterCTA() {
  track("cta_click", { position: "footer" });
}