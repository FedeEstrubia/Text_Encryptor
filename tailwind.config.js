import {nextui} from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lBlue100: "#F6F6F6",
        lBlue200: "#D6E4F0",
        lBlue300: "#1E56A0",
        lBlue400: "#163172",
        lBlue500: "#00204A",
           msg:   "#DFEEFA",
        dBlue100: "#D9FAFF",
        dBlue200: "#00BBF0",
        dBlue300: "#005792",
        dBlue400: "#072B61",
        dBlue500: "#00204A",
        
        gray100: "#CED4DA",
        gray200: "#ADB5BD",
        gray300: "#868E96",
        gray400: "#495057",
        
      },
    },
  },
  plugins: [nextui()],
};
