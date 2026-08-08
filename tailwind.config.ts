import type { Config } from "tailwindcss";

export default {
  content: ["./client/index.html", "./client/src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lapis: "#193855",
        "navy-deep": "#0B1B2A",
        gold: "#CBA052",
        "gold-soft": "#E6CF9E",
        papyrus: "#F4F1EA",
        paper: "#FBFAF7",
        terracotta: "#B85741",
        turquoise: "#3A8E97",
        "turquoise-deep": "#2E6F77",
        "gold-deep": "#8A6A2F",
        charcoal: "#2B2C30",
        muted: "#6F7478",
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "'Times New Roman'", "serif"],
        body: ["Montserrat", "'Segoe UI'", "Helvetica", "Arial", "sans-serif"],
        arabic: ["Cairo", "'Segoe UI'", "Tahoma", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
        prose: "720px",
      },
      borderColor: {
        hairline: "rgba(25, 56, 85, 0.16)",
      },
    },
  },
  plugins: [],
} satisfies Config;
