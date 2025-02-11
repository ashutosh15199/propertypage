import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        themeWhite: "#FFFFFF", // Custom white
      },
    },
  },
  darkMode:false,
  plugins: [react(),
    tailwindcss(),
  ],
  
})
