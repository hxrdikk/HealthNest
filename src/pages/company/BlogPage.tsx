import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ChevronRight, Search, Filter, Tag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  // Mock blog posts
  const posts = [
    {
      id: 1,
      title: 'The Future of Telemedicine: Trends and Innovations',
      excerpt: 'Explore how telemedicine is revolutionizing healthcare delivery and what the future holds for digital health solutions.',
      author: 'Dr. Sarah Johnson',
      date: '2024-03-15',
      readTime: '5 min read',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/4226269/pexels-photo-4226269.jpeg'
    },
    {
      id: 2,
      title: 'Understanding Electronic Health Records',
      excerpt: 'A comprehensive guide to electronic health records and their impact on modern healthcare.',
      author: 'Michael Chen',
      date: '2024-03-10',
      readTime: '7 min read',
      category: 'Healthcare',
      image: 'https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg'
    },
    {
      id: 3,
      title: 'Best Practices for Medication Management',
      excerpt: 'Tips and strategies for effectively managing medications and improving adherence.',
      author: 'Emily Wilson',
      date: '2024-03-05',
      readTime: '4 min read',
      category: 'Wellness',
      image: 'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg'
    },
    {
      id: 4,
      title: 'Healthcare Privacy and Security in the Digital Age',
      excerpt: 'Understanding the importance of data protection and privacy in modern healthcare systems.',
      author: 'James Martinez',
      date: '2024-03-01',
      readTime: '6 min read',
      category: 'Security',
      image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg'
    }
  ];

  // Mock categories
  const categories = [
    { name: 'All', count: 12 },
    { name: 'Technology', count: 4 },
    { name: 'Healthcare', count: 3 },
    { name: 'Wellness', count: 3 },
    { name: 'Security', count: 2 }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">HealthNest Blog</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Insights, updates, and expert perspectives on healthcare technology and wellness.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 w-full border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200"
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        <motion.div 
          className="mb-12"
          {...fadeInUp}
        >
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg"
              alt="Featured post"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-500 text-white mb-4">
                Featured
              </span>
              <h2 className="text-3xl font-bold text-white mb-4">
                The Impact of AI on Healthcare Delivery
              </h2>
              <div className="flex items-center text-white/80 text-sm">
                <User className="h-4 w-4 mr-2" />
                <span className="mr-4">Dr. Robert Williams</span>
                <Calendar className="h-4 w-4 mr-2" />
                <span className="mr-4">March 20, 2024</span>
                <Clock className="h-4 w-4 mr-2" />
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Latest Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 mb-4">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  <Link to={`/blog/${post.id}`} className="hover:text-primary-600">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Read more
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Subscribe to our newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest insights and updates delivered to your inbox.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;