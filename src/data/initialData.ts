import { ClubInfo, ClubMember, ClubEvent, BlogPost, MembershipApplication } from '../types';

export const INITIAL_CLUB_INFO: ClubInfo = {
  name: 'NES Club Ho Chi Minh University of Science',
  shortName: 'NES HCMUS',
  nameVi: 'Câu lạc bộ Học thuật NES',
  shortNameVi: 'CLB HT NES',
  tagline: 'The premier student academic society for Software Engineering, AI, Embedded Systems, and Scientific Research.',
  taglineVi: 'Câu lạc bộ học thuật chuyên sâu về Kỹ thuật phần mềm, Trí tuệ nhân tạo, Hệ thống nhúng và Nghiên cứu khoa học sinh viên.',
  university: 'Ho Chi Minh University of Science, VNU-HCM',
  universityVi: 'Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM',
  establishedYear: 2018,
  roomNumber: 'Room I.43, Building I, Nguyen Van Cu Campus, District 5',
  emailContact: 'nesclub@hcmus.edu.vn',
  discordUrl: 'https://discord.gg/nes-hcmus',
  githubOrg: 'https://github.com/nes-hcmus',
  mission: 'The mission of NES Club HCMUS is to cultivate an elite academic community empowering university students to build open-source software, conduct scientific research, organize hands-on technical seminars, and prepare for top-tier global engineering careers.',
  missionVi: 'Sứ mệnh của CLB Học thuật NES (HCMUS) là tạo môi trường học thuật chuyên nghiệp, liên kết sinh viên đam mê công nghệ để cùng thực hiện các dự án mã nguồn mở, nghiên cứu khoa học, tổ chức seminar công nghệ chuyên sâu và chuẩn bị hành trang kỹ sư thực chiến cho các tập đoàn công nghệ hàng đầu.',
  stats: {
    activeMembers: 165,
    eventsHosted: 42,
    projectsBuilt: 28,
    alumniNetwork: 110,
  },
};

export const INITIAL_MEMBERS: ClubMember[] = [
  {
    id: 'mem-1',
    name: 'Elena Rostova',
    role: 'President',
    track: 'Software & AI',
    email: 'e.rostova@metrouni.edu',
    studentId: 'MU23-8841',
    graduationYear: 2027,
    bio: 'Junior in Computer Science focusing on distributed systems and ML inference. Leading overall club strategy, industry partnerships, and campus hackathons.',
    skills: ['Go', 'TypeScript', 'Docker', 'PostgreSQL', 'System Architecture'],
    githubUrl: 'https://github.com/erostova',
    linkedinUrl: 'https://linkedin.com/in/elena-rostova',
    status: 'Active',
    joinedDate: '2023-09-15',
    avatarColor: 'from-amber-600 to-amber-800',
  },
  {
    id: 'mem-2',
    name: 'Marcus Chen',
    role: 'Vice President',
    track: 'Product & UI/UX',
    email: 'm.chen@metrouni.edu',
    studentId: 'MU23-4109',
    graduationYear: 2027,
    bio: 'Product Designer and frontend developer passionate about accessible interface design and design systems. Former design intern at Figma Community.',
    skills: ['Figma', 'React', 'TailwindCSS', 'User Research', 'Design Systems'],
    githubUrl: 'https://github.com/marcuschen-ui',
    linkedinUrl: 'https://linkedin.com/in/marcus-chen-design',
    status: 'Active',
    joinedDate: '2023-09-20',
    avatarColor: 'from-blue-600 to-indigo-800',
  },
  {
    id: 'mem-3',
    name: 'Aisha Al-Mansoor',
    role: 'Tech Lead',
    track: 'Software & AI',
    email: 'a.mansoor@metrouni.edu',
    studentId: 'MU24-1192',
    graduationYear: 2028,
    bio: 'Software engineer exploring full-stack web applications, vector search, and edge computing. Directing student open-source project squads.',
    skills: ['Next.js', 'Node.js', 'MongoDB', 'Python', 'Cloud Architecture'],
    githubUrl: 'https://github.com/aisha-mansoor',
    linkedinUrl: 'https://linkedin.com/in/aisha-almansoor',
    status: 'Active',
    joinedDate: '2024-01-10',
    avatarColor: 'from-emerald-600 to-teal-800',
  },
  {
    id: 'mem-4',
    name: 'Devon Vance',
    role: 'Design Lead',
    track: 'Product & UI/UX',
    email: 'd.vance@metrouni.edu',
    studentId: 'MU24-7731',
    graduationYear: 2028,
    bio: 'Interaction designer fascinated by typographic hierarchy, spatial computing, and micro-interactions. Championing zero-pill UI guidelines.',
    skills: ['Interaction Design', 'CSS Animation', 'Wireframing', 'Typography'],
    githubUrl: 'https://github.com/devonvance',
    linkedinUrl: 'https://linkedin.com/in/devon-vance',
    status: 'Active',
    joinedDate: '2024-02-01',
    avatarColor: 'from-purple-600 to-indigo-800',
  },
  {
    id: 'mem-5',
    name: 'Kaito Tanaka',
    role: 'Core Member',
    track: 'Hardware & Robotics',
    email: 'k.tanaka@metrouni.edu',
    studentId: 'MU25-0922',
    graduationYear: 2029,
    bio: 'Sophomore Electrical & Computer Engineering major building autonomous campus rovers and IoT air quality monitoring nodes.',
    skills: ['Embedded C++', 'STM32', 'ROS2', 'KiCAD', 'Sensor Fusion'],
    githubUrl: 'https://github.com/kaito-tanaka',
    linkedinUrl: 'https://linkedin.com/in/kaito-tanaka-hw',
    status: 'Active',
    joinedDate: '2024-09-12',
    avatarColor: 'from-stone-600 to-stone-800',
  },
  {
    id: 'mem-6',
    name: 'Sophia Reynolds',
    role: 'Event Coordinator',
    track: 'Community & Ops',
    email: 's.reynolds@metrouni.edu',
    studentId: 'MU24-5210',
    graduationYear: 2028,
    bio: 'Business & Computer Science double major managing hackathon logistics, speaker outreach, sponsor relationships, and community dinner nights.',
    skills: ['Project Management', 'Sponsorship Outreach', 'Budgeting', 'Event Logistics'],
    githubUrl: 'https://github.com/sophiareynolds',
    linkedinUrl: 'https://linkedin.com/in/sophia-reynolds',
    status: 'Active',
    joinedDate: '2024-03-18',
    avatarColor: 'from-rose-600 to-pink-800',
  },
  {
    id: 'mem-7',
    name: 'Julian O\'Connor',
    role: 'Alumni',
    track: 'Software & AI',
    email: 'j.oconnor@alumni.metrouni.edu',
    studentId: 'MU21-3011',
    graduationYear: 2025,
    bio: 'Founding President (Class of 2025), now Software Engineer at Stripe. Continues to advise club mentorship tracks and resume reviews.',
    skills: ['Rust', 'Distributed Databases', 'Fintech Infrastructure'],
    githubUrl: 'https://github.com/joconnor-eng',
    linkedinUrl: 'https://linkedin.com/in/julian-oconnor',
    status: 'Alumni',
    joinedDate: '2021-09-01',
    avatarColor: 'from-neutral-700 to-neutral-900',
  },
];

export const INITIAL_EVENTS: ClubEvent[] = [
  {
    id: 'ev-1',
    title: 'Full-Stack Next.js 15 & MongoDB Workshop',
    description: 'Hands-on live coding workshop covering server actions, MongoDB Atlas M0 cluster connections, schema design with Mongoose, and zero-downtime deployment to Vercel.',
    agenda: '1. Next.js App Router Architecture\n2. Setting up MongoDB Free M0\n3. Building REST & Server Actions\n4. Deploying to Vercel in 5 minutes',
    date: '2026-10-18',
    time: '18:00 - 20:30',
    location: 'Turing Hall, Auditorium B',
    isOnline: false,
    category: 'Workshop',
    capacity: 45,
    rsvps: ['student1@metrouni.edu', 'student2@metrouni.edu', 'student3@metrouni.edu'],
    speakerName: 'Aisha Al-Mansoor',
    speakerRole: 'Tech Lead @ ApexTech',
    status: 'Upcoming',
  },
  {
    id: 'ev-2',
    title: 'Autumn Hack Night: 48-Hour Campus Micro-Apps',
    description: 'Bring an idea or join an open project squad to build and ship useful utilities for university students. Free pizza, mentorship, and API credits provided.',
    agenda: 'Friday 6PM: Squad formation & pitching\nSaturday 12PM: Mentorship check-ins\nSunday 4PM: Live demos & community vote',
    date: '2026-10-24',
    time: '18:00 (Fri) - 17:00 (Sun)',
    location: 'Student Innovation Center, Floor 2',
    isOnline: false,
    category: 'Hackathon',
    capacity: 80,
    rsvps: ['elena@metrouni.edu', 'marcus@metrouni.edu'],
    speakerName: 'Elena Rostova',
    speakerRole: 'Club President',
    status: 'Upcoming',
  },
  {
    id: 'ev-3',
    title: 'Industry Fireside: From University Club to Senior Engineer',
    description: 'Q&A session with alumni software engineers discussing technical interview preparation, early-career expectations, and navigating open-source contributions.',
    agenda: '1. Resume and portfolio strategy\n2. System design interview fundamentals\n3. Open Q&A from audience',
    date: '2026-11-05',
    time: '19:00 - 20:15',
    location: 'Online via Discord Stage',
    isOnline: true,
    category: 'Tech Talk',
    capacity: 150,
    rsvps: ['test@metrouni.edu'],
    speakerName: 'Julian O\'Connor',
    speakerRole: 'Software Engineer @ Stripe',
    status: 'Upcoming',
  },
  {
    id: 'ev-4',
    title: 'Introduction to Embedded Hardware & Sensors',
    description: 'Hands-on teardown and programming of microcontroller dev boards for environmental monitoring on campus.',
    agenda: '1. Microcontroller pinouts\n2. I2C/SPI sensor interfaces\n3. Serial telemetry collection',
    date: '2026-09-14',
    time: '17:30 - 19:30',
    location: 'Engineering Lab 104',
    isOnline: false,
    category: 'Workshop',
    capacity: 30,
    rsvps: ['kaito@metrouni.edu', 'aisha@metrouni.edu'],
    speakerName: 'Kaito Tanaka',
    speakerRole: 'Hardware Lead',
    status: 'Past',
  },
  {
    id: 'ev-5',
    title: 'Spring Open Source Showcase 2026',
    description: 'Showcase of 8 student projects built during the semester, including campus dining bot, study room tracker, and autonomous rover prototype.',
    agenda: '1. Project demonstrations\n2. Award announcements\n3. Networking reception',
    date: '2026-05-20',
    time: '16:00 - 19:00',
    location: 'University Commons Great Hall',
    isOnline: false,
    category: 'Project Demo',
    capacity: 120,
    rsvps: [],
    speakerName: 'Apex Leadership Team',
    speakerRole: 'ApexTech',
    status: 'Past',
  },
];

export const INITIAL_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Building a Full-Stack University Club Website with Next.js & MongoDB M0',
    slug: 'building-university-club-website-nextjs-mongodb',
    excerpt: 'A complete architectural walkthrough of how we structure our production website using Next.js App Router, MongoDB Atlas free tier, and Vercel serverless functions.',
    content: `When building student portals, speed, zero-cost operational tiers, and ease of collaboration are vital. In this guide, we break down our architecture:

### 1. Why MongoDB Atlas Free Tier (M0)?
The M0 sandbox provides 512MB storage with zero monthly cost, replica sets, and seamless automated backups. For a university club handling thousands of events, member records, and blog articles, this is more than sufficient.

### 2. Next.js App Router & Mongoose Connection Pooling
In serverless environments like Vercel, traditional long-running database connections can exhaust connection limits. We use a cached connection helper:

\`\`\`typescript
// lib/mongodb.ts
import mongoose from 'mongoose';

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI!, {
      bufferCommands: false,
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
\`\`\`

### 3. Deployment Pipeline
With GitHub integrated directly into Vercel, every pull request gets an isolated preview environment, letting club leads review UI changes before merging into production.`,
    authorName: 'Aisha Al-Mansoor',
    authorRole: 'Tech Lead',
    category: 'Tutorial',
    publishedAt: '2026-09-22',
    readTimeMinutes: 5,
    likes: 34,
    isPublished: true,
  },
  {
    id: 'post-2',
    title: 'Recap: Our Campus Study Room Tracker Launch',
    slug: 'campus-study-room-tracker-launch-recap',
    excerpt: 'How four freshmen and sophomores built an open-source IoT room occupancy monitor during our 48-hour hackathon, now deployed in two library floors.',
    content: `During last semester's build night, a team of four students set out to solve a perennial campus problem: finding a quiet, unoccupied study room in the central library during midterm season.

### The Stack
- **Hardware**: ESP32 microcontrollers paired with infrared thermal arrays to count occupancy without capturing video (privacy-first).
- **Backend**: Lightweight Express service deployed on Render.com free web service.
- **Frontend**: Next.js single page dashboard showing live availability and historical quiet hours.

Over 1,200 students visited the dashboard during finals week. Read our GitHub documentation to contribute to phase 2!`,
    authorName: 'Marcus Chen',
    authorRole: 'Vice President',
    category: 'Project Showcase',
    publishedAt: '2026-09-10',
    readTimeMinutes: 4,
    likes: 48,
    isPublished: true,
  },
  {
    id: 'post-3',
    title: 'Zero-Pill Design: Why We Redesigned Our Club Interfaces',
    slug: 'zero-pill-design-redesigning-club-interfaces',
    excerpt: 'An essay on moving away from generic AI-generated badges and card-within-card clutter toward disciplined typography and structured white space.',
    content: `If you browse student tech sites built in the last two years, you notice a recurring pattern: every card has two colored capsule tags, floating stat boxes, and heavy dropshadows.

We overhauled our visual language with 3 simple principles:
1. **Unboxed Metadata**: Category, timestamp, and read times rendered as quiet text separated by middle dots (·) rather than colored pill badges.
2. **Tabular Numerals**: Ensuring all dates, counts, and capacities use monospace or tabular numbers.
3. **Single-Elevation Depth**: Flat surfaces with 1px hairline dividers replace stacked translucent cards.`,
    authorName: 'Devon Vance',
    authorRole: 'Design Lead',
    category: 'Career & Advice',
    publishedAt: '2026-08-28',
    readTimeMinutes: 6,
    likes: 29,
    isPublished: true,
  },
];

export const INITIAL_APPLICATIONS: MembershipApplication[] = [
  {
    id: 'app-1',
    fullName: 'Liam Thorne',
    email: 'l.thorne@metrouni.edu',
    studentId: 'MU26-9041',
    major: 'Computer Science & Mathematics',
    yearOfStudy: 'Freshman',
    tracks: ['Software & AI', 'Hardware & Robotics'],
    experienceLevel: 'Intermediate',
    motivation: 'I built several robotics projects in high school and want to collaborate with peers on university-level distributed applications and hackathons.',
    portfolioUrl: 'https://github.com/liamthorne',
    status: 'Pending',
    submittedAt: '2026-09-28T14:20:00Z',
  },
  {
    id: 'app-2',
    fullName: 'Maya Patel',
    email: 'm.patel@metrouni.edu',
    studentId: 'MU25-6320',
    major: 'Cognitive Science & Interaction Design',
    yearOfStudy: 'Sophomore',
    tracks: ['Product & UI/UX'],
    experienceLevel: 'Intermediate',
    motivation: 'Excited to contribute to product design and user research for student open source apps. I love crafting clean design systems.',
    portfolioUrl: 'https://mayapatel.design',
    status: 'Interview',
    submittedAt: '2026-09-26T09:15:00Z',
    adminNotes: 'Strong portfolio in Figma and React; invite to design team coffee chat on Thursday.',
  },
];
