const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=83e0c204";
import { Menu, X, Terminal, Github } from "/node_modules/.vite/deps/lucide-react.js?v=83e0c204";
import { translations } from "/src/data/translations.ts";
var _jsxFileName = "/app/applet/src/components/Navbar.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=83e0c204";
export const Navbar = ({ activeSection, setActiveSection, onOpenBlueprint, onOpenGitExport, pendingApplicationsCount, language, onLanguageChange }) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const t = translations[language];
	const navItems = [
		{
			id: "about",
			label: t.nav.about
		},
		{
			id: "members",
			label: t.nav.members
		},
		{
			id: "events",
			label: t.nav.events
		},
		{
			id: "blog",
			label: t.nav.blog
		},
		{
			id: "join",
			label: t.nav.join
		},
		{
			id: "dashboard",
			label: t.nav.dashboard,
			badge: pendingApplicationsCount > 0 ? pendingApplicationsCount : undefined
		}
	];
	const handleNavClick = (id) => {
		setActiveSection(id);
		setMobileMenuOpen(false);
	};
	return /* @__PURE__ */ _jsxDEV("header", {
		className: "sticky top-0 z-40 bg-[#fafaf9]/95 backdrop-blur-md border-b border-neutral-200",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",
			children: [
				/* @__PURE__ */ _jsxDEV("button", {
					onClick: () => handleNavClick("about"),
					className: "flex items-center gap-3 text-left group cursor-pointer focus:outline-none",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "w-9 h-9 rounded-md bg-neutral-950 p-0.5 border border-neutral-700 shadow-xs flex items-center justify-center shrink-0 overflow-hidden",
						children: /* @__PURE__ */ _jsxDEV("img", {
							src: "/nes-logo.svg",
							alt: "NES HCMUS Logo",
							className: "w-full h-full object-contain"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "text-base font-extrabold tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors",
								children: language === "vi" ? t.club.shortName : t.club.shortName
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 64,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "text-[10px] font-mono font-medium px-1.5 py-0.5 bg-neutral-200 text-neutral-800 rounded",
								children: "HCMUS"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 67,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 63,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							className: "text-[11px] text-neutral-500 font-medium line-clamp-1",
							children: language === "vi" ? t.club.longName : t.club.longName
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 71,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("nav", {
					className: "hidden lg:flex items-center gap-6 text-xs sm:text-sm font-medium text-neutral-600",
					children: navItems.map((item) => {
						const isActive = activeSection === item.id;
						return /* @__PURE__ */ _jsxDEV("button", {
							onClick: () => handleNavClick(item.id),
							className: `relative py-1 transition-colors hover:text-neutral-950 focus:outline-none ${isActive ? "text-neutral-950 font-semibold" : "text-neutral-600"}`,
							children: [
								/* @__PURE__ */ _jsxDEV("span", {
									className: "whitespace-nowrap",
									children: item.label
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 89,
									columnNumber: 17
								}, this),
								item.badge !== undefined && /* @__PURE__ */ _jsxDEV("span", {
									className: "ml-1.5 text-xs font-mono px-1.5 py-0.2 bg-neutral-900 text-white rounded text-[10px]",
									children: item.badge
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 91,
									columnNumber: 19
								}, this),
								isActive && /* @__PURE__ */ _jsxDEV("span", { className: "absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900 rounded-full" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 96,
									columnNumber: 19
								}, this)
							]
						}, item.id, true, {
							fileName: _jsxFileName,
							lineNumber: 82,
							columnNumber: 15
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "hidden sm:flex items-center gap-2.5",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center p-0.5 bg-neutral-100 rounded-md border border-neutral-200 text-xs font-mono",
							children: [/* @__PURE__ */ _jsxDEV("button", {
								onClick: () => onLanguageChange("vi"),
								className: `px-2 py-1 rounded transition-colors ${language === "vi" ? "bg-white text-neutral-950 font-bold shadow-2xs" : "text-neutral-500 hover:text-neutral-900"}`,
								title: "Tiếng Việt (Vietnamese)",
								children: "🇻🇳 VI"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 107,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("button", {
								onClick: () => onLanguageChange("en"),
								className: `px-2 py-1 rounded transition-colors ${language === "en" ? "bg-white text-neutral-950 font-bold shadow-2xs" : "text-neutral-500 hover:text-neutral-900"}`,
								title: "English",
								children: "🇬🇧 EN"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 118,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: onOpenGitExport,
							className: "flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-md transition-colors whitespace-nowrap shadow-2xs",
							title: "Download code and push to your own Git/GitHub project",
							children: [/* @__PURE__ */ _jsxDEV(Github, { className: "w-3.5 h-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 136,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: t.nav.exportGit }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 137,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 131,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: onOpenBlueprint,
							className: "flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-md transition-colors whitespace-nowrap",
							title: "Next.js + MongoDB + Vercel Blueprint",
							children: [/* @__PURE__ */ _jsxDEV(Terminal, { className: "w-3.5 h-3.5 text-neutral-600" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 145,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Next.js" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 146,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 140,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => handleNavClick("join"),
							className: "px-3.5 py-1.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md shadow-xs transition-colors whitespace-nowrap",
							children: t.nav.applyNow
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 149,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-1.5 lg:hidden",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center p-0.5 bg-neutral-100 rounded border border-neutral-200 text-[11px] font-mono",
						children: [/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => onLanguageChange("vi"),
							className: `px-1.5 py-0.5 rounded ${language === "vi" ? "bg-white text-neutral-950 font-bold" : "text-neutral-500"}`,
							children: "VI"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 160,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("button", {
							onClick: () => onLanguageChange("en"),
							className: `px-1.5 py-0.5 rounded ${language === "en" ? "bg-white text-neutral-950 font-bold" : "text-neutral-500"}`,
							children: "EN"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 168,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 159,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: () => setMobileMenuOpen(!mobileMenuOpen),
						className: "p-1.5 text-neutral-700 hover:text-neutral-950 rounded-md",
						"aria-label": "Toggle navigation",
						children: mobileMenuOpen ? /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 183,
							columnNumber: 31
						}, this) : /* @__PURE__ */ _jsxDEV(Menu, { className: "w-5 h-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 183,
							columnNumber: 59
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 178,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 158,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 7
		}, this), mobileMenuOpen && /* @__PURE__ */ _jsxDEV("div", {
			className: "lg:hidden border-t border-neutral-200 bg-[#fafaf9] px-4 pt-3 pb-5 space-y-2",
			children: [navItems.map((item) => /* @__PURE__ */ _jsxDEV("button", {
				onClick: () => handleNavClick(item.id),
				className: `w-full text-left px-3 py-2 text-sm font-medium rounded-md flex items-center justify-between ${activeSection === item.id ? "bg-neutral-200 text-neutral-950 font-semibold" : "text-neutral-700 hover:bg-neutral-100"}`,
				children: [/* @__PURE__ */ _jsxDEV("span", { children: item.label }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 201,
					columnNumber: 15
				}, this), item.badge !== undefined && /* @__PURE__ */ _jsxDEV("span", {
					className: "text-xs font-mono px-1.5 py-0.5 bg-neutral-900 text-white rounded text-[10px]",
					children: item.badge
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 203,
					columnNumber: 17
				}, this)]
			}, item.id, true, {
				fileName: _jsxFileName,
				lineNumber: 192,
				columnNumber: 13
			}, this)), /* @__PURE__ */ _jsxDEV("div", {
				className: "pt-2 border-t border-neutral-200 flex flex-col gap-2",
				children: [
					/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => {
							onOpenGitExport();
							setMobileMenuOpen(false);
						},
						className: "w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-neutral-900 bg-white border border-neutral-300 rounded-md",
						children: [/* @__PURE__ */ _jsxDEV(Github, { className: "w-4 h-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 217,
							columnNumber: 15
						}, this), t.nav.exportGit]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 210,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => {
							onOpenBlueprint();
							setMobileMenuOpen(false);
						},
						className: "w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-neutral-800 bg-neutral-100 border border-neutral-300 rounded-md",
						children: [/* @__PURE__ */ _jsxDEV(Terminal, { className: "w-4 h-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 227,
							columnNumber: 15
						}, this), t.nav.blueprint]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 220,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => handleNavClick("join"),
						className: "w-full py-2 text-xs font-medium text-white bg-neutral-900 rounded-md text-center",
						children: t.nav.applyNow
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 230,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 209,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 190,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 46,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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S0FBSzs7OztVQWNKLENBQ1QsR0FDRCx3QkFBQyxPQUFEO0lBQUssV0FBVTtjQUFmO0tBQ0Usd0JBQUMsVUFBRDtNQUNFLGVBQWU7T0FDYixnQkFBZ0I7T0FDaEIsa0JBQWtCLEtBQUs7TUFDekI7TUFDQSxXQUFVO2dCQUxaLENBT0Usd0JBQUMsUUFBRCxFQUFRLFdBQVUsVUFBVzs7OztnQkFDNUIsRUFBRSxJQUFJLFNBQ0Q7Ozs7OztLQUNSLHdCQUFDLFVBQUQ7TUFDRSxlQUFlO09BQ2IsZ0JBQWdCO09BQ2hCLGtCQUFrQixLQUFLO01BQ3pCO01BQ0EsV0FBVTtnQkFMWixDQU9FLHdCQUFDLFVBQUQsRUFBVSxXQUFVLFVBQVc7Ozs7Z0JBQzlCLEVBQUUsSUFBSSxTQUNEOzs7Ozs7S0FDUix3QkFBQyxVQUFEO01BQ0UsZUFBZSxlQUFlLE1BQU07TUFDcEMsV0FBVTtnQkFFVCxFQUFFLElBQUk7S0FDRDs7Ozs7SUFDTDs7Ozs7V0FDRjs7Ozs7VUFFRDs7Ozs7O0FBRVoiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiTmF2YmFyLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNZW51LCBYLCBUZXJtaW5hbCwgRXh0ZXJuYWxMaW5rLCBHaXRodWIsIEdsb2JlIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IExhbmd1YWdlLCB0cmFuc2xhdGlvbnMgfSBmcm9tICcuLi9kYXRhL3RyYW5zbGF0aW9ucyc7XG5cbmludGVyZmFjZSBOYXZiYXJQcm9wcyB7XG4gIGFjdGl2ZVNlY3Rpb246IHN0cmluZztcbiAgc2V0QWN0aXZlU2VjdGlvbjogKHNlY3Rpb246IHN0cmluZykgPT4gdm9pZDtcbiAgb25PcGVuQmx1ZXByaW50OiAoKSA9PiB2b2lkO1xuICBvbk9wZW5HaXRFeHBvcnQ6ICgpID0+IHZvaWQ7XG4gIHBlbmRpbmdBcHBsaWNhdGlvbnNDb3VudDogbnVtYmVyO1xuICBsYW5ndWFnZTogTGFuZ3VhZ2U7XG4gIG9uTGFuZ3VhZ2VDaGFuZ2U6IChsYW5nOiBMYW5ndWFnZSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IE5hdmJhcjogUmVhY3QuRkM8TmF2YmFyUHJvcHM+ID0gKHtcbiAgYWN0aXZlU2VjdGlvbixcbiAgc2V0QWN0aXZlU2VjdGlvbixcbiAgb25PcGVuQmx1ZXByaW50LFxuICBvbk9wZW5HaXRFeHBvcnQsXG4gIHBlbmRpbmdBcHBsaWNhdGlvbnNDb3VudCxcbiAgbGFuZ3VhZ2UsXG4gIG9uTGFuZ3VhZ2VDaGFuZ2UsXG59KSA9PiB7XG4gIGNvbnN0IFttb2JpbGVNZW51T3Blbiwgc2V0TW9iaWxlTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0ID0gdHJhbnNsYXRpb25zW2xhbmd1YWdlXTtcblxuICBjb25zdCBuYXZJdGVtcyA9IFtcbiAgICB7IGlkOiAnYWJvdXQnLCBsYWJlbDogdC5uYXYuYWJvdXQgfSxcbiAgICB7IGlkOiAnbWVtYmVycycsIGxhYmVsOiB0Lm5hdi5tZW1iZXJzIH0sXG4gICAgeyBpZDogJ2V2ZW50cycsIGxhYmVsOiB0Lm5hdi5ldmVudHMgfSxcbiAgICB7IGlkOiAnYmxvZycsIGxhYmVsOiB0Lm5hdi5ibG9nIH0sXG4gICAgeyBpZDogJ2pvaW4nLCBsYWJlbDogdC5uYXYuam9pbiB9LFxuICAgIHtcbiAgICAgIGlkOiAnZGFzaGJvYXJkJyxcbiAgICAgIGxhYmVsOiB0Lm5hdi5kYXNoYm9hcmQsXG4gICAgICBiYWRnZTogcGVuZGluZ0FwcGxpY2F0aW9uc0NvdW50ID4gMCA/IHBlbmRpbmdBcHBsaWNhdGlvbnNDb3VudCA6IHVuZGVmaW5lZCxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGhhbmRsZU5hdkNsaWNrID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRBY3RpdmVTZWN0aW9uKGlkKTtcbiAgICBzZXRNb2JpbGVNZW51T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCB6LTQwIGJnLVsjZmFmYWY5XS85NSBiYWNrZHJvcC1ibHVyLW1kIGJvcmRlci1iIGJvcmRlci1uZXV0cmFsLTIwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOCBoLTE2IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICB7LyogWm9uZSAxOiBMb2dvIGFuZCB3b3JkbWFyayAqL31cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU5hdkNsaWNrKCdhYm91dCcpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHRleHQtbGVmdCBncm91cCBjdXJzb3ItcG9pbnRlciBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICA+XG4gICAgICAgICAgey8qIFJlYWwgbWV0YWxsaWMgbG9nbyBlbWJsZW0gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTkgaC05IHJvdW5kZWQtbWQgYmctbmV1dHJhbC05NTAgcC0wLjUgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTcwMCBzaGFkb3cteHMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hyaW5rLTAgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi9uZXMtbG9nby5zdmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJORVMgSENNVVMgTG9nb1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvbnRhaW5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LW5ldXRyYWwtOTUwIGdyb3VwLWhvdmVyOnRleHQtbmV1dHJhbC03MDAgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICd2aScgPyB0LmNsdWIuc2hvcnROYW1lIDogdC5jbHViLnNob3J0TmFtZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LW1vbm8gZm9udC1tZWRpdW0gcHgtMS41IHB5LTAuNSBiZy1uZXV0cmFsLTIwMCB0ZXh0LW5ldXRyYWwtODAwIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICBIQ01VU1xuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtbmV1dHJhbC01MDAgZm9udC1tZWRpdW0gbGluZS1jbGFtcC0xXCI+XG4gICAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3ZpJyA/IHQuY2x1Yi5sb25nTmFtZSA6IHQuY2x1Yi5sb25nTmFtZX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgey8qIFpvbmUgMjogTmF2aWdhdGlvbiBMaW5rcyAqL31cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTYgdGV4dC14cyBzbTp0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtbmV1dHJhbC02MDBcIj5cbiAgICAgICAgICB7bmF2SXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGFjdGl2ZVNlY3Rpb24gPT09IGl0ZW0uaWQ7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU5hdkNsaWNrKGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIHB5LTEgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6dGV4dC1uZXV0cmFsLTk1MCBmb2N1czpvdXRsaW5lLW5vbmUgJHtcbiAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gJ3RleHQtbmV1dHJhbC05NTAgZm9udC1zZW1pYm9sZCcgOiAndGV4dC1uZXV0cmFsLTYwMCdcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndoaXRlc3BhY2Utbm93cmFwXCI+e2l0ZW0ubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIHtpdGVtLmJhZGdlICE9PSB1bmRlZmluZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMS41IHRleHQteHMgZm9udC1tb25vIHB4LTEuNSBweS0wLjIgYmctbmV1dHJhbC05MDAgdGV4dC13aGl0ZSByb3VuZGVkIHRleHQtWzEwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmJhZGdlfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2lzQWN0aXZlICYmIChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIGgtMC41IGJnLW5ldXRyYWwtOTAwIHJvdW5kZWQtZnVsbFwiIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L25hdj5cblxuICAgICAgICB7LyogWm9uZSAzOiBBY3Rpb25zICsgTGFuZ3VhZ2UgU3dpdGNoZXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmZsZXggaXRlbXMtY2VudGVyIGdhcC0yLjVcIj5cbiAgICAgICAgICB7LyogTGFuZ3VhZ2UgU3dpdGNoZXIgUGlsbCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHAtMC41IGJnLW5ldXRyYWwtMTAwIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCB0ZXh0LXhzIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkxhbmd1YWdlQ2hhbmdlKCd2aScpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC0yIHB5LTEgcm91bmRlZCB0cmFuc2l0aW9uLWNvbG9ycyAke1xuICAgICAgICAgICAgICAgIGxhbmd1YWdlID09PSAndmknXG4gICAgICAgICAgICAgICAgICA/ICdiZy13aGl0ZSB0ZXh0LW5ldXRyYWwtOTUwIGZvbnQtYm9sZCBzaGFkb3ctMnhzJ1xuICAgICAgICAgICAgICAgICAgOiAndGV4dC1uZXV0cmFsLTUwMCBob3Zlcjp0ZXh0LW5ldXRyYWwtOTAwJ1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgdGl0bGU9XCJUaeG6v25nIFZp4buHdCAoVmlldG5hbWVzZSlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDwn4e78J+HsyBWSVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTGFuZ3VhZ2VDaGFuZ2UoJ2VuJyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTIgcHktMSByb3VuZGVkIHRyYW5zaXRpb24tY29sb3JzICR7XG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPT09ICdlbidcbiAgICAgICAgICAgICAgICAgID8gJ2JnLXdoaXRlIHRleHQtbmV1dHJhbC05NTAgZm9udC1ib2xkIHNoYWRvdy0yeHMnXG4gICAgICAgICAgICAgICAgICA6ICd0ZXh0LW5ldXRyYWwtNTAwIGhvdmVyOnRleHQtbmV1dHJhbC05MDAnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICB0aXRsZT1cIkVuZ2xpc2hcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDwn4es8J+HpyBFTlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5HaXRFeHBvcnR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHB4LTIuNSBweS0xLjUgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC04MDAgYmctd2hpdGUgaG92ZXI6YmctbmV1dHJhbC0xMDAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTMwMCByb3VuZGVkLW1kIHRyYW5zaXRpb24tY29sb3JzIHdoaXRlc3BhY2Utbm93cmFwIHNoYWRvdy0yeHNcIlxuICAgICAgICAgICAgdGl0bGU9XCJEb3dubG9hZCBjb2RlIGFuZCBwdXNoIHRvIHlvdXIgb3duIEdpdC9HaXRIdWIgcHJvamVjdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEdpdGh1YiBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICA8c3Bhbj57dC5uYXYuZXhwb3J0R2l0fTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uT3BlbkJsdWVwcmludH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMi41IHB5LTEuNSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtbmV1dHJhbC03MDAgYmctbmV1dHJhbC0xMDAgaG92ZXI6YmctbmV1dHJhbC0yMDAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTMwMCByb3VuZGVkLW1kIHRyYW5zaXRpb24tY29sb3JzIHdoaXRlc3BhY2Utbm93cmFwXCJcbiAgICAgICAgICAgIHRpdGxlPVwiTmV4dC5qcyArIE1vbmdvREIgKyBWZXJjZWwgQmx1ZXByaW50XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGVybWluYWwgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1uZXV0cmFsLTYwMFwiIC8+XG4gICAgICAgICAgICA8c3Bhbj5OZXh0LmpzPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTmF2Q2xpY2soJ2pvaW4nKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMuNSBweS0xLjUgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgYmctbmV1dHJhbC05MDAgaG92ZXI6YmctbmV1dHJhbC04MDAgcm91bmRlZC1tZCBzaGFkb3cteHMgdHJhbnNpdGlvbi1jb2xvcnMgd2hpdGVzcGFjZS1ub3dyYXBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0Lm5hdi5hcHBseU5vd31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIE1vYmlsZSBtZW51IHRvZ2dsZSAmIHF1aWNrIGxhbmd1YWdlICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgbGc6aGlkZGVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTAuNSBiZy1uZXV0cmFsLTEwMCByb3VuZGVkIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgdGV4dC1bMTFweF0gZm9udC1tb25vXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTGFuZ3VhZ2VDaGFuZ2UoJ3ZpJyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTEuNSBweS0wLjUgcm91bmRlZCAke1xuICAgICAgICAgICAgICAgIGxhbmd1YWdlID09PSAndmknID8gJ2JnLXdoaXRlIHRleHQtbmV1dHJhbC05NTAgZm9udC1ib2xkJyA6ICd0ZXh0LW5ldXRyYWwtNTAwJ1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVklcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkxhbmd1YWdlQ2hhbmdlKCdlbicpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC0xLjUgcHktMC41IHJvdW5kZWQgJHtcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSA9PT0gJ2VuJyA/ICdiZy13aGl0ZSB0ZXh0LW5ldXRyYWwtOTUwIGZvbnQtYm9sZCcgOiAndGV4dC1uZXV0cmFsLTUwMCdcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEVOXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZU1lbnVPcGVuKCFtb2JpbGVNZW51T3Blbil9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEuNSB0ZXh0LW5ldXRyYWwtNzAwIGhvdmVyOnRleHQtbmV1dHJhbC05NTAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttb2JpbGVNZW51T3BlbiA/IDxYIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPiA6IDxNZW51IGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIE1vYmlsZSBuYXYgZHJvcGRvd24gKi99XG4gICAgICB7bW9iaWxlTWVudU9wZW4gJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmhpZGRlbiBib3JkZXItdCBib3JkZXItbmV1dHJhbC0yMDAgYmctWyNmYWZhZjldIHB4LTQgcHQtMyBwYi01IHNwYWNlLXktMlwiPlxuICAgICAgICAgIHtuYXZJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVOYXZDbGljayhpdGVtLmlkKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIHRleHQtbGVmdCBweC0zIHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSByb3VuZGVkLW1kIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiAke1xuICAgICAgICAgICAgICAgIGFjdGl2ZVNlY3Rpb24gPT09IGl0ZW0uaWRcbiAgICAgICAgICAgICAgICAgID8gJ2JnLW5ldXRyYWwtMjAwIHRleHQtbmV1dHJhbC05NTAgZm9udC1zZW1pYm9sZCdcbiAgICAgICAgICAgICAgICAgIDogJ3RleHQtbmV1dHJhbC03MDAgaG92ZXI6YmctbmV1dHJhbC0xMDAnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgIHtpdGVtLmJhZGdlICE9PSB1bmRlZmluZWQgJiYgKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tb25vIHB4LTEuNSBweS0wLjUgYmctbmV1dHJhbC05MDAgdGV4dC13aGl0ZSByb3VuZGVkIHRleHQtWzEwcHhdXCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5iYWRnZX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIgYm9yZGVyLXQgYm9yZGVyLW5ldXRyYWwtMjAwIGZsZXggZmxleC1jb2wgZ2FwLTJcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIG9uT3BlbkdpdEV4cG9ydCgpO1xuICAgICAgICAgICAgICAgIHNldE1vYmlsZU1lbnVPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHB5LTIgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC05MDAgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTMwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEdpdGh1YiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAge3QubmF2LmV4cG9ydEdpdH1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgb25PcGVuQmx1ZXByaW50KCk7XG4gICAgICAgICAgICAgICAgc2V0TW9iaWxlTWVudU9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgcHktMiB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtbmV1dHJhbC04MDAgYmctbmV1dHJhbC0xMDAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTMwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRlcm1pbmFsIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICB7dC5uYXYuYmx1ZXByaW50fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU5hdkNsaWNrKCdqb2luJyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0yIHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBiZy1uZXV0cmFsLTkwMCByb3VuZGVkLW1kIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3QubmF2LmFwcGx5Tm93fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG4iXX0=