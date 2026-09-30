import React from 'react';
import { ArrowRight, Calendar, Sparkles, Compass } from 'lucide-react';
import { ClubInfo } from '../types';

interface HeroSectionProps {
  clubInfo: ClubInfo;
  onExploreEvents: () => void;
  onJoinClick: () => void;
  onLearnMore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  clubInfo,
  onExploreEvents,
  onJoinClick,
  onLearnMore,
}) => {
  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-neutral-200 overflow-hidden bg-gradient-to-b from-stone-50/60 to-[#fafaf9]">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/10 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Affiliation kicker metadata */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 rounded-full text-xs font-medium text-neutral-700 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-neutral-900">{clubInfo.faculty}</span>
          <span aria-hidden="true" className="text-neutral-400">·</span>
          <span>{clubInfo.university}</span>
        </div>

        {/* Hero split: Text content on left, visual card on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 xl:col-span-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.12] [text-wrap:balance]">
              Khám phá đỉnh cao khoa học, <br className="hidden sm:inline" />
              kiến tạo kỹ thuật cùng{' '}
              <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-neutral-900 bg-clip-text text-transparent">
                CLB NES
              </span>
              .
            </h1>

            <p className="mt-6 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
              Kế thừa và phát triển tinh thần khoa học của{' '}
              <strong className="text-neutral-900 font-semibold">Newton</strong>,{' '}
              <strong className="text-neutral-900 font-semibold">Einstein</strong> và{' '}
              <strong className="text-neutral-900 font-semibold">Schrödinger</strong>. 
              NES là mái nhà chung dành cho sinh viên Khoa Vật lý – Vật lý kỹ thuật thỏa niềm đam mê nghiên cứu học thuật và rèn luyện kỹ năng chế tạo điện tử thực tiễn.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onJoinClick}
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Nộp đơn gia nhập CLB</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreEvents}
                className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-lg transition-colors shadow-2xs cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-blue-700" />
                <span>Lịch sự kiện & Workshop</span>
              </button>

              <button
                onClick={onLearnMore}
                className="flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
              >
                <Compass className="w-4 h-4 text-neutral-500" />
                <span>Về ý nghĩa tên gọi NES</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Club Emblem */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end">
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 shadow-2xl max-w-sm w-full text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none" />

              <div className="relative aspect-square w-full rounded-xl bg-neutral-900 overflow-hidden border border-neutral-800/80 flex items-center justify-center p-4">
                <img
                  src="/nes-logo.svg"
                  alt="NES Club Logo"
                  className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-102 transition-transform duration-300"
                />
              </div>

              <div className="mt-5 space-y-3">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-neutral-100 tracking-tight">
                      CÂU LẠC BỘ HỌC THUẬT NES
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Active
                    </span>
                  </div>
                  <div className="text-xs text-neutral-400 mt-1">
                    Khoa Vật lý – Vật lý Kỹ thuật, HCMUS
                  </div>
                </div>

                {/* 3 Scientists mini badge */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-neutral-800 text-center">
                  <div className="bg-neutral-900/90 p-2 rounded-lg border border-neutral-800">
                    <div className="text-sm font-bold text-amber-400 font-mono">N</div>
                    <div className="text-[10px] text-neutral-300 font-medium">Newton</div>
                    <div className="text-[9px] text-neutral-500 mt-0.5">Cơ học</div>
                  </div>
                  <div className="bg-neutral-900/90 p-2 rounded-lg border border-neutral-800">
                    <div className="text-sm font-bold text-blue-400 font-mono">E</div>
                    <div className="text-[10px] text-neutral-300 font-medium">Einstein</div>
                    <div className="text-[9px] text-neutral-500 mt-0.5">Tương đối</div>
                  </div>
                  <div className="bg-neutral-900/90 p-2 rounded-lg border border-neutral-800">
                    <div className="text-sm font-bold text-purple-400 font-mono">S</div>
                    <div className="text-[10px] text-neutral-300 font-medium">Schrödinger</div>
                    <div className="text-[9px] text-neutral-500 mt-0.5">Lượng tử</div>
                  </div>
                </div>

                <div className="text-[11px] text-neutral-400 pt-2 flex items-center justify-between text-center">
                  <span className="text-neutral-500">2 Mảng hoạt động:</span>
                  <span className="text-neutral-200 font-medium">Học thuật &amp; Điện tử</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantitative Metrics Bar */}
        <div className="mt-14 pt-8 border-t border-neutral-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-2xs">
            <div className="text-3xl font-extrabold font-mono text-neutral-950 tabular-nums">
              {clubInfo.stats.activeMembers}+
            </div>
            <div className="text-xs text-neutral-600 font-medium mt-1">
              Thành viên &amp; Cộng tác viên
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-2xs">
            <div className="text-3xl font-extrabold font-mono text-neutral-950 tabular-nums">
              {clubInfo.stats.eventsHosted}+
            </div>
            <div className="text-xs text-neutral-600 font-medium mt-1">
              Hội thảo &amp; Seminar tổ chức
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-2xs">
            <div className="text-3xl font-extrabold font-mono text-neutral-950 tabular-nums">
              {clubInfo.stats.projectsBuilt}+
            </div>
            <div className="text-xs text-neutral-600 font-medium mt-1">
              Mô hình &amp; Dự án điện tử chế tạo
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-2xs">
            <div className="text-3xl font-extrabold font-mono text-neutral-950 tabular-nums">
              {clubInfo.stats.alumniNetwork}+
            </div>
            <div className="text-xs text-neutral-600 font-medium mt-1">
              Mạng lưới Cựu thành viên &amp; Cố vấn
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
