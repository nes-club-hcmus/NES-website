export type Track = 'Học thuật' | 'Điện tử' | 'Truyền thông & Sự kiện' | string;

export type MemberRole =
  | 'Chủ nhiệm CLB'
  | 'Phó Chủ nhiệm'
  | 'Trưởng ban Học thuật'
  | 'Trưởng ban Điện tử'
  | 'Trưởng ban Truyền thông'
  | 'Thành viên nòng cốt'
  | 'Cố vấn chuyên môn'
  | 'Cựu thành viên'
  | string;

export type MemberStatus = 'Active' | 'On Leave' | 'Alumni' | string;

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
  facebookUrl?: string;
  status: MemberStatus;
  joinedDate: string;
  avatarColor: string;
}

export type EventCategory =
  | 'Hội thảo & Seminar'
  | 'Workshop Thực hành'
  | 'Chuỗi Ôn tập'
  | 'Tọa đàm'
  | 'Giao lưu & Ngoại khóa'
  | string;

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
  rsvps: string[]; // Danh sách email đăng ký tham dự
  speakerName?: string;
  speakerRole?: string;
  status: EventStatus;
}

export type BlogCategory =
  | 'Vật lý & Lý thuyết'
  | 'Kỹ thuật Điện tử'
  | 'Kinh nghiệm Học tập'
  | 'Đời sống CLB'
  | string;

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

export type YearOfStudy = 'Năm nhất' | 'Năm hai' | 'Năm ba' | 'Năm tư' | 'Cao học' | string;
export type ApplicationStatus = 'Pending' | 'Interview' | 'Accepted' | 'Archived';

export interface MembershipApplication {
  id: string;
  fullName: string;
  email: string;
  studentId: string;
  major: string;
  yearOfStudy: YearOfStudy;
  tracks: string[];
  experienceLevel: 'Mới bắt đầu' | 'Khá' | 'Nâng cao' | string;
  motivation: string;
  portfolioUrl?: string;
  status: ApplicationStatus;
  submittedAt: string;
  adminNotes?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Học thuật & Seminar' | 'Thực hành & Chế tạo' | 'Gắn kết & Ngoại khóa' | string;
  imageUrl: string;
  date: string;
  description: string;
}

export interface ScientistFigure {
  letter: 'N' | 'E' | 'S';
  name: string;
  field: string;
  contribution: string;
}

export interface ClubInfo {
  name: string;
  shortName: string;
  faculty: string;
  university: string;
  tagline: string;
  establishedYear: number;
  roomNumber: string;
  emailContact: string;
  facebookUrl: string;
  discordUrl?: string;
  githubOrg?: string;
  mission: string;
  historyAndMeaning: {
    title: string;
    description: string;
    figures: ScientistFigure[];
  };
  twoPillars: {
    title: string;
    slug: string;
    badge: string;
    summary: string;
    description: string;
    activities: string[];
  }[];
  stats: {
    activeMembers: number;
    eventsHosted: number;
    projectsBuilt: number;
    alumniNetwork: number;
  };
}
