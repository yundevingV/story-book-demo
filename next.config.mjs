const nextConfig = {
  /* config options here */
  // Webpack 설정 명시적 지정 (필요시)
  webpack: (config, { isServer }) => {
    // Webpack 설정 커스터마이징
    return config;
  },
};

export default nextConfig;
