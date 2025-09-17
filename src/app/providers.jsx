'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';

export function PostHogProvider({ children }) {
  useEffect(() => {
    // Init côté client
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      autocapture: true,        // pageviews & clics auto
      capture_pageview: true,
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}