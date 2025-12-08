import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Sample blog posts - in production, this would come from a CMS or API
const allBlogPosts = [
  {
    id: 1,
    slug: 'best-practices-civil-3d-drafting',
    title: 'Best Practices for Civil 3D Drafting Standards',
    excerpt: 'Learn how to establish consistent CAD standards that improve collaboration and reduce revision cycles in your civil engineering projects.',
    content: 'Full article content would go here...',
    author: 'PavePath Team',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Drafting Tips',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 2,
    slug: 'ada-compliance-curb-ramps',
    title: 'ADA Compliance: Common Mistakes in Curb Ramp Design',
    excerpt: 'Avoid costly revisions by understanding the most frequent ADA compliance issues in curb ramp drafting and how to prevent them.',
    content: 'Full article content would go here...',
    author: 'PavePath Team',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Compliance',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 3,
    slug: 'traffic-control-plan-essentials',
    title: 'Traffic Control Plans: Essential Elements for Permit Approval',
    excerpt: 'Discover the key components that make traffic control plans approval-ready and reduce back-and-forth with permitting agencies.',
    content: 'Full article content would go here...',
    author: 'PavePath Team',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Traffic Engineering',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 4,
    slug: 'swppp-drafting-guide',
    title: 'SWPPP Drafting: A Complete Guide to Erosion Control Plans',
    excerpt: 'Master the art of creating clear, compliant SWPPP plans that pass agency review on the first submission.',
    content: 'Full article content would go here...',
    author: 'PavePath Team',
    date: '2024-01-01',
    readTime: '8 min read',
    category: 'Compliance',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 5,
    slug: 'plan-set-organization-tips',
    title: 'Plan Set Organization: Tips for Professional Drawing Sets',
    excerpt: 'Learn how to organize and structure plan sets that are easy to navigate, review, and approve.',
    content: 'Full article content would go here...',
    author: 'PavePath Team',
    date: '2023-12-28',
    readTime: '6 min read',
    category: 'Drafting Tips',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 6,
    slug: 'cad-standards-collaboration',
    title: 'CAD Standards: Building Better Collaboration',
    excerpt: 'How consistent CAD standards improve team collaboration and reduce project delays.',
    content: 'Full article content would go here...',
    author: 'PavePath Team',
    date: '2023-12-20',
    readTime: '5 min read',
    category: 'Drafting Tips',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
  },
];

const categories = ['All', 'Drafting Tips', 'Compliance', 'Traffic Engineering'];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const filteredPosts = allBlogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Blog</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                Insights & Best Practices
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Stay updated with the latest drafting tips, industry insights, and best practices
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card border border-border text-foreground hover:border-primary/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 lg:py-16 relative bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="section-container relative z-10">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link to={`/blog/${post.slug}`} className="block h-full">
                      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 h-full flex flex-col">
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-full">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-4 line-clamp-3 flex-1">
                            {post.excerpt}
                          </p>

                          {/* Meta Info */}
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{formatDate(post.date)}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>

                          {/* Read More */}
                          <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link">
                            <span>Read article</span>
                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;

