/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",   
    "./**/*.{js,ts,jsx,tsx,mdx}",      
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        geistmono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        lato: ["var(--font-lato)", "ui-sans-serif", "system-ui", "sans-serif"],
        merriweather: ["var(--font-merriweather)", "Georgia", "serif"],
      },
    },
  },
  safelist: [
    "max-w-[87rem]",
    "max-w-[1392px]",   
    "container",        
  ],
  plugins: [],
};
