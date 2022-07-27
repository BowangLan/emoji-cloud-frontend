/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PRODUCTION: 'TRUE',
    DEV: "TRUE",
    HOST_IP: 'localhost:8000'
  }
}

module.exports = nextConfig
