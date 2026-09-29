export type Track = 'Software & AI' | 'Product & UI/UX' | 'Hardware & Robotics' | 'Community & Ops';

export type MemberRole =
  | 'President'
  | 'Vice President'
  | 'Tech Lead'
  | 'Design Lead'
  | 'Outreach Lead'
  | 'Event Coordinator'
  | 'Core Member'
  | 'Alumni';

export type MemberStatus = 'Active' | 'On Leave' | 'Alumni';

export interface ClubMember {
  id: string;
  name: string;
  role: MemberRole;
  track: Track;
  email: string;
  studentId?: string;
  graduationYear: number;
  bio: string;
  skills: string[];
  githubUrl?: string;
  linkedinUrl?: string;
  status: MemberStatus;
  joinedDate: string;
  avatarColor: string;
}

export type EventCategory = 'Workshop' | 'Hackathon' | 'Tech Talk' | 'Social' | 'Project Demo';
export type EventStatus = 'Upcoming' | 'Past' | 'Cancelled';

export interface ClubEvent {
  id: string;
  title: string;
  description: string;
  agenda?: string;
  date: string;
  time: string;
  location: string;
  isOnline: boolean;
  category: EventCategory;
  capacity: number;
  rsvps: string[]; // List of user emails who RSVP'd
  speakerName?: string;
  speakerRole?: string;
  status: EventStatus;
}

export type BlogCategory = 'Tutorial' | 'Project Showcase' | 'Career & Advice' | 'Event Recap';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  authorName: string;
  authorRole: string;
  category: BlogCategory;
  publishedAt: string;
  readTimeMinutes: number;
  likes: number;
  isPublished: boolean;
}

export type YearOfStudy = 'Freshman' | 'Sophomore' | 'Junior' | 'Senior' | 'Graduate';
export type ApplicationStatus = 'Pending' | 'Interview' | 'Accepted' | 'Archived';

export interface MembershipApplication {
  id: string;
  fullName: string;
  email: string;
  studentId: string;
  major: string;
  yearOfStudy: YearOfStudy;
  tracks: Track[];
  experienceLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  motivation: string;
  portfolioUrl?: string;
  status: ApplicationStatus;
  submittedAt: string;
  adminNotes?: string;
}

export interface ClubInfo {
  name: string;
  shortName: string;
  nameVi: string;
  shortNameVi: string;
  tagline: string;
  taglineVi?: string;
  university: string;
  universityVi?: string;
  establishedYear: number;
  roomNumber: string;
  emailContact: string;
  discordUrl: string;
  githubOrg: string;
  mission: string;
  missionVi?: string;
  stats: {
    activeMembers: number;
    eventsHosted: number;
    projectsBuilt: number;
    alumniNetwork: number;
  };
}
