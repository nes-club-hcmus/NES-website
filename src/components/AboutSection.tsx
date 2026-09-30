import React from 'react';
import {
  Atom,
  Cpu,
  BookOpen,
  Users2,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Lightbulb,
} from 'lucide-react';
import { ClubInfo } from '../types';

interface AboutSectionProps {
  clubInfo: ClubInfo;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ clubInfo }) => {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            01. Giới thiệu tổng quan
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
            Về Câu lạc bộ Học thuật NES
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            {clubInfo.mission}
          </p>
        </div>

        {/* Origin & Meaning of the name NES: Newton - Einstein - Schrödinger */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 rounded-2xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest px-2.5 py-1 bg-amber-400/10 rounded-md border border-amber-400/20">
                Nguồn gốc &amp; Triết lý
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100 mt-3">
                {clubInfo.historyAndMeaning.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mt-3">
                {clubInfo.historyAndMeaning.description}
              </p>
            </div>

            {/* 3 Scientists Bento Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {clubInfo.historyAndMeaning.figures.map((fig) => {
                const colorMap = {
                  N: {
                    badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
                    border: 'hover:border-amber-500/40',
                    icon: 'text-amber-400',
                  },
                  E: {
                    badge: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
                    border: 'hover:border-blue-500/40',
                    icon: 'text-blue-400',
                  },
                  S: {
                    badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
                    border: 'hover:border-purple-500/40',
                    icon: 'text-purple-400',
                  },
                };
                const style = colorMap[fig.letter];

                return (
                  <div
                    key={fig.letter}
                    className={`bg-neutral-800/80 border border-neutral-700/80 rounded-xl p-6 transition-all duration-200 ${style.border}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-black text-2xl border ${style.badge}`}
                      >
                        {fig.letter}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400">
                        {fig.field}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2">
                      {fig.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {fig.contribution}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2 Core Activity Pillars: Academic & Electronics */}
        <div id="tracks" className="mb-20 scroll-mt-20">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              02. Hai mảng hoạt động nòng cốt
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950">
              Gắn kết lý thuyết chuyên sâu cùng kỹ năng thực tiễn
            </h3>
            <p className="text-neutral-600 text-sm sm:text-base mt-2">
              NES tập trung đẩy mạnh 2 mảng mũi nhọn giúp sinh viên vừa rèn luyện tư duy học thuật sắc bén, vừa mở rộng kỹ năng kỹ thuật để sẵn sàng trở thành các nhà nghiên cứu, kỹ sư tương lai.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {clubInfo.twoPillars.map((pillar, idx) => {
              const isAcademic = idx === 0;
              const Icon = isAcademic ? Atom : Cpu;

              return (
                <div
                  key={pillar.slug}
                  className="bg-neutral-50/70 border border-neutral-200/90 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isAcademic ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        isAcademic ? 'bg-blue-50 text-blue-800 border border-blue-200' : 'bg-amber-50 text-amber-800 border border-amber-200'
                      }`}>
                        {pillar.badge}
                      </span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-bold text-neutral-950 mb-3">
                      {pillar.title}
                    </h4>

                    <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-neutral-200">
                      <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono mb-2">
                        Hoạt động tiêu biểu:
                      </div>
                      {pillar.activities.map((act) => (
                        <div key={act} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isAcademic ? 'text-blue-600' : 'text-amber-600'
                          }`} />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* A United Family & Dynamic Community */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-6 sm:p-10 text-white mb-16 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-mono font-semibold text-blue-200 uppercase tracking-widest px-2.5 py-1 bg-white/10 rounded-md">
                Ngôi nhà chung NES
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Nơi gắn kết, phát triển và lưu giữ kỷ niệm sinh viên
              </h3>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                Bên cạnh những giờ sinh hoạt học thuật và phòng máy, NES còn là một đại gia đình đoàn kết. Mỗi thành viên luôn được khuyến khích đóng góp, chia sẻ ý tưởng và hoàn thiện bản thân trong môi trường hỗ trợ lẫn nhau. Những buổi teambuilding, dã ngoại, sinh nhật và các hoạt động ngoại khóa giúp các thế hệ gắn bó bền chặt.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-3 justify-center text-xs">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="font-semibold text-white text-sm mb-1">Môi trường mở</div>
                <div className="text-blue-100">Khuyến khích sinh viên tự do đặt câu hỏi, thực hành sáng tạo.</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="font-semibold text-white text-sm mb-1">Hỗ trợ học tập</div>
                <div className="text-blue-100">Các anh chị khóa trên luôn sẵn sàng kèm cặp, giải đáp học phần.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Presence & Meeting Information */}
        <div className="p-6 sm:p-8 bg-neutral-50 border border-neutral-200 rounded-xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-200 flex items-center justify-center shrink-0 text-neutral-800">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  Địa điểm hoạt động
                </div>
                <div className="text-sm font-semibold text-neutral-900 mt-0.5">
                  Phòng A315, Cơ sở 2 (Linh Trung)
                </div>
                <div className="text-xs text-neutral-600 mt-0.5">
                  Khu phố 6, P. Linh Trung, TP. Thủ Đức, TP.HCM
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-200 flex items-center justify-center shrink-0 text-neutral-800">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  Lịch sinh hoạt
                </div>
                <div className="text-sm font-semibold text-neutral-900 mt-0.5">
                  Định kỳ hàng tuần
                </div>
                <div className="text-xs text-neutral-600 mt-0.5">
                  Các buổi seminar chuyên đề &amp; thực hành phòng lab
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-200 flex items-center justify-center shrink-0 text-neutral-800">
                <Users2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  Cộng đồng thành viên
                </div>
                <div className="text-sm font-semibold text-neutral-900 mt-0.5">
                  Chào đón tân sinh viên
                </div>
                <div className="text-xs text-neutral-600 mt-0.5">
                  Miễn phí 100%, tuyển chọn công bằng dựa trên đam mê
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
