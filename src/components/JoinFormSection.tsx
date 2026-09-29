const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=83e0c204";
import { Send, CheckCircle2 } from "/node_modules/.vite/deps/lucide-react.js?v=83e0c204";
import { translations } from "/src/data/translations.ts";
var _jsxFileName = "/app/applet/src/components/JoinFormSection.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=83e0c204";
export const JoinFormSection = ({ language, onSubmitApplication }) => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [studentId, setStudentId] = useState("");
	const [major, setMajor] = useState("");
	const [yearOfStudy, setYearOfStudy] = useState("Freshman");
	const [selectedTracks, setSelectedTracks] = useState(["Software & AI"]);
	const [experienceLevel, setExperienceLevel] = useState("Beginner");
	const [motivation, setMotivation] = useState("");
	const [portfolioUrl, setPortfolioUrl] = useState("");
	const [errors, setErrors] = useState({});
	const [submittedApp, setSubmittedApp] = useState(null);
	const t = translations[language];
	const availableTracks = [
		"Software & AI",
		"Product & UI/UX",
		"Hardware & Robotics",
		"Community & Ops"
	];
	const handleTrackToggle = (track) => {
		if (selectedTracks.includes(track)) {
			if (selectedTracks.length > 1) {
				setSelectedTracks(selectedTracks.filter((t) => t !== track));
			}
		} else {
			setSelectedTracks([...selectedTracks, track]);
		}
	};
	const validate = () => {
		const errs = {};
		if (!fullName.trim()) {
			errs.fullName = language === "vi" ? "Vui lòng nhập họ và tên." : "Full name is required.";
		}
		if (!email.trim()) {
			errs.email = language === "vi" ? "Vui lòng nhập email trường." : "University email is required.";
		} else if (!email.includes("@") || !email.includes(".")) {
			errs.email = language === "vi" ? "Email không hợp lệ." : "Please provide a valid university email address.";
		}
		if (!studentId.trim()) {
			errs.studentId = language === "vi" ? "Vui lòng nhập mã số sinh viên (MSSV)." : "Student ID number is required.";
		}
		if (!major.trim()) {
			errs.major = language === "vi" ? "Vui lòng nhập ngành học." : "Academic major or program is required.";
		}
		if (!motivation.trim() || motivation.trim().length < 15) {
			errs.motivation = language === "vi" ? "Vui lòng chia sẻ ít nhất 15 ký tự về lý do ứng tuyển." : "Please tell us in at least 15 characters why you want to join.";
		}
		if (selectedTracks.length === 0) {
			errs.tracks = language === "vi" ? "Vui lòng chọn ít nhất 1 hướng chuyên môn." : "Please select at least one track.";
		}
		setErrors(errs);
		return Object.keys(errs).length === 0;
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validate()) return;
		const newApp = onSubmitApplication({
			fullName: fullName.trim(),
			email: email.trim().toLowerCase(),
			studentId: studentId.trim(),
			major: major.trim(),
			yearOfStudy,
			tracks: selectedTracks,
			experienceLevel,
			motivation: motivation.trim(),
			portfolioUrl: portfolioUrl.trim() || undefined
		});
		setSubmittedApp(newApp);
		// Reset fields
		setFullName("");
		setEmail("");
		setStudentId("");
		setMajor("");
		setMotivation("");
		setPortfolioUrl("");
		setErrors({});
	};
	return /* @__PURE__ */ _jsxDEV("section", {
		id: "join",
		className: "py-16 md:py-20 border-b border-neutral-200",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "max-w-3xl mb-10",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 font-mono",
						children: t.join.sectionNum
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 107,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("h2", {
						className: "text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl",
						children: t.join.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 110,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("p", {
						className: "mt-2 text-neutral-600 text-sm sm:text-base leading-relaxed",
						children: t.join.subtitle
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 113,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 106,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-10",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "lg:col-span-8 bg-white border border-neutral-200 rounded-lg p-6 sm:p-8",
					children: submittedApp ? /* @__PURE__ */ _jsxDEV("div", {
						className: "py-8 text-center space-y-4",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto",
								children: /* @__PURE__ */ _jsxDEV(CheckCircle2, { className: "w-6 h-6" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 124,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 123,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("h3", {
								className: "text-xl font-bold text-neutral-900",
								children: [
									t.join.form.successTitle,
									", ",
									submittedApp.fullName,
									"!"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 126,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-sm text-neutral-600 max-w-md mx-auto leading-relaxed",
								children: [
									t.join.form.successDesc,
									" ",
									/* @__PURE__ */ _jsxDEV("span", {
										className: "font-mono font-semibold text-neutral-900",
										children: submittedApp.id
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 131,
										columnNumber: 19
									}, this),
									". ",
									language === "vi" ? "Ban Chủ nhiệm NES sẽ gửi email hẹn lịch gặp mặt tới" : "A track lead will follow up with you at",
									" ",
									/* @__PURE__ */ _jsxDEV("span", {
										className: "font-mono text-neutral-800",
										children: submittedApp.email
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 135,
										columnNumber: 19
									}, this),
									"."
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 129,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "pt-4",
								children: /* @__PURE__ */ _jsxDEV("button", {
									onClick: () => setSubmittedApp(null),
									className: "px-4 py-2 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors",
									children: t.join.form.submitAnother
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 138,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 137,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 122,
						columnNumber: 15
					}, this) : /* @__PURE__ */ _jsxDEV("form", {
						onSubmit: handleSubmit,
						className: "space-y-6",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ _jsxDEV("div", { children: [
									/* @__PURE__ */ _jsxDEV("label", {
										className: "block text-xs font-semibold text-neutral-700 mb-1.5",
										children: [
											t.join.form.fullName,
											" ",
											/* @__PURE__ */ _jsxDEV("span", {
												className: "text-red-500",
												children: "*"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 152,
												columnNumber: 46
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 151,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ _jsxDEV("input", {
										type: "text",
										value: fullName,
										onChange: (e) => setFullName(e.target.value),
										placeholder: "e.g. Nguyễn Văn An",
										className: "w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 154,
										columnNumber: 21
									}, this),
									errors.fullName && /* @__PURE__ */ _jsxDEV("p", {
										className: "text-xs text-red-600 mt-1",
										children: errors.fullName
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 162,
										columnNumber: 23
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 150,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [
									/* @__PURE__ */ _jsxDEV("label", {
										className: "block text-xs font-semibold text-neutral-700 mb-1.5",
										children: [
											t.join.form.email,
											" ",
											/* @__PURE__ */ _jsxDEV("span", {
												className: "text-red-500",
												children: "*"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 168,
												columnNumber: 43
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 167,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ _jsxDEV("input", {
										type: "email",
										value: email,
										onChange: (e) => setEmail(e.target.value),
										placeholder: "23120xxx@student.hcmus.edu.vn",
										className: "w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 170,
										columnNumber: 21
									}, this),
									errors.email && /* @__PURE__ */ _jsxDEV("p", {
										className: "text-xs text-red-600 mt-1",
										children: errors.email
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 178,
										columnNumber: 23
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 166,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 149,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ _jsxDEV("div", { children: [
									/* @__PURE__ */ _jsxDEV("label", {
										className: "block text-xs font-semibold text-neutral-700 mb-1.5",
										children: [
											t.join.form.studentId,
											" ",
											/* @__PURE__ */ _jsxDEV("span", {
												className: "text-red-500",
												children: "*"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 187,
												columnNumber: 47
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 186,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ _jsxDEV("input", {
										type: "text",
										value: studentId,
										onChange: (e) => setStudentId(e.target.value),
										placeholder: "23120888",
										className: "w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 189,
										columnNumber: 21
									}, this),
									errors.studentId && /* @__PURE__ */ _jsxDEV("p", {
										className: "text-xs text-red-600 mt-1",
										children: errors.studentId
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 197,
										columnNumber: 23
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 185,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [
									/* @__PURE__ */ _jsxDEV("label", {
										className: "block text-xs font-semibold text-neutral-700 mb-1.5",
										children: [
											t.join.form.major,
											" ",
											/* @__PURE__ */ _jsxDEV("span", {
												className: "text-red-500",
												children: "*"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 203,
												columnNumber: 43
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 202,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ _jsxDEV("input", {
										type: "text",
										value: major,
										onChange: (e) => setMajor(e.target.value),
										placeholder: "Khoa học Máy tính / Kỹ thuật Phần mềm / ĐTVT...",
										className: "w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 205,
										columnNumber: 21
									}, this),
									errors.major && /* @__PURE__ */ _jsxDEV("p", {
										className: "text-xs text-red-600 mt-1",
										children: errors.major
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 213,
										columnNumber: 23
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 201,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 184,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
									className: "block text-xs font-semibold text-neutral-700 mb-1.5",
									children: t.join.form.year
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 221,
									columnNumber: 21
								}, this), /* @__PURE__ */ _jsxDEV("select", {
									value: yearOfStudy,
									onChange: (e) => setYearOfStudy(e.target.value),
									className: "w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900",
									children: [
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Freshman",
											children: t.join.form.yearOptions.Freshman
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 229,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Sophomore",
											children: t.join.form.yearOptions.Sophomore
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 230,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Junior",
											children: t.join.form.yearOptions.Junior
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 231,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Senior",
											children: t.join.form.yearOptions.Senior
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 232,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Graduate",
											children: t.join.form.yearOptions.Graduate
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 233,
											columnNumber: 23
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 224,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 220,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
									className: "block text-xs font-semibold text-neutral-700 mb-1.5",
									children: t.join.form.level
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 238,
									columnNumber: 21
								}, this), /* @__PURE__ */ _jsxDEV("select", {
									value: experienceLevel,
									onChange: (e) => setExperienceLevel(e.target.value),
									className: "w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900",
									children: [
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Beginner",
											children: t.join.form.levelOptions.Beginner
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 250,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Intermediate",
											children: t.join.form.levelOptions.Intermediate
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 251,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ _jsxDEV("option", {
											value: "Advanced",
											children: t.join.form.levelOptions.Advanced
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 252,
											columnNumber: 23
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 241,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 237,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 219,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("div", { children: [
								/* @__PURE__ */ _jsxDEV("label", {
									className: "block text-xs font-semibold text-neutral-700 mb-1.5",
									children: [
										t.join.form.tracksLabel,
										" ",
										/* @__PURE__ */ _jsxDEV("span", {
											className: "text-red-500",
											children: "*"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 260,
											columnNumber: 47
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 259,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2",
									children: availableTracks.map((track) => {
										const isSelected = selectedTracks.includes(track);
										return /* @__PURE__ */ _jsxDEV("button", {
											type: "button",
											onClick: () => handleTrackToggle(track),
											className: `p-3 text-left text-xs font-medium rounded-md border transition-colors flex items-center justify-between ${isSelected ? "bg-neutral-900 text-white border-neutral-900" : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300"}`,
											children: [/* @__PURE__ */ _jsxDEV("span", { children: track }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 276,
												columnNumber: 27
											}, this), isSelected && /* @__PURE__ */ _jsxDEV("span", {
												className: "text-[10px] font-mono",
												children: "✓"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 277,
												columnNumber: 42
											}, this)]
										}, track, true, {
											fileName: _jsxFileName,
											lineNumber: 266,
											columnNumber: 25
										}, this);
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 262,
									columnNumber: 19
								}, this),
								errors.tracks && /* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-red-600 mt-1",
									children: errors.tracks
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 283,
									columnNumber: 21
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 258,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("div", { children: [
								/* @__PURE__ */ _jsxDEV("label", {
									className: "block text-xs font-semibold text-neutral-700 mb-1.5",
									children: [
										t.join.form.motivation,
										" ",
										/* @__PURE__ */ _jsxDEV("span", {
											className: "text-red-500",
											children: "*"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 290,
											columnNumber: 46
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 289,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("textarea", {
									rows: 3,
									value: motivation,
									onChange: (e) => setMotivation(e.target.value),
									placeholder: t.join.form.motivationPlaceholder,
									className: "w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 292,
									columnNumber: 19
								}, this),
								errors.motivation && /* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-red-600 mt-1",
									children: errors.motivation
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 300,
									columnNumber: 21
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 288,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
								className: "block text-xs font-semibold text-neutral-700 mb-1.5",
								children: t.join.form.portfolio
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 306,
								columnNumber: 19
							}, this), /* @__PURE__ */ _jsxDEV("input", {
								type: "url",
								value: portfolioUrl,
								onChange: (e) => setPortfolioUrl(e.target.value),
								placeholder: "https://github.com/your-username",
								className: "w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 309,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 305,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "pt-2",
								children: /* @__PURE__ */ _jsxDEV("button", {
									type: "submit",
									className: "w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md shadow-xs transition-colors flex items-center justify-center gap-2",
									children: [/* @__PURE__ */ _jsxDEV(Send, { className: "w-3.5 h-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 324,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: t.join.form.submitBtn }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 325,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 320,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 319,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 147,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 120,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "lg:col-span-4 space-y-6",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "bg-white border border-neutral-200 rounded-lg p-6",
						children: [/* @__PURE__ */ _jsxDEV("h3", {
							className: "text-base font-bold text-neutral-900 mb-3",
							children: t.join.timelineTitle
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 335,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-4 text-xs text-neutral-600",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "font-mono text-neutral-400 tabular-nums",
										children: "01"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 340,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("strong", {
										className: "text-neutral-900 block",
										children: t.join.step1Title
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 342,
										columnNumber: 21
									}, this), t.join.step1Desc] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 341,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 339,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "font-mono text-neutral-400 tabular-nums",
										children: "02"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 347,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("strong", {
										className: "text-neutral-900 block",
										children: t.join.step2Title
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 349,
										columnNumber: 21
									}, this), t.join.step2Desc] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 348,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 346,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "font-mono text-neutral-400 tabular-nums",
										children: "03"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 354,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("strong", {
										className: "text-neutral-900 block",
										children: t.join.step3Title
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 356,
										columnNumber: 21
									}, this), t.join.step3Desc] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 355,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 353,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 338,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 334,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "bg-neutral-100 border border-neutral-200 rounded-lg p-6 text-xs text-neutral-600 space-y-2",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "font-semibold text-neutral-900",
							children: language === "vi" ? "Quản lý hồ sơ ứng tuyển" : "Admin Review Workflow"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 364,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("p", { children: language === "vi" ? "Tất cả đơn đăng ký được lưu trữ an toàn trong cơ sở dữ liệu và hiển thị ngay tại mục Quản trị CLB để Ban Chủ nhiệm duyệt và nhận thành viên chính thức." : "Applications submitted here are stored locally in the member registry and are immediately reviewable in the Management Dashboard tab." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 367,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 363,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 333,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 118,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 105,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 104,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QkFBMEIsRUFBRSxLQUFLO1NBQW1COzs7O21CQUNyRSxFQUFFLEtBQUssU0FDTDs7OztpQkFDRjs7Ozs7O1FBQ0wsd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQWYsQ0FDRSx3QkFBQyxPQUFEO1VBQUssV0FBVTtvQkFBMEM7U0FBTzs7OzttQkFDaEUsd0JBQUMsT0FBRCxhQUNFLHdCQUFDLFVBQUQ7VUFBUSxXQUFVO29CQUEwQixFQUFFLEtBQUs7U0FBbUI7Ozs7bUJBQ3JFLEVBQUUsS0FBSyxTQUNMOzs7O2lCQUNGOzs7Ozs7UUFDTCx3QkFBQyxPQUFEO1NBQUssV0FBVTttQkFBZixDQUNFLHdCQUFDLE9BQUQ7VUFBSyxXQUFVO29CQUEwQztTQUFPOzs7O21CQUNoRSx3QkFBQyxPQUFELGFBQ0Usd0JBQUMsVUFBRDtVQUFRLFdBQVU7b0JBQTBCLEVBQUUsS0FBSztTQUFtQjs7OzttQkFDckUsRUFBRSxLQUFLLFNBQ0w7Ozs7aUJBQ0Y7Ozs7OztPQUNGOzs7OztjQUNGOzs7OztlQUVMLHdCQUFDLE9BQUQ7TUFBSyxXQUFVO2dCQUFmLENBQ0Usd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQ1osYUFBYSxPQUFPLDRCQUE0QjtNQUM5Qzs7OztnQkFDTCx3QkFBQyxLQUFELFlBQ0csYUFBYSxPQUNWLDRKQUNBLHdJQUNIOzs7O2NBQ0E7Ozs7O2FBQ0Y7Ozs7O1lBQ0Y7Ozs7O1dBQ0Y7Ozs7OztDQUNFOzs7OztBQUViIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkpvaW5Gb3JtU2VjdGlvbi50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VuZCwgQ2hlY2tDaXJjbGUyIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IE1lbWJlcnNoaXBBcHBsaWNhdGlvbiwgVHJhY2ssIFllYXJPZlN0dWR5IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UsIHRyYW5zbGF0aW9ucyB9IGZyb20gJy4uL2RhdGEvdHJhbnNsYXRpb25zJztcblxuaW50ZXJmYWNlIEpvaW5Gb3JtU2VjdGlvblByb3BzIHtcbiAgbGFuZ3VhZ2U6IExhbmd1YWdlO1xuICBvblN1Ym1pdEFwcGxpY2F0aW9uOiAoXG4gICAgYXBwOiBPbWl0PE1lbWJlcnNoaXBBcHBsaWNhdGlvbiwgJ2lkJyB8ICdzdGF0dXMnIHwgJ3N1Ym1pdHRlZEF0Jz5cbiAgKSA9PiBNZW1iZXJzaGlwQXBwbGljYXRpb247XG59XG5cbmV4cG9ydCBjb25zdCBKb2luRm9ybVNlY3Rpb246IFJlYWN0LkZDPEpvaW5Gb3JtU2VjdGlvblByb3BzPiA9ICh7XG4gIGxhbmd1YWdlLFxuICBvblN1Ym1pdEFwcGxpY2F0aW9uLFxufSkgPT4ge1xuICBjb25zdCBbZnVsbE5hbWUsIHNldEZ1bGxOYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzdHVkZW50SWQsIHNldFN0dWRlbnRJZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFttYWpvciwgc2V0TWFqb3JdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbeWVhck9mU3R1ZHksIHNldFllYXJPZlN0dWR5XSA9IHVzZVN0YXRlPFllYXJPZlN0dWR5PignRnJlc2htYW4nKTtcbiAgY29uc3QgW3NlbGVjdGVkVHJhY2tzLCBzZXRTZWxlY3RlZFRyYWNrc10gPSB1c2VTdGF0ZTxUcmFja1tdPihbJ1NvZnR3YXJlICYgQUknXSk7XG4gIGNvbnN0IFtleHBlcmllbmNlTGV2ZWwsIHNldEV4cGVyaWVuY2VMZXZlbF0gPSB1c2VTdGF0ZTwnQmVnaW5uZXInIHwgJ0ludGVybWVkaWF0ZScgfCAnQWR2YW5jZWQnPignQmVnaW5uZXInKTtcbiAgY29uc3QgW21vdGl2YXRpb24sIHNldE1vdGl2YXRpb25dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcG9ydGZvbGlvVXJsLCBzZXRQb3J0Zm9saW9VcmxdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZTx7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9Pih7fSk7XG4gIGNvbnN0IFtzdWJtaXR0ZWRBcHAsIHNldFN1Ym1pdHRlZEFwcF0gPSB1c2VTdGF0ZTxNZW1iZXJzaGlwQXBwbGljYXRpb24gfCBudWxsPihudWxsKTtcblxuICBjb25zdCB0ID0gdHJhbnNsYXRpb25zW2xhbmd1YWdlXTtcblxuICBjb25zdCBhdmFpbGFibGVUcmFja3M6IFRyYWNrW10gPSBbXG4gICAgJ1NvZnR3YXJlICYgQUknLFxuICAgICdQcm9kdWN0ICYgVUkvVVgnLFxuICAgICdIYXJkd2FyZSAmIFJvYm90aWNzJyxcbiAgICAnQ29tbXVuaXR5ICYgT3BzJyxcbiAgXTtcblxuICBjb25zdCBoYW5kbGVUcmFja1RvZ2dsZSA9ICh0cmFjazogVHJhY2spID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRUcmFja3MuaW5jbHVkZXModHJhY2spKSB7XG4gICAgICBpZiAoc2VsZWN0ZWRUcmFja3MubGVuZ3RoID4gMSkge1xuICAgICAgICBzZXRTZWxlY3RlZFRyYWNrcyhzZWxlY3RlZFRyYWNrcy5maWx0ZXIoKHQpID0+IHQgIT09IHRyYWNrKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNlbGVjdGVkVHJhY2tzKFsuLi5zZWxlY3RlZFRyYWNrcywgdHJhY2tdKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZXJyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICAgIGlmICghZnVsbE5hbWUudHJpbSgpKSB7XG4gICAgICBlcnJzLmZ1bGxOYW1lID0gbGFuZ3VhZ2UgPT09ICd2aScgPyAnVnVpIGzDsm5nIG5o4bqtcCBo4buNIHbDoCB0w6puLicgOiAnRnVsbCBuYW1lIGlzIHJlcXVpcmVkLic7XG4gICAgfVxuICAgIGlmICghZW1haWwudHJpbSgpKSB7XG4gICAgICBlcnJzLmVtYWlsID0gbGFuZ3VhZ2UgPT09ICd2aScgPyAnVnVpIGzDsm5nIG5o4bqtcCBlbWFpbCB0csaw4budbmcuJyA6ICdVbml2ZXJzaXR5IGVtYWlsIGlzIHJlcXVpcmVkLic7XG4gICAgfSBlbHNlIGlmICghZW1haWwuaW5jbHVkZXMoJ0AnKSB8fCAhZW1haWwuaW5jbHVkZXMoJy4nKSkge1xuICAgICAgZXJycy5lbWFpbCA9IGxhbmd1YWdlID09PSAndmknID8gJ0VtYWlsIGtow7RuZyBo4bujcCBs4buHLicgOiAnUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCB1bml2ZXJzaXR5IGVtYWlsIGFkZHJlc3MuJztcbiAgICB9XG4gICAgaWYgKCFzdHVkZW50SWQudHJpbSgpKSB7XG4gICAgICBlcnJzLnN0dWRlbnRJZCA9IGxhbmd1YWdlID09PSAndmknID8gJ1Z1aSBsw7JuZyBuaOG6rXAgbcOjIHPhu5Egc2luaCB2acOqbiAoTVNTVikuJyA6ICdTdHVkZW50IElEIG51bWJlciBpcyByZXF1aXJlZC4nO1xuICAgIH1cbiAgICBpZiAoIW1ham9yLnRyaW0oKSkge1xuICAgICAgZXJycy5tYWpvciA9IGxhbmd1YWdlID09PSAndmknID8gJ1Z1aSBsw7JuZyBuaOG6rXAgbmfDoG5oIGjhu41jLicgOiAnQWNhZGVtaWMgbWFqb3Igb3IgcHJvZ3JhbSBpcyByZXF1aXJlZC4nO1xuICAgIH1cbiAgICBpZiAoIW1vdGl2YXRpb24udHJpbSgpIHx8IG1vdGl2YXRpb24udHJpbSgpLmxlbmd0aCA8IDE1KSB7XG4gICAgICBlcnJzLm1vdGl2YXRpb24gPSBsYW5ndWFnZSA9PT0gJ3ZpJyA/ICdWdWkgbMOybmcgY2hpYSBz4bq7IMOtdCBuaOG6pXQgMTUga8O9IHThu7EgduG7gSBsw70gZG8g4bupbmcgdHV54buDbi4nIDogJ1BsZWFzZSB0ZWxsIHVzIGluIGF0IGxlYXN0IDE1IGNoYXJhY3RlcnMgd2h5IHlvdSB3YW50IHRvIGpvaW4uJztcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkVHJhY2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZXJycy50cmFja3MgPSBsYW5ndWFnZSA9PT0gJ3ZpJyA/ICdWdWkgbMOybmcgY2jhu41uIMOtdCBuaOG6pXQgMSBoxrDhu5tuZyBjaHV5w6puIG3DtG4uJyA6ICdQbGVhc2Ugc2VsZWN0IGF0IGxlYXN0IG9uZSB0cmFjay4nO1xuICAgIH1cbiAgICBzZXRFcnJvcnMoZXJycyk7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGVycnMpLmxlbmd0aCA9PT0gMDtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdmFsaWRhdGUoKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgbmV3QXBwID0gb25TdWJtaXRBcHBsaWNhdGlvbih7XG4gICAgICBmdWxsTmFtZTogZnVsbE5hbWUudHJpbSgpLFxuICAgICAgZW1haWw6IGVtYWlsLnRyaW0oKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgc3R1ZGVudElkOiBzdHVkZW50SWQudHJpbSgpLFxuICAgICAgbWFqb3I6IG1ham9yLnRyaW0oKSxcbiAgICAgIHllYXJPZlN0dWR5LFxuICAgICAgdHJhY2tzOiBzZWxlY3RlZFRyYWNrcyxcbiAgICAgIGV4cGVyaWVuY2VMZXZlbCxcbiAgICAgIG1vdGl2YXRpb246IG1vdGl2YXRpb24udHJpbSgpLFxuICAgICAgcG9ydGZvbGlvVXJsOiBwb3J0Zm9saW9VcmwudHJpbSgpIHx8IHVuZGVmaW5lZCxcbiAgICB9KTtcblxuICAgIHNldFN1Ym1pdHRlZEFwcChuZXdBcHApO1xuXG4gICAgLy8gUmVzZXQgZmllbGRzXG4gICAgc2V0RnVsbE5hbWUoJycpO1xuICAgIHNldEVtYWlsKCcnKTtcbiAgICBzZXRTdHVkZW50SWQoJycpO1xuICAgIHNldE1ham9yKCcnKTtcbiAgICBzZXRNb3RpdmF0aW9uKCcnKTtcbiAgICBzZXRQb3J0Zm9saW9VcmwoJycpO1xuICAgIHNldEVycm9ycyh7fSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cImpvaW5cIiBjbGFzc05hbWU9XCJweS0xNiBtZDpweS0yMCBib3JkZXItYiBib3JkZXItbmV1dHJhbC0yMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbWItMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBtYi0yIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAge3Quam9pbi5zZWN0aW9uTnVtfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1uZXV0cmFsLTk1MCBzbTp0ZXh0LTR4bFwiPlxuICAgICAgICAgICAge3Quam9pbi50aXRsZX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1uZXV0cmFsLTYwMCB0ZXh0LXNtIHNtOnRleHQtYmFzZSBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgIHt0LmpvaW4uc3VidGl0bGV9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTEyIGdhcC0xMFwiPlxuICAgICAgICAgIHsvKiBGb3JtIENvbHVtbiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTggYmctd2hpdGUgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCByb3VuZGVkLWxnIHAtNiBzbTpwLThcIj5cbiAgICAgICAgICAgIHtzdWJtaXR0ZWRBcHAgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktOCB0ZXh0LWNlbnRlciBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiBiZy1lbWVyYWxkLTEwMCB0ZXh0LWVtZXJhbGQtNzAwIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGUyIGNsYXNzTmFtZT1cInctNiBoLTZcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LW5ldXRyYWwtOTAwXCI+XG4gICAgICAgICAgICAgICAgICB7dC5qb2luLmZvcm0uc3VjY2Vzc1RpdGxlfSwge3N1Ym1pdHRlZEFwcC5mdWxsTmFtZX0hXG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbmV1dHJhbC02MDAgbWF4LXctbWQgbXgtYXV0byBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgIHt0LmpvaW4uZm9ybS5zdWNjZXNzRGVzY317JyAnfVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtc2VtaWJvbGQgdGV4dC1uZXV0cmFsLTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7c3VibWl0dGVkQXBwLmlkfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgLiB7bGFuZ3VhZ2UgPT09ICd2aScgPyAnQmFuIENo4bunIG5oaeG7h20gTkVTIHPhur0gZ+G7rWkgZW1haWwgaOG6uW4gbOG7i2NoIGfhurdwIG3hurd0IHThu5tpJyA6ICdBIHRyYWNrIGxlYWQgd2lsbCBmb2xsb3cgdXAgd2l0aCB5b3UgYXQnfXsnICd9XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC1uZXV0cmFsLTgwMFwiPntzdWJtaXR0ZWRBcHAuZW1haWx9PC9zcGFuPi5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFN1Ym1pdHRlZEFwcChudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1uZXV0cmFsLTcwMCBiZy1uZXV0cmFsLTEwMCBob3ZlcjpiZy1uZXV0cmFsLTIwMCByb3VuZGVkLW1kIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Quam9pbi5mb3JtLnN1Ym1pdEFub3RoZXJ9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICAgICAgICB7LyogTmFtZSAmIEVtYWlsICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtNzAwIG1iLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0LmpvaW4uZm9ybS5mdWxsTmFtZX0gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmdWxsTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZ1bGxOYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gTmd1eeG7hW4gVsSDbiBBblwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LXNtIGJnLW5ldXRyYWwtNTAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCByb3VuZGVkLW1kIGZvY3VzOmJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy1uZXV0cmFsLTkwMFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZnVsbE5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNjAwIG10LTFcIj57ZXJyb3JzLmZ1bGxOYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC03MDAgbWItMS41XCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Quam9pbi5mb3JtLmVtYWlsfSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjIzMTIweHh4QHN0dWRlbnQuaGNtdXMuZWR1LnZuXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIHRleHQtc20gYmctbmV1dHJhbC01MCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbWQgZm9jdXM6Ymctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLW5ldXRyYWwtOTAwXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC02MDAgbXQtMVwiPntlcnJvcnMuZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogU3R1ZGVudCBJRCAmIE1ham9yICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtNzAwIG1iLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0LmpvaW4uZm9ybS5zdHVkZW50SWR9IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3R1ZGVudElkfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3R1ZGVudElkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjIzMTIwODg4XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIHRleHQtc20gYmctbmV1dHJhbC01MCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbWQgZm9jdXM6Ymctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLW5ldXRyYWwtOTAwXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5zdHVkZW50SWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNjAwIG10LTFcIj57ZXJyb3JzLnN0dWRlbnRJZH08L3A+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtNzAwIG1iLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0LmpvaW4uZm9ybS5tYWpvcn0gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttYWpvcn1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1ham9yKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIktob2EgaOG7jWMgTcOheSB0w61uaCAvIEvhu7kgdGh14bqtdCBQaOG6p24gbeG7gW0gLyDEkFRWVC4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LXNtIGJnLW5ldXRyYWwtNTAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCByb3VuZGVkLW1kIGZvY3VzOmJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy1uZXV0cmFsLTkwMFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMubWFqb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNjAwIG10LTFcIj57ZXJyb3JzLm1ham9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIFllYXIgb2YgU3R1ZHkgJiBFeHBlcmllbmNlIExldmVsICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtNzAwIG1iLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0LmpvaW4uZm9ybS55ZWFyfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3llYXJPZlN0dWR5fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0WWVhck9mU3R1ZHkoZS50YXJnZXQudmFsdWUgYXMgWWVhck9mU3R1ZHkpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgdGV4dC1zbSBiZy1uZXV0cmFsLTUwIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1tZCBmb2N1czpiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctbmV1dHJhbC05MDBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZyZXNobWFuXCI+e3Quam9pbi5mb3JtLnllYXJPcHRpb25zLkZyZXNobWFufTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTb3Bob21vcmVcIj57dC5qb2luLmZvcm0ueWVhck9wdGlvbnMuU29waG9tb3JlfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJKdW5pb3JcIj57dC5qb2luLmZvcm0ueWVhck9wdGlvbnMuSnVuaW9yfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTZW5pb3JcIj57dC5qb2luLmZvcm0ueWVhck9wdGlvbnMuU2VuaW9yfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHcmFkdWF0ZVwiPnt0LmpvaW4uZm9ybS55ZWFyT3B0aW9ucy5HcmFkdWF0ZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtNzAwIG1iLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0LmpvaW4uZm9ybS5sZXZlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtleHBlcmllbmNlTGV2ZWx9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXhwZXJpZW5jZUxldmVsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSBhcyAnQmVnaW5uZXInIHwgJ0ludGVybWVkaWF0ZScgfCAnQWR2YW5jZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgdGV4dC1zbSBiZy1uZXV0cmFsLTUwIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1tZCBmb2N1czpiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctbmV1dHJhbC05MDBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJlZ2lubmVyXCI+e3Quam9pbi5mb3JtLmxldmVsT3B0aW9ucy5CZWdpbm5lcn08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSW50ZXJtZWRpYXRlXCI+e3Quam9pbi5mb3JtLmxldmVsT3B0aW9ucy5JbnRlcm1lZGlhdGV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFkdmFuY2VkXCI+e3Quam9pbi5mb3JtLmxldmVsT3B0aW9ucy5BZHZhbmNlZH08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBUcmFja3MgU2VsZWN0aW9uICovfVxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC03MDAgbWItMS41XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0LmpvaW4uZm9ybS50cmFja3NMYWJlbH0gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTIgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICB7YXZhaWxhYmxlVHJhY2tzLm1hcCgodHJhY2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRUcmFja3MuaW5jbHVkZXModHJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RyYWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUcmFja1RvZ2dsZSh0cmFjayl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSByb3VuZGVkLW1kIGJvcmRlciB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1uZXV0cmFsLTkwMCB0ZXh0LXdoaXRlIGJvcmRlci1uZXV0cmFsLTkwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLW5ldXRyYWwtNTAgdGV4dC1uZXV0cmFsLTcwMCBib3JkZXItbmV1dHJhbC0yMDAgaG92ZXI6Ym9yZGVyLW5ldXRyYWwtMzAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RyYWNrfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2lzU2VsZWN0ZWQgJiYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1tb25vXCI+4pyTPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzLnRyYWNrcyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNjAwIG10LTFcIj57ZXJyb3JzLnRyYWNrc308L3A+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIE1vdGl2YXRpb24gU3RhdGVtZW50ICovfVxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC03MDAgbWItMS41XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0LmpvaW4uZm9ybS5tb3RpdmF0aW9ufSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bW90aXZhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNb3RpdmF0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Quam9pbi5mb3JtLm1vdGl2YXRpb25QbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiB0ZXh0LXNtIGJnLW5ldXRyYWwtNTAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCByb3VuZGVkLW1kIGZvY3VzOmJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy1uZXV0cmFsLTkwMFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge2Vycm9ycy5tb3RpdmF0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC02MDAgbXQtMVwiPntlcnJvcnMubW90aXZhdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIFBvcnRmb2xpbyAvIEdpdEh1YiBMaW5rICovfVxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC03MDAgbWItMS41XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0LmpvaW4uZm9ybS5wb3J0Zm9saW99XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cG9ydGZvbGlvVXJsfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBvcnRmb2xpb1VybChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly9naXRodWIuY29tL3lvdXItdXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIHRleHQtc20gYmctbmV1dHJhbC01MCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbWQgZm9jdXM6Ymctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLW5ldXRyYWwtOTAwXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogU3VibWl0IGJ1dHRvbiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTJcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG8gcHgtNiBweS0yLjUgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgYmctbmV1dHJhbC05MDAgaG92ZXI6YmctbmV1dHJhbC04MDAgcm91bmRlZC1tZCBzaGFkb3cteHMgdHJhbnNpdGlvbi1jb2xvcnMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8U2VuZCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0LmpvaW4uZm9ybS5zdWJtaXRCdG59PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUmlnaHQgSW5mbyBDb2x1bW4gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi00IHNwYWNlLXktNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbGcgcC02XCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ib2xkIHRleHQtbmV1dHJhbC05MDAgbWItM1wiPlxuICAgICAgICAgICAgICAgIHt0LmpvaW4udGltZWxpbmVUaXRsZX1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgdGV4dC14cyB0ZXh0LW5ldXRyYWwtNjAwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LW5ldXRyYWwtNDAwIHRhYnVsYXItbnVtc1wiPjAxPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC05MDAgYmxvY2tcIj57dC5qb2luLnN0ZXAxVGl0bGV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIHt0LmpvaW4uc3RlcDFEZXNjfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LW5ldXRyYWwtNDAwIHRhYnVsYXItbnVtc1wiPjAyPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC05MDAgYmxvY2tcIj57dC5qb2luLnN0ZXAyVGl0bGV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIHt0LmpvaW4uc3RlcDJEZXNjfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LW5ldXRyYWwtNDAwIHRhYnVsYXItbnVtc1wiPjAzPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC05MDAgYmxvY2tcIj57dC5qb2luLnN0ZXAzVGl0bGV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIHt0LmpvaW4uc3RlcDNEZXNjfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbmV1dHJhbC0xMDAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCByb3VuZGVkLWxnIHAtNiB0ZXh0LXhzIHRleHQtbmV1dHJhbC02MDAgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtOTAwXCI+XG4gICAgICAgICAgICAgICAge2xhbmd1YWdlID09PSAndmknID8gJ1F14bqjbiBsw70gaOG7kyBzxqEg4bupbmcgdHV54buDbicgOiAnQWRtaW4gUmV2aWV3IFdvcmtmbG93J31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ3ZpJ1xuICAgICAgICAgICAgICAgICAgPyAnVOG6pXQgY+G6oyDEkcahbiDEkcSDbmcga8O9IMSRxrDhu6NjIGzGsHUgdHLhu68gYW4gdG/DoG4gdHJvbmcgY8ahIHPhu58gZOG7ryBsaeG7h3UgdsOgIGhp4buDbiB0aOG7iyBuZ2F5IHThuqFpIG3hu6VjIFF14bqjbiB0cuG7iyBDTEIgxJHhu4MgQmFuIENo4bunIG5oaeG7h20gZHV54buHdCB2w6Agbmjhuq1uIHRow6BuaCB2acOqbiBjaMOtbmggdGjhu6ljLidcbiAgICAgICAgICAgICAgICAgIDogJ0FwcGxpY2F0aW9ucyBzdWJtaXR0ZWQgaGVyZSBhcmUgc3RvcmVkIGxvY2FsbHkgaW4gdGhlIG1lbWJlciByZWdpc3RyeSBhbmQgYXJlIGltbWVkaWF0ZWx5IHJldmlld2FibGUgaW4gdGhlIE1hbmFnZW1lbnQgRGFzaGJvYXJkIHRhYi4nfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIl19