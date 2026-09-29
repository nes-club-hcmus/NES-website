import {
  ClubMember,
  ClubEvent,
  BlogPost,
  MembershipApplication,
  ClubInfo,
} from '../types';
import {
  INITIAL_CLUB_INFO,
  INITIAL_MEMBERS,
  INITIAL_EVENTS,
  INITIAL_POSTS,
  INITIAL_APPLICATIONS,
} from '../data/initialData';

const STORAGE_KEYS = {
  INFO: 'uniclub_info',
  MEMBERS: 'uniclub_members',
  EVENTS: 'uniclub_events',
  POSTS: 'uniclub_posts',
  APPLICATIONS: 'uniclub_applications',
};

function safeGet<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch (e) {
    console.warn(`Error reading ${key} from storage:`, e);
    return fallback;
  }
}

function safeSet<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving ${key} to storage:`, e);
  }
}

export const StorageService = {
  // Club Info
  getClubInfo(): ClubInfo {
    return safeGet<ClubInfo>(STORAGE_KEYS.INFO, INITIAL_CLUB_INFO);
  },
  saveClubInfo(info: ClubInfo): void {
    safeSet(STORAGE_KEYS.INFO, info);
  },

  // Members
  getMembers(): ClubMember[] {
    return safeGet<ClubMember[]>(STORAGE_KEYS.MEMBERS, INITIAL_MEMBERS);
  },
  saveMembers(members: ClubMember[]): void {
    safeSet(STORAGE_KEYS.MEMBERS, members);
  },
  addMember(member: Omit<ClubMember, 'id' | 'joinedDate'>): ClubMember {
    const members = this.getMembers();
    const newMember: ClubMember = {
      ...member,
      id: `mem-${Date.now()}`,
      joinedDate: new Date().toISOString().split('T')[0],
    };
    members.unshift(newMember);
    this.saveMembers(members);
    return newMember;
  },
  updateMember(id: string, updates: Partial<ClubMember>): ClubMember | null {
    const members = this.getMembers();
    const index = members.findIndex((m) => m.id === id);
    if (index === -1) return null;
    members[index] = { ...members[index], ...updates };
    this.saveMembers(members);
    return members[index];
  },
  deleteMember(id: string): boolean {
    const members = this.getMembers();
    const filtered = members.filter((m) => m.id !== id);
    if (filtered.length === members.length) return false;
    this.saveMembers(filtered);
    return true;
  },

  // Events
  getEvents(): ClubEvent[] {
    return safeGet<ClubEvent[]>(STORAGE_KEYS.EVENTS, INITIAL_EVENTS);
  },
  saveEvents(events: ClubEvent[]): void {
    safeSet(STORAGE_KEYS.EVENTS, events);
  },
  addEvent(event: Omit<ClubEvent, 'id' | 'rsvps'>): ClubEvent {
    const events = this.getEvents();
    const newEvent: ClubEvent = {
      ...event,
      id: `ev-${Date.now()}`,
      rsvps: [],
    };
    events.unshift(newEvent);
    this.saveEvents(events);
    return newEvent;
  },
  updateEvent(id: string, updates: Partial<ClubEvent>): ClubEvent | null {
    const events = this.getEvents();
    const index = events.findIndex((e) => e.id === id);
    if (index === -1) return null;
    events[index] = { ...events[index], ...updates };
    this.saveEvents(events);
    return events[index];
  },
  deleteEvent(id: string): boolean {
    const events = this.getEvents();
    const filtered = events.filter((e) => e.id !== id);
    if (filtered.length === events.length) return false;
    this.saveEvents(filtered);
    return true;
  },
  toggleRsvp(eventId: string, email: string): { success: boolean; rsvped: boolean; count: number } {
    const events = this.getEvents();
    const ev = events.find((e) => e.id === eventId);
    if (!ev) return { success: false, rsvped: false, count: 0 };

    const emailTrimmed = email.trim().toLowerCase();
    const hasRsvped = ev.rsvps.includes(emailTrimmed);

    if (hasRsvped) {
      ev.rsvps = ev.rsvps.filter((e) => e !== emailTrimmed);
    } else {
      if (ev.rsvps.length >= ev.capacity) {
        return { success: false, rsvped: false, count: ev.rsvps.length };
      }
      ev.rsvps.push(emailTrimmed);
    }
    this.saveEvents(events);
    return { success: true, rsvped: !hasRsvped, count: ev.rsvps.length };
  },

  // Blog Posts
  getPosts(): BlogPost[] {
    return safeGet<BlogPost[]>(STORAGE_KEYS.POSTS, INITIAL_POSTS);
  },
  savePosts(posts: BlogPost[]): void {
    safeSet(STORAGE_KEYS.POSTS, posts);
  },
  addPost(post: Omit<BlogPost, 'id' | 'likes' | 'publishedAt'>): BlogPost {
    const posts = this.getPosts();
    const newPost: BlogPost = {
      ...post,
      id: `post-${Date.now()}`,
      likes: 0,
      publishedAt: new Date().toISOString().split('T')[0],
    };
    posts.unshift(newPost);
    this.savePosts(posts);
    return newPost;
  },
  updatePost(id: string, updates: Partial<BlogPost>): BlogPost | null {
    const posts = this.getPosts();
    const index = posts.findIndex((p) => p.id === id);
    if (index === -1) return null;
    posts[index] = { ...posts[index], ...updates };
    this.savePosts(posts);
    return posts[index];
  },
  deletePost(id: string): boolean {
    const posts = this.getPosts();
    const filtered = posts.filter((p) => p.id !== id);
    if (filtered.length === posts.length) return false;
    this.savePosts(filtered);
    return true;
  },
  likePost(id: string): number {
    const posts = this.getPosts();
    const post = posts.find((p) => p.id === id);
    if (!post) return 0;
    post.likes += 1;
    this.savePosts(posts);
    return post.likes;
  },

  // Applications
  getApplications(): MembershipApplication[] {
    return safeGet<MembershipApplication[]>(STORAGE_KEYS.APPLICATIONS, INITIAL_APPLICATIONS);
  },
  saveApplications(apps: MembershipApplication[]): void {
    safeSet(STORAGE_KEYS.APPLICATIONS, apps);
  },
  addApplication(app: Omit<MembershipApplication, 'id' | 'status' | 'submittedAt'>): MembershipApplication {
    const apps = this.getApplications();
    const newApp: MembershipApplication = {
      ...app,
      id: `app-${Date.now()}`,
      status: 'Pending',
      submittedAt: new Date().toISOString(),
    };
    apps.unshift(newApp);
    this.saveApplications(apps);
    return newApp;
  },
  updateApplicationStatus(id: string, status: MembershipApplication['status'], adminNotes?: string): boolean {
    const apps = this.getApplications();
    const app = apps.find((a) => a.id === id);
    if (!app) return false;
    app.status = status;
    if (adminNotes !== undefined) {
      app.adminNotes = adminNotes;
    }
    this.saveApplications(apps);
    return true;
  },
  deleteApplication(id: string): boolean {
    const apps = this.getApplications();
    const filtered = apps.filter((a) => a.id !== id);
    if (filtered.length === apps.length) return false;
    this.saveApplications(filtered);
    return true;
  },

  // Export full database seed for MongoDB / Next.js
  exportDatabaseSeed() {
    return {
      clubInfo: this.getClubInfo(),
      members: this.getMembers(),
      events: this.getEvents(),
      posts: this.getPosts(),
      applications: this.getApplications(),
      exportedAt: new Date().toISOString(),
      schemaVersion: '1.0.0',
    };
  },

  // Reset to initial defaults
  resetToDefaults() {
    localStorage.removeItem(STORAGE_KEYS.INFO);
    localStorage.removeItem(STORAGE_KEYS.MEMBERS);
    localStorage.removeItem(STORAGE_KEYS.EVENTS);
    localStorage.removeItem(STORAGE_KEYS.POSTS);
    localStorage.removeItem(STORAGE_KEYS.APPLICATIONS);
  },
};
