import React, { useState, useMemo } from 'react';
import { Search, Github, Linkedin, Mail } from 'lucide-react';
import { ClubMember, Track } from '../types';
import { Language, translations } from '../data/translations';

interface MembersSectionProps {
  members: ClubMember[];
  language: Language;
  onManageMembers: () => void;
  onJoinClick: () => void;
}

export const MembersSection: React.FC<MembersSectionProps> = ({
  members,
  language,
  onManageMembers,
  onJoinClick,
}) => {
  const [selectedTrack, setSelectedTrack] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const t = translations[language];

  const tracks: { key: string; label: string }[] = [
    { key: 'All', label: t.members.all },
    { key: 'Software & AI', label: 'Software & AI' },
    { key: 'Product & UI/UX', label: 'Product & UI/UX' },
    { key: 'Hardware & Robotics', label: 'Hardware & Robotics' },
    { key: 'Community & Ops', label: language === 'vi' ? 'Học thuật & Ops' : 'Academic & Ops' },
    { key: 'Alumni', label: language === 'vi' ? 'Cựu thành viên' : 'Alumni' },
  ];

  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const matchesTrack =
        selectedTrack === 'All'
          ? true
          : selectedTrack === 'Alumni'
          ? member.status === 'Alumni' || member.role === 'Alumni'
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
    <section id="members" className="py-16 md:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 font-mono">
              {t.members.sectionNum}
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
              {t.members.title}
            </h2>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base">
              {t.members.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onManageMembers}
              className="px-3.5 py-2 text-xs font-medium text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-md transition-colors whitespace-nowrap"
            >
              {t.members.crudBtn}
            </button>
            <button
              onClick={onJoinClick}
              className="px-3.5 py-2 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors whitespace-nowrap"
            >
              {t.members.joinBtn}
            </button>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100/90 rounded-lg border border-neutral-200">
            {tracks.map((track) => (
              <button
                key={track.key}
                onClick={() => setSelectedTrack(track.key)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedTrack === track.key
                    ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {track.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.members.searchPlaceholder}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-800 text-neutral-900"
            />
          </div>
        </div>

        {/* Member Grid */}
        {filteredMembers.length === 0 ? (
          <div className="text-center py-12 bg-white border border-neutral-200 rounded-lg">
            <p className="text-sm text-neutral-500">{t.members.noResult}</p>
            <button
              onClick={() => {
                setSelectedTrack('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-neutral-900 underline hover:text-neutral-700"
            >
              {t.members.resetFilter}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white border border-neutral-200 rounded-lg p-6 flex flex-col justify-between hover:border-neutral-300 transition-colors"
              >
                <div>
                  {/* Top: Avatar & Name */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${member.avatarColor} text-white flex items-center justify-center font-bold text-base shrink-0 shadow-xs`}
                    >
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-neutral-950 leading-tight">
                        {member.name}
                      </h3>
                      {/* Zero-Pill Clean Unboxed Metadata */}
                      <div className="flex items-center gap-1.5 text-xs text-neutral-500 mt-1 flex-wrap">
                        <span className="font-medium text-neutral-700">{member.role}</span>
                        <span aria-hidden="true">·</span>
                        <span>{member.track}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono tabular-nums">{t.members.classOf} {member.graduationYear}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div>
                  {/* Skills: Clean unboxed list */}
                  <div className="text-xs text-neutral-500 mb-4 pt-3 border-t border-neutral-100">
                    <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">
                      {t.members.focusAreas}
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-neutral-700">
                      {member.skills.map((skill, idx) => (
                        <span key={skill} className="font-mono text-xs">
                          {skill}
                          {idx < member.skills.length - 1 ? ' ·' : ''}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links / Contact */}
                  <div className="flex items-center justify-between pt-3 border-t border-neutral-100 text-neutral-500 text-xs">
                    <span className="font-mono text-[11px] text-neutral-400">
                      {member.status === 'Active' ? t.members.statusActive : member.status}
                    </span>

                    <div className="flex items-center gap-3">
                      {member.githubUrl && (
                        <a
                          href={member.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-neutral-900 transition-colors"
                          title="GitHub Profile"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {member.linkedinUrl && (
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-neutral-900 transition-colors"
                          title="LinkedIn Profile"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={`mailto:${member.email}`}
                        className="hover:text-neutral-900 transition-colors"
                        title={member.email}
                      >
                        <Mail className="w-4 h-4" />
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
