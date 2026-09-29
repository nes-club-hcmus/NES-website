const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=83e0c204";
import { Users, Calendar, BookOpen, FileText, Plus, Trash2, Edit2, Download, RotateCcw, Search, ExternalLink, UserCheck, Layers } from "/node_modules/.vite/deps/lucide-react.js?v=83e0c204";
import { translations } from "/src/data/translations.ts";
var _jsxFileName = "/app/applet/src/components/AdminDashboard.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=83e0c204";
export const AdminDashboard = ({ members, events, posts, applications, language, onAddMember, onUpdateMember, onDeleteMember, onAddEvent, onUpdateEvent, onDeleteEvent, onAddPost, onUpdatePost, onDeletePost, onUpdateApplicationStatus, onDeleteApplication, onExportDatabaseSeed, onResetDefaults, onOpenBlueprint }) => {
	const [activeTab, setActiveTab] = useState("members");
	const t = translations[language];
	// Member Modal State
	const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);
	const [editingMember, setEditingMember] = useState(null);
	const [memberFormData, setMemberFormData] = useState({
		name: "",
		role: "Core Member",
		track: "Software & AI",
		email: "",
		studentId: "",
		graduationYear: 2028,
		bio: "",
		skills: "",
		githubUrl: "",
		linkedinUrl: "",
		status: "Active"
	});
	// Event Modal State
	const [isEventModalOpen, setIsEventModalOpen] = useState(false);
	const [editingEvent, setEditingEvent] = useState(null);
	const [eventFormData, setEventFormData] = useState({
		title: "",
		description: "",
		agenda: "",
		date: new Date().toISOString().split("T")[0],
		time: "18:00 - 20:00",
		location: "Turing Hall, Room 314",
		isOnline: false,
		category: "Workshop",
		capacity: 40,
		speakerName: "",
		speakerRole: "",
		status: "Upcoming"
	});
	// Post Modal State
	const [isPostModalOpen, setIsPostModalOpen] = useState(false);
	const [editingPost, setEditingPost] = useState(null);
	const [postFormData, setPostFormData] = useState({
		title: "",
		slug: "",
		excerpt: "",
		content: "",
		authorName: "Apex Team",
		authorRole: "Contributor",
		category: "Tutorial",
		readTimeMinutes: 5,
		isPublished: true
	});
	// Search & Filter State
	const [memberSearch, setMemberSearch] = useState("");
	const [memberFilterRole, setMemberFilterRole] = useState("All");
	const [appFilterStatus, setAppFilterStatus] = useState("All");
	// Member Form Handlers
	const handleOpenAddMember = () => {
		setEditingMember(null);
		setMemberFormData({
			name: "",
			role: "Core Member",
			track: "Software & AI",
			email: "",
			studentId: "",
			graduationYear: 2028,
			bio: "",
			skills: "TypeScript, React, Git",
			githubUrl: "",
			linkedinUrl: "",
			status: "Active"
		});
		setIsMemberModalOpen(true);
	};
	const handleOpenEditMember = (member) => {
		setEditingMember(member);
		setMemberFormData({
			name: member.name,
			role: member.role,
			track: member.track,
			email: member.email,
			studentId: member.studentId || "",
			graduationYear: member.graduationYear,
			bio: member.bio,
			skills: member.skills.join(", "),
			githubUrl: member.githubUrl || "",
			linkedinUrl: member.linkedinUrl || "",
			status: member.status
		});
		setIsMemberModalOpen(true);
	};
	const handleSaveMember = (e) => {
		e.preventDefault();
		if (!memberFormData.name || !memberFormData.email) return;
		const skillsArray = memberFormData.skills.split(",").map((s) => s.trim()).filter(Boolean);
		if (editingMember) {
			onUpdateMember(editingMember.id, {
				name: memberFormData.name,
				role: memberFormData.role,
				track: memberFormData.track,
				email: memberFormData.email,
				studentId: memberFormData.studentId,
				graduationYear: Number(memberFormData.graduationYear),
				bio: memberFormData.bio,
				skills: skillsArray,
				githubUrl: memberFormData.githubUrl,
				linkedinUrl: memberFormData.linkedinUrl,
				status: memberFormData.status
			});
		} else {
			const colors = [
				"from-amber-600 to-amber-800",
				"from-blue-600 to-indigo-800",
				"from-emerald-600 to-teal-800",
				"from-purple-600 to-indigo-800",
				"from-stone-600 to-stone-800",
				"from-rose-600 to-pink-800"
			];
			const randomColor = colors[Math.floor(Math.random() * colors.length)];
			onAddMember({
				name: memberFormData.name,
				role: memberFormData.role,
				track: memberFormData.track,
				email: memberFormData.email,
				studentId: memberFormData.studentId,
				graduationYear: Number(memberFormData.graduationYear),
				bio: memberFormData.bio,
				skills: skillsArray,
				githubUrl: memberFormData.githubUrl,
				linkedinUrl: memberFormData.linkedinUrl,
				status: memberFormData.status,
				avatarColor: randomColor
			});
		}
		setIsMemberModalOpen(false);
	};
	// Event Form Handlers
	const handleOpenAddEvent = () => {
		setEditingEvent(null);
		setEventFormData({
			title: "",
			description: "",
			agenda: "",
			date: new Date().toISOString().split("T")[0],
			time: "18:00 - 20:00",
			location: "Turing Hall, Room 314",
			isOnline: false,
			category: "Workshop",
			capacity: 40,
			speakerName: "",
			speakerRole: "",
			status: "Upcoming"
		});
		setIsEventModalOpen(true);
	};
	const handleOpenEditEvent = (ev) => {
		setEditingEvent(ev);
		setEventFormData({
			title: ev.title,
			description: ev.description,
			agenda: ev.agenda || "",
			date: ev.date,
			time: ev.time,
			location: ev.location,
			isOnline: ev.isOnline,
			category: ev.category,
			capacity: ev.capacity,
			speakerName: ev.speakerName || "",
			speakerRole: ev.speakerRole || "",
			status: ev.status
		});
		setIsEventModalOpen(true);
	};
	const handleSaveEvent = (e) => {
		e.preventDefault();
		if (!eventFormData.title || !eventFormData.date) return;
		if (editingEvent) {
			onUpdateEvent(editingEvent.id, {
				...eventFormData,
				capacity: Number(eventFormData.capacity)
			});
		} else {
			onAddEvent({
				...eventFormData,
				capacity: Number(eventFormData.capacity)
			});
		}
		setIsEventModalOpen(false);
	};
	// Post Form Handlers
	const handleOpenAddPost = () => {
		setEditingPost(null);
		setPostFormData({
			title: "",
			slug: "",
			excerpt: "",
			content: "",
			authorName: "Apex Team",
			authorRole: "Core Contributor",
			category: "Tutorial",
			readTimeMinutes: 5,
			isPublished: true
		});
		setIsPostModalOpen(true);
	};
	const handleOpenEditPost = (post) => {
		setEditingPost(post);
		setPostFormData({
			title: post.title,
			slug: post.slug,
			excerpt: post.excerpt,
			content: post.content,
			authorName: post.authorName,
			authorRole: post.authorRole,
			category: post.category,
			readTimeMinutes: post.readTimeMinutes,
			isPublished: post.isPublished
		});
		setIsPostModalOpen(true);
	};
	const handleSavePost = (e) => {
		e.preventDefault();
		if (!postFormData.title || !postFormData.content) return;
		const slug = postFormData.slug.trim() || postFormData.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
		if (editingPost) {
			onUpdatePost(editingPost.id, {
				...postFormData,
				slug,
				readTimeMinutes: Number(postFormData.readTimeMinutes)
			});
		} else {
			onAddPost({
				...postFormData,
				slug,
				readTimeMinutes: Number(postFormData.readTimeMinutes)
			});
		}
		setIsPostModalOpen(false);
	};
	// Convert application to member
	const handleConvertAppToMember = (app) => {
		const defaultTrack = app.tracks[0] || "Software & AI";
		onAddMember({
			name: app.fullName,
			role: "Core Member",
			track: defaultTrack,
			email: app.email,
			studentId: app.studentId,
			graduationYear: app.yearOfStudy === "Freshman" ? 2030 : app.yearOfStudy === "Sophomore" ? 2029 : app.yearOfStudy === "Junior" ? 2028 : 2027,
			bio: `${app.yearOfStudy} majoring in ${app.major}. Interests: ${app.tracks.join(", ")}.`,
			skills: [app.major, ...app.tracks],
			githubUrl: app.portfolioUrl,
			status: "Active",
			avatarColor: "from-emerald-600 to-teal-800"
		});
		onUpdateApplicationStatus(app.id, "Accepted", "Enrolled as active member.");
	};
	// Filtered lists
	const filteredMembers = members.filter((m) => {
		const matchesRole = memberFilterRole === "All" ? true : m.role === memberFilterRole;
		const q = memberSearch.toLowerCase().trim();
		const matchesSearch = !q || m.name.toLowerCase().includes(q) || m.email.toLowerCase().includes(q) || m.role.toLowerCase().includes(q) || m.studentId && m.studentId.toLowerCase().includes(q);
		return matchesRole && matchesSearch;
	});
	const filteredApplications = applications.filter((a) => {
		return appFilterStatus === "All" ? true : a.status === appFilterStatus;
	});
	return /* @__PURE__ */ _jsxDEV("section", {
		id: "dashboard",
		className: "py-16 md:py-20 border-b border-neutral-200",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8",
						children: [/* @__PURE__ */ _jsxDEV("div", { children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 font-mono",
								children: t.dashboard.badge
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 393,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("h2", {
								className: "text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl",
								children: t.dashboard.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 396,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "mt-2 text-neutral-600 text-sm sm:text-base",
								children: t.dashboard.subtitle
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 399,
								columnNumber: 13
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 392,
							columnNumber: 11
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ _jsxDEV("button", {
								onClick: onOpenBlueprint,
								className: "px-3 py-2 text-xs font-mono font-medium text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-md transition-colors",
								children: "Next.js Architecture Guide"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 405,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("button", {
								onClick: onExportDatabaseSeed,
								className: "flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-md transition-colors",
								children: [/* @__PURE__ */ _jsxDEV(Download, { className: "w-3.5 h-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 415,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: t.dashboard.exportSeed }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 416,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 411,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 404,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 391,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-1 p-1 bg-neutral-100 rounded-lg border border-neutral-200 mb-8 overflow-x-auto",
						children: [
							/* @__PURE__ */ _jsxDEV("button", {
								onClick: () => setActiveTab("members"),
								className: `flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${activeTab === "members" ? "bg-white text-neutral-950 shadow-xs font-semibold" : "text-neutral-600 hover:text-neutral-900"}`,
								children: [/* @__PURE__ */ _jsxDEV(Users, { className: "w-4 h-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 431,
									columnNumber: 13
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: [
									t.dashboard.tabs.members,
									" (",
									members.length,
									")"
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 432,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 423,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ _jsxDEV("button", {
								onClick: () => setActiveTab("events"),
								className: `flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${activeTab === "events" ? "bg-white text-neutral-950 shadow-xs font-semibold" : "text-neutral-600 hover:text-neutral-900"}`,
								children: [/* @__PURE__ */ _jsxDEV(Calendar, { className: "w-4 h-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 443,
									columnNumber: 13
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: [
									t.dashboard.tabs.events,
									" (",
									events.length,
									")"
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 444,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 435,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ _jsxDEV("button", {
								onClick: () => setActiveTab("posts"),
								className: `flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${activeTab === "posts" ? "bg-white text-neutral-950 shadow-xs font-semibold" : "text-neutral-600 hover:text-neutral-900"}`,
								children: [/* @__PURE__ */ _jsxDEV(BookOpen, { className: "w-4 h-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 455,
									columnNumber: 13
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: [
									t.dashboard.tabs.posts,
									" (",
									posts.length,
									")"
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 456,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 447,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ _jsxDEV("button", {
								onClick: () => setActiveTab("applications"),
								className: `flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${activeTab === "applications" ? "bg-white text-neutral-950 shadow-xs font-semibold" : "text-neutral-600 hover:text-neutral-900"}`,
								children: [
									/* @__PURE__ */ _jsxDEV(FileText, { className: "w-4 h-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 467,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ _jsxDEV("span", { children: [
										t.dashboard.tabs.applications,
										" (",
										applications.length,
										")"
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 468,
										columnNumber: 13
									}, this),
									applications.filter((a) => a.status === "Pending").length > 0 && /* @__PURE__ */ _jsxDEV("span", {
										className: "font-mono text-[10px] px-1.5 py-0.2 bg-neutral-900 text-white rounded",
										children: [applications.filter((a) => a.status === "Pending").length, " pending"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 470,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 459,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ _jsxDEV("button", {
								onClick: () => setActiveTab("export"),
								className: `flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${activeTab === "export" ? "bg-white text-neutral-950 shadow-xs font-semibold" : "text-neutral-600 hover:text-neutral-900"}`,
								children: [/* @__PURE__ */ _jsxDEV(Layers, { className: "w-4 h-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 484,
									columnNumber: 13
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: t.dashboard.tabs.export }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 485,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 476,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 422,
						columnNumber: 9
					}, this),
					activeTab === "members" && /* @__PURE__ */ _jsxDEV("div", {
						className: "bg-white border border-neutral-200 rounded-lg overflow-hidden",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "p-4 sm:p-6 border-b border-neutral-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "relative min-w-[200px]",
									children: [/* @__PURE__ */ _jsxDEV(Search, { className: "w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 495,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("input", {
										type: "text",
										value: memberSearch,
										onChange: (e) => setMemberSearch(e.target.value),
										placeholder: "Search members...",
										className: "w-full pl-9 pr-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-800"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 496,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 494,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("select", {
									value: memberFilterRole,
									onChange: (e) => setMemberFilterRole(e.target.value),
									className: "px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-800",
									children: [
										/* @__PURE__ */ _jsxDEV("option", {
											value: "All",
											children: "All Roles"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 510,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "President",
											children: "President"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 511,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Vice President",
											children: "Vice President"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 512,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Tech Lead",
											children: "Tech Lead"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 513,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Design Lead",
											children: "Design Lead"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 514,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Event Coordinator",
											children: "Event Coordinator"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 515,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Core Member",
											children: "Core Member"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 516,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Alumni",
											children: "Alumni"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 517,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 505,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 493,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("button", {
								onClick: handleOpenAddMember,
								className: "flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors shadow-xs",
								children: [/* @__PURE__ */ _jsxDEV(Plus, { className: "w-3.5 h-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 525,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Add Member" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 526,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 521,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 492,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "overflow-x-auto",
							children: /* @__PURE__ */ _jsxDEV("table", {
								className: "w-full text-left text-xs text-neutral-700",
								children: [/* @__PURE__ */ _jsxDEV("thead", {
									className: "bg-neutral-50 border-b border-neutral-200 text-neutral-500 uppercase font-mono text-[11px]",
									children: /* @__PURE__ */ _jsxDEV("tr", { children: [
										/* @__PURE__ */ _jsxDEV("th", {
											className: "px-6 py-3 font-medium",
											children: "Name & Email"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 535,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("th", {
											className: "px-6 py-3 font-medium",
											children: "Role & Track"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 536,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("th", {
											className: "px-6 py-3 font-medium",
											children: "Student ID"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 537,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("th", {
											className: "px-6 py-3 font-medium",
											children: "Class Of"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 538,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("th", {
											className: "px-6 py-3 font-medium",
											children: "Status"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 539,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("th", {
											className: "px-6 py-3 font-medium text-right",
											children: "Actions"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 540,
											columnNumber: 21
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 534,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 533,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("tbody", {
									className: "divide-y divide-neutral-200",
									children: filteredMembers.map((member) => /* @__PURE__ */ _jsxDEV("tr", {
										className: "hover:bg-neutral-50/70 transition-colors",
										children: [
											/* @__PURE__ */ _jsxDEV("td", {
												className: "px-6 py-4 font-medium text-neutral-900",
												children: [/* @__PURE__ */ _jsxDEV("div", {
													className: "font-semibold",
													children: member.name
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 547,
													columnNumber: 25
												}, this), /* @__PURE__ */ _jsxDEV("div", {
													className: "text-neutral-500 font-normal",
													children: member.email
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 548,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 546,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ _jsxDEV("td", {
												className: "px-6 py-4",
												children: [/* @__PURE__ */ _jsxDEV("div", {
													className: "font-medium text-neutral-800",
													children: member.role
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 551,
													columnNumber: 25
												}, this), /* @__PURE__ */ _jsxDEV("div", {
													className: "text-neutral-500",
													children: member.track
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 552,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 550,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ _jsxDEV("td", {
												className: "px-6 py-4 font-mono text-neutral-600",
												children: member.studentId || "—"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 554,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ _jsxDEV("td", {
												className: "px-6 py-4 font-mono tabular-nums text-neutral-600",
												children: member.graduationYear
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 557,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ _jsxDEV("td", {
												className: "px-6 py-4 font-mono text-[11px]",
												children: /* @__PURE__ */ _jsxDEV("span", {
													className: member.status === "Active" ? "text-emerald-700 font-semibold" : member.status === "On Leave" ? "text-amber-700" : "text-neutral-500",
													children: member.status
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 561,
													columnNumber: 25
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 560,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ _jsxDEV("td", {
												className: "px-6 py-4 text-right",
												children: /* @__PURE__ */ _jsxDEV("div", {
													className: "flex items-center justify-end gap-2",
													children: [/* @__PURE__ */ _jsxDEV("button", {
														onClick: () => handleOpenEditMember(member),
														className: "p-1.5 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded",
														title: "Edit Member",
														children: /* @__PURE__ */ _jsxDEV(Edit2, { className: "w-3.5 h-3.5" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 580,
															columnNumber: 29
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 575,
														columnNumber: 27
													}, this), /* @__PURE__ */ _jsxDEV("button", {
														onClick: () => {
															if (confirm(`Remove ${member.name} from members list?`)) {
																onDeleteMember(member.id);
															}
														},
														className: "p-1.5 text-red-600 hover:text-red-800 hover:bg-red-50 rounded",
														title: "Delete Member",
														children: /* @__PURE__ */ _jsxDEV(Trash2, { className: "w-3.5 h-3.5" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 591,
															columnNumber: 29
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 582,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 574,
													columnNumber: 25
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 573,
												columnNumber: 23
											}, this)
										]
									}, member.id, true, {
										fileName: _jsxFileName,
										lineNumber: 545,
										columnNumber: 21
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 543,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 532,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 531,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 491,
						columnNumber: 11
					}, this),
					activeTab === "events" && /* @__PURE__ */ _jsxDEV("div", {
						className: "bg-white border border-neutral-200 rounded-lg overflow-hidden",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "p-4 sm:p-6 border-b border-neutral-200 flex items-center justify-between",
							children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
								className: "text-sm font-bold text-neutral-900",
								children: "Events Registry"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 608,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs text-neutral-500 mt-0.5",
								children: "Publish workshops, manage attendance capacities, and schedule hackathons."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 609,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 607,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("button", {
								onClick: handleOpenAddEvent,
								className: "flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors shadow-xs",
								children: [/* @__PURE__ */ _jsxDEV(Plus, { className: "w-3.5 h-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 618,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Create Event" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 619,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 614,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 606,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "divide-y divide-neutral-200",
							children: events.map((ev) => /* @__PURE__ */ _jsxDEV("div", {
								className: "p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-neutral-50/70 transition-colors",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "space-y-1.5 max-w-2xl",
									children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center gap-2 text-xs text-neutral-500 font-mono",
											children: [
												/* @__PURE__ */ _jsxDEV("span", {
													className: "font-semibold text-neutral-800",
													children: ev.category
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 631,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ _jsxDEV("span", {
													"aria-hidden": "true",
													children: "·"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 632,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ _jsxDEV("span", {
													className: "tabular-nums",
													children: ev.date
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 633,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ _jsxDEV("span", {
													"aria-hidden": "true",
													children: "·"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 634,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ _jsxDEV("span", { children: ev.time }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 635,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ _jsxDEV("span", {
													"aria-hidden": "true",
													children: "·"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 636,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ _jsxDEV("span", {
													className: ev.status === "Upcoming" ? "text-emerald-700 font-bold" : "text-neutral-400",
													children: ev.status
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 637,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 630,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("h4", {
											className: "text-base font-bold text-neutral-950",
											children: ev.title
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 642,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("p", {
											className: "text-xs text-neutral-600 line-clamp-2",
											children: ev.description
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 643,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "text-xs text-neutral-500 flex items-center gap-3 pt-1",
											children: [/* @__PURE__ */ _jsxDEV("span", { children: ["Venue: ", ev.location] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 645,
												columnNumber: 23
											}, this), ev.speakerName && /* @__PURE__ */ _jsxDEV("span", { children: ["Host: ", ev.speakerName] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 646,
												columnNumber: 42
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 644,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 629,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-4 shrink-0",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "text-right font-mono text-xs",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "text-neutral-900 font-semibold tabular-nums",
											children: [
												ev.rsvps.length,
												" / ",
												ev.capacity,
												" RSVPs"
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 652,
											columnNumber: 23
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "text-[11px] text-neutral-400",
											children: [ev.capacity - ev.rsvps.length, " remaining"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 655,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 651,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ _jsxDEV("button", {
											onClick: () => handleOpenEditEvent(ev),
											className: "p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded",
											title: "Edit Event",
											children: /* @__PURE__ */ _jsxDEV(Edit2, { className: "w-4 h-4" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 666,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 661,
											columnNumber: 23
										}, this), /* @__PURE__ */ _jsxDEV("button", {
											onClick: () => {
												if (confirm(`Delete event "${ev.title}"?`)) {
													onDeleteEvent(ev.id);
												}
											},
											className: "p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded",
											title: "Delete Event",
											children: /* @__PURE__ */ _jsxDEV(Trash2, { className: "w-4 h-4" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 677,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 668,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 660,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 650,
									columnNumber: 19
								}, this)]
							}, ev.id, true, {
								fileName: _jsxFileName,
								lineNumber: 625,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 623,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 605,
						columnNumber: 11
					}, this),
					activeTab === "posts" && /* @__PURE__ */ _jsxDEV("div", {
						className: "bg-white border border-neutral-200 rounded-lg overflow-hidden",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "p-4 sm:p-6 border-b border-neutral-200 flex items-center justify-between",
							children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
								className: "text-sm font-bold text-neutral-900",
								children: "Blog & Editorial Posts"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 692,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs text-neutral-500 mt-0.5",
								children: "Publish technical writeups, recaps, and student tutorials."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 693,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 691,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("button", {
								onClick: handleOpenAddPost,
								className: "flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors shadow-xs",
								children: [/* @__PURE__ */ _jsxDEV(Plus, { className: "w-3.5 h-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 702,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Write Article" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 703,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 698,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 690,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "divide-y divide-neutral-200",
							children: posts.map((post) => /* @__PURE__ */ _jsxDEV("div", {
								className: "p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-neutral-50/70 transition-colors",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "space-y-1.5 max-w-2xl",
									children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center gap-2 text-xs text-neutral-500 font-mono",
											children: [
												/* @__PURE__ */ _jsxDEV("span", {
													className: "font-semibold text-neutral-800",
													children: post.category
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 715,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ _jsxDEV("span", {
													"aria-hidden": "true",
													children: "·"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 716,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ _jsxDEV("span", {
													className: "tabular-nums",
													children: post.publishedAt
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 717,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ _jsxDEV("span", {
													"aria-hidden": "true",
													children: "·"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 718,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ _jsxDEV("span", { children: [post.readTimeMinutes, " min read"] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 719,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ _jsxDEV("span", {
													"aria-hidden": "true",
													children: "·"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 720,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ _jsxDEV("span", {
													className: post.isPublished ? "text-emerald-700" : "text-neutral-400",
													children: post.isPublished ? "Published" : "Draft"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 721,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 714,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("h4", {
											className: "text-base font-bold text-neutral-950",
											children: post.title
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 726,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("p", {
											className: "text-xs text-neutral-600 line-clamp-2",
											children: post.excerpt
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 727,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "text-xs text-neutral-500",
											children: [
												"Author: ",
												/* @__PURE__ */ _jsxDEV("strong", {
													className: "text-neutral-800",
													children: post.authorName
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 729,
													columnNumber: 31
												}, this),
												" (",
												post.authorRole,
												") · ",
												post.likes,
												" likes"
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 728,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 713,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-1.5 shrink-0",
									children: [/* @__PURE__ */ _jsxDEV("button", {
										onClick: () => handleOpenEditPost(post),
										className: "p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded",
										title: "Edit Post",
										children: /* @__PURE__ */ _jsxDEV(Edit2, { className: "w-4 h-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 739,
											columnNumber: 23
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 734,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("button", {
										onClick: () => {
											if (confirm(`Delete post "${post.title}"?`)) {
												onDeletePost(post.id);
											}
										},
										className: "p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded",
										title: "Delete Post",
										children: /* @__PURE__ */ _jsxDEV(Trash2, { className: "w-4 h-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 750,
											columnNumber: 23
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 741,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 733,
									columnNumber: 19
								}, this)]
							}, post.id, true, {
								fileName: _jsxFileName,
								lineNumber: 709,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 707,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 689,
						columnNumber: 11
					}, this),
					activeTab === "applications" && /* @__PURE__ */ _jsxDEV("div", {
						className: "bg-white border border-neutral-200 rounded-lg overflow-hidden",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "p-4 sm:p-6 border-b border-neutral-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4",
							children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
								className: "text-sm font-bold text-neutral-900",
								children: "Membership Inquiries & Applications"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 764,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs text-neutral-500 mt-0.5",
								children: "Review student submissions from the Join Us form, schedule chats, or enroll them."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 765,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 763,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "text-xs text-neutral-500",
									children: "Filter:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 771,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("select", {
									value: appFilterStatus,
									onChange: (e) => setAppFilterStatus(e.target.value),
									className: "px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-800",
									children: [
										/* @__PURE__ */ _jsxDEV("option", {
											value: "All",
											children: "All Inquiries"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 777,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Pending",
											children: "Pending"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 778,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Interview",
											children: "Interview"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 779,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Accepted",
											children: "Accepted"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 780,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Archived",
											children: "Archived"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 781,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 772,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 770,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 762,
							columnNumber: 13
						}, this), filteredApplications.length === 0 ? /* @__PURE__ */ _jsxDEV("div", {
							className: "text-center py-12",
							children: /* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs text-neutral-500",
								children: "No applications found."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 788,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 787,
							columnNumber: 15
						}, this) : /* @__PURE__ */ _jsxDEV("div", {
							className: "divide-y divide-neutral-200",
							children: filteredApplications.map((app) => /* @__PURE__ */ _jsxDEV("div", {
								className: "p-6 space-y-4 hover:bg-neutral-50/70 transition-colors",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex flex-col sm:flex-row sm:items-start justify-between gap-4",
									children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV("h4", {
											className: "text-base font-bold text-neutral-950",
											children: app.fullName
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 797,
											columnNumber: 27
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "font-mono text-xs text-neutral-400",
											children: [
												"(",
												app.studentId,
												")"
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 798,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 796,
										columnNumber: 25
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs text-neutral-500 mt-0.5 flex items-center gap-2 flex-wrap",
										children: [
											/* @__PURE__ */ _jsxDEV("span", { children: app.email }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 801,
												columnNumber: 27
											}, this),
											/* @__PURE__ */ _jsxDEV("span", {
												"aria-hidden": "true",
												children: "·"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 802,
												columnNumber: 27
											}, this),
											/* @__PURE__ */ _jsxDEV("span", { children: app.major }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 803,
												columnNumber: 27
											}, this),
											/* @__PURE__ */ _jsxDEV("span", {
												"aria-hidden": "true",
												children: "·"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 804,
												columnNumber: 27
											}, this),
											/* @__PURE__ */ _jsxDEV("span", { children: app.yearOfStudy }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 805,
												columnNumber: 27
											}, this),
											/* @__PURE__ */ _jsxDEV("span", {
												"aria-hidden": "true",
												children: "·"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 806,
												columnNumber: 27
											}, this),
											/* @__PURE__ */ _jsxDEV("span", { children: ["Level: ", app.experienceLevel] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 807,
												columnNumber: 27
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 800,
										columnNumber: 25
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 795,
										columnNumber: 23
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ _jsxDEV("select", {
												value: app.status,
												onChange: (e) => onUpdateApplicationStatus(app.id, e.target.value),
												className: "px-2.5 py-1 text-xs font-mono font-medium rounded-md border border-neutral-300 bg-white",
												children: [
													/* @__PURE__ */ _jsxDEV("option", {
														value: "Pending",
														children: "Status: Pending"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 822,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ _jsxDEV("option", {
														value: "Interview",
														children: "Status: Interview"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 823,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ _jsxDEV("option", {
														value: "Accepted",
														children: "Status: Accepted"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 824,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ _jsxDEV("option", {
														value: "Archived",
														children: "Status: Archived"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 825,
														columnNumber: 27
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 812,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ _jsxDEV("button", {
												onClick: () => handleConvertAppToMember(app),
												className: "flex items-center gap-1 px-3 py-1 text-xs font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-md transition-colors",
												title: "Create member profile from this application",
												children: [/* @__PURE__ */ _jsxDEV(UserCheck, { className: "w-3.5 h-3.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 833,
													columnNumber: 27
												}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Enroll Member" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 834,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 828,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ _jsxDEV("button", {
												onClick: () => {
													if (confirm(`Delete application from ${app.fullName}?`)) {
														onDeleteApplication(app.id);
													}
												},
												className: "p-1.5 text-neutral-400 hover:text-red-700 hover:bg-red-50 rounded",
												title: "Delete application",
												children: /* @__PURE__ */ _jsxDEV(Trash2, { className: "w-3.5 h-3.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 846,
													columnNumber: 27
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 837,
												columnNumber: 25
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 811,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 794,
									columnNumber: 21
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "bg-neutral-50 p-3.5 rounded-md border border-neutral-100 text-xs space-y-2",
									children: [
										/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("strong", {
											className: "text-neutral-700",
											children: "Tracks of Interest: "
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 854,
											columnNumber: 25
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "text-neutral-900 font-medium",
											children: app.tracks.join(", ")
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 855,
											columnNumber: 25
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 853,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("strong", {
											className: "text-neutral-700",
											children: "Motivation: "
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 858,
											columnNumber: 25
										}, this), /* @__PURE__ */ _jsxDEV("p", {
											className: "text-neutral-800 mt-0.5 leading-relaxed",
											children: app.motivation
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 859,
											columnNumber: 25
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 857,
											columnNumber: 23
										}, this),
										app.portfolioUrl && /* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center gap-1.5 pt-1",
											children: [/* @__PURE__ */ _jsxDEV("strong", {
												className: "text-neutral-700",
												children: "Portfolio/GitHub: "
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 863,
												columnNumber: 27
											}, this), /* @__PURE__ */ _jsxDEV("a", {
												href: app.portfolioUrl,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "text-neutral-900 hover:underline flex items-center gap-1 font-mono",
												children: [/* @__PURE__ */ _jsxDEV("span", { children: app.portfolioUrl }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 870,
													columnNumber: 29
												}, this), /* @__PURE__ */ _jsxDEV(ExternalLink, { className: "w-3 h-3" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 871,
													columnNumber: 29
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 864,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 862,
											columnNumber: 25
										}, this),
										app.adminNotes && /* @__PURE__ */ _jsxDEV("div", {
											className: "pt-2 text-[11px] text-neutral-600 border-t border-neutral-200",
											children: [/* @__PURE__ */ _jsxDEV("strong", { children: "Admin Notes: " }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 877,
												columnNumber: 27
											}, this), /* @__PURE__ */ _jsxDEV("span", { children: app.adminNotes }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 878,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 876,
											columnNumber: 25
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 852,
									columnNumber: 21
								}, this)]
							}, app.id, true, {
								fileName: _jsxFileName,
								lineNumber: 793,
								columnNumber: 19
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 791,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 761,
						columnNumber: 11
					}, this),
					activeTab === "export" && /* @__PURE__ */ _jsxDEV("div", {
						className: "bg-white border border-neutral-200 rounded-lg p-6 sm:p-8 space-y-8",
						children: [
							/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
								className: "text-lg font-bold text-neutral-950",
								children: "Database Seed & Production Stack Export"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 893,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								className: "text-sm text-neutral-600 mt-1 max-w-2xl leading-relaxed",
								children: "You can download the current live state of your club database (all members, events, posts, and recruitment applications) as a valid JSON file to seed into MongoDB Atlas, Supabase, or PostgreSQL."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 896,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 892,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-6",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "p-6 border border-neutral-200 rounded-lg bg-neutral-50/50 flex flex-col justify-between",
									children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h4", {
										className: "text-sm font-bold text-neutral-900 flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV(Download, { className: "w-4 h-4 text-emerald-700" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 905,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Download seed.json" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 906,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 904,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("p", {
										className: "text-xs text-neutral-600 mt-2 leading-relaxed",
										children: "Generates a complete dataset with schema versioning for MongoDB M0 import using `mongoimport` or Mongoose seeder script."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 908,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 903,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "mt-6",
										children: /* @__PURE__ */ _jsxDEV("button", {
											onClick: onExportDatabaseSeed,
											className: "w-full py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors text-center",
											children: "Download Database Seed"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 913,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 912,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 902,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "p-6 border border-neutral-200 rounded-lg bg-neutral-50/50 flex flex-col justify-between",
									children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h4", {
										className: "text-sm font-bold text-neutral-900 flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV(RotateCcw, { className: "w-4 h-4 text-amber-700" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 925,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Reset Sample Data" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 926,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 924,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("p", {
										className: "text-xs text-neutral-600 mt-2 leading-relaxed",
										children: "Clear local storage modifications and restore the clean initial university club dataset."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 928,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 923,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "mt-6",
										children: /* @__PURE__ */ _jsxDEV("button", {
											onClick: () => {
												if (confirm("Reset all club data to default sample items?")) {
													onResetDefaults();
												}
											},
											className: "w-full py-2.5 text-xs font-medium text-neutral-700 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-md transition-colors",
											children: "Restore Defaults"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 933,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 932,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 922,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 901,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "p-6 bg-neutral-900 text-white rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
								children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h4", {
									className: "text-sm font-bold",
									children: "Ready to deploy to Vercel & MongoDB Atlas?"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 949,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-neutral-300 mt-1",
									children: "View the full Next.js project structure, Mongoose schemas, and Render.com setup guides."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 950,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 948,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("button", {
									onClick: onOpenBlueprint,
									className: "px-4 py-2 text-xs font-semibold text-neutral-900 bg-white hover:bg-neutral-100 rounded-md whitespace-nowrap",
									children: "Open Architecture Blueprint"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 954,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 947,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 891,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 389,
				columnNumber: 7
			}, this),
			isMemberModalOpen && /* @__PURE__ */ _jsxDEV("div", {
				role: "dialog",
				"aria-modal": "true",
				className: "fixed inset-0 z-50 bg-neutral-950/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto",
				children: /* @__PURE__ */ _jsxDEV("div", {
					className: "bg-white rounded-lg max-w-xl w-full max-h-[90vh] overflow-y-auto border border-neutral-300 shadow-xl p-6",
					children: [/* @__PURE__ */ _jsxDEV("h3", {
						className: "text-lg font-bold text-neutral-950 mb-4",
						children: editingMember ? "Edit Member Information" : "Add New Club Member"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 973,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("form", {
						onSubmit: handleSaveMember,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
									className: "block text-xs font-semibold text-neutral-700 mb-1",
									children: "Full Name *"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 980,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("input", {
									type: "text",
									required: true,
									value: memberFormData.name,
									onChange: (e) => setMemberFormData({
										...memberFormData,
										name: e.target.value
									}),
									className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 983,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 979,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
									className: "block text-xs font-semibold text-neutral-700 mb-1",
									children: "University Email *"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 995,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("input", {
									type: "email",
									required: true,
									value: memberFormData.email,
									onChange: (e) => setMemberFormData({
										...memberFormData,
										email: e.target.value
									}),
									className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 998,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 994,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 978,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
									className: "block text-xs font-semibold text-neutral-700 mb-1",
									children: "Role in Club"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1012,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("select", {
									value: memberFormData.role,
									onChange: (e) => setMemberFormData({
										...memberFormData,
										role: e.target.value
									}),
									className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none",
									children: [
										/* @__PURE__ */ _jsxDEV("option", {
											value: "President",
											children: "President"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1025,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Vice President",
											children: "Vice President"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1026,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Tech Lead",
											children: "Tech Lead"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1027,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Design Lead",
											children: "Design Lead"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1028,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Outreach Lead",
											children: "Outreach Lead"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1029,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Event Coordinator",
											children: "Event Coordinator"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1030,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Core Member",
											children: "Core Member"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1031,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Alumni",
											children: "Alumni"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1032,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1015,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1011,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
									className: "block text-xs font-semibold text-neutral-700 mb-1",
									children: "Track / Subteam"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1037,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("select", {
									value: memberFormData.track,
									onChange: (e) => setMemberFormData({
										...memberFormData,
										track: e.target.value
									}),
									className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none",
									children: [
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Software & AI",
											children: "Software & AI"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1050,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Product & UI/UX",
											children: "Product & UI/UX"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1051,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Hardware & Robotics",
											children: "Hardware & Robotics"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1052,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Community & Ops",
											children: "Community & Ops"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1053,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1040,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1036,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1010,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
								children: [
									/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
										className: "block text-xs font-semibold text-neutral-700 mb-1",
										children: "Student ID"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1060,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("input", {
										type: "text",
										value: memberFormData.studentId,
										onChange: (e) => setMemberFormData({
											...memberFormData,
											studentId: e.target.value
										}),
										placeholder: "MU26-XXXX",
										className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1063,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1059,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
										className: "block text-xs font-semibold text-neutral-700 mb-1",
										children: "Graduation Year"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1075,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("input", {
										type: "number",
										value: memberFormData.graduationYear,
										onChange: (e) => setMemberFormData({
											...memberFormData,
											graduationYear: Number(e.target.value)
										}),
										className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1078,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1074,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
										className: "block text-xs font-semibold text-neutral-700 mb-1",
										children: "Status"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1092,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("select", {
										value: memberFormData.status,
										onChange: (e) => setMemberFormData({
											...memberFormData,
											status: e.target.value
										}),
										className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md",
										children: [
											/* @__PURE__ */ _jsxDEV("option", {
												value: "Active",
												children: "Active"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1105,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("option", {
												value: "On Leave",
												children: "On Leave"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1106,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("option", {
												value: "Alumni",
												children: "Alumni"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1107,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1095,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1091,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1058,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
								className: "block text-xs font-semibold text-neutral-700 mb-1",
								children: "Bio / Introduction"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1113,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("textarea", {
								rows: 2,
								value: memberFormData.bio,
								onChange: (e) => setMemberFormData({
									...memberFormData,
									bio: e.target.value
								}),
								className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1116,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1112,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
								className: "block text-xs font-semibold text-neutral-700 mb-1",
								children: "Skills & Focus Areas (comma-separated)"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1127,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("input", {
								type: "text",
								value: memberFormData.skills,
								onChange: (e) => setMemberFormData({
									...memberFormData,
									skills: e.target.value
								}),
								placeholder: "e.g. Next.js, Python, Figma, Embedded C",
								className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1130,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1126,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
									className: "block text-xs font-semibold text-neutral-700 mb-1",
									children: "GitHub URL"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1143,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("input", {
									type: "url",
									value: memberFormData.githubUrl,
									onChange: (e) => setMemberFormData({
										...memberFormData,
										githubUrl: e.target.value
									}),
									placeholder: "https://github.com/username",
									className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1146,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1142,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
									className: "block text-xs font-semibold text-neutral-700 mb-1",
									children: "LinkedIn URL"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1158,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("input", {
									type: "url",
									value: memberFormData.linkedinUrl,
									onChange: (e) => setMemberFormData({
										...memberFormData,
										linkedinUrl: e.target.value
									}),
									placeholder: "https://linkedin.com/in/username",
									className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1161,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1157,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1141,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "pt-4 border-t border-neutral-200 flex items-center justify-end gap-2",
								children: [/* @__PURE__ */ _jsxDEV("button", {
									type: "button",
									onClick: () => setIsMemberModalOpen(false),
									className: "px-4 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 bg-neutral-100 rounded-md",
									children: "Cancel"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1174,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("button", {
									type: "submit",
									className: "px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md",
									children: editingMember ? "Save Changes" : "Create Member"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1181,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1173,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 977,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 972,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 967,
				columnNumber: 9
			}, this),
			isEventModalOpen && /* @__PURE__ */ _jsxDEV("div", {
				role: "dialog",
				"aria-modal": "true",
				className: "fixed inset-0 z-50 bg-neutral-950/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto",
				children: /* @__PURE__ */ _jsxDEV("div", {
					className: "bg-white rounded-lg max-w-xl w-full max-h-[90vh] overflow-y-auto border border-neutral-300 shadow-xl p-6",
					children: [/* @__PURE__ */ _jsxDEV("h3", {
						className: "text-lg font-bold text-neutral-950 mb-4",
						children: editingEvent ? "Edit Event" : "Create New Event"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1201,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("form", {
						onSubmit: handleSaveEvent,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
								className: "block text-xs font-semibold text-neutral-700 mb-1",
								children: "Event Title *"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1207,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("input", {
								type: "text",
								required: true,
								value: eventFormData.title,
								onChange: (e) => setEventFormData({
									...eventFormData,
									title: e.target.value
								}),
								placeholder: "e.g. Next.js 15 & MongoDB Workshop",
								className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1210,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1206,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
									className: "block text-xs font-semibold text-neutral-700 mb-1",
									children: "Category"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1224,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("select", {
									value: eventFormData.category,
									onChange: (e) => setEventFormData({
										...eventFormData,
										category: e.target.value
									}),
									className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md",
									children: [
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Workshop",
											children: "Workshop"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1237,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Hackathon",
											children: "Hackathon"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1238,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Tech Talk",
											children: "Tech Talk"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1239,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Project Demo",
											children: "Project Demo"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1240,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Social",
											children: "Social"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1241,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1227,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1223,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
									className: "block text-xs font-semibold text-neutral-700 mb-1",
									children: "Status"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1246,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("select", {
									value: eventFormData.status,
									onChange: (e) => setEventFormData({
										...eventFormData,
										status: e.target.value
									}),
									className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md",
									children: [
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Upcoming",
											children: "Upcoming"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1259,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Past",
											children: "Past"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1260,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Cancelled",
											children: "Cancelled"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1261,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1249,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1245,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1222,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
								children: [
									/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
										className: "block text-xs font-semibold text-neutral-700 mb-1",
										children: "Date *"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1268,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("input", {
										type: "date",
										required: true,
										value: eventFormData.date,
										onChange: (e) => setEventFormData({
											...eventFormData,
											date: e.target.value
										}),
										className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1271,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1267,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
										className: "block text-xs font-semibold text-neutral-700 mb-1",
										children: "Time Window"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1283,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("input", {
										type: "text",
										value: eventFormData.time,
										onChange: (e) => setEventFormData({
											...eventFormData,
											time: e.target.value
										}),
										placeholder: "18:00 - 20:30",
										className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1286,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1282,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
										className: "block text-xs font-semibold text-neutral-700 mb-1",
										children: "Capacity (Seats)"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1298,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("input", {
										type: "number",
										value: eventFormData.capacity,
										onChange: (e) => setEventFormData({
											...eventFormData,
											capacity: Number(e.target.value)
										}),
										className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1301,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1297,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1266,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
								className: "block text-xs font-semibold text-neutral-700 mb-1",
								children: "Location / Venue"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1316,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("input", {
								type: "text",
								value: eventFormData.location,
								onChange: (e) => setEventFormData({
									...eventFormData,
									location: e.target.value
								}),
								placeholder: "e.g. Turing Hall 314 or Online Discord",
								className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1319,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1315,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
									className: "block text-xs font-semibold text-neutral-700 mb-1",
									children: "Speaker / Host Name"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1332,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("input", {
									type: "text",
									value: eventFormData.speakerName,
									onChange: (e) => setEventFormData({
										...eventFormData,
										speakerName: e.target.value
									}),
									placeholder: "e.g. Aisha Al-Mansoor",
									className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1335,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1331,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
									className: "block text-xs font-semibold text-neutral-700 mb-1",
									children: "Speaker Role / Title"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1347,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("input", {
									type: "text",
									value: eventFormData.speakerRole,
									onChange: (e) => setEventFormData({
										...eventFormData,
										speakerRole: e.target.value
									}),
									placeholder: "e.g. Tech Lead @ ApexTech",
									className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1350,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1346,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1330,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
								className: "block text-xs font-semibold text-neutral-700 mb-1",
								children: "Event Description"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1363,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("textarea", {
								rows: 3,
								value: eventFormData.description,
								onChange: (e) => setEventFormData({
									...eventFormData,
									description: e.target.value
								}),
								placeholder: "Overview of the workshop or event...",
								className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1366,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1362,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "pt-4 border-t border-neutral-200 flex items-center justify-end gap-2",
								children: [/* @__PURE__ */ _jsxDEV("button", {
									type: "button",
									onClick: () => setIsEventModalOpen(false),
									className: "px-4 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 bg-neutral-100 rounded-md",
									children: "Cancel"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1378,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("button", {
									type: "submit",
									className: "px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md",
									children: editingEvent ? "Save Event Changes" : "Publish Event"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1385,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1377,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1205,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 1200,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1195,
				columnNumber: 9
			}, this),
			isPostModalOpen && /* @__PURE__ */ _jsxDEV("div", {
				role: "dialog",
				"aria-modal": "true",
				className: "fixed inset-0 z-50 bg-neutral-950/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto",
				children: /* @__PURE__ */ _jsxDEV("div", {
					className: "bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-neutral-300 shadow-xl p-6",
					children: [/* @__PURE__ */ _jsxDEV("h3", {
						className: "text-lg font-bold text-neutral-950 mb-4",
						children: editingPost ? "Edit Blog Article" : "Write New Blog Article"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1405,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("form", {
						onSubmit: handleSavePost,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
								className: "block text-xs font-semibold text-neutral-700 mb-1",
								children: "Article Title *"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1411,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("input", {
								type: "text",
								required: true,
								value: postFormData.title,
								onChange: (e) => setPostFormData({
									...postFormData,
									title: e.target.value
								}),
								placeholder: "e.g. Next.js 15 App Router & MongoDB M0 Setup",
								className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1414,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1410,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
								children: [
									/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
										className: "block text-xs font-semibold text-neutral-700 mb-1",
										children: "Category"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1428,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("select", {
										value: postFormData.category,
										onChange: (e) => setPostFormData({
											...postFormData,
											category: e.target.value
										}),
										className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md",
										children: [
											/* @__PURE__ */ _jsxDEV("option", {
												value: "Tutorial",
												children: "Tutorial"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1441,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("option", {
												value: "Project Showcase",
												children: "Project Showcase"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1442,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("option", {
												value: "Career & Advice",
												children: "Career & Advice"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1443,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("option", {
												value: "Event Recap",
												children: "Event Recap"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1444,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1431,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1427,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
										className: "block text-xs font-semibold text-neutral-700 mb-1",
										children: "Estimated Read Time (min)"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1449,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("input", {
										type: "number",
										value: postFormData.readTimeMinutes,
										onChange: (e) => setPostFormData({
											...postFormData,
											readTimeMinutes: Number(e.target.value)
										}),
										className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1452,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1448,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
										className: "block text-xs font-semibold text-neutral-700 mb-1",
										children: "Status"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1466,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("select", {
										value: postFormData.isPublished ? "published" : "draft",
										onChange: (e) => setPostFormData({
											...postFormData,
											isPublished: e.target.value === "published"
										}),
										className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md",
										children: [/* @__PURE__ */ _jsxDEV("option", {
											value: "published",
											children: "Published"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1479,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("option", {
											value: "draft",
											children: "Draft"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1480,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1469,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1465,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1426,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
									className: "block text-xs font-semibold text-neutral-700 mb-1",
									children: "Author Name"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1487,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("input", {
									type: "text",
									value: postFormData.authorName,
									onChange: (e) => setPostFormData({
										...postFormData,
										authorName: e.target.value
									}),
									className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1490,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1486,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
									className: "block text-xs font-semibold text-neutral-700 mb-1",
									children: "Author Role"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1501,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("input", {
									type: "text",
									value: postFormData.authorRole,
									onChange: (e) => setPostFormData({
										...postFormData,
										authorRole: e.target.value
									}),
									className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1504,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1500,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1485,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
								className: "block text-xs font-semibold text-neutral-700 mb-1",
								children: "Excerpt / Short Summary"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1516,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("textarea", {
								rows: 2,
								value: postFormData.excerpt,
								onChange: (e) => setPostFormData({
									...postFormData,
									excerpt: e.target.value
								}),
								placeholder: "One or two sentences summarizing the article...",
								className: "w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1519,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1515,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
								className: "block text-xs font-semibold text-neutral-700 mb-1",
								children: "Article Content (Markdown supported) *"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1531,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("textarea", {
								rows: 8,
								required: true,
								value: postFormData.content,
								onChange: (e) => setPostFormData({
									...postFormData,
									content: e.target.value
								}),
								placeholder: "Write the full post here...",
								className: "w-full px-3 py-2 text-xs font-mono bg-neutral-50 border border-neutral-200 rounded-md"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1534,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1530,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "pt-4 border-t border-neutral-200 flex items-center justify-end gap-2",
								children: [/* @__PURE__ */ _jsxDEV("button", {
									type: "button",
									onClick: () => setIsPostModalOpen(false),
									className: "px-4 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 bg-neutral-100 rounded-md",
									children: "Cancel"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1547,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("button", {
									type: "submit",
									className: "px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md",
									children: editingPost ? "Save Article" : "Publish Article"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1554,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1546,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1409,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 1404,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1399,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 388,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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Ozs7Ozs7T0FFTCx3QkFBQyxPQUFELGFBQ0Usd0JBQUMsU0FBRDtRQUFPLFdBQVU7a0JBQW9EO09BRTlEOzs7O2lCQUNQLHdCQUFDLFlBQUQ7UUFDRSxNQUFNO1FBQ04sT0FBTyxhQUFhO1FBQ3BCLFdBQVcsTUFDVCxnQkFBZ0I7U0FBRSxHQUFHO1NBQWMsU0FBUyxFQUFFLE9BQU87UUFBTSxDQUFDO1FBRTlELGFBQVk7UUFDWixXQUFVO09BQ1g7Ozs7ZUFDRTs7Ozs7T0FFTCx3QkFBQyxPQUFELGFBQ0Usd0JBQUMsU0FBRDtRQUFPLFdBQVU7a0JBQW9EO09BRTlEOzs7O2lCQUNQLHdCQUFDLFlBQUQ7UUFDRSxNQUFNO1FBQ047UUFDQSxPQUFPLGFBQWE7UUFDcEIsV0FBVyxNQUNULGdCQUFnQjtTQUFFLEdBQUc7U0FBYyxTQUFTLEVBQUUsT0FBTztRQUFNLENBQUM7UUFFOUQsYUFBWTtRQUNaLFdBQVU7T0FDWDs7OztlQUNFOzs7OztPQUVMLHdCQUFDLE9BQUQ7UUFBSyxXQUFVO2tCQUFmLENBQ0Usd0JBQUMsVUFBRDtTQUNFLE1BQUs7U0FDTCxlQUFlLG1CQUFtQixLQUFLO1NBQ3ZDLFdBQVU7bUJBQ1g7UUFFTzs7OztrQkFDUix3QkFBQyxVQUFEO1NBQ0UsTUFBSztTQUNMLFdBQVU7bUJBRVQsY0FBYyxpQkFBaUI7UUFDMUI7Ozs7Z0JBQ0w7Ozs7OztNQUNEOzs7OzthQUNIOzs7Ozs7R0FDRjs7Ozs7RUFFQTs7Ozs7O0FBRWIiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQWRtaW5EYXNoYm9hcmQudHN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIFVzZXJzLFxuICBDYWxlbmRhcixcbiAgQm9va09wZW4sXG4gIEZpbGVUZXh0LFxuICBQbHVzLFxuICBUcmFzaDIsXG4gIEVkaXQyLFxuICBDaGVja0NpcmNsZSxcbiAgWENpcmNsZSxcbiAgRG93bmxvYWQsXG4gIFJvdGF0ZUNjdyxcbiAgU2VhcmNoLFxuICBFeHRlcm5hbExpbmssXG4gIFVzZXJDaGVjayxcbiAgU2hpZWxkLFxuICBMYXllcnMsXG4gIEFycm93UmlnaHQsXG59IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQge1xuICBDbHViTWVtYmVyLFxuICBDbHViRXZlbnQsXG4gIEJsb2dQb3N0LFxuICBNZW1iZXJzaGlwQXBwbGljYXRpb24sXG4gIE1lbWJlclJvbGUsXG4gIFRyYWNrLFxuICBNZW1iZXJTdGF0dXMsXG4gIEV2ZW50Q2F0ZWdvcnksXG4gIEV2ZW50U3RhdHVzLFxuICBCbG9nQ2F0ZWdvcnksXG4gIEFwcGxpY2F0aW9uU3RhdHVzLFxufSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IExhbmd1YWdlLCB0cmFuc2xhdGlvbnMgfSBmcm9tICcuLi9kYXRhL3RyYW5zbGF0aW9ucyc7XG5cbmludGVyZmFjZSBBZG1pbkRhc2hib2FyZFByb3BzIHtcbiAgbWVtYmVyczogQ2x1Yk1lbWJlcltdO1xuICBldmVudHM6IENsdWJFdmVudFtdO1xuICBwb3N0czogQmxvZ1Bvc3RbXTtcbiAgYXBwbGljYXRpb25zOiBNZW1iZXJzaGlwQXBwbGljYXRpb25bXTtcbiAgbGFuZ3VhZ2U6IExhbmd1YWdlO1xuICBvbkFkZE1lbWJlcjogKG1lbWJlcjogT21pdDxDbHViTWVtYmVyLCAnaWQnIHwgJ2pvaW5lZERhdGUnPikgPT4gdm9pZDtcbiAgb25VcGRhdGVNZW1iZXI6IChpZDogc3RyaW5nLCB1cGRhdGVzOiBQYXJ0aWFsPENsdWJNZW1iZXI+KSA9PiB2b2lkO1xuICBvbkRlbGV0ZU1lbWJlcjogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uQWRkRXZlbnQ6IChldmVudDogT21pdDxDbHViRXZlbnQsICdpZCcgfCAncnN2cHMnPikgPT4gdm9pZDtcbiAgb25VcGRhdGVFdmVudDogKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IFBhcnRpYWw8Q2x1YkV2ZW50PikgPT4gdm9pZDtcbiAgb25EZWxldGVFdmVudDogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uQWRkUG9zdDogKHBvc3Q6IE9taXQ8QmxvZ1Bvc3QsICdpZCcgfCAnbGlrZXMnIHwgJ3B1Ymxpc2hlZEF0Jz4pID0+IHZvaWQ7XG4gIG9uVXBkYXRlUG9zdDogKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IFBhcnRpYWw8QmxvZ1Bvc3Q+KSA9PiB2b2lkO1xuICBvbkRlbGV0ZVBvc3Q6IChpZDogc3RyaW5nKSA9PiB2b2lkO1xuICBvblVwZGF0ZUFwcGxpY2F0aW9uU3RhdHVzOiAoaWQ6IHN0cmluZywgc3RhdHVzOiBBcHBsaWNhdGlvblN0YXR1cywgbm90ZXM/OiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uRGVsZXRlQXBwbGljYXRpb246IChpZDogc3RyaW5nKSA9PiB2b2lkO1xuICBvbkV4cG9ydERhdGFiYXNlU2VlZDogKCkgPT4gdm9pZDtcbiAgb25SZXNldERlZmF1bHRzOiAoKSA9PiB2b2lkO1xuICBvbk9wZW5CbHVlcHJpbnQ6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBBZG1pbkRhc2hib2FyZDogUmVhY3QuRkM8QWRtaW5EYXNoYm9hcmRQcm9wcz4gPSAoe1xuICBtZW1iZXJzLFxuICBldmVudHMsXG4gIHBvc3RzLFxuICBhcHBsaWNhdGlvbnMsXG4gIGxhbmd1YWdlLFxuICBvbkFkZE1lbWJlcixcbiAgb25VcGRhdGVNZW1iZXIsXG4gIG9uRGVsZXRlTWVtYmVyLFxuICBvbkFkZEV2ZW50LFxuICBvblVwZGF0ZUV2ZW50LFxuICBvbkRlbGV0ZUV2ZW50LFxuICBvbkFkZFBvc3QsXG4gIG9uVXBkYXRlUG9zdCxcbiAgb25EZWxldGVQb3N0LFxuICBvblVwZGF0ZUFwcGxpY2F0aW9uU3RhdHVzLFxuICBvbkRlbGV0ZUFwcGxpY2F0aW9uLFxuICBvbkV4cG9ydERhdGFiYXNlU2VlZCxcbiAgb25SZXNldERlZmF1bHRzLFxuICBvbk9wZW5CbHVlcHJpbnQsXG59KSA9PiB7XG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZTwnbWVtYmVycycgfCAnZXZlbnRzJyB8ICdwb3N0cycgfCAnYXBwbGljYXRpb25zJyB8ICdleHBvcnQnPignbWVtYmVycycpO1xuICBjb25zdCB0ID0gdHJhbnNsYXRpb25zW2xhbmd1YWdlXTtcblxuICAvLyBNZW1iZXIgTW9kYWwgU3RhdGVcbiAgY29uc3QgW2lzTWVtYmVyTW9kYWxPcGVuLCBzZXRJc01lbWJlck1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlZGl0aW5nTWVtYmVyLCBzZXRFZGl0aW5nTWVtYmVyXSA9IHVzZVN0YXRlPENsdWJNZW1iZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW21lbWJlckZvcm1EYXRhLCBzZXRNZW1iZXJGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogJycsXG4gICAgcm9sZTogJ0NvcmUgTWVtYmVyJyBhcyBNZW1iZXJSb2xlLFxuICAgIHRyYWNrOiAnU29mdHdhcmUgJiBBSScgYXMgVHJhY2ssXG4gICAgZW1haWw6ICcnLFxuICAgIHN0dWRlbnRJZDogJycsXG4gICAgZ3JhZHVhdGlvblllYXI6IDIwMjgsXG4gICAgYmlvOiAnJyxcbiAgICBza2lsbHM6ICcnLFxuICAgIGdpdGh1YlVybDogJycsXG4gICAgbGlua2VkaW5Vcmw6ICcnLFxuICAgIHN0YXR1czogJ0FjdGl2ZScgYXMgTWVtYmVyU3RhdHVzLFxuICB9KTtcblxuICAvLyBFdmVudCBNb2RhbCBTdGF0ZVxuICBjb25zdCBbaXNFdmVudE1vZGFsT3Blbiwgc2V0SXNFdmVudE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlZGl0aW5nRXZlbnQsIHNldEVkaXRpbmdFdmVudF0gPSB1c2VTdGF0ZTxDbHViRXZlbnQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2V2ZW50Rm9ybURhdGEsIHNldEV2ZW50Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIHRpdGxlOiAnJyxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgYWdlbmRhOiAnJyxcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSxcbiAgICB0aW1lOiAnMTg6MDAgLSAyMDowMCcsXG4gICAgbG9jYXRpb246ICdUdXJpbmcgSGFsbCwgUm9vbSAzMTQnLFxuICAgIGlzT25saW5lOiBmYWxzZSxcbiAgICBjYXRlZ29yeTogJ1dvcmtzaG9wJyBhcyBFdmVudENhdGVnb3J5LFxuICAgIGNhcGFjaXR5OiA0MCxcbiAgICBzcGVha2VyTmFtZTogJycsXG4gICAgc3BlYWtlclJvbGU6ICcnLFxuICAgIHN0YXR1czogJ1VwY29taW5nJyBhcyBFdmVudFN0YXR1cyxcbiAgfSk7XG5cbiAgLy8gUG9zdCBNb2RhbCBTdGF0ZVxuICBjb25zdCBbaXNQb3N0TW9kYWxPcGVuLCBzZXRJc1Bvc3RNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZWRpdGluZ1Bvc3QsIHNldEVkaXRpbmdQb3N0XSA9IHVzZVN0YXRlPEJsb2dQb3N0IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtwb3N0Rm9ybURhdGEsIHNldFBvc3RGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgdGl0bGU6ICcnLFxuICAgIHNsdWc6ICcnLFxuICAgIGV4Y2VycHQ6ICcnLFxuICAgIGNvbnRlbnQ6ICcnLFxuICAgIGF1dGhvck5hbWU6ICdBcGV4IFRlYW0nLFxuICAgIGF1dGhvclJvbGU6ICdDb250cmlidXRvcicsXG4gICAgY2F0ZWdvcnk6ICdUdXRvcmlhbCcgYXMgQmxvZ0NhdGVnb3J5LFxuICAgIHJlYWRUaW1lTWludXRlczogNSxcbiAgICBpc1B1Ymxpc2hlZDogdHJ1ZSxcbiAgfSk7XG5cbiAgLy8gU2VhcmNoICYgRmlsdGVyIFN0YXRlXG4gIGNvbnN0IFttZW1iZXJTZWFyY2gsIHNldE1lbWJlclNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFttZW1iZXJGaWx0ZXJSb2xlLCBzZXRNZW1iZXJGaWx0ZXJSb2xlXSA9IHVzZVN0YXRlPHN0cmluZz4oJ0FsbCcpO1xuICBjb25zdCBbYXBwRmlsdGVyU3RhdHVzLCBzZXRBcHBGaWx0ZXJTdGF0dXNdID0gdXNlU3RhdGU8c3RyaW5nPignQWxsJyk7XG5cbiAgLy8gTWVtYmVyIEZvcm0gSGFuZGxlcnNcbiAgY29uc3QgaGFuZGxlT3BlbkFkZE1lbWJlciA9ICgpID0+IHtcbiAgICBzZXRFZGl0aW5nTWVtYmVyKG51bGwpO1xuICAgIHNldE1lbWJlckZvcm1EYXRhKHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcm9sZTogJ0NvcmUgTWVtYmVyJyxcbiAgICAgIHRyYWNrOiAnU29mdHdhcmUgJiBBSScsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBzdHVkZW50SWQ6ICcnLFxuICAgICAgZ3JhZHVhdGlvblllYXI6IDIwMjgsXG4gICAgICBiaW86ICcnLFxuICAgICAgc2tpbGxzOiAnVHlwZVNjcmlwdCwgUmVhY3QsIEdpdCcsXG4gICAgICBnaXRodWJVcmw6ICcnLFxuICAgICAgbGlua2VkaW5Vcmw6ICcnLFxuICAgICAgc3RhdHVzOiAnQWN0aXZlJyxcbiAgICB9KTtcbiAgICBzZXRJc01lbWJlck1vZGFsT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVPcGVuRWRpdE1lbWJlciA9IChtZW1iZXI6IENsdWJNZW1iZXIpID0+IHtcbiAgICBzZXRFZGl0aW5nTWVtYmVyKG1lbWJlcik7XG4gICAgc2V0TWVtYmVyRm9ybURhdGEoe1xuICAgICAgbmFtZTogbWVtYmVyLm5hbWUsXG4gICAgICByb2xlOiBtZW1iZXIucm9sZSxcbiAgICAgIHRyYWNrOiBtZW1iZXIudHJhY2ssXG4gICAgICBlbWFpbDogbWVtYmVyLmVtYWlsLFxuICAgICAgc3R1ZGVudElkOiBtZW1iZXIuc3R1ZGVudElkIHx8ICcnLFxuICAgICAgZ3JhZHVhdGlvblllYXI6IG1lbWJlci5ncmFkdWF0aW9uWWVhcixcbiAgICAgIGJpbzogbWVtYmVyLmJpbyxcbiAgICAgIHNraWxsczogbWVtYmVyLnNraWxscy5qb2luKCcsICcpLFxuICAgICAgZ2l0aHViVXJsOiBtZW1iZXIuZ2l0aHViVXJsIHx8ICcnLFxuICAgICAgbGlua2VkaW5Vcmw6IG1lbWJlci5saW5rZWRpblVybCB8fCAnJyxcbiAgICAgIHN0YXR1czogbWVtYmVyLnN0YXR1cyxcbiAgICB9KTtcbiAgICBzZXRJc01lbWJlck1vZGFsT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTYXZlTWVtYmVyID0gKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIW1lbWJlckZvcm1EYXRhLm5hbWUgfHwgIW1lbWJlckZvcm1EYXRhLmVtYWlsKSByZXR1cm47XG5cbiAgICBjb25zdCBza2lsbHNBcnJheSA9IG1lbWJlckZvcm1EYXRhLnNraWxsc1xuICAgICAgLnNwbGl0KCcsJylcbiAgICAgIC5tYXAoKHMpID0+IHMudHJpbSgpKVxuICAgICAgLmZpbHRlcihCb29sZWFuKTtcblxuICAgIGlmIChlZGl0aW5nTWVtYmVyKSB7XG4gICAgICBvblVwZGF0ZU1lbWJlcihlZGl0aW5nTWVtYmVyLmlkLCB7XG4gICAgICAgIG5hbWU6IG1lbWJlckZvcm1EYXRhLm5hbWUsXG4gICAgICAgIHJvbGU6IG1lbWJlckZvcm1EYXRhLnJvbGUsXG4gICAgICAgIHRyYWNrOiBtZW1iZXJGb3JtRGF0YS50cmFjayxcbiAgICAgICAgZW1haWw6IG1lbWJlckZvcm1EYXRhLmVtYWlsLFxuICAgICAgICBzdHVkZW50SWQ6IG1lbWJlckZvcm1EYXRhLnN0dWRlbnRJZCxcbiAgICAgICAgZ3JhZHVhdGlvblllYXI6IE51bWJlcihtZW1iZXJGb3JtRGF0YS5ncmFkdWF0aW9uWWVhciksXG4gICAgICAgIGJpbzogbWVtYmVyRm9ybURhdGEuYmlvLFxuICAgICAgICBza2lsbHM6IHNraWxsc0FycmF5LFxuICAgICAgICBnaXRodWJVcmw6IG1lbWJlckZvcm1EYXRhLmdpdGh1YlVybCxcbiAgICAgICAgbGlua2VkaW5Vcmw6IG1lbWJlckZvcm1EYXRhLmxpbmtlZGluVXJsLFxuICAgICAgICBzdGF0dXM6IG1lbWJlckZvcm1EYXRhLnN0YXR1cyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb2xvcnMgPSBbXG4gICAgICAgICdmcm9tLWFtYmVyLTYwMCB0by1hbWJlci04MDAnLFxuICAgICAgICAnZnJvbS1ibHVlLTYwMCB0by1pbmRpZ28tODAwJyxcbiAgICAgICAgJ2Zyb20tZW1lcmFsZC02MDAgdG8tdGVhbC04MDAnLFxuICAgICAgICAnZnJvbS1wdXJwbGUtNjAwIHRvLWluZGlnby04MDAnLFxuICAgICAgICAnZnJvbS1zdG9uZS02MDAgdG8tc3RvbmUtODAwJyxcbiAgICAgICAgJ2Zyb20tcm9zZS02MDAgdG8tcGluay04MDAnLFxuICAgICAgXTtcbiAgICAgIGNvbnN0IHJhbmRvbUNvbG9yID0gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXTtcblxuICAgICAgb25BZGRNZW1iZXIoe1xuICAgICAgICBuYW1lOiBtZW1iZXJGb3JtRGF0YS5uYW1lLFxuICAgICAgICByb2xlOiBtZW1iZXJGb3JtRGF0YS5yb2xlLFxuICAgICAgICB0cmFjazogbWVtYmVyRm9ybURhdGEudHJhY2ssXG4gICAgICAgIGVtYWlsOiBtZW1iZXJGb3JtRGF0YS5lbWFpbCxcbiAgICAgICAgc3R1ZGVudElkOiBtZW1iZXJGb3JtRGF0YS5zdHVkZW50SWQsXG4gICAgICAgIGdyYWR1YXRpb25ZZWFyOiBOdW1iZXIobWVtYmVyRm9ybURhdGEuZ3JhZHVhdGlvblllYXIpLFxuICAgICAgICBiaW86IG1lbWJlckZvcm1EYXRhLmJpbyxcbiAgICAgICAgc2tpbGxzOiBza2lsbHNBcnJheSxcbiAgICAgICAgZ2l0aHViVXJsOiBtZW1iZXJGb3JtRGF0YS5naXRodWJVcmwsXG4gICAgICAgIGxpbmtlZGluVXJsOiBtZW1iZXJGb3JtRGF0YS5saW5rZWRpblVybCxcbiAgICAgICAgc3RhdHVzOiBtZW1iZXJGb3JtRGF0YS5zdGF0dXMsXG4gICAgICAgIGF2YXRhckNvbG9yOiByYW5kb21Db2xvcixcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRJc01lbWJlck1vZGFsT3BlbihmYWxzZSk7XG4gIH07XG5cbiAgLy8gRXZlbnQgRm9ybSBIYW5kbGVyc1xuICBjb25zdCBoYW5kbGVPcGVuQWRkRXZlbnQgPSAoKSA9PiB7XG4gICAgc2V0RWRpdGluZ0V2ZW50KG51bGwpO1xuICAgIHNldEV2ZW50Rm9ybURhdGEoe1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgYWdlbmRhOiAnJyxcbiAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdLFxuICAgICAgdGltZTogJzE4OjAwIC0gMjA6MDAnLFxuICAgICAgbG9jYXRpb246ICdUdXJpbmcgSGFsbCwgUm9vbSAzMTQnLFxuICAgICAgaXNPbmxpbmU6IGZhbHNlLFxuICAgICAgY2F0ZWdvcnk6ICdXb3Jrc2hvcCcsXG4gICAgICBjYXBhY2l0eTogNDAsXG4gICAgICBzcGVha2VyTmFtZTogJycsXG4gICAgICBzcGVha2VyUm9sZTogJycsXG4gICAgICBzdGF0dXM6ICdVcGNvbWluZycsXG4gICAgfSk7XG4gICAgc2V0SXNFdmVudE1vZGFsT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVPcGVuRWRpdEV2ZW50ID0gKGV2OiBDbHViRXZlbnQpID0+IHtcbiAgICBzZXRFZGl0aW5nRXZlbnQoZXYpO1xuICAgIHNldEV2ZW50Rm9ybURhdGEoe1xuICAgICAgdGl0bGU6IGV2LnRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IGV2LmRlc2NyaXB0aW9uLFxuICAgICAgYWdlbmRhOiBldi5hZ2VuZGEgfHwgJycsXG4gICAgICBkYXRlOiBldi5kYXRlLFxuICAgICAgdGltZTogZXYudGltZSxcbiAgICAgIGxvY2F0aW9uOiBldi5sb2NhdGlvbixcbiAgICAgIGlzT25saW5lOiBldi5pc09ubGluZSxcbiAgICAgIGNhdGVnb3J5OiBldi5jYXRlZ29yeSxcbiAgICAgIGNhcGFjaXR5OiBldi5jYXBhY2l0eSxcbiAgICAgIHNwZWFrZXJOYW1lOiBldi5zcGVha2VyTmFtZSB8fCAnJyxcbiAgICAgIHNwZWFrZXJSb2xlOiBldi5zcGVha2VyUm9sZSB8fCAnJyxcbiAgICAgIHN0YXR1czogZXYuc3RhdHVzLFxuICAgIH0pO1xuICAgIHNldElzRXZlbnRNb2RhbE9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2F2ZUV2ZW50ID0gKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIWV2ZW50Rm9ybURhdGEudGl0bGUgfHwgIWV2ZW50Rm9ybURhdGEuZGF0ZSkgcmV0dXJuO1xuXG4gICAgaWYgKGVkaXRpbmdFdmVudCkge1xuICAgICAgb25VcGRhdGVFdmVudChlZGl0aW5nRXZlbnQuaWQsIHtcbiAgICAgICAgLi4uZXZlbnRGb3JtRGF0YSxcbiAgICAgICAgY2FwYWNpdHk6IE51bWJlcihldmVudEZvcm1EYXRhLmNhcGFjaXR5KSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbkFkZEV2ZW50KHtcbiAgICAgICAgLi4uZXZlbnRGb3JtRGF0YSxcbiAgICAgICAgY2FwYWNpdHk6IE51bWJlcihldmVudEZvcm1EYXRhLmNhcGFjaXR5KSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRJc0V2ZW50TW9kYWxPcGVuKGZhbHNlKTtcbiAgfTtcblxuICAvLyBQb3N0IEZvcm0gSGFuZGxlcnNcbiAgY29uc3QgaGFuZGxlT3BlbkFkZFBvc3QgPSAoKSA9PiB7XG4gICAgc2V0RWRpdGluZ1Bvc3QobnVsbCk7XG4gICAgc2V0UG9zdEZvcm1EYXRhKHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIHNsdWc6ICcnLFxuICAgICAgZXhjZXJwdDogJycsXG4gICAgICBjb250ZW50OiAnJyxcbiAgICAgIGF1dGhvck5hbWU6ICdBcGV4IFRlYW0nLFxuICAgICAgYXV0aG9yUm9sZTogJ0NvcmUgQ29udHJpYnV0b3InLFxuICAgICAgY2F0ZWdvcnk6ICdUdXRvcmlhbCcsXG4gICAgICByZWFkVGltZU1pbnV0ZXM6IDUsXG4gICAgICBpc1B1Ymxpc2hlZDogdHJ1ZSxcbiAgICB9KTtcbiAgICBzZXRJc1Bvc3RNb2RhbE9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlT3BlbkVkaXRQb3N0ID0gKHBvc3Q6IEJsb2dQb3N0KSA9PiB7XG4gICAgc2V0RWRpdGluZ1Bvc3QocG9zdCk7XG4gICAgc2V0UG9zdEZvcm1EYXRhKHtcbiAgICAgIHRpdGxlOiBwb3N0LnRpdGxlLFxuICAgICAgc2x1ZzogcG9zdC5zbHVnLFxuICAgICAgZXhjZXJwdDogcG9zdC5leGNlcnB0LFxuICAgICAgY29udGVudDogcG9zdC5jb250ZW50LFxuICAgICAgYXV0aG9yTmFtZTogcG9zdC5hdXRob3JOYW1lLFxuICAgICAgYXV0aG9yUm9sZTogcG9zdC5hdXRob3JSb2xlLFxuICAgICAgY2F0ZWdvcnk6IHBvc3QuY2F0ZWdvcnksXG4gICAgICByZWFkVGltZU1pbnV0ZXM6IHBvc3QucmVhZFRpbWVNaW51dGVzLFxuICAgICAgaXNQdWJsaXNoZWQ6IHBvc3QuaXNQdWJsaXNoZWQsXG4gICAgfSk7XG4gICAgc2V0SXNQb3N0TW9kYWxPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNhdmVQb3N0ID0gKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXBvc3RGb3JtRGF0YS50aXRsZSB8fCAhcG9zdEZvcm1EYXRhLmNvbnRlbnQpIHJldHVybjtcblxuICAgIGNvbnN0IHNsdWcgPVxuICAgICAgcG9zdEZvcm1EYXRhLnNsdWcudHJpbSgpIHx8XG4gICAgICBwb3N0Rm9ybURhdGEudGl0bGVcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgLnJlcGxhY2UoL1teYS16MC05XSsvZywgJy0nKVxuICAgICAgICAucmVwbGFjZSgvKF4tfC0kKS9nLCAnJyk7XG5cbiAgICBpZiAoZWRpdGluZ1Bvc3QpIHtcbiAgICAgIG9uVXBkYXRlUG9zdChlZGl0aW5nUG9zdC5pZCwge1xuICAgICAgICAuLi5wb3N0Rm9ybURhdGEsXG4gICAgICAgIHNsdWcsXG4gICAgICAgIHJlYWRUaW1lTWludXRlczogTnVtYmVyKHBvc3RGb3JtRGF0YS5yZWFkVGltZU1pbnV0ZXMpLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uQWRkUG9zdCh7XG4gICAgICAgIC4uLnBvc3RGb3JtRGF0YSxcbiAgICAgICAgc2x1ZyxcbiAgICAgICAgcmVhZFRpbWVNaW51dGVzOiBOdW1iZXIocG9zdEZvcm1EYXRhLnJlYWRUaW1lTWludXRlcyksXG4gICAgICB9KTtcbiAgICB9XG4gICAgc2V0SXNQb3N0TW9kYWxPcGVuKGZhbHNlKTtcbiAgfTtcblxuICAvLyBDb252ZXJ0IGFwcGxpY2F0aW9uIHRvIG1lbWJlclxuICBjb25zdCBoYW5kbGVDb252ZXJ0QXBwVG9NZW1iZXIgPSAoYXBwOiBNZW1iZXJzaGlwQXBwbGljYXRpb24pID0+IHtcbiAgICBjb25zdCBkZWZhdWx0VHJhY2s6IFRyYWNrID0gYXBwLnRyYWNrc1swXSB8fCAnU29mdHdhcmUgJiBBSSc7XG4gICAgb25BZGRNZW1iZXIoe1xuICAgICAgbmFtZTogYXBwLmZ1bGxOYW1lLFxuICAgICAgcm9sZTogJ0NvcmUgTWVtYmVyJyxcbiAgICAgIHRyYWNrOiBkZWZhdWx0VHJhY2ssXG4gICAgICBlbWFpbDogYXBwLmVtYWlsLFxuICAgICAgc3R1ZGVudElkOiBhcHAuc3R1ZGVudElkLFxuICAgICAgZ3JhZHVhdGlvblllYXI6XG4gICAgICAgIGFwcC55ZWFyT2ZTdHVkeSA9PT0gJ0ZyZXNobWFuJ1xuICAgICAgICAgID8gMjAzMFxuICAgICAgICAgIDogYXBwLnllYXJPZlN0dWR5ID09PSAnU29waG9tb3JlJ1xuICAgICAgICAgID8gMjAyOVxuICAgICAgICAgIDogYXBwLnllYXJPZlN0dWR5ID09PSAnSnVuaW9yJ1xuICAgICAgICAgID8gMjAyOFxuICAgICAgICAgIDogMjAyNyxcbiAgICAgIGJpbzogYCR7YXBwLnllYXJPZlN0dWR5fSBtYWpvcmluZyBpbiAke2FwcC5tYWpvcn0uIEludGVyZXN0czogJHthcHAudHJhY2tzLmpvaW4oJywgJyl9LmAsXG4gICAgICBza2lsbHM6IFthcHAubWFqb3IsIC4uLmFwcC50cmFja3NdLFxuICAgICAgZ2l0aHViVXJsOiBhcHAucG9ydGZvbGlvVXJsLFxuICAgICAgc3RhdHVzOiAnQWN0aXZlJyxcbiAgICAgIGF2YXRhckNvbG9yOiAnZnJvbS1lbWVyYWxkLTYwMCB0by10ZWFsLTgwMCcsXG4gICAgfSk7XG4gICAgb25VcGRhdGVBcHBsaWNhdGlvblN0YXR1cyhhcHAuaWQsICdBY2NlcHRlZCcsICdFbnJvbGxlZCBhcyBhY3RpdmUgbWVtYmVyLicpO1xuICB9O1xuXG4gIC8vIEZpbHRlcmVkIGxpc3RzXG4gIGNvbnN0IGZpbHRlcmVkTWVtYmVycyA9IG1lbWJlcnMuZmlsdGVyKChtKSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlc1JvbGUgPSBtZW1iZXJGaWx0ZXJSb2xlID09PSAnQWxsJyA/IHRydWUgOiBtLnJvbGUgPT09IG1lbWJlckZpbHRlclJvbGU7XG4gICAgY29uc3QgcSA9IG1lbWJlclNlYXJjaC50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICBjb25zdCBtYXRjaGVzU2VhcmNoID1cbiAgICAgICFxIHx8XG4gICAgICBtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxKSB8fFxuICAgICAgbS5lbWFpbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHEpIHx8XG4gICAgICBtLnJvbGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxKSB8fFxuICAgICAgKG0uc3R1ZGVudElkICYmIG0uc3R1ZGVudElkLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocSkpO1xuICAgIHJldHVybiBtYXRjaGVzUm9sZSAmJiBtYXRjaGVzU2VhcmNoO1xuICB9KTtcblxuICBjb25zdCBmaWx0ZXJlZEFwcGxpY2F0aW9ucyA9IGFwcGxpY2F0aW9ucy5maWx0ZXIoKGEpID0+IHtcbiAgICByZXR1cm4gYXBwRmlsdGVyU3RhdHVzID09PSAnQWxsJyA/IHRydWUgOiBhLnN0YXR1cyA9PT0gYXBwRmlsdGVyU3RhdHVzO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwiZGFzaGJvYXJkXCIgY2xhc3NOYW1lPVwicHktMTYgbWQ6cHktMjAgYm9yZGVyLWIgYm9yZGVyLW5ldXRyYWwtMjAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDppdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuIGdhcC02IG1iLThcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1uZXV0cmFsLTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgbWItMiBmb250LW1vbm9cIj5cbiAgICAgICAgICAgICAge3QuZGFzaGJvYXJkLmJhZGdlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtbmV1dHJhbC05NTAgc206dGV4dC00eGxcIj5cbiAgICAgICAgICAgICAge3QuZGFzaGJvYXJkLnRpdGxlfVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1uZXV0cmFsLTYwMCB0ZXh0LXNtIHNtOnRleHQtYmFzZVwiPlxuICAgICAgICAgICAgICB7dC5kYXNoYm9hcmQuc3VidGl0bGV9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uT3BlbkJsdWVwcmludH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0yIHRleHQteHMgZm9udC1tb25vIGZvbnQtbWVkaXVtIHRleHQtbmV1dHJhbC04MDAgYmctbmV1dHJhbC0xMDAgaG92ZXI6YmctbmV1dHJhbC0yMDAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTMwMCByb3VuZGVkLW1kIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTmV4dC5qcyBBcmNoaXRlY3R1cmUgR3VpZGVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkV4cG9ydERhdGFiYXNlU2VlZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC0zIHB5LTIgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LW5ldXRyYWwtODAwIGJnLXdoaXRlIGhvdmVyOmJnLW5ldXRyYWwtMTAwIGJvcmRlciBib3JkZXItbmV1dHJhbC0zMDAgcm91bmRlZC1tZCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxEb3dubG9hZCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPnt0LmRhc2hib2FyZC5leHBvcnRTZWVkfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogVGFiIE5hdmlnYXRpb24gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgcC0xIGJnLW5ldXRyYWwtMTAwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCBtYi04IG92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignbWVtYmVycycpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtNCBweS0yIHRleHQteHMgZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0cmFuc2l0aW9uLWNvbG9ycyB3aGl0ZXNwYWNlLW5vd3JhcCAke1xuICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09ICdtZW1iZXJzJ1xuICAgICAgICAgICAgICAgID8gJ2JnLXdoaXRlIHRleHQtbmV1dHJhbC05NTAgc2hhZG93LXhzIGZvbnQtc2VtaWJvbGQnXG4gICAgICAgICAgICAgICAgOiAndGV4dC1uZXV0cmFsLTYwMCBob3Zlcjp0ZXh0LW5ldXRyYWwtOTAwJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFVzZXJzIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgPHNwYW4+e3QuZGFzaGJvYXJkLnRhYnMubWVtYmVyc30gKHttZW1iZXJzLmxlbmd0aH0pPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCdldmVudHMnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTQgcHktMiB0ZXh0LXhzIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdHJhbnNpdGlvbi1jb2xvcnMgd2hpdGVzcGFjZS1ub3dyYXAgJHtcbiAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSAnZXZlbnRzJ1xuICAgICAgICAgICAgICAgID8gJ2JnLXdoaXRlIHRleHQtbmV1dHJhbC05NTAgc2hhZG93LXhzIGZvbnQtc2VtaWJvbGQnXG4gICAgICAgICAgICAgICAgOiAndGV4dC1uZXV0cmFsLTYwMCBob3Zlcjp0ZXh0LW5ldXRyYWwtOTAwJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhbGVuZGFyIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgPHNwYW4+e3QuZGFzaGJvYXJkLnRhYnMuZXZlbnRzfSAoe2V2ZW50cy5sZW5ndGh9KTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYigncG9zdHMnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTQgcHktMiB0ZXh0LXhzIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdHJhbnNpdGlvbi1jb2xvcnMgd2hpdGVzcGFjZS1ub3dyYXAgJHtcbiAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSAncG9zdHMnXG4gICAgICAgICAgICAgICAgPyAnYmctd2hpdGUgdGV4dC1uZXV0cmFsLTk1MCBzaGFkb3cteHMgZm9udC1zZW1pYm9sZCdcbiAgICAgICAgICAgICAgICA6ICd0ZXh0LW5ldXRyYWwtNjAwIGhvdmVyOnRleHQtbmV1dHJhbC05MDAnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm9va09wZW4gY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICA8c3Bhbj57dC5kYXNoYm9hcmQudGFicy5wb3N0c30gKHtwb3N0cy5sZW5ndGh9KTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignYXBwbGljYXRpb25zJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC00IHB5LTIgdGV4dC14cyBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRyYW5zaXRpb24tY29sb3JzIHdoaXRlc3BhY2Utbm93cmFwICR7XG4gICAgICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gJ2FwcGxpY2F0aW9ucydcbiAgICAgICAgICAgICAgICA/ICdiZy13aGl0ZSB0ZXh0LW5ldXRyYWwtOTUwIHNoYWRvdy14cyBmb250LXNlbWlib2xkJ1xuICAgICAgICAgICAgICAgIDogJ3RleHQtbmV1dHJhbC02MDAgaG92ZXI6dGV4dC1uZXV0cmFsLTkwMCdcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGaWxlVGV4dCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgIDxzcGFuPnt0LmRhc2hib2FyZC50YWJzLmFwcGxpY2F0aW9uc30gKHthcHBsaWNhdGlvbnMubGVuZ3RofSk8L3NwYW4+XG4gICAgICAgICAgICB7YXBwbGljYXRpb25zLmZpbHRlcigoYSkgPT4gYS5zdGF0dXMgPT09ICdQZW5kaW5nJykubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LVsxMHB4XSBweC0xLjUgcHktMC4yIGJnLW5ldXRyYWwtOTAwIHRleHQtd2hpdGUgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgIHthcHBsaWNhdGlvbnMuZmlsdGVyKChhKSA9PiBhLnN0YXR1cyA9PT0gJ1BlbmRpbmcnKS5sZW5ndGh9IHBlbmRpbmdcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignZXhwb3J0Jyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC00IHB5LTIgdGV4dC14cyBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRyYW5zaXRpb24tY29sb3JzIHdoaXRlc3BhY2Utbm93cmFwICR7XG4gICAgICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gJ2V4cG9ydCdcbiAgICAgICAgICAgICAgICA/ICdiZy13aGl0ZSB0ZXh0LW5ldXRyYWwtOTUwIHNoYWRvdy14cyBmb250LXNlbWlib2xkJ1xuICAgICAgICAgICAgICAgIDogJ3RleHQtbmV1dHJhbC02MDAgaG92ZXI6dGV4dC1uZXV0cmFsLTkwMCdcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMYXllcnMgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICA8c3Bhbj57dC5kYXNoYm9hcmQudGFicy5leHBvcnR9PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogVEFCIDE6IE1FTUJFUlMgTUFOQUdFTUVOVCAqL31cbiAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ21lbWJlcnMnICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHNtOnAtNiBib3JkZXItYiBib3JkZXItbmV1dHJhbC0yMDAgZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBpdGVtcy1zdHJldGNoIHNtOml0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1pbi13LVsyMDBweF1cIj5cbiAgICAgICAgICAgICAgICAgIDxTZWFyY2ggY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LW5ldXRyYWwtNDAwIGFic29sdXRlIGxlZnQtMyB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzJcIiAvPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lbWJlclNlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZW1iZXJTZWFyY2goZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBtZW1iZXJzLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHBsLTkgcHItMyBweS0xLjUgdGV4dC14cyBiZy1uZXV0cmFsLTUwIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctbmV1dHJhbC04MDBcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXttZW1iZXJGaWx0ZXJSb2xlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZW1iZXJGaWx0ZXJSb2xlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMgcHktMS41IHRleHQteHMgYmctbmV1dHJhbC01MCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLW5ldXRyYWwtODAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQWxsXCI+QWxsIFJvbGVzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUHJlc2lkZW50XCI+UHJlc2lkZW50PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVmljZSBQcmVzaWRlbnRcIj5WaWNlIFByZXNpZGVudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRlY2ggTGVhZFwiPlRlY2ggTGVhZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRlc2lnbiBMZWFkXCI+RGVzaWduIExlYWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFdmVudCBDb29yZGluYXRvclwiPkV2ZW50IENvb3JkaW5hdG9yPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ29yZSBNZW1iZXJcIj5Db3JlIE1lbWJlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFsdW1uaVwiPkFsdW1uaTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT3BlbkFkZE1lbWJlcn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMS41IHB4LTQgcHktMiB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBiZy1uZXV0cmFsLTkwMCBob3ZlcjpiZy1uZXV0cmFsLTgwMCByb3VuZGVkLW1kIHRyYW5zaXRpb24tY29sb3JzIHNoYWRvdy14c1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGx1cyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+QWRkIE1lbWJlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFRhYmxlICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWxlZnQgdGV4dC14cyB0ZXh0LW5ldXRyYWwtNzAwXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cImJnLW5ldXRyYWwtNTAgYm9yZGVyLWIgYm9yZGVyLW5ldXRyYWwtMjAwIHRleHQtbmV1dHJhbC01MDAgdXBwZXJjYXNlIGZvbnQtbW9ubyB0ZXh0LVsxMXB4XVwiPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNiBweS0zIGZvbnQtbWVkaXVtXCI+TmFtZSAmIEVtYWlsPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktMyBmb250LW1lZGl1bVwiPlJvbGUgJiBUcmFjazwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC02IHB5LTMgZm9udC1tZWRpdW1cIj5TdHVkZW50IElEPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktMyBmb250LW1lZGl1bVwiPkNsYXNzIE9mPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktMyBmb250LW1lZGl1bVwiPlN0YXR1czwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC02IHB5LTMgZm9udC1tZWRpdW0gdGV4dC1yaWdodFwiPkFjdGlvbnM8L3RoPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtbmV1dHJhbC0yMDBcIj5cbiAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZE1lbWJlcnMubWFwKChtZW1iZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17bWVtYmVyLmlkfSBjbGFzc05hbWU9XCJob3ZlcjpiZy1uZXV0cmFsLTUwLzcwIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCBmb250LW1lZGl1bSB0ZXh0LW5ldXRyYWwtOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57bWVtYmVyLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC01MDAgZm9udC1ub3JtYWxcIj57bWVtYmVyLmVtYWlsfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LW5ldXRyYWwtODAwXCI+e21lbWJlci5yb2xlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtNTAwXCI+e21lbWJlci50cmFja308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgZm9udC1tb25vIHRleHQtbmV1dHJhbC02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZW1iZXIuc3R1ZGVudElkIHx8ICfigJQnfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCBmb250LW1vbm8gdGFidWxhci1udW1zIHRleHQtbmV1dHJhbC02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZW1iZXIuZ3JhZHVhdGlvblllYXJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IGZvbnQtbW9ubyB0ZXh0LVsxMXB4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXIuc3RhdHVzID09PSAnQWN0aXZlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAndGV4dC1lbWVyYWxkLTcwMCBmb250LXNlbWlib2xkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtZW1iZXIuc3RhdHVzID09PSAnT24gTGVhdmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXh0LWFtYmVyLTcwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3RleHQtbmV1dHJhbC01MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge21lbWJlci5zdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5FZGl0TWVtYmVyKG1lbWJlcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xLjUgdGV4dC1uZXV0cmFsLTYwMCBob3Zlcjp0ZXh0LW5ldXRyYWwtOTAwIGhvdmVyOmJnLW5ldXRyYWwtMTAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRWRpdCBNZW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQyIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlybShgUmVtb3ZlICR7bWVtYmVyLm5hbWV9IGZyb20gbWVtYmVycyBsaXN0P2ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlTWVtYmVyKG1lbWJlci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEuNSB0ZXh0LXJlZC02MDAgaG92ZXI6dGV4dC1yZWQtODAwIGhvdmVyOmJnLXJlZC01MCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZSBNZW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoMiBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogVEFCIDI6IEVWRU5UUyBNQU5BR0VNRU5UICovfVxuICAgICAgICB7YWN0aXZlVGFiID09PSAnZXZlbnRzJyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBzbTpwLTYgYm9yZGVyLWIgYm9yZGVyLW5ldXRyYWwtMjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LW5ldXRyYWwtOTAwXCI+RXZlbnRzIFJlZ2lzdHJ5PC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbmV1dHJhbC01MDAgbXQtMC41XCI+XG4gICAgICAgICAgICAgICAgICBQdWJsaXNoIHdvcmtzaG9wcywgbWFuYWdlIGF0dGVuZGFuY2UgY2FwYWNpdGllcywgYW5kIHNjaGVkdWxlIGhhY2thdGhvbnMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT3BlbkFkZEV2ZW50fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtNCBweS0yIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGJnLW5ldXRyYWwtOTAwIGhvdmVyOmJnLW5ldXRyYWwtODAwIHJvdW5kZWQtbWQgdHJhbnNpdGlvbi1jb2xvcnMgc2hhZG93LXhzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQbHVzIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5DcmVhdGUgRXZlbnQ8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLW5ldXRyYWwtMjAwXCI+XG4gICAgICAgICAgICAgIHtldmVudHMubWFwKChldikgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17ZXYuaWR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTYgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDppdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00IGhvdmVyOmJnLW5ldXRyYWwtNTAvNzAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjUgbWF4LXctMnhsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC14cyB0ZXh0LW5ldXRyYWwtNTAwIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1uZXV0cmFsLTgwMFwiPntldi5jYXRlZ29yeX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+wrc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFidWxhci1udW1zXCI+e2V2LmRhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsK3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntldi50aW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Ctzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2V2LnN0YXR1cyA9PT0gJ1VwY29taW5nJyA/ICd0ZXh0LWVtZXJhbGQtNzAwIGZvbnQtYm9sZCcgOiAndGV4dC1uZXV0cmFsLTQwMCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2V2LnN0YXR1c31cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ib2xkIHRleHQtbmV1dHJhbC05NTBcIj57ZXYudGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW5ldXRyYWwtNjAwIGxpbmUtY2xhbXAtMlwiPntldi5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW5ldXRyYWwtNTAwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHB0LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5WZW51ZToge2V2LmxvY2F0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICB7ZXYuc3BlYWtlck5hbWUgJiYgPHNwYW4+SG9zdDoge2V2LnNwZWFrZXJOYW1lfTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IGZvbnQtbW9ubyB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtOTAwIGZvbnQtc2VtaWJvbGQgdGFidWxhci1udW1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXYucnN2cHMubGVuZ3RofSAvIHtldi5jYXBhY2l0eX0gUlNWUHNcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtbmV1dHJhbC00MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtldi5jYXBhY2l0eSAtIGV2LnJzdnBzLmxlbmd0aH0gcmVtYWluaW5nXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5FZGl0RXZlbnQoZXYpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHRleHQtbmV1dHJhbC02MDAgaG92ZXI6dGV4dC1uZXV0cmFsLTkwMCBob3ZlcjpiZy1uZXV0cmFsLTEwMCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRWRpdCBFdmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQyIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0oYERlbGV0ZSBldmVudCBcIiR7ZXYudGl0bGV9XCI/YCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZUV2ZW50KGV2LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiB0ZXh0LXJlZC02MDAgaG92ZXI6dGV4dC1yZWQtODAwIGhvdmVyOmJnLXJlZC01MCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRGVsZXRlIEV2ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2gyIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBUQUIgMzogQkxPRyBQT1NUUyBNQU5BR0VNRU5UICovfVxuICAgICAgICB7YWN0aXZlVGFiID09PSAncG9zdHMnICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHNtOnAtNiBib3JkZXItYiBib3JkZXItbmV1dHJhbC0yMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtbmV1dHJhbC05MDBcIj5CbG9nICYgRWRpdG9yaWFsIFBvc3RzPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbmV1dHJhbC01MDAgbXQtMC41XCI+XG4gICAgICAgICAgICAgICAgICBQdWJsaXNoIHRlY2huaWNhbCB3cml0ZXVwcywgcmVjYXBzLCBhbmQgc3R1ZGVudCB0dXRvcmlhbHMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT3BlbkFkZFBvc3R9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC00IHB5LTIgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgYmctbmV1dHJhbC05MDAgaG92ZXI6YmctbmV1dHJhbC04MDAgcm91bmRlZC1tZCB0cmFuc2l0aW9uLWNvbG9ycyBzaGFkb3cteHNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBsdXMgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPldyaXRlIEFydGljbGU8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLW5ldXRyYWwtMjAwXCI+XG4gICAgICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e3Bvc3QuaWR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTYgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDppdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00IGhvdmVyOmJnLW5ldXRyYWwtNTAvNzAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjUgbWF4LXctMnhsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC14cyB0ZXh0LW5ldXRyYWwtNTAwIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1uZXV0cmFsLTgwMFwiPntwb3N0LmNhdGVnb3J5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Ctzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0YWJ1bGFyLW51bXNcIj57cG9zdC5wdWJsaXNoZWRBdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+wrc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Bvc3QucmVhZFRpbWVNaW51dGVzfSBtaW4gcmVhZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Ctzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Bvc3QuaXNQdWJsaXNoZWQgPyAndGV4dC1lbWVyYWxkLTcwMCcgOiAndGV4dC1uZXV0cmFsLTQwMCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QuaXNQdWJsaXNoZWQgPyAnUHVibGlzaGVkJyA6ICdEcmFmdCd9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LW5ldXRyYWwtOTUwXCI+e3Bvc3QudGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW5ldXRyYWwtNjAwIGxpbmUtY2xhbXAtMlwiPntwb3N0LmV4Y2VycHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1uZXV0cmFsLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIEF1dGhvcjogPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtODAwXCI+e3Bvc3QuYXV0aG9yTmFtZX08L3N0cm9uZz4gKHtwb3N0LmF1dGhvclJvbGV9KSDCtyB7cG9zdC5saWtlc30gbGlrZXNcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcGVuRWRpdFBvc3QocG9zdCl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHRleHQtbmV1dHJhbC02MDAgaG92ZXI6dGV4dC1uZXV0cmFsLTkwMCBob3ZlcjpiZy1uZXV0cmFsLTEwMCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkVkaXQgUG9zdFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8RWRpdDIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0oYERlbGV0ZSBwb3N0IFwiJHtwb3N0LnRpdGxlfVwiP2ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlUG9zdChwb3N0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiB0ZXh0LXJlZC02MDAgaG92ZXI6dGV4dC1yZWQtODAwIGhvdmVyOmJnLXJlZC01MCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZSBQb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaDIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIFRBQiA0OiBSRUNSVUlUTUVOVCBBUFBMSUNBVElPTlMgKi99XG4gICAgICAgIHthY3RpdmVUYWIgPT09ICdhcHBsaWNhdGlvbnMnICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHNtOnAtNiBib3JkZXItYiBib3JkZXItbmV1dHJhbC0yMDAgZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBpdGVtcy1zdHJldGNoIHNtOml0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1uZXV0cmFsLTkwMFwiPk1lbWJlcnNoaXAgSW5xdWlyaWVzICYgQXBwbGljYXRpb25zPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbmV1dHJhbC01MDAgbXQtMC41XCI+XG4gICAgICAgICAgICAgICAgICBSZXZpZXcgc3R1ZGVudCBzdWJtaXNzaW9ucyBmcm9tIHRoZSBKb2luIFVzIGZvcm0sIHNjaGVkdWxlIGNoYXRzLCBvciBlbnJvbGwgdGhlbS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbmV1dHJhbC01MDBcIj5GaWx0ZXI6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXthcHBGaWx0ZXJTdGF0dXN9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFwcEZpbHRlclN0YXR1cyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0zIHB5LTEuNSB0ZXh0LXhzIGJnLW5ldXRyYWwtNTAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy1uZXV0cmFsLTgwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFsbFwiPkFsbCBJbnF1aXJpZXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQZW5kaW5nXCI+UGVuZGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkludGVydmlld1wiPkludGVydmlldzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFjY2VwdGVkXCI+QWNjZXB0ZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBcmNoaXZlZFwiPkFyY2hpdmVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtmaWx0ZXJlZEFwcGxpY2F0aW9ucy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMTJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbmV1dHJhbC01MDBcIj5ObyBhcHBsaWNhdGlvbnMgZm91bmQuPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLW5ldXRyYWwtMjAwXCI+XG4gICAgICAgICAgICAgICAge2ZpbHRlcmVkQXBwbGljYXRpb25zLm1hcCgoYXBwKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YXBwLmlkfSBjbGFzc05hbWU9XCJwLTYgc3BhY2UteS00IGhvdmVyOmJnLW5ldXRyYWwtNTAvNzAgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IHNtOml0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ib2xkIHRleHQtbmV1dHJhbC05NTBcIj57YXBwLmZ1bGxOYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXhzIHRleHQtbmV1dHJhbC00MDBcIj4oe2FwcC5zdHVkZW50SWR9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbmV1dHJhbC01MDAgbXQtMC41IGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YXBwLmVtYWlsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+wrc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnthcHAubWFqb3J9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Ctzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2FwcC55ZWFyT2ZTdHVkeX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsK3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5MZXZlbDoge2FwcC5leHBlcmllbmNlTGV2ZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthcHAuc3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25VcGRhdGVBcHBsaWNhdGlvblN0YXR1cyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlIGFzIEFwcGxpY2F0aW9uU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIuNSBweS0xIHRleHQteHMgZm9udC1tb25vIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTMwMCBiZy13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQZW5kaW5nXCI+U3RhdHVzOiBQZW5kaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJbnRlcnZpZXdcIj5TdGF0dXM6IEludGVydmlldzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQWNjZXB0ZWRcIj5TdGF0dXM6IEFjY2VwdGVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBcmNoaXZlZFwiPlN0YXR1czogQXJjaGl2ZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbnZlcnRBcHBUb01lbWJlcihhcHApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBweC0zIHB5LTEgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWVtZXJhbGQtODAwIGJnLWVtZXJhbGQtNTAgaG92ZXI6YmctZW1lcmFsZC0xMDAgYm9yZGVyIGJvcmRlci1lbWVyYWxkLTMwMCByb3VuZGVkLW1kIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDcmVhdGUgbWVtYmVyIHByb2ZpbGUgZnJvbSB0aGlzIGFwcGxpY2F0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJDaGVjayBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkVucm9sbCBNZW1iZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0oYERlbGV0ZSBhcHBsaWNhdGlvbiBmcm9tICR7YXBwLmZ1bGxOYW1lfT9gKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGVBcHBsaWNhdGlvbihhcHAuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xLjUgdGV4dC1uZXV0cmFsLTQwMCBob3Zlcjp0ZXh0LXJlZC03MDAgaG92ZXI6YmctcmVkLTUwIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZSBhcHBsaWNhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaDIgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBUcmFja3MgYW5kIE1vdGl2YXRpb24gKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbmV1dHJhbC01MCBwLTMuNSByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItbmV1dHJhbC0xMDAgdGV4dC14cyBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtNzAwXCI+VHJhY2tzIG9mIEludGVyZXN0OiA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC05MDAgZm9udC1tZWRpdW1cIj57YXBwLnRyYWNrcy5qb2luKCcsICcpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtNzAwXCI+TW90aXZhdGlvbjogPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtODAwIG10LTAuNSBsZWFkaW5nLXJlbGF4ZWRcIj57YXBwLm1vdGl2YXRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHthcHAucG9ydGZvbGlvVXJsICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBwdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTcwMFwiPlBvcnRmb2xpby9HaXRIdWI6IDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2FwcC5wb3J0Zm9saW9Vcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtOTAwIGhvdmVyOnVuZGVybGluZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBmb250LW1vbm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2FwcC5wb3J0Zm9saW9Vcmx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeHRlcm5hbExpbmsgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAge2FwcC5hZG1pbk5vdGVzICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiB0ZXh0LVsxMXB4XSB0ZXh0LW5ldXRyYWwtNjAwIGJvcmRlci10IGJvcmRlci1uZXV0cmFsLTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkFkbWluIE5vdGVzOiA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2FwcC5hZG1pbk5vdGVzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogVEFCIDU6IEJBQ0tFTkQgJiBEQVRBQkFTRSBFWFBPUlQgKi99XG4gICAgICAgIHthY3RpdmVUYWIgPT09ICdleHBvcnQnICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1sZyBwLTYgc206cC04IHNwYWNlLXktOFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtbmV1dHJhbC05NTBcIj5cbiAgICAgICAgICAgICAgICBEYXRhYmFzZSBTZWVkICYgUHJvZHVjdGlvbiBTdGFjayBFeHBvcnRcbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW5ldXRyYWwtNjAwIG10LTEgbWF4LXctMnhsIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgIFlvdSBjYW4gZG93bmxvYWQgdGhlIGN1cnJlbnQgbGl2ZSBzdGF0ZSBvZiB5b3VyIGNsdWIgZGF0YWJhc2UgKGFsbCBtZW1iZXJzLCBldmVudHMsIHBvc3RzLCBhbmQgcmVjcnVpdG1lbnQgYXBwbGljYXRpb25zKSBhcyBhIHZhbGlkIEpTT04gZmlsZSB0byBzZWVkIGludG8gTW9uZ29EQiBBdGxhcywgU3VwYWJhc2UsIG9yIFBvc3RncmVTUUwuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCByb3VuZGVkLWxnIGJnLW5ldXRyYWwtNTAvNTAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtbmV1dHJhbC05MDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPERvd25sb2FkIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1lbWVyYWxkLTcwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkRvd25sb2FkIHNlZWQuanNvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbmV1dHJhbC02MDAgbXQtMiBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgR2VuZXJhdGVzIGEgY29tcGxldGUgZGF0YXNldCB3aXRoIHNjaGVtYSB2ZXJzaW9uaW5nIGZvciBNb25nb0RCIE0wIGltcG9ydCB1c2luZyBgbW9uZ29pbXBvcnRgIG9yIE1vbmdvb3NlIHNlZWRlciBzY3JpcHQuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02XCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uRXhwb3J0RGF0YWJhc2VTZWVkfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMi41IHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGJnLW5ldXRyYWwtOTAwIGhvdmVyOmJnLW5ldXRyYWwtODAwIHJvdW5kZWQtbWQgdHJhbnNpdGlvbi1jb2xvcnMgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBEb3dubG9hZCBEYXRhYmFzZSBTZWVkXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCByb3VuZGVkLWxnIGJnLW5ldXRyYWwtNTAvNTAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtbmV1dHJhbC05MDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFJvdGF0ZUNjdyBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtYW1iZXItNzAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+UmVzZXQgU2FtcGxlIERhdGE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW5ldXRyYWwtNjAwIG10LTIgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIENsZWFyIGxvY2FsIHN0b3JhZ2UgbW9kaWZpY2F0aW9ucyBhbmQgcmVzdG9yZSB0aGUgY2xlYW4gaW5pdGlhbCB1bml2ZXJzaXR5IGNsdWIgZGF0YXNldC5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTZcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maXJtKCdSZXNldCBhbGwgY2x1YiBkYXRhIHRvIGRlZmF1bHQgc2FtcGxlIGl0ZW1zPycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlc2V0RGVmYXVsdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0yLjUgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LW5ldXRyYWwtNzAwIGhvdmVyOnRleHQtbmV1dHJhbC05NTAgYmctbmV1dHJhbC0xMDAgaG92ZXI6YmctbmV1dHJhbC0yMDAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTMwMCByb3VuZGVkLW1kIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUmVzdG9yZSBEZWZhdWx0c1xuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IGJnLW5ldXRyYWwtOTAwIHRleHQtd2hpdGUgcm91bmRlZC1sZyBmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGl0ZW1zLXN0YXJ0IHNtOml0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGRcIj5SZWFkeSB0byBkZXBsb3kgdG8gVmVyY2VsICYgTW9uZ29EQiBBdGxhcz88L2g0PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1uZXV0cmFsLTMwMCBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICBWaWV3IHRoZSBmdWxsIE5leHQuanMgcHJvamVjdCBzdHJ1Y3R1cmUsIE1vbmdvb3NlIHNjaGVtYXMsIGFuZCBSZW5kZXIuY29tIHNldHVwIGd1aWRlcy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25PcGVuQmx1ZXByaW50fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1uZXV0cmFsLTkwMCBiZy13aGl0ZSBob3ZlcjpiZy1uZXV0cmFsLTEwMCByb3VuZGVkLW1kIHdoaXRlc3BhY2Utbm93cmFwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE9wZW4gQXJjaGl0ZWN0dXJlIEJsdWVwcmludFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBNRU1CRVIgQ1JFQVRFL0VESVQgTU9EQUwgKi99XG4gICAgICB7aXNNZW1iZXJNb2RhbE9wZW4gJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICAgYXJpYS1tb2RhbD1cInRydWVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei01MCBiZy1uZXV0cmFsLTk1MC81MCBiYWNrZHJvcC1ibHVyLXhzIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCBvdmVyZmxvdy15LWF1dG9cIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIG1heC13LXhsIHctZnVsbCBtYXgtaC1bOTB2aF0gb3ZlcmZsb3cteS1hdXRvIGJvcmRlciBib3JkZXItbmV1dHJhbC0zMDAgc2hhZG93LXhsIHAtNlwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtbmV1dHJhbC05NTAgbWItNFwiPlxuICAgICAgICAgICAgICB7ZWRpdGluZ01lbWJlciA/ICdFZGl0IE1lbWJlciBJbmZvcm1hdGlvbicgOiAnQWRkIE5ldyBDbHViIE1lbWJlcid9XG4gICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU2F2ZU1lbWJlcn0gY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC03MDAgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICBGdWxsIE5hbWUgKlxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZW1iZXJGb3JtRGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgc2V0TWVtYmVyRm9ybURhdGEoeyAuLi5tZW1iZXJGb3JtRGF0YSwgbmFtZTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0xLjUgdGV4dC14cyBiZy1uZXV0cmFsLTUwIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1tZCBmb2N1czpiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctbmV1dHJhbC05MDBcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC03MDAgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICBVbml2ZXJzaXR5IEVtYWlsICpcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lbWJlckZvcm1EYXRhLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgc2V0TWVtYmVyRm9ybURhdGEoeyAuLi5tZW1iZXJGb3JtRGF0YSwgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMS41IHRleHQteHMgYmctbmV1dHJhbC01MCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbWQgZm9jdXM6Ymctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLW5ldXRyYWwtOTAwXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC03MDAgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICBSb2xlIGluIENsdWJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZW1iZXJGb3JtRGF0YS5yb2xlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgc2V0TWVtYmVyRm9ybURhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ubWVtYmVyRm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBlLnRhcmdldC52YWx1ZSBhcyBNZW1iZXJSb2xlLFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMS41IHRleHQteHMgYmctbmV1dHJhbC01MCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlByZXNpZGVudFwiPlByZXNpZGVudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVmljZSBQcmVzaWRlbnRcIj5WaWNlIFByZXNpZGVudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVGVjaCBMZWFkXCI+VGVjaCBMZWFkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEZXNpZ24gTGVhZFwiPkRlc2lnbiBMZWFkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPdXRyZWFjaCBMZWFkXCI+T3V0cmVhY2ggTGVhZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRXZlbnQgQ29vcmRpbmF0b3JcIj5FdmVudCBDb29yZGluYXRvcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ29yZSBNZW1iZXJcIj5Db3JlIE1lbWJlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQWx1bW5pXCI+QWx1bW5pPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC03MDAgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICBUcmFjayAvIFN1YnRlYW1cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZW1iZXJGb3JtRGF0YS50cmFja31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHNldE1lbWJlckZvcm1EYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLm1lbWJlckZvcm1EYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2s6IGUudGFyZ2V0LnZhbHVlIGFzIFRyYWNrLFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMS41IHRleHQteHMgYmctbmV1dHJhbC01MCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNvZnR3YXJlICYgQUlcIj5Tb2Z0d2FyZSAmIEFJPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQcm9kdWN0ICYgVUkvVVhcIj5Qcm9kdWN0ICYgVUkvVVg8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhhcmR3YXJlICYgUm9ib3RpY3NcIj5IYXJkd2FyZSAmIFJvYm90aWNzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDb21tdW5pdHkgJiBPcHNcIj5Db21tdW5pdHkgJiBPcHM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtNzAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgU3R1ZGVudCBJRFxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZW1iZXJGb3JtRGF0YS5zdHVkZW50SWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICBzZXRNZW1iZXJGb3JtRGF0YSh7IC4uLm1lbWJlckZvcm1EYXRhLCBzdHVkZW50SWQ6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNVTI2LVhYWFhcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0xLjUgdGV4dC14cyBiZy1uZXV0cmFsLTUwIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1uZXV0cmFsLTcwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIEdyYWR1YXRpb24gWWVhclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lbWJlckZvcm1EYXRhLmdyYWR1YXRpb25ZZWFyfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgc2V0TWVtYmVyRm9ybURhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ubWVtYmVyRm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkdWF0aW9uWWVhcjogTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTEuNSB0ZXh0LXhzIGJnLW5ldXRyYWwtNTAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtNzAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgU3RhdHVzXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVtYmVyRm9ybURhdGEuc3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgc2V0TWVtYmVyRm9ybURhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ubWVtYmVyRm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGUudGFyZ2V0LnZhbHVlIGFzIE1lbWJlclN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTEuNSB0ZXh0LXhzIGJnLW5ldXRyYWwtNTAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFjdGl2ZVwiPkFjdGl2ZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT24gTGVhdmVcIj5PbiBMZWF2ZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQWx1bW5pXCI+QWx1bW5pPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC03MDAgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgQmlvIC8gSW50cm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIHJvd3M9ezJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bWVtYmVyRm9ybURhdGEuYmlvfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRNZW1iZXJGb3JtRGF0YSh7IC4uLm1lbWJlckZvcm1EYXRhLCBiaW86IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0xLjUgdGV4dC14cyBiZy1uZXV0cmFsLTUwIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC03MDAgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgU2tpbGxzICYgRm9jdXMgQXJlYXMgKGNvbW1hLXNlcGFyYXRlZClcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e21lbWJlckZvcm1EYXRhLnNraWxsc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0TWVtYmVyRm9ybURhdGEoeyAuLi5tZW1iZXJGb3JtRGF0YSwgc2tpbGxzOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIE5leHQuanMsIFB5dGhvbiwgRmlnbWEsIEVtYmVkZGVkIENcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMS41IHRleHQteHMgYmctbmV1dHJhbC01MCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC03MDAgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICBHaXRIdWIgVVJMXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVtYmVyRm9ybURhdGEuZ2l0aHViVXJsfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgc2V0TWVtYmVyRm9ybURhdGEoeyAuLi5tZW1iZXJGb3JtRGF0YSwgZ2l0aHViVXJsOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly9naXRodWIuY29tL3VzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMS41IHRleHQteHMgYmctbmV1dHJhbC01MCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC03MDAgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICBMaW5rZWRJbiBVUkxcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInVybFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZW1iZXJGb3JtRGF0YS5saW5rZWRpblVybH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHNldE1lbWJlckZvcm1EYXRhKHsgLi4ubWVtYmVyRm9ybURhdGEsIGxpbmtlZGluVXJsOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vdXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0xLjUgdGV4dC14cyBiZy1uZXV0cmFsLTUwIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgYm9yZGVyLXQgYm9yZGVyLW5ldXRyYWwtMjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01lbWJlck1vZGFsT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LW5ldXRyYWwtNjAwIGhvdmVyOnRleHQtbmV1dHJhbC05MDAgYmctbmV1dHJhbC0xMDAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgYmctbmV1dHJhbC05MDAgaG92ZXI6YmctbmV1dHJhbC04MDAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2VkaXRpbmdNZW1iZXIgPyAnU2F2ZSBDaGFuZ2VzJyA6ICdDcmVhdGUgTWVtYmVyJ31cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIEVWRU5UIENSRUFURS9FRElUIE1PREFMICovfVxuICAgICAge2lzRXZlbnRNb2RhbE9wZW4gJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICAgYXJpYS1tb2RhbD1cInRydWVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei01MCBiZy1uZXV0cmFsLTk1MC81MCBiYWNrZHJvcC1ibHVyLXhzIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCBvdmVyZmxvdy15LWF1dG9cIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIG1heC13LXhsIHctZnVsbCBtYXgtaC1bOTB2aF0gb3ZlcmZsb3cteS1hdXRvIGJvcmRlciBib3JkZXItbmV1dHJhbC0zMDAgc2hhZG93LXhsIHAtNlwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtbmV1dHJhbC05NTAgbWItNFwiPlxuICAgICAgICAgICAgICB7ZWRpdGluZ0V2ZW50ID8gJ0VkaXQgRXZlbnQnIDogJ0NyZWF0ZSBOZXcgRXZlbnQnfVxuICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVNhdmVFdmVudH0gY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtNzAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgIEV2ZW50IFRpdGxlICpcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtldmVudEZvcm1EYXRhLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRFdmVudEZvcm1EYXRhKHsgLi4uZXZlbnRGb3JtRGF0YSwgdGl0bGU6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gTmV4dC5qcyAxNSAmIE1vbmdvREIgV29ya3Nob3BcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMS41IHRleHQteHMgYmctbmV1dHJhbC01MCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbWQgZm9jdXM6Ymctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtNzAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtldmVudEZvcm1EYXRhLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgc2V0RXZlbnRGb3JtRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5ldmVudEZvcm1EYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGUudGFyZ2V0LnZhbHVlIGFzIEV2ZW50Q2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0xLjUgdGV4dC14cyBiZy1uZXV0cmFsLTUwIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJXb3Jrc2hvcFwiPldvcmtzaG9wPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIYWNrYXRob25cIj5IYWNrYXRob248L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRlY2ggVGFsa1wiPlRlY2ggVGFsazwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUHJvamVjdCBEZW1vXCI+UHJvamVjdCBEZW1vPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTb2NpYWxcIj5Tb2NpYWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1uZXV0cmFsLTcwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIFN0YXR1c1xuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2V2ZW50Rm9ybURhdGEuc3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgc2V0RXZlbnRGb3JtRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5ldmVudEZvcm1EYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBlLnRhcmdldC52YWx1ZSBhcyBFdmVudFN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTEuNSB0ZXh0LXhzIGJnLW5ldXRyYWwtNTAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVwY29taW5nXCI+VXBjb21pbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBhc3RcIj5QYXN0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDYW5jZWxsZWRcIj5DYW5jZWxsZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtNzAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgRGF0ZSAqXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2V2ZW50Rm9ybURhdGEuZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHNldEV2ZW50Rm9ybURhdGEoeyAuLi5ldmVudEZvcm1EYXRhLCBkYXRlOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTEuNSB0ZXh0LXhzIGJnLW5ldXRyYWwtNTAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtNzAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgVGltZSBXaW5kb3dcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZXZlbnRGb3JtRGF0YS50aW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgc2V0RXZlbnRGb3JtRGF0YSh7IC4uLmV2ZW50Rm9ybURhdGEsIHRpbWU6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxODowMCAtIDIwOjMwXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMS41IHRleHQteHMgYmctbmV1dHJhbC01MCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC03MDAgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICBDYXBhY2l0eSAoU2VhdHMpXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZXZlbnRGb3JtRGF0YS5jYXBhY2l0eX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHNldEV2ZW50Rm9ybURhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXZlbnRGb3JtRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiBOdW1iZXIoZS50YXJnZXQudmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMS41IHRleHQteHMgYmctbmV1dHJhbC01MCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC03MDAgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgTG9jYXRpb24gLyBWZW51ZVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZXZlbnRGb3JtRGF0YS5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0RXZlbnRGb3JtRGF0YSh7IC4uLmV2ZW50Rm9ybURhdGEsIGxvY2F0aW9uOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIFR1cmluZyBIYWxsIDMxNCBvciBPbmxpbmUgRGlzY29yZFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0xLjUgdGV4dC14cyBiZy1uZXV0cmFsLTUwIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1uZXV0cmFsLTcwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIFNwZWFrZXIgLyBIb3N0IE5hbWVcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZXZlbnRGb3JtRGF0YS5zcGVha2VyTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHNldEV2ZW50Rm9ybURhdGEoeyAuLi5ldmVudEZvcm1EYXRhLCBzcGVha2VyTmFtZTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gQWlzaGEgQWwtTWFuc29vclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTEuNSB0ZXh0LXhzIGJnLW5ldXRyYWwtNTAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtNzAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgU3BlYWtlciBSb2xlIC8gVGl0bGVcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZXZlbnRGb3JtRGF0YS5zcGVha2VyUm9sZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHNldEV2ZW50Rm9ybURhdGEoeyAuLi5ldmVudEZvcm1EYXRhLCBzcGVha2VyUm9sZTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gVGVjaCBMZWFkIEAgQXBleFRlY2hcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0xLjUgdGV4dC14cyBiZy1uZXV0cmFsLTUwIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1uZXV0cmFsLTcwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICBFdmVudCBEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICByb3dzPXszfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2V2ZW50Rm9ybURhdGEuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEV2ZW50Rm9ybURhdGEoeyAuLi5ldmVudEZvcm1EYXRhLCBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3ZlcnZpZXcgb2YgdGhlIHdvcmtzaG9wIG9yIGV2ZW50Li4uXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTEuNSB0ZXh0LXhzIGJnLW5ldXRyYWwtNTAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgYm9yZGVyLXQgYm9yZGVyLW5ldXRyYWwtMjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0V2ZW50TW9kYWxPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtbmV1dHJhbC02MDAgaG92ZXI6dGV4dC1uZXV0cmFsLTkwMCBiZy1uZXV0cmFsLTEwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBiZy1uZXV0cmFsLTkwMCBob3ZlcjpiZy1uZXV0cmFsLTgwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7ZWRpdGluZ0V2ZW50ID8gJ1NhdmUgRXZlbnQgQ2hhbmdlcycgOiAnUHVibGlzaCBFdmVudCd9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBQT1NUIENSRUFURS9FRElUIE1PREFMICovfVxuICAgICAge2lzUG9zdE1vZGFsT3BlbiAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICAgICBhcmlhLW1vZGFsPVwidHJ1ZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGJnLW5ldXRyYWwtOTUwLzUwIGJhY2tkcm9wLWJsdXIteHMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IG92ZXJmbG93LXktYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgbWF4LXctMnhsIHctZnVsbCBtYXgtaC1bOTB2aF0gb3ZlcmZsb3cteS1hdXRvIGJvcmRlciBib3JkZXItbmV1dHJhbC0zMDAgc2hhZG93LXhsIHAtNlwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtbmV1dHJhbC05NTAgbWItNFwiPlxuICAgICAgICAgICAgICB7ZWRpdGluZ1Bvc3QgPyAnRWRpdCBCbG9nIEFydGljbGUnIDogJ1dyaXRlIE5ldyBCbG9nIEFydGljbGUnfVxuICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVNhdmVQb3N0fSBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC03MDAgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgQXJ0aWNsZSBUaXRsZSAqXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cG9zdEZvcm1EYXRhLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRQb3N0Rm9ybURhdGEoeyAuLi5wb3N0Rm9ybURhdGEsIHRpdGxlOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIE5leHQuanMgMTUgQXBwIFJvdXRlciAmIE1vbmdvREIgTTAgU2V0dXBcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMS41IHRleHQteHMgYmctbmV1dHJhbC01MCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbWQgZm9jdXM6Ymctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtNzAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwb3N0Rm9ybURhdGEuY2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICBzZXRQb3N0Rm9ybURhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucG9zdEZvcm1EYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGUudGFyZ2V0LnZhbHVlIGFzIEJsb2dDYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTEuNSB0ZXh0LXhzIGJnLW5ldXRyYWwtNTAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlR1dG9yaWFsXCI+VHV0b3JpYWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlByb2plY3QgU2hvd2Nhc2VcIj5Qcm9qZWN0IFNob3djYXNlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDYXJlZXIgJiBBZHZpY2VcIj5DYXJlZXIgJiBBZHZpY2U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkV2ZW50IFJlY2FwXCI+RXZlbnQgUmVjYXA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1uZXV0cmFsLTcwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIEVzdGltYXRlZCBSZWFkIFRpbWUgKG1pbilcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwb3N0Rm9ybURhdGEucmVhZFRpbWVNaW51dGVzfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgc2V0UG9zdEZvcm1EYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnBvc3RGb3JtRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRUaW1lTWludXRlczogTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTEuNSB0ZXh0LXhzIGJnLW5ldXRyYWwtNTAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtNzAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgU3RhdHVzXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cG9zdEZvcm1EYXRhLmlzUHVibGlzaGVkID8gJ3B1Ymxpc2hlZCcgOiAnZHJhZnQnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgc2V0UG9zdEZvcm1EYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnBvc3RGb3JtRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUHVibGlzaGVkOiBlLnRhcmdldC52YWx1ZSA9PT0gJ3B1Ymxpc2hlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0xLjUgdGV4dC14cyBiZy1uZXV0cmFsLTUwIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwdWJsaXNoZWRcIj5QdWJsaXNoZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRyYWZ0XCI+RHJhZnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtNzAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yIE5hbWVcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cG9zdEZvcm1EYXRhLmF1dGhvck5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICBzZXRQb3N0Rm9ybURhdGEoeyAuLi5wb3N0Rm9ybURhdGEsIGF1dGhvck5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMS41IHRleHQteHMgYmctbmV1dHJhbC01MCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC03MDAgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICBBdXRob3IgUm9sZVxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwb3N0Rm9ybURhdGEuYXV0aG9yUm9sZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHNldFBvc3RGb3JtRGF0YSh7IC4uLnBvc3RGb3JtRGF0YSwgYXV0aG9yUm9sZTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0xLjUgdGV4dC14cyBiZy1uZXV0cmFsLTUwIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1uZXV0cmFsLTcwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICBFeGNlcnB0IC8gU2hvcnQgU3VtbWFyeVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICByb3dzPXsyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bvc3RGb3JtRGF0YS5leGNlcnB0fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRQb3N0Rm9ybURhdGEoeyAuLi5wb3N0Rm9ybURhdGEsIGV4Y2VycHQ6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9uZSBvciB0d28gc2VudGVuY2VzIHN1bW1hcml6aW5nIHRoZSBhcnRpY2xlLi4uXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTEuNSB0ZXh0LXhzIGJnLW5ldXRyYWwtNTAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1uZXV0cmFsLTcwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICBBcnRpY2xlIENvbnRlbnQgKE1hcmtkb3duIHN1cHBvcnRlZCkgKlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICByb3dzPXs4fVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwb3N0Rm9ybURhdGEuY29udGVudH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0UG9zdEZvcm1EYXRhKHsgLi4ucG9zdEZvcm1EYXRhLCBjb250ZW50OiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSB0aGUgZnVsbCBwb3N0IGhlcmUuLi5cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1uZXV0cmFsLTUwIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IGJvcmRlci10IGJvcmRlci1uZXV0cmFsLTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNQb3N0TW9kYWxPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtbmV1dHJhbC02MDAgaG92ZXI6dGV4dC1uZXV0cmFsLTkwMCBiZy1uZXV0cmFsLTEwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBiZy1uZXV0cmFsLTkwMCBob3ZlcjpiZy1uZXV0cmFsLTgwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7ZWRpdGluZ1Bvc3QgPyAnU2F2ZSBBcnRpY2xlJyA6ICdQdWJsaXNoIEFydGljbGUnfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iXX0=