/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/*.{html,js,jsx}', './src/**/*.{html,js,jsx}', './node_modules/flowbite/**/*.js', './node_modules/tailwind-datepicker-react/dist/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'login' : "url('./src/assets/login.jpg')"
      }
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/forms'), require('flowbite/plugin')],
}

