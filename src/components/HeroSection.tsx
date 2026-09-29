import React from 'react';
import { ArrowRight, Terminal, Calendar, Award } from 'lucide-react';
import { ClubInfo } from '../types';
import { Language, translations } from '../data/translations';

interface HeroSectionProps {
  clubInfo: ClubInfo;
  language: Language;
  onExploreEvents: () => void;
  onJoinClick: () => void;
  onOpenBlueprint: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  clubInfo,
  language,
  onExploreEvents,
  onJoinClick,
  onOpenBlueprint,
}) => {
  const t = translations[language];

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle kicker text metadata with university & badge */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-neutral-500 mb-4 tracking-wide uppercase">
          <span className="font-semibold text-neutral-800">
            {language === 'vi' ? clubInfo.universityVi || clubInfo.university : clubInfo.university}
          </span>
          <span aria-hidden="true">·</span>
          <span>
            {language === 'vi' ? 'Khoa Công nghệ Thông tin & Điện tử' : 'Faculty of Information Technology'}
          </span>
          <span aria-hidden="true">·</span>
          <span className="font-mono">Est. {clubInfo.establishedYear}</span>
        </div>

        {/* Hero split: Text content on left, metallic NES emblem presentation on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.1] [text-wrap:balance]">
              {t.hero.headline}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
              {t.hero.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onJoinClick}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors shadow-xs"
              >
                <span>{t.hero.applyBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreEvents}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-md transition-colors"
              >
                <Calendar className="w-4 h-4 text-neutral-600" />
                <span>{t.hero.eventsBtn}</span>
              </button>

              <button
                onClick={onOpenBlueprint}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-mono text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-md transition-colors"
              >
                <Terminal className="w-4 h-4 text-emerald-700" />
                <span>{t.hero.blueprintBtn}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Club Emblem */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 shadow-xl max-w-xs w-full text-white space-y-4">
              <div className="relative aspect-square w-full rounded-lg bg-neutral-900 overflow-hidden border border-neutral-800 flex items-center justify-center p-3">
                <img
                  src="/nes-logo.svg"
                  alt="NES Club Logo"
                  className="w-full h-full object-contain filter drop-shadow-md"
                />
              </div>

              <div>
                <div className="text-base font-bold text-neutral-100">
                  {language === 'vi' ? clubInfo.shortNameVi : clubInfo.shortName}
                </div>
                <div className="text-xs text-neutral-400 font-mono mt-0.5">
                  {language === 'vi' ? clubInfo.nameVi : clubInfo.name}
                </div>
                <div className="text-[11px] text-neutral-400 pt-2 border-t border-neutral-800/80 mt-2 flex items-center justify-between">
                  <span>Trường ĐH KHTN (HCMUS)</span>
                  <span className="font-mono text-emerald-400">● Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantitative Rigor Metrics */}
        <div className="mt-14 pt-8 border-t border-neutral-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-neutral-950 tabular-nums">
              {clubInfo.stats.activeMembers}+
            </div>
            <div className="text-xs text-neutral-500 mt-1">{t.hero.stats.activeMembers}</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-neutral-950 tabular-nums">
              {clubInfo.stats.eventsHosted}
            </div>
            <div className="text-xs text-neutral-500 mt-1">{t.hero.stats.eventsHosted}</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-neutral-950 tabular-nums">
              {clubInfo.stats.projectsBuilt}
            </div>
            <div className="text-xs text-neutral-500 mt-1">{t.hero.stats.projectsBuilt}</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-neutral-950 tabular-nums">
              {clubInfo.stats.alumniNetwork}+
            </div>
            <div className="text-xs text-neutral-500 mt-1">{t.hero.stats.alumniNetwork}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
