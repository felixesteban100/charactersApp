/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: ['dark'],
      borderColor: ['dark'],
      textColor: ['dark'],
      backgroundImage: {
        'min-width': "url('http://storage1.snappages.site/NC5WB7/assets/images/5978153_2240x1260_2500.png')",
        'middle-width': "url('https://cdn.ldsliving.com/dims4/default/4ad22d5/2147483647/strip/true/crop/408x408+0+0/resize/408x408!/format/jpg/quality/90/?url=http%3A%2F%2Flds-living-brightspot.s3.amazonaws.com%2F38%2Fd9%2F3bfdf616abddb55cf9a7dfa0164d%2F53099.jpg')",
        'max-width': "url('https://images.unsplash.com/photo-1450558415837-1f5e21a17709?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amVzdXMlMjBjcm9zc3xlbnwwfHwwfHw%3D&w=1000&q=80')",
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: [
      {
        mytheme1: {
          "primary": "#080a91",
          "secondary": "#d6d62c",
          "accent": "#aaffd9",
          "neutral": "#202B32",
          "base-100": "#383A51",
          "info": "#5B85F1",
          "success": "#135852",
          "warning": "#94710A",
          "error": "#EA7775",
        },
      },

      "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}

