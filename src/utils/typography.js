import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.56,
  headerFontFamily: ["Source Serif Pro", "serif"],
  headerWeight: 400,
  bodyFontFamily: ["Lora", "serif"],
  bodyWeight: 400,
  boldWeight: 700,
  googleFonts: [
    {
      name: "Source Serif Pro",
      styles: ["600"],
    },
    {
      name: "Lora",
      styles: ["400", "400i", "700", "700i"],
    },
    {
      name: "Raleway",
      styles: ["400", "700"],
    },
  ],
})

export default typography
