const relumePreset = require("@relume_io/relume-tailwind");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [relumePreset],
  darkMode: false,

  variants: {
    extend: {},
  },
};
