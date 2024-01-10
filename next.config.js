module.exports = {
    async rewrites() {
      return [
        {
          source: '/',
          destination: '/app/page',
        },
      ];
    },
  };
  