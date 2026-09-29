const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=83e0c204";
import { ArrowRight, Terminal, Calendar } from "/node_modules/.vite/deps/lucide-react.js?v=83e0c204";
import { translations } from "/src/data/translations.ts";
var _jsxFileName = "/app/applet/src/components/HeroSection.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=83e0c204";
export const HeroSection = ({ clubInfo, language, onExploreEvents, onJoinClick, onOpenBlueprint }) => {
	const t = translations[language];
	return /* @__PURE__ */ _jsxDEV("section", {
		className: "relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-neutral-200",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex flex-wrap items-center gap-2 text-xs font-medium text-neutral-500 mb-4 tracking-wide uppercase",
					children: [
						/* @__PURE__ */ _jsxDEV("span", {
							className: "font-semibold text-neutral-800",
							children: language === "vi" ? clubInfo.universityVi || clubInfo.university : clubInfo.university
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 28,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("span", {
							"aria-hidden": "true",
							children: "·"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 31,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("span", { children: language === "vi" ? "Khoa Công nghệ Thông tin & Điện tử" : "Faculty of Information Technology" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 32,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("span", {
							"aria-hidden": "true",
							children: "·"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 35,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("span", {
							className: "font-mono",
							children: ["Est. ", clubInfo.establishedYear]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 27,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "lg:col-span-8",
						children: [
							/* @__PURE__ */ _jsxDEV("h1", {
								className: "text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.1] [text-wrap:balance]",
								children: t.hero.headline
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 42,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "mt-6 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl",
								children: t.hero.subheadline
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 45,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-8 flex flex-wrap items-center gap-3",
								children: [
									/* @__PURE__ */ _jsxDEV("button", {
										onClick: onJoinClick,
										className: "flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors shadow-xs",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: t.hero.applyBtn }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 55,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 56,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 51,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("button", {
										onClick: onExploreEvents,
										className: "flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-md transition-colors",
										children: [/* @__PURE__ */ _jsxDEV(Calendar, { className: "w-4 h-4 text-neutral-600" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 63,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: t.hero.eventsBtn }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 64,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 59,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("button", {
										onClick: onOpenBlueprint,
										className: "flex items-center gap-2 px-4 py-2.5 text-sm font-mono text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-md transition-colors",
										children: [/* @__PURE__ */ _jsxDEV(Terminal, { className: "w-4 h-4 text-emerald-700" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 71,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: t.hero.blueprintBtn }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 72,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 67,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "lg:col-span-4 flex justify-center lg:justify-end",
						children: /* @__PURE__ */ _jsxDEV("div", {
							className: "bg-neutral-950 border border-neutral-800 rounded-xl p-5 shadow-xl max-w-xs w-full text-white space-y-4",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "relative aspect-square w-full rounded-lg bg-neutral-900 overflow-hidden border border-neutral-800 flex items-center justify-center p-3",
								children: /* @__PURE__ */ _jsxDEV("img", {
									src: "/nes-logo.svg",
									alt: "NES Club Logo",
									className: "w-full h-full object-contain filter drop-shadow-md"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 81,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 80,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("div", { children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-base font-bold text-neutral-100",
									children: language === "vi" ? clubInfo.shortNameVi : clubInfo.shortName
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 89,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-xs text-neutral-400 font-mono mt-0.5",
									children: language === "vi" ? clubInfo.nameVi : clubInfo.name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 92,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-[11px] text-neutral-400 pt-2 border-t border-neutral-800/80 mt-2 flex items-center justify-between",
									children: [/* @__PURE__ */ _jsxDEV("span", { children: "Trường ĐH KHTN (HCMUS)" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 96,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "font-mono text-emerald-400",
										children: "● Active"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 97,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 95,
									columnNumber: 17
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 88,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 79,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mt-14 pt-8 border-t border-neutral-200 grid grid-cols-2 md:grid-cols-4 gap-6",
					children: [
						/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "text-2xl sm:text-3xl font-bold font-mono text-neutral-950 tabular-nums",
							children: [clubInfo.stats.activeMembers, "+"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 107,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs text-neutral-500 mt-1",
							children: t.hero.stats.activeMembers
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 110,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "text-2xl sm:text-3xl font-bold font-mono text-neutral-950 tabular-nums",
							children: clubInfo.stats.eventsHosted
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 113,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs text-neutral-500 mt-1",
							children: t.hero.stats.eventsHosted
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 116,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 112,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "text-2xl sm:text-3xl font-bold font-mono text-neutral-950 tabular-nums",
							children: clubInfo.stats.projectsBuilt
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 119,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs text-neutral-500 mt-1",
							children: t.hero.stats.projectsBuilt
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 122,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 118,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "text-2xl sm:text-3xl font-bold font-mono text-neutral-950 tabular-nums",
							children: [clubInfo.stats.alumniNetwork, "+"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 125,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs text-neutral-500 mt-1",
							children: t.hero.stats.alumniNetwork
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 128,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 124,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 105,
					columnNumber: 9
				}, this)
			]
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

//# sourceMappingURL=data:application/json;base64,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RDtPQUFLLFdBQVU7aUJBQ1osU0FBUyxNQUFNO01BQ2I7Ozs7Z0JBQ0wsd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQWlDLEVBQUUsS0FBSyxNQUFNO01BQWtCOzs7O2NBQzVFOzs7OztNQUNMLHdCQUFDLE9BQUQsYUFDRSx3QkFBQyxPQUFEO09BQUssV0FBVTtpQkFDWixTQUFTLE1BQU07TUFDYjs7OztnQkFDTCx3QkFBQyxPQUFEO09BQUssV0FBVTtpQkFBaUMsRUFBRSxLQUFLLE1BQU07TUFBbUI7Ozs7Y0FDN0U7Ozs7O01BQ0wsd0JBQUMsT0FBRCxhQUNFLHdCQUFDLE9BQUQ7T0FBSyxXQUFVO2lCQUFmLENBQ0csU0FBUyxNQUFNLGVBQWMsR0FDM0I7Ozs7O2dCQUNMLHdCQUFDLE9BQUQ7T0FBSyxXQUFVO2lCQUFpQyxFQUFFLEtBQUssTUFBTTtNQUFtQjs7OztjQUM3RTs7Ozs7S0FDRjs7Ozs7O0dBQ0Y7Ozs7OztDQUNFOzs7OztBQUViIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkhlcm9TZWN0aW9uLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXJyb3dSaWdodCwgVGVybWluYWwsIENhbGVuZGFyLCBBd2FyZCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBDbHViSW5mbyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IExhbmd1YWdlLCB0cmFuc2xhdGlvbnMgfSBmcm9tICcuLi9kYXRhL3RyYW5zbGF0aW9ucyc7XG5cbmludGVyZmFjZSBIZXJvU2VjdGlvblByb3BzIHtcbiAgY2x1YkluZm86IENsdWJJbmZvO1xuICBsYW5ndWFnZTogTGFuZ3VhZ2U7XG4gIG9uRXhwbG9yZUV2ZW50czogKCkgPT4gdm9pZDtcbiAgb25Kb2luQ2xpY2s6ICgpID0+IHZvaWQ7XG4gIG9uT3BlbkJsdWVwcmludDogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEhlcm9TZWN0aW9uOiBSZWFjdC5GQzxIZXJvU2VjdGlvblByb3BzPiA9ICh7XG4gIGNsdWJJbmZvLFxuICBsYW5ndWFnZSxcbiAgb25FeHBsb3JlRXZlbnRzLFxuICBvbkpvaW5DbGljayxcbiAgb25PcGVuQmx1ZXByaW50LFxufSkgPT4ge1xuICBjb25zdCB0ID0gdHJhbnNsYXRpb25zW2xhbmd1YWdlXTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIHB0LTEyIHBiLTE2IG1kOnB0LTIwIG1kOnBiLTI0IGJvcmRlci1iIGJvcmRlci1uZXV0cmFsLTIwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICB7LyogU3VidGxlIGtpY2tlciB0ZXh0IG1ldGFkYXRhIHdpdGggdW5pdmVyc2l0eSAmIGJhZGdlICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtbmV1dHJhbC01MDAgbWItNCB0cmFja2luZy13aWRlIHVwcGVyY2FzZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1uZXV0cmFsLTgwMFwiPlxuICAgICAgICAgICAge2xhbmd1YWdlID09PSAndmknID8gY2x1YkluZm8udW5pdmVyc2l0eVZpIHx8IGNsdWJJbmZvLnVuaXZlcnNpdHkgOiBjbHViSW5mby51bml2ZXJzaXR5fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Ctzwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3ZpJyA/ICdLaG9hIEPDtG5nIG5naOG7hyBUaMO0bmcgdGluICYgxJBp4buHbiB04butJyA6ICdGYWN1bHR5IG9mIEluZm9ybWF0aW9uIFRlY2hub2xvZ3knfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Ctzwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm9cIj5Fc3QuIHtjbHViSW5mby5lc3RhYmxpc2hlZFllYXJ9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogSGVybyBzcGxpdDogVGV4dCBjb250ZW50IG9uIGxlZnQsIG1ldGFsbGljIE5FUyBlbWJsZW0gcHJlc2VudGF0aW9uIG9uIHJpZ2h0ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTEyIGdhcC04IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tOFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIHNtOnRleHQtNXhsIG1kOnRleHQtNnhsIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtbmV1dHJhbC05NTAgbGVhZGluZy1bMS4xXSBbdGV4dC13cmFwOmJhbGFuY2VdXCI+XG4gICAgICAgICAgICAgIHt0Lmhlcm8uaGVhZGxpbmV9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNiB0ZXh0LWJhc2Ugc206dGV4dC1sZyB0ZXh0LW5ldXRyYWwtNjAwIGxlYWRpbmctcmVsYXhlZCBtYXgtdy0yeGxcIj5cbiAgICAgICAgICAgICAge3QuaGVyby5zdWJoZWFkbGluZX1cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgey8qIEFjdGlvbiBCdXR0b25zICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25Kb2luQ2xpY2t9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtNSBweS0yLjUgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgYmctbmV1dHJhbC05MDAgaG92ZXI6YmctbmV1dHJhbC04MDAgcm91bmRlZC1tZCB0cmFuc2l0aW9uLWNvbG9ycyBzaGFkb3cteHNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3QuaGVyby5hcHBseUJ0bn08L3NwYW4+XG4gICAgICAgICAgICAgICAgPEFycm93UmlnaHQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkV4cGxvcmVFdmVudHN9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtNSBweS0yLjUgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LW5ldXRyYWwtODAwIGJnLXdoaXRlIGhvdmVyOmJnLW5ldXRyYWwtMTAwIGJvcmRlciBib3JkZXItbmV1dHJhbC0zMDAgcm91bmRlZC1tZCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2FsZW5kYXIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LW5ldXRyYWwtNjAwXCIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj57dC5oZXJvLmV2ZW50c0J0bn08L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5CbHVlcHJpbnR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtNCBweS0yLjUgdGV4dC1zbSBmb250LW1vbm8gdGV4dC1uZXV0cmFsLTcwMCBiZy1uZXV0cmFsLTEwMCBob3ZlcjpiZy1uZXV0cmFsLTIwMCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMzAwIHJvdW5kZWQtbWQgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRlcm1pbmFsIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1lbWVyYWxkLTcwMFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3QuaGVyby5ibHVlcHJpbnRCdG59PC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFJpZ2h0IENvbHVtbjogSGVybyBWaXN1YWwgQ2FyZCB3aXRoIENsdWIgRW1ibGVtICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tNCBmbGV4IGp1c3RpZnktY2VudGVyIGxnOmp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLW5ldXRyYWwtOTUwIGJvcmRlciBib3JkZXItbmV1dHJhbC04MDAgcm91bmRlZC14bCBwLTUgc2hhZG93LXhsIG1heC13LXhzIHctZnVsbCB0ZXh0LXdoaXRlIHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGFzcGVjdC1zcXVhcmUgdy1mdWxsIHJvdW5kZWQtbGcgYmctbmV1dHJhbC05MDAgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlciBib3JkZXItbmV1dHJhbC04MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0zXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiL25lcy1sb2dvLnN2Z1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJORVMgQ2x1YiBMb2dvXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvbnRhaW4gZmlsdGVyIGRyb3Atc2hhZG93LW1kXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LW5ldXRyYWwtMTAwXCI+XG4gICAgICAgICAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICd2aScgPyBjbHViSW5mby5zaG9ydE5hbWVWaSA6IGNsdWJJbmZvLnNob3J0TmFtZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1uZXV0cmFsLTQwMCBmb250LW1vbm8gbXQtMC41XCI+XG4gICAgICAgICAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICd2aScgPyBjbHViSW5mby5uYW1lVmkgOiBjbHViSW5mby5uYW1lfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1uZXV0cmFsLTQwMCBwdC0yIGJvcmRlci10IGJvcmRlci1uZXV0cmFsLTgwMC84MCBtdC0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+VHLGsOG7nW5nIMSQSCBLSFROIChIQ01VUyk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC1lbWVyYWxkLTQwMFwiPuKXjyBBY3RpdmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBRdWFudGl0YXRpdmUgUmlnb3IgTWV0cmljcyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xNCBwdC04IGJvcmRlci10IGJvcmRlci1uZXV0cmFsLTIwMCBncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdhcC02XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC0zeGwgZm9udC1ib2xkIGZvbnQtbW9ubyB0ZXh0LW5ldXRyYWwtOTUwIHRhYnVsYXItbnVtc1wiPlxuICAgICAgICAgICAgICB7Y2x1YkluZm8uc3RhdHMuYWN0aXZlTWVtYmVyc30rXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW5ldXRyYWwtNTAwIG10LTFcIj57dC5oZXJvLnN0YXRzLmFjdGl2ZU1lbWJlcnN9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC0zeGwgZm9udC1ib2xkIGZvbnQtbW9ubyB0ZXh0LW5ldXRyYWwtOTUwIHRhYnVsYXItbnVtc1wiPlxuICAgICAgICAgICAgICB7Y2x1YkluZm8uc3RhdHMuZXZlbnRzSG9zdGVkfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1uZXV0cmFsLTUwMCBtdC0xXCI+e3QuaGVyby5zdGF0cy5ldmVudHNIb3N0ZWR9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC0zeGwgZm9udC1ib2xkIGZvbnQtbW9ubyB0ZXh0LW5ldXRyYWwtOTUwIHRhYnVsYXItbnVtc1wiPlxuICAgICAgICAgICAgICB7Y2x1YkluZm8uc3RhdHMucHJvamVjdHNCdWlsdH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbmV1dHJhbC01MDAgbXQtMVwiPnt0Lmhlcm8uc3RhdHMucHJvamVjdHNCdWlsdH08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBzbTp0ZXh0LTN4bCBmb250LWJvbGQgZm9udC1tb25vIHRleHQtbmV1dHJhbC05NTAgdGFidWxhci1udW1zXCI+XG4gICAgICAgICAgICAgIHtjbHViSW5mby5zdGF0cy5hbHVtbmlOZXR3b3JrfStcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbmV1dHJhbC01MDAgbXQtMVwiPnt0Lmhlcm8uc3RhdHMuYWx1bW5pTmV0d29ya308L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIl19