import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Sample blog posts - in production, this would come from a CMS or API
const blogPosts: Record<string, {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}> = {
  'best-practices-civil-3d-drafting': {
    id: 1,
    slug: 'best-practices-civil-3d-drafting',
    title: 'Best Practices for Civil 3D Drafting Standards',
    excerpt: 'Learn how to establish consistent CAD standards that improve collaboration and reduce revision cycles in your civil engineering projects.',
    content: `
      <p>Establishing consistent CAD standards is crucial for any civil engineering firm. In this comprehensive guide, we'll explore the best practices for Civil 3D drafting that can significantly improve your project workflow.</p>
      
      <h2>Why CAD Standards Matter</h2>
      <p>Consistent CAD standards ensure that all team members, whether in-house or external, can work seamlessly together. This reduces errors, speeds up project delivery, and minimizes costly revisions.</p>
      
      <h2>Key Elements of Effective CAD Standards</h2>
      <ul>
        <li><strong>Layer Naming Conventions:</strong> Use a consistent, logical naming system that makes it easy to identify drawing elements at a glance.</li>
        <li><strong>Text Styles:</strong> Standardize font sizes, types, and styles across all drawings for professional consistency.</li>
        <li><strong>Dimension Styles:</strong> Create dimension styles that match your firm's preferences and client requirements.</li>
        <li><strong>Title Blocks:</strong> Develop standardized title blocks that include all necessary project information.</li>
      </ul>
      
      <h2>Implementation Tips</h2>
      <p>Start by documenting your current practices, then gradually refine them. Involve your team in the process to ensure buy-in and practical application.</p>
    `,
    author: 'PavePath Team',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Drafting Tips',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&q=80',
  },
  'ada-compliance-curb-ramps': {
    id: 2,
    slug: 'ada-compliance-curb-ramps',
    title: 'ADA Compliance: Common Mistakes in Curb Ramp Design',
    excerpt: 'Avoid costly revisions by understanding the most frequent ADA compliance issues in curb ramp drafting and how to prevent them.',
    content: `
      <p>ADA compliance is non-negotiable in curb ramp design. This article covers the most common mistakes we see in curb ramp drafting and how to avoid them.</p>
      
      <h2>Common ADA Compliance Issues</h2>
      <p>Many projects face delays due to ADA compliance issues that could have been prevented during the drafting phase.</p>
      
      <h2>Key Requirements</h2>
      <ul>
        <li>Maximum slope ratios for ramp runs</li>
        <li>Proper landing dimensions</li>
        <li>Detectable warning surface placement</li>
        <li>Cross-slope limitations</li>
      </ul>
    `,
    author: 'PavePath Team',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Compliance',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
  },
  'traffic-control-plan-essentials': {
    id: 3,
    slug: 'traffic-control-plan-essentials',
    title: 'Traffic Control Plans: Essential Elements for Permit Approval',
    excerpt: 'Discover the key components that make traffic control plans approval-ready and reduce back-and-forth with permitting agencies.',
    content: `
      <p>Creating approval-ready traffic control plans requires attention to detail and understanding of MUTCD requirements.</p>
      
      <h2>Essential Elements</h2>
      <p>Every traffic control plan must include specific elements to gain agency approval quickly.</p>
    `,
    author: 'PavePath Team',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Traffic Engineering',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&q=80',
  },
  'swppp-drafting-guide': {
    id: 4,
    slug: 'swppp-drafting-guide',
    title: 'SWPPP Drafting: A Complete Guide to Erosion Control Plans',
    excerpt: 'Master the art of creating clear, compliant SWPPP plans that pass agency review on the first submission.',
    content: `
      <p>SWPPP drafting requires careful attention to detail and understanding of environmental regulations.</p>
    `,
    author: 'PavePath Team',
    date: '2024-01-01',
    readTime: '8 min read',
    category: 'Compliance',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80',
  },
  'plan-set-organization-tips': {
    id: 5,
    slug: 'plan-set-organization-tips',
    title: 'Plan Set Organization: Tips for Professional Drawing Sets',
    excerpt: 'Learn how to organize and structure plan sets that are easy to navigate, review, and approve.',
    content: `
      <p>Well-organized plan sets make a significant difference in project efficiency and client satisfaction.</p>
    `,
    author: 'PavePath Team',
    date: '2023-12-28',
    readTime: '6 min read',
    category: 'Drafting Tips',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&q=80',
  },
  'cad-standards-collaboration': {
    id: 6,
    slug: 'cad-standards-collaboration',
    title: 'CAD Standards: Building Better Collaboration',
    excerpt: 'How consistent CAD standards improve team collaboration and reduce project delays.',
    content: `
      <p>Effective collaboration starts with consistent standards that everyone can follow.</p>
    `,
    author: 'PavePath Team',
    date: '2023-12-20',
    readTime: '5 min read',
    category: 'Drafting Tips',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="text-primary hover:underline">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Back Link */}
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Blog</span>
              </Link>

              {/* Category Badge */}
              <div className="mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div>
                  <span>By {post.author}</span>
                </div>
                <button className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>

              {/* Featured Image */}
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mb-12">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 lg:py-16 relative">
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg dark:prose-invert max-w-none
                  prose-headings:font-display prose-headings:text-foreground
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-strong:text-foreground
                  prose-ul:text-muted-foreground prose-li:text-muted-foreground
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 relative bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                Need Drafting Support?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss how PavePath can help accelerate your project delivery.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                <span>Get Started</span>
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;

