import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./client/index.html", "./client/src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {}
  },
  plugins: []
};

export default config;
