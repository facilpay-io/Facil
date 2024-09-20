module.exports = {
  reactStrictMode: true,
  env: {
    CMC_API_KEY: process.env.NEXT_PUBLIC_CMC_API_KEY,
  },
  images: {
    domains: ['pbs.twimg.com', 'video.twimg.com'], // Add external domains here
  },
};
