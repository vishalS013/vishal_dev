/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vishal: {
          400: "#94a3b8",
          300: "#cbd5e1",
        },
        red: {
          400: "#dc2626",
        },
        blue: {
          500: "#3b82f6",
        },
        green:{
          500:"#22c55e"
        }
      },
      fontSize: {
        vishal: 28,
      },
    },
  },
  plugins: [],
};
