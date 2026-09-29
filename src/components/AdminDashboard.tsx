import React, { useState } from 'react';
import {
  Users,
  Calendar,
  BookOpen,
  FileText,
  Plus,
  Trash2,
  Edit2,
  CheckCircle,
  XCircle,
  Download,
  RotateCcw,
  Search,
  ExternalLink,
  UserCheck,
  Shield,
  Layers,
  ArrowRight,
} from 'lucide-react';
import {
  ClubMember,
  ClubEvent,
  BlogPost,
  MembershipApplication,
  MemberRole,
  Track,
  MemberStatus,
  EventCategory,
  EventStatus,
  BlogCategory,
  ApplicationStatus,
} from '../types';

import { Language, translations } from '../data/translations';

interface AdminDashboardProps {
  members: ClubMember[];
  events: ClubEvent[];
  posts: BlogPost[];
  applications: MembershipApplication[];
  language: Language;
  onAddMember: (member: Omit<ClubMember, 'id' | 'joinedDate'>) => void;
  onUpdateMember: (id: string, updates: Partial<ClubMember>) => void;
  onDeleteMember: (id: string) => void;
  onAddEvent: (event: Omit<ClubEvent, 'id' | 'rsvps'>) => void;
  onUpdateEvent: (id: string, updates: Partial<ClubEvent>) => void;
  onDeleteEvent: (id: string) => void;
  onAddPost: (post: Omit<BlogPost, 'id' | 'likes' | 'publishedAt'>) => void;
  onUpdatePost: (id: string, updates: Partial<BlogPost>) => void;
  onDeletePost: (id: string) => void;
  onUpdateApplicationStatus: (id: string, status: ApplicationStatus, notes?: string) => void;
  onDeleteApplication: (id: string) => void;
  onExportDatabaseSeed: () => void;
  onResetDefaults: () => void;
  onOpenBlueprint: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  members,
  events,
  posts,
  applications,
  language,
  onAddMember,
  onUpdateMember,
  onDeleteMember,
  onAddEvent,
  onUpdateEvent,
  onDeleteEvent,
  onAddPost,
  onUpdatePost,
  onDeletePost,
  onUpdateApplicationStatus,
  onDeleteApplication,
  onExportDatabaseSeed,
  onResetDefaults,
  onOpenBlueprint,
}) => {
  const [activeTab, setActiveTab] = useState<'members' | 'events' | 'posts' | 'applications' | 'export'>('members');
  const t = translations[language];

  // Member Modal State
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<ClubMember | null>(null);
  const [memberFormData, setMemberFormData] = useState({
    name: '',
    role: 'Core Member' as MemberRole,
    track: 'Software & AI' as Track,
    email: '',
    studentId: '',
    graduationYear: 2028,
    bio: '',
    skills: '',
    githubUrl: '',
    linkedinUrl: '',
    status: 'Active' as MemberStatus,
  });

  // Event Modal State
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<ClubEvent | null>(null);
  const [eventFormData, setEventFormData] = useState({
    title: '',
    description: '',
    agenda: '',
    date: new Date().toISOString().split('T')[0],
    time: '18:00 - 20:00',
    location: 'Turing Hall, Room 314',
    isOnline: false,
    category: 'Workshop' as EventCategory,
    capacity: 40,
    speakerName: '',
    speakerRole: '',
    status: 'Upcoming' as EventStatus,
  });

  // Post Modal State
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [postFormData, setPostFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    authorName: 'Apex Team',
    authorRole: 'Contributor',
    category: 'Tutorial' as BlogCategory,
    readTimeMinutes: 5,
    isPublished: true,
  });

  // Search & Filter State
  const [memberSearch, setMemberSearch] = useState('');
  const [memberFilterRole, setMemberFilterRole] = useState<string>('All');
  const [appFilterStatus, setAppFilterStatus] = useState<string>('All');

  // Member Form Handlers
  const handleOpenAddMember = () => {
    setEditingMember(null);
    setMemberFormData({
      name: '',
      role: 'Core Member',
      track: 'Software & AI',
      email: '',
      studentId: '',
      graduationYear: 2028,
      bio: '',
      skills: 'TypeScript, React, Git',
      githubUrl: '',
      linkedinUrl: '',
      status: 'Active',
    });
    setIsMemberModalOpen(true);
  };

  const handleOpenEditMember = (member: ClubMember) => {
    setEditingMember(member);
    setMemberFormData({
      name: member.name,
      role: member.role,
      track: member.track,
      email: member.email,
      studentId: member.studentId || '',
      graduationYear: member.graduationYear,
      bio: member.bio,
      skills: member.skills.join(', '),
      githubUrl: member.githubUrl || '',
      linkedinUrl: member.linkedinUrl || '',
      status: member.status,
    });
    setIsMemberModalOpen(true);
  };

  const handleSaveMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!memberFormData.name || !memberFormData.email) return;

    const skillsArray = memberFormData.skills
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    if (editingMember) {
      onUpdateMember(editingMember.id, {
        name: memberFormData.name,
        role: memberFormData.role,
        track: memberFormData.track,
        email: memberFormData.email,
        studentId: memberFormData.studentId,
        graduationYear: Number(memberFormData.graduationYear),
        bio: memberFormData.bio,
        skills: skillsArray,
        githubUrl: memberFormData.githubUrl,
        linkedinUrl: memberFormData.linkedinUrl,
        status: memberFormData.status,
      });
    } else {
      const colors = [
        'from-amber-600 to-amber-800',
        'from-blue-600 to-indigo-800',
        'from-emerald-600 to-teal-800',
        'from-purple-600 to-indigo-800',
        'from-stone-600 to-stone-800',
        'from-rose-600 to-pink-800',
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      onAddMember({
        name: memberFormData.name,
        role: memberFormData.role,
        track: memberFormData.track,
        email: memberFormData.email,
        studentId: memberFormData.studentId,
        graduationYear: Number(memberFormData.graduationYear),
        bio: memberFormData.bio,
        skills: skillsArray,
        githubUrl: memberFormData.githubUrl,
        linkedinUrl: memberFormData.linkedinUrl,
        status: memberFormData.status,
        avatarColor: randomColor,
      });
    }
    setIsMemberModalOpen(false);
  };

  // Event Form Handlers
  const handleOpenAddEvent = () => {
    setEditingEvent(null);
    setEventFormData({
      title: '',
      description: '',
      agenda: '',
      date: new Date().toISOString().split('T')[0],
      time: '18:00 - 20:00',
      location: 'Turing Hall, Room 314',
      isOnline: false,
      category: 'Workshop',
      capacity: 40,
      speakerName: '',
      speakerRole: '',
      status: 'Upcoming',
    });
    setIsEventModalOpen(true);
  };

  const handleOpenEditEvent = (ev: ClubEvent) => {
    setEditingEvent(ev);
    setEventFormData({
      title: ev.title,
      description: ev.description,
      agenda: ev.agenda || '',
      date: ev.date,
      time: ev.time,
      location: ev.location,
      isOnline: ev.isOnline,
      category: ev.category,
      capacity: ev.capacity,
      speakerName: ev.speakerName || '',
      speakerRole: ev.speakerRole || '',
      status: ev.status,
    });
    setIsEventModalOpen(true);
  };

  const handleSaveEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventFormData.title || !eventFormData.date) return;

    if (editingEvent) {
      onUpdateEvent(editingEvent.id, {
        ...eventFormData,
        capacity: Number(eventFormData.capacity),
      });
    } else {
      onAddEvent({
        ...eventFormData,
        capacity: Number(eventFormData.capacity),
      });
    }
    setIsEventModalOpen(false);
  };

  // Post Form Handlers
  const handleOpenAddPost = () => {
    setEditingPost(null);
    setPostFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      authorName: 'Apex Team',
      authorRole: 'Core Contributor',
      category: 'Tutorial',
      readTimeMinutes: 5,
      isPublished: true,
    });
    setIsPostModalOpen(true);
  };

  const handleOpenEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setPostFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      authorName: post.authorName,
      authorRole: post.authorRole,
      category: post.category,
      readTimeMinutes: post.readTimeMinutes,
      isPublished: post.isPublished,
    });
    setIsPostModalOpen(true);
  };

  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postFormData.title || !postFormData.content) return;

    const slug =
      postFormData.slug.trim() ||
      postFormData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

    if (editingPost) {
      onUpdatePost(editingPost.id, {
        ...postFormData,
        slug,
        readTimeMinutes: Number(postFormData.readTimeMinutes),
      });
    } else {
      onAddPost({
        ...postFormData,
        slug,
        readTimeMinutes: Number(postFormData.readTimeMinutes),
      });
    }
    setIsPostModalOpen(false);
  };

  // Convert application to member
  const handleConvertAppToMember = (app: MembershipApplication) => {
    const defaultTrack: Track = app.tracks[0] || 'Software & AI';
    onAddMember({
      name: app.fullName,
      role: 'Core Member',
      track: defaultTrack,
      email: app.email,
      studentId: app.studentId,
      graduationYear:
        app.yearOfStudy === 'Freshman'
          ? 2030
          : app.yearOfStudy === 'Sophomore'
          ? 2029
          : app.yearOfStudy === 'Junior'
          ? 2028
          : 2027,
      bio: `${app.yearOfStudy} majoring in ${app.major}. Interests: ${app.tracks.join(', ')}.`,
      skills: [app.major, ...app.tracks],
      githubUrl: app.portfolioUrl,
      status: 'Active',
      avatarColor: 'from-emerald-600 to-teal-800',
    });
    onUpdateApplicationStatus(app.id, 'Accepted', 'Enrolled as active member.');
  };

  // Filtered lists
  const filteredMembers = members.filter((m) => {
    const matchesRole = memberFilterRole === 'All' ? true : m.role === memberFilterRole;
    const q = memberSearch.toLowerCase().trim();
    const matchesSearch =
      !q ||
      m.name.toLowerCase().includes(q) ||
      m.email.toLowerCase().includes(q) ||
      m.role.toLowerCase().includes(q) ||
      (m.studentId && m.studentId.toLowerCase().includes(q));
    return matchesRole && matchesSearch;
  });

  const filteredApplications = applications.filter((a) => {
    return appFilterStatus === 'All' ? true : a.status === appFilterStatus;
  });

  return (
    <section id="dashboard" className="py-16 md:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 font-mono">
              {t.dashboard.badge}
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
              {t.dashboard.title}
            </h2>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base">
              {t.dashboard.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBlueprint}
              className="px-3 py-2 text-xs font-mono font-medium text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-md transition-colors"
            >
              Next.js Architecture Guide
            </button>
            <button
              onClick={onExportDatabaseSeed}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-md transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.dashboard.exportSeed}</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-lg border border-neutral-200 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('members')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'members'
                ? 'bg-white text-neutral-950 shadow-xs font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>{t.dashboard.tabs.members} ({members.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('events')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'events'
                ? 'bg-white text-neutral-950 shadow-xs font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>{t.dashboard.tabs.events} ({events.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('posts')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'posts'
                ? 'bg-white text-neutral-950 shadow-xs font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{t.dashboard.tabs.posts} ({posts.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('applications')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'applications'
                ? 'bg-white text-neutral-950 shadow-xs font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{t.dashboard.tabs.applications} ({applications.length})</span>
            {applications.filter((a) => a.status === 'Pending').length > 0 && (
              <span className="font-mono text-[10px] px-1.5 py-0.2 bg-neutral-900 text-white rounded">
                {applications.filter((a) => a.status === 'Pending').length} pending
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('export')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'export'
                ? 'bg-white text-neutral-950 shadow-xs font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{t.dashboard.tabs.export}</span>
          </button>
        </div>

        {/* TAB 1: MEMBERS MANAGEMENT */}
        {activeTab === 'members' && (
          <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-neutral-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative min-w-[200px]">
                  <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={memberSearch}
                    onChange={(e) => setMemberSearch(e.target.value)}
                    placeholder="Search members..."
                    className="w-full pl-9 pr-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-800"
                  />
                </div>

                <select
                  value={memberFilterRole}
                  onChange={(e) => setMemberFilterRole(e.target.value)}
                  className="px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-800"
                >
                  <option value="All">All Roles</option>
                  <option value="President">President</option>
                  <option value="Vice President">Vice President</option>
                  <option value="Tech Lead">Tech Lead</option>
                  <option value="Design Lead">Design Lead</option>
                  <option value="Event Coordinator">Event Coordinator</option>
                  <option value="Core Member">Core Member</option>
                  <option value="Alumni">Alumni</option>
                </select>
              </div>

              <button
                onClick={handleOpenAddMember}
                className="flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Member</span>
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-neutral-700">
                <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-500 uppercase font-mono text-[11px]">
                  <tr>
                    <th className="px-6 py-3 font-medium">Name & Email</th>
                    <th className="px-6 py-3 font-medium">Role & Track</th>
                    <th className="px-6 py-3 font-medium">Student ID</th>
                    <th className="px-6 py-3 font-medium">Class Of</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                    <th className="px-6 py-3 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {filteredMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-neutral-50/70 transition-colors">
                      <td className="px-6 py-4 font-medium text-neutral-900">
                        <div className="font-semibold">{member.name}</div>
                        <div className="text-neutral-500 font-normal">{member.email}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-neutral-800">{member.role}</div>
                        <div className="text-neutral-500">{member.track}</div>
                      </td>
                      <td className="px-6 py-4 font-mono text-neutral-600">
                        {member.studentId || '—'}
                      </td>
                      <td className="px-6 py-4 font-mono tabular-nums text-neutral-600">
                        {member.graduationYear}
                      </td>
                      <td className="px-6 py-4 font-mono text-[11px]">
                        <span
                          className={
                            member.status === 'Active'
                              ? 'text-emerald-700 font-semibold'
                              : member.status === 'On Leave'
                              ? 'text-amber-700'
                              : 'text-neutral-500'
                          }
                        >
                          {member.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleOpenEditMember(member)}
                            className="p-1.5 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded"
                            title="Edit Member"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(`Remove ${member.name} from members list?`)) {
                                onDeleteMember(member.id);
                              }
                            }}
                            className="p-1.5 text-red-600 hover:text-red-800 hover:bg-red-50 rounded"
                            title="Delete Member"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: EVENTS MANAGEMENT */}
        {activeTab === 'events' && (
          <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-neutral-200 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-neutral-900">Events Registry</h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Publish workshops, manage attendance capacities, and schedule hackathons.
                </p>
              </div>

              <button
                onClick={handleOpenAddEvent}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Create Event</span>
              </button>
            </div>

            <div className="divide-y divide-neutral-200">
              {events.map((ev) => (
                <div
                  key={ev.id}
                  className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-neutral-50/70 transition-colors"
                >
                  <div className="space-y-1.5 max-w-2xl">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
                      <span className="font-semibold text-neutral-800">{ev.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{ev.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{ev.time}</span>
                      <span aria-hidden="true">·</span>
                      <span className={ev.status === 'Upcoming' ? 'text-emerald-700 font-bold' : 'text-neutral-400'}>
                        {ev.status}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-neutral-950">{ev.title}</h4>
                    <p className="text-xs text-neutral-600 line-clamp-2">{ev.description}</p>
                    <div className="text-xs text-neutral-500 flex items-center gap-3 pt-1">
                      <span>Venue: {ev.location}</span>
                      {ev.speakerName && <span>Host: {ev.speakerName}</span>}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right font-mono text-xs">
                      <div className="text-neutral-900 font-semibold tabular-nums">
                        {ev.rsvps.length} / {ev.capacity} RSVPs
                      </div>
                      <div className="text-[11px] text-neutral-400">
                        {ev.capacity - ev.rsvps.length} remaining
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleOpenEditEvent(ev)}
                        className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded"
                        title="Edit Event"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete event "${ev.title}"?`)) {
                            onDeleteEvent(ev.id);
                          }
                        }}
                        className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded"
                        title="Delete Event"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: BLOG POSTS MANAGEMENT */}
        {activeTab === 'posts' && (
          <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-neutral-200 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-neutral-900">Blog & Editorial Posts</h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Publish technical writeups, recaps, and student tutorials.
                </p>
              </div>

              <button
                onClick={handleOpenAddPost}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Write Article</span>
              </button>
            </div>

            <div className="divide-y divide-neutral-200">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-neutral-50/70 transition-colors"
                >
                  <div className="space-y-1.5 max-w-2xl">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
                      <span className="font-semibold text-neutral-800">{post.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{post.publishedAt}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTimeMinutes} min read</span>
                      <span aria-hidden="true">·</span>
                      <span className={post.isPublished ? 'text-emerald-700' : 'text-neutral-400'}>
                        {post.isPublished ? 'Published' : 'Draft'}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-neutral-950">{post.title}</h4>
                    <p className="text-xs text-neutral-600 line-clamp-2">{post.excerpt}</p>
                    <div className="text-xs text-neutral-500">
                      Author: <strong className="text-neutral-800">{post.authorName}</strong> ({post.authorRole}) · {post.likes} likes
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleOpenEditPost(post)}
                      className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded"
                      title="Edit Post"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Delete post "${post.title}"?`)) {
                          onDeletePost(post.id);
                        }
                      }}
                      className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded"
                      title="Delete Post"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: RECRUITMENT APPLICATIONS */}
        {activeTab === 'applications' && (
          <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-neutral-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold text-neutral-900">Membership Inquiries & Applications</h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Review student submissions from the Join Us form, schedule chats, or enroll them.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-500">Filter:</span>
                <select
                  value={appFilterStatus}
                  onChange={(e) => setAppFilterStatus(e.target.value)}
                  className="px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-800"
                >
                  <option value="All">All Inquiries</option>
                  <option value="Pending">Pending</option>
                  <option value="Interview">Interview</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>
            </div>

            {filteredApplications.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xs text-neutral-500">No applications found.</p>
              </div>
            ) : (
              <div className="divide-y divide-neutral-200">
                {filteredApplications.map((app) => (
                  <div key={app.id} className="p-6 space-y-4 hover:bg-neutral-50/70 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-bold text-neutral-950">{app.fullName}</h4>
                          <span className="font-mono text-xs text-neutral-400">({app.studentId})</span>
                        </div>
                        <div className="text-xs text-neutral-500 mt-0.5 flex items-center gap-2 flex-wrap">
                          <span>{app.email}</span>
                          <span aria-hidden="true">·</span>
                          <span>{app.major}</span>
                          <span aria-hidden="true">·</span>
                          <span>{app.yearOfStudy}</span>
                          <span aria-hidden="true">·</span>
                          <span>Level: {app.experienceLevel}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <select
                          value={app.status}
                          onChange={(e) =>
                            onUpdateApplicationStatus(
                              app.id,
                              e.target.value as ApplicationStatus
                            )
                          }
                          className="px-2.5 py-1 text-xs font-mono font-medium rounded-md border border-neutral-300 bg-white"
                        >
                          <option value="Pending">Status: Pending</option>
                          <option value="Interview">Status: Interview</option>
                          <option value="Accepted">Status: Accepted</option>
                          <option value="Archived">Status: Archived</option>
                        </select>

                        <button
                          onClick={() => handleConvertAppToMember(app)}
                          className="flex items-center gap-1 px-3 py-1 text-xs font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-md transition-colors"
                          title="Create member profile from this application"
                        >
                          <UserCheck className="w-3.5 h-3.5" />
                          <span>Enroll Member</span>
                        </button>

                        <button
                          onClick={() => {
                            if (confirm(`Delete application from ${app.fullName}?`)) {
                              onDeleteApplication(app.id);
                            }
                          }}
                          className="p-1.5 text-neutral-400 hover:text-red-700 hover:bg-red-50 rounded"
                          title="Delete application"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Tracks and Motivation */}
                    <div className="bg-neutral-50 p-3.5 rounded-md border border-neutral-100 text-xs space-y-2">
                      <div>
                        <strong className="text-neutral-700">Tracks of Interest: </strong>
                        <span className="text-neutral-900 font-medium">{app.tracks.join(', ')}</span>
                      </div>
                      <div>
                        <strong className="text-neutral-700">Motivation: </strong>
                        <p className="text-neutral-800 mt-0.5 leading-relaxed">{app.motivation}</p>
                      </div>
                      {app.portfolioUrl && (
                        <div className="flex items-center gap-1.5 pt-1">
                          <strong className="text-neutral-700">Portfolio/GitHub: </strong>
                          <a
                            href={app.portfolioUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-900 hover:underline flex items-center gap-1 font-mono"
                          >
                            <span>{app.portfolioUrl}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                      {app.adminNotes && (
                        <div className="pt-2 text-[11px] text-neutral-600 border-t border-neutral-200">
                          <strong>Admin Notes: </strong>
                          <span>{app.adminNotes}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 5: BACKEND & DATABASE EXPORT */}
        {activeTab === 'export' && (
          <div className="bg-white border border-neutral-200 rounded-lg p-6 sm:p-8 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-neutral-950">
                Database Seed & Production Stack Export
              </h3>
              <p className="text-sm text-neutral-600 mt-1 max-w-2xl leading-relaxed">
                You can download the current live state of your club database (all members, events, posts, and recruitment applications) as a valid JSON file to seed into MongoDB Atlas, Supabase, or PostgreSQL.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-neutral-200 rounded-lg bg-neutral-50/50 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                    <Download className="w-4 h-4 text-emerald-700" />
                    <span>Download seed.json</span>
                  </h4>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    Generates a complete dataset with schema versioning for MongoDB M0 import using `mongoimport` or Mongoose seeder script.
                  </p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={onExportDatabaseSeed}
                    className="w-full py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors text-center"
                  >
                    Download Database Seed
                  </button>
                </div>
              </div>

              <div className="p-6 border border-neutral-200 rounded-lg bg-neutral-50/50 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                    <RotateCcw className="w-4 h-4 text-amber-700" />
                    <span>Reset Sample Data</span>
                  </h4>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    Clear local storage modifications and restore the clean initial university club dataset.
                  </p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => {
                      if (confirm('Reset all club data to default sample items?')) {
                        onResetDefaults();
                      }
                    }}
                    className="w-full py-2.5 text-xs font-medium text-neutral-700 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-md transition-colors"
                  >
                    Restore Defaults
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 bg-neutral-900 text-white rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold">Ready to deploy to Vercel & MongoDB Atlas?</h4>
                <p className="text-xs text-neutral-300 mt-1">
                  View the full Next.js project structure, Mongoose schemas, and Render.com setup guides.
                </p>
              </div>
              <button
                onClick={onOpenBlueprint}
                className="px-4 py-2 text-xs font-semibold text-neutral-900 bg-white hover:bg-neutral-100 rounded-md whitespace-nowrap"
              >
                Open Architecture Blueprint
              </button>
            </div>
          </div>
        )}
      </div>

      {/* MEMBER CREATE/EDIT MODAL */}
      {isMemberModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-neutral-950/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
        >
          <div className="bg-white rounded-lg max-w-xl w-full max-h-[90vh] overflow-y-auto border border-neutral-300 shadow-xl p-6">
            <h3 className="text-lg font-bold text-neutral-950 mb-4">
              {editingMember ? 'Edit Member Information' : 'Add New Club Member'}
            </h3>

            <form onSubmit={handleSaveMember} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={memberFormData.name}
                    onChange={(e) =>
                      setMemberFormData({ ...memberFormData, name: e.target.value })
                    }
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    University Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={memberFormData.email}
                    onChange={(e) =>
                      setMemberFormData({ ...memberFormData, email: e.target.value })
                    }
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Role in Club
                  </label>
                  <select
                    value={memberFormData.role}
                    onChange={(e) =>
                      setMemberFormData({
                        ...memberFormData,
                        role: e.target.value as MemberRole,
                      })
                    }
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none"
                  >
                    <option value="President">President</option>
                    <option value="Vice President">Vice President</option>
                    <option value="Tech Lead">Tech Lead</option>
                    <option value="Design Lead">Design Lead</option>
                    <option value="Outreach Lead">Outreach Lead</option>
                    <option value="Event Coordinator">Event Coordinator</option>
                    <option value="Core Member">Core Member</option>
                    <option value="Alumni">Alumni</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Track / Subteam
                  </label>
                  <select
                    value={memberFormData.track}
                    onChange={(e) =>
                      setMemberFormData({
                        ...memberFormData,
                        track: e.target.value as Track,
                      })
                    }
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none"
                  >
                    <option value="Software & AI">Software & AI</option>
                    <option value="Product & UI/UX">Product & UI/UX</option>
                    <option value="Hardware & Robotics">Hardware & Robotics</option>
                    <option value="Community & Ops">Community & Ops</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Student ID
                  </label>
                  <input
                    type="text"
                    value={memberFormData.studentId}
                    onChange={(e) =>
                      setMemberFormData({ ...memberFormData, studentId: e.target.value })
                    }
                    placeholder="MU26-XXXX"
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Graduation Year
                  </label>
                  <input
                    type="number"
                    value={memberFormData.graduationYear}
                    onChange={(e) =>
                      setMemberFormData({
                        ...memberFormData,
                        graduationYear: Number(e.target.value),
                      })
                    }
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Status
                  </label>
                  <select
                    value={memberFormData.status}
                    onChange={(e) =>
                      setMemberFormData({
                        ...memberFormData,
                        status: e.target.value as MemberStatus,
                      })
                    }
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
                  >
                    <option value="Active">Active</option>
                    <option value="On Leave">On Leave</option>
                    <option value="Alumni">Alumni</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Bio / Introduction
                </label>
                <textarea
                  rows={2}
                  value={memberFormData.bio}
                  onChange={(e) =>
                    setMemberFormData({ ...memberFormData, bio: e.target.value })
                  }
                  className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Skills & Focus Areas (comma-separated)
                </label>
                <input
                  type="text"
                  value={memberFormData.skills}
                  onChange={(e) =>
                    setMemberFormData({ ...memberFormData, skills: e.target.value })
                  }
                  placeholder="e.g. Next.js, Python, Figma, Embedded C"
                  className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    GitHub URL
                  </label>
                  <input
                    type="url"
                    value={memberFormData.githubUrl}
                    onChange={(e) =>
                      setMemberFormData({ ...memberFormData, githubUrl: e.target.value })
                    }
                    placeholder="https://github.com/username"
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    LinkedIn URL
                  </label>
                  <input
                    type="url"
                    value={memberFormData.linkedinUrl}
                    onChange={(e) =>
                      setMemberFormData({ ...memberFormData, linkedinUrl: e.target.value })
                    }
                    placeholder="https://linkedin.com/in/username"
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsMemberModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 bg-neutral-100 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md"
                >
                  {editingMember ? 'Save Changes' : 'Create Member'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EVENT CREATE/EDIT MODAL */}
      {isEventModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-neutral-950/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
        >
          <div className="bg-white rounded-lg max-w-xl w-full max-h-[90vh] overflow-y-auto border border-neutral-300 shadow-xl p-6">
            <h3 className="text-lg font-bold text-neutral-950 mb-4">
              {editingEvent ? 'Edit Event' : 'Create New Event'}
            </h3>

            <form onSubmit={handleSaveEvent} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Event Title *
                </label>
                <input
                  type="text"
                  required
                  value={eventFormData.title}
                  onChange={(e) =>
                    setEventFormData({ ...eventFormData, title: e.target.value })
                  }
                  placeholder="e.g. Next.js 15 & MongoDB Workshop"
                  className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Category
                  </label>
                  <select
                    value={eventFormData.category}
                    onChange={(e) =>
                      setEventFormData({
                        ...eventFormData,
                        category: e.target.value as EventCategory,
                      })
                    }
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
                  >
                    <option value="Workshop">Workshop</option>
                    <option value="Hackathon">Hackathon</option>
                    <option value="Tech Talk">Tech Talk</option>
                    <option value="Project Demo">Project Demo</option>
                    <option value="Social">Social</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Status
                  </label>
                  <select
                    value={eventFormData.status}
                    onChange={(e) =>
                      setEventFormData({
                        ...eventFormData,
                        status: e.target.value as EventStatus,
                      })
                    }
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
                  >
                    <option value="Upcoming">Upcoming</option>
                    <option value="Past">Past</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={eventFormData.date}
                    onChange={(e) =>
                      setEventFormData({ ...eventFormData, date: e.target.value })
                    }
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Time Window
                  </label>
                  <input
                    type="text"
                    value={eventFormData.time}
                    onChange={(e) =>
                      setEventFormData({ ...eventFormData, time: e.target.value })
                    }
                    placeholder="18:00 - 20:30"
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Capacity (Seats)
                  </label>
                  <input
                    type="number"
                    value={eventFormData.capacity}
                    onChange={(e) =>
                      setEventFormData({
                        ...eventFormData,
                        capacity: Number(e.target.value),
                      })
                    }
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Location / Venue
                </label>
                <input
                  type="text"
                  value={eventFormData.location}
                  onChange={(e) =>
                    setEventFormData({ ...eventFormData, location: e.target.value })
                  }
                  placeholder="e.g. Turing Hall 314 or Online Discord"
                  className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Speaker / Host Name
                  </label>
                  <input
                    type="text"
                    value={eventFormData.speakerName}
                    onChange={(e) =>
                      setEventFormData({ ...eventFormData, speakerName: e.target.value })
                    }
                    placeholder="e.g. Aisha Al-Mansoor"
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Speaker Role / Title
                  </label>
                  <input
                    type="text"
                    value={eventFormData.speakerRole}
                    onChange={(e) =>
                      setEventFormData({ ...eventFormData, speakerRole: e.target.value })
                    }
                    placeholder="e.g. Tech Lead @ ApexTech"
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Event Description
                </label>
                <textarea
                  rows={3}
                  value={eventFormData.description}
                  onChange={(e) =>
                    setEventFormData({ ...eventFormData, description: e.target.value })
                  }
                  placeholder="Overview of the workshop or event..."
                  className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
                />
              </div>

              <div className="pt-4 border-t border-neutral-200 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsEventModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 bg-neutral-100 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md"
                >
                  {editingEvent ? 'Save Event Changes' : 'Publish Event'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* POST CREATE/EDIT MODAL */}
      {isPostModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-neutral-950/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
        >
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-neutral-300 shadow-xl p-6">
            <h3 className="text-lg font-bold text-neutral-950 mb-4">
              {editingPost ? 'Edit Blog Article' : 'Write New Blog Article'}
            </h3>

            <form onSubmit={handleSavePost} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Article Title *
                </label>
                <input
                  type="text"
                  required
                  value={postFormData.title}
                  onChange={(e) =>
                    setPostFormData({ ...postFormData, title: e.target.value })
                  }
                  placeholder="e.g. Next.js 15 App Router & MongoDB M0 Setup"
                  className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Category
                  </label>
                  <select
                    value={postFormData.category}
                    onChange={(e) =>
                      setPostFormData({
                        ...postFormData,
                        category: e.target.value as BlogCategory,
                      })
                    }
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
                  >
                    <option value="Tutorial">Tutorial</option>
                    <option value="Project Showcase">Project Showcase</option>
                    <option value="Career & Advice">Career & Advice</option>
                    <option value="Event Recap">Event Recap</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Estimated Read Time (min)
                  </label>
                  <input
                    type="number"
                    value={postFormData.readTimeMinutes}
                    onChange={(e) =>
                      setPostFormData({
                        ...postFormData,
                        readTimeMinutes: Number(e.target.value),
                      })
                    }
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Status
                  </label>
                  <select
                    value={postFormData.isPublished ? 'published' : 'draft'}
                    onChange={(e) =>
                      setPostFormData({
                        ...postFormData,
                        isPublished: e.target.value === 'published',
                      })
                    }
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Author Name
                  </label>
                  <input
                    type="text"
                    value={postFormData.authorName}
                    onChange={(e) =>
                      setPostFormData({ ...postFormData, authorName: e.target.value })
                    }
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Author Role
                  </label>
                  <input
                    type="text"
                    value={postFormData.authorRole}
                    onChange={(e) =>
                      setPostFormData({ ...postFormData, authorRole: e.target.value })
                    }
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Excerpt / Short Summary
                </label>
                <textarea
                  rows={2}
                  value={postFormData.excerpt}
                  onChange={(e) =>
                    setPostFormData({ ...postFormData, excerpt: e.target.value })
                  }
                  placeholder="One or two sentences summarizing the article..."
                  className="w-full px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Article Content (Markdown supported) *
                </label>
                <textarea
                  rows={8}
                  required
                  value={postFormData.content}
                  onChange={(e) =>
                    setPostFormData({ ...postFormData, content: e.target.value })
                  }
                  placeholder="Write the full post here..."
                  className="w-full px-3 py-2 text-xs font-mono bg-neutral-50 border border-neutral-200 rounded-md"
                />
              </div>

              <div className="pt-4 border-t border-neutral-200 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsPostModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 bg-neutral-100 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md"
                >
                  {editingPost ? 'Save Article' : 'Publish Article'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
