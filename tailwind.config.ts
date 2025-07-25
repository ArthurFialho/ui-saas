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
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) rotate(0deg)', 
            opacity: '0.6' 
          },
          '25%': { 
            transform: 'translateY(-15px) translateX(10px) rotate(90deg)', 
            opacity: '0.8' 
          },
          '50%': { 
            transform: 'translateY(-8px) translateX(-8px) rotate(180deg)', 
            opacity: '1' 
          },
          '75%': { 
            transform: 'translateY(10px) translateX(15px) rotate(270deg)', 
            opacity: '0.4' 
          },
        },
        floatSlow: {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) scale(1)', 
            opacity: '0.4' 
          },
          '33%': { 
            transform: 'translateY(-20px) translateX(-15px) scale(1.2)', 
            opacity: '0.6' 
          },
          '66%': { 
            transform: 'translateY(15px) translateX(20px) scale(0.8)', 
            opacity: '0.3' 
          },
        },
        floatFast: {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px)', 
            opacity: '0.8' 
          },
          '50%': { 
            transform: 'translateY(-25px) translateX(12px)', 
            opacity: '0.2' 
          },
        },
      },
      animation: {
        gradientMove: "gradientMove 6s ease-in-out infinite",
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite', 
        'float-fast': 'floatFast 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;