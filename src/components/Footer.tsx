import React from 'react';
import { Github, MessageSquare, Mail, Terminal } from 'lucide-react';
import { ClubInfo } from '../types';
import { Language, translations } from '../data/translations';

interface FooterProps {
  clubInfo: ClubInfo;
  language: Language;
  onNavClick: (section: string) => void;
  onOpenBlueprint: () => void;
  onOpenGitExport: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  clubInfo,
  language,
  onNavClick,
  onOpenBlueprint,
  onOpenGitExport,
}) => {
  const t = translations[language];

  return (
    <footer className="bg-white border-t border-neutral-200 pt-12 pb-16 text-neutral-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-neutral-200">
          {/* Col 1: Wordmark & Affiliation */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-neutral-950 p-0.5 border border-neutral-800 shrink-0">
                <img src="/nes-logo.svg" alt="NES Logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-base font-bold text-neutral-950">
                {language === 'vi' ? clubInfo.nameVi : clubInfo.name} ({language === 'vi' ? clubInfo.shortNameVi : clubInfo.shortName})
              </div>
            </div>
            <p className="text-neutral-500 max-w-md leading-relaxed text-xs">
              {t.footer.affiliated} {t.footer.address}
            </p>
            <div className="flex items-center gap-3 pt-2 text-neutral-500">
              <a
                href={clubInfo.githubOrg}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900 transition-colors flex items-center gap-1 font-mono"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Org</span>
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={clubInfo.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900 transition-colors flex items-center gap-1 font-mono"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discord</span>
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={`mailto:${clubInfo.emailContact}`}
                className="hover:text-neutral-900 transition-colors flex items-center gap-1 font-mono"
              >
                <Mail className="w-4 h-4" />
                <span>{clubInfo.emailContact}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div className="font-semibold text-neutral-900 uppercase tracking-wider text-[11px] mb-3 font-mono">
              {language === 'vi' ? 'Liên kết nhanh' : 'Explore'}
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavClick('about')}
                  className="hover:text-neutral-950 transition-colors"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('members')}
                  className="hover:text-neutral-950 transition-colors"
                >
                  {t.nav.members}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('events')}
                  className="hover:text-neutral-950 transition-colors"
                >
                  {t.nav.events}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('blog')}
                  className="hover:text-neutral-950 transition-colors"
                >
                  {t.nav.blog}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('join')}
                  className="hover:text-neutral-950 transition-colors font-medium text-neutral-900"
                >
                  {t.nav.join}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Tech Stack & Dev Resources */}
          <div>
            <div className="font-semibold text-neutral-900 uppercase tracking-wider text-[11px] mb-3 font-mono">
              Developer Stack
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenGitExport}
                  className="hover:text-neutral-950 transition-colors flex items-center gap-1 font-mono text-[11px] font-semibold text-neutral-900"
                >
                  <Github className="w-3 h-3 text-neutral-900" />
                  <span>{t.nav.exportGit}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBlueprint}
                  className="hover:text-neutral-950 transition-colors flex items-center gap-1 font-mono text-[11px]"
                >
                  <Terminal className="w-3 h-3 text-emerald-700" />
                  <span>Next.js + MongoDB Guide</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('dashboard')}
                  className="hover:text-neutral-950 transition-colors"
                >
                  {t.nav.dashboard}
                </button>
              </li>
              <li>
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950 transition-colors"
                >
                  Vercel Serverless
                </a>
              </li>
              <li>
                <a
                  href="https://www.mongodb.com/cloud/atlas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950 transition-colors"
                >
                  MongoDB Atlas M0 Free
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            {t.footer.license}
          </div>
          <div className="flex items-center gap-4">
            <span>HCMUS Computer Science Guild</span>
            <span aria-hidden="true">·</span>
            <span>Next.js & MongoDB Atlas M0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
