module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      default: ["Poppins", "sans-serif"],
      display: ["Krona One", "sans-serif"],
      hero: ["IBM Plex Mono", "monospace"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#222831",
          50: "#E7EAEE",
          100: "#CCD2DB",
          200: "#9CA8BA",
          300: "#687B97",
          400: "#455163",
          500: "#1B2027",
          600: "#15191E",
          700: "#0F1115",
          800: "#060709",
        },
        secondary: {
          DEFAULT: "#663EFF",
          50: "#EFEBFF",
          100: "#DED6FF",
          200: "#C2B3FF",
          300: "#A18AFF",
          400: "#8566FF",
          500: "#3300FF",
          600: "#2600BD",
          700: "#1A0080",
          800: "#0C003D",
        },
        neutral: {
          DEFAULT: "#EEEEEE",
        },
        // OLED-optimized dark mode colors
        dark: {
          bg: {
            primary: "#000000",    // True black - Main background (OLED optimized)
            secondary: "#0A0A0A",  // Near black - Cards/elevated surfaces
            tertiary: "#1A1A1A",   // Dark gray - Hover states
          },
          text: {
            primary: "#FFFFFF",    // Pure white - Main text
            secondary: "#A1A1AA",  // Zinc 400 - Muted text
            tertiary: "#71717A",   // Zinc 500 - Disabled/placeholder
          },
          accent: {
            primary: "#A78BFA",    // Vibrant purple (lighter for contrast on black)
            secondary: "#C4B5FD",  // Light purple
            hover: "#8B5CF6",      // Deeper purple for hover
          },
          border: "#27272A",       // Zinc 800 - Subtle borders
        },
      },
    },
    container: {
      center: true, // serves as margin-inline: auto;
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        "2xl": "1600px",
      },
    },
  },
  plugins: [],
};
