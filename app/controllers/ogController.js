// og-handler.js
import og from "@vercel/og";

module.exports = og(async (req, res) => {
  // Konfigurasi untuk menghasilkan gambar OG Image
  return {
    title: "My OG Image",
    width: 1200,
    height: 630,
    fontSize: 72,
    theme: "dark",
    imageUrl: "https://example.com/path-to-your-image.jpg", // URL gambar latar belakang
  };
});
