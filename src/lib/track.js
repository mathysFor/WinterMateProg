// src/lib/track.js
"use client";
import { track as vercelTrack } from '@vercel/analytics';

export function getBucket() {
  return document.cookie.match(/ab_bucket=(A|B)/)?.[1] || 'A';
}

export function track(name, props = {}) {
  try {
    vercelTrack(name, { bucket: getBucket(), ...props });
  } catch {}
}