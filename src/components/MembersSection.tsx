const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"]; const useMemo = __vite__cjsImport0_react["useMemo"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=83e0c204";
import { Search, Github, Linkedin, Mail } from "/node_modules/.vite/deps/lucide-react.js?v=83e0c204";
import { translations } from "/src/data/translations.ts";
var _jsxFileName = "/app/applet/src/components/MembersSection.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=83e0c204";
export const MembersSection = ({ members, language, onManageMembers, onJoinClick }) => {
	const [selectedTrack, setSelectedTrack] = useState("All");
	const [searchQuery, setSearchQuery] = useState("");
	const t = translations[language];
	const tracks = [
		{
			key: "All",
			label: t.members.all
		},
		{
			key: "Software & AI",
			label: "Software & AI"
		},
		{
			key: "Product & UI/UX",
			label: "Product & UI/UX"
		},
		{
			key: "Hardware & Robotics",
			label: "Hardware & Robotics"
		},
		{
			key: "Community & Ops",
			label: language === "vi" ? "Học thuật & Ops" : "Academic & Ops"
		},
		{
			key: "Alumni",
			label: language === "vi" ? "Cựu thành viên" : "Alumni"
		}
	];
	const filteredMembers = useMemo(() => {
		return members.filter((member) => {
			const matchesTrack = selectedTrack === "All" ? true : selectedTrack === "Alumni" ? member.status === "Alumni" || member.role === "Alumni" : member.track === selectedTrack;
			const q = searchQuery.toLowerCase().trim();
			const matchesSearch = !q || member.name.toLowerCase().includes(q) || member.role.toLowerCase().includes(q) || member.bio.toLowerCase().includes(q) || member.skills.some((s) => s.toLowerCase().includes(q));
			return matchesTrack && matchesSearch;
		});
	}, [
		members,
		selectedTrack,
		searchQuery
	]);
	return /* @__PURE__ */ _jsxDEV("section", {
		id: "members",
		className: "py-16 md:py-20 border-b border-neutral-200",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8",
					children: [/* @__PURE__ */ _jsxDEV("div", { children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 font-mono",
							children: t.members.sectionNum
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl",
							children: t.members.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "mt-2 text-neutral-600 text-sm sm:text-base",
							children: t.members.subtitle
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 65,
							columnNumber: 13
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 58,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ _jsxDEV("button", {
							onClick: onManageMembers,
							className: "px-3.5 py-2 text-xs font-medium text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-md transition-colors whitespace-nowrap",
							children: t.members.crudBtn
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 71,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("button", {
							onClick: onJoinClick,
							className: "px-3.5 py-2 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors whitespace-nowrap",
							children: t.members.joinBtn
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 77,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100/90 rounded-lg border border-neutral-200",
						children: tracks.map((track) => /* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setSelectedTrack(track.key),
							className: `px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${selectedTrack === track.key ? "bg-white text-neutral-900 shadow-xs font-semibold" : "text-neutral-600 hover:text-neutral-900"}`,
							children: track.label
						}, track.key, false, {
							fileName: _jsxFileName,
							lineNumber: 90,
							columnNumber: 15
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 88,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "relative min-w-[240px]",
						children: [/* @__PURE__ */ _jsxDEV(Search, { className: "w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("input", {
							type: "text",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							placeholder: t.members.searchPlaceholder,
							className: "w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-800 text-neutral-900"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 107,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 87,
					columnNumber: 9
				}, this),
				filteredMembers.length === 0 ? /* @__PURE__ */ _jsxDEV("div", {
					className: "text-center py-12 bg-white border border-neutral-200 rounded-lg",
					children: [/* @__PURE__ */ _jsxDEV("p", {
						className: "text-sm text-neutral-500",
						children: t.members.noResult
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 120,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: () => {
							setSelectedTrack("All");
							setSearchQuery("");
						},
						className: "mt-3 text-xs text-neutral-900 underline hover:text-neutral-700",
						children: t.members.resetFilter
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 121,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 119,
					columnNumber: 11
				}, this) : /* @__PURE__ */ _jsxDEV("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: filteredMembers.map((member) => /* @__PURE__ */ _jsxDEV("div", {
						className: "bg-white border border-neutral-200 rounded-lg p-6 flex flex-col justify-between hover:border-neutral-300 transition-colors",
						children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-start gap-4 mb-4",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: `w-12 h-12 rounded-lg bg-gradient-to-br ${member.avatarColor} text-white flex items-center justify-center font-bold text-base shrink-0 shadow-xs`,
								children: member.name.split(" ").map((n) => n[0]).join("")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 141,
								columnNumber: 21
							}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
								className: "text-base font-semibold text-neutral-950 leading-tight",
								children: member.name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 150,
								columnNumber: 23
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-1.5 text-xs text-neutral-500 mt-1 flex-wrap",
								children: [
									/* @__PURE__ */ _jsxDEV("span", {
										className: "font-medium text-neutral-700",
										children: member.role
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 155,
										columnNumber: 25
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										"aria-hidden": "true",
										children: "·"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 156,
										columnNumber: 25
									}, this),
									/* @__PURE__ */ _jsxDEV("span", { children: member.track }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 157,
										columnNumber: 25
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										"aria-hidden": "true",
										children: "·"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 158,
										columnNumber: 25
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										className: "font-mono tabular-nums",
										children: [
											t.members.classOf,
											" ",
											member.graduationYear
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 159,
										columnNumber: 25
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 154,
								columnNumber: 23
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 149,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 140,
							columnNumber: 19
						}, this), /* @__PURE__ */ _jsxDEV("p", {
							className: "text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4",
							children: member.bio
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 165,
							columnNumber: 19
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 138,
							columnNumber: 17
						}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs text-neutral-500 mb-4 pt-3 border-t border-neutral-100",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1.5",
								children: t.members.focusAreas
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 173,
								columnNumber: 21
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "flex flex-wrap gap-1.5 text-neutral-700",
								children: member.skills.map((skill, idx) => /* @__PURE__ */ _jsxDEV("span", {
									className: "font-mono text-xs",
									children: [skill, idx < member.skills.length - 1 ? " ·" : ""]
								}, skill, true, {
									fileName: _jsxFileName,
									lineNumber: 178,
									columnNumber: 25
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 176,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 172,
							columnNumber: 19
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center justify-between pt-3 border-t border-neutral-100 text-neutral-500 text-xs",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "font-mono text-[11px] text-neutral-400",
								children: member.status === "Active" ? t.members.statusActive : member.status
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 188,
								columnNumber: 21
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-3",
								children: [
									member.githubUrl && /* @__PURE__ */ _jsxDEV("a", {
										href: member.githubUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "hover:text-neutral-900 transition-colors",
										title: "GitHub Profile",
										children: /* @__PURE__ */ _jsxDEV(Github, { className: "w-4 h-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 201,
											columnNumber: 27
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 194,
										columnNumber: 25
									}, this),
									member.linkedinUrl && /* @__PURE__ */ _jsxDEV("a", {
										href: member.linkedinUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "hover:text-neutral-900 transition-colors",
										title: "LinkedIn Profile",
										children: /* @__PURE__ */ _jsxDEV(Linkedin, { className: "w-4 h-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 212,
											columnNumber: 27
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 205,
										columnNumber: 25
									}, this),
									/* @__PURE__ */ _jsxDEV("a", {
										href: `mailto:${member.email}`,
										className: "hover:text-neutral-900 transition-colors",
										title: member.email,
										children: /* @__PURE__ */ _jsxDEV(Mail, { className: "w-4 h-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 220,
											columnNumber: 25
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 215,
										columnNumber: 23
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 192,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 187,
							columnNumber: 19
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 170,
							columnNumber: 17
						}, this)]
					}, member.id, true, {
						fileName: _jsxFileName,
						lineNumber: 134,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 132,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 55,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 54,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWFyY2gsIEdpdGh1YiwgTGlua2VkaW4sIE1haWwgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgQ2x1Yk1lbWJlciwgVHJhY2sgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBMYW5ndWFnZSwgdHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vZGF0YS90cmFuc2xhdGlvbnMnO1xuXG5pbnRlcmZhY2UgTWVtYmVyc1NlY3Rpb25Qcm9wcyB7XG4gIG1lbWJlcnM6IENsdWJNZW1iZXJbXTtcbiAgbGFuZ3VhZ2U6IExhbmd1YWdlO1xuICBvbk1hbmFnZU1lbWJlcnM6ICgpID0+IHZvaWQ7XG4gIG9uSm9pbkNsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgTWVtYmVyc1NlY3Rpb246IFJlYWN0LkZDPE1lbWJlcnNTZWN0aW9uUHJvcHM+ID0gKHtcbiAgbWVtYmVycyxcbiAgbGFuZ3VhZ2UsXG4gIG9uTWFuYWdlTWVtYmVycyxcbiAgb25Kb2luQ2xpY2ssXG59KSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZFRyYWNrLCBzZXRTZWxlY3RlZFRyYWNrXSA9IHVzZVN0YXRlPHN0cmluZz4oJ0FsbCcpO1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgdCA9IHRyYW5zbGF0aW9uc1tsYW5ndWFnZV07XG5cbiAgY29uc3QgdHJhY2tzOiB7IGtleTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXSA9IFtcbiAgICB7IGtleTogJ0FsbCcsIGxhYmVsOiB0Lm1lbWJlcnMuYWxsIH0sXG4gICAgeyBrZXk6ICdTb2Z0d2FyZSAmIEFJJywgbGFiZWw6ICdTb2Z0d2FyZSAmIEFJJyB9LFxuICAgIHsga2V5OiAnUHJvZHVjdCAmIFVJL1VYJywgbGFiZWw6ICdQcm9kdWN0ICYgVUkvVVgnIH0sXG4gICAgeyBrZXk6ICdIYXJkd2FyZSAmIFJvYm90aWNzJywgbGFiZWw6ICdIYXJkd2FyZSAmIFJvYm90aWNzJyB9LFxuICAgIHsga2V5OiAnQ29tbXVuaXR5ICYgT3BzJywgbGFiZWw6IGxhbmd1YWdlID09PSAndmknID8gJ0jhu41jIHRodeG6rXQgJiBPcHMnIDogJ0FjYWRlbWljICYgT3BzJyB9LFxuICAgIHsga2V5OiAnQWx1bW5pJywgbGFiZWw6IGxhbmd1YWdlID09PSAndmknID8gJ0Phu7F1IHRow6BuaCB2acOqbicgOiAnQWx1bW5pJyB9LFxuICBdO1xuXG4gIGNvbnN0IGZpbHRlcmVkTWVtYmVycyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBtZW1iZXJzLmZpbHRlcigobWVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVzVHJhY2sgPVxuICAgICAgICBzZWxlY3RlZFRyYWNrID09PSAnQWxsJ1xuICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgIDogc2VsZWN0ZWRUcmFjayA9PT0gJ0FsdW1uaSdcbiAgICAgICAgICA/IG1lbWJlci5zdGF0dXMgPT09ICdBbHVtbmknIHx8IG1lbWJlci5yb2xlID09PSAnQWx1bW5pJ1xuICAgICAgICAgIDogbWVtYmVyLnRyYWNrID09PSBzZWxlY3RlZFRyYWNrO1xuXG4gICAgICBjb25zdCBxID0gc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgICBjb25zdCBtYXRjaGVzU2VhcmNoID1cbiAgICAgICAgIXEgfHxcbiAgICAgICAgbWVtYmVyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxKSB8fFxuICAgICAgICBtZW1iZXIucm9sZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHEpIHx8XG4gICAgICAgIG1lbWJlci5iaW8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxKSB8fFxuICAgICAgICBtZW1iZXIuc2tpbGxzLnNvbWUoKHMpID0+IHMudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxKSk7XG5cbiAgICAgIHJldHVybiBtYXRjaGVzVHJhY2sgJiYgbWF0Y2hlc1NlYXJjaDtcbiAgICB9KTtcbiAgfSwgW21lbWJlcnMsIHNlbGVjdGVkVHJhY2ssIHNlYXJjaFF1ZXJ5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cIm1lbWJlcnNcIiBjbGFzc05hbWU9XCJweS0xNiBtZDpweS0yMCBib3JkZXItYiBib3JkZXItbmV1dHJhbC0yMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgey8qIFNlY3Rpb24gSGVhZGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbWQ6aXRlbXMtZW5kIGp1c3RpZnktYmV0d2VlbiBnYXAtNiBtYi04XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIG1iLTIgZm9udC1tb25vXCI+XG4gICAgICAgICAgICAgIHt0Lm1lbWJlcnMuc2VjdGlvbk51bX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LW5ldXRyYWwtOTUwIHNtOnRleHQtNHhsXCI+XG4gICAgICAgICAgICAgIHt0Lm1lbWJlcnMudGl0bGV9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LW5ldXRyYWwtNjAwIHRleHQtc20gc206dGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgIHt0Lm1lbWJlcnMuc3VidGl0bGV9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uTWFuYWdlTWVtYmVyc31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMy41IHB5LTIgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LW5ldXRyYWwtODAwIGJnLW5ldXRyYWwtMTAwIGhvdmVyOmJnLW5ldXRyYWwtMjAwIGJvcmRlciBib3JkZXItbmV1dHJhbC0zMDAgcm91bmRlZC1tZCB0cmFuc2l0aW9uLWNvbG9ycyB3aGl0ZXNwYWNlLW5vd3JhcFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0Lm1lbWJlcnMuY3J1ZEJ0bn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkpvaW5DbGlja31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMy41IHB5LTIgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJnLW5ldXRyYWwtOTAwIGhvdmVyOmJnLW5ldXRyYWwtODAwIHJvdW5kZWQtbWQgdHJhbnNpdGlvbi1jb2xvcnMgd2hpdGVzcGFjZS1ub3dyYXBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dC5tZW1iZXJzLmpvaW5CdG59XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEZpbHRlcnMgYW5kIFNlYXJjaCBCYXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBpdGVtcy1zdHJldGNoIHNtOml0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTQgbWItOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGdhcC0xLjUgcC0xIGJnLW5ldXRyYWwtMTAwLzkwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMFwiPlxuICAgICAgICAgICAge3RyYWNrcy5tYXAoKHRyYWNrKSA9PiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBrZXk9e3RyYWNrLmtleX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFRyYWNrKHRyYWNrLmtleSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMyBweS0xLjUgdGV4dC14cyBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRyYW5zaXRpb24tY29sb3JzIHdoaXRlc3BhY2Utbm93cmFwICR7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZFRyYWNrID09PSB0cmFjay5rZXlcbiAgICAgICAgICAgICAgICAgICAgPyAnYmctd2hpdGUgdGV4dC1uZXV0cmFsLTkwMCBzaGFkb3cteHMgZm9udC1zZW1pYm9sZCdcbiAgICAgICAgICAgICAgICAgICAgOiAndGV4dC1uZXV0cmFsLTYwMCBob3Zlcjp0ZXh0LW5ldXRyYWwtOTAwJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RyYWNrLmxhYmVsfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFNlYXJjaCBJbnB1dCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1pbi13LVsyNDBweF1cIj5cbiAgICAgICAgICAgIDxTZWFyY2ggY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LW5ldXRyYWwtNDAwIGFic29sdXRlIGxlZnQtMyB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzJcIiAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QubWVtYmVycy5zZWFyY2hQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHBsLTkgcHItMyBweS0xLjUgdGV4dC14cyBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLW5ldXRyYWwtODAwIHRleHQtbmV1dHJhbC05MDBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIE1lbWJlciBHcmlkICovfVxuICAgICAgICB7ZmlsdGVyZWRNZW1iZXJzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTEyIGJnLXdoaXRlIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW5ldXRyYWwtNTAwXCI+e3QubWVtYmVycy5ub1Jlc3VsdH08L3A+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRyYWNrKCdBbGwnKTtcbiAgICAgICAgICAgICAgICBzZXRTZWFyY2hRdWVyeSgnJyk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTMgdGV4dC14cyB0ZXh0LW5ldXRyYWwtOTAwIHVuZGVybGluZSBob3Zlcjp0ZXh0LW5ldXRyYWwtNzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3QubWVtYmVycy5yZXNldEZpbHRlcn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNlwiPlxuICAgICAgICAgICAge2ZpbHRlcmVkTWVtYmVycy5tYXAoKG1lbWJlcikgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXttZW1iZXIuaWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCByb3VuZGVkLWxnIHAtNiBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBob3Zlcjpib3JkZXItbmV1dHJhbC0zMDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIHsvKiBUb3A6IEF2YXRhciAmIE5hbWUgKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTQgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xMiBoLTEyIHJvdW5kZWQtbGcgYmctZ3JhZGllbnQtdG8tYnIgJHttZW1iZXIuYXZhdGFyQ29sb3J9IHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1ib2xkIHRleHQtYmFzZSBzaHJpbmstMCBzaGFkb3cteHNgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge21lbWJlci5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgobikgPT4gblswXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcnKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC05NTAgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge21lbWJlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIFplcm8tUGlsbCBDbGVhbiBVbmJveGVkIE1ldGFkYXRhICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSB0ZXh0LXhzIHRleHQtbmV1dHJhbC01MDAgbXQtMSBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtbmV1dHJhbC03MDBcIj57bWVtYmVyLnJvbGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+wrc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bWVtYmVyLnRyYWNrfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsK3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRhYnVsYXItbnVtc1wiPnt0Lm1lbWJlcnMuY2xhc3NPZn0ge21lbWJlci5ncmFkdWF0aW9uWWVhcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHsvKiBCaW8gKi99XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRleHQtc20gdGV4dC1uZXV0cmFsLTYwMCBsZWFkaW5nLXJlbGF4ZWQgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICB7bWVtYmVyLmJpb31cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICB7LyogU2tpbGxzOiBDbGVhbiB1bmJveGVkIGxpc3QgKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1uZXV0cmFsLTUwMCBtYi00IHB0LTMgYm9yZGVyLXQgYm9yZGVyLW5ldXRyYWwtMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtNDAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBtYi0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7dC5tZW1iZXJzLmZvY3VzQXJlYXN9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0xLjUgdGV4dC1uZXV0cmFsLTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHttZW1iZXIuc2tpbGxzLm1hcCgoc2tpbGwsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtza2lsbH0gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3NraWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aWR4IDwgbWVtYmVyLnNraWxscy5sZW5ndGggLSAxID8gJyDCtycgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgey8qIExpbmtzIC8gQ29udGFjdCAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB0LTMgYm9yZGVyLXQgYm9yZGVyLW5ldXRyYWwtMTAwIHRleHQtbmV1dHJhbC01MDAgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC1bMTFweF0gdGV4dC1uZXV0cmFsLTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHttZW1iZXIuc3RhdHVzID09PSAnQWN0aXZlJyA/IHQubWVtYmVycy5zdGF0dXNBY3RpdmUgOiBtZW1iZXIuc3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHttZW1iZXIuZ2l0aHViVXJsICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e21lbWJlci5naXRodWJVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LW5ldXRyYWwtOTAwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJHaXRIdWIgUHJvZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxHaXRodWIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICB7bWVtYmVyLmxpbmtlZGluVXJsICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e21lbWJlci5saW5rZWRpblVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtbmV1dHJhbC05MDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkxpbmtlZEluIFByb2ZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua2VkaW4gY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YG1haWx0bzoke21lbWJlci5lbWFpbH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1uZXV0cmFsLTkwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17bWVtYmVyLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYWlsIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iXX0=