/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MembersSection } from './components/MembersSection';
import { EventsSection } from './components/EventsSection';
import { BlogSection } from './components/BlogSection';
import { JoinFormSection } from './components/JoinFormSection';
import { AdminDashboard } from './components/AdminDashboard';
import { NextJsBlueprintModal } from './components/NextJsBlueprintModal';
import { GitExportModal } from './components/GitExportModal';
import { Footer } from './components/Footer';
import { StorageService } from './services/storageService';
import { Language, translations } from './data/translations';
import {
  ClubInfo,
  ClubMember,
  ClubEvent,
  BlogPost,
  MembershipApplication,
  ApplicationStatus,
} from './types';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [language, setLanguage] = useState<Language>('vi'); // Default to Vietnamese for HCMUS
  const [isBlueprintOpen, setIsBlueprintOpen] = useState<boolean>(false);
  const [isGitExportOpen, setIsGitExportOpen] = useState<boolean>(false);

  // Core Data State
  const [clubInfo, setClubInfo] = useState<ClubInfo>(StorageService.getClubInfo());
  const [members, setMembers] = useState<ClubMember[]>([]);
  const [events, setEvents] = useState<ClubEvent[]>([]);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [applications, setApplications] = useState<MembershipApplication[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  // Initialize data on mount
  useEffect(() => {
    setClubInfo(StorageService.getClubInfo());
    setMembers(StorageService.getMembers());
    setEvents(StorageService.getEvents());
    setPosts(StorageService.getPosts());
    setApplications(StorageService.getApplications());
  }, []);

  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  // Member CRUD handlers
  const handleAddMember = (newMemData: Omit<ClubMember, 'id' | 'joinedDate'>) => {
    const created = StorageService.addMember(newMemData);
    setMembers(StorageService.getMembers());
    triggerNotification(
      language === 'vi' ? `Đã thêm thành viên ${created.name}` : `Added member ${created.name}`
    );
  };

  const handleUpdateMember = (id: string, updates: Partial<ClubMember>) => {
    StorageService.updateMember(id, updates);
    setMembers(StorageService.getMembers());
    triggerNotification(
      language === 'vi' ? 'Đã cập nhật thông tin thành viên' : 'Member updated successfully'
    );
  };

  const handleDeleteMember = (id: string) => {
    StorageService.deleteMember(id);
    setMembers(StorageService.getMembers());
    triggerNotification(language === 'vi' ? 'Đã xoá thành viên' : 'Member removed');
  };

  // Event CRUD handlers
  const handleAddEvent = (newEventData: Omit<ClubEvent, 'id' | 'rsvps'>) => {
    const created = StorageService.addEvent(newEventData);
    setEvents(StorageService.getEvents());
    triggerNotification(
      language === 'vi' ? `Đã xuất bản sự kiện "${created.title}"` : `Event "${created.title}" published`
    );
  };

  const handleUpdateEvent = (id: string, updates: Partial<ClubEvent>) => {
    StorageService.updateEvent(id, updates);
    setEvents(StorageService.getEvents());
    triggerNotification(
      language === 'vi' ? 'Đã cập nhật sự kiện' : 'Event details updated'
    );
  };

  const handleDeleteEvent = (id: string) => {
    StorageService.deleteEvent(id);
    setEvents(StorageService.getEvents());
    triggerNotification(language === 'vi' ? 'Đã xoá sự kiện' : 'Event deleted');
  };

  const handleToggleRsvp = (eventId: string, email: string) => {
    const res = StorageService.toggleRsvp(eventId, email);
    setEvents(StorageService.getEvents());
    return res;
  };

  // Blog Post CRUD handlers
  const handleAddPost = (newPostData: Omit<BlogPost, 'id' | 'likes' | 'publishedAt'>) => {
    const created = StorageService.addPost(newPostData);
    setPosts(StorageService.getPosts());
    triggerNotification(
      language === 'vi' ? `Đã xuất bản bài viết "${created.title}"` : `Article "${created.title}" published`
    );
  };

  const handleUpdatePost = (id: string, updates: Partial<BlogPost>) => {
    StorageService.updatePost(id, updates);
    setPosts(StorageService.getPosts());
    triggerNotification(language === 'vi' ? 'Đã cập nhật bài viết' : 'Article updated');
  };

  const handleDeletePost = (id: string) => {
    StorageService.deletePost(id);
    setPosts(StorageService.getPosts());
    triggerNotification(language === 'vi' ? 'Đã xoá bài viết' : 'Article deleted');
  };

  const handleLikePost = (id: string) => {
    StorageService.likePost(id);
    setPosts(StorageService.getPosts());
  };

  // Application handlers
  const handleSubmitApplication = (
    newAppData: Omit<MembershipApplication, 'id' | 'status' | 'submittedAt'>
  ) => {
    const created = StorageService.addApplication(newAppData);
    setApplications(StorageService.getApplications());
    triggerNotification(
      language === 'vi'
        ? `Đã nhận đơn ứng tuyển từ ${created.fullName}!`
        : `Application from ${created.fullName} submitted!`
    );
    return created;
  };

  const handleUpdateApplicationStatus = (
    id: string,
    status: ApplicationStatus,
    notes?: string
  ) => {
    StorageService.updateApplicationStatus(id, status, notes);
    setApplications(StorageService.getApplications());
    triggerNotification(
      language === 'vi'
        ? `Cập nhật trạng thái hồ sơ: ${status}`
        : `Application status updated to ${status}`
    );
  };

  const handleDeleteApplication = (id: string) => {
    StorageService.deleteApplication(id);
    setApplications(StorageService.getApplications());
    triggerNotification(
      language === 'vi' ? 'Đã xoá hồ sơ ứng tuyển' : 'Application record removed'
    );
  };

  // Database Seed Download
  const handleDownloadSeed = () => {
    const seed = StorageService.exportDatabaseSeed();
    const jsonStr = JSON.stringify(seed, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nes-hcmus-mongodb-seed-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    triggerNotification(
      language === 'vi' ? 'Đã xuất file seed.json cho MongoDB' : 'seed.json exported for MongoDB'
    );
  };

  // Reset to defaults
  const handleResetDefaults = () => {
    StorageService.resetToDefaults();
    setClubInfo(StorageService.getClubInfo());
    setMembers(StorageService.getMembers());
    setEvents(StorageService.getEvents());
    setPosts(StorageService.getPosts());
    setApplications(StorageService.getApplications());
    triggerNotification(
      language === 'vi' ? 'Đã khôi phục dữ liệu ban đầu' : 'Restored initial sample data'
    );
  };

  const pendingAppsCount = applications.filter((a) => a.status === 'Pending').length;

  return (
    <div className="min-h-screen bg-[#fafaf9] text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* Global Toast Notification */}
      {notification && (
        <div className="fixed bottom-5 right-5 z-50 bg-neutral-950 text-white text-xs px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2 border border-neutral-800 transition-all">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* Top Navbar with Language Switcher */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenBlueprint={() => setIsBlueprintOpen(true)}
        onOpenGitExport={() => setIsGitExportOpen(true)}
        pendingApplicationsCount={pendingAppsCount}
        language={language}
        onLanguageChange={setLanguage}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeSection === 'dashboard' ? (
          <div>
            {/* Dashboard Sub-Header with Back Button */}
            <div className="bg-neutral-100/90 border-b border-neutral-200 py-3 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <button
                  onClick={() => setActiveSection('about')}
                  className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700 hover:text-neutral-950 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>
                    {language === 'vi'
                      ? '← Quay lại Trang Chủ NES'
                      : '← Return to Public Club Website'}
                  </span>
                </button>
                <div className="flex items-center gap-3 text-xs text-neutral-500 font-mono">
                  <span>Stack: Next.js + MongoDB M0</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-700 font-medium">HCMUS Academic DB</span>
                </div>
              </div>
            </div>

            <AdminDashboard
              members={members}
              events={events}
              posts={posts}
              applications={applications}
              language={language}
              onAddMember={handleAddMember}
              onUpdateMember={handleUpdateMember}
              onDeleteMember={handleDeleteMember}
              onAddEvent={handleAddEvent}
              onUpdateEvent={handleUpdateEvent}
              onDeleteEvent={handleDeleteEvent}
              onAddPost={handleAddPost}
              onUpdatePost={handleUpdatePost}
              onDeletePost={handleDeletePost}
              onUpdateApplicationStatus={handleUpdateApplicationStatus}
              onDeleteApplication={handleDeleteApplication}
              onExportDatabaseSeed={handleDownloadSeed}
              onResetDefaults={handleResetDefaults}
              onOpenBlueprint={() => setIsBlueprintOpen(true)}
            />
          </div>
        ) : (
          <div>
            <HeroSection
              clubInfo={clubInfo}
              language={language}
              onExploreEvents={() => setActiveSection('events')}
              onJoinClick={() => setActiveSection('join')}
              onOpenBlueprint={() => setIsBlueprintOpen(true)}
            />

            {(activeSection === 'about' || activeSection === 'all') && (
              <AboutSection clubInfo={clubInfo} language={language} />
            )}

            {(activeSection === 'about' || activeSection === 'members' || activeSection === 'all') && (
              <MembersSection
                members={members}
                language={language}
                onManageMembers={() => setActiveSection('dashboard')}
                onJoinClick={() => setActiveSection('join')}
              />
            )}

            {(activeSection === 'about' || activeSection === 'events' || activeSection === 'all') && (
              <EventsSection
                events={events}
                language={language}
                onToggleRsvp={handleToggleRsvp}
                onManageEvents={() => setActiveSection('dashboard')}
              />
            )}

            {(activeSection === 'about' || activeSection === 'blog' || activeSection === 'all') && (
              <BlogSection
                posts={posts}
                language={language}
                onLikePost={handleLikePost}
                onManagePosts={() => setActiveSection('dashboard')}
              />
            )}

            {(activeSection === 'about' || activeSection === 'join' || activeSection === 'all') && (
              <JoinFormSection
                language={language}
                onSubmitApplication={handleSubmitApplication}
              />
            )}
          </div>
        )}
      </main>

      {/* Next.js & MongoDB Architecture Guide Modal */}
      <NextJsBlueprintModal
        isOpen={isBlueprintOpen}
        onClose={() => setIsBlueprintOpen(false)}
        onDownloadSeed={handleDownloadSeed}
      />

      {/* Push to Git / Export Modal */}
      <GitExportModal
        isOpen={isGitExportOpen}
        onClose={() => setIsGitExportOpen(false)}
        onDownloadZip={() => {
          window.open('https://github.com/nes-club-hcmus/NES-website/archive/refs/heads/main.zip', '_blank');
        }}
      />

      {/* Footer */}
      <Footer
        clubInfo={clubInfo}
        language={language}
        onNavClick={(sec) => setActiveSection(sec)}
        onOpenBlueprint={() => setIsBlueprintOpen(true)}
        onOpenGitExport={() => setIsGitExportOpen(true)}
      />
    </div>
  );
}
