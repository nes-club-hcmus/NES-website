const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=83e0c204";
import { X, Copy, Check, FolderTree, FileCode, Globe, Database, Terminal, Download } from "/node_modules/.vite/deps/lucide-react.js?v=83e0c204";
var _jsxFileName = "/app/applet/src/components/NextJsBlueprintModal.tsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=83e0c204";
export const NextJsBlueprintModal = ({ isOpen, onClose, onDownloadSeed }) => {
	const [activeTab, setActiveTab] = useState("structure");
	const [selectedCodeFile, setSelectedCodeFile] = useState("lib/mongodb.ts");
	const [copiedKey, setCopiedKey] = useState(null);
	if (!isOpen) return null;
	const copyToClipboard = (text, key) => {
		navigator.clipboard.writeText(text);
		setCopiedKey(key);
		setTimeout(() => setCopiedKey(null), 2e3);
	};
	const projectTree = `uniclub-nextjs/
├── app/
│   ├── layout.tsx              # Root HTML shell & fonts
│   ├── page.tsx                # Club landing, hero & public sections
│   ├── members/
│   │   └── page.tsx            # Public member directory
│   ├── events/
│   │   ├── page.tsx            # Event calendar & workshop listings
│   │   └── [id]/page.tsx       # Event RSVP & details
│   ├── blog/
│   │   ├── page.tsx            # Articles list
│   │   └── [slug]/page.tsx     # Full markdown article reader
│   ├── join/
│   │   └── page.tsx            # Student recruitment form
│   ├── admin/
│   │   ├── page.tsx            # Protected dashboard (CRUD members, events, blogs)
│   │   └── applications/page.tsx # Review applicant submissions
│   └── api/                    # Serverless route handlers (Vercel)
│       ├── members/
│       │   └── route.ts        # GET / POST members
│       ├── events/
│       │   ├── route.ts        # GET / POST events
│       │   └── [id]/rsvp/route.ts # POST toggle RSVP
│       ├── posts/
│       │   └── route.ts        # GET / POST blog articles
│       └── applications/
│           └── route.ts        # GET / POST join applications
├── lib/
│   ├── mongodb.ts              # Cached Mongoose connection (Vercel serverless friendly)
│   └── auth.ts                 # NextAuth or simple admin session validator
├── models/                     # Mongoose schemas
│   ├── Member.ts
│   ├── Event.ts
│   ├── Post.ts
│   └── Application.ts
├── components/                 # Reusable React components
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── MemberCard.tsx
│   ├── EventCard.tsx
│   └── AdminTable.tsx
├── public/                     # Static assets (logos, icons)
├── scripts/
│   └── seed.ts                 # Database seeder script
├── .env.local.example          # Environment variables template
├── .gitignore
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json`;
	const codeSnippets = {
		"lib/mongodb.ts": {
			description: "Cached MongoDB / Mongoose connection handler designed specifically for Vercel serverless execution without connection leak.",
			code: `import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development and prevent connections growing exponentially
 * during API Route usage on Vercel.
 */
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongooseCache: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

export async function connectToDatabase(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10, // Recommended for MongoDB Atlas Free M0
    };

    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}`
		},
		"models/Member.ts": {
			description: "Mongoose model for student club members, tracks, roles, and status.",
			code: `import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IMember extends Document {
  name: string;
  role: string;
  track: string;
  email: string;
  studentId?: string;
  graduationYear: number;
  bio: string;
  skills: string[];
  githubUrl?: string;
  linkedinUrl?: string;
  status: 'Active' | 'On Leave' | 'Alumni';
  joinedDate: Date;
  avatarColor: string;
}

const MemberSchema = new Schema<IMember>(
  {
    name: { type: String, required: true },
    role: { type: String, required: true, default: 'Core Member' },
    track: {
      type: String,
      required: true,
      enum: ['Software & AI', 'Product & UI/UX', 'Hardware & Robotics', 'Community & Ops'],
    },
    email: { type: String, required: true, unique: true },
    studentId: { type: String },
    graduationYear: { type: Number, required: true },
    bio: { type: String, required: true },
    skills: [{ type: String }],
    githubUrl: { type: String },
    linkedinUrl: { type: String },
    status: { type: String, enum: ['Active', 'On Leave', 'Alumni'], default: 'Active' },
    joinedDate: { type: Date, default: Date.now },
    avatarColor: { type: String, default: 'from-blue-600 to-indigo-800' },
  },
  { timestamps: true }
);

export const Member: Model<IMember> =
  mongoose.models.Member || mongoose.model<IMember>('Member', MemberSchema);`
		},
		"models/Event.ts": {
			description: "Mongoose model for workshops, hackathons, and RSVPs.",
			code: `import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  description: string;
  agenda?: string;
  date: string;
  time: string;
  location: string;
  isOnline: boolean;
  category: 'Workshop' | 'Hackathon' | 'Tech Talk' | 'Social' | 'Project Demo';
  capacity: number;
  rsvps: string[];
  speakerName?: string;
  speakerRole?: string;
  status: 'Upcoming' | 'Past' | 'Cancelled';
}

const EventSchema = new Schema<IEvent>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    agenda: { type: String },
    date: { type: String, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    isOnline: { type: Boolean, default: false },
    category: {
      type: String,
      enum: ['Workshop', 'Hackathon', 'Tech Talk', 'Social', 'Project Demo'],
      default: 'Workshop',
    },
    capacity: { type: Number, default: 40 },
    rsvps: [{ type: String }],
    speakerName: { type: String },
    speakerRole: { type: String },
    status: { type: String, enum: ['Upcoming', 'Past', 'Cancelled'], default: 'Upcoming' },
  },
  { timestamps: true }
);

export const Event: Model<IEvent> =
  mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);`
		},
		"models/Application.ts": {
			description: "Mongoose schema for recruitment form inquiries.",
			code: `import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IApplication extends Document {
  fullName: string;
  email: string;
  studentId: string;
  major: string;
  yearOfStudy: 'Freshman' | 'Sophomore' | 'Junior' | 'Senior' | 'Graduate';
  tracks: string[];
  experienceLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  motivation: string;
  portfolioUrl?: string;
  status: 'Pending' | 'Interview' | 'Accepted' | 'Archived';
  adminNotes?: string;
}

const ApplicationSchema = new Schema<IApplication>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    studentId: { type: String, required: true },
    major: { type: String, required: true },
    yearOfStudy: {
      type: String,
      enum: ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate'],
      required: true,
    },
    tracks: [{ type: String }],
    experienceLevel: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      default: 'Beginner',
    },
    motivation: { type: String, required: true },
    portfolioUrl: { type: String },
    status: {
      type: String,
      enum: ['Pending', 'Interview', 'Accepted', 'Archived'],
      default: 'Pending',
    },
    adminNotes: { type: String },
  },
  { timestamps: true }
);

export const Application: Model<IApplication> =
  mongoose.models.Application || mongoose.model<IApplication>('Application', ApplicationSchema);`
		},
		"app/api/events/route.ts": {
			description: "Next.js App Router Route Handler for Events CRUD.",
			code: `import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Event } from '@/models/Event';

export async function GET() {
  try {
    await connectToDatabase();
    const events = await Event.find({}).sort({ date: 1 });
    return NextResponse.json({ success: true, data: events });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const newEvent = await Event.create(body);
    return NextResponse.json({ success: true, data: newEvent }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}`
		},
		".env.local.example": {
			description: "Environment variables required for local Next.js and Vercel.",
			code: `# MongoDB Atlas M0 Connection String
# Replace <username>, <password>, and <cluster-url> with your Atlas credentials
MONGODB_URI="mongodb+srv://club_admin:<password>@cluster0.abcde.mongodb.net/uniclub?retryWrites=true&w=majority"

# Optional NextAuth / Admin Secret for Protected Routes
NEXTAUTH_SECRET="super-secret-random-key-replace-in-production"
NEXTAUTH_URL="http://localhost:3000"

# Admin Dashboard Password (or basic auth token)
ADMIN_API_KEY="apex-secret-admin-pass-2026"`
		},
		"package.json": {
			description: "Minimal package.json configuration for Next.js 14/15 App Router + Mongoose.",
			code: `{
  "name": "uniclub-website",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "seed": "tsx scripts/seed.ts"
  },
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "mongoose": "^8.9.0",
    "lucide-react": "^0.469.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.5"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "^5.7.0",
    "tailwindcss": "^3.4.1",
    "postcss": "^8.4.49",
    "autoprefixer": "^10.4.20",
    "tsx": "^4.19.2"
  }
}`
		}
	};
	return /* @__PURE__ */ _jsxDEV("div", {
		role: "dialog",
		"aria-modal": "true",
		className: "fixed inset-0 z-50 bg-neutral-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto",
		onClick: onClose,
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "bg-white rounded-xl max-w-4xl w-full max-h-[92vh] flex flex-col border border-neutral-300 shadow-2xl overflow-hidden",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/50",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "p-1.5 bg-neutral-900 text-white rounded-md",
							children: /* @__PURE__ */ _jsxDEV(Terminal, { className: "w-4 h-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 380,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 379,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-base font-bold text-neutral-950",
							children: "Next.js + MongoDB (M0) + Vercel Deployment Blueprint"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 383,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("p", {
							className: "text-xs text-neutral-500",
							children: "Project structure, production code templates, and deployment walkthrough"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 386,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 382,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 378,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ _jsxDEV("button", {
							onClick: onDownloadSeed,
							className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-md transition-colors",
							title: "Download current data as seed.json",
							children: [/* @__PURE__ */ _jsxDEV(Download, { className: "w-3.5 h-3.5 text-emerald-700" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 398,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Download seed.json" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 399,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 393,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("button", {
							onClick: onClose,
							className: "p-1.5 text-neutral-400 hover:text-neutral-900 rounded",
							children: /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 405,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 401,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 392,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 377,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "px-6 pt-3 border-b border-neutral-200 flex items-center gap-6 text-xs font-medium text-neutral-500 overflow-x-auto",
					children: [
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setActiveTab("structure"),
							className: `pb-3 border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${activeTab === "structure" ? "border-neutral-900 text-neutral-950 font-semibold" : "border-transparent hover:text-neutral-900"}`,
							children: [/* @__PURE__ */ _jsxDEV(FolderTree, { className: "w-4 h-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 420,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "1. Project Structure" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 421,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 412,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setActiveTab("code"),
							className: `pb-3 border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${activeTab === "code" ? "border-neutral-900 text-neutral-950 font-semibold" : "border-transparent hover:text-neutral-900"}`,
							children: [/* @__PURE__ */ _jsxDEV(FileCode, { className: "w-4 h-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 432,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "2. Boilerplate Code" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 433,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 424,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setActiveTab("instructions"),
							className: `pb-3 border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${activeTab === "instructions" ? "border-neutral-900 text-neutral-950 font-semibold" : "border-transparent hover:text-neutral-900"}`,
							children: [/* @__PURE__ */ _jsxDEV(Globe, { className: "w-4 h-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 444,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "3. Setup & Vercel Steps" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 445,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 436,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setActiveTab("alternatives"),
							className: `pb-3 border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${activeTab === "alternatives" ? "border-neutral-900 text-neutral-950 font-semibold" : "border-transparent hover:text-neutral-900"}`,
							children: [/* @__PURE__ */ _jsxDEV(Database, { className: "w-4 h-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 456,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "4. Render & Supabase" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 457,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 448,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 411,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex-1 overflow-y-auto p-6 space-y-6",
					children: [
						activeTab === "structure" && /* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
										className: "text-sm font-bold text-neutral-900",
										children: "Next.js (App Router) Directory Architecture"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 468,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("p", {
										className: "text-xs text-neutral-500 mt-0.5",
										children: "Recommended file tree for student club websites deployed on Vercel with MongoDB Atlas."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 471,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 467,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("button", {
										onClick: () => copyToClipboard(projectTree, "tree"),
										className: "flex items-center gap-1 text-xs px-2.5 py-1 text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded",
										children: [copiedKey === "tree" ? /* @__PURE__ */ _jsxDEV(Check, { className: "w-3.5 h-3.5 text-emerald-600" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 479,
											columnNumber: 43
										}, this) : /* @__PURE__ */ _jsxDEV(Copy, { className: "w-3.5 h-3.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 479,
											columnNumber: 96
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: copiedKey === "tree" ? "Copied" : "Copy Tree" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 480,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 475,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 466,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("pre", {
									className: "bg-neutral-900 text-neutral-100 p-4 rounded-lg font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800",
									children: projectTree
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 484,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs",
									children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "p-3 bg-neutral-50 border border-neutral-200 rounded-md",
											children: [/* @__PURE__ */ _jsxDEV("strong", {
												className: "text-neutral-900 block font-semibold mb-1",
												children: "Serverless Routing (/app/api)"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 490,
												columnNumber: 19
											}, this), "Each API route acts as an isolated serverless function on Vercel, scaling automatically without server cost."]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 489,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "p-3 bg-neutral-50 border border-neutral-200 rounded-md",
											children: [/* @__PURE__ */ _jsxDEV("strong", {
												className: "text-neutral-900 block font-semibold mb-1",
												children: "Connection Pooling (/lib)"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 494,
												columnNumber: 19
											}, this), "Reuses Mongoose connections across serverless invokes to stay safely within MongoDB M0 500-connection limit."]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 493,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "p-3 bg-neutral-50 border border-neutral-200 rounded-md",
											children: [/* @__PURE__ */ _jsxDEV("strong", {
												className: "text-neutral-900 block font-semibold mb-1",
												children: "Type Safety (/models)"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 498,
												columnNumber: 19
											}, this), "Strict TypeScript interfaces guarantee valid JSON bodies for events, members, and recruitment forms."]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 497,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 488,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 465,
							columnNumber: 13
						}, this),
						activeTab === "code" && /* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex flex-wrap items-center gap-2 pb-2 border-b border-neutral-200",
									children: Object.keys(codeSnippets).map((filename) => /* @__PURE__ */ _jsxDEV("button", {
										onClick: () => setSelectedCodeFile(filename),
										className: `px-3 py-1 text-xs font-mono rounded-md transition-colors ${selectedCodeFile === filename ? "bg-neutral-900 text-white font-semibold" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"}`,
										children: filename
									}, filename, false, {
										fileName: _jsxFileName,
										lineNumber: 510,
										columnNumber: 19
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 508,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "text-xs text-neutral-600 font-medium",
										children: codeSnippets[selectedCodeFile].description
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 525,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("button", {
										onClick: () => copyToClipboard(codeSnippets[selectedCodeFile].code, selectedCodeFile),
										className: "flex items-center gap-1.5 text-xs px-3 py-1.5 text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-md",
										children: [copiedKey === selectedCodeFile ? /* @__PURE__ */ _jsxDEV(Check, { className: "w-3.5 h-3.5 text-emerald-600" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 539,
											columnNumber: 21
										}, this) : /* @__PURE__ */ _jsxDEV(Copy, { className: "w-3.5 h-3.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 541,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: copiedKey === selectedCodeFile ? "Copied to Clipboard" : "Copy File" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 543,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 529,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 524,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("pre", {
									className: "bg-neutral-900 text-neutral-100 p-4 rounded-lg font-mono text-xs overflow-x-auto max-h-[400px] border border-neutral-800",
									children: codeSnippets[selectedCodeFile].code
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 547,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 507,
							columnNumber: 13
						}, this),
						activeTab === "instructions" && /* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-6 text-xs text-neutral-700 leading-relaxed",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "p-4 border border-neutral-200 rounded-lg space-y-2",
									children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center gap-2 font-bold text-sm text-neutral-900",
											children: [/* @__PURE__ */ _jsxDEV("span", {
												className: "w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-mono",
												children: "1"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 559,
												columnNumber: 19
											}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Initialize GitHub Repository" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 560,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 558,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("p", { children: [
											"Create a new repository on GitHub (e.g., ",
											/* @__PURE__ */ _jsxDEV("code", {
												className: "bg-neutral-100 px-1 py-0.5 rounded text-neutral-800",
												children: "your-org/uniclub-website"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 563,
												columnNumber: 60
											}, this),
											")."
										] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 562,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("pre", {
											className: "bg-neutral-900 text-neutral-100 p-3 rounded font-mono text-xs overflow-x-auto",
											children: `git init
git add .
git commit -m "Initial commit: university club website boilerplate"
git branch -M main
git remote add origin https://github.com/your-username/uniclub-website.git
git push -u origin main`
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 565,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 557,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "p-4 border border-neutral-200 rounded-lg space-y-2",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2 font-bold text-sm text-neutral-900",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-mono",
											children: "2"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 578,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Set Up MongoDB Atlas Free Tier (M0 Sandbox)" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 579,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 577,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("ol", {
										className: "list-decimal pl-5 space-y-1.5",
										children: [
											/* @__PURE__ */ _jsxDEV("li", { children: [
												"Go to ",
												/* @__PURE__ */ _jsxDEV("strong", { children: "mongodb.com/cloud/atlas" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 582,
													columnNumber: 29
												}, this),
												" and create a free account."
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 582,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("li", { children: [
												"Click ",
												/* @__PURE__ */ _jsxDEV("strong", { children: "Build a Database" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 583,
													columnNumber: 29
												}, this),
												" and choose ",
												/* @__PURE__ */ _jsxDEV("strong", { children: "M0 (Free Forever)" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 583,
													columnNumber: 74
												}, this),
												" in AWS or GCP region nearest to your campus."
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 583,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("li", { children: [
												"In ",
												/* @__PURE__ */ _jsxDEV("strong", { children: "Security Quickstart" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 584,
													columnNumber: 26
												}, this),
												": Create a database user with username ",
												/* @__PURE__ */ _jsxDEV("code", {
													className: "bg-neutral-100 px-1 py-0.5 rounded",
													children: "club_admin"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 584,
													columnNumber: 101
												}, this),
												" and generate a password."
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 584,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("li", { children: [
												"In ",
												/* @__PURE__ */ _jsxDEV("strong", { children: "Network Access" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 585,
													columnNumber: 26
												}, this),
												": Add IP Address ",
												/* @__PURE__ */ _jsxDEV("code", {
													className: "bg-neutral-100 px-1 py-0.5 rounded font-mono",
													children: "0.0.0.0/0"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 585,
													columnNumber: 74
												}, this),
												" (Allow Access from Anywhere) so Vercel serverless functions can connect."
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 585,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("li", { children: [
												"Click ",
												/* @__PURE__ */ _jsxDEV("strong", { children: "Connect" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 586,
													columnNumber: 29
												}, this),
												" > ",
												/* @__PURE__ */ _jsxDEV("strong", { children: "Drivers" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 586,
													columnNumber: 59
												}, this),
												" > Copy connection string URI:",
												/* @__PURE__ */ _jsxDEV("div", {
													className: "mt-1 font-mono text-[11px] bg-neutral-100 p-2 rounded text-neutral-800 break-all",
													children: "mongodb+srv://club_admin:<password>@cluster0.abcde.mongodb.net/uniclub?retryWrites=true&w=majority"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 587,
													columnNumber: 21
												}, this)
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 586,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 581,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 576,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "p-4 border border-neutral-200 rounded-lg space-y-2",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2 font-bold text-sm text-neutral-900",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-mono",
											children: "3"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 597,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Deploy to Vercel (Free Hobby Tier)" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 598,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 596,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("ol", {
										className: "list-decimal pl-5 space-y-1.5",
										children: [
											/* @__PURE__ */ _jsxDEV("li", { children: [
												"Go to ",
												/* @__PURE__ */ _jsxDEV("strong", { children: "vercel.com" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 601,
													columnNumber: 29
												}, this),
												" and click ",
												/* @__PURE__ */ _jsxDEV("strong", { children: "Add New Project" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 601,
													columnNumber: 67
												}, this),
												"."
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 601,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("li", { children: [
												"Import your GitHub repository ",
												/* @__PURE__ */ _jsxDEV("code", {
													className: "bg-neutral-100 px-1 py-0.5 rounded",
													children: "uniclub-website"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 602,
													columnNumber: 53
												}, this),
												"."
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 602,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("li", { children: [
												"Under ",
												/* @__PURE__ */ _jsxDEV("strong", { children: "Environment Variables" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 603,
													columnNumber: 29
												}, this),
												", add:",
												/* @__PURE__ */ _jsxDEV("div", {
													className: "mt-1 font-mono text-[11px] bg-neutral-100 p-2 rounded text-neutral-800",
													children: [
														"Key: MONGODB_URI",
														/* @__PURE__ */ _jsxDEV("br", {}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 605,
															columnNumber: 39
														}, this),
														"Value: mongodb+srv://club_admin:YOUR_PASSWORD@cluster0.abcde.mongodb.net/uniclub?retryWrites=true&w=majority"
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 604,
													columnNumber: 21
												}, this)
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 603,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("li", { children: [
												"Click ",
												/* @__PURE__ */ _jsxDEV("strong", { children: "Deploy" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 609,
													columnNumber: 29
												}, this),
												". Vercel automatically builds and provides your live HTTPS domain (e.g., ",
												/* @__PURE__ */ _jsxDEV("code", {
													className: "bg-neutral-100 px-1 py-0.5 rounded",
													children: "uniclub.vercel.app"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 609,
													columnNumber: 125
												}, this),
												")."
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 609,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("li", { children: [
												"Every Git commit to ",
												/* @__PURE__ */ _jsxDEV("code", {
													className: "bg-neutral-100 px-1 py-0.5 rounded",
													children: "main"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 610,
													columnNumber: 43
												}, this),
												" will automatically trigger instant CI/CD deployment."
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 610,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 600,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 595,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 555,
							columnNumber: 13
						}, this),
						activeTab === "alternatives" && /* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-6 text-xs text-neutral-700 leading-relaxed",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "p-4 border border-neutral-200 rounded-lg space-y-3",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "font-bold text-sm text-neutral-900 flex items-center gap-2",
											children: [/* @__PURE__ */ _jsxDEV(Globe, { className: "w-4 h-4 text-indigo-600" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 622,
												columnNumber: 21
											}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Alternative: Express.js Backend on Render.com" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 623,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 621,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "font-mono text-[10px] px-2 py-0.5 bg-neutral-100 rounded text-neutral-600",
											children: "Free Tier"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 625,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 620,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("p", { children: "If you prefer separating your backend API from Next.js into a dedicated Node/Express service:" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 627,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("ol", {
										className: "list-decimal pl-5 space-y-1",
										children: [
											/* @__PURE__ */ _jsxDEV("li", { children: ["Create a repository with Express: ", /* @__PURE__ */ _jsxDEV("code", {
												className: "bg-neutral-100 px-1 py-0.5 rounded font-mono",
												children: "npm init -y && npm i express cors mongoose dotenv"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 631,
												columnNumber: 57
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 631,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("li", { children: [
												"Connect GitHub to ",
												/* @__PURE__ */ _jsxDEV("strong", { children: "render.com" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 632,
													columnNumber: 41
												}, this),
												" > Click ",
												/* @__PURE__ */ _jsxDEV("strong", { children: "New +" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 632,
													columnNumber: 80
												}, this),
												" > ",
												/* @__PURE__ */ _jsxDEV("strong", { children: "Web Service" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 632,
													columnNumber: 108
												}, this),
												"."
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 632,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("li", { children: [
												"Set Build Command: ",
												/* @__PURE__ */ _jsxDEV("code", {
													className: "bg-neutral-100 px-1 py-0.5 rounded font-mono",
													children: "npm install"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 633,
													columnNumber: 42
												}, this),
												" and Start Command: ",
												/* @__PURE__ */ _jsxDEV("code", {
													className: "bg-neutral-100 px-1 py-0.5 rounded font-mono",
													children: "node server.js"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 633,
													columnNumber: 143
												}, this)
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 633,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("li", { children: [
												"Add environment variable ",
												/* @__PURE__ */ _jsxDEV("code", {
													className: "bg-neutral-100 px-1 py-0.5 rounded font-mono",
													children: "MONGODB_URI"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 634,
													columnNumber: 48
												}, this),
												"."
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 634,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("li", { children: [
												"Render provisions a free URL like ",
												/* @__PURE__ */ _jsxDEV("code", {
													className: "bg-neutral-100 px-1 py-0.5 rounded font-mono",
													children: "https://uniclub-api.onrender.com"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 635,
													columnNumber: 57
												}, this),
												". In Next.js, point your fetch requests to this URL."
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 635,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 630,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 619,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "p-4 border border-neutral-200 rounded-lg space-y-3",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "font-bold text-sm text-neutral-900 flex items-center gap-2",
											children: [/* @__PURE__ */ _jsxDEV(Database, { className: "w-4 h-4 text-emerald-600" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 642,
												columnNumber: 21
											}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Alternative: Supabase (PostgreSQL + Prisma)" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 643,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 641,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "font-mono text-[10px] px-2 py-0.5 bg-neutral-100 rounded text-neutral-600",
											children: "RDBMS SQL"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 645,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 640,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("p", { children: "If you prefer a relational database with SQL over MongoDB:" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 647,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("ol", {
										className: "list-decimal pl-5 space-y-1",
										children: [
											/* @__PURE__ */ _jsxDEV("li", { children: [
												"Go to ",
												/* @__PURE__ */ _jsxDEV("strong", { children: "supabase.com" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 651,
													columnNumber: 29
												}, this),
												", create a project with a free PostgreSQL database."
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 651,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("li", { children: ["Install Prisma: ", /* @__PURE__ */ _jsxDEV("code", {
												className: "bg-neutral-100 px-1 py-0.5 rounded font-mono",
												children: "npm i prisma @prisma/client"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 652,
												columnNumber: 39
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 652,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("li", { children: [
												"Copy the Supabase connection string to your ",
												/* @__PURE__ */ _jsxDEV("code", {
													className: "bg-neutral-100 px-1 py-0.5 rounded font-mono",
													children: ".env.local"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 653,
													columnNumber: 67
												}, this),
												" as ",
												/* @__PURE__ */ _jsxDEV("code", {
													className: "bg-neutral-100 px-1 py-0.5 rounded font-mono",
													children: "DATABASE_URL"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 653,
													columnNumber: 151
												}, this),
												"."
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 653,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("li", { children: [
												"Run ",
												/* @__PURE__ */ _jsxDEV("code", {
													className: "bg-neutral-100 px-1 py-0.5 rounded font-mono",
													children: "npx prisma db push"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 654,
													columnNumber: 27
												}, this),
												" to create the tables."
											] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 654,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 650,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 639,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 618,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 462,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "px-6 py-4 border-t border-neutral-200 flex items-center justify-between bg-neutral-50/50",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "text-xs text-neutral-500",
						children: [
							"Click ",
							/* @__PURE__ */ _jsxDEV("strong", { children: "Download seed.json" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 664,
								columnNumber: 19
							}, this),
							" to take all sample data into your database."
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 663,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: onClose,
						className: "px-4 py-2 text-xs font-semibold text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-md transition-colors",
						children: "Close Blueprint"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 666,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 662,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 372,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 366,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QUFTO01BQ1QsV0FBVTtnQkFDWDtLQUVPOzs7O2FBQ0w7Ozs7OztHQUNGOzs7Ozs7Q0FDRjs7Ozs7QUFFVCIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJOZXh0SnNCbHVlcHJpbnRNb2RhbC50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgWCxcbiAgQ29weSxcbiAgQ2hlY2ssXG4gIEZvbGRlclRyZWUsXG4gIEZpbGVDb2RlLFxuICBHbG9iZSxcbiAgRGF0YWJhc2UsXG4gIEdpdEJyYW5jaCxcbiAgVGVybWluYWwsXG4gIEV4dGVybmFsTGluayxcbiAgRG93bmxvYWQsXG59IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmludGVyZmFjZSBOZXh0SnNCbHVlcHJpbnRNb2RhbFByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xuICBvbkRvd25sb2FkU2VlZDogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IE5leHRKc0JsdWVwcmludE1vZGFsOiBSZWFjdC5GQzxOZXh0SnNCbHVlcHJpbnRNb2RhbFByb3BzPiA9ICh7XG4gIGlzT3BlbixcbiAgb25DbG9zZSxcbiAgb25Eb3dubG9hZFNlZWQsXG59KSA9PiB7XG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZTwnc3RydWN0dXJlJyB8ICdjb2RlJyB8ICdpbnN0cnVjdGlvbnMnIHwgJ2FsdGVybmF0aXZlcyc+KCdzdHJ1Y3R1cmUnKTtcbiAgY29uc3QgW3NlbGVjdGVkQ29kZUZpbGUsIHNldFNlbGVjdGVkQ29kZUZpbGVdID0gdXNlU3RhdGU8c3RyaW5nPignbGliL21vbmdvZGIudHMnKTtcbiAgY29uc3QgW2NvcGllZEtleSwgc2V0Q29waWVkS2V5XSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIGlmICghaXNPcGVuKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSAodGV4dDogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4ge1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpO1xuICAgIHNldENvcGllZEtleShrZXkpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q29waWVkS2V5KG51bGwpLCAyMDAwKTtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0VHJlZSA9IGB1bmljbHViLW5leHRqcy9cbuKUnOKUgOKUgCBhcHAvXG7ilIIgICDilJzilIDilIAgbGF5b3V0LnRzeCAgICAgICAgICAgICAgIyBSb290IEhUTUwgc2hlbGwgJiBmb250c1xu4pSCICAg4pSc4pSA4pSAIHBhZ2UudHN4ICAgICAgICAgICAgICAgICMgQ2x1YiBsYW5kaW5nLCBoZXJvICYgcHVibGljIHNlY3Rpb25zXG7ilIIgICDilJzilIDilIAgbWVtYmVycy9cbuKUgiAgIOKUgiAgIOKUlOKUgOKUgCBwYWdlLnRzeCAgICAgICAgICAgICMgUHVibGljIG1lbWJlciBkaXJlY3RvcnlcbuKUgiAgIOKUnOKUgOKUgCBldmVudHMvXG7ilIIgICDilIIgICDilJzilIDilIAgcGFnZS50c3ggICAgICAgICAgICAjIEV2ZW50IGNhbGVuZGFyICYgd29ya3Nob3AgbGlzdGluZ3NcbuKUgiAgIOKUgiAgIOKUlOKUgOKUgCBbaWRdL3BhZ2UudHN4ICAgICAgICMgRXZlbnQgUlNWUCAmIGRldGFpbHNcbuKUgiAgIOKUnOKUgOKUgCBibG9nL1xu4pSCICAg4pSCICAg4pSc4pSA4pSAIHBhZ2UudHN4ICAgICAgICAgICAgIyBBcnRpY2xlcyBsaXN0XG7ilIIgICDilIIgICDilJTilIDilIAgW3NsdWddL3BhZ2UudHN4ICAgICAjIEZ1bGwgbWFya2Rvd24gYXJ0aWNsZSByZWFkZXJcbuKUgiAgIOKUnOKUgOKUgCBqb2luL1xu4pSCICAg4pSCICAg4pSU4pSA4pSAIHBhZ2UudHN4ICAgICAgICAgICAgIyBTdHVkZW50IHJlY3J1aXRtZW50IGZvcm1cbuKUgiAgIOKUnOKUgOKUgCBhZG1pbi9cbuKUgiAgIOKUgiAgIOKUnOKUgOKUgCBwYWdlLnRzeCAgICAgICAgICAgICMgUHJvdGVjdGVkIGRhc2hib2FyZCAoQ1JVRCBtZW1iZXJzLCBldmVudHMsIGJsb2dzKVxu4pSCICAg4pSCICAg4pSU4pSA4pSAIGFwcGxpY2F0aW9ucy9wYWdlLnRzeCAjIFJldmlldyBhcHBsaWNhbnQgc3VibWlzc2lvbnNcbuKUgiAgIOKUlOKUgOKUgCBhcGkvICAgICAgICAgICAgICAgICAgICAjIFNlcnZlcmxlc3Mgcm91dGUgaGFuZGxlcnMgKFZlcmNlbClcbuKUgiAgICAgICDilJzilIDilIAgbWVtYmVycy9cbuKUgiAgICAgICDilIIgICDilJTilIDilIAgcm91dGUudHMgICAgICAgICMgR0VUIC8gUE9TVCBtZW1iZXJzXG7ilIIgICAgICAg4pSc4pSA4pSAIGV2ZW50cy9cbuKUgiAgICAgICDilIIgICDilJzilIDilIAgcm91dGUudHMgICAgICAgICMgR0VUIC8gUE9TVCBldmVudHNcbuKUgiAgICAgICDilIIgICDilJTilIDilIAgW2lkXS9yc3ZwL3JvdXRlLnRzICMgUE9TVCB0b2dnbGUgUlNWUFxu4pSCICAgICAgIOKUnOKUgOKUgCBwb3N0cy9cbuKUgiAgICAgICDilIIgICDilJTilIDilIAgcm91dGUudHMgICAgICAgICMgR0VUIC8gUE9TVCBibG9nIGFydGljbGVzXG7ilIIgICAgICAg4pSU4pSA4pSAIGFwcGxpY2F0aW9ucy9cbuKUgiAgICAgICAgICAg4pSU4pSA4pSAIHJvdXRlLnRzICAgICAgICAjIEdFVCAvIFBPU1Qgam9pbiBhcHBsaWNhdGlvbnNcbuKUnOKUgOKUgCBsaWIvXG7ilIIgICDilJzilIDilIAgbW9uZ29kYi50cyAgICAgICAgICAgICAgIyBDYWNoZWQgTW9uZ29vc2UgY29ubmVjdGlvbiAoVmVyY2VsIHNlcnZlcmxlc3MgZnJpZW5kbHkpXG7ilIIgICDilJTilIDilIAgYXV0aC50cyAgICAgICAgICAgICAgICAgIyBOZXh0QXV0aCBvciBzaW1wbGUgYWRtaW4gc2Vzc2lvbiB2YWxpZGF0b3JcbuKUnOKUgOKUgCBtb2RlbHMvICAgICAgICAgICAgICAgICAgICAgIyBNb25nb29zZSBzY2hlbWFzXG7ilIIgICDilJzilIDilIAgTWVtYmVyLnRzXG7ilIIgICDilJzilIDilIAgRXZlbnQudHNcbuKUgiAgIOKUnOKUgOKUgCBQb3N0LnRzXG7ilIIgICDilJTilIDilIAgQXBwbGljYXRpb24udHNcbuKUnOKUgOKUgCBjb21wb25lbnRzLyAgICAgICAgICAgICAgICAgIyBSZXVzYWJsZSBSZWFjdCBjb21wb25lbnRzXG7ilIIgICDilJzilIDilIAgTmF2YmFyLnRzeFxu4pSCICAg4pSc4pSA4pSAIEhlcm9TZWN0aW9uLnRzeFxu4pSCICAg4pSc4pSA4pSAIE1lbWJlckNhcmQudHN4XG7ilIIgICDilJzilIDilIAgRXZlbnRDYXJkLnRzeFxu4pSCICAg4pSU4pSA4pSAIEFkbWluVGFibGUudHN4XG7ilJzilIDilIAgcHVibGljLyAgICAgICAgICAgICAgICAgICAgICMgU3RhdGljIGFzc2V0cyAobG9nb3MsIGljb25zKVxu4pSc4pSA4pSAIHNjcmlwdHMvXG7ilIIgICDilJTilIDilIAgc2VlZC50cyAgICAgICAgICAgICAgICAgIyBEYXRhYmFzZSBzZWVkZXIgc2NyaXB0XG7ilJzilIDilIAgLmVudi5sb2NhbC5leGFtcGxlICAgICAgICAgICMgRW52aXJvbm1lbnQgdmFyaWFibGVzIHRlbXBsYXRlXG7ilJzilIDilIAgLmdpdGlnbm9yZVxu4pSc4pSA4pSAIG5leHQuY29uZmlnLnRzXG7ilJzilIDilIAgcGFja2FnZS5qc29uXG7ilJzilIDilIAgUkVBRE1FLm1kXG7ilJTilIDilIAgdHNjb25maWcuanNvbmA7XG5cbiAgY29uc3QgY29kZVNuaXBwZXRzOiB7IFtrZXk6IHN0cmluZ106IHsgZGVzY3JpcHRpb246IHN0cmluZzsgY29kZTogc3RyaW5nIH0gfSA9IHtcbiAgICAnbGliL21vbmdvZGIudHMnOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ0NhY2hlZCBNb25nb0RCIC8gTW9uZ29vc2UgY29ubmVjdGlvbiBoYW5kbGVyIGRlc2lnbmVkIHNwZWNpZmljYWxseSBmb3IgVmVyY2VsIHNlcnZlcmxlc3MgZXhlY3V0aW9uIHdpdGhvdXQgY29ubmVjdGlvbiBsZWFrLicsXG4gICAgICBjb2RlOiBgaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluIC5lbnYubG9jYWwnKTtcbn1cblxuLyoqXG4gKiBHbG9iYWwgaXMgdXNlZCBoZXJlIHRvIG1haW50YWluIGEgY2FjaGVkIGNvbm5lY3Rpb24gYWNyb3NzIGhvdCByZWxvYWRzXG4gKiBpbiBkZXZlbG9wbWVudCBhbmQgcHJldmVudCBjb25uZWN0aW9ucyBncm93aW5nIGV4cG9uZW50aWFsbHlcbiAqIGR1cmluZyBBUEkgUm91dGUgdXNhZ2Ugb24gVmVyY2VsLlxuICovXG5pbnRlcmZhY2UgTW9uZ29vc2VDYWNoZSB7XG4gIGNvbm46IHR5cGVvZiBtb25nb29zZSB8IG51bGw7XG4gIHByb21pc2U6IFByb21pc2U8dHlwZW9mIG1vbmdvb3NlPiB8IG51bGw7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIG1vbmdvb3NlQ2FjaGU6IE1vbmdvb3NlQ2FjaGUgfCB1bmRlZmluZWQ7XG59XG5cbmxldCBjYWNoZWQ6IE1vbmdvb3NlQ2FjaGUgPSBnbG9iYWwubW9uZ29vc2VDYWNoZSB8fCB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcblxuaWYgKCFnbG9iYWwubW9uZ29vc2VDYWNoZSkge1xuICBnbG9iYWwubW9uZ29vc2VDYWNoZSA9IGNhY2hlZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCk6IFByb21pc2U8dHlwZW9mIG1vbmdvb3NlPiB7XG4gIGlmIChjYWNoZWQuY29ubikge1xuICAgIHJldHVybiBjYWNoZWQuY29ubjtcbiAgfVxuXG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxuICAgICAgbWF4UG9vbFNpemU6IDEwLCAvLyBSZWNvbW1lbmRlZCBmb3IgTW9uZ29EQiBBdGxhcyBGcmVlIE0wXG4gICAgfTtcblxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSEsIG9wdHMpLnRoZW4oKG1vbmdvb3NlSW5zdGFuY2UpID0+IHtcbiAgICAgIHJldHVybiBtb25nb29zZUluc3RhbmNlO1xuICAgIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkLnByb21pc2UgPSBudWxsO1xuICAgIHRocm93IGU7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkLmNvbm47XG59YCxcbiAgICB9LFxuICAgICdtb2RlbHMvTWVtYmVyLnRzJzoge1xuICAgICAgZGVzY3JpcHRpb246ICdNb25nb29zZSBtb2RlbCBmb3Igc3R1ZGVudCBjbHViIG1lbWJlcnMsIHRyYWNrcywgcm9sZXMsIGFuZCBzdGF0dXMuJyxcbiAgICAgIGNvZGU6IGBpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBEb2N1bWVudCwgTW9kZWwgfSBmcm9tICdtb25nb29zZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lbWJlciBleHRlbmRzIERvY3VtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICByb2xlOiBzdHJpbmc7XG4gIHRyYWNrOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHN0dWRlbnRJZD86IHN0cmluZztcbiAgZ3JhZHVhdGlvblllYXI6IG51bWJlcjtcbiAgYmlvOiBzdHJpbmc7XG4gIHNraWxsczogc3RyaW5nW107XG4gIGdpdGh1YlVybD86IHN0cmluZztcbiAgbGlua2VkaW5Vcmw/OiBzdHJpbmc7XG4gIHN0YXR1czogJ0FjdGl2ZScgfCAnT24gTGVhdmUnIHwgJ0FsdW1uaSc7XG4gIGpvaW5lZERhdGU6IERhdGU7XG4gIGF2YXRhckNvbG9yOiBzdHJpbmc7XG59XG5cbmNvbnN0IE1lbWJlclNjaGVtYSA9IG5ldyBTY2hlbWE8SU1lbWJlcj4oXG4gIHtcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICByb2xlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6ICdDb3JlIE1lbWJlcicgfSxcbiAgICB0cmFjazoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBlbnVtOiBbJ1NvZnR3YXJlICYgQUknLCAnUHJvZHVjdCAmIFVJL1VYJywgJ0hhcmR3YXJlICYgUm9ib3RpY3MnLCAnQ29tbXVuaXR5ICYgT3BzJ10sXG4gICAgfSxcbiAgICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcbiAgICBzdHVkZW50SWQ6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgZ3JhZHVhdGlvblllYXI6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGJpbzogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgc2tpbGxzOiBbeyB0eXBlOiBTdHJpbmcgfV0sXG4gICAgZ2l0aHViVXJsOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGxpbmtlZGluVXJsOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIHN0YXR1czogeyB0eXBlOiBTdHJpbmcsIGVudW06IFsnQWN0aXZlJywgJ09uIExlYXZlJywgJ0FsdW1uaSddLCBkZWZhdWx0OiAnQWN0aXZlJyB9LFxuICAgIGpvaW5lZERhdGU6IHsgdHlwZTogRGF0ZSwgZGVmYXVsdDogRGF0ZS5ub3cgfSxcbiAgICBhdmF0YXJDb2xvcjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdmcm9tLWJsdWUtNjAwIHRvLWluZGlnby04MDAnIH0sXG4gIH0sXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XG4pO1xuXG5leHBvcnQgY29uc3QgTWVtYmVyOiBNb2RlbDxJTWVtYmVyPiA9XG4gIG1vbmdvb3NlLm1vZGVscy5NZW1iZXIgfHwgbW9uZ29vc2UubW9kZWw8SU1lbWJlcj4oJ01lbWJlcicsIE1lbWJlclNjaGVtYSk7YCxcbiAgICB9LFxuICAgICdtb2RlbHMvRXZlbnQudHMnOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ01vbmdvb3NlIG1vZGVsIGZvciB3b3Jrc2hvcHMsIGhhY2thdGhvbnMsIGFuZCBSU1ZQcy4nLFxuICAgICAgY29kZTogYGltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEsIERvY3VtZW50LCBNb2RlbCB9IGZyb20gJ21vbmdvb3NlJztcblxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGFnZW5kYT86IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICB0aW1lOiBzdHJpbmc7XG4gIGxvY2F0aW9uOiBzdHJpbmc7XG4gIGlzT25saW5lOiBib29sZWFuO1xuICBjYXRlZ29yeTogJ1dvcmtzaG9wJyB8ICdIYWNrYXRob24nIHwgJ1RlY2ggVGFsaycgfCAnU29jaWFsJyB8ICdQcm9qZWN0IERlbW8nO1xuICBjYXBhY2l0eTogbnVtYmVyO1xuICByc3Zwczogc3RyaW5nW107XG4gIHNwZWFrZXJOYW1lPzogc3RyaW5nO1xuICBzcGVha2VyUm9sZT86IHN0cmluZztcbiAgc3RhdHVzOiAnVXBjb21pbmcnIHwgJ1Bhc3QnIHwgJ0NhbmNlbGxlZCc7XG59XG5cbmNvbnN0IEV2ZW50U2NoZW1hID0gbmV3IFNjaGVtYTxJRXZlbnQ+KFxuICB7XG4gICAgdGl0bGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGRlc2NyaXB0aW9uOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBhZ2VuZGE6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgZGF0ZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgdGltZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgbG9jYXRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGlzT25saW5lOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXG4gICAgY2F0ZWdvcnk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGVudW06IFsnV29ya3Nob3AnLCAnSGFja2F0aG9uJywgJ1RlY2ggVGFsaycsICdTb2NpYWwnLCAnUHJvamVjdCBEZW1vJ10sXG4gICAgICBkZWZhdWx0OiAnV29ya3Nob3AnLFxuICAgIH0sXG4gICAgY2FwYWNpdHk6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiA0MCB9LFxuICAgIHJzdnBzOiBbeyB0eXBlOiBTdHJpbmcgfV0sXG4gICAgc3BlYWtlck5hbWU6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgc3BlYWtlclJvbGU6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgc3RhdHVzOiB7IHR5cGU6IFN0cmluZywgZW51bTogWydVcGNvbWluZycsICdQYXN0JywgJ0NhbmNlbGxlZCddLCBkZWZhdWx0OiAnVXBjb21pbmcnIH0sXG4gIH0sXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XG4pO1xuXG5leHBvcnQgY29uc3QgRXZlbnQ6IE1vZGVsPElFdmVudD4gPVxuICBtb25nb29zZS5tb2RlbHMuRXZlbnQgfHwgbW9uZ29vc2UubW9kZWw8SUV2ZW50PignRXZlbnQnLCBFdmVudFNjaGVtYSk7YCxcbiAgICB9LFxuICAgICdtb2RlbHMvQXBwbGljYXRpb24udHMnOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ01vbmdvb3NlIHNjaGVtYSBmb3IgcmVjcnVpdG1lbnQgZm9ybSBpbnF1aXJpZXMuJyxcbiAgICAgIGNvZGU6IGBpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBEb2N1bWVudCwgTW9kZWwgfSBmcm9tICdtb25nb29zZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcGxpY2F0aW9uIGV4dGVuZHMgRG9jdW1lbnQge1xuICBmdWxsTmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBzdHVkZW50SWQ6IHN0cmluZztcbiAgbWFqb3I6IHN0cmluZztcbiAgeWVhck9mU3R1ZHk6ICdGcmVzaG1hbicgfCAnU29waG9tb3JlJyB8ICdKdW5pb3InIHwgJ1NlbmlvcicgfCAnR3JhZHVhdGUnO1xuICB0cmFja3M6IHN0cmluZ1tdO1xuICBleHBlcmllbmNlTGV2ZWw6ICdCZWdpbm5lcicgfCAnSW50ZXJtZWRpYXRlJyB8ICdBZHZhbmNlZCc7XG4gIG1vdGl2YXRpb246IHN0cmluZztcbiAgcG9ydGZvbGlvVXJsPzogc3RyaW5nO1xuICBzdGF0dXM6ICdQZW5kaW5nJyB8ICdJbnRlcnZpZXcnIHwgJ0FjY2VwdGVkJyB8ICdBcmNoaXZlZCc7XG4gIGFkbWluTm90ZXM/OiBzdHJpbmc7XG59XG5cbmNvbnN0IEFwcGxpY2F0aW9uU2NoZW1hID0gbmV3IFNjaGVtYTxJQXBwbGljYXRpb24+KFxuICB7XG4gICAgZnVsbE5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBzdHVkZW50SWQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIG1ham9yOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICB5ZWFyT2ZTdHVkeToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZW51bTogWydGcmVzaG1hbicsICdTb3Bob21vcmUnLCAnSnVuaW9yJywgJ1NlbmlvcicsICdHcmFkdWF0ZSddLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICB0cmFja3M6IFt7IHR5cGU6IFN0cmluZyB9XSxcbiAgICBleHBlcmllbmNlTGV2ZWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGVudW06IFsnQmVnaW5uZXInLCAnSW50ZXJtZWRpYXRlJywgJ0FkdmFuY2VkJ10sXG4gICAgICBkZWZhdWx0OiAnQmVnaW5uZXInLFxuICAgIH0sXG4gICAgbW90aXZhdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgcG9ydGZvbGlvVXJsOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIHN0YXR1czoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZW51bTogWydQZW5kaW5nJywgJ0ludGVydmlldycsICdBY2NlcHRlZCcsICdBcmNoaXZlZCddLFxuICAgICAgZGVmYXVsdDogJ1BlbmRpbmcnLFxuICAgIH0sXG4gICAgYWRtaW5Ob3RlczogeyB0eXBlOiBTdHJpbmcgfSxcbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cbmV4cG9ydCBjb25zdCBBcHBsaWNhdGlvbjogTW9kZWw8SUFwcGxpY2F0aW9uPiA9XG4gIG1vbmdvb3NlLm1vZGVscy5BcHBsaWNhdGlvbiB8fCBtb25nb29zZS5tb2RlbDxJQXBwbGljYXRpb24+KCdBcHBsaWNhdGlvbicsIEFwcGxpY2F0aW9uU2NoZW1hKTtgLFxuICAgIH0sXG4gICAgJ2FwcC9hcGkvZXZlbnRzL3JvdXRlLnRzJzoge1xuICAgICAgZGVzY3JpcHRpb246ICdOZXh0LmpzIEFwcCBSb3V0ZXIgUm91dGUgSGFuZGxlciBmb3IgRXZlbnRzIENSVUQuJyxcbiAgICAgIGNvZGU6IGBpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gJ0AvbGliL21vbmdvZGInO1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICdAL21vZGVscy9FdmVudCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICBjb25zdCBldmVudHMgPSBhd2FpdCBFdmVudC5maW5kKHt9KS5zb3J0KHsgZGF0ZTogMSB9KTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBldmVudHMgfSk7XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgY29uc3QgbmV3RXZlbnQgPSBhd2FpdCBFdmVudC5jcmVhdGUoYm9keSk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbmV3RXZlbnQgfSwgeyBzdGF0dXM6IDIwMSB9KTtcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNDAwIH0pO1xuICB9XG59YCxcbiAgICB9LFxuICAgICcuZW52LmxvY2FsLmV4YW1wbGUnOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ0Vudmlyb25tZW50IHZhcmlhYmxlcyByZXF1aXJlZCBmb3IgbG9jYWwgTmV4dC5qcyBhbmQgVmVyY2VsLicsXG4gICAgICBjb2RlOiBgIyBNb25nb0RCIEF0bGFzIE0wIENvbm5lY3Rpb24gU3RyaW5nXG4jIFJlcGxhY2UgPHVzZXJuYW1lPiwgPHBhc3N3b3JkPiwgYW5kIDxjbHVzdGVyLXVybD4gd2l0aCB5b3VyIEF0bGFzIGNyZWRlbnRpYWxzXG5NT05HT0RCX1VSST1cIm1vbmdvZGIrc3J2Oi8vY2x1Yl9hZG1pbjo8cGFzc3dvcmQ+QGNsdXN0ZXIwLmFiY2RlLm1vbmdvZGIubmV0L3VuaWNsdWI/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcblxuIyBPcHRpb25hbCBOZXh0QXV0aCAvIEFkbWluIFNlY3JldCBmb3IgUHJvdGVjdGVkIFJvdXRlc1xuTkVYVEFVVEhfU0VDUkVUPVwic3VwZXItc2VjcmV0LXJhbmRvbS1rZXktcmVwbGFjZS1pbi1wcm9kdWN0aW9uXCJcbk5FWFRBVVRIX1VSTD1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiXG5cbiMgQWRtaW4gRGFzaGJvYXJkIFBhc3N3b3JkIChvciBiYXNpYyBhdXRoIHRva2VuKVxuQURNSU5fQVBJX0tFWT1cImFwZXgtc2VjcmV0LWFkbWluLXBhc3MtMjAyNlwiYCxcbiAgICB9LFxuICAgICdwYWNrYWdlLmpzb24nOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ01pbmltYWwgcGFja2FnZS5qc29uIGNvbmZpZ3VyYXRpb24gZm9yIE5leHQuanMgMTQvMTUgQXBwIFJvdXRlciArIE1vbmdvb3NlLicsXG4gICAgICBjb2RlOiBge1xuICBcIm5hbWVcIjogXCJ1bmljbHViLXdlYnNpdGVcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjBcIixcbiAgXCJwcml2YXRlXCI6IHRydWUsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJkZXZcIjogXCJuZXh0IGRldlwiLFxuICAgIFwiYnVpbGRcIjogXCJuZXh0IGJ1aWxkXCIsXG4gICAgXCJzdGFydFwiOiBcIm5leHQgc3RhcnRcIixcbiAgICBcImxpbnRcIjogXCJuZXh0IGxpbnRcIixcbiAgICBcInNlZWRcIjogXCJ0c3ggc2NyaXB0cy9zZWVkLnRzXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwibmV4dFwiOiBcIl4xNS4xLjBcIixcbiAgICBcInJlYWN0XCI6IFwiXjE5LjAuMFwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiXjE5LjAuMFwiLFxuICAgIFwibW9uZ29vc2VcIjogXCJeOC45LjBcIixcbiAgICBcImx1Y2lkZS1yZWFjdFwiOiBcIl4wLjQ2OS4wXCIsXG4gICAgXCJjbHN4XCI6IFwiXjIuMS4xXCIsXG4gICAgXCJ0YWlsd2luZC1tZXJnZVwiOiBcIl4yLjUuNVwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiXjIyLjAuMFwiLFxuICAgIFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE5LjAuMFwiLFxuICAgIFwiQHR5cGVzL3JlYWN0LWRvbVwiOiBcIl4xOS4wLjBcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS43LjBcIixcbiAgICBcInRhaWx3aW5kY3NzXCI6IFwiXjMuNC4xXCIsXG4gICAgXCJwb3N0Y3NzXCI6IFwiXjguNC40OVwiLFxuICAgIFwiYXV0b3ByZWZpeGVyXCI6IFwiXjEwLjQuMjBcIixcbiAgICBcInRzeFwiOiBcIl40LjE5LjJcIlxuICB9XG59YCxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICBhcmlhLW1vZGFsPVwidHJ1ZVwiXG4gICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNTAgYmctbmV1dHJhbC05NTAvNjAgYmFja2Ryb3AtYmx1ci14cyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTMgc206cC02IG92ZXJmbG93LXktYXV0b1wiXG4gICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBtYXgtdy00eGwgdy1mdWxsIG1heC1oLVs5MnZoXSBmbGV4IGZsZXgtY29sIGJvcmRlciBib3JkZXItbmV1dHJhbC0zMDAgc2hhZG93LTJ4bCBvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgID5cbiAgICAgICAgey8qIE1vZGFsIEhlYWRlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTQgYm9yZGVyLWIgYm9yZGVyLW5ldXRyYWwtMjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy1uZXV0cmFsLTUwLzUwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMS41IGJnLW5ldXRyYWwtOTAwIHRleHQtd2hpdGUgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgICA8VGVybWluYWwgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ib2xkIHRleHQtbmV1dHJhbC05NTBcIj5cbiAgICAgICAgICAgICAgICBOZXh0LmpzICsgTW9uZ29EQiAoTTApICsgVmVyY2VsIERlcGxveW1lbnQgQmx1ZXByaW50XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1uZXV0cmFsLTUwMFwiPlxuICAgICAgICAgICAgICAgIFByb2plY3Qgc3RydWN0dXJlLCBwcm9kdWN0aW9uIGNvZGUgdGVtcGxhdGVzLCBhbmQgZGVwbG95bWVudCB3YWxrdGhyb3VnaFxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17b25Eb3dubG9hZFNlZWR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMyBweS0xLjUgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtbmV1dHJhbC04MDAgYmctd2hpdGUgaG92ZXI6YmctbmV1dHJhbC0xMDAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTMwMCByb3VuZGVkLW1kIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJEb3dubG9hZCBjdXJyZW50IGRhdGEgYXMgc2VlZC5qc29uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPERvd25sb2FkIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtZW1lcmFsZC03MDBcIiAvPlxuICAgICAgICAgICAgICA8c3Bhbj5Eb3dubG9hZCBzZWVkLmpzb248L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xLjUgdGV4dC1uZXV0cmFsLTQwMCBob3Zlcjp0ZXh0LW5ldXRyYWwtOTAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogTmF2aWdhdGlvbiBUYWJzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgcHQtMyBib3JkZXItYiBib3JkZXItbmV1dHJhbC0yMDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTYgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LW5ldXRyYWwtNTAwIG92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignc3RydWN0dXJlJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BwYi0zIGJvcmRlci1iLTIgdHJhbnNpdGlvbi1jb2xvcnMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgd2hpdGVzcGFjZS1ub3dyYXAgJHtcbiAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSAnc3RydWN0dXJlJ1xuICAgICAgICAgICAgICAgID8gJ2JvcmRlci1uZXV0cmFsLTkwMCB0ZXh0LW5ldXRyYWwtOTUwIGZvbnQtc2VtaWJvbGQnXG4gICAgICAgICAgICAgICAgOiAnYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOnRleHQtbmV1dHJhbC05MDAnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Rm9sZGVyVHJlZSBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgIDxzcGFuPjEuIFByb2plY3QgU3RydWN0dXJlPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCdjb2RlJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BwYi0zIGJvcmRlci1iLTIgdHJhbnNpdGlvbi1jb2xvcnMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgd2hpdGVzcGFjZS1ub3dyYXAgJHtcbiAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSAnY29kZSdcbiAgICAgICAgICAgICAgICA/ICdib3JkZXItbmV1dHJhbC05MDAgdGV4dC1uZXV0cmFsLTk1MCBmb250LXNlbWlib2xkJ1xuICAgICAgICAgICAgICAgIDogJ2JvcmRlci10cmFuc3BhcmVudCBob3Zlcjp0ZXh0LW5ldXRyYWwtOTAwJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZpbGVDb2RlIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgPHNwYW4+Mi4gQm9pbGVycGxhdGUgQ29kZTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignaW5zdHJ1Y3Rpb25zJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BwYi0zIGJvcmRlci1iLTIgdHJhbnNpdGlvbi1jb2xvcnMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgd2hpdGVzcGFjZS1ub3dyYXAgJHtcbiAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSAnaW5zdHJ1Y3Rpb25zJ1xuICAgICAgICAgICAgICAgID8gJ2JvcmRlci1uZXV0cmFsLTkwMCB0ZXh0LW5ldXRyYWwtOTUwIGZvbnQtc2VtaWJvbGQnXG4gICAgICAgICAgICAgICAgOiAnYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOnRleHQtbmV1dHJhbC05MDAnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8R2xvYmUgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICA8c3Bhbj4zLiBTZXR1cCAmIFZlcmNlbCBTdGVwczwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignYWx0ZXJuYXRpdmVzJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BwYi0zIGJvcmRlci1iLTIgdHJhbnNpdGlvbi1jb2xvcnMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgd2hpdGVzcGFjZS1ub3dyYXAgJHtcbiAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSAnYWx0ZXJuYXRpdmVzJ1xuICAgICAgICAgICAgICAgID8gJ2JvcmRlci1uZXV0cmFsLTkwMCB0ZXh0LW5ldXRyYWwtOTUwIGZvbnQtc2VtaWJvbGQnXG4gICAgICAgICAgICAgICAgOiAnYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOnRleHQtbmV1dHJhbC05MDAnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF0YWJhc2UgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICA8c3Bhbj40LiBSZW5kZXIgJiBTdXBhYmFzZTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIE1vZGFsIEJvZHkgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LXktYXV0byBwLTYgc3BhY2UteS02XCI+XG4gICAgICAgICAgey8qIFRBQiAxOiBTVFJVQ1RVUkUgKi99XG4gICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ3N0cnVjdHVyZScgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtbmV1dHJhbC05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgTmV4dC5qcyAoQXBwIFJvdXRlcikgRGlyZWN0b3J5IEFyY2hpdGVjdHVyZVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1uZXV0cmFsLTUwMCBtdC0wLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgUmVjb21tZW5kZWQgZmlsZSB0cmVlIGZvciBzdHVkZW50IGNsdWIgd2Vic2l0ZXMgZGVwbG95ZWQgb24gVmVyY2VsIHdpdGggTW9uZ29EQiBBdGxhcy5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb3B5VG9DbGlwYm9hcmQocHJvamVjdFRyZWUsICd0cmVlJyl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhzIHB4LTIuNSBweS0xIHRleHQtbmV1dHJhbC03MDAgYmctbmV1dHJhbC0xMDAgaG92ZXI6YmctbmV1dHJhbC0yMDAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTMwMCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y29waWVkS2V5ID09PSAndHJlZScgPyA8Q2hlY2sgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1lbWVyYWxkLTYwMFwiIC8+IDogPENvcHkgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPn1cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntjb3BpZWRLZXkgPT09ICd0cmVlJyA/ICdDb3BpZWQnIDogJ0NvcHkgVHJlZSd9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cImJnLW5ldXRyYWwtOTAwIHRleHQtbmV1dHJhbC0xMDAgcC00IHJvdW5kZWQtbGcgZm9udC1tb25vIHRleHQteHMgb3ZlcmZsb3cteC1hdXRvIGxlYWRpbmctcmVsYXhlZCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtODAwXCI+XG4gICAgICAgICAgICAgICAge3Byb2plY3RUcmVlfVxuICAgICAgICAgICAgICA8L3ByZT5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTQgcHQtMiB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYmctbmV1dHJhbC01MCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTkwMCBibG9jayBmb250LXNlbWlib2xkIG1iLTFcIj5TZXJ2ZXJsZXNzIFJvdXRpbmcgKC9hcHAvYXBpKTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgRWFjaCBBUEkgcm91dGUgYWN0cyBhcyBhbiBpc29sYXRlZCBzZXJ2ZXJsZXNzIGZ1bmN0aW9uIG9uIFZlcmNlbCwgc2NhbGluZyBhdXRvbWF0aWNhbGx5IHdpdGhvdXQgc2VydmVyIGNvc3QuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYmctbmV1dHJhbC01MCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTkwMCBibG9jayBmb250LXNlbWlib2xkIG1iLTFcIj5Db25uZWN0aW9uIFBvb2xpbmcgKC9saWIpPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICBSZXVzZXMgTW9uZ29vc2UgY29ubmVjdGlvbnMgYWNyb3NzIHNlcnZlcmxlc3MgaW52b2tlcyB0byBzdGF5IHNhZmVseSB3aXRoaW4gTW9uZ29EQiBNMCA1MDAtY29ubmVjdGlvbiBsaW1pdC5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBiZy1uZXV0cmFsLTUwIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtOTAwIGJsb2NrIGZvbnQtc2VtaWJvbGQgbWItMVwiPlR5cGUgU2FmZXR5ICgvbW9kZWxzKTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgU3RyaWN0IFR5cGVTY3JpcHQgaW50ZXJmYWNlcyBndWFyYW50ZWUgdmFsaWQgSlNPTiBib2RpZXMgZm9yIGV2ZW50cywgbWVtYmVycywgYW5kIHJlY3J1aXRtZW50IGZvcm1zLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7LyogVEFCIDI6IEJPSUxFUlBMQVRFIENPREUgKi99XG4gICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ2NvZGUnICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGdhcC0yIHBiLTIgYm9yZGVyLWIgYm9yZGVyLW5ldXRyYWwtMjAwXCI+XG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGNvZGVTbmlwcGV0cykubWFwKChmaWxlbmFtZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e2ZpbGVuYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZENvZGVGaWxlKGZpbGVuYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMyBweS0xIHRleHQteHMgZm9udC1tb25vIHJvdW5kZWQtbWQgdHJhbnNpdGlvbi1jb2xvcnMgJHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENvZGVGaWxlID09PSBmaWxlbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctbmV1dHJhbC05MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctbmV1dHJhbC0xMDAgdGV4dC1uZXV0cmFsLTcwMCBob3ZlcjpiZy1uZXV0cmFsLTIwMCdcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtmaWxlbmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1uZXV0cmFsLTYwMCBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAge2NvZGVTbmlwcGV0c1tzZWxlY3RlZENvZGVGaWxlXS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICBjb3B5VG9DbGlwYm9hcmQoXG4gICAgICAgICAgICAgICAgICAgICAgY29kZVNuaXBwZXRzW3NlbGVjdGVkQ29kZUZpbGVdLmNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2RlRmlsZVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHRleHQteHMgcHgtMyBweS0xLjUgdGV4dC1uZXV0cmFsLTcwMCBiZy1uZXV0cmFsLTEwMCBob3ZlcjpiZy1uZXV0cmFsLTIwMCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMzAwIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjb3BpZWRLZXkgPT09IHNlbGVjdGVkQ29kZUZpbGUgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxDaGVjayBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LWVtZXJhbGQtNjAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxDb3B5IGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57Y29waWVkS2V5ID09PSBzZWxlY3RlZENvZGVGaWxlID8gJ0NvcGllZCB0byBDbGlwYm9hcmQnIDogJ0NvcHkgRmlsZSd9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cImJnLW5ldXRyYWwtOTAwIHRleHQtbmV1dHJhbC0xMDAgcC00IHJvdW5kZWQtbGcgZm9udC1tb25vIHRleHQteHMgb3ZlcmZsb3cteC1hdXRvIG1heC1oLVs0MDBweF0gYm9yZGVyIGJvcmRlci1uZXV0cmFsLTgwMFwiPlxuICAgICAgICAgICAgICAgIHtjb2RlU25pcHBldHNbc2VsZWN0ZWRDb2RlRmlsZV0uY29kZX1cbiAgICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgey8qIFRBQiAzOiBTVEVQLUJZLVNURVAgSU5TVFJVQ1RJT05TICovfVxuICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdpbnN0cnVjdGlvbnMnICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IHRleHQteHMgdGV4dC1uZXV0cmFsLTcwMCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgey8qIFN0ZXAgMSAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCByb3VuZGVkLWxnIHNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZm9udC1ib2xkIHRleHQtc20gdGV4dC1uZXV0cmFsLTkwMFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy01IGgtNSByb3VuZGVkLWZ1bGwgYmctbmV1dHJhbC05MDAgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXhzIGZvbnQtbW9ub1wiPjE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5Jbml0aWFsaXplIEdpdEh1YiBSZXBvc2l0b3J5PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgQ3JlYXRlIGEgbmV3IHJlcG9zaXRvcnkgb24gR2l0SHViIChlLmcuLCA8Y29kZSBjbGFzc05hbWU9XCJiZy1uZXV0cmFsLTEwMCBweC0xIHB5LTAuNSByb3VuZGVkIHRleHQtbmV1dHJhbC04MDBcIj55b3VyLW9yZy91bmljbHViLXdlYnNpdGU8L2NvZGU+KS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJiZy1uZXV0cmFsLTkwMCB0ZXh0LW5ldXRyYWwtMTAwIHAtMyByb3VuZGVkIGZvbnQtbW9ubyB0ZXh0LXhzIG92ZXJmbG93LXgtYXV0b1wiPlxue2BnaXQgaW5pdFxuZ2l0IGFkZCAuXG5naXQgY29tbWl0IC1tIFwiSW5pdGlhbCBjb21taXQ6IHVuaXZlcnNpdHkgY2x1YiB3ZWJzaXRlIGJvaWxlcnBsYXRlXCJcbmdpdCBicmFuY2ggLU0gbWFpblxuZ2l0IHJlbW90ZSBhZGQgb3JpZ2luIGh0dHBzOi8vZ2l0aHViLmNvbS95b3VyLXVzZXJuYW1lL3VuaWNsdWItd2Vic2l0ZS5naXRcbmdpdCBwdXNoIC11IG9yaWdpbiBtYWluYH1cbiAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIFN0ZXAgMiAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCByb3VuZGVkLWxnIHNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZm9udC1ib2xkIHRleHQtc20gdGV4dC1uZXV0cmFsLTkwMFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy01IGgtNSByb3VuZGVkLWZ1bGwgYmctbmV1dHJhbC05MDAgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXhzIGZvbnQtbW9ub1wiPjI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5TZXQgVXAgTW9uZ29EQiBBdGxhcyBGcmVlIFRpZXIgKE0wIFNhbmRib3gpPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJsaXN0LWRlY2ltYWwgcGwtNSBzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgICAgPGxpPkdvIHRvIDxzdHJvbmc+bW9uZ29kYi5jb20vY2xvdWQvYXRsYXM8L3N0cm9uZz4gYW5kIGNyZWF0ZSBhIGZyZWUgYWNjb3VudC48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPkNsaWNrIDxzdHJvbmc+QnVpbGQgYSBEYXRhYmFzZTwvc3Ryb25nPiBhbmQgY2hvb3NlIDxzdHJvbmc+TTAgKEZyZWUgRm9yZXZlcik8L3N0cm9uZz4gaW4gQVdTIG9yIEdDUCByZWdpb24gbmVhcmVzdCB0byB5b3VyIGNhbXB1cy48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPkluIDxzdHJvbmc+U2VjdXJpdHkgUXVpY2tzdGFydDwvc3Ryb25nPjogQ3JlYXRlIGEgZGF0YWJhc2UgdXNlciB3aXRoIHVzZXJuYW1lIDxjb2RlIGNsYXNzTmFtZT1cImJnLW5ldXRyYWwtMTAwIHB4LTEgcHktMC41IHJvdW5kZWRcIj5jbHViX2FkbWluPC9jb2RlPiBhbmQgZ2VuZXJhdGUgYSBwYXNzd29yZC48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPkluIDxzdHJvbmc+TmV0d29yayBBY2Nlc3M8L3N0cm9uZz46IEFkZCBJUCBBZGRyZXNzIDxjb2RlIGNsYXNzTmFtZT1cImJnLW5ldXRyYWwtMTAwIHB4LTEgcHktMC41IHJvdW5kZWQgZm9udC1tb25vXCI+MC4wLjAuMC8wPC9jb2RlPiAoQWxsb3cgQWNjZXNzIGZyb20gQW55d2hlcmUpIHNvIFZlcmNlbCBzZXJ2ZXJsZXNzIGZ1bmN0aW9ucyBjYW4gY29ubmVjdC48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPkNsaWNrIDxzdHJvbmc+Q29ubmVjdDwvc3Ryb25nPiAmZ3Q7IDxzdHJvbmc+RHJpdmVyczwvc3Ryb25nPiAmZ3Q7IENvcHkgY29ubmVjdGlvbiBzdHJpbmcgVVJJOlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEgZm9udC1tb25vIHRleHQtWzExcHhdIGJnLW5ldXRyYWwtMTAwIHAtMiByb3VuZGVkIHRleHQtbmV1dHJhbC04MDAgYnJlYWstYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgbW9uZ29kYitzcnY6Ly9jbHViX2FkbWluOiZsdDtwYXNzd29yZCZndDtAY2x1c3RlcjAuYWJjZGUubW9uZ29kYi5uZXQvdW5pY2x1Yj9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBTdGVwIDMgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1sZyBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGZvbnQtYm9sZCB0ZXh0LXNtIHRleHQtbmV1dHJhbC05MDBcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctNSBoLTUgcm91bmRlZC1mdWxsIGJnLW5ldXRyYWwtOTAwIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC14cyBmb250LW1vbm9cIj4zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+RGVwbG95IHRvIFZlcmNlbCAoRnJlZSBIb2JieSBUaWVyKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwibGlzdC1kZWNpbWFsIHBsLTUgc3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxsaT5HbyB0byA8c3Ryb25nPnZlcmNlbC5jb208L3N0cm9uZz4gYW5kIGNsaWNrIDxzdHJvbmc+QWRkIE5ldyBQcm9qZWN0PC9zdHJvbmc+LjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+SW1wb3J0IHlvdXIgR2l0SHViIHJlcG9zaXRvcnkgPGNvZGUgY2xhc3NOYW1lPVwiYmctbmV1dHJhbC0xMDAgcHgtMSBweS0wLjUgcm91bmRlZFwiPnVuaWNsdWItd2Vic2l0ZTwvY29kZT4uPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5VbmRlciA8c3Ryb25nPkVudmlyb25tZW50IFZhcmlhYmxlczwvc3Ryb25nPiwgYWRkOlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEgZm9udC1tb25vIHRleHQtWzExcHhdIGJnLW5ldXRyYWwtMTAwIHAtMiByb3VuZGVkIHRleHQtbmV1dHJhbC04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICBLZXk6IE1PTkdPREJfVVJJPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgVmFsdWU6IG1vbmdvZGIrc3J2Oi8vY2x1Yl9hZG1pbjpZT1VSX1BBU1NXT1JEQGNsdXN0ZXIwLmFiY2RlLm1vbmdvZGIubmV0L3VuaWNsdWI/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5DbGljayA8c3Ryb25nPkRlcGxveTwvc3Ryb25nPi4gVmVyY2VsIGF1dG9tYXRpY2FsbHkgYnVpbGRzIGFuZCBwcm92aWRlcyB5b3VyIGxpdmUgSFRUUFMgZG9tYWluIChlLmcuLCA8Y29kZSBjbGFzc05hbWU9XCJiZy1uZXV0cmFsLTEwMCBweC0xIHB5LTAuNSByb3VuZGVkXCI+dW5pY2x1Yi52ZXJjZWwuYXBwPC9jb2RlPikuPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5FdmVyeSBHaXQgY29tbWl0IHRvIDxjb2RlIGNsYXNzTmFtZT1cImJnLW5ldXRyYWwtMTAwIHB4LTEgcHktMC41IHJvdW5kZWRcIj5tYWluPC9jb2RlPiB3aWxsIGF1dG9tYXRpY2FsbHkgdHJpZ2dlciBpbnN0YW50IENJL0NEIGRlcGxveW1lbnQuPC9saT5cbiAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7LyogVEFCIDQ6IFJFTkRFUiAmIFNVUEFCQVNFIEFMVEVSTkFUSVZFUyAqL31cbiAgICAgICAgICB7YWN0aXZlVGFiID09PSAnYWx0ZXJuYXRpdmVzJyAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNiB0ZXh0LXhzIHRleHQtbmV1dHJhbC03MDAgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgcm91bmRlZC1sZyBzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zbSB0ZXh0LW5ldXRyYWwtOTAwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxHbG9iZSBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtaW5kaWdvLTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkFsdGVybmF0aXZlOiBFeHByZXNzLmpzIEJhY2tlbmQgb24gUmVuZGVyLmNvbTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtWzEwcHhdIHB4LTIgcHktMC41IGJnLW5ldXRyYWwtMTAwIHJvdW5kZWQgdGV4dC1uZXV0cmFsLTYwMFwiPkZyZWUgVGllcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIElmIHlvdSBwcmVmZXIgc2VwYXJhdGluZyB5b3VyIGJhY2tlbmQgQVBJIGZyb20gTmV4dC5qcyBpbnRvIGEgZGVkaWNhdGVkIE5vZGUvRXhwcmVzcyBzZXJ2aWNlOlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwibGlzdC1kZWNpbWFsIHBsLTUgc3BhY2UteS0xXCI+XG4gICAgICAgICAgICAgICAgICA8bGk+Q3JlYXRlIGEgcmVwb3NpdG9yeSB3aXRoIEV4cHJlc3M6IDxjb2RlIGNsYXNzTmFtZT1cImJnLW5ldXRyYWwtMTAwIHB4LTEgcHktMC41IHJvdW5kZWQgZm9udC1tb25vXCI+bnBtIGluaXQgLXkgJmFtcDsmYW1wOyBucG0gaSBleHByZXNzIGNvcnMgbW9uZ29vc2UgZG90ZW52PC9jb2RlPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+Q29ubmVjdCBHaXRIdWIgdG8gPHN0cm9uZz5yZW5kZXIuY29tPC9zdHJvbmc+ICZndDsgQ2xpY2sgPHN0cm9uZz5OZXcgKzwvc3Ryb25nPiAmZ3Q7IDxzdHJvbmc+V2ViIFNlcnZpY2U8L3N0cm9uZz4uPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5TZXQgQnVpbGQgQ29tbWFuZDogPGNvZGUgY2xhc3NOYW1lPVwiYmctbmV1dHJhbC0xMDAgcHgtMSBweS0wLjUgcm91bmRlZCBmb250LW1vbm9cIj5ucG0gaW5zdGFsbDwvY29kZT4gYW5kIFN0YXJ0IENvbW1hbmQ6IDxjb2RlIGNsYXNzTmFtZT1cImJnLW5ldXRyYWwtMTAwIHB4LTEgcHktMC41IHJvdW5kZWQgZm9udC1tb25vXCI+bm9kZSBzZXJ2ZXIuanM8L2NvZGU+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5BZGQgZW52aXJvbm1lbnQgdmFyaWFibGUgPGNvZGUgY2xhc3NOYW1lPVwiYmctbmV1dHJhbC0xMDAgcHgtMSBweS0wLjUgcm91bmRlZCBmb250LW1vbm9cIj5NT05HT0RCX1VSSTwvY29kZT4uPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5SZW5kZXIgcHJvdmlzaW9ucyBhIGZyZWUgVVJMIGxpa2UgPGNvZGUgY2xhc3NOYW1lPVwiYmctbmV1dHJhbC0xMDAgcHgtMSBweS0wLjUgcm91bmRlZCBmb250LW1vbm9cIj5odHRwczovL3VuaWNsdWItYXBpLm9ucmVuZGVyLmNvbTwvY29kZT4uIEluIE5leHQuanMsIHBvaW50IHlvdXIgZmV0Y2ggcmVxdWVzdHMgdG8gdGhpcyBVUkwuPC9saT5cbiAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHJvdW5kZWQtbGcgc3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc20gdGV4dC1uZXV0cmFsLTkwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8RGF0YWJhc2UgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWVtZXJhbGQtNjAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWx0ZXJuYXRpdmU6IFN1cGFiYXNlIChQb3N0Z3JlU1FMICsgUHJpc21hKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtWzEwcHhdIHB4LTIgcHktMC41IGJnLW5ldXRyYWwtMTAwIHJvdW5kZWQgdGV4dC1uZXV0cmFsLTYwMFwiPlJEQk1TIFNRTDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIElmIHlvdSBwcmVmZXIgYSByZWxhdGlvbmFsIGRhdGFiYXNlIHdpdGggU1FMIG92ZXIgTW9uZ29EQjpcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImxpc3QtZGVjaW1hbCBwbC01IHNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICAgICAgPGxpPkdvIHRvIDxzdHJvbmc+c3VwYWJhc2UuY29tPC9zdHJvbmc+LCBjcmVhdGUgYSBwcm9qZWN0IHdpdGggYSBmcmVlIFBvc3RncmVTUUwgZGF0YWJhc2UuPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5JbnN0YWxsIFByaXNtYTogPGNvZGUgY2xhc3NOYW1lPVwiYmctbmV1dHJhbC0xMDAgcHgtMSBweS0wLjUgcm91bmRlZCBmb250LW1vbm9cIj5ucG0gaSBwcmlzbWEgQHByaXNtYS9jbGllbnQ8L2NvZGU+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5Db3B5IHRoZSBTdXBhYmFzZSBjb25uZWN0aW9uIHN0cmluZyB0byB5b3VyIDxjb2RlIGNsYXNzTmFtZT1cImJnLW5ldXRyYWwtMTAwIHB4LTEgcHktMC41IHJvdW5kZWQgZm9udC1tb25vXCI+LmVudi5sb2NhbDwvY29kZT4gYXMgPGNvZGUgY2xhc3NOYW1lPVwiYmctbmV1dHJhbC0xMDAgcHgtMSBweS0wLjUgcm91bmRlZCBmb250LW1vbm9cIj5EQVRBQkFTRV9VUkw8L2NvZGU+LjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+UnVuIDxjb2RlIGNsYXNzTmFtZT1cImJnLW5ldXRyYWwtMTAwIHB4LTEgcHktMC41IHJvdW5kZWQgZm9udC1tb25vXCI+bnB4IHByaXNtYSBkYiBwdXNoPC9jb2RlPiB0byBjcmVhdGUgdGhlIHRhYmxlcy48L2xpPlxuICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIE1vZGFsIEZvb3RlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTQgYm9yZGVyLXQgYm9yZGVyLW5ldXRyYWwtMjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy1uZXV0cmFsLTUwLzUwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbmV1dHJhbC01MDBcIj5cbiAgICAgICAgICAgIENsaWNrIDxzdHJvbmc+RG93bmxvYWQgc2VlZC5qc29uPC9zdHJvbmc+IHRvIHRha2UgYWxsIHNhbXBsZSBkYXRhIGludG8geW91ciBkYXRhYmFzZS5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LW5ldXRyYWwtODAwIGJnLXdoaXRlIGhvdmVyOmJnLW5ldXRyYWwtMTAwIGJvcmRlciBib3JkZXItbmV1dHJhbC0zMDAgcm91bmRlZC1tZCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2xvc2UgQmx1ZXByaW50XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19