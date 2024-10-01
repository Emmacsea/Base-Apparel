/** @type {import('tailwindcss').Config} */

const path = require(`path`);

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          desaturatedred: "hsl(0, 36%, 70%)",
          softred: "hsl(0, 93%, 68%)",
        },

        neutral: {
          dgrayishred: "hsl(0, 6%, 24%)",
        },

        gradient: {
          grad1: "hsl(0, 0%, 100%)",
          grad2: "hsl(0, 100%, 98%)",
          grad3: "hsl(0, 80%, 86%)",
          grad4: "hsl(0, 74%, 74%)",
        },
       
      },

      fontFamily: {
        body: ["Josefin Sans"]
      },

      backgroundImage: {
        'left-image': `url(${path.resolve(__dirname, `src/assets/images/bg-pattern-desktop.svg`)})`,
      }
    },
  },
  plugins: [],
}