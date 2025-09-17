// instrumentation-client.js
import posthog from 'posthog-js'

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  autocapture: true,        // clics, liens auto
  capture_pageview: true,   // page views auto
});