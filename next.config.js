module.exports = {
  future: {
    webpack5: true,
    strictPostcssConfiguration: true
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require('./scripts/sitemap');
      require('./scripts/rss');
    }

    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      });
    }

    return config;
  }
};
