import React, { useState } from 'react';
import { BookOpen, Heart, ArrowRight, X, Clock } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogSectionProps {
  posts: BlogPost[];
  onLikePost: (id: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ posts, onLikePost }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [likedPosts, setLikedPosts] = useState<{ [key: string]: boolean }>({});

  const categories = [
    'All',
    'Vật lý & Lý thuyết',
    'Kỹ thuật Điện tử',
    'Kinh nghiệm Học tập',
  ];

  const publishedPosts = posts.filter((p) => p.isPublished);

  const filteredPosts = publishedPosts.filter((p) => {
    return selectedCategory === 'All' ? true : p.category === selectedCategory;
  });

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (likedPosts[id]) return;
    onLikePost(id);
    setLikedPosts((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="blog" className="py-16 md:py-24 border-b border-neutral-200 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              05. Ấn phẩm &amp; Bài viết học thuật
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
              Góc Kiến thức &amp; Kinh nghiệm Sinh viên
            </h2>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base max-w-2xl">
              Nơi chia sẻ các bài viết nghiên cứu vật lý, tài liệu hướng dẫn kỹ thuật chế tạo mạch và kinh nghiệm quý báu từ các anh chị sinh viên Khoa Vật lý – VLKT.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-neutral-900 text-white shadow-xs font-semibold'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
              }`}
            >
              {cat === 'All' ? 'Tất cả chuyên mục' : cat}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 bg-white border border-neutral-200 rounded-xl">
            <p className="text-sm text-neutral-500">Chưa có bài viết trong danh mục này.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-300 hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3 flex-wrap font-mono">
                    <span className="font-semibold text-blue-900 bg-blue-50 px-2 py-0.5 rounded text-[11px]">
                      {post.category}
                    </span>
                    <span aria-hidden="true" className="text-neutral-300">·</span>
                    <span className="tabular-nums text-neutral-500">{post.publishedAt}</span>
                    <span aria-hidden="true" className="text-neutral-300">·</span>
                    <span>{post.readTimeMinutes} phút đọc</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-neutral-950 group-hover:text-blue-700 transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-neutral-900">{post.authorName}</span>
                    <span aria-hidden="true" className="text-neutral-300">·</span>
                    <span className="text-[11px] text-neutral-500">{post.authorRole}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => handleLike(post.id, e)}
                      className={`flex items-center gap-1 transition-colors p-1 rounded hover:bg-neutral-100 ${
                        likedPosts[post.id] ? 'text-red-600 font-semibold' : 'hover:text-red-500'
                      }`}
                      title="Thích bài viết"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${likedPosts[post.id] ? 'fill-red-600' : ''}`}
                      />
                      <span className="font-mono tabular-nums text-xs">{post.likes}</span>
                    </button>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-neutral-400 group-hover:text-blue-700" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Full Post Reader Modal */}
      {selectedPost && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-neutral-950/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto border border-neutral-200 shadow-2xl p-6 sm:p-8 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200 font-mono text-xs text-neutral-500">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-blue-900 bg-blue-50 px-2 py-0.5 rounded text-[11px]">
                  {selectedPost.category}
                </span>
                <span aria-hidden="true" className="text-neutral-300">·</span>
                <span className="tabular-nums">{selectedPost.publishedAt}</span>
                <span aria-hidden="true" className="text-neutral-300">·</span>
                <span>{selectedPost.readTimeMinutes} phút đọc</span>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-1 text-neutral-400 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950 mb-3">
                {selectedPost.title}
              </h2>
              <div className="flex items-center gap-2 text-sm text-neutral-600 mb-6">
                <span>Tác giả:</span>
                <strong className="text-neutral-900 font-semibold">{selectedPost.authorName}</strong>
                <span className="text-neutral-500">({selectedPost.authorRole})</span>
              </div>

              <div className="text-neutral-700 text-sm sm:text-base leading-relaxed space-y-4">
                {selectedPost.content.split('\n\n').map((paragraph, i) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h4 key={i} className="text-base sm:text-lg font-bold text-neutral-950 mt-6 mb-2">
                        {paragraph.replace('### ', '')}
                      </h4>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    return (
                      <ul key={i} className="list-disc pl-5 space-y-1 text-sm">
                        {paragraph.split('\n').map((line, liIdx) => (
                          <li key={liIdx}>{line.replace(/^- /, '')}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={i}>{paragraph}</p>;
                })}
              </div>

              <div className="mt-8 pt-5 border-t border-neutral-200 flex items-center justify-between">
                <button
                  onClick={(e) => handleLike(selectedPost.id, e)}
                  className={`flex items-center gap-2 text-xs sm:text-sm px-4 py-2 rounded-lg border transition-colors cursor-pointer ${
                    likedPosts[selectedPost.id]
                      ? 'bg-red-50 border-red-200 text-red-700 font-semibold'
                      : 'border-neutral-300 text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      likedPosts[selectedPost.id] ? 'fill-red-600 text-red-600' : ''
                    }`}
                  />
                  <span>{selectedPost.likes} lượt thích</span>
                </button>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-4 py-2 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
                >
                  Đóng bài viết
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
