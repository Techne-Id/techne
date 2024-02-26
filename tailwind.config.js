/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/views/*.{html,js,ejs}", "./app/views/page/*.{html,js,ejs}", "./app/views/template/*.{html,js,ejs}"],
  theme: {
    container: {
      center: true,
      padding: "10px",
    },
    extend: {
      colors: {
        biru: "#2E6993",
        kuning: "#FBDD54",
        putih: "#fcfaf5",
      },
    },
  },
  plugins: [],
};
