import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  FolderTree,
  FileCode,
  Globe,
  Database,
  GitBranch,
  Terminal,
  ExternalLink,
  Download,
} from 'lucide-react';

interface NextJsBlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadSeed: () => void;
}

export const NextJsBlueprintModal: React.FC<NextJsBlueprintModalProps> = ({
  isOpen,
  onClose,
  onDownloadSeed,
}) => {
  const [activeTab, setActiveTab] = useState<'structure' | 'code' | 'instructions' | 'alternatives'>('structure');
  const [selectedCodeFile, setSelectedCodeFile] = useState<string>('lib/mongodb.ts');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
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

  const codeSnippets: { [key: string]: { description: string; code: string } } = {
    'lib/mongodb.ts': {
      description: 'Cached MongoDB / Mongoose connection handler designed specifically for Vercel serverless execution without connection leak.',
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
}`,
    },
    'models/Member.ts': {
      description: 'Mongoose model for student club members, tracks, roles, and status.',
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
  mongoose.models.Member || mongoose.model<IMember>('Member', MemberSchema);`,
    },
    'models/Event.ts': {
      description: 'Mongoose model for workshops, hackathons, and RSVPs.',
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
  mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);`,
    },
    'models/Application.ts': {
      description: 'Mongoose schema for recruitment form inquiries.',
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
  mongoose.models.Application || mongoose.model<IApplication>('Application', ApplicationSchema);`,
    },
    'app/api/events/route.ts': {
      description: 'Next.js App Router Route Handler for Events CRUD.',
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
}`,
    },
    '.env.local.example': {
      description: 'Environment variables required for local Next.js and Vercel.',
      code: `# MongoDB Atlas M0 Connection String
# Replace <username>, <password>, and <cluster-url> with your Atlas credentials
MONGODB_URI="mongodb+srv://club_admin:<password>@cluster0.abcde.mongodb.net/uniclub?retryWrites=true&w=majority"

# Optional NextAuth / Admin Secret for Protected Routes
NEXTAUTH_SECRET="super-secret-random-key-replace-in-production"
NEXTAUTH_URL="http://localhost:3000"

# Admin Dashboard Password (or basic auth token)
ADMIN_API_KEY="apex-secret-admin-pass-2026"`,
    },
    'package.json': {
      description: 'Minimal package.json configuration for Next.js 14/15 App Router + Mongoose.',
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
}`,
    },
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-neutral-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-4xl w-full max-h-[92vh] flex flex-col border border-neutral-300 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/50">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-neutral-900 text-white rounded-md">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-neutral-950">
                Next.js + MongoDB (M0) + Vercel Deployment Blueprint
              </h2>
              <p className="text-xs text-neutral-500">
                Project structure, production code templates, and deployment walkthrough
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onDownloadSeed}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-md transition-colors"
              title="Download current data as seed.json"
            >
              <Download className="w-3.5 h-3.5 text-emerald-700" />
              <span>Download seed.json</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 pt-3 border-b border-neutral-200 flex items-center gap-6 text-xs font-medium text-neutral-500 overflow-x-auto">
          <button
            onClick={() => setActiveTab('structure')}
            className={`pb-3 border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'structure'
                ? 'border-neutral-900 text-neutral-950 font-semibold'
                : 'border-transparent hover:text-neutral-900'
            }`}
          >
            <FolderTree className="w-4 h-4" />
            <span>1. Project Structure</span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`pb-3 border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'code'
                ? 'border-neutral-900 text-neutral-950 font-semibold'
                : 'border-transparent hover:text-neutral-900'
            }`}
          >
            <FileCode className="w-4 h-4" />
            <span>2. Boilerplate Code</span>
          </button>

          <button
            onClick={() => setActiveTab('instructions')}
            className={`pb-3 border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'instructions'
                ? 'border-neutral-900 text-neutral-950 font-semibold'
                : 'border-transparent hover:text-neutral-900'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>3. Setup & Vercel Steps</span>
          </button>

          <button
            onClick={() => setActiveTab('alternatives')}
            className={`pb-3 border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'alternatives'
                ? 'border-neutral-900 text-neutral-950 font-semibold'
                : 'border-transparent hover:text-neutral-900'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>4. Render & Supabase</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: STRUCTURE */}
          {activeTab === 'structure' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-neutral-900">
                    Next.js (App Router) Directory Architecture
                  </h3>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Recommended file tree for student club websites deployed on Vercel with MongoDB Atlas.
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(projectTree, 'tree')}
                  className="flex items-center gap-1 text-xs px-2.5 py-1 text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded"
                >
                  {copiedKey === 'tree' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'tree' ? 'Copied' : 'Copy Tree'}</span>
                </button>
              </div>

              <pre className="bg-neutral-900 text-neutral-100 p-4 rounded-lg font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800">
                {projectTree}
              </pre>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-md">
                  <strong className="text-neutral-900 block font-semibold mb-1">Serverless Routing (/app/api)</strong>
                  Each API route acts as an isolated serverless function on Vercel, scaling automatically without server cost.
                </div>
                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-md">
                  <strong className="text-neutral-900 block font-semibold mb-1">Connection Pooling (/lib)</strong>
                  Reuses Mongoose connections across serverless invokes to stay safely within MongoDB M0 500-connection limit.
                </div>
                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-md">
                  <strong className="text-neutral-900 block font-semibold mb-1">Type Safety (/models)</strong>
                  Strict TypeScript interfaces guarantee valid JSON bodies for events, members, and recruitment forms.
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: BOILERPLATE CODE */}
          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-neutral-200">
                {Object.keys(codeSnippets).map((filename) => (
                  <button
                    key={filename}
                    onClick={() => setSelectedCodeFile(filename)}
                    className={`px-3 py-1 text-xs font-mono rounded-md transition-colors ${
                      selectedCodeFile === filename
                        ? 'bg-neutral-900 text-white font-semibold'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {filename}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-600 font-medium">
                  {codeSnippets[selectedCodeFile].description}
                </span>

                <button
                  onClick={() =>
                    copyToClipboard(
                      codeSnippets[selectedCodeFile].code,
                      selectedCodeFile
                    )
                  }
                  className="flex items-center gap-1.5 text-xs px-3 py-1.5 text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-md"
                >
                  {copiedKey === selectedCodeFile ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copiedKey === selectedCodeFile ? 'Copied to Clipboard' : 'Copy File'}</span>
                </button>
              </div>

              <pre className="bg-neutral-900 text-neutral-100 p-4 rounded-lg font-mono text-xs overflow-x-auto max-h-[400px] border border-neutral-800">
                {codeSnippets[selectedCodeFile].code}
              </pre>
            </div>
          )}

          {/* TAB 3: STEP-BY-STEP INSTRUCTIONS */}
          {activeTab === 'instructions' && (
            <div className="space-y-6 text-xs text-neutral-700 leading-relaxed">
              {/* Step 1 */}
              <div className="p-4 border border-neutral-200 rounded-lg space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-neutral-900">
                  <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-mono">1</span>
                  <span>Initialize GitHub Repository</span>
                </div>
                <p>
                  Create a new repository on GitHub (e.g., <code className="bg-neutral-100 px-1 py-0.5 rounded text-neutral-800">your-org/uniclub-website</code>).
                </p>
                <pre className="bg-neutral-900 text-neutral-100 p-3 rounded font-mono text-xs overflow-x-auto">
{`git init
git add .
git commit -m "Initial commit: university club website boilerplate"
git branch -M main
git remote add origin https://github.com/your-username/uniclub-website.git
git push -u origin main`}
                </pre>
              </div>

              {/* Step 2 */}
              <div className="p-4 border border-neutral-200 rounded-lg space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-neutral-900">
                  <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-mono">2</span>
                  <span>Set Up MongoDB Atlas Free Tier (M0 Sandbox)</span>
                </div>
                <ol className="list-decimal pl-5 space-y-1.5">
                  <li>Go to <strong>mongodb.com/cloud/atlas</strong> and create a free account.</li>
                  <li>Click <strong>Build a Database</strong> and choose <strong>M0 (Free Forever)</strong> in AWS or GCP region nearest to your campus.</li>
                  <li>In <strong>Security Quickstart</strong>: Create a database user with username <code className="bg-neutral-100 px-1 py-0.5 rounded">club_admin</code> and generate a password.</li>
                  <li>In <strong>Network Access</strong>: Add IP Address <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono">0.0.0.0/0</code> (Allow Access from Anywhere) so Vercel serverless functions can connect.</li>
                  <li>Click <strong>Connect</strong> &gt; <strong>Drivers</strong> &gt; Copy connection string URI:
                    <div className="mt-1 font-mono text-[11px] bg-neutral-100 p-2 rounded text-neutral-800 break-all">
                      mongodb+srv://club_admin:&lt;password&gt;@cluster0.abcde.mongodb.net/uniclub?retryWrites=true&w=majority
                    </div>
                  </li>
                </ol>
              </div>

              {/* Step 3 */}
              <div className="p-4 border border-neutral-200 rounded-lg space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-neutral-900">
                  <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-mono">3</span>
                  <span>Deploy to Vercel (Free Hobby Tier)</span>
                </div>
                <ol className="list-decimal pl-5 space-y-1.5">
                  <li>Go to <strong>vercel.com</strong> and click <strong>Add New Project</strong>.</li>
                  <li>Import your GitHub repository <code className="bg-neutral-100 px-1 py-0.5 rounded">uniclub-website</code>.</li>
                  <li>Under <strong>Environment Variables</strong>, add:
                    <div className="mt-1 font-mono text-[11px] bg-neutral-100 p-2 rounded text-neutral-800">
                      Key: MONGODB_URI<br />
                      Value: mongodb+srv://club_admin:YOUR_PASSWORD@cluster0.abcde.mongodb.net/uniclub?retryWrites=true&w=majority
                    </div>
                  </li>
                  <li>Click <strong>Deploy</strong>. Vercel automatically builds and provides your live HTTPS domain (e.g., <code className="bg-neutral-100 px-1 py-0.5 rounded">uniclub.vercel.app</code>).</li>
                  <li>Every Git commit to <code className="bg-neutral-100 px-1 py-0.5 rounded">main</code> will automatically trigger instant CI/CD deployment.</li>
                </ol>
              </div>
            </div>
          )}

          {/* TAB 4: RENDER & SUPABASE ALTERNATIVES */}
          {activeTab === 'alternatives' && (
            <div className="space-y-6 text-xs text-neutral-700 leading-relaxed">
              <div className="p-4 border border-neutral-200 rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm text-neutral-900 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-indigo-600" />
                    <span>Alternative: Express.js Backend on Render.com</span>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 bg-neutral-100 rounded text-neutral-600">Free Tier</span>
                </div>
                <p>
                  If you prefer separating your backend API from Next.js into a dedicated Node/Express service:
                </p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Create a repository with Express: <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono">npm init -y &amp;&amp; npm i express cors mongoose dotenv</code></li>
                  <li>Connect GitHub to <strong>render.com</strong> &gt; Click <strong>New +</strong> &gt; <strong>Web Service</strong>.</li>
                  <li>Set Build Command: <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono">npm install</code> and Start Command: <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono">node server.js</code></li>
                  <li>Add environment variable <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono">MONGODB_URI</code>.</li>
                  <li>Render provisions a free URL like <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono">https://uniclub-api.onrender.com</code>. In Next.js, point your fetch requests to this URL.</li>
                </ol>
              </div>

              <div className="p-4 border border-neutral-200 rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm text-neutral-900 flex items-center gap-2">
                    <Database className="w-4 h-4 text-emerald-600" />
                    <span>Alternative: Supabase (PostgreSQL + Prisma)</span>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 bg-neutral-100 rounded text-neutral-600">RDBMS SQL</span>
                </div>
                <p>
                  If you prefer a relational database with SQL over MongoDB:
                </p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Go to <strong>supabase.com</strong>, create a project with a free PostgreSQL database.</li>
                  <li>Install Prisma: <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono">npm i prisma @prisma/client</code></li>
                  <li>Copy the Supabase connection string to your <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono">.env.local</code> as <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono">DATABASE_URL</code>.</li>
                  <li>Run <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono">npx prisma db push</code> to create the tables.</li>
                </ol>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-neutral-200 flex items-center justify-between bg-neutral-50/50">
          <div className="text-xs text-neutral-500">
            Click <strong>Download seed.json</strong> to take all sample data into your database.
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-md transition-colors"
          >
            Close Blueprint
          </button>
        </div>
      </div>
    </div>
  );
};
