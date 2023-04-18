// /** @type {import('tailwindcss').Config} */
// export const purge = ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"];
// export const content = ["./src/**/*.{html,js,jsx}"];
// export const mode = "jit";
// export const theme = {
//   extend: {
//     colors: {
//       "deep-blue": "#010026",
//       blue: "#2CBCE9",
//       red: "#DC4492",
//       yellow: "#FDCC49",
//       grey: "#ededed",
//       navbar: "#d35400",
//       bluebody: "#000b41",
//       sunyellow: "#fcb343",
//       ribcolororange: "#fb8c4a",

//       "dark-grey": "#757575",
//       "opaque-black": "rgba(0,0,0,0.35)",
//     },
//     backgroundImage: (theme) => ({
//       "gradient-rainbow":
//         "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
//       "bg-gradient-orange":
//         "linear-gradient(90deg, #FFEBCD, #FFDAB9, #FFC0A6, #FFA07A, #FF8C5A, #FF6F00)",
//     }),
//     fontFamily: {
//       playfair: ["Playfair Display", "serif"],
//       opensans: ["Open Sans", "sans-serif"],
//     },
//     content: {
//       brush: "url('./assets/brush.png')",
//       person1: "url('./assets/person-1.png')",
//       person2: "url('./assets/person-2.png')",
//       person3: "url('./assets/person-3.png')",
//     },
//   },
//   screens: {
//     xs: "480px",
//     ss: "620px",
//     sm: "768px",
//     md: "1060px",
//     lg: "1200px",
//     xl: "1700px",
//   },
// };
// export const plugins = [];

import { sky, rose, amber, gray } from "tailwindcss/colors";

export const mode = "jit";
export const purge = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
};
export const theme = {
  extend: {
    colors: {
      "deep-blue": "#010026",
      blue: sky["500"],
      red: rose["500"],
      yellow: amber["500"],
      grey: gray["200"],
      navbar: "#d35400",
      bluebody: "#000b41",
      sunyellow: "#fcb343",
      ribcolororange: "#fb8c4a",
      "dark-grey": gray["600"],
      "opaque-black": "rgba(0,0,0,0.35)",
    },
    backgroundImage: {
      "gradient-rainbow":
        "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
      "bg-gradient-orange":
        "linear-gradient(90deg, #FFEBCD, #FFDAB9, #FFC0A6, #FFA07A, #FF8C5A, #FF6F00)",
    },
    fontFamily: {
      playfair: ["Playfair Display", "serif"],
      opensans: ["Open Sans", "sans-serif"],
      sedgwick: ["Sedgwick Ave Display", "cursive"],
    },
    content: {
      brush: "url('./assets/brush.png')",
      person1: "url('./assets/person-1.png')",
      person2: "url('./assets/person-2.png')",
      person3: "url('./assets/person-3.png')",
    },
  },
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
};
export const plugins = [];
