import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Check, AlertCircle, Video, ArrowRight } from 'lucide-react';
import { ClubEvent } from '../types';

interface EventsSectionProps {
  events: ClubEvent[];
  onToggleRsvp: (eventId: string, email: string) => { success: boolean; rsvped: boolean; count: number };
}

export const EventsSection: React.FC<EventsSectionProps> = ({ events, onToggleRsvp }) => {
  const [filterType, setFilterType] = useState<'upcoming' | 'past'>('upcoming');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [rsvpEmail, setRsvpEmail] = useState<{ [key: string]: string }>({});
  const [rsvpMessage, setRsvpMessage] = useState<{ [key: string]: { text: string; isError?: boolean } }>({});

  const categories = [
    'All',
    'Hội thảo & Seminar',
    'Workshop Thực hành',
    'Chuỗi Ôn tập',
    'Giao lưu & Ngoại khóa',
  ];

  const filteredEvents = events.filter((ev) => {
    const matchesTime = filterType === 'upcoming' ? ev.status === 'Upcoming' : ev.status === 'Past';
    const matchesCategory = selectedCategory === 'All' ? true : ev.category === selectedCategory;
    return matchesTime && matchesCategory;
  });

  const handleRsvpSubmit = (eventId: string) => {
    const email = (rsvpEmail[eventId] || '').trim();
    if (!email || !email.includes('@')) {
      setRsvpMessage((prev) => ({
        ...prev,
        [eventId]: {
          text: 'Vui lòng nhập đúng địa chỉ email sinh viên.',
          isError: true,
        },
      }));
      return;
    }

    const res = onToggleRsvp(eventId, email);
    if (!res.success) {
      setRsvpMessage((prev) => ({
        ...prev,
        [eventId]: {
          text: 'Rất tiếc, sự kiện đã đủ số lượng người đăng ký tối đa!',
          isError: true,
        },
      }));
    } else {
      setRsvpMessage((prev) => ({
        ...prev,
        [eventId]: {
          text: res.rsvped ? 'Đăng ký giữ chỗ thành công! Hẹn gặp bạn tại buổi chia sẻ.' : 'Đã hủy đăng ký thành công.',
          isError: false,
        },
      }));
    }
  };

  return (
    <section id="events" className="py-16 md:py-24 border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              04. Hoạt động &amp; Sự kiện
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
              Lịch Hội thảo, Workshop &amp; Chuỗi Ôn tập
            </h2>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base max-w-2xl">
              Nơi chia sẻ kiến thức vật lý chuyên sâu, trải nghiệm công nghệ vi mạch thực tế và cùng nhau ôn tập vượt qua các kỳ thi đại học.
            </p>
          </div>
        </div>

        {/* Tab & Category Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Upcoming vs Past Toggle */}
          <div className="flex items-center p-1 bg-neutral-100 rounded-xl border border-neutral-200">
            <button
              onClick={() => setFilterType('upcoming')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filterType === 'upcoming'
                  ? 'bg-white text-neutral-950 shadow-xs font-semibold'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              Sự kiện sắp diễn ra
            </button>
            <button
              onClick={() => setFilterType('past')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filterType === 'past'
                  ? 'bg-white text-neutral-950 shadow-xs font-semibold'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              Sự kiện đã qua
            </button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-neutral-900 text-white font-medium shadow-xs'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                }`}
              >
                {cat === 'All' ? 'Tất cả thể loại' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <div className="text-center py-14 bg-neutral-50 border border-neutral-200 rounded-2xl">
            <Calendar className="w-10 h-10 text-neutral-400 mx-auto mb-3" />
            <p className="text-sm text-neutral-600 font-medium">Chưa có sự kiện nào trong danh mục này.</p>
            <p className="text-xs text-neutral-400 mt-1">Vui lòng theo dõi Fanpage CLB NES để cập nhật thông báo mới nhất.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredEvents.map((event) => {
              const spotsLeft = Math.max(0, event.capacity - event.rsvps.length);
              const message = rsvpMessage[event.id];

              return (
                <div
                  key={event.id}
                  className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md hover:border-neutral-300 transition-all duration-200"
                >
                  <div>
                    {/* Event Category & Date metadata */}
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3 flex-wrap font-mono">
                      <span className="font-semibold text-blue-900 bg-blue-50 px-2 py-0.5 rounded text-[11px]">
                        {event.category}
                      </span>
                      <span aria-hidden="true" className="text-neutral-300">·</span>
                      <span className="tabular-nums font-medium text-neutral-700">{event.date}</span>
                      <span aria-hidden="true" className="text-neutral-300">·</span>
                      <span className="tabular-nums text-neutral-600">{event.time}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-neutral-950 leading-snug mb-3">
                      {event.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
                      {event.description}
                    </p>

                    {/* Venue & Speaker Details */}
                    <div className="space-y-2 text-xs text-neutral-600 mb-5 pt-4 border-t border-neutral-100">
                      <div className="flex items-center gap-2">
                        {event.isOnline ? (
                          <Video className="w-4 h-4 text-blue-600 shrink-0" />
                        ) : (
                          <MapPin className="w-4 h-4 text-neutral-500 shrink-0" />
                        )}
                        <span className="font-medium text-neutral-800">{event.location}</span>
                      </div>
                      {event.speakerName && (
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-neutral-500 shrink-0" />
                          <span>
                            Chủ trì:{' '}
                            <strong className="text-neutral-900">{event.speakerName}</strong>{' '}
                            <span className="text-neutral-500">({event.speakerRole})</span>
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom: Capacity & Interactive RSVP */}
                  <div className="pt-4 border-t border-neutral-100">
                    <div className="flex items-center justify-between text-xs text-neutral-500 mb-3 font-mono">
                      <span>
                        Đã đăng ký:{' '}
                        <strong className="text-neutral-900 tabular-nums">
                          {event.rsvps.length}/{event.capacity}
                        </strong>
                      </span>
                      <span className={spotsLeft <= 5 && spotsLeft > 0 ? 'text-amber-600 font-semibold' : 'text-neutral-600'}>
                        {spotsLeft === 0 ? 'Đã hết chỗ' : `Còn ${spotsLeft} suất tham dự`}
                      </span>
                    </div>

                    {filterType === 'upcoming' ? (
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <input
                            type="email"
                            placeholder="Email của bạn (@student.hcmus.edu.vn)"
                            value={rsvpEmail[event.id] || ''}
                            onChange={(e) =>
                              setRsvpEmail((prev) => ({
                                ...prev,
                                [event.id]: e.target.value,
                              }))
                            }
                            className="flex-1 px-3 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-800"
                          />
                          <button
                            onClick={() => handleRsvpSubmit(event.id)}
                            disabled={spotsLeft === 0 && !event.rsvps.includes((rsvpEmail[event.id] || '').trim().toLowerCase())}
                            className="px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                          >
                            Đăng ký tham dự
                          </button>
                        </div>

                        {message && (
                          <div
                            className={`text-xs px-3 py-2 rounded-lg flex items-center gap-2 ${
                              message.isError
                                ? 'bg-red-50 text-red-700 border border-red-200'
                                : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            }`}
                          >
                            {message.isError ? (
                              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                            ) : (
                              <Check className="w-4 h-4 shrink-0 text-emerald-600" />
                            )}
                            <span>{message.text}</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-xs text-neutral-400 italic bg-neutral-50 px-3 py-2 rounded-lg text-center">
                        Sự kiện đã kết thúc tốt đẹp ({event.date})
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
