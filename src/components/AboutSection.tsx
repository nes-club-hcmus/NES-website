import React from 'react';
import { Code2, Palette, Cpu, Users2, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { ClubInfo } from '../types';
import { Language, translations } from '../data/translations';

interface AboutSectionProps {
  clubInfo: ClubInfo;
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ clubInfo, language }) => {
  const t = translations[language];

  const icons = [Code2, Palette, Cpu, Users2];

  return (
    <section id="about" className="py-16 md:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 font-mono">
            {t.about.sectionNum}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            {language === 'vi' ? clubInfo.missionVi || clubInfo.mission : clubInfo.mission}
          </p>
        </div>

        {/* 4 Tracks Bento Grid */}
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4 font-mono">
            {t.about.tracksTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.about.tracks.map((track, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={track.title}
                  className="p-6 bg-white border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-md bg-neutral-100 flex items-center justify-center text-neutral-800">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-neutral-900">
                        {track.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                    {track.desc}
                  </p>
                  <div className="text-xs font-mono text-neutral-500 pt-3 border-t border-neutral-100">
                    {track.tools}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Meeting Times & Operational Presence */}
        <div className="p-6 sm:p-8 bg-neutral-100/80 border border-neutral-200 rounded-lg mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-neutral-700 mt-0.5 shrink-0" />
              <div>
                <div className="text-xs font-semibold text-neutral-500 uppercase">{t.about.hq}</div>
                <div className="text-sm font-medium text-neutral-900 mt-0.5">{clubInfo.roomNumber}</div>
                <div className="text-xs text-neutral-600 mt-0.5">{t.about.hqDesc}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-neutral-700 mt-0.5 shrink-0" />
              <div>
                <div className="text-xs font-semibold text-neutral-500 uppercase">{t.about.schedule}</div>
                <div className="text-sm font-medium text-neutral-900 mt-0.5">{t.about.scheduleDesc}</div>
                <div className="text-xs text-neutral-600 mt-0.5">Seminar & training phòng máy</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-neutral-700 mt-0.5 shrink-0" />
              <div>
                <div className="text-xs font-semibold text-neutral-500 uppercase">{t.about.policy}</div>
                <div className="text-sm font-medium text-neutral-900 mt-0.5">{t.about.policyDesc}</div>
                <div className="text-xs text-neutral-600 mt-0.5">Thuộc Trường ĐH KHTN ĐHQG-HCM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
