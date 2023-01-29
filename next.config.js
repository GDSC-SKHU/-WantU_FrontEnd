const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/1',
        destination: `http://want2u.duckdns.org/main/1`,
      },
      {
        source: '/api/2',
        destination: `http://want2u.duckdns.org/main/2`,
      },
      {
        source: '/api/3',
        destination: `http://want2u.duckdns.org/main/3`,
      },
    ];
  },
};

module.exports = nextConfig;
