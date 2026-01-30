import catppuccin from '@catppuccin/tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"JetBrains Mono"', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [
    catppuccin({
      defaultFlavour: 'mocha',
    }),
  ],
};
