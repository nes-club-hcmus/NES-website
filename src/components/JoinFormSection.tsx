import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { MembershipApplication, Track, YearOfStudy } from '../types';
import { Language, translations } from '../data/translations';

interface JoinFormSectionProps {
  language: Language;
  onSubmitApplication: (
    app: Omit<MembershipApplication, 'id' | 'status' | 'submittedAt'>
  ) => MembershipApplication;
}

export const JoinFormSection: React.FC<JoinFormSectionProps> = ({
  language,
  onSubmitApplication,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [major, setMajor] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState<YearOfStudy>('Freshman');
  const [selectedTracks, setSelectedTracks] = useState<Track[]>(['Software & AI']);
  const [experienceLevel, setExperienceLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Beginner');
  const [motivation, setMotivation] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedApp, setSubmittedApp] = useState<MembershipApplication | null>(null);

  const t = translations[language];

  const availableTracks: Track[] = [
    'Software & AI',
    'Product & UI/UX',
    'Hardware & Robotics',
    'Community & Ops',
  ];

  const handleTrackToggle = (track: Track) => {
    if (selectedTracks.includes(track)) {
      if (selectedTracks.length > 1) {
        setSelectedTracks(selectedTracks.filter((t) => t !== track));
      }
    } else {
      setSelectedTracks([...selectedTracks, track]);
    }
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) {
      errs.fullName = language === 'vi' ? 'Vui lòng nhập họ và tên.' : 'Full name is required.';
    }
    if (!email.trim()) {
      errs.email = language === 'vi' ? 'Vui lòng nhập email trường.' : 'University email is required.';
    } else if (!email.includes('@') || !email.includes('.')) {
      errs.email = language === 'vi' ? 'Email không hợp lệ.' : 'Please provide a valid university email address.';
    }
    if (!studentId.trim()) {
      errs.studentId = language === 'vi' ? 'Vui lòng nhập mã số sinh viên (MSSV).' : 'Student ID number is required.';
    }
    if (!major.trim()) {
      errs.major = language === 'vi' ? 'Vui lòng nhập ngành học.' : 'Academic major or program is required.';
    }
    if (!motivation.trim() || motivation.trim().length < 15) {
      errs.motivation = language === 'vi' ? 'Vui lòng chia sẻ ít nhất 15 ký tự về lý do ứng tuyển.' : 'Please tell us in at least 15 characters why you want to join.';
    }
    if (selectedTracks.length === 0) {
      errs.tracks = language === 'vi' ? 'Vui lòng chọn ít nhất 1 hướng chuyên môn.' : 'Please select at least one track.';
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

    // Reset fields
    setFullName('');
    setEmail('');
    setStudentId('');
    setMajor('');
    setMotivation('');
    setPortfolioUrl('');
    setErrors({});
  };

  return (
    <section id="join" className="py-16 md:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 font-mono">
            {t.join.sectionNum}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            {t.join.title}
          </h2>
          <p className="mt-2 text-neutral-600 text-sm sm:text-base leading-relaxed">
            {t.join.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form Column */}
          <div className="lg:col-span-8 bg-white border border-neutral-200 rounded-lg p-6 sm:p-8">
            {submittedApp ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">
                  {t.join.form.successTitle}, {submittedApp.fullName}!
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                  {t.join.form.successDesc}{' '}
                  <span className="font-mono font-semibold text-neutral-900">
                    {submittedApp.id}
                  </span>
                  . {language === 'vi' ? 'Ban Chủ nhiệm NES sẽ gửi email hẹn lịch gặp mặt tới' : 'A track lead will follow up with you at'}{' '}
                  <span className="font-mono text-neutral-800">{submittedApp.email}</span>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmittedApp(null)}
                    className="px-4 py-2 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors"
                  >
                    {t.join.form.submitAnother}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      {t.join.form.fullName} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Nguyễn Văn An"
                      className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      {t.join.form.email} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="23120xxx@student.hcmus.edu.vn"
                      className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
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
                      {t.join.form.studentId} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      placeholder="23120888"
                      className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    />
                    {errors.studentId && (
                      <p className="text-xs text-red-600 mt-1">{errors.studentId}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      {t.join.form.major} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={major}
                      onChange={(e) => setMajor(e.target.value)}
                      placeholder="Khoa học Máy tính / Kỹ thuật Phần mềm / ĐTVT..."
                      className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    />
                    {errors.major && (
                      <p className="text-xs text-red-600 mt-1">{errors.major}</p>
                    )}
                  </div>
                </div>

                {/* Year of Study & Experience Level */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      {t.join.form.year}
                    </label>
                    <select
                      value={yearOfStudy}
                      onChange={(e) => setYearOfStudy(e.target.value as YearOfStudy)}
                      className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    >
                      <option value="Freshman">{t.join.form.yearOptions.Freshman}</option>
                      <option value="Sophomore">{t.join.form.yearOptions.Sophomore}</option>
                      <option value="Junior">{t.join.form.yearOptions.Junior}</option>
                      <option value="Senior">{t.join.form.yearOptions.Senior}</option>
                      <option value="Graduate">{t.join.form.yearOptions.Graduate}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      {t.join.form.level}
                    </label>
                    <select
                      value={experienceLevel}
                      onChange={(e) =>
                        setExperienceLevel(
                          e.target.value as 'Beginner' | 'Intermediate' | 'Advanced'
                        )
                      }
                      className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    >
                      <option value="Beginner">{t.join.form.levelOptions.Beginner}</option>
                      <option value="Intermediate">{t.join.form.levelOptions.Intermediate}</option>
                      <option value="Advanced">{t.join.form.levelOptions.Advanced}</option>
                    </select>
                  </div>
                </div>

                {/* Tracks Selection */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    {t.join.form.tracksLabel} <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    {availableTracks.map((track) => {
                      const isSelected = selectedTracks.includes(track);
                      return (
                        <button
                          type="button"
                          key={track}
                          onClick={() => handleTrackToggle(track)}
                          className={`p-3 text-left text-xs font-medium rounded-md border transition-colors flex items-center justify-between ${
                            isSelected
                              ? 'bg-neutral-900 text-white border-neutral-900'
                              : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300'
                          }`}
                        >
                          <span>{track}</span>
                          {isSelected && <span className="text-[10px] font-mono">✓</span>}
                        </button>
                      );
                    })}
                  </div>
                  {errors.tracks && (
                    <p className="text-xs text-red-600 mt-1">{errors.tracks}</p>
                  )}
                </div>

                {/* Motivation Statement */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    {t.join.form.motivation} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={motivation}
                    onChange={(e) => setMotivation(e.target.value)}
                    placeholder={t.join.form.motivationPlaceholder}
                    className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  />
                  {errors.motivation && (
                    <p className="text-xs text-red-600 mt-1">{errors.motivation}</p>
                  )}
                </div>

                {/* Portfolio / GitHub Link */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    {t.join.form.portfolio}
                  </label>
                  <input
                    type="url"
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    placeholder="https://github.com/your-username"
                    className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md shadow-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.join.form.submitBtn}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Info Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="text-base font-bold text-neutral-900 mb-3">
                {t.join.timelineTitle}
              </h3>
              <div className="space-y-4 text-xs text-neutral-600">
                <div className="flex gap-3">
                  <div className="font-mono text-neutral-400 tabular-nums">01</div>
                  <div>
                    <strong className="text-neutral-900 block">{t.join.step1Title}</strong>
                    {t.join.step1Desc}
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="font-mono text-neutral-400 tabular-nums">02</div>
                  <div>
                    <strong className="text-neutral-900 block">{t.join.step2Title}</strong>
                    {t.join.step2Desc}
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="font-mono text-neutral-400 tabular-nums">03</div>
                  <div>
                    <strong className="text-neutral-900 block">{t.join.step3Title}</strong>
                    {t.join.step3Desc}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-100 border border-neutral-200 rounded-lg p-6 text-xs text-neutral-600 space-y-2">
              <div className="font-semibold text-neutral-900">
                {language === 'vi' ? 'Quản lý hồ sơ ứng tuyển' : 'Admin Review Workflow'}
              </div>
              <p>
                {language === 'vi'
                  ? 'Tất cả đơn đăng ký được lưu trữ an toàn trong cơ sở dữ liệu và hiển thị ngay tại mục Quản trị CLB để Ban Chủ nhiệm duyệt và nhận thành viên chính thức.'
                  : 'Applications submitted here are stored locally in the member registry and are immediately reviewable in the Management Dashboard tab.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
