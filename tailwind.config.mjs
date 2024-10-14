import typography from "@tailwindcss/typography"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--foreground-1))",
        },
        secondary: {
          DEFAULT: "hsl(var(--foreground-1))",
          foreground: "hsl(var(--background))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--background-1))",
          foreground: "hsl(var(--foreground-1))",
        },
        accent: {
          DEFAULT: "hsl(var(--background-1))",
          foreground: "hsl(var(--accent))",
          foreground2: "hsl(var(--accent-2))",
        },
        popover: {
          DEFAULT: "hsl(var(--background))",
          foreground: "hsl(var(--foreground-1))",
        },
        card: {
          DEFAULT: "hsl(var(--background-1))",
          foreground: "hsl(var(--foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-in",
      },
    },
  },
  plugins: ["tailwindcss-animate", typography],
}