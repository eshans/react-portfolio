import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "tailwindcss"

// https://vitejs.dev/config/

export default defineConfig({
	plugins: [],
	resolve: {},
	css: {
		postcss: {
			plugins: [tailwindcss]
		}
	},
	server: {
		watch: {
			usePolling: true
		}
	}
})
