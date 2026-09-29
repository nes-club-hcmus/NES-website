const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"]; const useEffect = __vite__cjsImport0_react["useEffect"];const _jsxDEV = __vite__cjsImport15_react_jsxDevRuntime["jsxDEV"];/**
* @license
* SPDX-License-Identifier: Apache-2.0
*/
import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=83e0c204";
import { Navbar } from "/src/components/Navbar.tsx";
import { HeroSection } from "/src/components/HeroSection.tsx";
import { AboutSection } from "/src/components/AboutSection.tsx";
import { MembersSection } from "/src/components/MembersSection.tsx";
import { EventsSection } from "/src/components/EventsSection.tsx";
import { BlogSection } from "/src/components/BlogSection.tsx";
import { JoinFormSection } from "/src/components/JoinFormSection.tsx";
import { AdminDashboard } from "/src/components/AdminDashboard.tsx";
import { NextJsBlueprintModal } from "/src/components/NextJsBlueprintModal.tsx";
import { GitExportModal } from "/src/components/GitExportModal.tsx";
import { Footer } from "/src/components/Footer.tsx";
import { StorageService } from "/src/services/storageService.ts";
import { downloadProjectZip } from "/src/services/exportZipService.ts";
import { ArrowLeft, CheckCircle2 } from "/node_modules/.vite/deps/lucide-react.js?v=83e0c204";
var _jsxFileName = "/app/applet/src/App.tsx";
import __vite__cjsImport15_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=83e0c204";
export default function App() {
	const [activeSection, setActiveSection] = useState("about");
	const [language, setLanguage] = useState("vi");
	const [isBlueprintOpen, setIsBlueprintOpen] = useState(false);
	const [isGitExportOpen, setIsGitExportOpen] = useState(false);
	// Core Data State
	const [clubInfo, setClubInfo] = useState(StorageService.getClubInfo());
	const [members, setMembers] = useState([]);
	const [events, setEvents] = useState([]);
	const [posts, setPosts] = useState([]);
	const [applications, setApplications] = useState([]);
	const [notification, setNotification] = useState(null);
	// Initialize data on mount
	useEffect(() => {
		setClubInfo(StorageService.getClubInfo());
		setMembers(StorageService.getMembers());
		setEvents(StorageService.getEvents());
		setPosts(StorageService.getPosts());
		setApplications(StorageService.getApplications());
	}, []);
	const triggerNotification = (msg) => {
		setNotification(msg);
		setTimeout(() => setNotification(null), 3e3);
	};
	// Member CRUD handlers
	const handleAddMember = (newMemData) => {
		const created = StorageService.addMember(newMemData);
		setMembers(StorageService.getMembers());
		triggerNotification(language === "vi" ? `Đã thêm thành viên ${created.name}` : `Added member ${created.name}`);
	};
	const handleUpdateMember = (id, updates) => {
		StorageService.updateMember(id, updates);
		setMembers(StorageService.getMembers());
		triggerNotification(language === "vi" ? "Đã cập nhật thông tin thành viên" : "Member updated successfully");
	};
	const handleDeleteMember = (id) => {
		StorageService.deleteMember(id);
		setMembers(StorageService.getMembers());
		triggerNotification(language === "vi" ? "Đã xoá thành viên" : "Member removed");
	};
	// Event CRUD handlers
	const handleAddEvent = (newEventData) => {
		const created = StorageService.addEvent(newEventData);
		setEvents(StorageService.getEvents());
		triggerNotification(language === "vi" ? `Đã xuất bản sự kiện "${created.title}"` : `Event "${created.title}" published`);
	};
	const handleUpdateEvent = (id, updates) => {
		StorageService.updateEvent(id, updates);
		setEvents(StorageService.getEvents());
		triggerNotification(language === "vi" ? "Đã cập nhật sự kiện" : "Event details updated");
	};
	const handleDeleteEvent = (id) => {
		StorageService.deleteEvent(id);
		setEvents(StorageService.getEvents());
		triggerNotification(language === "vi" ? "Đã xoá sự kiện" : "Event deleted");
	};
	const handleToggleRsvp = (eventId, email) => {
		const res = StorageService.toggleRsvp(eventId, email);
		setEvents(StorageService.getEvents());
		return res;
	};
	// Blog Post CRUD handlers
	const handleAddPost = (newPostData) => {
		const created = StorageService.addPost(newPostData);
		setPosts(StorageService.getPosts());
		triggerNotification(language === "vi" ? `Đã xuất bản bài viết "${created.title}"` : `Article "${created.title}" published`);
	};
	const handleUpdatePost = (id, updates) => {
		StorageService.updatePost(id, updates);
		setPosts(StorageService.getPosts());
		triggerNotification(language === "vi" ? "Đã cập nhật bài viết" : "Article updated");
	};
	const handleDeletePost = (id) => {
		StorageService.deletePost(id);
		setPosts(StorageService.getPosts());
		triggerNotification(language === "vi" ? "Đã xoá bài viết" : "Article deleted");
	};
	const handleLikePost = (id) => {
		StorageService.likePost(id);
		setPosts(StorageService.getPosts());
	};
	// Application handlers
	const handleSubmitApplication = (newAppData) => {
		const created = StorageService.addApplication(newAppData);
		setApplications(StorageService.getApplications());
		triggerNotification(language === "vi" ? `Đã nhận đơn ứng tuyển từ ${created.fullName}!` : `Application from ${created.fullName} submitted!`);
		return created;
	};
	const handleUpdateApplicationStatus = (id, status, notes) => {
		StorageService.updateApplicationStatus(id, status, notes);
		setApplications(StorageService.getApplications());
		triggerNotification(language === "vi" ? `Cập nhật trạng thái hồ sơ: ${status}` : `Application status updated to ${status}`);
	};
	const handleDeleteApplication = (id) => {
		StorageService.deleteApplication(id);
		setApplications(StorageService.getApplications());
		triggerNotification(language === "vi" ? "Đã xoá hồ sơ ứng tuyển" : "Application record removed");
	};
	// Database Seed Download
	const handleDownloadSeed = () => {
		const seed = StorageService.exportDatabaseSeed();
		const jsonStr = JSON.stringify(seed, null, 2);
		const blob = new Blob([jsonStr], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `nes-hcmus-mongodb-seed-${new Date().toISOString().split("T")[0]}.json`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
		triggerNotification(language === "vi" ? "Đã xuất file seed.json cho MongoDB" : "seed.json exported for MongoDB");
	};
	// Reset to defaults
	const handleResetDefaults = () => {
		StorageService.resetToDefaults();
		setClubInfo(StorageService.getClubInfo());
		setMembers(StorageService.getMembers());
		setEvents(StorageService.getEvents());
		setPosts(StorageService.getPosts());
		setApplications(StorageService.getApplications());
		triggerNotification(language === "vi" ? "Đã khôi phục dữ liệu ban đầu" : "Restored initial sample data");
	};
	const pendingAppsCount = applications.filter((a) => a.status === "Pending").length;
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "min-h-screen bg-[#fafaf9] text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white",
		children: [
			notification && /* @__PURE__ */ _jsxDEV("div", {
				className: "fixed bottom-5 right-5 z-50 bg-neutral-950 text-white text-xs px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2 border border-neutral-800 transition-all",
				children: [/* @__PURE__ */ _jsxDEV(CheckCircle2, { className: "w-4 h-4 text-emerald-400 shrink-0" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 211,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("span", { children: notification }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 212,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 210,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ _jsxDEV(Navbar, {
				activeSection,
				setActiveSection,
				onOpenBlueprint: () => setIsBlueprintOpen(true),
				onOpenGitExport: () => setIsGitExportOpen(true),
				pendingApplicationsCount: pendingAppsCount,
				language,
				onLanguageChange: setLanguage
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 217,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("main", {
				className: "flex-1",
				children: activeSection === "dashboard" ? /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "bg-neutral-100/90 border-b border-neutral-200 py-3 px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ _jsxDEV("div", {
						className: "max-w-7xl mx-auto flex items-center justify-between",
						children: [/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setActiveSection("about"),
							className: "flex items-center gap-1.5 text-xs font-semibold text-neutral-700 hover:text-neutral-950 transition-colors",
							children: [/* @__PURE__ */ _jsxDEV(ArrowLeft, { className: "w-3.5 h-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 238,
								columnNumber: 19
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: language === "vi" ? "← Quay lại Trang Chủ NES" : "← Return to Public Club Website" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 239,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 234,
							columnNumber: 17
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-3 text-xs text-neutral-500 font-mono",
							children: [
								/* @__PURE__ */ _jsxDEV("span", { children: "Stack: Next.js + MongoDB M0" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 246,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									"aria-hidden": "true",
									children: "·"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 247,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									className: "text-emerald-700 font-medium",
									children: "HCMUS Academic DB"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 248,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 245,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 233,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 232,
					columnNumber: 13
				}, this), /* @__PURE__ */ _jsxDEV(AdminDashboard, {
					members,
					events,
					posts,
					applications,
					language,
					onAddMember: handleAddMember,
					onUpdateMember: handleUpdateMember,
					onDeleteMember: handleDeleteMember,
					onAddEvent: handleAddEvent,
					onUpdateEvent: handleUpdateEvent,
					onDeleteEvent: handleDeleteEvent,
					onAddPost: handleAddPost,
					onUpdatePost: handleUpdatePost,
					onDeletePost: handleDeletePost,
					onUpdateApplicationStatus: handleUpdateApplicationStatus,
					onDeleteApplication: handleDeleteApplication,
					onExportDatabaseSeed: handleDownloadSeed,
					onResetDefaults: handleResetDefaults,
					onOpenBlueprint: () => setIsBlueprintOpen(true)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 253,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 230,
					columnNumber: 11
				}, this) : /* @__PURE__ */ _jsxDEV("div", { children: [
					/* @__PURE__ */ _jsxDEV(HeroSection, {
						clubInfo,
						language,
						onExploreEvents: () => setActiveSection("events"),
						onJoinClick: () => setActiveSection("join"),
						onOpenBlueprint: () => setIsBlueprintOpen(true)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 277,
						columnNumber: 13
					}, this),
					(activeSection === "about" || activeSection === "all") && /* @__PURE__ */ _jsxDEV(AboutSection, {
						clubInfo,
						language
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 286,
						columnNumber: 15
					}, this),
					(activeSection === "about" || activeSection === "members" || activeSection === "all") && /* @__PURE__ */ _jsxDEV(MembersSection, {
						members,
						language,
						onManageMembers: () => setActiveSection("dashboard"),
						onJoinClick: () => setActiveSection("join")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 290,
						columnNumber: 15
					}, this),
					(activeSection === "about" || activeSection === "events" || activeSection === "all") && /* @__PURE__ */ _jsxDEV(EventsSection, {
						events,
						language,
						onToggleRsvp: handleToggleRsvp,
						onManageEvents: () => setActiveSection("dashboard")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 299,
						columnNumber: 15
					}, this),
					(activeSection === "about" || activeSection === "blog" || activeSection === "all") && /* @__PURE__ */ _jsxDEV(BlogSection, {
						posts,
						language,
						onLikePost: handleLikePost,
						onManagePosts: () => setActiveSection("dashboard")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 308,
						columnNumber: 15
					}, this),
					(activeSection === "about" || activeSection === "join" || activeSection === "all") && /* @__PURE__ */ _jsxDEV(JoinFormSection, {
						language,
						onSubmitApplication: handleSubmitApplication
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 317,
						columnNumber: 15
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 276,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 228,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(NextJsBlueprintModal, {
				isOpen: isBlueprintOpen,
				onClose: () => setIsBlueprintOpen(false),
				onDownloadSeed: handleDownloadSeed
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 327,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(GitExportModal, {
				isOpen: isGitExportOpen,
				onClose: () => setIsGitExportOpen(false),
				onDownloadZip: downloadProjectZip
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 334,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(Footer, {
				clubInfo,
				language,
				onNavClick: (sec) => setActiveSection(sec),
				onOpenBlueprint: () => setIsBlueprintOpen(true),
				onOpenGitExport: () => setIsGitExportOpen(true)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 341,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 207,
		columnNumber: 5
	}, this);
}

//# sourceMappingURL=data:application/json;base64,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LElBQUk7S0FDL0M7Ozs7O01BRUMsa0JBQWtCLFdBQVcsa0JBQWtCLFVBQy9DLHdCQUFDLGNBQUQ7TUFBd0I7TUFBb0I7S0FBVzs7Ozs7TUFHdkQsa0JBQWtCLFdBQVcsa0JBQWtCLGFBQWEsa0JBQWtCLFVBQzlFLHdCQUFDLGdCQUFEO01BQ1c7TUFDQztNQUNWLHVCQUF1QixpQkFBaUIsV0FBVztNQUNuRCxtQkFBbUIsaUJBQWlCLE1BQU07S0FDM0M7Ozs7O01BR0Qsa0JBQWtCLFdBQVcsa0JBQWtCLFlBQVksa0JBQWtCLFVBQzdFLHdCQUFDLGVBQUQ7TUFDVTtNQUNFO01BQ1YsY0FBYztNQUNkLHNCQUFzQixpQkFBaUIsV0FBVztLQUNuRDs7Ozs7TUFHRCxrQkFBa0IsV0FBVyxrQkFBa0IsVUFBVSxrQkFBa0IsVUFDM0Usd0JBQUMsYUFBRDtNQUNTO01BQ0c7TUFDVixZQUFZO01BQ1oscUJBQXFCLGlCQUFpQixXQUFXO0tBQ2xEOzs7OztNQUdELGtCQUFrQixXQUFXLGtCQUFrQixVQUFVLGtCQUFrQixVQUMzRSx3QkFBQyxpQkFBRDtNQUNZO01BQ1YscUJBQXFCO0tBQ3RCOzs7OztJQUVBOzs7OztHQUVIOzs7OztHQUdOLHdCQUFDLHNCQUFEO0lBQ0UsUUFBUTtJQUNSLGVBQWUsbUJBQW1CLEtBQUs7SUFDdkMsZ0JBQWdCO0dBQ2pCOzs7OztHQUdELHdCQUFDLGdCQUFEO0lBQ0UsUUFBUTtJQUNSLGVBQWUsbUJBQW1CLEtBQUs7SUFDdkMsZUFBZTtHQUNoQjs7Ozs7R0FHRCx3QkFBQyxRQUFEO0lBQ1k7SUFDQTtJQUNWLGFBQWEsUUFBUSxpQkFBaUIsR0FBRztJQUN6Qyx1QkFBdUIsbUJBQW1CLElBQUk7SUFDOUMsdUJBQXVCLG1CQUFtQixJQUFJO0dBQy9DOzs7OztFQUNFOzs7Ozs7QUFFVCIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJBcHAudHN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICcuL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCB7IEhlcm9TZWN0aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uJztcbmltcG9ydCB7IEFib3V0U2VjdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9BYm91dFNlY3Rpb24nO1xuaW1wb3J0IHsgTWVtYmVyc1NlY3Rpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvTWVtYmVyc1NlY3Rpb24nO1xuaW1wb3J0IHsgRXZlbnRzU2VjdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9FdmVudHNTZWN0aW9uJztcbmltcG9ydCB7IEJsb2dTZWN0aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL0Jsb2dTZWN0aW9uJztcbmltcG9ydCB7IEpvaW5Gb3JtU2VjdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9Kb2luRm9ybVNlY3Rpb24nO1xuaW1wb3J0IHsgQWRtaW5EYXNoYm9hcmQgfSBmcm9tICcuL2NvbXBvbmVudHMvQWRtaW5EYXNoYm9hcmQnO1xuaW1wb3J0IHsgTmV4dEpzQmx1ZXByaW50TW9kYWwgfSBmcm9tICcuL2NvbXBvbmVudHMvTmV4dEpzQmx1ZXByaW50TW9kYWwnO1xuaW1wb3J0IHsgR2l0RXhwb3J0TW9kYWwgfSBmcm9tICcuL2NvbXBvbmVudHMvR2l0RXhwb3J0TW9kYWwnO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc3RvcmFnZVNlcnZpY2UnO1xuaW1wb3J0IHsgZG93bmxvYWRQcm9qZWN0WmlwIH0gZnJvbSAnLi9zZXJ2aWNlcy9leHBvcnRaaXBTZXJ2aWNlJztcbmltcG9ydCB7IExhbmd1YWdlLCB0cmFuc2xhdGlvbnMgfSBmcm9tICcuL2RhdGEvdHJhbnNsYXRpb25zJztcbmltcG9ydCB7XG4gIENsdWJJbmZvLFxuICBDbHViTWVtYmVyLFxuICBDbHViRXZlbnQsXG4gIEJsb2dQb3N0LFxuICBNZW1iZXJzaGlwQXBwbGljYXRpb24sXG4gIEFwcGxpY2F0aW9uU3RhdHVzLFxufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IEFycm93TGVmdCwgQ2hlY2tDaXJjbGUyIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbYWN0aXZlU2VjdGlvbiwgc2V0QWN0aXZlU2VjdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCdhYm91dCcpO1xuICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IHVzZVN0YXRlPExhbmd1YWdlPigndmknKTsgLy8gRGVmYXVsdCB0byBWaWV0bmFtZXNlIGZvciBIQ01VU1xuICBjb25zdCBbaXNCbHVlcHJpbnRPcGVuLCBzZXRJc0JsdWVwcmludE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbaXNHaXRFeHBvcnRPcGVuLCBzZXRJc0dpdEV4cG9ydE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIC8vIENvcmUgRGF0YSBTdGF0ZVxuICBjb25zdCBbY2x1YkluZm8sIHNldENsdWJJbmZvXSA9IHVzZVN0YXRlPENsdWJJbmZvPihTdG9yYWdlU2VydmljZS5nZXRDbHViSW5mbygpKTtcbiAgY29uc3QgW21lbWJlcnMsIHNldE1lbWJlcnNdID0gdXNlU3RhdGU8Q2x1Yk1lbWJlcltdPihbXSk7XG4gIGNvbnN0IFtldmVudHMsIHNldEV2ZW50c10gPSB1c2VTdGF0ZTxDbHViRXZlbnRbXT4oW10pO1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlPEJsb2dQb3N0W10+KFtdKTtcbiAgY29uc3QgW2FwcGxpY2F0aW9ucywgc2V0QXBwbGljYXRpb25zXSA9IHVzZVN0YXRlPE1lbWJlcnNoaXBBcHBsaWNhdGlvbltdPihbXSk7XG4gIGNvbnN0IFtub3RpZmljYXRpb24sIHNldE5vdGlmaWNhdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICAvLyBJbml0aWFsaXplIGRhdGEgb24gbW91bnRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDbHViSW5mbyhTdG9yYWdlU2VydmljZS5nZXRDbHViSW5mbygpKTtcbiAgICBzZXRNZW1iZXJzKFN0b3JhZ2VTZXJ2aWNlLmdldE1lbWJlcnMoKSk7XG4gICAgc2V0RXZlbnRzKFN0b3JhZ2VTZXJ2aWNlLmdldEV2ZW50cygpKTtcbiAgICBzZXRQb3N0cyhTdG9yYWdlU2VydmljZS5nZXRQb3N0cygpKTtcbiAgICBzZXRBcHBsaWNhdGlvbnMoU3RvcmFnZVNlcnZpY2UuZ2V0QXBwbGljYXRpb25zKCkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgdHJpZ2dlck5vdGlmaWNhdGlvbiA9IChtc2c6IHN0cmluZykgPT4ge1xuICAgIHNldE5vdGlmaWNhdGlvbihtc2cpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Tm90aWZpY2F0aW9uKG51bGwpLCAzMDAwKTtcbiAgfTtcblxuICAvLyBNZW1iZXIgQ1JVRCBoYW5kbGVyc1xuICBjb25zdCBoYW5kbGVBZGRNZW1iZXIgPSAobmV3TWVtRGF0YTogT21pdDxDbHViTWVtYmVyLCAnaWQnIHwgJ2pvaW5lZERhdGUnPikgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZWQgPSBTdG9yYWdlU2VydmljZS5hZGRNZW1iZXIobmV3TWVtRGF0YSk7XG4gICAgc2V0TWVtYmVycyhTdG9yYWdlU2VydmljZS5nZXRNZW1iZXJzKCkpO1xuICAgIHRyaWdnZXJOb3RpZmljYXRpb24oXG4gICAgICBsYW5ndWFnZSA9PT0gJ3ZpJyA/IGDEkMOjIHRow6ptIHRow6BuaCB2acOqbiAke2NyZWF0ZWQubmFtZX1gIDogYEFkZGVkIG1lbWJlciAke2NyZWF0ZWQubmFtZX1gXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVVcGRhdGVNZW1iZXIgPSAoaWQ6IHN0cmluZywgdXBkYXRlczogUGFydGlhbDxDbHViTWVtYmVyPikgPT4ge1xuICAgIFN0b3JhZ2VTZXJ2aWNlLnVwZGF0ZU1lbWJlcihpZCwgdXBkYXRlcyk7XG4gICAgc2V0TWVtYmVycyhTdG9yYWdlU2VydmljZS5nZXRNZW1iZXJzKCkpO1xuICAgIHRyaWdnZXJOb3RpZmljYXRpb24oXG4gICAgICBsYW5ndWFnZSA9PT0gJ3ZpJyA/ICfEkMOjIGPhuq1wIG5o4bqtdCB0aMO0bmcgdGluIHRow6BuaCB2acOqbicgOiAnTWVtYmVyIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5J1xuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlTWVtYmVyID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICBTdG9yYWdlU2VydmljZS5kZWxldGVNZW1iZXIoaWQpO1xuICAgIHNldE1lbWJlcnMoU3RvcmFnZVNlcnZpY2UuZ2V0TWVtYmVycygpKTtcbiAgICB0cmlnZ2VyTm90aWZpY2F0aW9uKGxhbmd1YWdlID09PSAndmknID8gJ8SQw6MgeG/DoSB0aMOgbmggdmnDqm4nIDogJ01lbWJlciByZW1vdmVkJyk7XG4gIH07XG5cbiAgLy8gRXZlbnQgQ1JVRCBoYW5kbGVyc1xuICBjb25zdCBoYW5kbGVBZGRFdmVudCA9IChuZXdFdmVudERhdGE6IE9taXQ8Q2x1YkV2ZW50LCAnaWQnIHwgJ3JzdnBzJz4pID0+IHtcbiAgICBjb25zdCBjcmVhdGVkID0gU3RvcmFnZVNlcnZpY2UuYWRkRXZlbnQobmV3RXZlbnREYXRhKTtcbiAgICBzZXRFdmVudHMoU3RvcmFnZVNlcnZpY2UuZ2V0RXZlbnRzKCkpO1xuICAgIHRyaWdnZXJOb3RpZmljYXRpb24oXG4gICAgICBsYW5ndWFnZSA9PT0gJ3ZpJyA/IGDEkMOjIHh14bqldCBi4bqjbiBz4buxIGtp4buHbiBcIiR7Y3JlYXRlZC50aXRsZX1cImAgOiBgRXZlbnQgXCIke2NyZWF0ZWQudGl0bGV9XCIgcHVibGlzaGVkYFxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVXBkYXRlRXZlbnQgPSAoaWQ6IHN0cmluZywgdXBkYXRlczogUGFydGlhbDxDbHViRXZlbnQ+KSA9PiB7XG4gICAgU3RvcmFnZVNlcnZpY2UudXBkYXRlRXZlbnQoaWQsIHVwZGF0ZXMpO1xuICAgIHNldEV2ZW50cyhTdG9yYWdlU2VydmljZS5nZXRFdmVudHMoKSk7XG4gICAgdHJpZ2dlck5vdGlmaWNhdGlvbihcbiAgICAgIGxhbmd1YWdlID09PSAndmknID8gJ8SQw6MgY+G6rXAgbmjhuq10IHPhu7Ega2nhu4duJyA6ICdFdmVudCBkZXRhaWxzIHVwZGF0ZWQnXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVFdmVudCA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgU3RvcmFnZVNlcnZpY2UuZGVsZXRlRXZlbnQoaWQpO1xuICAgIHNldEV2ZW50cyhTdG9yYWdlU2VydmljZS5nZXRFdmVudHMoKSk7XG4gICAgdHJpZ2dlck5vdGlmaWNhdGlvbihsYW5ndWFnZSA9PT0gJ3ZpJyA/ICfEkMOjIHhvw6Egc+G7sSBraeG7h24nIDogJ0V2ZW50IGRlbGV0ZWQnKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGVSc3ZwID0gKGV2ZW50SWQ6IHN0cmluZywgZW1haWw6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHJlcyA9IFN0b3JhZ2VTZXJ2aWNlLnRvZ2dsZVJzdnAoZXZlbnRJZCwgZW1haWwpO1xuICAgIHNldEV2ZW50cyhTdG9yYWdlU2VydmljZS5nZXRFdmVudHMoKSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICAvLyBCbG9nIFBvc3QgQ1JVRCBoYW5kbGVyc1xuICBjb25zdCBoYW5kbGVBZGRQb3N0ID0gKG5ld1Bvc3REYXRhOiBPbWl0PEJsb2dQb3N0LCAnaWQnIHwgJ2xpa2VzJyB8ICdwdWJsaXNoZWRBdCc+KSA9PiB7XG4gICAgY29uc3QgY3JlYXRlZCA9IFN0b3JhZ2VTZXJ2aWNlLmFkZFBvc3QobmV3UG9zdERhdGEpO1xuICAgIHNldFBvc3RzKFN0b3JhZ2VTZXJ2aWNlLmdldFBvc3RzKCkpO1xuICAgIHRyaWdnZXJOb3RpZmljYXRpb24oXG4gICAgICBsYW5ndWFnZSA9PT0gJ3ZpJyA/IGDEkMOjIHh14bqldCBi4bqjbiBiw6BpIHZp4bq/dCBcIiR7Y3JlYXRlZC50aXRsZX1cImAgOiBgQXJ0aWNsZSBcIiR7Y3JlYXRlZC50aXRsZX1cIiBwdWJsaXNoZWRgXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVVcGRhdGVQb3N0ID0gKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IFBhcnRpYWw8QmxvZ1Bvc3Q+KSA9PiB7XG4gICAgU3RvcmFnZVNlcnZpY2UudXBkYXRlUG9zdChpZCwgdXBkYXRlcyk7XG4gICAgc2V0UG9zdHMoU3RvcmFnZVNlcnZpY2UuZ2V0UG9zdHMoKSk7XG4gICAgdHJpZ2dlck5vdGlmaWNhdGlvbihsYW5ndWFnZSA9PT0gJ3ZpJyA/ICfEkMOjIGPhuq1wIG5o4bqtdCBiw6BpIHZp4bq/dCcgOiAnQXJ0aWNsZSB1cGRhdGVkJyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlUG9zdCA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgU3RvcmFnZVNlcnZpY2UuZGVsZXRlUG9zdChpZCk7XG4gICAgc2V0UG9zdHMoU3RvcmFnZVNlcnZpY2UuZ2V0UG9zdHMoKSk7XG4gICAgdHJpZ2dlck5vdGlmaWNhdGlvbihsYW5ndWFnZSA9PT0gJ3ZpJyA/ICfEkMOjIHhvw6EgYsOgaSB2aeG6v3QnIDogJ0FydGljbGUgZGVsZXRlZCcpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxpa2VQb3N0ID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICBTdG9yYWdlU2VydmljZS5saWtlUG9zdChpZCk7XG4gICAgc2V0UG9zdHMoU3RvcmFnZVNlcnZpY2UuZ2V0UG9zdHMoKSk7XG4gIH07XG5cbiAgLy8gQXBwbGljYXRpb24gaGFuZGxlcnNcbiAgY29uc3QgaGFuZGxlU3VibWl0QXBwbGljYXRpb24gPSAoXG4gICAgbmV3QXBwRGF0YTogT21pdDxNZW1iZXJzaGlwQXBwbGljYXRpb24sICdpZCcgfCAnc3RhdHVzJyB8ICdzdWJtaXR0ZWRBdCc+XG4gICkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZWQgPSBTdG9yYWdlU2VydmljZS5hZGRBcHBsaWNhdGlvbihuZXdBcHBEYXRhKTtcbiAgICBzZXRBcHBsaWNhdGlvbnMoU3RvcmFnZVNlcnZpY2UuZ2V0QXBwbGljYXRpb25zKCkpO1xuICAgIHRyaWdnZXJOb3RpZmljYXRpb24oXG4gICAgICBsYW5ndWFnZSA9PT0gJ3ZpJ1xuICAgICAgICA/IGDEkMOjIG5o4bqtbiDEkcahbiDhu6luZyB0dXnhu4NuIHThu6sgJHtjcmVhdGVkLmZ1bGxOYW1lfSFgXG4gICAgICAgIDogYEFwcGxpY2F0aW9uIGZyb20gJHtjcmVhdGVkLmZ1bGxOYW1lfSBzdWJtaXR0ZWQhYFxuICAgICk7XG4gICAgcmV0dXJuIGNyZWF0ZWQ7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVXBkYXRlQXBwbGljYXRpb25TdGF0dXMgPSAoXG4gICAgaWQ6IHN0cmluZyxcbiAgICBzdGF0dXM6IEFwcGxpY2F0aW9uU3RhdHVzLFxuICAgIG5vdGVzPzogc3RyaW5nXG4gICkgPT4ge1xuICAgIFN0b3JhZ2VTZXJ2aWNlLnVwZGF0ZUFwcGxpY2F0aW9uU3RhdHVzKGlkLCBzdGF0dXMsIG5vdGVzKTtcbiAgICBzZXRBcHBsaWNhdGlvbnMoU3RvcmFnZVNlcnZpY2UuZ2V0QXBwbGljYXRpb25zKCkpO1xuICAgIHRyaWdnZXJOb3RpZmljYXRpb24oXG4gICAgICBsYW5ndWFnZSA9PT0gJ3ZpJ1xuICAgICAgICA/IGBD4bqtcCBuaOG6rXQgdHLhuqFuZyB0aMOhaSBo4buTIHPGoTogJHtzdGF0dXN9YFxuICAgICAgICA6IGBBcHBsaWNhdGlvbiBzdGF0dXMgdXBkYXRlZCB0byAke3N0YXR1c31gXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVBcHBsaWNhdGlvbiA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgU3RvcmFnZVNlcnZpY2UuZGVsZXRlQXBwbGljYXRpb24oaWQpO1xuICAgIHNldEFwcGxpY2F0aW9ucyhTdG9yYWdlU2VydmljZS5nZXRBcHBsaWNhdGlvbnMoKSk7XG4gICAgdHJpZ2dlck5vdGlmaWNhdGlvbihcbiAgICAgIGxhbmd1YWdlID09PSAndmknID8gJ8SQw6MgeG/DoSBo4buTIHPGoSDhu6luZyB0dXnhu4NuJyA6ICdBcHBsaWNhdGlvbiByZWNvcmQgcmVtb3ZlZCdcbiAgICApO1xuICB9O1xuXG4gIC8vIERhdGFiYXNlIFNlZWQgRG93bmxvYWRcbiAgY29uc3QgaGFuZGxlRG93bmxvYWRTZWVkID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlZWQgPSBTdG9yYWdlU2VydmljZS5leHBvcnREYXRhYmFzZVNlZWQoKTtcbiAgICBjb25zdCBqc29uU3RyID0gSlNPTi5zdHJpbmdpZnkoc2VlZCwgbnVsbCwgMik7XG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtqc29uU3RyXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGEuaHJlZiA9IHVybDtcbiAgICBhLmRvd25sb2FkID0gYG5lcy1oY211cy1tb25nb2RiLXNlZWQtJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXX0uanNvbmA7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcbiAgICBhLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgdHJpZ2dlck5vdGlmaWNhdGlvbihcbiAgICAgIGxhbmd1YWdlID09PSAndmknID8gJ8SQw6MgeHXhuqV0IGZpbGUgc2VlZC5qc29uIGNobyBNb25nb0RCJyA6ICdzZWVkLmpzb24gZXhwb3J0ZWQgZm9yIE1vbmdvREInXG4gICAgKTtcbiAgfTtcblxuICAvLyBSZXNldCB0byBkZWZhdWx0c1xuICBjb25zdCBoYW5kbGVSZXNldERlZmF1bHRzID0gKCkgPT4ge1xuICAgIFN0b3JhZ2VTZXJ2aWNlLnJlc2V0VG9EZWZhdWx0cygpO1xuICAgIHNldENsdWJJbmZvKFN0b3JhZ2VTZXJ2aWNlLmdldENsdWJJbmZvKCkpO1xuICAgIHNldE1lbWJlcnMoU3RvcmFnZVNlcnZpY2UuZ2V0TWVtYmVycygpKTtcbiAgICBzZXRFdmVudHMoU3RvcmFnZVNlcnZpY2UuZ2V0RXZlbnRzKCkpO1xuICAgIHNldFBvc3RzKFN0b3JhZ2VTZXJ2aWNlLmdldFBvc3RzKCkpO1xuICAgIHNldEFwcGxpY2F0aW9ucyhTdG9yYWdlU2VydmljZS5nZXRBcHBsaWNhdGlvbnMoKSk7XG4gICAgdHJpZ2dlck5vdGlmaWNhdGlvbihcbiAgICAgIGxhbmd1YWdlID09PSAndmknID8gJ8SQw6Mga2jDtGkgcGjhu6VjIGThu68gbGnhu4d1IGJhbiDEkeG6p3UnIDogJ1Jlc3RvcmVkIGluaXRpYWwgc2FtcGxlIGRhdGEnXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBwZW5kaW5nQXBwc0NvdW50ID0gYXBwbGljYXRpb25zLmZpbHRlcigoYSkgPT4gYS5zdGF0dXMgPT09ICdQZW5kaW5nJykubGVuZ3RoO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctWyNmYWZhZjldIHRleHQtbmV1dHJhbC05MDAgZmxleCBmbGV4LWNvbCBmb250LXNhbnMgc2VsZWN0aW9uOmJnLW5ldXRyYWwtOTAwIHNlbGVjdGlvbjp0ZXh0LXdoaXRlXCI+XG4gICAgICB7LyogR2xvYmFsIFRvYXN0IE5vdGlmaWNhdGlvbiAqL31cbiAgICAgIHtub3RpZmljYXRpb24gJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS01IHJpZ2h0LTUgei01MCBiZy1uZXV0cmFsLTk1MCB0ZXh0LXdoaXRlIHRleHQteHMgcHgtNCBweS0yLjUgcm91bmRlZC1sZyBzaGFkb3ctbGcgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTgwMCB0cmFuc2l0aW9uLWFsbFwiPlxuICAgICAgICAgIDxDaGVja0NpcmNsZTIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWVtZXJhbGQtNDAwIHNocmluay0wXCIgLz5cbiAgICAgICAgICA8c3Bhbj57bm90aWZpY2F0aW9ufTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7LyogVG9wIE5hdmJhciB3aXRoIExhbmd1YWdlIFN3aXRjaGVyICovfVxuICAgICAgPE5hdmJhclxuICAgICAgICBhY3RpdmVTZWN0aW9uPXthY3RpdmVTZWN0aW9ufVxuICAgICAgICBzZXRBY3RpdmVTZWN0aW9uPXtzZXRBY3RpdmVTZWN0aW9ufVxuICAgICAgICBvbk9wZW5CbHVlcHJpbnQ9eygpID0+IHNldElzQmx1ZXByaW50T3Blbih0cnVlKX1cbiAgICAgICAgb25PcGVuR2l0RXhwb3J0PXsoKSA9PiBzZXRJc0dpdEV4cG9ydE9wZW4odHJ1ZSl9XG4gICAgICAgIHBlbmRpbmdBcHBsaWNhdGlvbnNDb3VudD17cGVuZGluZ0FwcHNDb3VudH1cbiAgICAgICAgbGFuZ3VhZ2U9e2xhbmd1YWdlfVxuICAgICAgICBvbkxhbmd1YWdlQ2hhbmdlPXtzZXRMYW5ndWFnZX1cbiAgICAgIC8+XG5cbiAgICAgIHsvKiBNYWluIENvbnRlbnQgQXJlYSAqL31cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICB7YWN0aXZlU2VjdGlvbiA9PT0gJ2Rhc2hib2FyZCcgPyAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsvKiBEYXNoYm9hcmQgU3ViLUhlYWRlciB3aXRoIEJhY2sgQnV0dG9uICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1uZXV0cmFsLTEwMC85MCBib3JkZXItYiBib3JkZXItbmV1dHJhbC0yMDAgcHktMyBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVNlY3Rpb24oJ2Fib3V0Jyl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtNzAwIGhvdmVyOnRleHQtbmV1dHJhbC05NTAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxBcnJvd0xlZnQgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3ZpJ1xuICAgICAgICAgICAgICAgICAgICAgID8gJ+KGkCBRdWF5IGzhuqFpIFRyYW5nIENo4bunIE5FUydcbiAgICAgICAgICAgICAgICAgICAgICA6ICfihpAgUmV0dXJuIHRvIFB1YmxpYyBDbHViIFdlYnNpdGUnfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgdGV4dC14cyB0ZXh0LW5ldXRyYWwtNTAwIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+U3RhY2s6IE5leHQuanMgKyBNb25nb0RCIE0wPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+wrc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWVtZXJhbGQtNzAwIGZvbnQtbWVkaXVtXCI+SENNVVMgQWNhZGVtaWMgREI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxBZG1pbkRhc2hib2FyZFxuICAgICAgICAgICAgICBtZW1iZXJzPXttZW1iZXJzfVxuICAgICAgICAgICAgICBldmVudHM9e2V2ZW50c31cbiAgICAgICAgICAgICAgcG9zdHM9e3Bvc3RzfVxuICAgICAgICAgICAgICBhcHBsaWNhdGlvbnM9e2FwcGxpY2F0aW9uc31cbiAgICAgICAgICAgICAgbGFuZ3VhZ2U9e2xhbmd1YWdlfVxuICAgICAgICAgICAgICBvbkFkZE1lbWJlcj17aGFuZGxlQWRkTWVtYmVyfVxuICAgICAgICAgICAgICBvblVwZGF0ZU1lbWJlcj17aGFuZGxlVXBkYXRlTWVtYmVyfVxuICAgICAgICAgICAgICBvbkRlbGV0ZU1lbWJlcj17aGFuZGxlRGVsZXRlTWVtYmVyfVxuICAgICAgICAgICAgICBvbkFkZEV2ZW50PXtoYW5kbGVBZGRFdmVudH1cbiAgICAgICAgICAgICAgb25VcGRhdGVFdmVudD17aGFuZGxlVXBkYXRlRXZlbnR9XG4gICAgICAgICAgICAgIG9uRGVsZXRlRXZlbnQ9e2hhbmRsZURlbGV0ZUV2ZW50fVxuICAgICAgICAgICAgICBvbkFkZFBvc3Q9e2hhbmRsZUFkZFBvc3R9XG4gICAgICAgICAgICAgIG9uVXBkYXRlUG9zdD17aGFuZGxlVXBkYXRlUG9zdH1cbiAgICAgICAgICAgICAgb25EZWxldGVQb3N0PXtoYW5kbGVEZWxldGVQb3N0fVxuICAgICAgICAgICAgICBvblVwZGF0ZUFwcGxpY2F0aW9uU3RhdHVzPXtoYW5kbGVVcGRhdGVBcHBsaWNhdGlvblN0YXR1c31cbiAgICAgICAgICAgICAgb25EZWxldGVBcHBsaWNhdGlvbj17aGFuZGxlRGVsZXRlQXBwbGljYXRpb259XG4gICAgICAgICAgICAgIG9uRXhwb3J0RGF0YWJhc2VTZWVkPXtoYW5kbGVEb3dubG9hZFNlZWR9XG4gICAgICAgICAgICAgIG9uUmVzZXREZWZhdWx0cz17aGFuZGxlUmVzZXREZWZhdWx0c31cbiAgICAgICAgICAgICAgb25PcGVuQmx1ZXByaW50PXsoKSA9PiBzZXRJc0JsdWVwcmludE9wZW4odHJ1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVyb1NlY3Rpb25cbiAgICAgICAgICAgICAgY2x1YkluZm89e2NsdWJJbmZvfVxuICAgICAgICAgICAgICBsYW5ndWFnZT17bGFuZ3VhZ2V9XG4gICAgICAgICAgICAgIG9uRXhwbG9yZUV2ZW50cz17KCkgPT4gc2V0QWN0aXZlU2VjdGlvbignZXZlbnRzJyl9XG4gICAgICAgICAgICAgIG9uSm9pbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVTZWN0aW9uKCdqb2luJyl9XG4gICAgICAgICAgICAgIG9uT3BlbkJsdWVwcmludD17KCkgPT4gc2V0SXNCbHVlcHJpbnRPcGVuKHRydWUpfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgeyhhY3RpdmVTZWN0aW9uID09PSAnYWJvdXQnIHx8IGFjdGl2ZVNlY3Rpb24gPT09ICdhbGwnKSAmJiAoXG4gICAgICAgICAgICAgIDxBYm91dFNlY3Rpb24gY2x1YkluZm89e2NsdWJJbmZvfSBsYW5ndWFnZT17bGFuZ3VhZ2V9IC8+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7KGFjdGl2ZVNlY3Rpb24gPT09ICdhYm91dCcgfHwgYWN0aXZlU2VjdGlvbiA9PT0gJ21lbWJlcnMnIHx8IGFjdGl2ZVNlY3Rpb24gPT09ICdhbGwnKSAmJiAoXG4gICAgICAgICAgICAgIDxNZW1iZXJzU2VjdGlvblxuICAgICAgICAgICAgICAgIG1lbWJlcnM9e21lbWJlcnN9XG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U9e2xhbmd1YWdlfVxuICAgICAgICAgICAgICAgIG9uTWFuYWdlTWVtYmVycz17KCkgPT4gc2V0QWN0aXZlU2VjdGlvbignZGFzaGJvYXJkJyl9XG4gICAgICAgICAgICAgICAgb25Kb2luQ2xpY2s9eygpID0+IHNldEFjdGl2ZVNlY3Rpb24oJ2pvaW4nKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHsoYWN0aXZlU2VjdGlvbiA9PT0gJ2Fib3V0JyB8fCBhY3RpdmVTZWN0aW9uID09PSAnZXZlbnRzJyB8fCBhY3RpdmVTZWN0aW9uID09PSAnYWxsJykgJiYgKFxuICAgICAgICAgICAgICA8RXZlbnRzU2VjdGlvblxuICAgICAgICAgICAgICAgIGV2ZW50cz17ZXZlbnRzfVxuICAgICAgICAgICAgICAgIGxhbmd1YWdlPXtsYW5ndWFnZX1cbiAgICAgICAgICAgICAgICBvblRvZ2dsZVJzdnA9e2hhbmRsZVRvZ2dsZVJzdnB9XG4gICAgICAgICAgICAgICAgb25NYW5hZ2VFdmVudHM9eygpID0+IHNldEFjdGl2ZVNlY3Rpb24oJ2Rhc2hib2FyZCcpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgeyhhY3RpdmVTZWN0aW9uID09PSAnYWJvdXQnIHx8IGFjdGl2ZVNlY3Rpb24gPT09ICdibG9nJyB8fCBhY3RpdmVTZWN0aW9uID09PSAnYWxsJykgJiYgKFxuICAgICAgICAgICAgICA8QmxvZ1NlY3Rpb25cbiAgICAgICAgICAgICAgICBwb3N0cz17cG9zdHN9XG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U9e2xhbmd1YWdlfVxuICAgICAgICAgICAgICAgIG9uTGlrZVBvc3Q9e2hhbmRsZUxpa2VQb3N0fVxuICAgICAgICAgICAgICAgIG9uTWFuYWdlUG9zdHM9eygpID0+IHNldEFjdGl2ZVNlY3Rpb24oJ2Rhc2hib2FyZCcpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgeyhhY3RpdmVTZWN0aW9uID09PSAnYWJvdXQnIHx8IGFjdGl2ZVNlY3Rpb24gPT09ICdqb2luJyB8fCBhY3RpdmVTZWN0aW9uID09PSAnYWxsJykgJiYgKFxuICAgICAgICAgICAgICA8Sm9pbkZvcm1TZWN0aW9uXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U9e2xhbmd1YWdlfVxuICAgICAgICAgICAgICAgIG9uU3VibWl0QXBwbGljYXRpb249e2hhbmRsZVN1Ym1pdEFwcGxpY2F0aW9ufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvbWFpbj5cblxuICAgICAgey8qIE5leHQuanMgJiBNb25nb0RCIEFyY2hpdGVjdHVyZSBHdWlkZSBNb2RhbCAqL31cbiAgICAgIDxOZXh0SnNCbHVlcHJpbnRNb2RhbFxuICAgICAgICBpc09wZW49e2lzQmx1ZXByaW50T3Blbn1cbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNCbHVlcHJpbnRPcGVuKGZhbHNlKX1cbiAgICAgICAgb25Eb3dubG9hZFNlZWQ9e2hhbmRsZURvd25sb2FkU2VlZH1cbiAgICAgIC8+XG5cbiAgICAgIHsvKiBQdXNoIHRvIEdpdCAvIEV4cG9ydCBNb2RhbCAqL31cbiAgICAgIDxHaXRFeHBvcnRNb2RhbFxuICAgICAgICBpc09wZW49e2lzR2l0RXhwb3J0T3Blbn1cbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNHaXRFeHBvcnRPcGVuKGZhbHNlKX1cbiAgICAgICAgb25Eb3dubG9hZFppcD17ZG93bmxvYWRQcm9qZWN0WmlwfVxuICAgICAgLz5cblxuICAgICAgey8qIEZvb3RlciAqL31cbiAgICAgIDxGb290ZXJcbiAgICAgICAgY2x1YkluZm89e2NsdWJJbmZvfVxuICAgICAgICBsYW5ndWFnZT17bGFuZ3VhZ2V9XG4gICAgICAgIG9uTmF2Q2xpY2s9eyhzZWMpID0+IHNldEFjdGl2ZVNlY3Rpb24oc2VjKX1cbiAgICAgICAgb25PcGVuQmx1ZXByaW50PXsoKSA9PiBzZXRJc0JsdWVwcmludE9wZW4odHJ1ZSl9XG4gICAgICAgIG9uT3BlbkdpdEV4cG9ydD17KCkgPT4gc2V0SXNHaXRFeHBvcnRPcGVuKHRydWUpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ==