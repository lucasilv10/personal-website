/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        paper: "#f7f4ee",
        ink: "#171717",
        muted: "#67625b",
        rule: "#ded8cf"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"]
      },
      maxWidth: {
        archive: "960px"
      }
    }
  },
  plugins: []
};
