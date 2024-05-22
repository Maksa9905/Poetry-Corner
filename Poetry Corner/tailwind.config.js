/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Jost", "sans-serif"],
    },
    colors: {
      neutral_01: "#656d4f",
      neutral_02: "#9b9b84",
      neutral_03: "#fbeddb",
      neutral_04: "#e1d0bc",
      neutral_05: "#c9a88d",
      red: "#FF6347",

      monochrome_01: "#1d2022",
      monochrome_02: "#494c4e",
      monochrome_03: "#787a7b",
      monochrome_04: "#cecfd0",
      monochrome_05: "#dfe1e2",
      white: "#fff",

      transparent: "transparent",
    },
    backgroundImage: {
      logo: "url(/src/assets/logo.svg)",
      menu: "url(/src/assets/menu.svg)",
      vk_icon: "url(/src/assets/vk.svg)",
      yt_icon: "url(/src/assets/youtube.svg)",
      tg_icon: "url(/src/assets/telegram.svg)",
      pen: "url(/src/assets/pen.png)",
    },
  },
  plugins: [],
};
