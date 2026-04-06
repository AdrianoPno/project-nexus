export const env = {
  cms: {
    baseUrl: process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:1337",
  },
} as const;
