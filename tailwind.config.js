/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/*.{html,js,jsx}', './src/**/*.{html,js,jsx}', './node_modules/flowbite/**/*.js', './node_modules/tailwind-datepicker-react/dist/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'login' : "url('assets/login.jpg')",
        'todoList' : "url('assets/NotebookBorder.jpeg')"
      },
       fontFamily: {
        'architect': ['"Architects Daughter"', 'sans-serif']
       }
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/forms'), require('flowbite/plugin')],
}

