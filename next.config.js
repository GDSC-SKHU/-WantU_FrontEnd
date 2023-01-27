const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/samsung',
        destination: `http://want2u.duckdns.org/main/1`,
      },
      {
        source: '/api/apple',
        destination: `http://want2u.duckdns.org/main/2`,
      },
      {
        source: '/api/lg',
        destination: `http://want2u.duckdns.org/main/3`,
      },
    ];
  },
};

module.exports = nextConfig;