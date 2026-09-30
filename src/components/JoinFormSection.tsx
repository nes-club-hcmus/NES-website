import React, { useState } from 'react';
import { Send, CheckCircle2, Award, HeartHandshake, Sparkles, BookOpen } from 'lucide-react';
import { MembershipApplication, YearOfStudy } from '../types';

interface JoinFormSectionProps {
  onSubmitApplication: (
    app: Omit<MembershipApplication, 'id' | 'status' | 'submittedAt'>
  ) => MembershipApplication;
}

export const JoinFormSection: React.FC<JoinFormSectionProps> = ({ onSubmitApplication }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [major, setMajor] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState<YearOfStudy>('Năm nhất');
  const [selectedTracks, setSelectedTracks] = useState<string[]>(['Mảng Học thuật']);
  const [experienceLevel, setExperienceLevel] = useState<'Mới bắt đầu' | 'Khá' | 'Nâng cao'>('Mới bắt đầu');
  const [motivation, setMotivation] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedApp, setSubmittedApp] = useState<MembershipApplication | null>(null);

  const availableTracks = [
    { id: 'Mảng Học thuật', label: 'Mảng Học thuật (Academic)', desc: 'Seminar chuyên đề, mô hình thí nghiệm & ôn tập thi' },
    { id: 'Mảng Điện tử', label: 'Mảng Điện tử (Electronics)', desc: 'Thiết kế PCB, lập trình vi điều khiển, hàn mạch & IoT' },
    { id: 'Ban Truyền thông', label: 'Ban Truyền thông & Sự kiện', desc: 'Viết bài, thiết kế hình ảnh, điều phối workshop & ngoại khóa' },
  ];

  const handleTrackToggle = (trackId: string) => {
    if (selectedTracks.includes(trackId)) {
      if (selectedTracks.length > 1) {
        setSelectedTracks(selectedTracks.filter((t) => t !== trackId));
      }
    } else {
      setSelectedTracks([...selectedTracks, trackId]);
    }
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) {
      errs.fullName = 'Vui lòng nhập họ và tên của bạn.';
    }
    if (!email.trim()) {
      errs.email = 'Vui lòng nhập địa chỉ email.';
    } else if (!email.includes('@') || !email.includes('.')) {
      errs.email = 'Địa chỉ email không hợp lệ.';
    }
    if (!studentId.trim()) {
      errs.studentId = 'Vui lòng nhập mã số sinh viên (MSSV).';
    }
    if (!major.trim()) {
      errs.major = 'Vui lòng nhập ngành học của bạn.';
    }
    if (!motivation.trim() || motivation.trim().length < 15) {
      errs.motivation = 'Vui lòng chia sẻ ít nhất 15 ký tự về lý do bạn muốn tham gia NES.';
    }
    if (selectedTracks.length === 0) {
      errs.tracks = 'Vui lòng chọn ít nhất một mảng hoạt động.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newApp = onSubmitApplication({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      studentId: studentId.trim(),
      major: major.trim(),
      yearOfStudy,
      tracks: selectedTracks,
      experienceLevel,
      motivation: motivation.trim(),
      portfolioUrl: portfolioUrl.trim() || undefined,
    });

    setSubmittedApp(newApp);

    // Reset form fields
    setFullName('');
    setEmail('');
    setStudentId('');
    setMajor('');
    setMotivation('');
    setPortfolioUrl('');
    setErrors({});
  };

  return (
    <section id="join" className="py-16 md:py-24 border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            06. Tuyển quân &amp; Ứng tuyển
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
            Gia nhập Đại gia đình CLB Học thuật NES
          </h2>
          <p className="mt-2 text-neutral-600 text-sm sm:text-base leading-relaxed">
            NES luôn chào đón những sinh viên mới có niềm đam mê với Vật lý và mong muốn góp phần tạo dựng một cộng đồng học thuật vững mạnh. Hãy gia nhập NES để cùng nhau khám phá và chinh phục những đỉnh cao tri thức mới!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form Column */}
          <div className="lg:col-span-8 bg-neutral-50/70 border border-neutral-200 rounded-2xl p-6 sm:p-8">
            {submittedApp ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Đã nhận đơn ứng tuyển của bạn!
                </h3>
                <p className="text-sm text-neutral-600 max-w-lg mx-auto leading-relaxed">
                  Cảm ơn bạn <strong className="text-neutral-900">{submittedApp.fullName}</strong> đã quan tâm và nộp đơn gia nhập CLB Học thuật NES. 
                  Mã hồ sơ của bạn là <span className="font-mono font-semibold text-neutral-900">{submittedApp.id}</span>.
                  Ban Chủ nhiệm sẽ liên hệ với bạn qua email{' '}
                  <span className="font-mono text-neutral-900 font-semibold">{submittedApp.email}</span> trong thời gian sớm nhất!
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmittedApp(null)}
                    className="px-5 py-2.5 text-xs font-semibold text-neutral-700 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-lg transition-colors cursor-pointer shadow-2xs"
                  >
                    Gửi thêm đơn mới
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Nguyễn Văn An"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Email sinh viên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="mssv@student.hcmus.edu.vn"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Student ID & Major */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Mã số sinh viên (MSSV) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      placeholder="24130xxx"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800"
                    />
                    {errors.studentId && (
                      <p className="text-xs text-red-600 mt-1">{errors.studentId}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Khoa / Ngành học <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={major}
                      onChange={(e) => setMajor(e.target.value)}
                      placeholder="Vật lý học / Vật lý Kỹ thuật / KHTN..."
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800"
                    />
                    {errors.major && (
                      <p className="text-xs text-red-600 mt-1">{errors.major}</p>
                    )}
                  </div>
                </div>

                {/* Year of study & Level */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Năm học hiện tại
                    </label>
                    <select
                      value={yearOfStudy}
                      onChange={(e) => setYearOfStudy(e.target.value as YearOfStudy)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800 cursor-pointer"
                    >
                      <option value="Năm nhất">Năm nhất (K26)</option>
                      <option value="Năm hai">Năm hai (K25)</option>
                      <option value="Năm ba">Năm ba (K24)</option>
                      <option value="Năm tư">Năm tư (K23)</option>
                      <option value="Cao học">Học viên Cao học</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Mức độ kinh nghiệm tự đánh giá
                    </label>
                    <select
                      value={experienceLevel}
                      onChange={(e) =>
                        setExperienceLevel(
                          e.target.value as 'Mới bắt đầu' | 'Khá' | 'Nâng cao'
                        )
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800 cursor-pointer"
                    >
                      <option value="Mới bắt đầu">Mới bắt đầu (Đam mê học hỏi từ đầu)</option>
                      <option value="Khá">Khá (Đã có kiến thức nền hoặc tự làm mạch)</option>
                      <option value="Nâng cao">Nâng cao (Đã tham gia dự án/NCKH)</option>
                    </select>
                  </div>
                </div>

                {/* Tracks selection */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Mảng hoạt động bạn mong muốn tham gia <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-2">
                    {availableTracks.map((track) => {
                      const isSelected = selectedTracks.includes(track.id);
                      return (
                        <button
                          type="button"
                          key={track.id}
                          onClick={() => handleTrackToggle(track.id)}
                          className={`p-3.5 text-left rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                              : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                          }`}
                        >
                          <div>
                            <div className="text-xs font-bold">{track.label}</div>
                            <div className={`text-[11px] mt-1 line-clamp-2 ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                              {track.desc}
                            </div>
                          </div>
                          {isSelected && (
                            <div className="mt-2 text-[10px] font-mono text-emerald-400 font-semibold">
                              ✓ Đã chọn
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {errors.tracks && (
                    <p className="text-xs text-red-600 mt-1">{errors.tracks}</p>
                  )}
                </div>

                {/* Motivation statement */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Lý do &amp; Nguyện vọng khi gia nhập NES <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={motivation}
                    onChange={(e) => setMotivation(e.target.value)}
                    placeholder="Chia sẻ về sở thích khoa học của bạn, mong muốn học hỏi mảng nào hoặc kỳ vọng khi tham gia NES..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800"
                  />
                  {errors.motivation && (
                    <p className="text-xs text-red-600 mt-1">{errors.motivation}</p>
                  )}
                </div>

                {/* Link Facebook or Portfolio */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Link Facebook cá nhân / GitHub / CV (Không bắt buộc)
                  </label>
                  <input
                    type="url"
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    placeholder="https://facebook.com/your-profile"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 text-xs font-bold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Gửi đơn đăng ký gia nhập</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Info Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Recruitment Steps */}
            <div className="bg-neutral-50/70 border border-neutral-200 rounded-2xl p-6">
              <h3 className="text-base font-bold text-neutral-900 mb-4">
                Quy trình gia nhập CLB NES
              </h3>
              <div className="space-y-4 text-xs text-neutral-600">
                <div className="flex gap-3">
                  <div className="font-mono font-bold text-blue-700 bg-blue-50 w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <strong className="text-neutral-900 block text-xs">Vòng 1: Điền đơn online</strong>
                    Hoàn tất form thông tin và chia sẻ nguyện vọng của bạn.
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="font-mono font-bold text-blue-700 bg-blue-50 w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <strong className="text-neutral-900 block text-xs">Vòng 2: Giao lưu thân mật</strong>
                    Buổi trò chuyện cởi mở cùng Ban Chủ nhiệm để hiểu rõ định hướng của bạn.
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="font-mono font-bold text-blue-700 bg-blue-50 w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <strong className="text-neutral-900 block text-xs">Vòng 3: Onboarding &amp; Nhận dự án</strong>
                    Gia nhập các nhóm chuyên môn, bắt đầu chuỗi training nội bộ và thực hành.
                  </div>
                </div>
              </div>
            </div>

            {/* Why Join NES Card */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-2xl p-6 shadow-md space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                <h4 className="font-bold text-sm">Vì sao nên chọn NES?</h4>
              </div>
              <ul className="text-xs text-blue-100 space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Được kèm cặp tận tình bởi các anh chị khóa trên giàu kinh nghiệm học phần &amp; NCKH.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Tiếp cận phòng lab thực hành, máy đo và trang thiết bị điện tử.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Môi trường thân thiện, tạo dựng tình bạn bền chặt suốt những năm tháng đại học.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
