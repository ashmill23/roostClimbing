import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Default build is multi-file: images stay separate so browsers cache them
// and a content change only invalidates the small HTML/JS.
//
// `npm run build:singlefile` instead inlines everything into one portable
// index.html — useful for embeds or emailing a preview, but much heavier.
const singleFile = process.env.SINGLEFILE === '1'

export default defineConfig({
  // Relative asset paths, so the build works both at a domain root and
  // under a project subpath like /roostClimbing/.
  base: './',
  plugins: [react(), ...(singleFile ? [viteSingleFile()] : [])],
  build: singleFile ? { assetsInlineLimit: 100_000_000 } : {},
})
