import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'Về NES & Ý nghĩa' },
    { id: 'tracks', label: 'Mảng hoạt động' },
    { id: 'events', label: 'Sự kiện & Workshop' },
    { id: 'members', label: 'Ban Chủ nhiệm' },
    { id: 'blog', label: 'Bài viết học thuật' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#fafaf9]/95 backdrop-blur-md shadow-xs border-b border-neutral-200'
          : 'bg-[#fafaf9]/80 backdrop-blur-sm border-b border-neutral-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo and Club Brand */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
        >
          {/* Metallic NES Logo Emblem */}
          <div className="w-10 h-10 rounded-lg bg-neutral-950 p-0.5 border border-neutral-800 shadow-xs flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
            <img
              src="/nes-logo.svg"
              alt="Logo CLB Học thuật NES HCMUS"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-base font-extrabold tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
                CLB HỌC THUẬT NES
              </span>
              <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 bg-blue-100 text-blue-900 rounded">
                HCMUS
              </span>
            </div>
            <span className="text-[11px] text-neutral-500 font-medium line-clamp-1">
              Khoa Vật lý – Vật lý Kỹ thuật, Trường ĐH KHTN
            </span>
          </div>
        </button>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-medium text-neutral-600">
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
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action: Apply CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('join')}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-xs hover:shadow-md transition-all whitespace-nowrap cursor-pointer"
          >
            <span>Gia nhập NES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => handleNavClick('join')}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors"
          >
            Gia nhập
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-neutral-700 hover:text-neutral-950 rounded-md"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-[#fafaf9] px-4 pt-3 pb-5 space-y-1 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeSection === item.id
                  ? 'bg-neutral-200 text-neutral-950 font-semibold'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-neutral-200 mt-2">
            <button
              onClick={() => handleNavClick('join')}
              className="w-full py-2.5 text-xs font-semibold text-white bg-neutral-900 rounded-md text-center flex items-center justify-center gap-1.5"
            >
              <span>Ứng tuyển gia nhập CLB NES</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
