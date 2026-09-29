import React, { useState } from 'react';
import { Menu, X, Terminal, ExternalLink, Github, Globe } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenBlueprint: () => void;
  onOpenGitExport: () => void;
  pendingApplicationsCount: number;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  onOpenBlueprint,
  onOpenGitExport,
  pendingApplicationsCount,
  language,
  onLanguageChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'members', label: t.nav.members },
    { id: 'events', label: t.nav.events },
    { id: 'blog', label: t.nav.blog },
    { id: 'join', label: t.nav.join },
    {
      id: 'dashboard',
      label: t.nav.dashboard,
      badge: pendingApplicationsCount > 0 ? pendingApplicationsCount : undefined,
    },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fafaf9]/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Logo and wordmark */}
        <button
          onClick={() => handleNavClick('about')}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
        >
          {/* Real metallic logo emblem */}
          <div className="w-9 h-9 rounded-md bg-neutral-950 p-0.5 border border-neutral-700 shadow-xs flex items-center justify-center shrink-0 overflow-hidden">
            <img
              src="/nes-logo.svg"
              alt="NES HCMUS Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-base font-extrabold tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
                {language === 'vi' ? t.club.shortName : t.club.shortName}
              </span>
              <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 bg-neutral-200 text-neutral-800 rounded">
                HCMUS
              </span>
            </div>
            <span className="text-[11px] text-neutral-500 font-medium line-clamp-1">
              {language === 'vi' ? t.club.longName : t.club.longName}
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-medium text-neutral-600">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 transition-colors hover:text-neutral-950 focus:outline-none ${
                  isActive ? 'text-neutral-950 font-semibold' : 'text-neutral-600'
                }`}
              >
                <span className="whitespace-nowrap">{item.label}</span>
                {item.badge !== undefined && (
                  <span className="ml-1.5 text-xs font-mono px-1.5 py-0.2 bg-neutral-900 text-white rounded text-[10px]">
                    {item.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions + Language Switcher */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Language Switcher Pill */}
          <div className="flex items-center p-0.5 bg-neutral-100 rounded-md border border-neutral-200 text-xs font-mono">
            <button
              onClick={() => onLanguageChange('vi')}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'vi'
                  ? 'bg-white text-neutral-950 font-bold shadow-2xs'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
              title="Tiếng Việt (Vietnamese)"
            >
              🇻🇳 VI
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'en'
                  ? 'bg-white text-neutral-950 font-bold shadow-2xs'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
              title="English"
            >
              🇬🇧 EN
            </button>
          </div>

          <button
            onClick={onOpenGitExport}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-md transition-colors whitespace-nowrap shadow-2xs"
            title="Download code and push to your own Git/GitHub project"
          >
            <Github className="w-3.5 h-3.5" />
            <span>{t.nav.exportGit}</span>
          </button>

          <button
            onClick={onOpenBlueprint}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-md transition-colors whitespace-nowrap"
            title="Next.js + MongoDB + Vercel Blueprint"
          >
            <Terminal className="w-3.5 h-3.5 text-neutral-600" />
            <span>Next.js</span>
          </button>

          <button
            onClick={() => handleNavClick('join')}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md shadow-xs transition-colors whitespace-nowrap"
          >
            {t.nav.applyNow}
          </button>
        </div>

        {/* Mobile menu toggle & quick language */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <div className="flex items-center p-0.5 bg-neutral-100 rounded border border-neutral-200 text-[11px] font-mono">
            <button
              onClick={() => onLanguageChange('vi')}
              className={`px-1.5 py-0.5 rounded ${
                language === 'vi' ? 'bg-white text-neutral-950 font-bold' : 'text-neutral-500'
              }`}
            >
              VI
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-1.5 py-0.5 rounded ${
                language === 'en' ? 'bg-white text-neutral-950 font-bold' : 'text-neutral-500'
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-neutral-700 hover:text-neutral-950 rounded-md"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-[#fafaf9] px-4 pt-3 pb-5 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md flex items-center justify-between ${
                activeSection === item.id
                  ? 'bg-neutral-200 text-neutral-950 font-semibold'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              <span>{item.label}</span>
              {item.badge !== undefined && (
                <span className="text-xs font-mono px-1.5 py-0.5 bg-neutral-900 text-white rounded text-[10px]">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
          <div className="pt-2 border-t border-neutral-200 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenGitExport();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-neutral-900 bg-white border border-neutral-300 rounded-md"
            >
              <Github className="w-4 h-4" />
              {t.nav.exportGit}
            </button>
            <button
              onClick={() => {
                onOpenBlueprint();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-neutral-800 bg-neutral-100 border border-neutral-300 rounded-md"
            >
              <Terminal className="w-4 h-4" />
              {t.nav.blueprint}
            </button>
            <button
              onClick={() => handleNavClick('join')}
              className="w-full py-2 text-xs font-medium text-white bg-neutral-900 rounded-md text-center"
            >
              {t.nav.applyNow}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
