/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./App.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}","./src/**/*.{js,jsx,ts,tsx}", "./features/blogger/**/*.{js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'pink-color': '#ff3190',
      'pale-pink': '#ff4ac2',
      'blued': '#0000ff',
      'pale-gray': '#EAEAEA'
    },
  },
  plugins: [],
  important: true,
}

