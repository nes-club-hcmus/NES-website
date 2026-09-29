const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=83e0c204";
import { Heart, ArrowRight, X } from "/node_modules/.vite/deps/lucide-react.js?v=83e0c204";
import { translations } from "/src/data/translations.ts";
var _jsxFileName = "/app/applet/src/components/BlogSection.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=83e0c204";
export const BlogSection = ({ posts, language, onLikePost, onManagePosts }) => {
	const [selectedPost, setSelectedPost] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [likedPosts, setLikedPosts] = useState({});
	const t = translations[language];
	const categories = [
		"All",
		"Tutorial",
		"Project Showcase",
		"Career & Advice"
	];
	const publishedPosts = posts.filter((p) => p.isPublished);
	const filteredPosts = publishedPosts.filter((p) => {
		return selectedCategory === "All" ? true : p.category === selectedCategory;
	});
	const handleLike = (id, e) => {
		e.stopPropagation();
		if (likedPosts[id]) return;
		onLikePost(id);
		setLikedPosts((prev) => ({
			...prev,
			[id]: true
		}));
	};
	return /* @__PURE__ */ _jsxDEV("section", {
		id: "blog",
		className: "py-16 md:py-20 border-b border-neutral-200",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8",
					children: [/* @__PURE__ */ _jsxDEV("div", { children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 font-mono",
							children: t.blog.sectionNum
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl",
							children: t.blog.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "mt-2 text-neutral-600 text-sm sm:text-base",
							children: t.blog.subtitle
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 13
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-3",
						children: /* @__PURE__ */ _jsxDEV("button", {
							onClick: onManagePosts,
							className: "px-3.5 py-2 text-xs font-medium text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-md transition-colors whitespace-nowrap",
							children: t.blog.crudBtn
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 57,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex flex-wrap items-center gap-2 mb-8",
					children: categories.map((cat) => /* @__PURE__ */ _jsxDEV("button", {
						onClick: () => setSelectedCategory(cat),
						className: `px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${selectedCategory === cat ? "bg-neutral-900 text-white" : "bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300"}`,
						children: cat === "All" ? t.blog.all : cat
					}, cat, false, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 67,
					columnNumber: 9
				}, this),
				filteredPosts.length === 0 ? /* @__PURE__ */ _jsxDEV("div", {
					className: "text-center py-12 bg-white border border-neutral-200 rounded-lg",
					children: /* @__PURE__ */ _jsxDEV("p", {
						className: "text-sm text-neutral-500",
						children: language === "vi" ? "Chưa có bài viết trong danh mục này." : "No blog posts found in this category."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 85,
					columnNumber: 11
				}, this) : /* @__PURE__ */ _jsxDEV("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-6",
					children: filteredPosts.map((post) => /* @__PURE__ */ _jsxDEV("article", {
						onClick: () => setSelectedPost(post),
						className: "group bg-white border border-neutral-200 rounded-lg p-6 flex flex-col justify-between hover:border-neutral-400 transition-all cursor-pointer shadow-xs",
						children: [/* @__PURE__ */ _jsxDEV("div", { children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2 text-xs text-neutral-500 mb-3 flex-wrap font-mono",
								children: [
									/* @__PURE__ */ _jsxDEV("span", {
										className: "font-semibold text-neutral-800",
										children: post.category
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 101,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										"aria-hidden": "true",
										children: "·"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 102,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										className: "tabular-nums",
										children: post.publishedAt
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 103,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										"aria-hidden": "true",
										children: "·"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 104,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ _jsxDEV("span", { children: [
										post.readTimeMinutes,
										" ",
										t.blog.minRead
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 105,
										columnNumber: 21
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 100,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ _jsxDEV("h3", {
								className: "text-base font-bold text-neutral-950 group-hover:text-neutral-700 transition-colors leading-snug mb-3",
								children: post.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 108,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6",
								children: post.excerpt
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 112,
								columnNumber: 19
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 98,
							columnNumber: 17
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ _jsxDEV("span", {
										className: "font-medium text-neutral-900",
										children: post.authorName
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 119,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										"aria-hidden": "true",
										children: "·"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 120,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										className: "text-[11px] text-neutral-400",
										children: post.authorRole
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 121,
										columnNumber: 21
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 118,
								columnNumber: 19
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ _jsxDEV("button", {
									onClick: (e) => handleLike(post.id, e),
									className: `flex items-center gap-1 transition-colors ${likedPosts[post.id] ? "text-red-600 font-semibold" : "hover:text-red-500"}`,
									title: "Like article",
									children: [/* @__PURE__ */ _jsxDEV(Heart, { className: `w-3.5 h-3.5 ${likedPosts[post.id] ? "fill-red-600" : ""}` }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 132,
										columnNumber: 23
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "font-mono tabular-nums text-xs",
										children: post.likes
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 135,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 125,
									columnNumber: 21
								}, this), /* @__PURE__ */ _jsxDEV(ArrowRight, { className: "w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-neutral-400" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 137,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 124,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 117,
							columnNumber: 17
						}, this)]
					}, post.id, true, {
						fileName: _jsxFileName,
						lineNumber: 93,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 91,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 41,
			columnNumber: 7
		}, this), selectedPost && /* @__PURE__ */ _jsxDEV("div", {
			role: "dialog",
			"aria-modal": "true",
			className: "fixed inset-0 z-50 bg-neutral-950/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto",
			onClick: () => setSelectedPost(null),
			children: /* @__PURE__ */ _jsxDEV("div", {
				className: "bg-white rounded-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-neutral-300 shadow-xl p-6 sm:p-8",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center justify-between pb-4 border-b border-neutral-200 font-mono text-xs text-neutral-500",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ _jsxDEV("span", {
								className: "font-semibold text-neutral-800",
								children: selectedPost.category
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 160,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								"aria-hidden": "true",
								children: "·"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 161,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								className: "tabular-nums",
								children: selectedPost.publishedAt
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 162,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								"aria-hidden": "true",
								children: "·"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 163,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("span", { children: [
								selectedPost.readTimeMinutes,
								" ",
								t.blog.minRead
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 164,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 159,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: () => setSelectedPost(null),
						className: "p-1 text-neutral-400 hover:text-neutral-900 rounded",
						children: /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 170,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 166,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 158,
					columnNumber: 13
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "mt-6",
					children: [
						/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 mb-3",
							children: selectedPost.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 175,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-2 text-sm text-neutral-600 mb-6",
							children: [
								/* @__PURE__ */ _jsxDEV("span", { children: language === "vi" ? "Tác giả:" : "By" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 179,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("strong", {
									className: "text-neutral-900",
									children: selectedPost.authorName
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 180,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("span", { children: [
									"(",
									selectedPost.authorRole,
									")"
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 181,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 178,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "prose prose-neutral max-w-none text-neutral-700 text-sm sm:text-base leading-relaxed space-y-4",
							children: selectedPost.content.split("\n\n").map((paragraph, i) => {
								if (paragraph.startsWith("### ")) {
									return /* @__PURE__ */ _jsxDEV("h4", {
										className: "text-base font-bold text-neutral-900 mt-6 mb-2",
										children: paragraph.replace("### ", "")
									}, i, false, {
										fileName: _jsxFileName,
										lineNumber: 188,
										columnNumber: 23
									}, this);
								}
								if (paragraph.startsWith("```")) {
									return /* @__PURE__ */ _jsxDEV("pre", {
										className: "bg-neutral-900 text-neutral-100 p-4 rounded-md text-xs font-mono overflow-x-auto my-3",
										children: paragraph.replace(/```[a-z]*\n?/g, "")
									}, i, false, {
										fileName: _jsxFileName,
										lineNumber: 195,
										columnNumber: 23
									}, this);
								}
								return /* @__PURE__ */ _jsxDEV("p", { children: paragraph }, i, false, {
									fileName: _jsxFileName,
									lineNumber: 203,
									columnNumber: 26
								}, this);
							})
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 184,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "mt-8 pt-4 border-t border-neutral-200 flex items-center justify-between",
							children: [/* @__PURE__ */ _jsxDEV("button", {
								onClick: (e) => handleLike(selectedPost.id, e),
								className: `flex items-center gap-2 text-sm px-3.5 py-1.5 rounded-md border transition-colors ${likedPosts[selectedPost.id] ? "bg-red-50 border-red-200 text-red-700" : "border-neutral-300 text-neutral-700 hover:bg-neutral-50"}`,
								children: [/* @__PURE__ */ _jsxDEV(Heart, { className: `w-4 h-4 ${likedPosts[selectedPost.id] ? "fill-red-600 text-red-600" : ""}` }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 216,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: [
									selectedPost.likes,
									" ",
									t.blog.likes
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 221,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 208,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("button", {
								onClick: () => setSelectedPost(null),
								className: "px-4 py-1.5 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-md",
								children: t.blog.closeBtn
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 224,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 207,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 174,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 154,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 148,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 40,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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VyxxRkFDVCxXQUFXLGFBQWEsTUFDcEIsMENBQ0E7a0JBTFIsQ0FRRSx3QkFBQyxPQUFELEVBQ0UsV0FBVyxXQUNULFdBQVcsYUFBYSxNQUFNLDhCQUE4QixLQUUvRDs7OztrQkFDRCx3QkFBQyxRQUFEO1NBQU8sYUFBYTtTQUFNO1NBQUUsRUFBRSxLQUFLO1FBQVk7Ozs7Z0JBQ3pDOzs7OztpQkFFUix3QkFBQyxVQUFEO1FBQ0UsZUFBZSxnQkFBZ0IsSUFBSTtRQUNuQyxXQUFVO2tCQUVULEVBQUUsS0FBSztPQUNGOzs7O2VBQ0w7Ozs7OztLQUNGOzs7OztZQUNGOzs7Ozs7RUFDRjs7OztVQUVBOzs7Ozs7QUFFYiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJCbG9nU2VjdGlvbi50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm9va09wZW4sIEhlYXJ0LCBBcnJvd1JpZ2h0LCBYIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IEJsb2dQb3N0LCBCbG9nQ2F0ZWdvcnkgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBMYW5ndWFnZSwgdHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vZGF0YS90cmFuc2xhdGlvbnMnO1xuXG5pbnRlcmZhY2UgQmxvZ1NlY3Rpb25Qcm9wcyB7XG4gIHBvc3RzOiBCbG9nUG9zdFtdO1xuICBsYW5ndWFnZTogTGFuZ3VhZ2U7XG4gIG9uTGlrZVBvc3Q6IChpZDogc3RyaW5nKSA9PiB2b2lkO1xuICBvbk1hbmFnZVBvc3RzOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQmxvZ1NlY3Rpb246IFJlYWN0LkZDPEJsb2dTZWN0aW9uUHJvcHM+ID0gKHtcbiAgcG9zdHMsXG4gIGxhbmd1YWdlLFxuICBvbkxpa2VQb3N0LFxuICBvbk1hbmFnZVBvc3RzLFxufSkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRQb3N0LCBzZXRTZWxlY3RlZFBvc3RdID0gdXNlU3RhdGU8QmxvZ1Bvc3QgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGU8c3RyaW5nPignQWxsJyk7XG4gIGNvbnN0IFtsaWtlZFBvc3RzLCBzZXRMaWtlZFBvc3RzXSA9IHVzZVN0YXRlPHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9Pih7fSk7XG4gIGNvbnN0IHQgPSB0cmFuc2xhdGlvbnNbbGFuZ3VhZ2VdO1xuXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbJ0FsbCcsICdUdXRvcmlhbCcsICdQcm9qZWN0IFNob3djYXNlJywgJ0NhcmVlciAmIEFkdmljZSddO1xuXG4gIGNvbnN0IHB1Ymxpc2hlZFBvc3RzID0gcG9zdHMuZmlsdGVyKChwKSA9PiBwLmlzUHVibGlzaGVkKTtcblxuICBjb25zdCBmaWx0ZXJlZFBvc3RzID0gcHVibGlzaGVkUG9zdHMuZmlsdGVyKChwKSA9PiB7XG4gICAgcmV0dXJuIHNlbGVjdGVkQ2F0ZWdvcnkgPT09ICdBbGwnID8gdHJ1ZSA6IHAuY2F0ZWdvcnkgPT09IHNlbGVjdGVkQ2F0ZWdvcnk7XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUxpa2UgPSAoaWQ6IHN0cmluZywgZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKGxpa2VkUG9zdHNbaWRdKSByZXR1cm47XG4gICAgb25MaWtlUG9zdChpZCk7XG4gICAgc2V0TGlrZWRQb3N0cygocHJldikgPT4gKHsgLi4ucHJldiwgW2lkXTogdHJ1ZSB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cImJsb2dcIiBjbGFzc05hbWU9XCJweS0xNiBtZDpweS0yMCBib3JkZXItYiBib3JkZXItbmV1dHJhbC0yMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgey8qIFNlY3Rpb24gSGVhZGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbWQ6aXRlbXMtZW5kIGp1c3RpZnktYmV0d2VlbiBnYXAtNiBtYi04XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIG1iLTIgZm9udC1tb25vXCI+XG4gICAgICAgICAgICAgIHt0LmJsb2cuc2VjdGlvbk51bX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LW5ldXRyYWwtOTUwIHNtOnRleHQtNHhsXCI+XG4gICAgICAgICAgICAgIHt0LmJsb2cudGl0bGV9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LW5ldXRyYWwtNjAwIHRleHQtc20gc206dGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgIHt0LmJsb2cuc3VidGl0bGV9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uTWFuYWdlUG9zdHN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMuNSBweS0yIHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1uZXV0cmFsLTgwMCBiZy1uZXV0cmFsLTEwMCBob3ZlcjpiZy1uZXV0cmFsLTIwMCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMzAwIHJvdW5kZWQtbWQgdHJhbnNpdGlvbi1jb2xvcnMgd2hpdGVzcGFjZS1ub3dyYXBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dC5ibG9nLmNydWRCdG59XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIENhdGVnb3J5IEZpbHRlcnMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGdhcC0yIG1iLThcIj5cbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdCkgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBrZXk9e2NhdH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDYXRlZ29yeShjYXQpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC0zIHB5LTEuNSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdHJhbnNpdGlvbi1jb2xvcnMgd2hpdGVzcGFjZS1ub3dyYXAgJHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5ID09PSBjYXRcbiAgICAgICAgICAgICAgICAgID8gJ2JnLW5ldXRyYWwtOTAwIHRleHQtd2hpdGUnXG4gICAgICAgICAgICAgICAgICA6ICdiZy13aGl0ZSB0ZXh0LW5ldXRyYWwtNjAwIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgaG92ZXI6Ym9yZGVyLW5ldXRyYWwtMzAwJ1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NhdCA9PT0gJ0FsbCcgPyB0LmJsb2cuYWxsIDogY2F0fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBQb3N0cyBHcmlkICovfVxuICAgICAgICB7ZmlsdGVyZWRQb3N0cy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS0xMiBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1uZXV0cmFsLTUwMFwiPlxuICAgICAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICd2aScgPyAnQ2jGsGEgY8OzIGLDoGkgdmnhur90IHRyb25nIGRhbmggbeG7pWMgbsOgeS4nIDogJ05vIGJsb2cgcG9zdHMgZm91bmQgaW4gdGhpcyBjYXRlZ29yeS4nfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNlwiPlxuICAgICAgICAgICAge2ZpbHRlcmVkUG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICAgIDxhcnRpY2xlXG4gICAgICAgICAgICAgICAga2V5PXtwb3N0LmlkfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkUG9zdChwb3N0KX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbGcgcC02IGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGhvdmVyOmJvcmRlci1uZXV0cmFsLTQwMCB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciBzaGFkb3cteHNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIHsvKiBaZXJvLVBpbGwgQ2xlYW4gVW5ib3hlZCBNZXRhZGF0YSAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC14cyB0ZXh0LW5ldXRyYWwtNTAwIG1iLTMgZmxleC13cmFwIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC04MDBcIj57cG9zdC5jYXRlZ29yeX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsK3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0YWJ1bGFyLW51bXNcIj57cG9zdC5wdWJsaXNoZWRBdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsK3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5yZWFkVGltZU1pbnV0ZXN9IHt0LmJsb2cubWluUmVhZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LWJvbGQgdGV4dC1uZXV0cmFsLTk1MCBncm91cC1ob3Zlcjp0ZXh0LW5ldXRyYWwtNzAwIHRyYW5zaXRpb24tY29sb3JzIGxlYWRpbmctc251ZyBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBzbTp0ZXh0LXNtIHRleHQtbmV1dHJhbC02MDAgbGVhZGluZy1yZWxheGVkIG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgICAge3Bvc3QuZXhjZXJwdH1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBib3JkZXItdCBib3JkZXItbmV1dHJhbC0xMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgdGV4dC1uZXV0cmFsLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LW5ldXRyYWwtOTAwXCI+e3Bvc3QuYXV0aG9yTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsK3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LW5ldXRyYWwtNDAwXCI+e3Bvc3QuYXV0aG9yUm9sZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUxpa2UocG9zdC5pZCwgZSl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdHJhbnNpdGlvbi1jb2xvcnMgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VkUG9zdHNbcG9zdC5pZF0gPyAndGV4dC1yZWQtNjAwIGZvbnQtc2VtaWJvbGQnIDogJ2hvdmVyOnRleHQtcmVkLTUwMCdcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkxpa2UgYXJ0aWNsZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8SGVhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMy41IGgtMy41ICR7bGlrZWRQb3N0c1twb3N0LmlkXSA/ICdmaWxsLXJlZC02MDAnIDogJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0YWJ1bGFyLW51bXMgdGV4dC14c1wiPntwb3N0Lmxpa2VzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cInctMy41IGgtMy41IGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTAuNSB0cmFuc2l0aW9uLXRyYW5zZm9ybSB0ZXh0LW5ldXRyYWwtNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogRnVsbCBQb3N0IFJlYWRlciBNb2RhbCAqL31cbiAgICAgIHtzZWxlY3RlZFBvc3QgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICAgYXJpYS1tb2RhbD1cInRydWVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei01MCBiZy1uZXV0cmFsLTk1MC81MCBiYWNrZHJvcC1ibHVyLXhzIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCBvdmVyZmxvdy15LWF1dG9cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkUG9zdChudWxsKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgbWF4LXctMnhsIHctZnVsbCBtYXgtaC1bODV2aF0gb3ZlcmZsb3cteS1hdXRvIGJvcmRlciBib3JkZXItbmV1dHJhbC0zMDAgc2hhZG93LXhsIHAtNiBzbTpwLThcIlxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcGItNCBib3JkZXItYiBib3JkZXItbmV1dHJhbC0yMDAgZm9udC1tb25vIHRleHQteHMgdGV4dC1uZXV0cmFsLTUwMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtODAwXCI+e3NlbGVjdGVkUG9zdC5jYXRlZ29yeX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+wrc8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFidWxhci1udW1zXCI+e3NlbGVjdGVkUG9zdC5wdWJsaXNoZWRBdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+wrc8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3NlbGVjdGVkUG9zdC5yZWFkVGltZU1pbnV0ZXN9IHt0LmJsb2cubWluUmVhZH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRQb3N0KG51bGwpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSB0ZXh0LW5ldXRyYWwtNDAwIGhvdmVyOnRleHQtbmV1dHJhbC05MDAgcm91bmRlZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBzbTp0ZXh0LTN4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1uZXV0cmFsLTk1MCBtYi0zXCI+XG4gICAgICAgICAgICAgICAge3NlbGVjdGVkUG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXNtIHRleHQtbmV1dHJhbC02MDAgbWItNlwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPntsYW5ndWFnZSA9PT0gJ3ZpJyA/ICdUw6FjIGdp4bqjOicgOiAnQnknfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC05MDBcIj57c2VsZWN0ZWRQb3N0LmF1dGhvck5hbWV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPHNwYW4+KHtzZWxlY3RlZFBvc3QuYXV0aG9yUm9sZX0pPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlIHByb3NlLW5ldXRyYWwgbWF4LXctbm9uZSB0ZXh0LW5ldXRyYWwtNzAwIHRleHQtc20gc206dGV4dC1iYXNlIGxlYWRpbmctcmVsYXhlZCBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQb3N0LmNvbnRlbnQuc3BsaXQoJ1xcblxcbicpLm1hcCgocGFyYWdyYXBoLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAocGFyYWdyYXBoLnN0YXJ0c1dpdGgoJyMjIyAnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxoNCBrZXk9e2l9IGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LWJvbGQgdGV4dC1uZXV0cmFsLTkwMCBtdC02IG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJhZ3JhcGgucmVwbGFjZSgnIyMjICcsICcnKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKHBhcmFncmFwaC5zdGFydHNXaXRoKCdgYGAnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLW5ldXRyYWwtOTAwIHRleHQtbmV1dHJhbC0xMDAgcC00IHJvdW5kZWQtbWQgdGV4dC14cyBmb250LW1vbm8gb3ZlcmZsb3cteC1hdXRvIG15LTNcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJhZ3JhcGgucmVwbGFjZSgvYGBgW2Etel0qXFxuPy9nLCAnJyl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPHAga2V5PXtpfT57cGFyYWdyYXBofTwvcD47XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBwdC00IGJvcmRlci10IGJvcmRlci1uZXV0cmFsLTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlTGlrZShzZWxlY3RlZFBvc3QuaWQsIGUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zbSBweC0zLjUgcHktMS41IHJvdW5kZWQtbWQgYm9yZGVyIHRyYW5zaXRpb24tY29sb3JzICR7XG4gICAgICAgICAgICAgICAgICAgIGxpa2VkUG9zdHNbc2VsZWN0ZWRQb3N0LmlkXVxuICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLXJlZC01MCBib3JkZXItcmVkLTIwMCB0ZXh0LXJlZC03MDAnXG4gICAgICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLW5ldXRyYWwtMzAwIHRleHQtbmV1dHJhbC03MDAgaG92ZXI6YmctbmV1dHJhbC01MCdcbiAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxIZWFydFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTQgaC00ICR7XG4gICAgICAgICAgICAgICAgICAgICAgbGlrZWRQb3N0c1tzZWxlY3RlZFBvc3QuaWRdID8gJ2ZpbGwtcmVkLTYwMCB0ZXh0LXJlZC02MDAnIDogJydcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3NlbGVjdGVkUG9zdC5saWtlc30ge3QuYmxvZy5saWtlc308L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFBvc3QobnVsbCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTEuNSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtbmV1dHJhbC03MDAgYmctbmV1dHJhbC0xMDAgaG92ZXI6YmctbmV1dHJhbC0yMDAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3QuYmxvZy5jbG9zZUJ0bn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iXX0=