import React, { useState, useMemo } from 'react';
import { Search, Mail, ExternalLink, Sparkles } from 'lucide-react';
import { ClubMember } from '../types';

interface MembersSectionProps {
  members: ClubMember[];
  onJoinClick: () => void;
}

export const MembersSection: React.FC<MembersSectionProps> = ({ members, onJoinClick }) => {
  const [selectedTrack, setSelectedTrack] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const tracks: { key: string; label: string }[] = [
    { key: 'All', label: 'Tất cả' },
    { key: 'Học thuật', label: 'Mảng Học thuật' },
    { key: 'Điện tử', label: 'Mảng Điện tử' },
    { key: 'Truyền thông & Sự kiện', label: 'Truyền thông & Sự kiện' },
    { key: 'Alumni', label: 'Cựu thành viên' },
  ];

  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const matchesTrack =
        selectedTrack === 'All'
          ? true
          : selectedTrack === 'Alumni'
          ? member.status === 'Alumni' || member.role.includes('Cựu') || member.role.includes('Cố vấn')
          : member.track === selectedTrack;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        member.name.toLowerCase().includes(q) ||
        member.role.toLowerCase().includes(q) ||
        member.bio.toLowerCase().includes(q) ||
        member.skills.some((s) => s.toLowerCase().includes(q));

      return matchesTrack && matchesSearch;
    });
  }, [members, selectedTrack, searchQuery]);

  return (
    <section id="members" className="py-16 md:py-24 border-b border-neutral-200 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              03. Đội ngũ &amp; Ban điều hành
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
              Ban Chủ nhiệm &amp; Thành viên nòng cốt
            </h2>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base max-w-2xl">
              Những sinh viên nhiệt huyết, tài năng thuộc Khoa Vật lý – Vật lý kỹ thuật trường ĐH Khoa học Tự nhiên đang trực tiếp điều hành và dẫn dắt các hoạt động của CLB NES.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onJoinClick}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-all shadow-xs whitespace-nowrap cursor-pointer"
            >
              Ứng tuyển gia nhập đội ngũ
            </button>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-xl border border-neutral-200 shadow-2xs">
            {tracks.map((track) => (
              <button
                key={track.key}
                onClick={() => setSelectedTrack(track.key)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedTrack === track.key
                    ? 'bg-neutral-900 text-white shadow-xs font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                {track.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên, vai trò, kỹ năng..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800 text-neutral-900 shadow-2xs"
            />
          </div>
        </div>

        {/* Member Grid */}
        {filteredMembers.length === 0 ? (
          <div className="text-center py-12 bg-white border border-neutral-200 rounded-xl">
            <p className="text-sm text-neutral-500">Không tìm thấy thành viên phù hợp với từ khóa.</p>
            <button
              onClick={() => {
                setSelectedTrack('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-neutral-900 underline font-medium hover:text-neutral-700 cursor-pointer"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white border border-neutral-200 rounded-xl p-6 flex flex-col justify-between hover:shadow-md hover:border-neutral-300 transition-all duration-200"
              >
                <div>
                  {/* Top: Avatar & Name */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-13 h-13 rounded-xl bg-gradient-to-br ${member.avatarColor} text-white flex items-center justify-center font-bold text-base shrink-0 shadow-sm`}
                    >
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .slice(-2)
                        .join('')}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-neutral-950 leading-tight">
                        {member.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-neutral-500 mt-1 flex-wrap">
                        <span className="font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded text-[11px]">
                          {member.role}
                        </span>
                        <span aria-hidden="true" className="text-neutral-300">·</span>
                        <span className="text-neutral-600 font-medium">{member.track}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div>
                  {/* Skills / Specializations */}
                  <div className="text-xs text-neutral-500 mb-4 pt-3 border-t border-neutral-100">
                    <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2 font-mono">
                      Chuyên môn nòng cốt
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded text-[11px] font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer / Contact */}
                  <div className="flex items-center justify-between pt-3 border-t border-neutral-100 text-neutral-500 text-xs">
                    <span className="font-mono text-[11px] text-neutral-400">
                      Niên khóa: {member.graduationYear}
                    </span>

                    <div className="flex items-center gap-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="p-1.5 hover:text-neutral-950 hover:bg-neutral-100 rounded transition-colors"
                        title={member.email}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.facebook.com/CLBNES"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                        title="Fanpage CLB NES"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
