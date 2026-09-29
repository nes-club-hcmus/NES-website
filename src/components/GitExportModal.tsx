import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Github,
  Terminal,
  FolderArchive,
  Download,
  ExternalLink,
  ChevronRight,
  Package,
} from 'lucide-react';

interface GitExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadZip: () => void;
}

export const GitExportModal: React.FC<GitExportModalProps> = ({
  isOpen,
  onClose,
  onDownloadZip,
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const gitCommands = `# 1. Create a new directory and initialize git
mkdir uniclub-website
cd uniclub-website
git init

# 2. Extract or copy the exported project files into this directory
# (e.g., unzip uniclub-project-export.zip)

# 3. Stage and commit your files
git add .
git commit -m "feat: initial commit for university club portal"

# 4. Link to your GitHub repository (replace with your repo URL)
git branch -M main
git remote add origin https://github.com/your-username/uniclub-website.git
git push -u origin main`;

  const installCommands = `# Install the required dependencies
npm install

# Start local development server
npm run dev`;

  const filesIncluded = [
    { path: 'src/App.tsx', desc: 'Main interactive application controller & state' },
    { path: 'src/components/Navbar.tsx', desc: 'Clean header navigation with notifications' },
    { path: 'src/components/HeroSection.tsx', desc: 'Hero banner, quantitative metrics & calls to action' },
    { path: 'src/components/AboutSection.tsx', desc: '4 Club tracks, headquarters & weekly meetup details' },
    { path: 'src/components/MembersSection.tsx', desc: 'Member directory with live search and track filtering' },
    { path: 'src/components/EventsSection.tsx', desc: 'Workshops, hackathons, and interactive RSVP system' },
    { path: 'src/components/BlogSection.tsx', desc: 'Technical publications & markdown reader modal' },
    { path: 'src/components/JoinFormSection.tsx', desc: 'Student recruitment & onboarding application form' },
    { path: 'src/components/AdminDashboard.tsx', desc: 'CRUD console for members, events, articles & apps' },
    { path: 'src/components/NextJsBlueprintModal.tsx', desc: 'Next.js App Router & MongoDB M0 blueprint modal' },
    { path: 'src/types/index.ts', desc: 'TypeScript data contracts & interface definitions' },
    { path: 'src/data/initialData.ts', desc: 'Seed database with preloaded realistic club records' },
    { path: 'src/services/storageService.ts', desc: 'Local persistence & MongoDB seed exporter' },
    { path: 'package.json & tsconfig.json', desc: 'Project configuration and dependencies' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-neutral-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-3xl w-full max-h-[92vh] flex flex-col border border-neutral-300 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/50">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-neutral-900 text-white rounded-md">
              <Github className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-neutral-950">
                Push This Design to Your GitHub Project
              </h2>
              <p className="text-xs text-neutral-500">
                Export all code files, components, and assets directly to your local Git repository
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Button: One-click export download */}
        <div className="p-6 bg-neutral-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <FolderArchive className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm font-bold">1-Click Full Project Export</h3>
            </div>
            <p className="text-xs text-neutral-300 mt-1 max-w-md">
              Download a ready-to-run bundle containing all source files, components, styles, types, and database seed.
            </p>
          </div>
          <button
            onClick={onDownloadZip}
            className="px-4 py-2.5 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-md shadow-xs transition-colors flex items-center gap-2 shrink-0"
          >
            <Download className="w-4 h-4 text-emerald-700" />
            <span>Download Project Bundle (.zip)</span>
          </button>
        </div>

        {/* Step-by-step Tabs / Flow */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Step 1: Create GitHub Repo */}
          <div className="border border-neutral-200 rounded-lg p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 font-bold text-sm text-neutral-950">
                <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-mono">
                  1
                </span>
                <span>Create a new repository on GitHub</span>
              </div>
              <a
                href="https://github.com/new"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-700 hover:text-neutral-950 underline flex items-center gap-1"
              >
                <span>github.com/new</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Name your repository (e.g. <code className="bg-neutral-100 px-1 py-0.5 rounded text-neutral-800 font-mono">uniclub-website</code>). You can keep it Public or Private. Do not initialize with a README if you are pushing an existing codebase.
            </p>
          </div>

          {/* Step 2: Unzip and Initialize Git */}
          <div className="border border-neutral-200 rounded-lg p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 font-bold text-sm text-neutral-950">
                <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-mono">
                  2
                </span>
                <span>Initialize Git & Push in Your Terminal</span>
              </div>
              <button
                onClick={() => copyToClipboard(gitCommands, 'git')}
                className="flex items-center gap-1 text-xs px-2.5 py-1 text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded"
              >
                {copiedKey === 'git' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span>{copiedKey === 'git' ? 'Copied' : 'Copy Commands'}</span>
              </button>
            </div>
            <pre className="bg-neutral-900 text-neutral-100 p-4 rounded-lg font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800">
              {gitCommands}
            </pre>
          </div>

          {/* Step 3: Run Locally or Deploy to Vercel */}
          <div className="border border-neutral-200 rounded-lg p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 font-bold text-sm text-neutral-950">
                <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-mono">
                  3
                </span>
                <span>Run Locally & Deploy to Vercel</span>
              </div>
              <button
                onClick={() => copyToClipboard(installCommands, 'install')}
                className="flex items-center gap-1 text-xs px-2.5 py-1 text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded"
              >
                {copiedKey === 'install' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span>{copiedKey === 'install' ? 'Copied' : 'Copy Commands'}</span>
              </button>
            </div>
            <pre className="bg-neutral-900 text-neutral-100 p-4 rounded-lg font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800">
              {installCommands}
            </pre>
            <div className="p-3 bg-neutral-50 rounded-md border border-neutral-200 text-xs text-neutral-600 leading-relaxed">
              <strong>Vercel 1-Click Deployment:</strong> Once pushed to GitHub, go to{' '}
              <a
                href="https://vercel.com/new"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 underline font-medium"
              >
                vercel.com/new
              </a>
              , select your repository, and click <strong>Deploy</strong>. Vercel automatically detects the build scripts and gives you a free production URL with automatic HTTPS and CI/CD.
            </div>
          </div>

          {/* File Manifest */}
          <div className="border border-neutral-200 rounded-lg p-5 space-y-3">
            <div className="flex items-center gap-2 font-bold text-sm text-neutral-950">
              <Package className="w-4 h-4 text-neutral-600" />
              <span>All Included Files In Export</span>
            </div>
            <div className="divide-y divide-neutral-100 text-xs max-h-48 overflow-y-auto pr-2">
              {filesIncluded.map((file) => (
                <div key={file.path} className="py-2 flex items-center justify-between">
                  <span className="font-mono text-neutral-900 font-semibold">{file.path}</span>
                  <span className="text-neutral-500 text-[11px]">{file.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-200 flex items-center justify-between bg-neutral-50/50">
          <div className="text-xs text-neutral-500">
            Open-source under MIT License · Ready for React / Next.js
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-md transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
