/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  sassOptions: {
    includePaths: ['./src'],
    prependData: `
      $primary-violet: rgb(100, 102, 241);
      $text-color-dark: rgb(17, 24, 39);
      $text-color-light: rgb(255, 255, 255);

      $purple-background: rgb(224 231 255);
      $purple-text: rgb(55, 48, 163);

      $red-background: rgb(253, 231, 243);
      $red-text: rgb(150, 0, 77);

      $green-background: rgb(209, 250, 229);
      $green-text: rgb(14, 97, 74);

      $yellow-background: rgb(255, 251, 236);
      $yellow-text: rgb(147, 66, 18);

      $blue-background: rgb(239, 246, 255);
      $blue-text: rgb(41, 87, 219);


      $rank-one-background: rgb(222, 132, 45);
      $rank-two-background: rgb(43, 153, 122);
      $rank-three-background: rgb(51, 166, 205);
      $rank-four-background: rgb(93, 100, 204);
      $rank-five-background: rgb(190, 87, 218);
    `,
  },
};
