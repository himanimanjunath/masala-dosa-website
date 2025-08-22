/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    { pattern: /max-w-\[.*\]/ },  // keeps ALL arbitrary max-w values
    "container",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        geistmono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        lato: ["var(--font-lato)", "ui-sans-serif", "system-ui", "sans-serif"],
        merriweather: ["var(--font-merriweather)", "Georgia", "serif"],
      },
      container: {
        center: true,
        padding: "1rem", 
        screens: {
          "2xl": "87rem",
        },
      },
    },
  },
  plugins: [],
};
