export const INITIAL_CLUB_INFO = {
	name: "NES Club Ho Chi Minh University of Science",
	shortName: "NES HCMUS",
	nameVi: "Câu lạc bộ Học thuật NES",
	shortNameVi: "CLB HT NES",
	tagline: "The premier student academic society for Software Engineering, AI, Embedded Systems, and Scientific Research.",
	taglineVi: "Câu lạc bộ học thuật chuyên sâu về Kỹ thuật phần mềm, Trí tuệ nhân tạo, Hệ thống nhúng và Nghiên cứu khoa học sinh viên.",
	university: "Ho Chi Minh University of Science, VNU-HCM",
	universityVi: "Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM",
	establishedYear: 2018,
	roomNumber: "Room I.43, Building I, Nguyen Van Cu Campus, District 5",
	emailContact: "nesclub@hcmus.edu.vn",
	discordUrl: "https://discord.gg/nes-hcmus",
	githubOrg: "https://github.com/nes-hcmus",
	mission: "The mission of NES Club HCMUS is to cultivate an elite academic community empowering university students to build open-source software, conduct scientific research, organize hands-on technical seminars, and prepare for top-tier global engineering careers.",
	missionVi: "Sứ mệnh của CLB Học thuật NES (HCMUS) là tạo môi trường học thuật chuyên nghiệp, liên kết sinh viên đam mê công nghệ để cùng thực hiện các dự án mã nguồn mở, nghiên cứu khoa học, tổ chức seminar công nghệ chuyên sâu và chuẩn bị hành trang kỹ sư thực chiến cho các tập đoàn công nghệ hàng đầu.",
	stats: {
		activeMembers: 165,
		eventsHosted: 42,
		projectsBuilt: 28,
		alumniNetwork: 110
	}
};
export const INITIAL_MEMBERS = [
	{
		id: "mem-1",
		name: "Elena Rostova",
		role: "President",
		track: "Software & AI",
		email: "e.rostova@metrouni.edu",
		studentId: "MU23-8841",
		graduationYear: 2027,
		bio: "Junior in Computer Science focusing on distributed systems and ML inference. Leading overall club strategy, industry partnerships, and campus hackathons.",
		skills: [
			"Go",
			"TypeScript",
			"Docker",
			"PostgreSQL",
			"System Architecture"
		],
		githubUrl: "https://github.com/erostova",
		linkedinUrl: "https://linkedin.com/in/elena-rostova",
		status: "Active",
		joinedDate: "2023-09-15",
		avatarColor: "from-amber-600 to-amber-800"
	},
	{
		id: "mem-2",
		name: "Marcus Chen",
		role: "Vice President",
		track: "Product & UI/UX",
		email: "m.chen@metrouni.edu",
		studentId: "MU23-4109",
		graduationYear: 2027,
		bio: "Product Designer and frontend developer passionate about accessible interface design and design systems. Former design intern at Figma Community.",
		skills: [
			"Figma",
			"React",
			"TailwindCSS",
			"User Research",
			"Design Systems"
		],
		githubUrl: "https://github.com/marcuschen-ui",
		linkedinUrl: "https://linkedin.com/in/marcus-chen-design",
		status: "Active",
		joinedDate: "2023-09-20",
		avatarColor: "from-blue-600 to-indigo-800"
	},
	{
		id: "mem-3",
		name: "Aisha Al-Mansoor",
		role: "Tech Lead",
		track: "Software & AI",
		email: "a.mansoor@metrouni.edu",
		studentId: "MU24-1192",
		graduationYear: 2028,
		bio: "Software engineer exploring full-stack web applications, vector search, and edge computing. Directing student open-source project squads.",
		skills: [
			"Next.js",
			"Node.js",
			"MongoDB",
			"Python",
			"Cloud Architecture"
		],
		githubUrl: "https://github.com/aisha-mansoor",
		linkedinUrl: "https://linkedin.com/in/aisha-almansoor",
		status: "Active",
		joinedDate: "2024-01-10",
		avatarColor: "from-emerald-600 to-teal-800"
	},
	{
		id: "mem-4",
		name: "Devon Vance",
		role: "Design Lead",
		track: "Product & UI/UX",
		email: "d.vance@metrouni.edu",
		studentId: "MU24-7731",
		graduationYear: 2028,
		bio: "Interaction designer fascinated by typographic hierarchy, spatial computing, and micro-interactions. Championing zero-pill UI guidelines.",
		skills: [
			"Interaction Design",
			"CSS Animation",
			"Wireframing",
			"Typography"
		],
		githubUrl: "https://github.com/devonvance",
		linkedinUrl: "https://linkedin.com/in/devon-vance",
		status: "Active",
		joinedDate: "2024-02-01",
		avatarColor: "from-purple-600 to-indigo-800"
	},
	{
		id: "mem-5",
		name: "Kaito Tanaka",
		role: "Core Member",
		track: "Hardware & Robotics",
		email: "k.tanaka@metrouni.edu",
		studentId: "MU25-0922",
		graduationYear: 2029,
		bio: "Sophomore Electrical & Computer Engineering major building autonomous campus rovers and IoT air quality monitoring nodes.",
		skills: [
			"Embedded C++",
			"STM32",
			"ROS2",
			"KiCAD",
			"Sensor Fusion"
		],
		githubUrl: "https://github.com/kaito-tanaka",
		linkedinUrl: "https://linkedin.com/in/kaito-tanaka-hw",
		status: "Active",
		joinedDate: "2024-09-12",
		avatarColor: "from-stone-600 to-stone-800"
	},
	{
		id: "mem-6",
		name: "Sophia Reynolds",
		role: "Event Coordinator",
		track: "Community & Ops",
		email: "s.reynolds@metrouni.edu",
		studentId: "MU24-5210",
		graduationYear: 2028,
		bio: "Business & Computer Science double major managing hackathon logistics, speaker outreach, sponsor relationships, and community dinner nights.",
		skills: [
			"Project Management",
			"Sponsorship Outreach",
			"Budgeting",
			"Event Logistics"
		],
		githubUrl: "https://github.com/sophiareynolds",
		linkedinUrl: "https://linkedin.com/in/sophia-reynolds",
		status: "Active",
		joinedDate: "2024-03-18",
		avatarColor: "from-rose-600 to-pink-800"
	},
	{
		id: "mem-7",
		name: "Julian O'Connor",
		role: "Alumni",
		track: "Software & AI",
		email: "j.oconnor@alumni.metrouni.edu",
		studentId: "MU21-3011",
		graduationYear: 2025,
		bio: "Founding President (Class of 2025), now Software Engineer at Stripe. Continues to advise club mentorship tracks and resume reviews.",
		skills: [
			"Rust",
			"Distributed Databases",
			"Fintech Infrastructure"
		],
		githubUrl: "https://github.com/joconnor-eng",
		linkedinUrl: "https://linkedin.com/in/julian-oconnor",
		status: "Alumni",
		joinedDate: "2021-09-01",
		avatarColor: "from-neutral-700 to-neutral-900"
	}
];
export const INITIAL_EVENTS = [
	{
		id: "ev-1",
		title: "Full-Stack Next.js 15 & MongoDB Workshop",
		description: "Hands-on live coding workshop covering server actions, MongoDB Atlas M0 cluster connections, schema design with Mongoose, and zero-downtime deployment to Vercel.",
		agenda: "1. Next.js App Router Architecture\n2. Setting up MongoDB Free M0\n3. Building REST & Server Actions\n4. Deploying to Vercel in 5 minutes",
		date: "2026-10-18",
		time: "18:00 - 20:30",
		location: "Turing Hall, Auditorium B",
		isOnline: false,
		category: "Workshop",
		capacity: 45,
		rsvps: [
			"student1@metrouni.edu",
			"student2@metrouni.edu",
			"student3@metrouni.edu"
		],
		speakerName: "Aisha Al-Mansoor",
		speakerRole: "Tech Lead @ ApexTech",
		status: "Upcoming"
	},
	{
		id: "ev-2",
		title: "Autumn Hack Night: 48-Hour Campus Micro-Apps",
		description: "Bring an idea or join an open project squad to build and ship useful utilities for university students. Free pizza, mentorship, and API credits provided.",
		agenda: "Friday 6PM: Squad formation & pitching\nSaturday 12PM: Mentorship check-ins\nSunday 4PM: Live demos & community vote",
		date: "2026-10-24",
		time: "18:00 (Fri) - 17:00 (Sun)",
		location: "Student Innovation Center, Floor 2",
		isOnline: false,
		category: "Hackathon",
		capacity: 80,
		rsvps: ["elena@metrouni.edu", "marcus@metrouni.edu"],
		speakerName: "Elena Rostova",
		speakerRole: "Club President",
		status: "Upcoming"
	},
	{
		id: "ev-3",
		title: "Industry Fireside: From University Club to Senior Engineer",
		description: "Q&A session with alumni software engineers discussing technical interview preparation, early-career expectations, and navigating open-source contributions.",
		agenda: "1. Resume and portfolio strategy\n2. System design interview fundamentals\n3. Open Q&A from audience",
		date: "2026-11-05",
		time: "19:00 - 20:15",
		location: "Online via Discord Stage",
		isOnline: true,
		category: "Tech Talk",
		capacity: 150,
		rsvps: ["test@metrouni.edu"],
		speakerName: "Julian O'Connor",
		speakerRole: "Software Engineer @ Stripe",
		status: "Upcoming"
	},
	{
		id: "ev-4",
		title: "Introduction to Embedded Hardware & Sensors",
		description: "Hands-on teardown and programming of microcontroller dev boards for environmental monitoring on campus.",
		agenda: "1. Microcontroller pinouts\n2. I2C/SPI sensor interfaces\n3. Serial telemetry collection",
		date: "2026-09-14",
		time: "17:30 - 19:30",
		location: "Engineering Lab 104",
		isOnline: false,
		category: "Workshop",
		capacity: 30,
		rsvps: ["kaito@metrouni.edu", "aisha@metrouni.edu"],
		speakerName: "Kaito Tanaka",
		speakerRole: "Hardware Lead",
		status: "Past"
	},
	{
		id: "ev-5",
		title: "Spring Open Source Showcase 2026",
		description: "Showcase of 8 student projects built during the semester, including campus dining bot, study room tracker, and autonomous rover prototype.",
		agenda: "1. Project demonstrations\n2. Award announcements\n3. Networking reception",
		date: "2026-05-20",
		time: "16:00 - 19:00",
		location: "University Commons Great Hall",
		isOnline: false,
		category: "Project Demo",
		capacity: 120,
		rsvps: [],
		speakerName: "Apex Leadership Team",
		speakerRole: "ApexTech",
		status: "Past"
	}
];
export const INITIAL_POSTS = [
	{
		id: "post-1",
		title: "Building a Full-Stack University Club Website with Next.js & MongoDB M0",
		slug: "building-university-club-website-nextjs-mongodb",
		excerpt: "A complete architectural walkthrough of how we structure our production website using Next.js App Router, MongoDB Atlas free tier, and Vercel serverless functions.",
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
		authorName: "Aisha Al-Mansoor",
		authorRole: "Tech Lead",
		category: "Tutorial",
		publishedAt: "2026-09-22",
		readTimeMinutes: 5,
		likes: 34,
		isPublished: true
	},
	{
		id: "post-2",
		title: "Recap: Our Campus Study Room Tracker Launch",
		slug: "campus-study-room-tracker-launch-recap",
		excerpt: "How four freshmen and sophomores built an open-source IoT room occupancy monitor during our 48-hour hackathon, now deployed in two library floors.",
		content: `During last semester's build night, a team of four students set out to solve a perennial campus problem: finding a quiet, unoccupied study room in the central library during midterm season.

### The Stack
- **Hardware**: ESP32 microcontrollers paired with infrared thermal arrays to count occupancy without capturing video (privacy-first).
- **Backend**: Lightweight Express service deployed on Render.com free web service.
- **Frontend**: Next.js single page dashboard showing live availability and historical quiet hours.

Over 1,200 students visited the dashboard during finals week. Read our GitHub documentation to contribute to phase 2!`,
		authorName: "Marcus Chen",
		authorRole: "Vice President",
		category: "Project Showcase",
		publishedAt: "2026-09-10",
		readTimeMinutes: 4,
		likes: 48,
		isPublished: true
	},
	{
		id: "post-3",
		title: "Zero-Pill Design: Why We Redesigned Our Club Interfaces",
		slug: "zero-pill-design-redesigning-club-interfaces",
		excerpt: "An essay on moving away from generic AI-generated badges and card-within-card clutter toward disciplined typography and structured white space.",
		content: `If you browse student tech sites built in the last two years, you notice a recurring pattern: every card has two colored capsule tags, floating stat boxes, and heavy dropshadows.

We overhauled our visual language with 3 simple principles:
1. **Unboxed Metadata**: Category, timestamp, and read times rendered as quiet text separated by middle dots (·) rather than colored pill badges.
2. **Tabular Numerals**: Ensuring all dates, counts, and capacities use monospace or tabular numbers.
3. **Single-Elevation Depth**: Flat surfaces with 1px hairline dividers replace stacked translucent cards.`,
		authorName: "Devon Vance",
		authorRole: "Design Lead",
		category: "Career & Advice",
		publishedAt: "2026-08-28",
		readTimeMinutes: 6,
		likes: 29,
		isPublished: true
	}
];
export const INITIAL_APPLICATIONS = [{
	id: "app-1",
	fullName: "Liam Thorne",
	email: "l.thorne@metrouni.edu",
	studentId: "MU26-9041",
	major: "Computer Science & Mathematics",
	yearOfStudy: "Freshman",
	tracks: ["Software & AI", "Hardware & Robotics"],
	experienceLevel: "Intermediate",
	motivation: "I built several robotics projects in high school and want to collaborate with peers on university-level distributed applications and hackathons.",
	portfolioUrl: "https://github.com/liamthorne",
	status: "Pending",
	submittedAt: "2026-09-28T14:20:00Z"
}, {
	id: "app-2",
	fullName: "Maya Patel",
	email: "m.patel@metrouni.edu",
	studentId: "MU25-6320",
	major: "Cognitive Science & Interaction Design",
	yearOfStudy: "Sophomore",
	tracks: ["Product & UI/UX"],
	experienceLevel: "Intermediate",
	motivation: "Excited to contribute to product design and user research for student open source apps. I love crafting clean design systems.",
	portfolioUrl: "https://mayapatel.design",
	status: "Interview",
	submittedAt: "2026-09-26T09:15:00Z",
	adminNotes: "Strong portfolio in Figma and React; invite to design team coffee chat on Thursday."
}];

//# sourceMappingURL=data:application/json;base64,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QUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxhQUFhO0NBQ2Y7Q0FDQTtFQUNFLElBQUk7RUFDSixPQUFPO0VBQ1AsTUFBTTtFQUNOLFNBQVM7RUFDVCxTQUFTOzs7Ozs7RUFNVCxZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxhQUFhO0NBQ2Y7QUFDRjtBQUVBLE9BQU8sTUFBTSx1QkFBZ0QsQ0FDM0Q7Q0FDRSxJQUFJO0NBQ0osVUFBVTtDQUNWLE9BQU87Q0FDUCxXQUFXO0NBQ1gsT0FBTztDQUNQLGFBQWE7Q0FDYixRQUFRLENBQUMsaUJBQWlCLHFCQUFxQjtDQUMvQyxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGNBQWM7Q0FDZCxRQUFRO0NBQ1IsYUFBYTtBQUNmLEdBQ0E7Q0FDRSxJQUFJO0NBQ0osVUFBVTtDQUNWLE9BQU87Q0FDUCxXQUFXO0NBQ1gsT0FBTztDQUNQLGFBQWE7Q0FDYixRQUFRLENBQUMsaUJBQWlCO0NBQzFCLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osY0FBYztDQUNkLFFBQVE7Q0FDUixhQUFhO0NBQ2IsWUFBWTtBQUNkLENBQ0YiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiaW5pdGlhbERhdGEudHMiXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2x1YkluZm8sIENsdWJNZW1iZXIsIENsdWJFdmVudCwgQmxvZ1Bvc3QsIE1lbWJlcnNoaXBBcHBsaWNhdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfQ0xVQl9JTkZPOiBDbHViSW5mbyA9IHtcbiAgbmFtZTogJ05FUyBDbHViIEhvIENoaSBNaW5oIFVuaXZlcnNpdHkgb2YgU2NpZW5jZScsXG4gIHNob3J0TmFtZTogJ05FUyBIQ01VUycsXG4gIG5hbWVWaTogJ0PDonUgbOG6oWMgYuG7mSBI4buNYyB0aHXhuq10IE5FUycsXG4gIHNob3J0TmFtZVZpOiAnQ0xCIEhUIE5FUycsXG4gIHRhZ2xpbmU6ICdUaGUgcHJlbWllciBzdHVkZW50IGFjYWRlbWljIHNvY2lldHkgZm9yIFNvZnR3YXJlIEVuZ2luZWVyaW5nLCBBSSwgRW1iZWRkZWQgU3lzdGVtcywgYW5kIFNjaWVudGlmaWMgUmVzZWFyY2guJyxcbiAgdGFnbGluZVZpOiAnQ8OidSBs4bqhYyBi4buZIGjhu41jIHRodeG6rXQgY2h1ecOqbiBzw6J1IHbhu4EgS+G7uSB0aHXhuq10IHBo4bqnbiBt4buBbSwgVHLDrSB0deG7hyBuaMOibiB04bqhbywgSOG7hyB0aOG7kW5nIG5ow7puZyB2w6AgTmdoacOqbiBj4bupdSBraG9hIGjhu41jIHNpbmggdmnDqm4uJyxcbiAgdW5pdmVyc2l0eTogJ0hvIENoaSBNaW5oIFVuaXZlcnNpdHkgb2YgU2NpZW5jZSwgVk5VLUhDTScsXG4gIHVuaXZlcnNpdHlWaTogJ1RyxrDhu51uZyDEkOG6oWkgaOG7jWMgS2hvYSBo4buNYyBU4buxIG5oacOqbiwgxJBIUUctSENNJyxcbiAgZXN0YWJsaXNoZWRZZWFyOiAyMDE4LFxuICByb29tTnVtYmVyOiAnUm9vbSBJLjQzLCBCdWlsZGluZyBJLCBOZ3V5ZW4gVmFuIEN1IENhbXB1cywgRGlzdHJpY3QgNScsXG4gIGVtYWlsQ29udGFjdDogJ25lc2NsdWJAaGNtdXMuZWR1LnZuJyxcbiAgZGlzY29yZFVybDogJ2h0dHBzOi8vZGlzY29yZC5nZy9uZXMtaGNtdXMnLFxuICBnaXRodWJPcmc6ICdodHRwczovL2dpdGh1Yi5jb20vbmVzLWhjbXVzJyxcbiAgbWlzc2lvbjogJ1RoZSBtaXNzaW9uIG9mIE5FUyBDbHViIEhDTVVTIGlzIHRvIGN1bHRpdmF0ZSBhbiBlbGl0ZSBhY2FkZW1pYyBjb21tdW5pdHkgZW1wb3dlcmluZyB1bml2ZXJzaXR5IHN0dWRlbnRzIHRvIGJ1aWxkIG9wZW4tc291cmNlIHNvZnR3YXJlLCBjb25kdWN0IHNjaWVudGlmaWMgcmVzZWFyY2gsIG9yZ2FuaXplIGhhbmRzLW9uIHRlY2huaWNhbCBzZW1pbmFycywgYW5kIHByZXBhcmUgZm9yIHRvcC10aWVyIGdsb2JhbCBlbmdpbmVlcmluZyBjYXJlZXJzLicsXG4gIG1pc3Npb25WaTogJ1Phu6kgbeG7h25oIGPhu6dhIENMQiBI4buNYyB0aHXhuq10IE5FUyAoSENNVVMpIGzDoCB04bqhbyBtw7RpIHRyxrDhu51uZyBo4buNYyB0aHXhuq10IGNodXnDqm4gbmdoaeG7h3AsIGxpw6puIGvhur90IHNpbmggdmnDqm4gxJFhbSBtw6ogY8O0bmcgbmdo4buHIMSR4buDIGPDuW5nIHRo4buxYyBoaeG7h24gY8OhYyBk4buxIMOhbiBtw6Mgbmd14buTbiBt4bufLCBuZ2hpw6puIGPhu6l1IGtob2EgaOG7jWMsIHThu5UgY2jhu6ljIHNlbWluYXIgY8O0bmcgbmdo4buHIGNodXnDqm4gc8OidSB2w6AgY2h14bqpbiBi4buLIGjDoG5oIHRyYW5nIGvhu7kgc8awIHRo4buxYyBjaGnhur9uIGNobyBjw6FjIHThuq1wIMSRb8OgbiBjw7RuZyBuZ2jhu4cgaMOgbmcgxJHhuqd1LicsXG4gIHN0YXRzOiB7XG4gICAgYWN0aXZlTWVtYmVyczogMTY1LFxuICAgIGV2ZW50c0hvc3RlZDogNDIsXG4gICAgcHJvamVjdHNCdWlsdDogMjgsXG4gICAgYWx1bW5pTmV0d29yazogMTEwLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfTUVNQkVSUzogQ2x1Yk1lbWJlcltdID0gW1xuICB7XG4gICAgaWQ6ICdtZW0tMScsXG4gICAgbmFtZTogJ0VsZW5hIFJvc3RvdmEnLFxuICAgIHJvbGU6ICdQcmVzaWRlbnQnLFxuICAgIHRyYWNrOiAnU29mdHdhcmUgJiBBSScsXG4gICAgZW1haWw6ICdlLnJvc3RvdmFAbWV0cm91bmkuZWR1JyxcbiAgICBzdHVkZW50SWQ6ICdNVTIzLTg4NDEnLFxuICAgIGdyYWR1YXRpb25ZZWFyOiAyMDI3LFxuICAgIGJpbzogJ0p1bmlvciBpbiBDb21wdXRlciBTY2llbmNlIGZvY3VzaW5nIG9uIGRpc3RyaWJ1dGVkIHN5c3RlbXMgYW5kIE1MIGluZmVyZW5jZS4gTGVhZGluZyBvdmVyYWxsIGNsdWIgc3RyYXRlZ3ksIGluZHVzdHJ5IHBhcnRuZXJzaGlwcywgYW5kIGNhbXB1cyBoYWNrYXRob25zLicsXG4gICAgc2tpbGxzOiBbJ0dvJywgJ1R5cGVTY3JpcHQnLCAnRG9ja2VyJywgJ1Bvc3RncmVTUUwnLCAnU3lzdGVtIEFyY2hpdGVjdHVyZSddLFxuICAgIGdpdGh1YlVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lcm9zdG92YScsXG4gICAgbGlua2VkaW5Vcmw6ICdodHRwczovL2xpbmtlZGluLmNvbS9pbi9lbGVuYS1yb3N0b3ZhJyxcbiAgICBzdGF0dXM6ICdBY3RpdmUnLFxuICAgIGpvaW5lZERhdGU6ICcyMDIzLTA5LTE1JyxcbiAgICBhdmF0YXJDb2xvcjogJ2Zyb20tYW1iZXItNjAwIHRvLWFtYmVyLTgwMCcsXG4gIH0sXG4gIHtcbiAgICBpZDogJ21lbS0yJyxcbiAgICBuYW1lOiAnTWFyY3VzIENoZW4nLFxuICAgIHJvbGU6ICdWaWNlIFByZXNpZGVudCcsXG4gICAgdHJhY2s6ICdQcm9kdWN0ICYgVUkvVVgnLFxuICAgIGVtYWlsOiAnbS5jaGVuQG1ldHJvdW5pLmVkdScsXG4gICAgc3R1ZGVudElkOiAnTVUyMy00MTA5JyxcbiAgICBncmFkdWF0aW9uWWVhcjogMjAyNyxcbiAgICBiaW86ICdQcm9kdWN0IERlc2lnbmVyIGFuZCBmcm9udGVuZCBkZXZlbG9wZXIgcGFzc2lvbmF0ZSBhYm91dCBhY2Nlc3NpYmxlIGludGVyZmFjZSBkZXNpZ24gYW5kIGRlc2lnbiBzeXN0ZW1zLiBGb3JtZXIgZGVzaWduIGludGVybiBhdCBGaWdtYSBDb21tdW5pdHkuJyxcbiAgICBza2lsbHM6IFsnRmlnbWEnLCAnUmVhY3QnLCAnVGFpbHdpbmRDU1MnLCAnVXNlciBSZXNlYXJjaCcsICdEZXNpZ24gU3lzdGVtcyddLFxuICAgIGdpdGh1YlVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXJjdXNjaGVuLXVpJyxcbiAgICBsaW5rZWRpblVybDogJ2h0dHBzOi8vbGlua2VkaW4uY29tL2luL21hcmN1cy1jaGVuLWRlc2lnbicsXG4gICAgc3RhdHVzOiAnQWN0aXZlJyxcbiAgICBqb2luZWREYXRlOiAnMjAyMy0wOS0yMCcsXG4gICAgYXZhdGFyQ29sb3I6ICdmcm9tLWJsdWUtNjAwIHRvLWluZGlnby04MDAnLFxuICB9LFxuICB7XG4gICAgaWQ6ICdtZW0tMycsXG4gICAgbmFtZTogJ0Fpc2hhIEFsLU1hbnNvb3InLFxuICAgIHJvbGU6ICdUZWNoIExlYWQnLFxuICAgIHRyYWNrOiAnU29mdHdhcmUgJiBBSScsXG4gICAgZW1haWw6ICdhLm1hbnNvb3JAbWV0cm91bmkuZWR1JyxcbiAgICBzdHVkZW50SWQ6ICdNVTI0LTExOTInLFxuICAgIGdyYWR1YXRpb25ZZWFyOiAyMDI4LFxuICAgIGJpbzogJ1NvZnR3YXJlIGVuZ2luZWVyIGV4cGxvcmluZyBmdWxsLXN0YWNrIHdlYiBhcHBsaWNhdGlvbnMsIHZlY3RvciBzZWFyY2gsIGFuZCBlZGdlIGNvbXB1dGluZy4gRGlyZWN0aW5nIHN0dWRlbnQgb3Blbi1zb3VyY2UgcHJvamVjdCBzcXVhZHMuJyxcbiAgICBza2lsbHM6IFsnTmV4dC5qcycsICdOb2RlLmpzJywgJ01vbmdvREInLCAnUHl0aG9uJywgJ0Nsb3VkIEFyY2hpdGVjdHVyZSddLFxuICAgIGdpdGh1YlVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9haXNoYS1tYW5zb29yJyxcbiAgICBsaW5rZWRpblVybDogJ2h0dHBzOi8vbGlua2VkaW4uY29tL2luL2Fpc2hhLWFsbWFuc29vcicsXG4gICAgc3RhdHVzOiAnQWN0aXZlJyxcbiAgICBqb2luZWREYXRlOiAnMjAyNC0wMS0xMCcsXG4gICAgYXZhdGFyQ29sb3I6ICdmcm9tLWVtZXJhbGQtNjAwIHRvLXRlYWwtODAwJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnbWVtLTQnLFxuICAgIG5hbWU6ICdEZXZvbiBWYW5jZScsXG4gICAgcm9sZTogJ0Rlc2lnbiBMZWFkJyxcbiAgICB0cmFjazogJ1Byb2R1Y3QgJiBVSS9VWCcsXG4gICAgZW1haWw6ICdkLnZhbmNlQG1ldHJvdW5pLmVkdScsXG4gICAgc3R1ZGVudElkOiAnTVUyNC03NzMxJyxcbiAgICBncmFkdWF0aW9uWWVhcjogMjAyOCxcbiAgICBiaW86ICdJbnRlcmFjdGlvbiBkZXNpZ25lciBmYXNjaW5hdGVkIGJ5IHR5cG9ncmFwaGljIGhpZXJhcmNoeSwgc3BhdGlhbCBjb21wdXRpbmcsIGFuZCBtaWNyby1pbnRlcmFjdGlvbnMuIENoYW1waW9uaW5nIHplcm8tcGlsbCBVSSBndWlkZWxpbmVzLicsXG4gICAgc2tpbGxzOiBbJ0ludGVyYWN0aW9uIERlc2lnbicsICdDU1MgQW5pbWF0aW9uJywgJ1dpcmVmcmFtaW5nJywgJ1R5cG9ncmFwaHknXSxcbiAgICBnaXRodWJVcmw6ICdodHRwczovL2dpdGh1Yi5jb20vZGV2b252YW5jZScsXG4gICAgbGlua2VkaW5Vcmw6ICdodHRwczovL2xpbmtlZGluLmNvbS9pbi9kZXZvbi12YW5jZScsXG4gICAgc3RhdHVzOiAnQWN0aXZlJyxcbiAgICBqb2luZWREYXRlOiAnMjAyNC0wMi0wMScsXG4gICAgYXZhdGFyQ29sb3I6ICdmcm9tLXB1cnBsZS02MDAgdG8taW5kaWdvLTgwMCcsXG4gIH0sXG4gIHtcbiAgICBpZDogJ21lbS01JyxcbiAgICBuYW1lOiAnS2FpdG8gVGFuYWthJyxcbiAgICByb2xlOiAnQ29yZSBNZW1iZXInLFxuICAgIHRyYWNrOiAnSGFyZHdhcmUgJiBSb2JvdGljcycsXG4gICAgZW1haWw6ICdrLnRhbmFrYUBtZXRyb3VuaS5lZHUnLFxuICAgIHN0dWRlbnRJZDogJ01VMjUtMDkyMicsXG4gICAgZ3JhZHVhdGlvblllYXI6IDIwMjksXG4gICAgYmlvOiAnU29waG9tb3JlIEVsZWN0cmljYWwgJiBDb21wdXRlciBFbmdpbmVlcmluZyBtYWpvciBidWlsZGluZyBhdXRvbm9tb3VzIGNhbXB1cyByb3ZlcnMgYW5kIElvVCBhaXIgcXVhbGl0eSBtb25pdG9yaW5nIG5vZGVzLicsXG4gICAgc2tpbGxzOiBbJ0VtYmVkZGVkIEMrKycsICdTVE0zMicsICdST1MyJywgJ0tpQ0FEJywgJ1NlbnNvciBGdXNpb24nXSxcbiAgICBnaXRodWJVcmw6ICdodHRwczovL2dpdGh1Yi5jb20va2FpdG8tdGFuYWthJyxcbiAgICBsaW5rZWRpblVybDogJ2h0dHBzOi8vbGlua2VkaW4uY29tL2luL2thaXRvLXRhbmFrYS1odycsXG4gICAgc3RhdHVzOiAnQWN0aXZlJyxcbiAgICBqb2luZWREYXRlOiAnMjAyNC0wOS0xMicsXG4gICAgYXZhdGFyQ29sb3I6ICdmcm9tLXN0b25lLTYwMCB0by1zdG9uZS04MDAnLFxuICB9LFxuICB7XG4gICAgaWQ6ICdtZW0tNicsXG4gICAgbmFtZTogJ1NvcGhpYSBSZXlub2xkcycsXG4gICAgcm9sZTogJ0V2ZW50IENvb3JkaW5hdG9yJyxcbiAgICB0cmFjazogJ0NvbW11bml0eSAmIE9wcycsXG4gICAgZW1haWw6ICdzLnJleW5vbGRzQG1ldHJvdW5pLmVkdScsXG4gICAgc3R1ZGVudElkOiAnTVUyNC01MjEwJyxcbiAgICBncmFkdWF0aW9uWWVhcjogMjAyOCxcbiAgICBiaW86ICdCdXNpbmVzcyAmIENvbXB1dGVyIFNjaWVuY2UgZG91YmxlIG1ham9yIG1hbmFnaW5nIGhhY2thdGhvbiBsb2dpc3RpY3MsIHNwZWFrZXIgb3V0cmVhY2gsIHNwb25zb3IgcmVsYXRpb25zaGlwcywgYW5kIGNvbW11bml0eSBkaW5uZXIgbmlnaHRzLicsXG4gICAgc2tpbGxzOiBbJ1Byb2plY3QgTWFuYWdlbWVudCcsICdTcG9uc29yc2hpcCBPdXRyZWFjaCcsICdCdWRnZXRpbmcnLCAnRXZlbnQgTG9naXN0aWNzJ10sXG4gICAgZ2l0aHViVXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL3NvcGhpYXJleW5vbGRzJyxcbiAgICBsaW5rZWRpblVybDogJ2h0dHBzOi8vbGlua2VkaW4uY29tL2luL3NvcGhpYS1yZXlub2xkcycsXG4gICAgc3RhdHVzOiAnQWN0aXZlJyxcbiAgICBqb2luZWREYXRlOiAnMjAyNC0wMy0xOCcsXG4gICAgYXZhdGFyQ29sb3I6ICdmcm9tLXJvc2UtNjAwIHRvLXBpbmstODAwJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnbWVtLTcnLFxuICAgIG5hbWU6ICdKdWxpYW4gT1xcJ0Nvbm5vcicsXG4gICAgcm9sZTogJ0FsdW1uaScsXG4gICAgdHJhY2s6ICdTb2Z0d2FyZSAmIEFJJyxcbiAgICBlbWFpbDogJ2oub2Nvbm5vckBhbHVtbmkubWV0cm91bmkuZWR1JyxcbiAgICBzdHVkZW50SWQ6ICdNVTIxLTMwMTEnLFxuICAgIGdyYWR1YXRpb25ZZWFyOiAyMDI1LFxuICAgIGJpbzogJ0ZvdW5kaW5nIFByZXNpZGVudCAoQ2xhc3Mgb2YgMjAyNSksIG5vdyBTb2Z0d2FyZSBFbmdpbmVlciBhdCBTdHJpcGUuIENvbnRpbnVlcyB0byBhZHZpc2UgY2x1YiBtZW50b3JzaGlwIHRyYWNrcyBhbmQgcmVzdW1lIHJldmlld3MuJyxcbiAgICBza2lsbHM6IFsnUnVzdCcsICdEaXN0cmlidXRlZCBEYXRhYmFzZXMnLCAnRmludGVjaCBJbmZyYXN0cnVjdHVyZSddLFxuICAgIGdpdGh1YlVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qb2Nvbm5vci1lbmcnLFxuICAgIGxpbmtlZGluVXJsOiAnaHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vanVsaWFuLW9jb25ub3InLFxuICAgIHN0YXR1czogJ0FsdW1uaScsXG4gICAgam9pbmVkRGF0ZTogJzIwMjEtMDktMDEnLFxuICAgIGF2YXRhckNvbG9yOiAnZnJvbS1uZXV0cmFsLTcwMCB0by1uZXV0cmFsLTkwMCcsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgSU5JVElBTF9FVkVOVFM6IENsdWJFdmVudFtdID0gW1xuICB7XG4gICAgaWQ6ICdldi0xJyxcbiAgICB0aXRsZTogJ0Z1bGwtU3RhY2sgTmV4dC5qcyAxNSAmIE1vbmdvREIgV29ya3Nob3AnLFxuICAgIGRlc2NyaXB0aW9uOiAnSGFuZHMtb24gbGl2ZSBjb2Rpbmcgd29ya3Nob3AgY292ZXJpbmcgc2VydmVyIGFjdGlvbnMsIE1vbmdvREIgQXRsYXMgTTAgY2x1c3RlciBjb25uZWN0aW9ucywgc2NoZW1hIGRlc2lnbiB3aXRoIE1vbmdvb3NlLCBhbmQgemVyby1kb3dudGltZSBkZXBsb3ltZW50IHRvIFZlcmNlbC4nLFxuICAgIGFnZW5kYTogJzEuIE5leHQuanMgQXBwIFJvdXRlciBBcmNoaXRlY3R1cmVcXG4yLiBTZXR0aW5nIHVwIE1vbmdvREIgRnJlZSBNMFxcbjMuIEJ1aWxkaW5nIFJFU1QgJiBTZXJ2ZXIgQWN0aW9uc1xcbjQuIERlcGxveWluZyB0byBWZXJjZWwgaW4gNSBtaW51dGVzJyxcbiAgICBkYXRlOiAnMjAyNi0xMC0xOCcsXG4gICAgdGltZTogJzE4OjAwIC0gMjA6MzAnLFxuICAgIGxvY2F0aW9uOiAnVHVyaW5nIEhhbGwsIEF1ZGl0b3JpdW0gQicsXG4gICAgaXNPbmxpbmU6IGZhbHNlLFxuICAgIGNhdGVnb3J5OiAnV29ya3Nob3AnLFxuICAgIGNhcGFjaXR5OiA0NSxcbiAgICByc3ZwczogWydzdHVkZW50MUBtZXRyb3VuaS5lZHUnLCAnc3R1ZGVudDJAbWV0cm91bmkuZWR1JywgJ3N0dWRlbnQzQG1ldHJvdW5pLmVkdSddLFxuICAgIHNwZWFrZXJOYW1lOiAnQWlzaGEgQWwtTWFuc29vcicsXG4gICAgc3BlYWtlclJvbGU6ICdUZWNoIExlYWQgQCBBcGV4VGVjaCcsXG4gICAgc3RhdHVzOiAnVXBjb21pbmcnLFxuICB9LFxuICB7XG4gICAgaWQ6ICdldi0yJyxcbiAgICB0aXRsZTogJ0F1dHVtbiBIYWNrIE5pZ2h0OiA0OC1Ib3VyIENhbXB1cyBNaWNyby1BcHBzJyxcbiAgICBkZXNjcmlwdGlvbjogJ0JyaW5nIGFuIGlkZWEgb3Igam9pbiBhbiBvcGVuIHByb2plY3Qgc3F1YWQgdG8gYnVpbGQgYW5kIHNoaXAgdXNlZnVsIHV0aWxpdGllcyBmb3IgdW5pdmVyc2l0eSBzdHVkZW50cy4gRnJlZSBwaXp6YSwgbWVudG9yc2hpcCwgYW5kIEFQSSBjcmVkaXRzIHByb3ZpZGVkLicsXG4gICAgYWdlbmRhOiAnRnJpZGF5IDZQTTogU3F1YWQgZm9ybWF0aW9uICYgcGl0Y2hpbmdcXG5TYXR1cmRheSAxMlBNOiBNZW50b3JzaGlwIGNoZWNrLWluc1xcblN1bmRheSA0UE06IExpdmUgZGVtb3MgJiBjb21tdW5pdHkgdm90ZScsXG4gICAgZGF0ZTogJzIwMjYtMTAtMjQnLFxuICAgIHRpbWU6ICcxODowMCAoRnJpKSAtIDE3OjAwIChTdW4pJyxcbiAgICBsb2NhdGlvbjogJ1N0dWRlbnQgSW5ub3ZhdGlvbiBDZW50ZXIsIEZsb29yIDInLFxuICAgIGlzT25saW5lOiBmYWxzZSxcbiAgICBjYXRlZ29yeTogJ0hhY2thdGhvbicsXG4gICAgY2FwYWNpdHk6IDgwLFxuICAgIHJzdnBzOiBbJ2VsZW5hQG1ldHJvdW5pLmVkdScsICdtYXJjdXNAbWV0cm91bmkuZWR1J10sXG4gICAgc3BlYWtlck5hbWU6ICdFbGVuYSBSb3N0b3ZhJyxcbiAgICBzcGVha2VyUm9sZTogJ0NsdWIgUHJlc2lkZW50JyxcbiAgICBzdGF0dXM6ICdVcGNvbWluZycsXG4gIH0sXG4gIHtcbiAgICBpZDogJ2V2LTMnLFxuICAgIHRpdGxlOiAnSW5kdXN0cnkgRmlyZXNpZGU6IEZyb20gVW5pdmVyc2l0eSBDbHViIHRvIFNlbmlvciBFbmdpbmVlcicsXG4gICAgZGVzY3JpcHRpb246ICdRJkEgc2Vzc2lvbiB3aXRoIGFsdW1uaSBzb2Z0d2FyZSBlbmdpbmVlcnMgZGlzY3Vzc2luZyB0ZWNobmljYWwgaW50ZXJ2aWV3IHByZXBhcmF0aW9uLCBlYXJseS1jYXJlZXIgZXhwZWN0YXRpb25zLCBhbmQgbmF2aWdhdGluZyBvcGVuLXNvdXJjZSBjb250cmlidXRpb25zLicsXG4gICAgYWdlbmRhOiAnMS4gUmVzdW1lIGFuZCBwb3J0Zm9saW8gc3RyYXRlZ3lcXG4yLiBTeXN0ZW0gZGVzaWduIGludGVydmlldyBmdW5kYW1lbnRhbHNcXG4zLiBPcGVuIFEmQSBmcm9tIGF1ZGllbmNlJyxcbiAgICBkYXRlOiAnMjAyNi0xMS0wNScsXG4gICAgdGltZTogJzE5OjAwIC0gMjA6MTUnLFxuICAgIGxvY2F0aW9uOiAnT25saW5lIHZpYSBEaXNjb3JkIFN0YWdlJyxcbiAgICBpc09ubGluZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1RlY2ggVGFsaycsXG4gICAgY2FwYWNpdHk6IDE1MCxcbiAgICByc3ZwczogWyd0ZXN0QG1ldHJvdW5pLmVkdSddLFxuICAgIHNwZWFrZXJOYW1lOiAnSnVsaWFuIE9cXCdDb25ub3InLFxuICAgIHNwZWFrZXJSb2xlOiAnU29mdHdhcmUgRW5naW5lZXIgQCBTdHJpcGUnLFxuICAgIHN0YXR1czogJ1VwY29taW5nJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnZXYtNCcsXG4gICAgdGl0bGU6ICdJbnRyb2R1Y3Rpb24gdG8gRW1iZWRkZWQgSGFyZHdhcmUgJiBTZW5zb3JzJyxcbiAgICBkZXNjcmlwdGlvbjogJ0hhbmRzLW9uIHRlYXJkb3duIGFuZCBwcm9ncmFtbWluZyBvZiBtaWNyb2NvbnRyb2xsZXIgZGV2IGJvYXJkcyBmb3IgZW52aXJvbm1lbnRhbCBtb25pdG9yaW5nIG9uIGNhbXB1cy4nLFxuICAgIGFnZW5kYTogJzEuIE1pY3JvY29udHJvbGxlciBwaW5vdXRzXFxuMi4gSTJDL1NQSSBzZW5zb3IgaW50ZXJmYWNlc1xcbjMuIFNlcmlhbCB0ZWxlbWV0cnkgY29sbGVjdGlvbicsXG4gICAgZGF0ZTogJzIwMjYtMDktMTQnLFxuICAgIHRpbWU6ICcxNzozMCAtIDE5OjMwJyxcbiAgICBsb2NhdGlvbjogJ0VuZ2luZWVyaW5nIExhYiAxMDQnLFxuICAgIGlzT25saW5lOiBmYWxzZSxcbiAgICBjYXRlZ29yeTogJ1dvcmtzaG9wJyxcbiAgICBjYXBhY2l0eTogMzAsXG4gICAgcnN2cHM6IFsna2FpdG9AbWV0cm91bmkuZWR1JywgJ2Fpc2hhQG1ldHJvdW5pLmVkdSddLFxuICAgIHNwZWFrZXJOYW1lOiAnS2FpdG8gVGFuYWthJyxcbiAgICBzcGVha2VyUm9sZTogJ0hhcmR3YXJlIExlYWQnLFxuICAgIHN0YXR1czogJ1Bhc3QnLFxuICB9LFxuICB7XG4gICAgaWQ6ICdldi01JyxcbiAgICB0aXRsZTogJ1NwcmluZyBPcGVuIFNvdXJjZSBTaG93Y2FzZSAyMDI2JyxcbiAgICBkZXNjcmlwdGlvbjogJ1Nob3djYXNlIG9mIDggc3R1ZGVudCBwcm9qZWN0cyBidWlsdCBkdXJpbmcgdGhlIHNlbWVzdGVyLCBpbmNsdWRpbmcgY2FtcHVzIGRpbmluZyBib3QsIHN0dWR5IHJvb20gdHJhY2tlciwgYW5kIGF1dG9ub21vdXMgcm92ZXIgcHJvdG90eXBlLicsXG4gICAgYWdlbmRhOiAnMS4gUHJvamVjdCBkZW1vbnN0cmF0aW9uc1xcbjIuIEF3YXJkIGFubm91bmNlbWVudHNcXG4zLiBOZXR3b3JraW5nIHJlY2VwdGlvbicsXG4gICAgZGF0ZTogJzIwMjYtMDUtMjAnLFxuICAgIHRpbWU6ICcxNjowMCAtIDE5OjAwJyxcbiAgICBsb2NhdGlvbjogJ1VuaXZlcnNpdHkgQ29tbW9ucyBHcmVhdCBIYWxsJyxcbiAgICBpc09ubGluZTogZmFsc2UsXG4gICAgY2F0ZWdvcnk6ICdQcm9qZWN0IERlbW8nLFxuICAgIGNhcGFjaXR5OiAxMjAsXG4gICAgcnN2cHM6IFtdLFxuICAgIHNwZWFrZXJOYW1lOiAnQXBleCBMZWFkZXJzaGlwIFRlYW0nLFxuICAgIHNwZWFrZXJSb2xlOiAnQXBleFRlY2gnLFxuICAgIHN0YXR1czogJ1Bhc3QnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfUE9TVFM6IEJsb2dQb3N0W10gPSBbXG4gIHtcbiAgICBpZDogJ3Bvc3QtMScsXG4gICAgdGl0bGU6ICdCdWlsZGluZyBhIEZ1bGwtU3RhY2sgVW5pdmVyc2l0eSBDbHViIFdlYnNpdGUgd2l0aCBOZXh0LmpzICYgTW9uZ29EQiBNMCcsXG4gICAgc2x1ZzogJ2J1aWxkaW5nLXVuaXZlcnNpdHktY2x1Yi13ZWJzaXRlLW5leHRqcy1tb25nb2RiJyxcbiAgICBleGNlcnB0OiAnQSBjb21wbGV0ZSBhcmNoaXRlY3R1cmFsIHdhbGt0aHJvdWdoIG9mIGhvdyB3ZSBzdHJ1Y3R1cmUgb3VyIHByb2R1Y3Rpb24gd2Vic2l0ZSB1c2luZyBOZXh0LmpzIEFwcCBSb3V0ZXIsIE1vbmdvREIgQXRsYXMgZnJlZSB0aWVyLCBhbmQgVmVyY2VsIHNlcnZlcmxlc3MgZnVuY3Rpb25zLicsXG4gICAgY29udGVudDogYFdoZW4gYnVpbGRpbmcgc3R1ZGVudCBwb3J0YWxzLCBzcGVlZCwgemVyby1jb3N0IG9wZXJhdGlvbmFsIHRpZXJzLCBhbmQgZWFzZSBvZiBjb2xsYWJvcmF0aW9uIGFyZSB2aXRhbC4gSW4gdGhpcyBndWlkZSwgd2UgYnJlYWsgZG93biBvdXIgYXJjaGl0ZWN0dXJlOlxuXG4jIyMgMS4gV2h5IE1vbmdvREIgQXRsYXMgRnJlZSBUaWVyIChNMCk/XG5UaGUgTTAgc2FuZGJveCBwcm92aWRlcyA1MTJNQiBzdG9yYWdlIHdpdGggemVybyBtb250aGx5IGNvc3QsIHJlcGxpY2Egc2V0cywgYW5kIHNlYW1sZXNzIGF1dG9tYXRlZCBiYWNrdXBzLiBGb3IgYSB1bml2ZXJzaXR5IGNsdWIgaGFuZGxpbmcgdGhvdXNhbmRzIG9mIGV2ZW50cywgbWVtYmVyIHJlY29yZHMsIGFuZCBibG9nIGFydGljbGVzLCB0aGlzIGlzIG1vcmUgdGhhbiBzdWZmaWNpZW50LlxuXG4jIyMgMi4gTmV4dC5qcyBBcHAgUm91dGVyICYgTW9uZ29vc2UgQ29ubmVjdGlvbiBQb29saW5nXG5JbiBzZXJ2ZXJsZXNzIGVudmlyb25tZW50cyBsaWtlIFZlcmNlbCwgdHJhZGl0aW9uYWwgbG9uZy1ydW5uaW5nIGRhdGFiYXNlIGNvbm5lY3Rpb25zIGNhbiBleGhhdXN0IGNvbm5lY3Rpb24gbGltaXRzLiBXZSB1c2UgYSBjYWNoZWQgY29ubmVjdGlvbiBoZWxwZXI6XG5cblxcYFxcYFxcYHR5cGVzY3JpcHRcbi8vIGxpYi9tb25nb2RiLnRzXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5sZXQgY2FjaGVkID0gKGdsb2JhbCBhcyBhbnkpLm1vbmdvb3NlIHx8IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGlmIChjYWNoZWQuY29ubikgcmV0dXJuIGNhY2hlZC5jb25uO1xuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJISwge1xuICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxuICAgIH0pO1xuICB9XG4gIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gIHJldHVybiBjYWNoZWQuY29ubjtcbn1cblxcYFxcYFxcYFxuXG4jIyMgMy4gRGVwbG95bWVudCBQaXBlbGluZVxuV2l0aCBHaXRIdWIgaW50ZWdyYXRlZCBkaXJlY3RseSBpbnRvIFZlcmNlbCwgZXZlcnkgcHVsbCByZXF1ZXN0IGdldHMgYW4gaXNvbGF0ZWQgcHJldmlldyBlbnZpcm9ubWVudCwgbGV0dGluZyBjbHViIGxlYWRzIHJldmlldyBVSSBjaGFuZ2VzIGJlZm9yZSBtZXJnaW5nIGludG8gcHJvZHVjdGlvbi5gLFxuICAgIGF1dGhvck5hbWU6ICdBaXNoYSBBbC1NYW5zb29yJyxcbiAgICBhdXRob3JSb2xlOiAnVGVjaCBMZWFkJyxcbiAgICBjYXRlZ29yeTogJ1R1dG9yaWFsJyxcbiAgICBwdWJsaXNoZWRBdDogJzIwMjYtMDktMjInLFxuICAgIHJlYWRUaW1lTWludXRlczogNSxcbiAgICBsaWtlczogMzQsXG4gICAgaXNQdWJsaXNoZWQ6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBpZDogJ3Bvc3QtMicsXG4gICAgdGl0bGU6ICdSZWNhcDogT3VyIENhbXB1cyBTdHVkeSBSb29tIFRyYWNrZXIgTGF1bmNoJyxcbiAgICBzbHVnOiAnY2FtcHVzLXN0dWR5LXJvb20tdHJhY2tlci1sYXVuY2gtcmVjYXAnLFxuICAgIGV4Y2VycHQ6ICdIb3cgZm91ciBmcmVzaG1lbiBhbmQgc29waG9tb3JlcyBidWlsdCBhbiBvcGVuLXNvdXJjZSBJb1Qgcm9vbSBvY2N1cGFuY3kgbW9uaXRvciBkdXJpbmcgb3VyIDQ4LWhvdXIgaGFja2F0aG9uLCBub3cgZGVwbG95ZWQgaW4gdHdvIGxpYnJhcnkgZmxvb3JzLicsXG4gICAgY29udGVudDogYER1cmluZyBsYXN0IHNlbWVzdGVyJ3MgYnVpbGQgbmlnaHQsIGEgdGVhbSBvZiBmb3VyIHN0dWRlbnRzIHNldCBvdXQgdG8gc29sdmUgYSBwZXJlbm5pYWwgY2FtcHVzIHByb2JsZW06IGZpbmRpbmcgYSBxdWlldCwgdW5vY2N1cGllZCBzdHVkeSByb29tIGluIHRoZSBjZW50cmFsIGxpYnJhcnkgZHVyaW5nIG1pZHRlcm0gc2Vhc29uLlxuXG4jIyMgVGhlIFN0YWNrXG4tICoqSGFyZHdhcmUqKjogRVNQMzIgbWljcm9jb250cm9sbGVycyBwYWlyZWQgd2l0aCBpbmZyYXJlZCB0aGVybWFsIGFycmF5cyB0byBjb3VudCBvY2N1cGFuY3kgd2l0aG91dCBjYXB0dXJpbmcgdmlkZW8gKHByaXZhY3ktZmlyc3QpLlxuLSAqKkJhY2tlbmQqKjogTGlnaHR3ZWlnaHQgRXhwcmVzcyBzZXJ2aWNlIGRlcGxveWVkIG9uIFJlbmRlci5jb20gZnJlZSB3ZWIgc2VydmljZS5cbi0gKipGcm9udGVuZCoqOiBOZXh0LmpzIHNpbmdsZSBwYWdlIGRhc2hib2FyZCBzaG93aW5nIGxpdmUgYXZhaWxhYmlsaXR5IGFuZCBoaXN0b3JpY2FsIHF1aWV0IGhvdXJzLlxuXG5PdmVyIDEsMjAwIHN0dWRlbnRzIHZpc2l0ZWQgdGhlIGRhc2hib2FyZCBkdXJpbmcgZmluYWxzIHdlZWsuIFJlYWQgb3VyIEdpdEh1YiBkb2N1bWVudGF0aW9uIHRvIGNvbnRyaWJ1dGUgdG8gcGhhc2UgMiFgLFxuICAgIGF1dGhvck5hbWU6ICdNYXJjdXMgQ2hlbicsXG4gICAgYXV0aG9yUm9sZTogJ1ZpY2UgUHJlc2lkZW50JyxcbiAgICBjYXRlZ29yeTogJ1Byb2plY3QgU2hvd2Nhc2UnLFxuICAgIHB1Ymxpc2hlZEF0OiAnMjAyNi0wOS0xMCcsXG4gICAgcmVhZFRpbWVNaW51dGVzOiA0LFxuICAgIGxpa2VzOiA0OCxcbiAgICBpc1B1Ymxpc2hlZDogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGlkOiAncG9zdC0zJyxcbiAgICB0aXRsZTogJ1plcm8tUGlsbCBEZXNpZ246IFdoeSBXZSBSZWRlc2lnbmVkIE91ciBDbHViIEludGVyZmFjZXMnLFxuICAgIHNsdWc6ICd6ZXJvLXBpbGwtZGVzaWduLXJlZGVzaWduaW5nLWNsdWItaW50ZXJmYWNlcycsXG4gICAgZXhjZXJwdDogJ0FuIGVzc2F5IG9uIG1vdmluZyBhd2F5IGZyb20gZ2VuZXJpYyBBSS1nZW5lcmF0ZWQgYmFkZ2VzIGFuZCBjYXJkLXdpdGhpbi1jYXJkIGNsdXR0ZXIgdG93YXJkIGRpc2NpcGxpbmVkIHR5cG9ncmFwaHkgYW5kIHN0cnVjdHVyZWQgd2hpdGUgc3BhY2UuJyxcbiAgICBjb250ZW50OiBgSWYgeW91IGJyb3dzZSBzdHVkZW50IHRlY2ggc2l0ZXMgYnVpbHQgaW4gdGhlIGxhc3QgdHdvIHllYXJzLCB5b3Ugbm90aWNlIGEgcmVjdXJyaW5nIHBhdHRlcm46IGV2ZXJ5IGNhcmQgaGFzIHR3byBjb2xvcmVkIGNhcHN1bGUgdGFncywgZmxvYXRpbmcgc3RhdCBib3hlcywgYW5kIGhlYXZ5IGRyb3BzaGFkb3dzLlxuXG5XZSBvdmVyaGF1bGVkIG91ciB2aXN1YWwgbGFuZ3VhZ2Ugd2l0aCAzIHNpbXBsZSBwcmluY2lwbGVzOlxuMS4gKipVbmJveGVkIE1ldGFkYXRhKio6IENhdGVnb3J5LCB0aW1lc3RhbXAsIGFuZCByZWFkIHRpbWVzIHJlbmRlcmVkIGFzIHF1aWV0IHRleHQgc2VwYXJhdGVkIGJ5IG1pZGRsZSBkb3RzICjCtykgcmF0aGVyIHRoYW4gY29sb3JlZCBwaWxsIGJhZGdlcy5cbjIuICoqVGFidWxhciBOdW1lcmFscyoqOiBFbnN1cmluZyBhbGwgZGF0ZXMsIGNvdW50cywgYW5kIGNhcGFjaXRpZXMgdXNlIG1vbm9zcGFjZSBvciB0YWJ1bGFyIG51bWJlcnMuXG4zLiAqKlNpbmdsZS1FbGV2YXRpb24gRGVwdGgqKjogRmxhdCBzdXJmYWNlcyB3aXRoIDFweCBoYWlybGluZSBkaXZpZGVycyByZXBsYWNlIHN0YWNrZWQgdHJhbnNsdWNlbnQgY2FyZHMuYCxcbiAgICBhdXRob3JOYW1lOiAnRGV2b24gVmFuY2UnLFxuICAgIGF1dGhvclJvbGU6ICdEZXNpZ24gTGVhZCcsXG4gICAgY2F0ZWdvcnk6ICdDYXJlZXIgJiBBZHZpY2UnLFxuICAgIHB1Ymxpc2hlZEF0OiAnMjAyNi0wOC0yOCcsXG4gICAgcmVhZFRpbWVNaW51dGVzOiA2LFxuICAgIGxpa2VzOiAyOSxcbiAgICBpc1B1Ymxpc2hlZDogdHJ1ZSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBJTklUSUFMX0FQUExJQ0FUSU9OUzogTWVtYmVyc2hpcEFwcGxpY2F0aW9uW10gPSBbXG4gIHtcbiAgICBpZDogJ2FwcC0xJyxcbiAgICBmdWxsTmFtZTogJ0xpYW0gVGhvcm5lJyxcbiAgICBlbWFpbDogJ2wudGhvcm5lQG1ldHJvdW5pLmVkdScsXG4gICAgc3R1ZGVudElkOiAnTVUyNi05MDQxJyxcbiAgICBtYWpvcjogJ0NvbXB1dGVyIFNjaWVuY2UgJiBNYXRoZW1hdGljcycsXG4gICAgeWVhck9mU3R1ZHk6ICdGcmVzaG1hbicsXG4gICAgdHJhY2tzOiBbJ1NvZnR3YXJlICYgQUknLCAnSGFyZHdhcmUgJiBSb2JvdGljcyddLFxuICAgIGV4cGVyaWVuY2VMZXZlbDogJ0ludGVybWVkaWF0ZScsXG4gICAgbW90aXZhdGlvbjogJ0kgYnVpbHQgc2V2ZXJhbCByb2JvdGljcyBwcm9qZWN0cyBpbiBoaWdoIHNjaG9vbCBhbmQgd2FudCB0byBjb2xsYWJvcmF0ZSB3aXRoIHBlZXJzIG9uIHVuaXZlcnNpdHktbGV2ZWwgZGlzdHJpYnV0ZWQgYXBwbGljYXRpb25zIGFuZCBoYWNrYXRob25zLicsXG4gICAgcG9ydGZvbGlvVXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2xpYW10aG9ybmUnLFxuICAgIHN0YXR1czogJ1BlbmRpbmcnLFxuICAgIHN1Ym1pdHRlZEF0OiAnMjAyNi0wOS0yOFQxNDoyMDowMFonLFxuICB9LFxuICB7XG4gICAgaWQ6ICdhcHAtMicsXG4gICAgZnVsbE5hbWU6ICdNYXlhIFBhdGVsJyxcbiAgICBlbWFpbDogJ20ucGF0ZWxAbWV0cm91bmkuZWR1JyxcbiAgICBzdHVkZW50SWQ6ICdNVTI1LTYzMjAnLFxuICAgIG1ham9yOiAnQ29nbml0aXZlIFNjaWVuY2UgJiBJbnRlcmFjdGlvbiBEZXNpZ24nLFxuICAgIHllYXJPZlN0dWR5OiAnU29waG9tb3JlJyxcbiAgICB0cmFja3M6IFsnUHJvZHVjdCAmIFVJL1VYJ10sXG4gICAgZXhwZXJpZW5jZUxldmVsOiAnSW50ZXJtZWRpYXRlJyxcbiAgICBtb3RpdmF0aW9uOiAnRXhjaXRlZCB0byBjb250cmlidXRlIHRvIHByb2R1Y3QgZGVzaWduIGFuZCB1c2VyIHJlc2VhcmNoIGZvciBzdHVkZW50IG9wZW4gc291cmNlIGFwcHMuIEkgbG92ZSBjcmFmdGluZyBjbGVhbiBkZXNpZ24gc3lzdGVtcy4nLFxuICAgIHBvcnRmb2xpb1VybDogJ2h0dHBzOi8vbWF5YXBhdGVsLmRlc2lnbicsXG4gICAgc3RhdHVzOiAnSW50ZXJ2aWV3JyxcbiAgICBzdWJtaXR0ZWRBdDogJzIwMjYtMDktMjZUMDk6MTU6MDBaJyxcbiAgICBhZG1pbk5vdGVzOiAnU3Ryb25nIHBvcnRmb2xpbyBpbiBGaWdtYSBhbmQgUmVhY3Q7IGludml0ZSB0byBkZXNpZ24gdGVhbSBjb2ZmZWUgY2hhdCBvbiBUaHVyc2RheS4nLFxuICB9LFxuXTtcbiJdfQ==