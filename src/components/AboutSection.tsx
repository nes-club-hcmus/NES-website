const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=83e0c204";
import { Code2, Palette, Cpu, Users2, MapPin, Clock, ShieldCheck } from "/node_modules/.vite/deps/lucide-react.js?v=83e0c204";
import { translations } from "/src/data/translations.ts";
var _jsxFileName = "/app/applet/src/components/AboutSection.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=83e0c204";
export const AboutSection = ({ clubInfo, language }) => {
	const t = translations[language];
	const icons = [
		Code2,
		Palette,
		Cpu,
		Users2
	];
	return /* @__PURE__ */ _jsxDEV("section", {
		id: "about",
		className: "py-16 md:py-20 border-b border-neutral-200",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "max-w-3xl mb-12",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 font-mono",
							children: t.about.sectionNum
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 21,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl",
							children: t.about.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed",
							children: language === "vi" ? clubInfo.missionVi || clubInfo.mission : clubInfo.mission
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 27,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 20,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mb-6",
					children: [/* @__PURE__ */ _jsxDEV("h3", {
						className: "text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4 font-mono",
						children: t.about.tracksTitle
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-6",
						children: t.about.tracks.map((track, i) => {
							const Icon = icons[i % icons.length];
							return /* @__PURE__ */ _jsxDEV("div", {
								className: "p-6 bg-white border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-3 mb-4",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "w-10 h-10 rounded-md bg-neutral-100 flex items-center justify-center text-neutral-800",
											children: /* @__PURE__ */ _jsxDEV(Icon, { className: "w-5 h-5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 47,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 46,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("div", { children: /* @__PURE__ */ _jsxDEV("h3", {
											className: "text-base font-semibold text-neutral-900",
											children: track.title
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 50,
											columnNumber: 23
										}, this) }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 49,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 45,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "text-sm text-neutral-600 leading-relaxed mb-4",
										children: track.desc
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 55,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs font-mono text-neutral-500 pt-3 border-t border-neutral-100",
										children: track.tools
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 58,
										columnNumber: 19
									}, this)
								]
							}, track.title, true, {
								fileName: _jsxFileName,
								lineNumber: 41,
								columnNumber: 17
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "p-6 sm:p-8 bg-neutral-100/80 border border-neutral-200 rounded-lg mt-8",
					children: /* @__PURE__ */ _jsxDEV("div", {
						className: "grid grid-cols-1 sm:grid-cols-3 gap-6",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ _jsxDEV(MapPin, { className: "w-5 h-5 text-neutral-700 mt-0.5 shrink-0" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 71,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs font-semibold text-neutral-500 uppercase",
										children: t.about.hq
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 73,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-sm font-medium text-neutral-900 mt-0.5",
										children: clubInfo.roomNumber
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 74,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs text-neutral-600 mt-0.5",
										children: t.about.hqDesc
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 75,
										columnNumber: 17
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 72,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 70,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ _jsxDEV(Clock, { className: "w-5 h-5 text-neutral-700 mt-0.5 shrink-0" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 80,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs font-semibold text-neutral-500 uppercase",
										children: t.about.schedule
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 82,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-sm font-medium text-neutral-900 mt-0.5",
										children: t.about.scheduleDesc
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 83,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs text-neutral-600 mt-0.5",
										children: "Seminar & training phòng máy"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 84,
										columnNumber: 17
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 81,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 79,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ _jsxDEV(ShieldCheck, { className: "w-5 h-5 text-neutral-700 mt-0.5 shrink-0" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 89,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs font-semibold text-neutral-500 uppercase",
										children: t.about.policy
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 91,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-sm font-medium text-neutral-900 mt-0.5",
										children: t.about.policyDesc
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 92,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs text-neutral-600 mt-0.5",
										children: "Thuộc Trường ĐH KHTN ĐHQG-HCM"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 93,
										columnNumber: 17
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 90,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 88,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 18,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 17,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QUN0Rix3QkFBQyxPQUFEO1VBQUssV0FBVTtvQkFBa0M7U0FBa0M7Ozs7O1FBQ2hGOzs7O2dCQUNGOzs7Ozs7TUFDRjs7Ozs7O0lBQ0Y7Ozs7O0dBQ0Y7Ozs7OztDQUNFOzs7OztBQUViIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkFib3V0U2VjdGlvbi50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvZGUyLCBQYWxldHRlLCBDcHUsIFVzZXJzMiwgTWFwUGluLCBDbG9jaywgU2hpZWxkQ2hlY2sgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgQ2x1YkluZm8gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBMYW5ndWFnZSwgdHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vZGF0YS90cmFuc2xhdGlvbnMnO1xuXG5pbnRlcmZhY2UgQWJvdXRTZWN0aW9uUHJvcHMge1xuICBjbHViSW5mbzogQ2x1YkluZm87XG4gIGxhbmd1YWdlOiBMYW5ndWFnZTtcbn1cblxuZXhwb3J0IGNvbnN0IEFib3V0U2VjdGlvbjogUmVhY3QuRkM8QWJvdXRTZWN0aW9uUHJvcHM+ID0gKHsgY2x1YkluZm8sIGxhbmd1YWdlIH0pID0+IHtcbiAgY29uc3QgdCA9IHRyYW5zbGF0aW9uc1tsYW5ndWFnZV07XG5cbiAgY29uc3QgaWNvbnMgPSBbQ29kZTIsIFBhbGV0dGUsIENwdSwgVXNlcnMyXTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwiYWJvdXRcIiBjbGFzc05hbWU9XCJweS0xNiBtZDpweS0yMCBib3JkZXItYiBib3JkZXItbmV1dHJhbC0yMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgey8qIFNlY3Rpb24gSGVhZGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bCBtYi0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIG1iLTIgZm9udC1tb25vXCI+XG4gICAgICAgICAgICB7dC5hYm91dC5zZWN0aW9uTnVtfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1uZXV0cmFsLTk1MCBzbTp0ZXh0LTR4bFwiPlxuICAgICAgICAgICAge3QuYWJvdXQudGl0bGV9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IHRleHQtYmFzZSBzbTp0ZXh0LWxnIHRleHQtbmV1dHJhbC02MDAgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICd2aScgPyBjbHViSW5mby5taXNzaW9uVmkgfHwgY2x1YkluZm8ubWlzc2lvbiA6IGNsdWJJbmZvLm1pc3Npb259XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogNCBUcmFja3MgQmVudG8gR3JpZCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LW5ldXRyYWwtNDAwIG1iLTQgZm9udC1tb25vXCI+XG4gICAgICAgICAgICB7dC5hYm91dC50cmFja3NUaXRsZX1cbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNlwiPlxuICAgICAgICAgICAge3QuYWJvdXQudHJhY2tzLm1hcCgodHJhY2ssIGkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgSWNvbiA9IGljb25zW2kgJSBpY29ucy5sZW5ndGhdO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17dHJhY2sudGl0bGV9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTYgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCByb3VuZGVkLWxnIGhvdmVyOmJvcmRlci1uZXV0cmFsLTMwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtbWQgYmctbmV1dHJhbC0xMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1uZXV0cmFsLTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC1uZXV0cmFsLTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RyYWNrLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbmV1dHJhbC02MDAgbGVhZGluZy1yZWxheGVkIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAge3RyYWNrLmRlc2N9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tb25vIHRleHQtbmV1dHJhbC01MDAgcHQtMyBib3JkZXItdCBib3JkZXItbmV1dHJhbC0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAge3RyYWNrLnRvb2xzfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIE1lZXRpbmcgVGltZXMgJiBPcGVyYXRpb25hbCBQcmVzZW5jZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgc206cC04IGJnLW5ldXRyYWwtMTAwLzgwIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1sZyBtdC04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0zIGdhcC02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgPE1hcFBpbiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtbmV1dHJhbC03MDAgbXQtMC41IHNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtNTAwIHVwcGVyY2FzZVwiPnt0LmFib3V0LmhxfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LW5ldXRyYWwtOTAwIG10LTAuNVwiPntjbHViSW5mby5yb29tTnVtYmVyfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW5ldXRyYWwtNjAwIG10LTAuNVwiPnt0LmFib3V0LmhxRGVzY308L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxDbG9jayBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtbmV1dHJhbC03MDAgbXQtMC41IHNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtNTAwIHVwcGVyY2FzZVwiPnt0LmFib3V0LnNjaGVkdWxlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LW5ldXRyYWwtOTAwIG10LTAuNVwiPnt0LmFib3V0LnNjaGVkdWxlRGVzY308L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1uZXV0cmFsLTYwMCBtdC0wLjVcIj5TZW1pbmFyICYgdHJhaW5pbmcgcGjDsm5nIG3DoXk8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxTaGllbGRDaGVjayBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtbmV1dHJhbC03MDAgbXQtMC41IHNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtNTAwIHVwcGVyY2FzZVwiPnt0LmFib3V0LnBvbGljeX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1uZXV0cmFsLTkwMCBtdC0wLjVcIj57dC5hYm91dC5wb2xpY3lEZXNjfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW5ldXRyYWwtNjAwIG10LTAuNVwiPlRodeG7mWMgVHLGsOG7nW5nIMSQSCBLSFROIMSQSFFHLUhDTTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iXX0=