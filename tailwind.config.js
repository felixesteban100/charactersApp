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
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1
          }
        },
        fadeOut: {
          '0%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0
          }
        },
        fadeOutAlert: {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
            display: 'none'
          },
          /* '100%': {
            transform: 'scale(0)'
          } */
        },
        flipInHorBottom: {
          '0%': {
            '-webkit-transform': 'rotateX(80deg)',
            transform: 'rotateX(80deg)',
            opacity: 0
          },
          '100%': {
            '-webkit-transform': 'rotateX(0)',
            transform: 'rotateX(0)',
            opacity: 1
          }
        },
        flipOutHorTop: {
          '0%': {
            '-webkit-transform': 'rotateX(0)',
            transform: 'rotateX(0)',
            opacity: 1
          },
          '100%': {
            '-webkit-transform': 'rotateX(80deg)',
            transform: 'rotateX(80deg)',
            opacity: 0
          }
        },
        scaleForwardEntrance: {
          '0%': {
            transform: 'scale(0)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        scaleForwardExit: {
          '0%': {
            // opacity: 0,
            transform: 'scale(1)'
          },
          '100%': {
            transform: 'scale(0)'
          }
        },
      },
      animation: {
        'fadeIn': "fadeIn 3s ease 1 normal forwards",
        'fadeOut': "fadeOut 1s ease 1 normal forwards",
        'fadeOutAlert': "fadeOutAlert 1s ease-out 1 forwards",
        'flipInHorBottom': "flipInHorBottom 1s ease-out 1 forwards",
        'flipOutHorTop': "flipOutHorTop 1s ease-out 1 forwards",
        'scaleForwardEntrance': 'scaleForwardEntrance 1s ease 0s 1 normal both',
        'scaleForwardExit': 'scaleForwardExit 1s ease 0s 1 normal both',
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

      {
        mytheme2: {
          "primary": "#8bd354",
          "secondary": "#cc2a73",
          "accent": "#2821f2",
          "neutral": "#24202D",
          "base-100": "#374C5C",
          "info": "#1659E9",
          "success": "#4BD89D",
          "warning": "#C16F0B",
          "error": "#F4153A",
        },
      },

      {
        mytheme3: {
          "primary": "#3b82f6",
          "secondary": "#6ee9f4",
          "accent": "#20bf6f",
          "neutral": "#221924",
          "base-100": "#374151",
          "info": "#9EB9EA",
          "success": "#1AC77C",
          "warning": "#AF6504",
          "error": "#EA413E",
        },
      },

      {
        mytheme4: {
          "primary": "#193c8e",
          "secondary": "#1f719e",
          "accent": "#30e898",
          "neutral": "#16161d",
          "base-100": "#fcfcfd",
          "info": "#4cacf0",
          "success": "#187c63",
          "warning": "#c99908",
          "error": "#f45b4e",
        },
      },

      {
        mytheme5: {
          "primary": "#01a598",
          "secondary": "#f7e4b2",
          "accent": "#7ded85",
          "neutral": "#301d35",
          "base-100": "#e9e8ed",
          "info": "#aab7e4",
          "success": "#54e8aa",
          "warning": "#ae790f",
          "error": "#e6432d",
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

