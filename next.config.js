/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: ['media.graphassets.com', 'avatars.githubusercontent.com'],
  },
  sassOptions: {
    includePaths: ['./src'],
    prependData: `
      $text-dark: rgb(17, 24, 39);
      $text-light: rgb(255, 255, 255);
      $primary-orange: rgb(222, 132, 45);
      $primary-green: rgb(43, 153, 122);
      $primary-blue: rgb(51, 166, 205);
      $primary-indigo: rgb(93, 100, 204);
      $primary-purple: rgb(190, 87, 218);
    `,
  },
};
