/** @type {import('next').NextConfig} */
const nextConfig = {
    // ...
  images: {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'osapsnew.bou.ac.bd',
          port: '',
          pathname: '/**'
        },
        {
          protocol: 'https',
          hostname: 'result.bou.ac.bd',
          port: '',
          pathname: '/**'
        }
    ]
  }
  // ...
};

export default nextConfig;
