const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=83e0c204";
import { Github, MessageSquare, Mail, Terminal } from "/node_modules/.vite/deps/lucide-react.js?v=83e0c204";
import { translations } from "/src/data/translations.ts";
var _jsxFileName = "/app/applet/src/components/Footer.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=83e0c204";
export const Footer = ({ clubInfo, language, onNavClick, onOpenBlueprint, onOpenGitExport }) => {
	const t = translations[language];
	return /* @__PURE__ */ _jsxDEV("footer", {
		className: "bg-white border-t border-neutral-200 pt-12 pb-16 text-neutral-600 text-xs",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-neutral-200",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "md:col-span-2 space-y-3",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "w-7 h-7 rounded bg-neutral-950 p-0.5 border border-neutral-800 shrink-0",
									children: /* @__PURE__ */ _jsxDEV("img", {
										src: "/nes-logo.svg",
										alt: "NES Logo",
										className: "w-full h-full object-contain"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 31,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 30,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "text-base font-bold text-neutral-950",
									children: [
										language === "vi" ? clubInfo.nameVi : clubInfo.name,
										" (",
										language === "vi" ? clubInfo.shortNameVi : clubInfo.shortName,
										")"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 33,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 29,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-neutral-500 max-w-md leading-relaxed text-xs",
								children: [
									t.footer.affiliated,
									" ",
									t.footer.address
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-3 pt-2 text-neutral-500",
								children: [
									/* @__PURE__ */ _jsxDEV("a", {
										href: clubInfo.githubOrg,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "hover:text-neutral-900 transition-colors flex items-center gap-1 font-mono",
										children: [/* @__PURE__ */ _jsxDEV(Github, { className: "w-4 h-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 47,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "GitHub Org" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 48,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 41,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										"aria-hidden": "true",
										children: "·"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 50,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("a", {
										href: clubInfo.discordUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "hover:text-neutral-900 transition-colors flex items-center gap-1 font-mono",
										children: [/* @__PURE__ */ _jsxDEV(MessageSquare, { className: "w-4 h-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 57,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Discord" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 58,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 51,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										"aria-hidden": "true",
										children: "·"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 60,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("a", {
										href: `mailto:${clubInfo.emailContact}`,
										className: "hover:text-neutral-900 transition-colors flex items-center gap-1 font-mono",
										children: [/* @__PURE__ */ _jsxDEV(Mail, { className: "w-4 h-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 65,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: clubInfo.emailContact }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 66,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 61,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 40,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 28,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "font-semibold text-neutral-900 uppercase tracking-wider text-[11px] mb-3 font-mono",
						children: language === "vi" ? "Liên kết nhanh" : "Explore"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 73,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("ul", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ _jsxDEV("li", { children: /* @__PURE__ */ _jsxDEV("button", {
								onClick: () => onNavClick("about"),
								className: "hover:text-neutral-950 transition-colors",
								children: t.nav.about
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 78,
								columnNumber: 17
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 77,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("li", { children: /* @__PURE__ */ _jsxDEV("button", {
								onClick: () => onNavClick("members"),
								className: "hover:text-neutral-950 transition-colors",
								children: t.nav.members
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 86,
								columnNumber: 17
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 85,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("li", { children: /* @__PURE__ */ _jsxDEV("button", {
								onClick: () => onNavClick("events"),
								className: "hover:text-neutral-950 transition-colors",
								children: t.nav.events
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 17
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 93,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("li", { children: /* @__PURE__ */ _jsxDEV("button", {
								onClick: () => onNavClick("blog"),
								className: "hover:text-neutral-950 transition-colors",
								children: t.nav.blog
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 102,
								columnNumber: 17
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 101,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("li", { children: /* @__PURE__ */ _jsxDEV("button", {
								onClick: () => onNavClick("join"),
								className: "hover:text-neutral-950 transition-colors font-medium text-neutral-900",
								children: t.nav.join
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 110,
								columnNumber: 17
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 109,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "font-semibold text-neutral-900 uppercase tracking-wider text-[11px] mb-3 font-mono",
						children: "Developer Stack"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 122,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("ul", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ _jsxDEV("li", { children: /* @__PURE__ */ _jsxDEV("button", {
								onClick: onOpenGitExport,
								className: "hover:text-neutral-950 transition-colors flex items-center gap-1 font-mono text-[11px] font-semibold text-neutral-900",
								children: [/* @__PURE__ */ _jsxDEV(Github, { className: "w-3 h-3 text-neutral-900" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 131,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: t.nav.exportGit }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 132,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 127,
								columnNumber: 17
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 126,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("li", { children: /* @__PURE__ */ _jsxDEV("button", {
								onClick: onOpenBlueprint,
								className: "hover:text-neutral-950 transition-colors flex items-center gap-1 font-mono text-[11px]",
								children: [/* @__PURE__ */ _jsxDEV(Terminal, { className: "w-3 h-3 text-emerald-700" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 140,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Next.js + MongoDB Guide" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 141,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 136,
								columnNumber: 17
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 135,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("li", { children: /* @__PURE__ */ _jsxDEV("button", {
								onClick: () => onNavClick("dashboard"),
								className: "hover:text-neutral-950 transition-colors",
								children: t.nav.dashboard
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 145,
								columnNumber: 17
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 144,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("li", { children: /* @__PURE__ */ _jsxDEV("a", {
								href: "https://vercel.com",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "hover:text-neutral-950 transition-colors",
								children: "Vercel Serverless"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 153,
								columnNumber: 17
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 152,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("li", { children: /* @__PURE__ */ _jsxDEV("a", {
								href: "https://www.mongodb.com/cloud/atlas",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "hover:text-neutral-950 transition-colors",
								children: "MongoDB Atlas M0 Free"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 163,
								columnNumber: 17
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 162,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 125,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 121,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("div", {
				className: "pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]",
				children: [/* @__PURE__ */ _jsxDEV("div", { children: t.footer.license }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 178,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-4",
					children: [
						/* @__PURE__ */ _jsxDEV("span", { children: "HCMUS Computer Science Guild" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 182,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("span", {
							"aria-hidden": "true",
							children: "·"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 183,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("span", { children: "Next.js & MongoDB Atlas M0" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 184,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 181,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 177,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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S0FDbkM7Ozs7O1lBQ0Y7Ozs7O1dBQ0Y7Ozs7OztDQUNDOzs7OztBQUVaIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkZvb3Rlci50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdpdGh1YiwgTWVzc2FnZVNxdWFyZSwgTWFpbCwgVGVybWluYWwgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgQ2x1YkluZm8gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBMYW5ndWFnZSwgdHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vZGF0YS90cmFuc2xhdGlvbnMnO1xuXG5pbnRlcmZhY2UgRm9vdGVyUHJvcHMge1xuICBjbHViSW5mbzogQ2x1YkluZm87XG4gIGxhbmd1YWdlOiBMYW5ndWFnZTtcbiAgb25OYXZDbGljazogKHNlY3Rpb246IHN0cmluZykgPT4gdm9pZDtcbiAgb25PcGVuQmx1ZXByaW50OiAoKSA9PiB2b2lkO1xuICBvbk9wZW5HaXRFeHBvcnQ6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBGb290ZXI6IFJlYWN0LkZDPEZvb3RlclByb3BzPiA9ICh7XG4gIGNsdWJJbmZvLFxuICBsYW5ndWFnZSxcbiAgb25OYXZDbGljayxcbiAgb25PcGVuQmx1ZXByaW50LFxuICBvbk9wZW5HaXRFeHBvcnQsXG59KSA9PiB7XG4gIGNvbnN0IHQgPSB0cmFuc2xhdGlvbnNbbGFuZ3VhZ2VdO1xuXG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItdCBib3JkZXItbmV1dHJhbC0yMDAgcHQtMTIgcGItMTYgdGV4dC1uZXV0cmFsLTYwMCB0ZXh0LXhzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtNCBnYXAtOCBwYi0xMiBib3JkZXItYiBib3JkZXItbmV1dHJhbC0yMDBcIj5cbiAgICAgICAgICB7LyogQ29sIDE6IFdvcmRtYXJrICYgQWZmaWxpYXRpb24gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0yIHNwYWNlLXktM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy03IGgtNyByb3VuZGVkIGJnLW5ldXRyYWwtOTUwIHAtMC41IGJvcmRlciBib3JkZXItbmV1dHJhbC04MDAgc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9uZXMtbG9nby5zdmdcIiBhbHQ9XCJORVMgTG9nb1wiIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvbnRhaW5cIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ib2xkIHRleHQtbmV1dHJhbC05NTBcIj5cbiAgICAgICAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICd2aScgPyBjbHViSW5mby5uYW1lVmkgOiBjbHViSW5mby5uYW1lfSAoe2xhbmd1YWdlID09PSAndmknID8gY2x1YkluZm8uc2hvcnROYW1lVmkgOiBjbHViSW5mby5zaG9ydE5hbWV9KVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTUwMCBtYXgtdy1tZCBsZWFkaW5nLXJlbGF4ZWQgdGV4dC14c1wiPlxuICAgICAgICAgICAgICB7dC5mb290ZXIuYWZmaWxpYXRlZH0ge3QuZm9vdGVyLmFkZHJlc3N9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHB0LTIgdGV4dC1uZXV0cmFsLTUwMFwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2NsdWJJbmZvLmdpdGh1Yk9yZ31cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtbmV1dHJhbC05MDAgdHJhbnNpdGlvbi1jb2xvcnMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgZm9udC1tb25vXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxHaXRodWIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+R2l0SHViIE9yZzwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Ctzwvc3Bhbj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtjbHViSW5mby5kaXNjb3JkVXJsfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1uZXV0cmFsLTkwMCB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBmb250LW1vbm9cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VTcXVhcmUgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+RGlzY29yZDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Ctzwvc3Bhbj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtgbWFpbHRvOiR7Y2x1YkluZm8uZW1haWxDb250YWN0fWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1uZXV0cmFsLTkwMCB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBmb250LW1vbm9cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1haWwgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2NsdWJJbmZvLmVtYWlsQ29udGFjdH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIENvbCAyOiBOYXZpZ2F0aW9uICovfVxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1uZXV0cmFsLTkwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1bMTFweF0gbWItMyBmb250LW1vbm9cIj5cbiAgICAgICAgICAgICAge2xhbmd1YWdlID09PSAndmknID8gJ0xpw6puIGvhur90IG5oYW5oJyA6ICdFeHBsb3JlJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXZDbGljaygnYWJvdXQnKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtbmV1dHJhbC05NTAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0Lm5hdi5hYm91dH1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2Q2xpY2soJ21lbWJlcnMnKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtbmV1dHJhbC05NTAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0Lm5hdi5tZW1iZXJzfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXZDbGljaygnZXZlbnRzJyl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LW5ldXRyYWwtOTUwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dC5uYXYuZXZlbnRzfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXZDbGljaygnYmxvZycpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1uZXV0cmFsLTk1MCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3QubmF2LmJsb2d9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdkNsaWNrKCdqb2luJyl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LW5ldXRyYWwtOTUwIHRyYW5zaXRpb24tY29sb3JzIGZvbnQtbWVkaXVtIHRleHQtbmV1dHJhbC05MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0Lm5hdi5qb2lufVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBDb2wgMzogVGVjaCBTdGFjayAmIERldiBSZXNvdXJjZXMgKi99XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtOTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LVsxMXB4XSBtYi0zIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICBEZXZlbG9wZXIgU3RhY2tcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b25PcGVuR2l0RXhwb3J0fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1uZXV0cmFsLTk1MCB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBmb250LW1vbm8gdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtOTAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8R2l0aHViIGNsYXNzTmFtZT1cInctMyBoLTMgdGV4dC1uZXV0cmFsLTkwMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57dC5uYXYuZXhwb3J0R2l0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uT3BlbkJsdWVwcmludH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtbmV1dHJhbC05NTAgdHJhbnNpdGlvbi1jb2xvcnMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgZm9udC1tb25vIHRleHQtWzExcHhdXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VGVybWluYWwgY2xhc3NOYW1lPVwidy0zIGgtMyB0ZXh0LWVtZXJhbGQtNzAwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPk5leHQuanMgKyBNb25nb0RCIEd1aWRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXZDbGljaygnZGFzaGJvYXJkJyl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LW5ldXRyYWwtOTUwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dC5uYXYuZGFzaGJvYXJkfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb21cIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1uZXV0cmFsLTk1MCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgVmVyY2VsIFNlcnZlcmxlc3NcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lm1vbmdvZGIuY29tL2Nsb3VkL2F0bGFzXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtbmV1dHJhbC05NTAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIE1vbmdvREIgQXRsYXMgTTAgRnJlZVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBCb3R0b20gYmFyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTggZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00IHRleHQtbmV1dHJhbC01MDAgdGV4dC1bMTFweF1cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3QuZm9vdGVyLmxpY2Vuc2V9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgPHNwYW4+SENNVVMgQ29tcHV0ZXIgU2NpZW5jZSBHdWlsZDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsK3PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+TmV4dC5qcyAmIE1vbmdvREIgQXRsYXMgTTA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59O1xuIl19