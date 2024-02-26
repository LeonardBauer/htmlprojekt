/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'text': 'hsl(var(--text-tw)/<alpha-value>)',
        'background': 'hsl(var(--background-tw)/<alpha-value>)',
        'primary': 'hsl(var(--primary-tw)/<alpha-value>)',
        'secondary': 'hsl(var(--secondary-tw)/<alpha-value>)',
        'accent': 'hsl(var(--accent-tw)/<alpha-value>)',
      },

    },
  },
  plugins: [],
}

