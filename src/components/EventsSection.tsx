const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=83e0c204";
import { MapPin, Users, Check, Video } from "/node_modules/.vite/deps/lucide-react.js?v=83e0c204";
import { translations } from "/src/data/translations.ts";
var _jsxFileName = "/app/applet/src/components/EventsSection.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=83e0c204";
export const EventsSection = ({ events, language, onToggleRsvp, onManageEvents }) => {
	const [filterType, setFilterType] = useState("upcoming");
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [rsvpEmail, setRsvpEmail] = useState({});
	const [rsvpMessage, setRsvpMessage] = useState({});
	const t = translations[language];
	const categories = [
		"All",
		"Workshop",
		"Hackathon",
		"Tech Talk",
		"Project Demo"
	];
	const filteredEvents = events.filter((ev) => {
		const matchesTime = filterType === "upcoming" ? ev.status === "Upcoming" : ev.status === "Past";
		const matchesCategory = selectedCategory === "All" ? true : ev.category === selectedCategory;
		return matchesTime && matchesCategory;
	});
	const handleRsvpSubmit = (eventId) => {
		const email = (rsvpEmail[eventId] || "").trim();
		if (!email || !email.includes("@")) {
			setRsvpMessage((prev) => ({
				...prev,
				[eventId]: {
					text: language === "vi" ? "Vui lòng nhập đúng email sinh viên trường." : "Please enter a valid university email address.",
					isError: true
				}
			}));
			return;
		}
		const res = onToggleRsvp(eventId, email);
		if (!res.success) {
			setRsvpMessage((prev) => ({
				...prev,
				[eventId]: {
					text: language === "vi" ? "Sự kiện đã đạt số lượng đăng ký tối đa!" : "Event has reached maximum capacity!",
					isError: true
				}
			}));
		} else {
			setRsvpMessage((prev) => ({
				...prev,
				[eventId]: {
					text: res.rsvped ? t.events.rsvpSuccess : t.events.rsvpCancelled,
					isError: false
				}
			}));
		}
	};
	return /* @__PURE__ */ _jsxDEV("section", {
		id: "events",
		className: "py-16 md:py-20 border-b border-neutral-200",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8",
					children: [/* @__PURE__ */ _jsxDEV("div", { children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 font-mono",
							children: t.events.sectionNum
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 72,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl",
							children: t.events.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 75,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "mt-2 text-neutral-600 text-sm sm:text-base",
							children: t.events.subtitle
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 78,
							columnNumber: 13
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-3",
						children: /* @__PURE__ */ _jsxDEV("button", {
							onClick: onManageEvents,
							className: "px-3.5 py-2 text-xs font-medium text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-md transition-colors whitespace-nowrap",
							children: t.events.crudBtn
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 84,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 83,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center p-1 bg-neutral-100 rounded-lg border border-neutral-200",
						children: [/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setFilterType("upcoming"),
							className: `px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${filterType === "upcoming" ? "bg-white text-neutral-900 shadow-xs font-semibold" : "text-neutral-600 hover:text-neutral-900"}`,
							children: t.events.upcomingTab
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 97,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setFilterType("past"),
							className: `px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${filterType === "past" ? "bg-white text-neutral-900 shadow-xs font-semibold" : "text-neutral-600 hover:text-neutral-900"}`,
							children: t.events.pastTab
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 107,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 96,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex flex-wrap items-center gap-1.5",
						children: categories.map((cat) => /* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setSelectedCategory(cat),
							className: `px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${selectedCategory === cat ? "bg-neutral-900 text-white font-medium" : "bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300"}`,
							children: cat === "All" ? language === "vi" ? "Tất cả chủ đề" : "All" : cat
						}, cat, false, {
							fileName: _jsxFileName,
							lineNumber: 122,
							columnNumber: 15
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 120,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 94,
					columnNumber: 9
				}, this),
				filteredEvents.length === 0 ? /* @__PURE__ */ _jsxDEV("div", {
					className: "text-center py-12 bg-white border border-neutral-200 rounded-lg",
					children: /* @__PURE__ */ _jsxDEV("p", {
						className: "text-sm text-neutral-500",
						children: language === "vi" ? "Chưa có sự kiện nào trong mục này." : `No ${filterType} events found in this category.`
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 140,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 139,
					columnNumber: 11
				}, this) : /* @__PURE__ */ _jsxDEV("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-6",
					children: filteredEvents.map((event) => {
						const spotsLeft = Math.max(0, event.capacity - event.rsvps.length);
						const message = rsvpMessage[event.id];
						return /* @__PURE__ */ _jsxDEV("div", {
							className: "bg-white border border-neutral-200 rounded-lg p-6 flex flex-col justify-between hover:border-neutral-300 transition-colors",
							children: [/* @__PURE__ */ _jsxDEV("div", { children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-2 text-xs text-neutral-500 mb-3 flex-wrap font-mono",
									children: [
										/* @__PURE__ */ _jsxDEV("span", {
											className: "font-semibold text-neutral-800",
											children: event.category
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 158,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											"aria-hidden": "true",
											children: "·"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 159,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "tabular-nums",
											children: event.date
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 160,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											"aria-hidden": "true",
											children: "·"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 161,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "tabular-nums",
											children: event.time
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 162,
											columnNumber: 23
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 157,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ _jsxDEV("h3", {
									className: "text-lg font-bold text-neutral-950 leading-snug mb-3",
									children: event.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 165,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-sm text-neutral-600 leading-relaxed mb-4",
									children: event.description
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 169,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "space-y-1.5 text-xs text-neutral-600 mb-4 pt-3 border-t border-neutral-100",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										children: [event.isOnline ? /* @__PURE__ */ _jsxDEV(Video, { className: "w-3.5 h-3.5 text-neutral-400" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 177,
											columnNumber: 27
										}, this) : /* @__PURE__ */ _jsxDEV(MapPin, { className: "w-3.5 h-3.5 text-neutral-400" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 179,
											columnNumber: 27
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: event.location }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 181,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 175,
										columnNumber: 23
									}, this), event.speakerName && /* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV(Users, { className: "w-3.5 h-3.5 text-neutral-400" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 185,
											columnNumber: 27
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: [
											t.events.ledBy,
											" ",
											/* @__PURE__ */ _jsxDEV("span", {
												className: "font-medium text-neutral-800",
												children: event.speakerName
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 187,
												columnNumber: 46
											}, this),
											" (",
											event.speakerRole,
											")"
										] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 186,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 184,
										columnNumber: 25
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 174,
									columnNumber: 21
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 155,
								columnNumber: 19
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "pt-4 border-t border-neutral-100",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between text-xs text-neutral-500 mb-3 font-mono",
									children: [/* @__PURE__ */ _jsxDEV("span", { children: [
										t.events.capacityLabel,
										" ",
										/* @__PURE__ */ _jsxDEV("strong", {
											className: "text-neutral-900 tabular-nums",
											children: [
												event.rsvps.length,
												"/",
												event.capacity
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 199,
											columnNumber: 25
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 197,
										columnNumber: 23
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: spotsLeft <= 5 && spotsLeft > 0 ? "text-amber-600 font-semibold" : "",
										children: spotsLeft === 0 ? t.events.full : `${spotsLeft} ${t.events.seatsAvailable}`
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 203,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 196,
									columnNumber: 21
								}, this), filterType === "upcoming" ? /* @__PURE__ */ _jsxDEV("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ _jsxDEV("input", {
											type: "email",
											placeholder: t.events.rsvpPlaceholder,
											value: rsvpEmail[event.id] || "",
											onChange: (e) => setRsvpEmail((prev) => ({
												...prev,
												[event.id]: e.target.value
											})),
											className: "flex-1 px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-800"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 211,
											columnNumber: 27
										}, this), /* @__PURE__ */ _jsxDEV("button", {
											onClick: () => handleRsvpSubmit(event.id),
											disabled: spotsLeft === 0 && !event.rsvps.includes((rsvpEmail[event.id] || "").trim().toLowerCase()),
											className: "px-3 py-1.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors whitespace-nowrap",
											children: t.events.rsvpBtn
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 223,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 210,
										columnNumber: 25
									}, this), message && /* @__PURE__ */ _jsxDEV("div", {
										className: `text-xs px-2.5 py-1.5 rounded-md flex items-center gap-1.5 ${message.isError ? "bg-red-50 text-red-700" : "bg-emerald-50 text-emerald-800"}`,
										children: [/* @__PURE__ */ _jsxDEV(Check, { className: "w-3.5 h-3.5 shrink-0" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 240,
											columnNumber: 29
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: message.text }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 241,
											columnNumber: 29
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 233,
										columnNumber: 27
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 209,
									columnNumber: 23
								}, this) : /* @__PURE__ */ _jsxDEV("div", {
									className: "text-xs text-neutral-400 italic",
									children: [
										t.events.archivedNotice,
										" (",
										event.date,
										")"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 246,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 195,
								columnNumber: 19
							}, this)]
						}, event.id, true, {
							fileName: _jsxFileName,
							lineNumber: 151,
							columnNumber: 17
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 145,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 68,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 67,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QUUsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDO1dBQ25HLFdBQVU7cUJBRVQsRUFBRSxPQUFPO1VBQ0o7Ozs7a0JBQ0w7Ozs7O21CQUVKLFdBQ0Msd0JBQUMsT0FBRDtVQUNFLFdBQVcsOERBQ1QsUUFBUSxVQUNKLDJCQUNBO29CQUpSLENBT0Usd0JBQUMsT0FBRCxFQUFPLFdBQVUsdUJBQXdCOzs7O29CQUN6Qyx3QkFBQyxRQUFELFlBQU8sUUFBUSxLQUFXOzs7O2tCQUN2Qjs7Ozs7aUJBRUo7Ozs7O21CQUVMLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUFmO1VBQ0csRUFBRSxPQUFPO1VBQWU7VUFBRyxNQUFNO1VBQUs7U0FDcEM7Ozs7O2dCQUVKOzs7OztlQUNGO1NBbkdFLE1BQU07Ozs7YUFtR1I7S0FFVCxDQUFDO0lBQ0U7Ozs7O0dBRUo7Ozs7OztDQUNFOzs7OztBQUViIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkV2ZW50c1NlY3Rpb24udHN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhbGVuZGFyLCBDbG9jaywgTWFwUGluLCBVc2VycywgQ2hlY2ssIEFsZXJ0Q2lyY2xlLCBWaWRlbyB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBDbHViRXZlbnQsIEV2ZW50Q2F0ZWdvcnkgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBMYW5ndWFnZSwgdHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vZGF0YS90cmFuc2xhdGlvbnMnO1xuXG5pbnRlcmZhY2UgRXZlbnRzU2VjdGlvblByb3BzIHtcbiAgZXZlbnRzOiBDbHViRXZlbnRbXTtcbiAgbGFuZ3VhZ2U6IExhbmd1YWdlO1xuICBvblRvZ2dsZVJzdnA6IChldmVudElkOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcpID0+IHsgc3VjY2VzczogYm9vbGVhbjsgcnN2cGVkOiBib29sZWFuOyBjb3VudDogbnVtYmVyIH07XG4gIG9uTWFuYWdlRXZlbnRzOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgRXZlbnRzU2VjdGlvbjogUmVhY3QuRkM8RXZlbnRzU2VjdGlvblByb3BzPiA9ICh7XG4gIGV2ZW50cyxcbiAgbGFuZ3VhZ2UsXG4gIG9uVG9nZ2xlUnN2cCxcbiAgb25NYW5hZ2VFdmVudHMsXG59KSA9PiB7XG4gIGNvbnN0IFtmaWx0ZXJUeXBlLCBzZXRGaWx0ZXJUeXBlXSA9IHVzZVN0YXRlPCd1cGNvbWluZycgfCAncGFzdCc+KCd1cGNvbWluZycpO1xuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCdBbGwnKTtcbiAgY29uc3QgW3JzdnBFbWFpbCwgc2V0UnN2cEVtYWlsXSA9IHVzZVN0YXRlPHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0+KHt9KTtcbiAgY29uc3QgW3JzdnBNZXNzYWdlLCBzZXRSc3ZwTWVzc2FnZV0gPSB1c2VTdGF0ZTx7IFtrZXk6IHN0cmluZ106IHsgdGV4dDogc3RyaW5nOyBpc0Vycm9yPzogYm9vbGVhbiB9IH0+KHt9KTtcbiAgY29uc3QgdCA9IHRyYW5zbGF0aW9uc1tsYW5ndWFnZV07XG5cbiAgY29uc3QgY2F0ZWdvcmllcyA9IFsnQWxsJywgJ1dvcmtzaG9wJywgJ0hhY2thdGhvbicsICdUZWNoIFRhbGsnLCAnUHJvamVjdCBEZW1vJ107XG5cbiAgY29uc3QgZmlsdGVyZWRFdmVudHMgPSBldmVudHMuZmlsdGVyKChldikgPT4ge1xuICAgIGNvbnN0IG1hdGNoZXNUaW1lID0gZmlsdGVyVHlwZSA9PT0gJ3VwY29taW5nJyA/IGV2LnN0YXR1cyA9PT0gJ1VwY29taW5nJyA6IGV2LnN0YXR1cyA9PT0gJ1Bhc3QnO1xuICAgIGNvbnN0IG1hdGNoZXNDYXRlZ29yeSA9IHNlbGVjdGVkQ2F0ZWdvcnkgPT09ICdBbGwnID8gdHJ1ZSA6IGV2LmNhdGVnb3J5ID09PSBzZWxlY3RlZENhdGVnb3J5O1xuICAgIHJldHVybiBtYXRjaGVzVGltZSAmJiBtYXRjaGVzQ2F0ZWdvcnk7XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVJzdnBTdWJtaXQgPSAoZXZlbnRJZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZW1haWwgPSAocnN2cEVtYWlsW2V2ZW50SWRdIHx8ICcnKS50cmltKCk7XG4gICAgaWYgKCFlbWFpbCB8fCAhZW1haWwuaW5jbHVkZXMoJ0AnKSkge1xuICAgICAgc2V0UnN2cE1lc3NhZ2UoKHByZXYpID0+ICh7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIFtldmVudElkXToge1xuICAgICAgICAgIHRleHQ6IGxhbmd1YWdlID09PSAndmknID8gJ1Z1aSBsw7JuZyBuaOG6rXAgxJHDum5nIGVtYWlsIHNpbmggdmnDqm4gdHLGsOG7nW5nLicgOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgdW5pdmVyc2l0eSBlbWFpbCBhZGRyZXNzLicsXG4gICAgICAgICAgaXNFcnJvcjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZXMgPSBvblRvZ2dsZVJzdnAoZXZlbnRJZCwgZW1haWwpO1xuICAgIGlmICghcmVzLnN1Y2Nlc3MpIHtcbiAgICAgIHNldFJzdnBNZXNzYWdlKChwcmV2KSA9PiAoe1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICBbZXZlbnRJZF06IHtcbiAgICAgICAgICB0ZXh0OiBsYW5ndWFnZSA9PT0gJ3ZpJyA/ICdT4buxIGtp4buHbiDEkcOjIMSR4bqhdCBz4buRIGzGsOG7o25nIMSRxINuZyBrw70gdOG7kWkgxJFhIScgOiAnRXZlbnQgaGFzIHJlYWNoZWQgbWF4aW11bSBjYXBhY2l0eSEnLFxuICAgICAgICAgIGlzRXJyb3I6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFJzdnBNZXNzYWdlKChwcmV2KSA9PiAoe1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICBbZXZlbnRJZF06IHtcbiAgICAgICAgICB0ZXh0OiByZXMucnN2cGVkID8gdC5ldmVudHMucnN2cFN1Y2Nlc3MgOiB0LmV2ZW50cy5yc3ZwQ2FuY2VsbGVkLFxuICAgICAgICAgIGlzRXJyb3I6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSkpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwiZXZlbnRzXCIgY2xhc3NOYW1lPVwicHktMTYgbWQ6cHktMjAgYm9yZGVyLWIgYm9yZGVyLW5ldXRyYWwtMjAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgIHsvKiBTZWN0aW9uIEhlYWRlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOml0ZW1zLWVuZCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTYgbWItOFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBtYi0yIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICB7dC5ldmVudHMuc2VjdGlvbk51bX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LW5ldXRyYWwtOTUwIHNtOnRleHQtNHhsXCI+XG4gICAgICAgICAgICAgIHt0LmV2ZW50cy50aXRsZX1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtbmV1dHJhbC02MDAgdGV4dC1zbSBzbTp0ZXh0LWJhc2VcIj5cbiAgICAgICAgICAgICAge3QuZXZlbnRzLnN1YnRpdGxlfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbk1hbmFnZUV2ZW50c31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMy41IHB5LTIgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LW5ldXRyYWwtODAwIGJnLW5ldXRyYWwtMTAwIGhvdmVyOmJnLW5ldXRyYWwtMjAwIGJvcmRlciBib3JkZXItbmV1dHJhbC0zMDAgcm91bmRlZC1tZCB0cmFuc2l0aW9uLWNvbG9ycyB3aGl0ZXNwYWNlLW5vd3JhcFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0LmV2ZW50cy5jcnVkQnRufVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBUYWIgJiBDYXRlZ29yeSBGaWx0ZXJzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtc3RyZXRjaCBzbTppdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00IG1iLThcIj5cbiAgICAgICAgICB7LyogVXBjb21pbmcgdnMgUGFzdCBUb2dnbGUgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTEgYmctbmV1dHJhbC0xMDAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlclR5cGUoJ3VwY29taW5nJyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTMuNSBweS0xLjUgdGV4dC14cyBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRyYW5zaXRpb24tY29sb3JzIHdoaXRlc3BhY2Utbm93cmFwICR7XG4gICAgICAgICAgICAgICAgZmlsdGVyVHlwZSA9PT0gJ3VwY29taW5nJ1xuICAgICAgICAgICAgICAgICAgPyAnYmctd2hpdGUgdGV4dC1uZXV0cmFsLTkwMCBzaGFkb3cteHMgZm9udC1zZW1pYm9sZCdcbiAgICAgICAgICAgICAgICAgIDogJ3RleHQtbmV1dHJhbC02MDAgaG92ZXI6dGV4dC1uZXV0cmFsLTkwMCdcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0LmV2ZW50cy51cGNvbWluZ1RhYn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXJUeXBlKCdwYXN0Jyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTMuNSBweS0xLjUgdGV4dC14cyBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRyYW5zaXRpb24tY29sb3JzIHdoaXRlc3BhY2Utbm93cmFwICR7XG4gICAgICAgICAgICAgICAgZmlsdGVyVHlwZSA9PT0gJ3Bhc3QnXG4gICAgICAgICAgICAgICAgICA/ICdiZy13aGl0ZSB0ZXh0LW5ldXRyYWwtOTAwIHNoYWRvdy14cyBmb250LXNlbWlib2xkJ1xuICAgICAgICAgICAgICAgICAgOiAndGV4dC1uZXV0cmFsLTYwMCBob3Zlcjp0ZXh0LW5ldXRyYWwtOTAwJ1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3QuZXZlbnRzLnBhc3RUYWJ9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBDYXRlZ29yeSBGaWx0ZXIgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXQpID0+IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGtleT17Y2F0fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ2F0ZWdvcnkoY2F0KX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC0zIHB5LTEuNSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdHJhbnNpdGlvbi1jb2xvcnMgd2hpdGVzcGFjZS1ub3dyYXAgJHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnkgPT09IGNhdFxuICAgICAgICAgICAgICAgICAgICA/ICdiZy1uZXV0cmFsLTkwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtJ1xuICAgICAgICAgICAgICAgICAgICA6ICdiZy13aGl0ZSB0ZXh0LW5ldXRyYWwtNjAwIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgaG92ZXI6Ym9yZGVyLW5ldXRyYWwtMzAwJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NhdCA9PT0gJ0FsbCcgPyAobGFuZ3VhZ2UgPT09ICd2aScgPyAnVOG6pXQgY+G6oyBjaOG7pyDEkeG7gScgOiAnQWxsJykgOiBjYXR9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBFdmVudHMgR3JpZCAqL31cbiAgICAgICAge2ZpbHRlcmVkRXZlbnRzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTEyIGJnLXdoaXRlIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW5ldXRyYWwtNTAwXCI+XG4gICAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3ZpJyA/ICdDaMawYSBjw7Mgc+G7sSBraeG7h24gbsOgbyB0cm9uZyBt4bulYyBuw6B5LicgOiBgTm8gJHtmaWx0ZXJUeXBlfSBldmVudHMgZm91bmQgaW4gdGhpcyBjYXRlZ29yeS5gfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNlwiPlxuICAgICAgICAgICAge2ZpbHRlcmVkRXZlbnRzLm1hcCgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3BvdHNMZWZ0ID0gTWF0aC5tYXgoMCwgZXZlbnQuY2FwYWNpdHkgLSBldmVudC5yc3Zwcy5sZW5ndGgpO1xuICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gcnN2cE1lc3NhZ2VbZXZlbnQuaWRdO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtldmVudC5pZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1sZyBwLTYgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gaG92ZXI6Ym9yZGVyLW5ldXRyYWwtMzAwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7LyogWmVyby1QaWxsIENsZWFuIFVuYm94ZWQgTWV0YWRhdGEgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC14cyB0ZXh0LW5ldXRyYWwtNTAwIG1iLTMgZmxleC13cmFwIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1uZXV0cmFsLTgwMFwiPntldmVudC5jYXRlZ29yeX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+wrc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFidWxhci1udW1zXCI+e2V2ZW50LmRhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsK3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhYnVsYXItbnVtc1wiPntldmVudC50aW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtbmV1dHJhbC05NTAgbGVhZGluZy1zbnVnIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7ZXZlbnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW5ldXRyYWwtNjAwIGxlYWRpbmctcmVsYXhlZCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2V2ZW50LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIFZlbnVlICYgU3BlYWtlciBEZXRhaWxzICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMS41IHRleHQteHMgdGV4dC1uZXV0cmFsLTYwMCBtYi00IHB0LTMgYm9yZGVyLXQgYm9yZGVyLW5ldXRyYWwtMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2V2ZW50LmlzT25saW5lID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlkZW8gY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1uZXV0cmFsLTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFwUGluIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtbmV1dHJhbC00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntldmVudC5sb2NhdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAge2V2ZW50LnNwZWFrZXJOYW1lICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJzIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtbmV1dHJhbC00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dC5ldmVudHMubGVkQnl9IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtbmV1dHJhbC04MDBcIj57ZXZlbnQuc3BlYWtlck5hbWV9PC9zcGFuPiAoe2V2ZW50LnNwZWFrZXJSb2xlfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgey8qIEJvdHRvbTogQ2FwYWNpdHkgJiBJbnRlcmFjdGl2ZSBSU1ZQICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IGJvcmRlci10IGJvcmRlci1uZXV0cmFsLTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIHRleHQtbmV1dHJhbC01MDAgbWItMyBmb250LW1vbm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0LmV2ZW50cy5jYXBhY2l0eUxhYmVsfXsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC05MDAgdGFidWxhci1udW1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtldmVudC5yc3Zwcy5sZW5ndGh9L3tldmVudC5jYXBhY2l0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Nwb3RzTGVmdCA8PSA1ICYmIHNwb3RzTGVmdCA+IDAgPyAndGV4dC1hbWJlci02MDAgZm9udC1zZW1pYm9sZCcgOiAnJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3BvdHNMZWZ0ID09PSAwID8gdC5ldmVudHMuZnVsbCA6IGAke3Nwb3RzTGVmdH0gJHt0LmV2ZW50cy5zZWF0c0F2YWlsYWJsZX1gfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAge2ZpbHRlclR5cGUgPT09ICd1cGNvbWluZycgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0LmV2ZW50cy5yc3ZwUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JzdnBFbWFpbFtldmVudC5pZF0gfHwgJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UnN2cEVtYWlsKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZXZlbnQuaWRdOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHgtMyBweS0xLjUgdGV4dC14cyBiZy1uZXV0cmFsLTUwIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctbmV1dHJhbC04MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUnN2cFN1Ym1pdChldmVudC5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Nwb3RzTGVmdCA9PT0gMCAmJiAhZXZlbnQucnN2cHMuaW5jbHVkZXMoKHJzdnBFbWFpbFtldmVudC5pZF0gfHwgJycpLnRyaW0oKS50b0xvd2VyQ2FzZSgpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0zIHB5LTEuNSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBiZy1uZXV0cmFsLTkwMCBob3ZlcjpiZy1uZXV0cmFsLTgwMCBkaXNhYmxlZDpvcGFjaXR5LTUwIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCByb3VuZGVkLW1kIHRyYW5zaXRpb24tY29sb3JzIHdoaXRlc3BhY2Utbm93cmFwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0LmV2ZW50cy5yc3ZwQnRufVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXhzIHB4LTIuNSBweS0xLjUgcm91bmRlZC1tZCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmlzRXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctcmVkLTUwIHRleHQtcmVkLTcwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctZW1lcmFsZC01MCB0ZXh0LWVtZXJhbGQtODAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bWVzc2FnZS50ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW5ldXRyYWwtNDAwIGl0YWxpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3QuZXZlbnRzLmFyY2hpdmVkTm90aWNlfSAoe2V2ZW50LmRhdGV9KVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iXX0=