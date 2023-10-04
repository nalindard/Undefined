/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    // require('@tailwindcss/line-clamp')
  ],

  daisyui: {
    // themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    themes: [
      "light",
      "dark",
      "forest",
      "black",
      "cyberpunk",
      "retro",
      "coffee",
      "autumn",
      {
        dark: {
          ...require('daisyui/src/theming/themes')["[data-theme=dark]"],
          "primary": "#fe0001",
          // "secondary": "#f6d860",
          // "accent": "#37cdbe",
          "neutral": "#232322",
          "base-100": "#f1f0f0",
          "base-200": "#232322",
          "base-300": "#0f0e0e",
        },
        light: {
          ...require('daisyui/src/theming/themes')["[data-theme=light]"],
          "primary": "#fe0001",
          "base-100": "#232322",

        },
        forest: {
          ...require('daisyui/src/theming/themes')["[data-theme=forest]"],
          // "base-100": "#e8ebe8",
          "base-100": "#e0e0e0",
          "base-200": "#030202",
          "base-300": "#000000",

        },
        black: {
          ...require('daisyui/src/theming/themes')["[data-theme=black]"],
          // "base-100": "#e8ebe8",
          "base-100": "#9c9c9c",
          // "base-200": "#030202",
          "base-200": "#242423",
          "base-300": "#000000",

        },
        cyberpunk: {
          ...require('daisyui/src/theming/themes')["[data-theme=cyberpunk]"],
          "primary": "#c07eec",
          // "base-100": "#75d1f0",
          "base-100": "#423f00",
          "base-200": "#dbcd00",
          "base-300": "#b8ab00",

        },
        retro: {
          ...require('daisyui/src/theming/themes')["[data-theme=retro]"],
          // "primary": "#ef9995",
          "primary": "#dc8850",
          "base-100": "#2e282a",
          "base-200": "#dbc99a",
          "base-300": "#d4bf87",

        },
        coffee: {
          ...require('daisyui/src/theming/themes')["[data-theme=coffee]"],
          // "primary": "#ef9995",
          // "primary": "#dc8850",
          "base-100": "#dc944c",
          "base-200": "#0c080c",
          "base-300": "#000000",

        },
        autumn: {
          ...require('daisyui/src/theming/themes')["[data-theme=autumn]"],
          "primary": "#d75050",
          "base-100": "#8c0327",
          "base-200": "#e0e0e0",
          "base-300": "#cfcfcf",

        },
      }], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]

    // darkTheme: "dark", // name of one of the included themes for dark mode
    darkTheme: "dark", // name of one of the included themes for dark mode

    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}

