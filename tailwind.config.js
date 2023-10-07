/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        lightBlue: 'rgb(0, 113, 188)',
        boxColor: 'rgb(32, 75, 104)',
        backgroundColor: 'rgb(246, 246, 248)',
        gradient_one: 'rgb(0, 63, 104)',
        gradient_two: 'rgb(0, 27, 44)',
        box_gradient_one: 'rgb(30, 156, 215)',
        box_gradient_two: 'rgb(0, 117, 190)',
        box_gradient_three: 'rgb(0, 130, 203)',
        head_background: 'rgb(2, 31, 51)',
        button_color: 'rgb(0, 169, 157)',
        button_color_hover: 'rgb(3, 112, 101)'
      },
    },
  },
  plugins: [],
}

