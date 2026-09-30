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
import { GallerySection } from './components/GallerySection';
import { JoinFormSection } from './components/JoinFormSection';
import { Footer } from './components/Footer';
import { StorageService } from './services/storageService';
import { INITIAL_GALLERY_ITEMS } from './data/initialData';
import {
  ClubInfo,
  ClubMember,
  ClubEvent,
  BlogPost,
  MembershipApplication,
} from './types';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Core Data State
  const [clubInfo, setClubInfo] = useState<ClubInfo>(StorageService.getClubInfo());
  const [members, setMembers] = useState<ClubMember[]>([]);
  const [events, setEvents] = useState<ClubEvent[]>([]);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  // Initialize data on mount
  useEffect(() => {
    setClubInfo(StorageService.getClubInfo());
    setMembers(StorageService.getMembers());
    setEvents(StorageService.getEvents());
    setPosts(StorageService.getPosts());
  }, []);

  // IntersectionObserver to update active section on scroll
  useEffect(() => {
    const sections = ['hero', 'about', 'tracks', 'events', 'members', 'blog', 'gallery', 'join'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Event RSVP handler
  const handleToggleRsvp = (eventId: string, email: string) => {
    const res = StorageService.toggleRsvp(eventId, email);
    setEvents(StorageService.getEvents());
    if (res.success && res.rsvped) {
      triggerNotification('Đăng ký tham dự thành công!');
    }
    return res;
  };

  // Blog Like handler
  const handleLikePost = (id: string) => {
    StorageService.likePost(id);
    setPosts(StorageService.getPosts());
  };

  // Application handler
  const handleSubmitApplication = (
    newAppData: Omit<MembershipApplication, 'id' | 'status' | 'submittedAt'>
  ) => {
    const created = StorageService.addApplication(newAppData);
    triggerNotification(`Đã nhận đơn ứng tuyển từ ${created.fullName}!`);
    return created;
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] text-neutral-900 flex flex-col font-sans selection:bg-blue-900 selection:text-white">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-neutral-950 text-white text-xs px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 border border-neutral-800 transition-all animate-bounceIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="font-medium">{notification}</span>
        </div>
      )}

      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Landing Page Content */}
      <main className="flex-1">
        <HeroSection
          clubInfo={clubInfo}
          onExploreEvents={() => handleNavigate('events')}
          onJoinClick={() => handleNavigate('join')}
          onLearnMore={() => handleNavigate('about')}
        />

        <AboutSection
          clubInfo={clubInfo}
        />

        <EventsSection
          events={events}
          onToggleRsvp={handleToggleRsvp}
        />

        <MembersSection
          members={members}
          onJoinClick={() => handleNavigate('join')}
        />

        <BlogSection
          posts={posts}
          onLikePost={handleLikePost}
        />

        <GallerySection
          items={INITIAL_GALLERY_ITEMS}
        />

        <JoinFormSection
          onSubmitApplication={handleSubmitApplication}
        />
      </main>

      {/* Landing Page Footer */}
      <Footer
        clubInfo={clubInfo}
        onNavClick={handleNavigate}
      />
    </div>
  );
}
