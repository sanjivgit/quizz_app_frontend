/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/quizz",
  env: {
    backend: "https://testbook.tigga.in/api/v1",
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
