import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Check, AlertCircle, Video } from 'lucide-react';
import { ClubEvent, EventCategory } from '../types';
import { Language, translations } from '../data/translations';

interface EventsSectionProps {
  events: ClubEvent[];
  language: Language;
  onToggleRsvp: (eventId: string, email: string) => { success: boolean; rsvped: boolean; count: number };
  onManageEvents: () => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({
  events,
  language,
  onToggleRsvp,
  onManageEvents,
}) => {
  const [filterType, setFilterType] = useState<'upcoming' | 'past'>('upcoming');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [rsvpEmail, setRsvpEmail] = useState<{ [key: string]: string }>({});
  const [rsvpMessage, setRsvpMessage] = useState<{ [key: string]: { text: string; isError?: boolean } }>({});
  const t = translations[language];

  const categories = ['All', 'Workshop', 'Hackathon', 'Tech Talk', 'Project Demo'];

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
          text: language === 'vi' ? 'Vui lòng nhập đúng email sinh viên trường.' : 'Please enter a valid university email address.',
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
          text: language === 'vi' ? 'Sự kiện đã đạt số lượng đăng ký tối đa!' : 'Event has reached maximum capacity!',
          isError: true,
        },
      }));
    } else {
      setRsvpMessage((prev) => ({
        ...prev,
        [eventId]: {
          text: res.rsvped ? t.events.rsvpSuccess : t.events.rsvpCancelled,
          isError: false,
        },
      }));
    }
  };

  return (
    <section id="events" className="py-16 md:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 font-mono">
              {t.events.sectionNum}
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
              {t.events.title}
            </h2>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base">
              {t.events.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onManageEvents}
              className="px-3.5 py-2 text-xs font-medium text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-md transition-colors whitespace-nowrap"
            >
              {t.events.crudBtn}
            </button>
          </div>
        </div>

        {/* Tab & Category Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Upcoming vs Past Toggle */}
          <div className="flex items-center p-1 bg-neutral-100 rounded-lg border border-neutral-200">
            <button
              onClick={() => setFilterType('upcoming')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filterType === 'upcoming'
                  ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {t.events.upcomingTab}
            </button>
            <button
              onClick={() => setFilterType('past')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filterType === 'past'
                  ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {t.events.pastTab}
            </button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-neutral-900 text-white font-medium'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300'
                }`}
              >
                {cat === 'All' ? (language === 'vi' ? 'Tất cả chủ đề' : 'All') : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <div className="text-center py-12 bg-white border border-neutral-200 rounded-lg">
            <p className="text-sm text-neutral-500">
              {language === 'vi' ? 'Chưa có sự kiện nào trong mục này.' : `No ${filterType} events found in this category.`}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredEvents.map((event) => {
              const spotsLeft = Math.max(0, event.capacity - event.rsvps.length);
              const message = rsvpMessage[event.id];

              return (
                <div
                  key={event.id}
                  className="bg-white border border-neutral-200 rounded-lg p-6 flex flex-col justify-between hover:border-neutral-300 transition-colors"
                >
                  <div>
                    {/* Zero-Pill Clean Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3 flex-wrap font-mono">
                      <span className="font-semibold text-neutral-800">{event.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{event.date}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{event.time}</span>
                    </div>

                    <h3 className="text-lg font-bold text-neutral-950 leading-snug mb-3">
                      {event.title}
                    </h3>

                    <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                      {event.description}
                    </p>

                    {/* Venue & Speaker Details */}
                    <div className="space-y-1.5 text-xs text-neutral-600 mb-4 pt-3 border-t border-neutral-100">
                      <div className="flex items-center gap-2">
                        {event.isOnline ? (
                          <Video className="w-3.5 h-3.5 text-neutral-400" />
                        ) : (
                          <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                        )}
                        <span>{event.location}</span>
                      </div>
                      {event.speakerName && (
                        <div className="flex items-center gap-2">
                          <Users className="w-3.5 h-3.5 text-neutral-400" />
                          <span>
                            {t.events.ledBy} <span className="font-medium text-neutral-800">{event.speakerName}</span> ({event.speakerRole})
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom: Capacity & Interactive RSVP */}
                  <div className="pt-4 border-t border-neutral-100">
                    <div className="flex items-center justify-between text-xs text-neutral-500 mb-3 font-mono">
                      <span>
                        {t.events.capacityLabel}{' '}
                        <strong className="text-neutral-900 tabular-nums">
                          {event.rsvps.length}/{event.capacity}
                        </strong>
                      </span>
                      <span className={spotsLeft <= 5 && spotsLeft > 0 ? 'text-amber-600 font-semibold' : ''}>
                        {spotsLeft === 0 ? t.events.full : `${spotsLeft} ${t.events.seatsAvailable}`}
                      </span>
                    </div>

                    {filterType === 'upcoming' ? (
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <input
                            type="email"
                            placeholder={t.events.rsvpPlaceholder}
                            value={rsvpEmail[event.id] || ''}
                            onChange={(e) =>
                              setRsvpEmail((prev) => ({
                                ...prev,
                                [event.id]: e.target.value,
                              }))
                            }
                            className="flex-1 px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-800"
                          />
                          <button
                            onClick={() => handleRsvpSubmit(event.id)}
                            disabled={spotsLeft === 0 && !event.rsvps.includes((rsvpEmail[event.id] || '').trim().toLowerCase())}
                            className="px-3 py-1.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors whitespace-nowrap"
                          >
                            {t.events.rsvpBtn}
                          </button>
                        </div>

                        {message && (
                          <div
                            className={`text-xs px-2.5 py-1.5 rounded-md flex items-center gap-1.5 ${
                              message.isError
                                ? 'bg-red-50 text-red-700'
                                : 'bg-emerald-50 text-emerald-800'
                            }`}
                          >
                            <Check className="w-3.5 h-3.5 shrink-0" />
                            <span>{message.text}</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-xs text-neutral-400 italic">
                        {t.events.archivedNotice} ({event.date})
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
