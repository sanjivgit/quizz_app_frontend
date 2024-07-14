/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/quizz",
  env: {
    backend: "http://localhost:2001/api/v1",
  },
  distDir: "build",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/quizz/home",
        permanent: true,
      },
      {
        source: "/quizz",
        destination: "/quizz/home",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
