import React, { useState, useEffect } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, Tag, Calendar } from 'lucide-react';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  items: GalleryItem[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Học thuật & Seminar',
    'Thực hành & Chế tạo',
    'Gắn kết & Ngoại khóa',
  ];

  const filteredItems = items.filter((item) => {
    return selectedCategory === 'All' ? true : item.category === selectedCategory;
  });

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') {
        setActiveImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, filteredItems.length]);

  const activeItem = activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  return (
    <section id="gallery" className="py-16 md:py-24 border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              06. Khoảnh khắc &amp; Hoạt động
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
              Hình ảnh Hoạt động Câu lạc bộ
            </h2>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base max-w-2xl">
              Những khoảnh khắc nhiệt huyết của sinh viên NES trong các buổi seminar học thuật, chế tạo mạch tại lab A315, lớp trợ giảng ôn thi và hoạt động ngoại khóa.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
            <Camera className="w-4 h-4 text-blue-700" />
            <span>{items.length} hình ảnh ghi lại</span>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setActiveImageIndex(null);
              }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-neutral-900 text-white shadow-xs font-semibold'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
              }`}
            >
              {cat === 'All' ? 'Tất cả hoạt động' : cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveImageIndex(index)}
              className="group bg-neutral-900 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer border border-neutral-200 flex flex-col"
            >
              {/* Image with zoom on hover */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="flex items-center gap-1.5 text-white text-xs font-medium bg-neutral-900/80 backdrop-blur-sm px-2.5 py-1 rounded-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Xem phóng to</span>
                  </div>
                </div>

                {/* Badge top left */}
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-semibold bg-neutral-950/80 backdrop-blur-sm text-neutral-100 border border-neutral-700 px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Caption & details */}
              <div className="p-5 bg-white flex-1 flex flex-col justify-between border-t border-neutral-100">
                <div>
                  <div className="flex items-center gap-1.5 text-neutral-400 text-xs mb-2 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-neutral-950 group-hover:text-blue-700 transition-colors leading-snug line-clamp-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && activeImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-4 right-4 z-60 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          {filteredItems.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex(
                    (activeImageIndex - 1 + filteredItems.length) % filteredItems.length
                  );
                }}
                className="absolute left-3 sm:left-6 z-60 p-2 sm:p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                aria-label="Ảnh trước"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
                }}
                className="absolute right-3 sm:right-6 z-60 p-2 sm:p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                aria-label="Ảnh kế tiếp"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Modal Content */}
          <div
            className="max-w-4xl w-full bg-neutral-950 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] max-h-[65vh]">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="max-w-full max-h-[65vh] object-contain"
              />
            </div>

            <div className="p-5 sm:p-6 bg-neutral-900 border-t border-neutral-800 text-white">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 bg-blue-900/60 text-blue-200 border border-blue-700/50 rounded">
                  {activeItem.category}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {activeImageIndex + 1} / {filteredItems.length} · {activeItem.date}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {activeItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
