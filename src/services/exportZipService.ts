const JSZip = __vite__cjsImport0_jszip;import __vite__cjsImport0_jszip from "/node_modules/.vite/deps/jszip.js?v=83e0c204";
import { StorageService } from "/src/services/storageService.ts";
export async function downloadProjectZip() {
	const zip = new JSZip();
	// Root files
	zip.file("package.json", JSON.stringify({
		name: "uniclub-portal",
		private: true,
		version: "1.0.0",
		type: "module",
		scripts: {
			dev: "vite",
			build: "vite build",
			preview: "vite preview"
		},
		dependencies: {
			clsx: "^2.1.1",
			"lucide-react": "^0.546.0",
			react: "^19.0.0",
			"react-dom": "^19.0.0",
			"tailwind-merge": "^2.5.5"
		},
		devDependencies: {
			"@tailwindcss/vite": "^4.0.0",
			"@types/node": "^22.0.0",
			"@types/react": "^19.0.0",
			"@types/react-dom": "^19.0.0",
			"@vitejs/plugin-react": "^4.3.0",
			tailwindcss: "^4.0.0",
			typescript: "^5.7.0",
			vite: "^6.0.0"
		}
	}, null, 2));
	zip.file("tsconfig.json", JSON.stringify({
		compilerOptions: {
			target: "ES2022",
			useDefineForClassFields: true,
			lib: [
				"ES2022",
				"DOM",
				"DOM.Iterable"
			],
			module: "ESNext",
			skipLibCheck: true,
			moduleResolution: "bundler",
			isolatedModules: true,
			moduleDetection: "force",
			jsx: "react-jsx",
			strict: true,
			paths: { "@/*": ["./*"] }
		},
		include: ["src"]
	}, null, 2));
	zip.file("vite.config.ts", `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});`);
	zip.file("index.html", `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>UniClub - University Club Portal</title>
    <meta name="description" content="University club website and management system." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body class="bg-[#fafaf9] text-neutral-900 antialiased font-sans">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"><\/script>
  </body>
</html>`);
	zip.file(".gitignore", `# Dependencies
node_modules
.pnp
.pnp.js

# Production build
dist
dist-ssr
*.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Editor
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment
.env
.env*.local`);
	zip.file("README.md", `# UniClub - University Club Portal & Management System

Production-ready web application built for student university clubs, featuring:
- **Public Club Showcase**: Mission, weekly meetups, and tracks.
- **Member Directory**: Interactive search and track filtering.
- **Events & RSVP System**: Scheduled workshops and capacity management.
- **Engineering Blog**: Markdown reader modal and article likes.
- **Recruitment Application**: Membership form with applicant status tracker.
- **Admin Management Console**: Full CRUD operations for members, events, articles, and applications.
- **Database Seed Export**: One-click MongoDB JSON export.

## Quick Start

\`\`\`bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build
\`\`\`

## Deployment to Vercel

1. Push this repository to GitHub:
\`\`\`bash
git init
git add .
git commit -m "feat: initial commit"
git branch -M main
git remote add origin https://github.com/your-username/uniclub-website.git
git push -u origin main
\`\`\`
2. Import repository on [vercel.com](https://vercel.com).
3. Click **Deploy**.
`);
	// Database seed file
	zip.file("database-seed.json", JSON.stringify(StorageService.exportDatabaseSeed(), null, 2));
	// Read files from current app to bundle inside src/
	const filesToFetch = [
		"/src/main.tsx",
		"/src/index.css",
		"/src/App.tsx",
		"/src/types/index.ts",
		"/src/data/initialData.ts",
		"/src/data/translations.ts",
		"/src/services/storageService.ts",
		"/src/services/exportZipService.ts",
		"/src/components/Navbar.tsx",
		"/src/components/HeroSection.tsx",
		"/src/components/AboutSection.tsx",
		"/src/components/MembersSection.tsx",
		"/src/components/EventsSection.tsx",
		"/src/components/BlogSection.tsx",
		"/src/components/JoinFormSection.tsx",
		"/src/components/AdminDashboard.tsx",
		"/src/components/NextJsBlueprintModal.tsx",
		"/src/components/GitExportModal.tsx",
		"/src/components/Footer.tsx",
		"/public/nes-logo.svg"
	];
	for (const filePath of filesToFetch) {
		try {
			const res = await fetch(filePath);
			if (res.ok) {
				const content = await res.text();
				const zipPath = filePath.startsWith("/") ? filePath.slice(1) : filePath;
				zip.file(zipPath, content);
			}
		} catch (err) {
			console.warn(`Could not load ${filePath} for zip bundle:`, err);
		}
	}
	const content = await zip.generateAsync({ type: "blob" });
	const url = URL.createObjectURL(content);
	const a = document.createElement("a");
	a.href = url;
	a.download = `uniclub-website-github-project-${new Date().toISOString().split("T")[0]}.zip`;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
}

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsc0JBQXNCO0FBRS9CLE9BQU8sZUFBZSxxQkFBcUI7Q0FDekMsTUFBTSxNQUFNLElBQUksTUFBTTs7Q0FHdEIsSUFBSSxLQUNGLGdCQUNBLEtBQUssVUFDSDtFQUNFLE1BQU07RUFDTixTQUFTO0VBQ1QsU0FBUztFQUNULE1BQU07RUFDTixTQUFTO0dBQ1AsS0FBSztHQUNMLE9BQU87R0FDUCxTQUFTO0VBQ1g7RUFDQSxjQUFjO0dBQ1osTUFBTTtHQUNOLGdCQUFnQjtHQUNoQixPQUFPO0dBQ1AsYUFBYTtHQUNiLGtCQUFrQjtFQUNwQjtFQUNBLGlCQUFpQjtHQUNmLHFCQUFxQjtHQUNyQixlQUFlO0dBQ2YsZ0JBQWdCO0dBQ2hCLG9CQUFvQjtHQUNwQix3QkFBd0I7R0FDeEIsYUFBYTtHQUNiLFlBQVk7R0FDWixNQUFNO0VBQ1I7Q0FDRixHQUNBLE1BQ0EsQ0FDRixDQUNGO0NBRUEsSUFBSSxLQUNGLGlCQUNBLEtBQUssVUFDSDtFQUNFLGlCQUFpQjtHQUNmLFFBQVE7R0FDUix5QkFBeUI7R0FDekIsS0FBSztJQUFDO0lBQVU7SUFBTztHQUFjO0dBQ3JDLFFBQVE7R0FDUixjQUFjO0dBQ2Qsa0JBQWtCO0dBQ2xCLGlCQUFpQjtHQUNqQixpQkFBaUI7R0FDakIsS0FBSztHQUNMLFFBQVE7R0FDUixPQUFPLEVBQ0wsT0FBTyxDQUFDLEtBQUssRUFDZjtFQUNGO0VBQ0EsU0FBUyxDQUFDLEtBQUs7Q0FDakIsR0FDQSxNQUNBLENBQ0YsQ0FDRjtDQUVBLElBQUksS0FDRixrQkFDQTs7Ozs7Ozs7Ozs7O0lBYUY7Q0FFQSxJQUFJLEtBQ0YsY0FDQTs7Ozs7Ozs7Ozs7Ozs7O1FBZ0JGO0NBRUEsSUFBSSxLQUNGLGNBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBOEJGO0NBRUEsSUFBSSxLQUNGLGFBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FzQ0Y7O0NBR0EsSUFBSSxLQUNGLHNCQUNBLEtBQUssVUFBVSxlQUFlLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxDQUM3RDs7Q0FHQSxNQUFNLGVBQWU7RUFDbkI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtDQUNGO0NBRUEsS0FBSyxNQUFNLFlBQVksY0FBYztFQUNuQyxJQUFJO0dBQ0YsTUFBTSxNQUFNLE1BQU0sTUFBTSxRQUFRO0dBQ2hDLElBQUksSUFBSSxJQUFJO0lBQ1YsTUFBTSxVQUFVLE1BQU0sSUFBSSxLQUFLO0lBQy9CLE1BQU0sVUFBVSxTQUFTLFdBQVcsR0FBRyxJQUFJLFNBQVMsTUFBTSxDQUFDLElBQUk7SUFDL0QsSUFBSSxLQUFLLFNBQVMsT0FBTztHQUMzQjtFQUNGLFNBQVMsS0FBSztHQUNaLFFBQVEsS0FBSyxrQkFBa0IsU0FBUyxtQkFBbUIsR0FBRztFQUNoRTtDQUNGO0NBRUEsTUFBTSxVQUFVLE1BQU0sSUFBSSxjQUFjLEVBQUUsTUFBTSxPQUFPLENBQUM7Q0FDeEQsTUFBTSxNQUFNLElBQUksZ0JBQWdCLE9BQU87Q0FDdkMsTUFBTSxJQUFJLFNBQVMsY0FBYyxHQUFHO0NBQ3BDLEVBQUUsT0FBTztDQUNULEVBQUUsV0FBVyxrQ0FBa0MsSUFBSSxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUc7Q0FDdEYsU0FBUyxLQUFLLFlBQVksQ0FBQztDQUMzQixFQUFFLE1BQU07Q0FDUixTQUFTLEtBQUssWUFBWSxDQUFDO0NBQzNCLElBQUksZ0JBQWdCLEdBQUc7QUFDekIiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiZXhwb3J0WmlwU2VydmljZS50cyJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSlNaaXAgZnJvbSAnanN6aXAnO1xuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3N0b3JhZ2VTZXJ2aWNlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRvd25sb2FkUHJvamVjdFppcCgpIHtcbiAgY29uc3QgemlwID0gbmV3IEpTWmlwKCk7XG5cbiAgLy8gUm9vdCBmaWxlc1xuICB6aXAuZmlsZShcbiAgICAncGFja2FnZS5qc29uJyxcbiAgICBKU09OLnN0cmluZ2lmeShcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3VuaWNsdWItcG9ydGFsJyxcbiAgICAgICAgcHJpdmF0ZTogdHJ1ZSxcbiAgICAgICAgdmVyc2lvbjogJzEuMC4wJyxcbiAgICAgICAgdHlwZTogJ21vZHVsZScsXG4gICAgICAgIHNjcmlwdHM6IHtcbiAgICAgICAgICBkZXY6ICd2aXRlJyxcbiAgICAgICAgICBidWlsZDogJ3ZpdGUgYnVpbGQnLFxuICAgICAgICAgIHByZXZpZXc6ICd2aXRlIHByZXZpZXcnLFxuICAgICAgICB9LFxuICAgICAgICBkZXBlbmRlbmNpZXM6IHtcbiAgICAgICAgICBjbHN4OiAnXjIuMS4xJyxcbiAgICAgICAgICAnbHVjaWRlLXJlYWN0JzogJ14wLjU0Ni4wJyxcbiAgICAgICAgICByZWFjdDogJ14xOS4wLjAnLFxuICAgICAgICAgICdyZWFjdC1kb20nOiAnXjE5LjAuMCcsXG4gICAgICAgICAgJ3RhaWx3aW5kLW1lcmdlJzogJ14yLjUuNScsXG4gICAgICAgIH0sXG4gICAgICAgIGRldkRlcGVuZGVuY2llczoge1xuICAgICAgICAgICdAdGFpbHdpbmRjc3Mvdml0ZSc6ICdeNC4wLjAnLFxuICAgICAgICAgICdAdHlwZXMvbm9kZSc6ICdeMjIuMC4wJyxcbiAgICAgICAgICAnQHR5cGVzL3JlYWN0JzogJ14xOS4wLjAnLFxuICAgICAgICAgICdAdHlwZXMvcmVhY3QtZG9tJzogJ14xOS4wLjAnLFxuICAgICAgICAgICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc6ICdeNC4zLjAnLFxuICAgICAgICAgIHRhaWx3aW5kY3NzOiAnXjQuMC4wJyxcbiAgICAgICAgICB0eXBlc2NyaXB0OiAnXjUuNy4wJyxcbiAgICAgICAgICB2aXRlOiAnXjYuMC4wJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBudWxsLFxuICAgICAgMlxuICAgIClcbiAgKTtcblxuICB6aXAuZmlsZShcbiAgICAndHNjb25maWcuanNvbicsXG4gICAgSlNPTi5zdHJpbmdpZnkoXG4gICAgICB7XG4gICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICAgIHRhcmdldDogJ0VTMjAyMicsXG4gICAgICAgICAgdXNlRGVmaW5lRm9yQ2xhc3NGaWVsZHM6IHRydWUsXG4gICAgICAgICAgbGliOiBbJ0VTMjAyMicsICdET00nLCAnRE9NLkl0ZXJhYmxlJ10sXG4gICAgICAgICAgbW9kdWxlOiAnRVNOZXh0JyxcbiAgICAgICAgICBza2lwTGliQ2hlY2s6IHRydWUsXG4gICAgICAgICAgbW9kdWxlUmVzb2x1dGlvbjogJ2J1bmRsZXInLFxuICAgICAgICAgIGlzb2xhdGVkTW9kdWxlczogdHJ1ZSxcbiAgICAgICAgICBtb2R1bGVEZXRlY3Rpb246ICdmb3JjZScsXG4gICAgICAgICAganN4OiAncmVhY3QtanN4JyxcbiAgICAgICAgICBzdHJpY3Q6IHRydWUsXG4gICAgICAgICAgcGF0aHM6IHtcbiAgICAgICAgICAgICdALyonOiBbJy4vKiddLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGluY2x1ZGU6IFsnc3JjJ10sXG4gICAgICB9LFxuICAgICAgbnVsbCxcbiAgICAgIDJcbiAgICApXG4gICk7XG5cbiAgemlwLmZpbGUoXG4gICAgJ3ZpdGUuY29uZmlnLnRzJyxcbiAgICBgaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ0B0YWlsd2luZGNzcy92aXRlJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgdGFpbHdpbmRjc3MoKV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgICB9LFxuICB9LFxufSk7YFxuICApO1xuXG4gIHppcC5maWxlKFxuICAgICdpbmRleC5odG1sJyxcbiAgICBgPCFkb2N0eXBlIGh0bWw+XG48aHRtbCBsYW5nPVwiZW5cIj5cbiAgPGhlYWQ+XG4gICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgPHRpdGxlPlVuaUNsdWIgLSBVbml2ZXJzaXR5IENsdWIgUG9ydGFsPC90aXRsZT5cbiAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVW5pdmVyc2l0eSBjbHViIHdlYnNpdGUgYW5kIG1hbmFnZW1lbnQgc3lzdGVtLlwiIC8+XG4gICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCI+XG4gICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NvcmlnaW4+XG4gICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGx1cytKYWthcnRhK1NhbnM6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj5cbiAgPC9oZWFkPlxuICA8Ym9keSBjbGFzcz1cImJnLVsjZmFmYWY5XSB0ZXh0LW5ldXRyYWwtOTAwIGFudGlhbGlhc2VkIGZvbnQtc2Fuc1wiPlxuICAgIDxkaXYgaWQ9XCJyb290XCI+PC9kaXY+XG4gICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgc3JjPVwiL3NyYy9tYWluLnRzeFwiPjwvc2NyaXB0PlxuICA8L2JvZHk+XG48L2h0bWw+YFxuICApO1xuXG4gIHppcC5maWxlKFxuICAgICcuZ2l0aWdub3JlJyxcbiAgICBgIyBEZXBlbmRlbmNpZXNcbm5vZGVfbW9kdWxlc1xuLnBucFxuLnBucC5qc1xuXG4jIFByb2R1Y3Rpb24gYnVpbGRcbmRpc3RcbmRpc3Qtc3NyXG4qLmxvY2FsXG5cbiMgTG9nc1xubnBtLWRlYnVnLmxvZypcbnlhcm4tZGVidWcubG9nKlxueWFybi1lcnJvci5sb2cqXG5wbnBtLWRlYnVnLmxvZypcblxuIyBFZGl0b3Jcbi52c2NvZGUvKlxuIS52c2NvZGUvZXh0ZW5zaW9ucy5qc29uXG4uaWRlYVxuLkRTX1N0b3JlXG4qLnN1b1xuKi5udHZzKlxuKi5uanNwcm9qXG4qLnNsblxuKi5zdz9cblxuIyBFbnZpcm9ubWVudFxuLmVudlxuLmVudioubG9jYWxgXG4gICk7XG5cbiAgemlwLmZpbGUoXG4gICAgJ1JFQURNRS5tZCcsXG4gICAgYCMgVW5pQ2x1YiAtIFVuaXZlcnNpdHkgQ2x1YiBQb3J0YWwgJiBNYW5hZ2VtZW50IFN5c3RlbVxuXG5Qcm9kdWN0aW9uLXJlYWR5IHdlYiBhcHBsaWNhdGlvbiBidWlsdCBmb3Igc3R1ZGVudCB1bml2ZXJzaXR5IGNsdWJzLCBmZWF0dXJpbmc6XG4tICoqUHVibGljIENsdWIgU2hvd2Nhc2UqKjogTWlzc2lvbiwgd2Vla2x5IG1lZXR1cHMsIGFuZCB0cmFja3MuXG4tICoqTWVtYmVyIERpcmVjdG9yeSoqOiBJbnRlcmFjdGl2ZSBzZWFyY2ggYW5kIHRyYWNrIGZpbHRlcmluZy5cbi0gKipFdmVudHMgJiBSU1ZQIFN5c3RlbSoqOiBTY2hlZHVsZWQgd29ya3Nob3BzIGFuZCBjYXBhY2l0eSBtYW5hZ2VtZW50LlxuLSAqKkVuZ2luZWVyaW5nIEJsb2cqKjogTWFya2Rvd24gcmVhZGVyIG1vZGFsIGFuZCBhcnRpY2xlIGxpa2VzLlxuLSAqKlJlY3J1aXRtZW50IEFwcGxpY2F0aW9uKio6IE1lbWJlcnNoaXAgZm9ybSB3aXRoIGFwcGxpY2FudCBzdGF0dXMgdHJhY2tlci5cbi0gKipBZG1pbiBNYW5hZ2VtZW50IENvbnNvbGUqKjogRnVsbCBDUlVEIG9wZXJhdGlvbnMgZm9yIG1lbWJlcnMsIGV2ZW50cywgYXJ0aWNsZXMsIGFuZCBhcHBsaWNhdGlvbnMuXG4tICoqRGF0YWJhc2UgU2VlZCBFeHBvcnQqKjogT25lLWNsaWNrIE1vbmdvREIgSlNPTiBleHBvcnQuXG5cbiMjIFF1aWNrIFN0YXJ0XG5cblxcYFxcYFxcYGJhc2hcbiMgMS4gSW5zdGFsbCBkZXBlbmRlbmNpZXNcbm5wbSBpbnN0YWxsXG5cbiMgMi4gUnVuIGxvY2FsIGRldmVsb3BtZW50IHNlcnZlclxubnBtIHJ1biBkZXZcblxuIyAzLiBCdWlsZCBmb3IgcHJvZHVjdGlvblxubnBtIHJ1biBidWlsZFxuXFxgXFxgXFxgXG5cbiMjIERlcGxveW1lbnQgdG8gVmVyY2VsXG5cbjEuIFB1c2ggdGhpcyByZXBvc2l0b3J5IHRvIEdpdEh1YjpcblxcYFxcYFxcYGJhc2hcbmdpdCBpbml0XG5naXQgYWRkIC5cbmdpdCBjb21taXQgLW0gXCJmZWF0OiBpbml0aWFsIGNvbW1pdFwiXG5naXQgYnJhbmNoIC1NIG1haW5cbmdpdCByZW1vdGUgYWRkIG9yaWdpbiBodHRwczovL2dpdGh1Yi5jb20veW91ci11c2VybmFtZS91bmljbHViLXdlYnNpdGUuZ2l0XG5naXQgcHVzaCAtdSBvcmlnaW4gbWFpblxuXFxgXFxgXFxgXG4yLiBJbXBvcnQgcmVwb3NpdG9yeSBvbiBbdmVyY2VsLmNvbV0oaHR0cHM6Ly92ZXJjZWwuY29tKS5cbjMuIENsaWNrICoqRGVwbG95KiouXG5gXG4gICk7XG5cbiAgLy8gRGF0YWJhc2Ugc2VlZCBmaWxlXG4gIHppcC5maWxlKFxuICAgICdkYXRhYmFzZS1zZWVkLmpzb24nLFxuICAgIEpTT04uc3RyaW5naWZ5KFN0b3JhZ2VTZXJ2aWNlLmV4cG9ydERhdGFiYXNlU2VlZCgpLCBudWxsLCAyKVxuICApO1xuXG4gIC8vIFJlYWQgZmlsZXMgZnJvbSBjdXJyZW50IGFwcCB0byBidW5kbGUgaW5zaWRlIHNyYy9cbiAgY29uc3QgZmlsZXNUb0ZldGNoID0gW1xuICAgICcvc3JjL21haW4udHN4JyxcbiAgICAnL3NyYy9pbmRleC5jc3MnLFxuICAgICcvc3JjL0FwcC50c3gnLFxuICAgICcvc3JjL3R5cGVzL2luZGV4LnRzJyxcbiAgICAnL3NyYy9kYXRhL2luaXRpYWxEYXRhLnRzJyxcbiAgICAnL3NyYy9kYXRhL3RyYW5zbGF0aW9ucy50cycsXG4gICAgJy9zcmMvc2VydmljZXMvc3RvcmFnZVNlcnZpY2UudHMnLFxuICAgICcvc3JjL3NlcnZpY2VzL2V4cG9ydFppcFNlcnZpY2UudHMnLFxuICAgICcvc3JjL2NvbXBvbmVudHMvTmF2YmFyLnRzeCcsXG4gICAgJy9zcmMvY29tcG9uZW50cy9IZXJvU2VjdGlvbi50c3gnLFxuICAgICcvc3JjL2NvbXBvbmVudHMvQWJvdXRTZWN0aW9uLnRzeCcsXG4gICAgJy9zcmMvY29tcG9uZW50cy9NZW1iZXJzU2VjdGlvbi50c3gnLFxuICAgICcvc3JjL2NvbXBvbmVudHMvRXZlbnRzU2VjdGlvbi50c3gnLFxuICAgICcvc3JjL2NvbXBvbmVudHMvQmxvZ1NlY3Rpb24udHN4JyxcbiAgICAnL3NyYy9jb21wb25lbnRzL0pvaW5Gb3JtU2VjdGlvbi50c3gnLFxuICAgICcvc3JjL2NvbXBvbmVudHMvQWRtaW5EYXNoYm9hcmQudHN4JyxcbiAgICAnL3NyYy9jb21wb25lbnRzL05leHRKc0JsdWVwcmludE1vZGFsLnRzeCcsXG4gICAgJy9zcmMvY29tcG9uZW50cy9HaXRFeHBvcnRNb2RhbC50c3gnLFxuICAgICcvc3JjL2NvbXBvbmVudHMvRm9vdGVyLnRzeCcsXG4gICAgJy9wdWJsaWMvbmVzLWxvZ28uc3ZnJyxcbiAgXTtcblxuICBmb3IgKGNvbnN0IGZpbGVQYXRoIG9mIGZpbGVzVG9GZXRjaCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChmaWxlUGF0aCk7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZXMudGV4dCgpO1xuICAgICAgICBjb25zdCB6aXBQYXRoID0gZmlsZVBhdGguc3RhcnRzV2l0aCgnLycpID8gZmlsZVBhdGguc2xpY2UoMSkgOiBmaWxlUGF0aDtcbiAgICAgICAgemlwLmZpbGUoemlwUGF0aCwgY29udGVudCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLndhcm4oYENvdWxkIG5vdCBsb2FkICR7ZmlsZVBhdGh9IGZvciB6aXAgYnVuZGxlOmAsIGVycik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY29udGVudCA9IGF3YWl0IHppcC5nZW5lcmF0ZUFzeW5jKHsgdHlwZTogJ2Jsb2InIH0pO1xuICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGNvbnRlbnQpO1xuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhLmhyZWYgPSB1cmw7XG4gIGEuZG93bmxvYWQgPSBgdW5pY2x1Yi13ZWJzaXRlLWdpdGh1Yi1wcm9qZWN0LSR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF19LnppcGA7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gIGEuY2xpY2soKTtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcbiAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xufVxuIl19