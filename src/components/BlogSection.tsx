import React, { useState } from 'react';
import { BookOpen, Heart, ArrowRight, X } from 'lucide-react';
import { BlogPost, BlogCategory } from '../types';
import { Language, translations } from '../data/translations';

interface BlogSectionProps {
  posts: BlogPost[];
  language: Language;
  onLikePost: (id: string) => void;
  onManagePosts: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  posts,
  language,
  onLikePost,
  onManagePosts,
}) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [likedPosts, setLikedPosts] = useState<{ [key: string]: boolean }>({});
  const t = translations[language];

  const categories = ['All', 'Tutorial', 'Project Showcase', 'Career & Advice'];

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
    <section id="blog" className="py-16 md:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 font-mono">
              {t.blog.sectionNum}
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
              {t.blog.title}
            </h2>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base">
              {t.blog.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onManagePosts}
              className="px-3.5 py-2 text-xs font-medium text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-md transition-colors whitespace-nowrap"
            >
              {t.blog.crudBtn}
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-neutral-900 text-white'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300'
              }`}
            >
              {cat === 'All' ? t.blog.all : cat}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 bg-white border border-neutral-200 rounded-lg">
            <p className="text-sm text-neutral-500">
              {language === 'vi' ? 'Chưa có bài viết trong danh mục này.' : 'No blog posts found in this category.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group bg-white border border-neutral-200 rounded-lg p-6 flex flex-col justify-between hover:border-neutral-400 transition-all cursor-pointer shadow-xs"
              >
                <div>
                  {/* Zero-Pill Clean Unboxed Metadata */}
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3 flex-wrap font-mono">
                    <span className="font-semibold text-neutral-800">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{post.publishedAt}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTimeMinutes} {t.blog.minRead}</span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-950 group-hover:text-neutral-700 transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-neutral-900">{post.authorName}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[11px] text-neutral-400">{post.authorRole}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => handleLike(post.id, e)}
                      className={`flex items-center gap-1 transition-colors ${
                        likedPosts[post.id] ? 'text-red-600 font-semibold' : 'hover:text-red-500'
                      }`}
                      title="Like article"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${likedPosts[post.id] ? 'fill-red-600' : ''}`}
                      />
                      <span className="font-mono tabular-nums text-xs">{post.likes}</span>
                    </button>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-neutral-400" />
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
          className="fixed inset-0 z-50 bg-neutral-950/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-neutral-300 shadow-xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200 font-mono text-xs text-neutral-500">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-neutral-800">{selectedPost.category}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{selectedPost.publishedAt}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedPost.readTimeMinutes} {t.blog.minRead}</span>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-1 text-neutral-400 hover:text-neutral-900 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 mb-3">
                {selectedPost.title}
              </h2>
              <div className="flex items-center gap-2 text-sm text-neutral-600 mb-6">
                <span>{language === 'vi' ? 'Tác giả:' : 'By'}</span>
                <strong className="text-neutral-900">{selectedPost.authorName}</strong>
                <span>({selectedPost.authorRole})</span>
              </div>

              <div className="prose prose-neutral max-w-none text-neutral-700 text-sm sm:text-base leading-relaxed space-y-4">
                {selectedPost.content.split('\n\n').map((paragraph, i) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h4 key={i} className="text-base font-bold text-neutral-900 mt-6 mb-2">
                        {paragraph.replace('### ', '')}
                      </h4>
                    );
                  }
                  if (paragraph.startsWith('```')) {
                    return (
                      <pre
                        key={i}
                        className="bg-neutral-900 text-neutral-100 p-4 rounded-md text-xs font-mono overflow-x-auto my-3"
                      >
                        {paragraph.replace(/```[a-z]*\n?/g, '')}
                      </pre>
                    );
                  }
                  return <p key={i}>{paragraph}</p>;
                })}
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-200 flex items-center justify-between">
                <button
                  onClick={(e) => handleLike(selectedPost.id, e)}
                  className={`flex items-center gap-2 text-sm px-3.5 py-1.5 rounded-md border transition-colors ${
                    likedPosts[selectedPost.id]
                      ? 'bg-red-50 border-red-200 text-red-700'
                      : 'border-neutral-300 text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      likedPosts[selectedPost.id] ? 'fill-red-600 text-red-600' : ''
                    }`}
                  />
                  <span>{selectedPost.likes} {t.blog.likes}</span>
                </button>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-4 py-1.5 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-md"
                >
                  {t.blog.closeBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
