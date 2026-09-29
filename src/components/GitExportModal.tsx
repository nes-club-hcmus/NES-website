const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=83e0c204";
import { X, Copy, Check, Github, FolderArchive, Download, ExternalLink, Package } from "/node_modules/.vite/deps/lucide-react.js?v=83e0c204";
var _jsxFileName = "/app/applet/src/components/GitExportModal.tsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=83e0c204";
export const GitExportModal = ({ isOpen, onClose, onDownloadZip }) => {
	const [activeStep, setActiveStep] = useState(1);
	const [copiedKey, setCopiedKey] = useState(null);
	if (!isOpen) return null;
	const copyToClipboard = (text, key) => {
		navigator.clipboard.writeText(text);
		setCopiedKey(key);
		setTimeout(() => setCopiedKey(null), 2e3);
	};
	const gitCommands = `# 1. Create a new directory and initialize git
mkdir uniclub-website
cd uniclub-website
git init

# 2. Extract or copy the exported project files into this directory
# (e.g., unzip uniclub-project-export.zip)

# 3. Stage and commit your files
git add .
git commit -m "feat: initial commit for university club portal"

# 4. Link to your GitHub repository (replace with your repo URL)
git branch -M main
git remote add origin https://github.com/your-username/uniclub-website.git
git push -u origin main`;
	const installCommands = `# Install the required dependencies
npm install

# Start local development server
npm run dev`;
	const filesIncluded = [
		{
			path: "src/App.tsx",
			desc: "Main interactive application controller & state"
		},
		{
			path: "src/components/Navbar.tsx",
			desc: "Clean header navigation with notifications"
		},
		{
			path: "src/components/HeroSection.tsx",
			desc: "Hero banner, quantitative metrics & calls to action"
		},
		{
			path: "src/components/AboutSection.tsx",
			desc: "4 Club tracks, headquarters & weekly meetup details"
		},
		{
			path: "src/components/MembersSection.tsx",
			desc: "Member directory with live search and track filtering"
		},
		{
			path: "src/components/EventsSection.tsx",
			desc: "Workshops, hackathons, and interactive RSVP system"
		},
		{
			path: "src/components/BlogSection.tsx",
			desc: "Technical publications & markdown reader modal"
		},
		{
			path: "src/components/JoinFormSection.tsx",
			desc: "Student recruitment & onboarding application form"
		},
		{
			path: "src/components/AdminDashboard.tsx",
			desc: "CRUD console for members, events, articles & apps"
		},
		{
			path: "src/components/NextJsBlueprintModal.tsx",
			desc: "Next.js App Router & MongoDB M0 blueprint modal"
		},
		{
			path: "src/types/index.ts",
			desc: "TypeScript data contracts & interface definitions"
		},
		{
			path: "src/data/initialData.ts",
			desc: "Seed database with preloaded realistic club records"
		},
		{
			path: "src/services/storageService.ts",
			desc: "Local persistence & MongoDB seed exporter"
		},
		{
			path: "package.json & tsconfig.json",
			desc: "Project configuration and dependencies"
		}
	];
	return /* @__PURE__ */ _jsxDEV("div", {
		role: "dialog",
		"aria-modal": "true",
		className: "fixed inset-0 z-50 bg-neutral-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto",
		onClick: onClose,
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "bg-white rounded-xl max-w-3xl w-full max-h-[92vh] flex flex-col border border-neutral-300 shadow-2xl overflow-hidden",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/50",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "p-1.5 bg-neutral-900 text-white rounded-md",
							children: /* @__PURE__ */ _jsxDEV(Github, { className: "w-4 h-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 92,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 91,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-base font-bold text-neutral-950",
							children: "Push This Design to Your GitHub Project"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 95,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("p", {
							className: "text-xs text-neutral-500",
							children: "Export all code files, components, and assets directly to your local Git repository"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 98,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 90,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: onClose,
						className: "p-1.5 text-neutral-400 hover:text-neutral-900 rounded",
						children: /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 108,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 89,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "p-6 bg-neutral-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
					children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ _jsxDEV(FolderArchive, { className: "w-5 h-5 text-emerald-400" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 116,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("h3", {
							className: "text-sm font-bold",
							children: "1-Click Full Project Export"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 117,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 115,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("p", {
						className: "text-xs text-neutral-300 mt-1 max-w-md",
						children: "Download a ready-to-run bundle containing all source files, components, styles, types, and database seed."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 119,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 114,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: onDownloadZip,
						className: "px-4 py-2.5 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-md shadow-xs transition-colors flex items-center gap-2 shrink-0",
						children: [/* @__PURE__ */ _jsxDEV(Download, { className: "w-4 h-4 text-emerald-700" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 127,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Download Project Bundle (.zip)" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 128,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 123,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 113,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex-1 overflow-y-auto p-6 space-y-6",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "border border-neutral-200 rounded-lg p-5 space-y-3",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-2.5 font-bold text-sm text-neutral-950",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-mono",
										children: "1"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 138,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Create a new repository on GitHub" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 141,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 137,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("a", {
									href: "https://github.com/new",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "text-xs text-neutral-700 hover:text-neutral-950 underline flex items-center gap-1",
									children: [/* @__PURE__ */ _jsxDEV("span", { children: "github.com/new" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 149,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV(ExternalLink, { className: "w-3 h-3" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 150,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 143,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 136,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs text-neutral-600 leading-relaxed",
								children: [
									"Name your repository (e.g. ",
									/* @__PURE__ */ _jsxDEV("code", {
										className: "bg-neutral-100 px-1 py-0.5 rounded text-neutral-800 font-mono",
										children: "uniclub-website"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 154,
										columnNumber: 42
									}, this),
									"). You can keep it Public or Private. Do not initialize with a README if you are pushing an existing codebase."
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 153,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 135,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "border border-neutral-200 rounded-lg p-5 space-y-3",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-2.5 font-bold text-sm text-neutral-950",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-mono",
										children: "2"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 162,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Initialize Git & Push in Your Terminal" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 165,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 161,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("button", {
									onClick: () => copyToClipboard(gitCommands, "git"),
									className: "flex items-center gap-1 text-xs px-2.5 py-1 text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded",
									children: [copiedKey === "git" ? /* @__PURE__ */ _jsxDEV(Check, { className: "w-3.5 h-3.5 text-emerald-600" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 172,
										columnNumber: 19
									}, this) : /* @__PURE__ */ _jsxDEV(Copy, { className: "w-3.5 h-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 174,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: copiedKey === "git" ? "Copied" : "Copy Commands" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 176,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 167,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 160,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("pre", {
								className: "bg-neutral-900 text-neutral-100 p-4 rounded-lg font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800",
								children: gitCommands
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 179,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 159,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "border border-neutral-200 rounded-lg p-5 space-y-3",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2.5 font-bold text-sm text-neutral-950",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-mono",
											children: "3"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 188,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Run Locally & Deploy to Vercel" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 191,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 187,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV("button", {
										onClick: () => copyToClipboard(installCommands, "install"),
										className: "flex items-center gap-1 text-xs px-2.5 py-1 text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded",
										children: [copiedKey === "install" ? /* @__PURE__ */ _jsxDEV(Check, { className: "w-3.5 h-3.5 text-emerald-600" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 198,
											columnNumber: 19
										}, this) : /* @__PURE__ */ _jsxDEV(Copy, { className: "w-3.5 h-3.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 200,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: copiedKey === "install" ? "Copied" : "Copy Commands" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 202,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 193,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 186,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("pre", {
									className: "bg-neutral-900 text-neutral-100 p-4 rounded-lg font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800",
									children: installCommands
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 205,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "p-3 bg-neutral-50 rounded-md border border-neutral-200 text-xs text-neutral-600 leading-relaxed",
									children: [
										/* @__PURE__ */ _jsxDEV("strong", { children: "Vercel 1-Click Deployment:" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 209,
											columnNumber: 15
										}, this),
										" Once pushed to GitHub, go to",
										" ",
										/* @__PURE__ */ _jsxDEV("a", {
											href: "https://vercel.com/new",
											target: "_blank",
											rel: "noopener noreferrer",
											className: "text-neutral-900 underline font-medium",
											children: "vercel.com/new"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 210,
											columnNumber: 15
										}, this),
										", select your repository, and click ",
										/* @__PURE__ */ _jsxDEV("strong", { children: "Deploy" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 218,
											columnNumber: 51
										}, this),
										". Vercel automatically detects the build scripts and gives you a free production URL with automatic HTTPS and CI/CD."
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 208,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 185,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "border border-neutral-200 rounded-lg p-5 space-y-3",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2 font-bold text-sm text-neutral-950",
								children: [/* @__PURE__ */ _jsxDEV(Package, { className: "w-4 h-4 text-neutral-600" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 225,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "All Included Files In Export" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 226,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 224,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "divide-y divide-neutral-100 text-xs max-h-48 overflow-y-auto pr-2",
								children: filesIncluded.map((file) => /* @__PURE__ */ _jsxDEV("div", {
									className: "py-2 flex items-center justify-between",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "font-mono text-neutral-900 font-semibold",
										children: file.path
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 231,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "text-neutral-500 text-[11px]",
										children: file.desc
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 232,
										columnNumber: 19
									}, this)]
								}, file.path, true, {
									fileName: _jsxFileName,
									lineNumber: 230,
									columnNumber: 17
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 228,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 223,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 133,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "px-6 py-4 border-t border-neutral-200 flex items-center justify-between bg-neutral-50/50",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "text-xs text-neutral-500",
						children: "Open-source under MIT License · Ready for React / Next.js"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 241,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: onClose,
						className: "px-4 py-2 text-xs font-semibold text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-md transition-colors",
						children: "Close Guide"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 244,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 240,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 84,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 78,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QUNOO09BQ0U7Ozs7ZUFDRjs7Ozs7O0tBQ0Y7Ozs7OztJQUdMLHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQWYsQ0FDRSx3QkFBQyxPQUFEO01BQUssV0FBVTtnQkFBMkI7S0FFckM7Ozs7ZUFDTCx3QkFBQyxVQUFEO01BQ0UsU0FBUztNQUNULFdBQVU7Z0JBQ1g7S0FFTzs7OzthQUNMOzs7Ozs7R0FDRjs7Ozs7O0NBQ0Y7Ozs7O0FBRVQiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiR2l0RXhwb3J0TW9kYWwudHN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIFgsXG4gIENvcHksXG4gIENoZWNrLFxuICBHaXRodWIsXG4gIFRlcm1pbmFsLFxuICBGb2xkZXJBcmNoaXZlLFxuICBEb3dubG9hZCxcbiAgRXh0ZXJuYWxMaW5rLFxuICBDaGV2cm9uUmlnaHQsXG4gIFBhY2thZ2UsXG59IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmludGVyZmFjZSBHaXRFeHBvcnRNb2RhbFByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xuICBvbkRvd25sb2FkWmlwOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgR2l0RXhwb3J0TW9kYWw6IFJlYWN0LkZDPEdpdEV4cG9ydE1vZGFsUHJvcHM+ID0gKHtcbiAgaXNPcGVuLFxuICBvbkNsb3NlLFxuICBvbkRvd25sb2FkWmlwLFxufSkgPT4ge1xuICBjb25zdCBbYWN0aXZlU3RlcCwgc2V0QWN0aXZlU3RlcF0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuICBjb25zdCBbY29waWVkS2V5LCBzZXRDb3BpZWRLZXldID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgaWYgKCFpc09wZW4pIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IGNvcHlUb0NsaXBib2FyZCA9ICh0ZXh0OiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG4gICAgc2V0Q29waWVkS2V5KGtleSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRDb3BpZWRLZXkobnVsbCksIDIwMDApO1xuICB9O1xuXG4gIGNvbnN0IGdpdENvbW1hbmRzID0gYCMgMS4gQ3JlYXRlIGEgbmV3IGRpcmVjdG9yeSBhbmQgaW5pdGlhbGl6ZSBnaXRcbm1rZGlyIHVuaWNsdWItd2Vic2l0ZVxuY2QgdW5pY2x1Yi13ZWJzaXRlXG5naXQgaW5pdFxuXG4jIDIuIEV4dHJhY3Qgb3IgY29weSB0aGUgZXhwb3J0ZWQgcHJvamVjdCBmaWxlcyBpbnRvIHRoaXMgZGlyZWN0b3J5XG4jIChlLmcuLCB1bnppcCB1bmljbHViLXByb2plY3QtZXhwb3J0LnppcClcblxuIyAzLiBTdGFnZSBhbmQgY29tbWl0IHlvdXIgZmlsZXNcbmdpdCBhZGQgLlxuZ2l0IGNvbW1pdCAtbSBcImZlYXQ6IGluaXRpYWwgY29tbWl0IGZvciB1bml2ZXJzaXR5IGNsdWIgcG9ydGFsXCJcblxuIyA0LiBMaW5rIHRvIHlvdXIgR2l0SHViIHJlcG9zaXRvcnkgKHJlcGxhY2Ugd2l0aCB5b3VyIHJlcG8gVVJMKVxuZ2l0IGJyYW5jaCAtTSBtYWluXG5naXQgcmVtb3RlIGFkZCBvcmlnaW4gaHR0cHM6Ly9naXRodWIuY29tL3lvdXItdXNlcm5hbWUvdW5pY2x1Yi13ZWJzaXRlLmdpdFxuZ2l0IHB1c2ggLXUgb3JpZ2luIG1haW5gO1xuXG4gIGNvbnN0IGluc3RhbGxDb21tYW5kcyA9IGAjIEluc3RhbGwgdGhlIHJlcXVpcmVkIGRlcGVuZGVuY2llc1xubnBtIGluc3RhbGxcblxuIyBTdGFydCBsb2NhbCBkZXZlbG9wbWVudCBzZXJ2ZXJcbm5wbSBydW4gZGV2YDtcblxuICBjb25zdCBmaWxlc0luY2x1ZGVkID0gW1xuICAgIHsgcGF0aDogJ3NyYy9BcHAudHN4JywgZGVzYzogJ01haW4gaW50ZXJhY3RpdmUgYXBwbGljYXRpb24gY29udHJvbGxlciAmIHN0YXRlJyB9LFxuICAgIHsgcGF0aDogJ3NyYy9jb21wb25lbnRzL05hdmJhci50c3gnLCBkZXNjOiAnQ2xlYW4gaGVhZGVyIG5hdmlnYXRpb24gd2l0aCBub3RpZmljYXRpb25zJyB9LFxuICAgIHsgcGF0aDogJ3NyYy9jb21wb25lbnRzL0hlcm9TZWN0aW9uLnRzeCcsIGRlc2M6ICdIZXJvIGJhbm5lciwgcXVhbnRpdGF0aXZlIG1ldHJpY3MgJiBjYWxscyB0byBhY3Rpb24nIH0sXG4gICAgeyBwYXRoOiAnc3JjL2NvbXBvbmVudHMvQWJvdXRTZWN0aW9uLnRzeCcsIGRlc2M6ICc0IENsdWIgdHJhY2tzLCBoZWFkcXVhcnRlcnMgJiB3ZWVrbHkgbWVldHVwIGRldGFpbHMnIH0sXG4gICAgeyBwYXRoOiAnc3JjL2NvbXBvbmVudHMvTWVtYmVyc1NlY3Rpb24udHN4JywgZGVzYzogJ01lbWJlciBkaXJlY3Rvcnkgd2l0aCBsaXZlIHNlYXJjaCBhbmQgdHJhY2sgZmlsdGVyaW5nJyB9LFxuICAgIHsgcGF0aDogJ3NyYy9jb21wb25lbnRzL0V2ZW50c1NlY3Rpb24udHN4JywgZGVzYzogJ1dvcmtzaG9wcywgaGFja2F0aG9ucywgYW5kIGludGVyYWN0aXZlIFJTVlAgc3lzdGVtJyB9LFxuICAgIHsgcGF0aDogJ3NyYy9jb21wb25lbnRzL0Jsb2dTZWN0aW9uLnRzeCcsIGRlc2M6ICdUZWNobmljYWwgcHVibGljYXRpb25zICYgbWFya2Rvd24gcmVhZGVyIG1vZGFsJyB9LFxuICAgIHsgcGF0aDogJ3NyYy9jb21wb25lbnRzL0pvaW5Gb3JtU2VjdGlvbi50c3gnLCBkZXNjOiAnU3R1ZGVudCByZWNydWl0bWVudCAmIG9uYm9hcmRpbmcgYXBwbGljYXRpb24gZm9ybScgfSxcbiAgICB7IHBhdGg6ICdzcmMvY29tcG9uZW50cy9BZG1pbkRhc2hib2FyZC50c3gnLCBkZXNjOiAnQ1JVRCBjb25zb2xlIGZvciBtZW1iZXJzLCBldmVudHMsIGFydGljbGVzICYgYXBwcycgfSxcbiAgICB7IHBhdGg6ICdzcmMvY29tcG9uZW50cy9OZXh0SnNCbHVlcHJpbnRNb2RhbC50c3gnLCBkZXNjOiAnTmV4dC5qcyBBcHAgUm91dGVyICYgTW9uZ29EQiBNMCBibHVlcHJpbnQgbW9kYWwnIH0sXG4gICAgeyBwYXRoOiAnc3JjL3R5cGVzL2luZGV4LnRzJywgZGVzYzogJ1R5cGVTY3JpcHQgZGF0YSBjb250cmFjdHMgJiBpbnRlcmZhY2UgZGVmaW5pdGlvbnMnIH0sXG4gICAgeyBwYXRoOiAnc3JjL2RhdGEvaW5pdGlhbERhdGEudHMnLCBkZXNjOiAnU2VlZCBkYXRhYmFzZSB3aXRoIHByZWxvYWRlZCByZWFsaXN0aWMgY2x1YiByZWNvcmRzJyB9LFxuICAgIHsgcGF0aDogJ3NyYy9zZXJ2aWNlcy9zdG9yYWdlU2VydmljZS50cycsIGRlc2M6ICdMb2NhbCBwZXJzaXN0ZW5jZSAmIE1vbmdvREIgc2VlZCBleHBvcnRlcicgfSxcbiAgICB7IHBhdGg6ICdwYWNrYWdlLmpzb24gJiB0c2NvbmZpZy5qc29uJywgZGVzYzogJ1Byb2plY3QgY29uZmlndXJhdGlvbiBhbmQgZGVwZW5kZW5jaWVzJyB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICBhcmlhLW1vZGFsPVwidHJ1ZVwiXG4gICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNTAgYmctbmV1dHJhbC05NTAvNjAgYmFja2Ryb3AtYmx1ci14cyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTMgc206cC02IG92ZXJmbG93LXktYXV0b1wiXG4gICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBtYXgtdy0zeGwgdy1mdWxsIG1heC1oLVs5MnZoXSBmbGV4IGZsZXgtY29sIGJvcmRlciBib3JkZXItbmV1dHJhbC0zMDAgc2hhZG93LTJ4bCBvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgID5cbiAgICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTQgYm9yZGVyLWIgYm9yZGVyLW5ldXRyYWwtMjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy1uZXV0cmFsLTUwLzUwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMS41IGJnLW5ldXRyYWwtOTAwIHRleHQtd2hpdGUgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgICA8R2l0aHViIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LW5ldXRyYWwtOTUwXCI+XG4gICAgICAgICAgICAgICAgUHVzaCBUaGlzIERlc2lnbiB0byBZb3VyIEdpdEh1YiBQcm9qZWN0XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1uZXV0cmFsLTUwMFwiPlxuICAgICAgICAgICAgICAgIEV4cG9ydCBhbGwgY29kZSBmaWxlcywgY29tcG9uZW50cywgYW5kIGFzc2V0cyBkaXJlY3RseSB0byB5b3VyIGxvY2FsIEdpdCByZXBvc2l0b3J5XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMS41IHRleHQtbmV1dHJhbC00MDAgaG92ZXI6dGV4dC1uZXV0cmFsLTkwMCByb3VuZGVkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEFjdGlvbiBCdXR0b246IE9uZS1jbGljayBleHBvcnQgZG93bmxvYWQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IGJnLW5ldXRyYWwtOTAwIHRleHQtd2hpdGUgZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBpdGVtcy1zdGFydCBzbTppdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPEZvbGRlckFyY2hpdmUgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWVtZXJhbGQtNDAwXCIgLz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkXCI+MS1DbGljayBGdWxsIFByb2plY3QgRXhwb3J0PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW5ldXRyYWwtMzAwIG10LTEgbWF4LXctbWRcIj5cbiAgICAgICAgICAgICAgRG93bmxvYWQgYSByZWFkeS10by1ydW4gYnVuZGxlIGNvbnRhaW5pbmcgYWxsIHNvdXJjZSBmaWxlcywgY29tcG9uZW50cywgc3R5bGVzLCB0eXBlcywgYW5kIGRhdGFiYXNlIHNlZWQuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17b25Eb3dubG9hZFppcH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMi41IHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtOTUwIGJnLXdoaXRlIGhvdmVyOmJnLW5ldXRyYWwtMTAwIHJvdW5kZWQtbWQgc2hhZG93LXhzIHRyYW5zaXRpb24tY29sb3JzIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHNocmluay0wXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RG93bmxvYWQgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWVtZXJhbGQtNzAwXCIgLz5cbiAgICAgICAgICAgIDxzcGFuPkRvd25sb2FkIFByb2plY3QgQnVuZGxlICguemlwKTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFN0ZXAtYnktc3RlcCBUYWJzIC8gRmxvdyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3cteS1hdXRvIHAtNiBzcGFjZS15LTZcIj5cbiAgICAgICAgICB7LyogU3RlcCAxOiBDcmVhdGUgR2l0SHViIFJlcG8gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbGcgcC01IHNwYWNlLXktM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41IGZvbnQtYm9sZCB0ZXh0LXNtIHRleHQtbmV1dHJhbC05NTBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTUgaC01IHJvdW5kZWQtZnVsbCBiZy1uZXV0cmFsLTkwMCB0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQteHMgZm9udC1tb25vXCI+XG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPkNyZWF0ZSBhIG5ldyByZXBvc2l0b3J5IG9uIEdpdEh1Yjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9uZXdcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW5ldXRyYWwtNzAwIGhvdmVyOnRleHQtbmV1dHJhbC05NTAgdW5kZXJsaW5lIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuPmdpdGh1Yi5jb20vbmV3PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxFeHRlcm5hbExpbmsgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW5ldXRyYWwtNjAwIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICBOYW1lIHlvdXIgcmVwb3NpdG9yeSAoZS5nLiA8Y29kZSBjbGFzc05hbWU9XCJiZy1uZXV0cmFsLTEwMCBweC0xIHB5LTAuNSByb3VuZGVkIHRleHQtbmV1dHJhbC04MDAgZm9udC1tb25vXCI+dW5pY2x1Yi13ZWJzaXRlPC9jb2RlPikuIFlvdSBjYW4ga2VlcCBpdCBQdWJsaWMgb3IgUHJpdmF0ZS4gRG8gbm90IGluaXRpYWxpemUgd2l0aCBhIFJFQURNRSBpZiB5b3UgYXJlIHB1c2hpbmcgYW4gZXhpc3RpbmcgY29kZWJhc2UuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogU3RlcCAyOiBVbnppcCBhbmQgSW5pdGlhbGl6ZSBHaXQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbGcgcC01IHNwYWNlLXktM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41IGZvbnQtYm9sZCB0ZXh0LXNtIHRleHQtbmV1dHJhbC05NTBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTUgaC01IHJvdW5kZWQtZnVsbCBiZy1uZXV0cmFsLTkwMCB0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQteHMgZm9udC1tb25vXCI+XG4gICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPkluaXRpYWxpemUgR2l0ICYgUHVzaCBpbiBZb3VyIFRlcm1pbmFsPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvcHlUb0NsaXBib2FyZChnaXRDb21tYW5kcywgJ2dpdCcpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteHMgcHgtMi41IHB5LTEgdGV4dC1uZXV0cmFsLTcwMCBiZy1uZXV0cmFsLTEwMCBob3ZlcjpiZy1uZXV0cmFsLTIwMCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMzAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvcGllZEtleSA9PT0gJ2dpdCcgPyAoXG4gICAgICAgICAgICAgICAgICA8Q2hlY2sgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1lbWVyYWxkLTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxDb3B5IGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxzcGFuPntjb3BpZWRLZXkgPT09ICdnaXQnID8gJ0NvcGllZCcgOiAnQ29weSBDb21tYW5kcyd9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJiZy1uZXV0cmFsLTkwMCB0ZXh0LW5ldXRyYWwtMTAwIHAtNCByb3VuZGVkLWxnIGZvbnQtbW9ubyB0ZXh0LXhzIG92ZXJmbG93LXgtYXV0byBsZWFkaW5nLXJlbGF4ZWQgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTgwMFwiPlxuICAgICAgICAgICAgICB7Z2l0Q29tbWFuZHN9XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBTdGVwIDM6IFJ1biBMb2NhbGx5IG9yIERlcGxveSB0byBWZXJjZWwgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbGcgcC01IHNwYWNlLXktM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41IGZvbnQtYm9sZCB0ZXh0LXNtIHRleHQtbmV1dHJhbC05NTBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTUgaC01IHJvdW5kZWQtZnVsbCBiZy1uZXV0cmFsLTkwMCB0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQteHMgZm9udC1tb25vXCI+XG4gICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPlJ1biBMb2NhbGx5ICYgRGVwbG95IHRvIFZlcmNlbDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb3B5VG9DbGlwYm9hcmQoaW5zdGFsbENvbW1hbmRzLCAnaW5zdGFsbCcpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteHMgcHgtMi41IHB5LTEgdGV4dC1uZXV0cmFsLTcwMCBiZy1uZXV0cmFsLTEwMCBob3ZlcjpiZy1uZXV0cmFsLTIwMCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMzAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvcGllZEtleSA9PT0gJ2luc3RhbGwnID8gKFxuICAgICAgICAgICAgICAgICAgPENoZWNrIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtZW1lcmFsZC02MDBcIiAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8Q29weSBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8c3Bhbj57Y29waWVkS2V5ID09PSAnaW5zdGFsbCcgPyAnQ29waWVkJyA6ICdDb3B5IENvbW1hbmRzJ308L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cImJnLW5ldXRyYWwtOTAwIHRleHQtbmV1dHJhbC0xMDAgcC00IHJvdW5kZWQtbGcgZm9udC1tb25vIHRleHQteHMgb3ZlcmZsb3cteC1hdXRvIGxlYWRpbmctcmVsYXhlZCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtODAwXCI+XG4gICAgICAgICAgICAgIHtpbnN0YWxsQ29tbWFuZHN9XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJnLW5ldXRyYWwtNTAgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHRleHQteHMgdGV4dC1uZXV0cmFsLTYwMCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz5WZXJjZWwgMS1DbGljayBEZXBsb3ltZW50Ojwvc3Ryb25nPiBPbmNlIHB1c2hlZCB0byBHaXRIdWIsIGdvIHRveycgJ31cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL25ld1wiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtOTAwIHVuZGVybGluZSBmb250LW1lZGl1bVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB2ZXJjZWwuY29tL25ld1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICwgc2VsZWN0IHlvdXIgcmVwb3NpdG9yeSwgYW5kIGNsaWNrIDxzdHJvbmc+RGVwbG95PC9zdHJvbmc+LiBWZXJjZWwgYXV0b21hdGljYWxseSBkZXRlY3RzIHRoZSBidWlsZCBzY3JpcHRzIGFuZCBnaXZlcyB5b3UgYSBmcmVlIHByb2R1Y3Rpb24gVVJMIHdpdGggYXV0b21hdGljIEhUVFBTIGFuZCBDSS9DRC5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIEZpbGUgTWFuaWZlc3QgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbGcgcC01IHNwYWNlLXktM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBmb250LWJvbGQgdGV4dC1zbSB0ZXh0LW5ldXRyYWwtOTUwXCI+XG4gICAgICAgICAgICAgIDxQYWNrYWdlIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1uZXV0cmFsLTYwMFwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPkFsbCBJbmNsdWRlZCBGaWxlcyBJbiBFeHBvcnQ8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLW5ldXRyYWwtMTAwIHRleHQteHMgbWF4LWgtNDggb3ZlcmZsb3cteS1hdXRvIHByLTJcIj5cbiAgICAgICAgICAgICAge2ZpbGVzSW5jbHVkZWQubWFwKChmaWxlKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2ZpbGUucGF0aH0gY2xhc3NOYW1lPVwicHktMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LW5ldXRyYWwtOTAwIGZvbnQtc2VtaWJvbGRcIj57ZmlsZS5wYXRofTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC01MDAgdGV4dC1bMTFweF1cIj57ZmlsZS5kZXNjfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEZvb3RlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTQgYm9yZGVyLXQgYm9yZGVyLW5ldXRyYWwtMjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy1uZXV0cmFsLTUwLzUwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbmV1dHJhbC01MDBcIj5cbiAgICAgICAgICAgIE9wZW4tc291cmNlIHVuZGVyIE1JVCBMaWNlbnNlIMK3IFJlYWR5IGZvciBSZWFjdCAvIE5leHQuanNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtODAwIGJnLXdoaXRlIGhvdmVyOmJnLW5ldXRyYWwtMTAwIGJvcmRlciBib3JkZXItbmV1dHJhbC0zMDAgcm91bmRlZC1tZCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2xvc2UgR3VpZGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0=