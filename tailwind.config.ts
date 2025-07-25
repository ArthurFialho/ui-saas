import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "4rem",
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      keyframes: {
        gradientMove: {
"0%": {
  backgroundPosition: "0% 50%",
},
"25%": {
  backgroundPosition: "50% 40%",
},
"50%": {
  backgroundPosition: "100% 50%",
},
"75%": {
  backgroundPosition: "50% 60%",
},
"100%": {
  backgroundPosition: "0% 50%",
}
        },
      },
      animation: {
        gradientMove: "gradientMove 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
