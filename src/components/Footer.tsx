import React from 'react';
import { Mail, ExternalLink, ArrowUp, Facebook } from 'lucide-react';
import { ClubInfo } from '../types';

interface FooterProps {
  clubInfo: ClubInfo;
  onNavClick: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ clubInfo, onNavClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 text-xs border-t border-neutral-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800/80">
          {/* Col 1: Wordmark & Affiliation */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-900 p-0.5 border border-neutral-700 shrink-0 flex items-center justify-center">
                <img src="/nes-logo.svg" alt="NES Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-base font-bold text-white tracking-tight">
                  CÂU LẠC BỘ HỌC THUẬT NES
                </div>
                <div className="text-xs text-neutral-400">
                  {clubInfo.faculty} · Trường ĐH Khoa học Tự nhiên, ĐHQG-HCM
                </div>
              </div>
            </div>

            <p className="text-neutral-400 max-w-md leading-relaxed text-xs">
              Đại diện cho sự kế thừa và phát triển tinh thần ba nhà khoa học lỗi lạc: 
              <strong className="text-neutral-200"> Isaac Newton</strong>, 
              <strong className="text-neutral-200"> Albert Einstein</strong> và 
              <strong className="text-neutral-200"> Erwin Schrödinger</strong>. 
              Mái nhà chung nuôi dưỡng khát khao chinh phục tri thức của sinh viên Vật lý.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-neutral-300">
              <a
                href={clubInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-950/80 hover:bg-blue-900 border border-blue-800/50 rounded-lg text-blue-200 text-xs font-medium transition-colors"
              >
                <Facebook className="w-3.5 h-3.5 text-blue-400" />
                <span>Fanpage CLB NES</span>
                <ExternalLink className="w-3 h-3 text-blue-400" />
              </a>

              <a
                href={`mailto:${clubInfo.emailContact}`}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-300 text-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                <span>{clubInfo.emailContact}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] font-mono">
              Điều hướng nhanh
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button
                  onClick={() => onNavClick('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Về NES &amp; Ý nghĩa tên gọi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('tracks')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Hai mảng hoạt động
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('events')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sự kiện &amp; Workshop
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('members')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Ban Chủ nhiệm
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('blog')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Bài viết học thuật
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('join')}
                  className="hover:text-amber-400 transition-colors cursor-pointer font-semibold text-neutral-200 text-left"
                >
                  Ứng tuyển thành viên →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Affiliation and Address */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] font-mono">
              Trụ sở &amp; Liên hệ
            </div>
            <p className="text-neutral-400 leading-relaxed">
              <strong className="text-neutral-300 block mb-1">Cơ sở 1:</strong>
              227 Nguyễn Văn Cừ, Phường 4, Quận 5, TP. Hồ Chí Minh
            </p>
            <p className="text-neutral-400 leading-relaxed">
              <strong className="text-neutral-300 block mb-1">Cơ sở 2:</strong>
              Khu phố 6, Phường Linh Trung, TP. Thủ Đức, TP. Hồ Chí Minh
            </p>
            <p className="text-neutral-400 leading-relaxed">
              <strong className="text-neutral-300 block mb-1">Đơn vị quản lý:</strong>
              Đoàn - Hội Khoa Vật lý – Vật lý Kỹ thuật, Trường ĐH KHTN
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            Bản quyền © 2018 - 2026 Câu lạc bộ Học thuật NES. Khoa Vật lý – Vật lý kỹ thuật, Trường ĐH Khoa học Tự nhiên, ĐHQG-HCM.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Về đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
