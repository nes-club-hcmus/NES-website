import { ClubInfo, ClubMember, ClubEvent, BlogPost, MembershipApplication } from '../types';

export const INITIAL_CLUB_INFO: ClubInfo = {
  name: 'Câu lạc bộ Học thuật NES',
  shortName: 'CLB Học thuật NES',
  faculty: 'Khoa Vật lý – Vật lý kỹ thuật',
  university: 'Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM',
  tagline: 'Kết nối đam mê khoa học, khơi nguồn sáng tạo kỹ thuật và xây dựng cộng đồng học thuật vững mạnh.',
  establishedYear: 2018,
  roomNumber: 'Văn phòng Đoàn - Hội Khoa Vật lý - Vật lý Kỹ thuật, Cơ sở Nguyễn Văn Cừ, Quận 5',
  emailContact: 'clbnes@gmail.com',
  facebookUrl: 'https://www.facebook.com/CLBNES',
  discordUrl: 'https://discord.gg/nes-hcmus',
  githubOrg: 'https://github.com/nes-club-hcmus',
  mission:
    'Câu lạc bộ Học thuật NES, trực thuộc Khoa Vật lý – Vật lý kỹ thuật, là một tổ chức học thuật dành cho các bạn sinh viên có niềm đam mê và yêu thích đối với khoa học và vật lý. Với sứ mệnh kết nối và phát triển năng lực chuyên môn của các bạn trẻ, NES đã và đang đóng vai trò quan trọng trong việc xây dựng cộng đồng học tập và nghiên cứu chất lượng cao, giúp các thành viên phát huy tối đa tiềm năng của mình.',
  historyAndMeaning: {
    title: 'Lịch sử hình thành & Ý nghĩa tên gọi NES',
    description:
      'NES không chỉ là tên của một câu lạc bộ, mà còn đại diện cho sự kế thừa và phát triển tinh thần của ba nhà khoa học lỗi lạc trong lịch sử nhân loại: Isaac Newton, Albert Einstein và Erwin Schrödinger. Được ghép từ những chữ cái đầu tiên trong tên của ba nhà vật lý vĩ đại, NES biểu trưng cho tinh thần khám phá, sáng tạo và cống hiến cho khoa học. Từ khi thành lập, NES đã trở thành ngôi nhà chung của nhiều thế hệ sinh viên yêu thích Vật lý, là nơi nuôi dưỡng những ý tưởng và khát khao chinh phục tri thức.',
    figures: [
      {
        letter: 'N',
        name: 'Isaac Newton',
        field: 'Cơ học cổ điển & Giải tích',
        contribution:
          'Đặt nền móng vững chắc cho vật lý học cổ điển với 3 định luật chuyển động và định luật vạn vật hấp dẫn, truyền cảm hứng về tư duy quan sát và phân tích hiện tượng tự nhiên.',
      },
      {
        letter: 'E',
        name: 'Albert Einstein',
        field: 'Thuyết tương đối & Lượng tử ánh sáng',
        contribution:
          'Cách mạng hóa nhận thức về không gian, thời gian và năng lượng với Thuyết tương đối, đặt nền tảng cho vật lý hiện đại và công nghệ lượng tử quang điện.',
      },
      {
        letter: 'S',
        name: 'Erwin Schrödinger',
        field: 'Cơ học lượng tử & Phương trình sóng',
        contribution:
          'Khám phá thế giới vi mô bằng phương trình sóng Schrödinger bất hủ, biểu trưng cho tinh thần đột phá dám đặt câu hỏi và giải mã những bí ẩn sâu thẳm của vũ trụ.',
      },
    ],
  },
  twoPillars: [
    {
      title: 'Mảng Học thuật (Academic)',
      slug: 'hoc-thuat',
      badge: 'Nền tảng tri thức vững chắc',
      summary: 'Hội thảo chuyên đề, chế tạo mô hình thí nghiệm và chuỗi ôn tập trước kỳ thi.',
      description:
        'NES tổ chức nhiều buổi hội thảo, thuyết trình chuyên đề về Vật lý từ cơ bản đến chuyên sâu, nơi các bạn sinh viên có cơ hội chia sẻ, học hỏi và thảo luận. Những buổi thực hành chế tạo mô hình, trải nghiệm kiến thức vật lý thực tiễn được tổ chức thường xuyên giúp thành viên áp dụng lý thuyết vào thực tế. Đặc biệt, NES luôn đồng hành cùng các buổi ôn tập trước kỳ thi, giúp sinh viên củng cố kiến thức và tự tin chinh phục các kỳ thi đại cương lẫn chuyên ngành.',
      activities: [
        'Chuỗi Seminar & Hội thảo Vật lý chuyên sâu',
        'Thực hành chế tạo mô hình thí nghiệm thực tế',
        'Lớp ôn tập trợ giảng trước các kỳ thi học kỳ',
        'Hướng dẫn phương pháp nghiên cứu khoa học sinh viên',
      ],
    },
    {
      title: 'Mảng Điện tử (Electronics)',
      slug: 'dien-tu',
      badge: 'Kỹ năng kỹ thuật thực chiến',
      summary: 'Chế tạo mạch, đo kiểm thiết bị và hiện thực hóa các ý tưởng phần cứng.',
      description:
        'Đây là một mảng hoạt động nổi bật của NES, nơi các thành viên được rèn luyện kỹ năng chế tạo, hàn mạch, lập trình vi điều khiển, sửa chữa và đo kiểm các thiết bị điện tử. Những dự án điện tử và IoT thực hành không chỉ giúp sinh viên nâng cao năng lực kỹ thuật mà còn là cơ hội để các bạn nuôi dưỡng đam mê, chuẩn bị hành trang vững vàng trở thành những kỹ sư tài năng trong tương lai.',
      activities: [
        'Thiết kế mạch in PCB (KiCad, Altium Designer)',
        'Lập trình vi điều khiển STM32, ESP32, Arduino',
        'Thao tác đo kiểm dao động ký (Oscilloscope), đồng hồ vạn năng',
        'Phát triển đồ án IoT, robot và hệ thống nhúng tự động hóa',
      ],
    },
  ],
  stats: {
    activeMembers: 120,
    eventsHosted: 45,
    projectsBuilt: 30,
    alumniNetwork: 150,
  },
};

export const INITIAL_MEMBERS: ClubMember[] = [
  {
    id: 'mem-1',
    name: 'Nguyễn Hoàng Nam',
    role: 'Chủ nhiệm CLB',
    track: 'Học thuật',
    email: 'nhnam@student.hcmus.edu.vn',
    studentId: '22130089',
    graduationYear: 2026,
    bio: 'Sinh viên năm 4 ngành Vật lý học, đam mê Vật lý Lý thuyết và Vật lý Tính toán. Chịu trách nhiệm điều hành định hướng phát triển tổng thể của CLB và đối ngoại.',
    skills: ['Cơ học lượng tử', 'Python Khoa học', 'Mô phỏng số', 'Quản lý dự án'],
    facebookUrl: 'https://facebook.com/CLBNES',
    status: 'Active',
    joinedDate: '2022-10-01',
    avatarColor: 'from-blue-700 to-indigo-900',
  },
  {
    id: 'mem-2',
    name: 'Trần Minh Khoa',
    role: 'Phó Chủ nhiệm',
    track: 'Điện tử',
    email: 'tmkhoa@student.hcmus.edu.vn',
    studentId: '22130145',
    graduationYear: 2026,
    bio: 'Sinh viên năm 4 ngành Vật lý Kỹ thuật, phụ trách mảng Điện tử & Kỹ thuật chế tạo. Từng đạt giải cao trong các cuộc thi Nghiên cứu khoa học sinh viên cấp trường.',
    skills: ['Thiết kế PCB', 'ESP32 / STM32', 'C/C++ Embedded', 'Đo kiểm thiết bị'],
    facebookUrl: 'https://facebook.com/CLBNES',
    status: 'Active',
    joinedDate: '2022-10-01',
    avatarColor: 'from-amber-600 to-orange-800',
  },
  {
    id: 'mem-3',
    name: 'Lê Thị Thảo Vy',
    role: 'Trưởng ban Học thuật',
    track: 'Học thuật',
    email: 'ltthao.vy@student.hcmus.edu.vn',
    studentId: '23130210',
    graduationYear: 2027,
    bio: 'Sinh viên năm 3 chuyên ngành Vật lý Ứng dụng & Quang học. Điều phối chuỗi seminar chuyên đề học thuật và các buổi ôn tập trước kỳ thi cho sinh viên.',
    skills: ['Quang học Laser', 'Tổ chức Seminar', 'Tài liệu học phần', 'Thuyết trình'],
    facebookUrl: 'https://facebook.com/CLBNES',
    status: 'Active',
    joinedDate: '2023-10-15',
    avatarColor: 'from-emerald-700 to-teal-900',
  },
  {
    id: 'mem-4',
    name: 'Đặng Phúc Thịnh',
    role: 'Trưởng ban Điện tử',
    track: 'Điện tử',
    email: 'dpthinh@student.hcmus.edu.vn',
    studentId: '23130304',
    graduationYear: 2027,
    bio: 'Sinh viên năm 3 ngành Vật lý Kỹ thuật. Phụ trách quản lý phòng thực hành điện tử, tổ chức workshop hàn mạch và hướng dẫn kỹ năng phần cứng.',
    skills: ['KiCad PCB', 'Vi điều khiển', 'Cảm biến & IoT', 'Sửa chữa điện tử'],
    facebookUrl: 'https://facebook.com/CLBNES',
    status: 'Active',
    joinedDate: '2023-10-15',
    avatarColor: 'from-rose-700 to-pink-900',
  },
  {
    id: 'mem-5',
    name: 'Phạm Thu Uyên',
    role: 'Trưởng ban Truyền thông',
    track: 'Truyền thông & Sự kiện',
    email: 'ptuyen@student.hcmus.edu.vn',
    studentId: '24130052',
    graduationYear: 2028,
    bio: 'Sinh viên năm 2 năng động, phụ trách công tác truyền thông, quản trị Fanpage CLB NES, xây dựng hình ảnh và tổ chức các hoạt động ngoại khóa gắn kết thành viên.',
    skills: ['Nội dung truyền thông', 'Thiết kế đồ họa', 'Tổ chức sự kiện', 'Nhiếp ảnh'],
    facebookUrl: 'https://facebook.com/CLBNES',
    status: 'Active',
    joinedDate: '2024-10-01',
    avatarColor: 'from-purple-700 to-violet-900',
  },
  {
    id: 'mem-6',
    name: 'Võ Đình Nguyên',
    role: 'Cố vấn chuyên môn',
    track: 'Học thuật',
    email: 'vdnguyen@alumni.hcmus.edu.vn',
    studentId: '20130002',
    graduationYear: 2024,
    bio: 'Cựu Chủ nhiệm CLB NES, hiện là Kỹ sư R&D Bán dẫn và Học viên Cao học Vật lý. Tiếp tục đồng hành hỗ trợ cố vấn học thuật và định hướng nghề nghiệp cho các thế hệ thành viên.',
    skills: ['Vật lý bán dẫn', 'Nghiên cứu khoa học', 'Cố vấn kỹ thuật', 'Kết nối doanh nghiệp'],
    facebookUrl: 'https://facebook.com/CLBNES',
    status: 'Alumni',
    joinedDate: '2020-09-10',
    avatarColor: 'from-stone-700 to-stone-900',
  },
];

export const INITIAL_EVENTS: ClubEvent[] = [
  {
    id: 'ev-1',
    title: 'Workshop: Thực hành Thiết kế Mạch in PCB & Lập trình Vi điều khiển STM32/ESP32',
    description:
      'Buổi thực hành trực quan dành cho sinh viên muốn làm quen với việc thiết kế layout PCB trên KiCad, kỹ thuật hàn dán linh kiện SMD và lập trình giao tiếp cảm biến thực tế.',
    agenda:
      '1. Giới thiệu nguyên lý sơ đồ schematic & quy tắc layout PCB\n2. Thực hành thiết kế mạch cảm biến nhiệt độ - ánh sáng\n3. Trải nghiệm thao tác hàn linh kiện và nạp code vi điều khiển\n4. Thảo luận và giải đáp thắc mắc cùng ban kỹ thuật',
    date: '2026-10-24',
    time: '08:30 - 11:30',
    location: 'Phòng Lab Điện tử, Tòa nhà F, Cơ sở Nguyễn Văn Cừ',
    isOnline: false,
    category: 'Workshop Thực hành',
    capacity: 40,
    rsvps: ['student1@student.hcmus.edu.vn', 'student2@student.hcmus.edu.vn'],
    speakerName: 'Trần Minh Khoa & Đặng Phúc Thịnh',
    speakerRole: 'Ban Kỹ thuật Điện tử NES',
    status: 'Upcoming',
  },
  {
    id: 'ev-2',
    title: 'Tọa đàm: Khám phá Cơ học Lượng tử và Ứng dụng trong Công nghệ Bán dẫn Hiện đại',
    description:
      'Hội thảo chuyên sâu về các nguyên lý lượng tử căn bản và mối liên hệ mật thiết với ngành công nghiệp vi mạch bán dẫn đang phát triển mạnh mẽ.',
    agenda:
      '1. Phương trình Schrödinger và trạng thái lượng tử\n2. Cấu trúc vùng năng lượng của vật liệu bán dẫn\n3. Từ lý thuyết lượng tử đến thiết kế transistor nano\n4. Cơ hội nghiên cứu & việc làm ngành Bán dẫn',
    date: '2026-11-08',
    time: '14:00 - 16:30',
    location: 'Hội trường B, Tòa nhà B, Cơ sở Nguyễn Văn Cừ',
    isOnline: false,
    category: 'Hội thảo & Seminar',
    capacity: 100,
    rsvps: ['student3@student.hcmus.edu.vn'],
    speakerName: 'Nguyễn Hoàng Nam & Võ Đình Nguyên',
    speakerRole: 'Ban Học thuật CLB NES',
    status: 'Upcoming',
  },
  {
    id: 'ev-3',
    title: 'Chuỗi Ôn tập Học kỳ: Tổng ôn Vật lý Đại cương 1 & 2 - Tự tin đạt điểm A',
    description:
      'Chuỗi ôn thi định kỳ thường niên của NES nhằm giúp các bạn sinh viên K25, K26 hệ thống hóa kiến thức trọng tâm, giải các dạng bài tập thi mẫu và chia sẻ kinh nghiệm làm bài thi đạt điểm cao.',
    agenda:
      '1. Tóm tắt sơ đồ tư duy Cơ học & Điện từ học\n2. Phân tích các bẫy thường gặp trong đề thi tự luận/trắc nghiệm\n3. Hướng dẫn giải chi tiết đề thi các năm trước\n4. Q&A và giải đáp trực tiếp cho sinh viên',
    date: '2026-12-05',
    time: '18:00 - 20:30',
    location: 'Phòng C.32 & Phát trực tiếp qua Google Meet',
    isOnline: false,
    category: 'Chuỗi Ôn tập',
    capacity: 150,
    rsvps: ['student4@student.hcmus.edu.vn', 'student5@student.hcmus.edu.vn'],
    speakerName: 'Lê Thị Thảo Vy',
    speakerRole: 'Trưởng ban Học thuật',
    status: 'Upcoming',
  },
  {
    id: 'ev-4',
    title: 'Chế tạo Mô hình Con lắc Foucault & Cảm biến Đo gia tốc trọng trường',
    description:
      'Dự án chế tạo mô hình vật lý thực nghiệm chứng minh sự tự quay của Trái Đất kết hợp module cảm biến gia tốc thu thập dữ liệu tự động.',
    agenda:
      '1. Lý thuyết lực quán tính Coriolis\n2. Gia công cơ khí mô hình con lắc treo\n3. Kết nối cảm biến đo góc lệch\n4. Nghiệm thu số liệu đo đạc thực nghiệm',
    date: '2026-05-18',
    time: '13:30 - 17:00',
    location: 'Phòng Thực hành Vật lý Đại cương',
    isOnline: false,
    category: 'Workshop Thực hành',
    capacity: 35,
    rsvps: [],
    speakerName: 'Nhóm Dự án Phần cứng NES',
    speakerRole: 'CLB NES',
    status: 'Past',
  },
  {
    id: 'ev-5',
    title: 'Ngày hội Chào đón Tân sinh viên K26 Khoa Vật lý - Vật lý Kỹ thuật',
    description:
      'Chương trình giao lưu, trưng bày các mô hình sản phẩm học thuật & điện tử do thành viên NES chế tạo, giới thiệu mái nhà chung NES tới tân sinh viên.',
    agenda:
      '1. Trưng bày mô hình cuộn Tesla, robot và mạch đèn led ma trận\n2. Giao lưu định hướng phương pháp học tập đại học\n3. Minigame câu hỏi vật lý vui có quà tặng\n4. Hướng dẫn nộp đơn gia nhập CLB NES',
    date: '2026-09-20',
    time: '08:00 - 12:00',
    location: 'Sảnh Tòa nhà I, Cơ sở Nguyễn Văn Cừ',
    isOnline: false,
    category: 'Giao lưu & Ngoại khóa',
    capacity: 200,
    rsvps: [],
    speakerName: 'Ban Chủ nhiệm & Thành viên CLB NES',
    speakerRole: 'CLB Học thuật NES',
    status: 'Past',
  },
];

export const INITIAL_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Newton, Einstein & Schrödinger: Ba tượng đài tạo nên linh hồn của cái tên NES',
    slug: 'y-nghia-ten-goi-nes-newton-einstein-schrodinger',
    excerpt:
      'Khám phá câu chuyện đằng sau cái tên NES - biểu trưng cho sự kế thừa và tinh thần khám phá không ngừng nghỉ của sinh viên Khoa Vật lý – Vật lý kỹ thuật HCMUS.',
    content: `Cái tên **NES** không đơn thuần chỉ là một danh xưng, mà là lời khẳng định về tinh thần khoa học bất diệt mà câu lạc bộ luôn gìn giữ và theo đuổi. Tên gọi được viết tắt từ ba chữ cái đầu của ba nhà vật lý vĩ đại nhất lịch sử:

### 1. Isaac Newton (N) – Nền tảng Cơ học cổ điển
Newton đại diện cho sự khởi đầu, phương pháp tư duy thực nghiệm và khả năng mô hình hóa vũ trụ bằng ngôn ngữ toán học. Tinh thần của Newton nhắc nhở thành viên NES luôn bắt đầu từ những nguyên lý căn bản nhất, quan sát tỉ mỉ và xây dựng nền tảng lý thuyết vững chắc.

### 2. Albert Einstein (E) – Đột phá tư duy & Thuyết tương đối
Einstein là hiện thân của trí tưởng tượng vô hạn và lòng can đảm thách thức những quan niệm cũ. Tại NES, chúng tôi khuyến khích các bạn trẻ không ngại đặt ra những câu hỏi táo bạo, tìm tòi hướng đi mới trong việc ứng dụng khoa học vào đời sống.

### 3. Erwin Schrödinger (S) – Khám phá thế giới lượng tử bí ẩn
Schrödinger đưa chúng ta vào thế giới vi mô kỳ ảo của hàm sóng và xác suất. Đó là biểu tượng cho sự tò mò vô tận đối với những điều chưa biết, thôi thúc các thành viên dấn thân vào các lĩnh vực kỹ thuật tiên tiến như vật lý chất rắn, bán dẫn và lượng tử.

Từ sự hội tụ của ba tinh thần ấy, CLB Học thuật NES luôn là cái nôi kết nối các thế hệ sinh viên cùng chung nhịp đập đam mê khoa học.`,
    authorName: 'Nguyễn Hoàng Nam',
    authorRole: 'Chủ nhiệm CLB',
    category: 'Vật lý & Lý thuyết',
    publishedAt: '2026-09-15',
    readTimeMinutes: 5,
    likes: 68,
    isPublished: true,
  },
  {
    id: 'post-2',
    title: 'Bí quyết đạt điểm A các môn Vật lý Đại cương và Cơ sở ngành tại HCMUS',
    slug: 'bi-quyet-dat-diem-cao-vat-ly-dai-cuong-hcmus',
    excerpt:
      'Tổng hợp kinh nghiệm thực chiến từ các anh chị khóa trước về cách phân bổ thời gian học tập, làm bài tập lớn và bí kíp làm chủ phòng thí nghiệm.',
    content: `Các môn Vật lý Đại cương (Vật lý 1, 2, 3) thường là nỗi lo lắng của nhiều tân sinh viên khi bước vào giảng đường Đại học Khoa học Tự nhiên. Tuy nhiên, nếu nắm vững phương pháp, bạn hoàn toàn có thể đạt điểm A một cách thuyết phục.

### 1. Hiểu bản chất hiện tượng trước khi nhớ công thức
Đừng cố học vẹt công thức toán học. Trước khi giải một bài toán cơ học hay điện từ, hãy vẽ hình mô tả các lực, vecto trường, đường sức và hình dung hiện tượng vật lý đang diễn ra.

### 2. Tận dụng tối đa giờ thí nghiệm thực hành
Các buổi thực tập vật lý đại cương là cơ hội vàng để mắt thấy tai nghe các định luật. Việc hiểu rõ sai số đo đạc, cách sử dụng thước kẹp, đồng hồ hiện số sẽ giúp bạn hiểu sâu lý thuyết gấp nhiều lần.

### 3. Tham gia chuỗi ôn tập học kỳ của CLB NES
Mỗi kỳ thi, NES luôn tổ chức các buổi giải đề thi mẫu và tổng hợp sơ đồ tư duy miễn phí dành cho sinh viên. Đừng ngần ngại mang các câu hỏi thắc mắc đến để cùng ban học thuật thảo luận nhé!`,
    authorName: 'Lê Thị Thảo Vy',
    authorRole: 'Trưởng ban Học thuật',
    category: 'Kinh nghiệm Học tập',
    publishedAt: '2026-09-02',
    readTimeMinutes: 4,
    likes: 54,
    isPublished: true,
  },
  {
    id: 'post-3',
    title: 'Từ sơ đồ nguyên lý đến mạch in hoàn chỉnh: Hành trình làm chủ thiết kế PCB',
    slug: 'huong-dan-thiet-ke-mach-in-pcb-kicad-cho-sinh-vien',
    excerpt:
      'Hướng dẫn nhập môn thiết kế phần cứng điện tử bằng phần mềm mã nguồn mở KiCad, cách chọn linh kiện và kỹ thuật hàn mạch an toàn.',
    content: `Trong mảng Điện tử của CLB NES, kỹ năng tự tay biến một ý tưởng trên giấy thành một bo mạch in (PCB) hoàn chỉnh là một trong những trải nghiệm thú vị và bổ ích nhất.

### 1. Lựa chọn phần mềm: Tại sao là KiCad?
KiCad là phần mềm EDA mã nguồn mở hoàn toàn miễn phí, nhẹ nhàng nhưng cực kỳ mạnh mẽ, được các kỹ sư trên toàn thế giới tin dùng.

### 2. Quy trình 4 bước thiết kế phần cứng
- **Vẽ Schematic**: Đặt các linh kiện và kết nối logic đúng theo datasheet.
- **Gán Footprint**: Chọn đúng kích thước chân thực tế (DIP hoặc SMD).
- **Layout PCB**: Đi dây mạch (routing), chú ý độ rộng đường dây nguồn và đường tín hiệu, phủ đồng mass (GND pour).
- **Xuất file Gerber**: Đóng gói để đặt gia công hoặc tự làm mạch ăn mòn tại lab.

Các bạn thành viên mới gia nhập NES sẽ được các anh chị hướng dẫn thực hành trực tiếp từ những bo mạch đầu tiên!`,
    authorName: 'Trần Minh Khoa',
    authorRole: 'Phó Chủ nhiệm',
    category: 'Kỹ thuật Điện tử',
    publishedAt: '2026-08-25',
    readTimeMinutes: 6,
    likes: 42,
    isPublished: true,
  },
];

export const INITIAL_APPLICATIONS: MembershipApplication[] = [
  {
    id: 'app-1',
    fullName: 'Hoàng Quốc Bảo',
    email: '25130018@student.hcmus.edu.vn',
    studentId: '25130018',
    major: 'Vật lý Kỹ thuật',
    yearOfStudy: 'Năm nhất',
    tracks: ['Điện tử'],
    experienceLevel: 'Mới bắt đầu',
    motivation:
      'Em rất đam mê tìm hiểu về mạch điện tử và vi điều khiển, mong muốn tham gia CLB NES để được học hỏi từ các anh chị và cùng làm các dự án thiết bị thực tế.',
    portfolioUrl: 'https://github.com',
    status: 'Pending',
    submittedAt: '2026-09-28T10:15:00Z',
  },
  {
    id: 'app-2',
    fullName: 'Đỗ Minh Phương',
    email: '24130089@student.hcmus.edu.vn',
    studentId: '24130089',
    major: 'Vật lý học',
    yearOfStudy: 'Năm hai',
    tracks: ['Học thuật'],
    experienceLevel: 'Khá',
    motivation:
      'Em muốn tham gia ban Học thuật để cùng tổ chức các buổi seminar vật lý, hỗ trợ ôn tập cho các bạn sinh viên và trau dồi thêm kiến thức chuyên ngành.',
    portfolioUrl: '',
    status: 'Interview',
    submittedAt: '2026-09-26T14:30:00Z',
    adminNotes: 'Học lực tốt, nhiệt huyết với hoạt động học thuật.',
  },
];
