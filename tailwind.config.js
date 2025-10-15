const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['*.html', '_site/*.html','_site/**/*.html', '_pages/**/*.md', '_posts/**/*.md', '_layouts/**/*.html', '_includes/**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#faf2e9",
        dark_background: "#131f3d",
        primaryText: "#103434",
        link_color: "#6b4423",
        link: {
          DEFAULT: "#0f766e",
          hover: "#14b8a6",
        },
        //primaryText: "#2d2d2d",
        gray: colors.slate,
        primary: colors.rose,
        secondary: colors.indigo,
        tertiary: colors.slate,
        danger: colors.red,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    plugin(function ({ addVariant }) {
      addVariant('group-[.glass-effect]', ':merge(.group).glass-effect &');
    }),
  ]
}
