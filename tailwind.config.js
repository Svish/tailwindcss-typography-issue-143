/**
 * @type {import("@types/tailwindcss/tailwind-config").TailwindConfig }
 **/
module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: withOpacity("--color-white"),
      black: withOpacity("--color-black"),
      primary: {
        50: withOpacity("--color-primary-50"),
        100: withOpacity("--color-primary-100"),
        200: withOpacity("--color-primary-200"),
        300: withOpacity("--color-primary-300"),
        400: withOpacity("--color-primary-400"),
        500: withOpacity("--color-primary-500"),
        600: withOpacity("--color-primary-600"),
        700: withOpacity("--color-primary-700"),
        800: withOpacity("--color-primary-800"),
        900: withOpacity("--color-primary-900"),
      },
    },
  },
  //              💥 Causes crash 👇
  // plugins: [require("@tailwindcss/typography")],
};

function withOpacity(variableName) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${variableName}), var(${opacityVariable}, 1))`;
    }
    return `rgb(var(${variableName}))`;
  };
}
