import React from 'react';
import { Calendar, Download, ExternalLink, Mail, FileText, Bell, Info, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PressPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  // Mock press releases
  const pressReleases = [
    {
      id: 1,
      title: 'HealthNest Raises $50M Series B to Expand Digital Health Platform',
      date: '2024-03-15',
      excerpt: 'Funding will accelerate product development and market expansion to meet growing demand for digital health solutions.',
      link: '#'
    },
    {
      id: 2,
      title: 'HealthNest Partners with Major Hospital Networks to Improve Patient Care',
      date: '2024-02-28',
      excerpt: 'Strategic partnerships will enhance healthcare delivery and patient outcomes through integrated digital solutions.',
      link: '#'
    },
    {
      id: 3,
      title: 'HealthNest Launches New Telemedicine Features',
      date: '2024-02-15',
      excerpt: 'Platform update includes enhanced video consultation capabilities and improved patient monitoring tools.',
      link: '#'
    }
  ];

  // Mock media coverage
  const mediaCoverage = [
    {
      id: 1,
      title: 'The Future of Healthcare is Digital',
      publication: 'TechCrunch',
      date: '2024-03-10',
      excerpt: 'HealthNest is leading the charge in digital healthcare transformation...',
      link: '#'
    },
    {
      id: 2,
      title: 'How HealthNest is Revolutionizing Patient Care',
      publication: 'Forbes',
      date: '2024-02-25',
      excerpt: 'An in-depth look at how technology is improving healthcare delivery...',
      link: '#'
    },
    {
      id: 3,
      title: 'Digital Health Platforms See Surge in Adoption',
      publication: 'Healthcare Weekly',
      date: '2024-02-20',
      excerpt: 'HealthNest reports significant growth in platform usage...',
      link: '#'
    }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Press & Media</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Latest news, press releases, and media coverage about HealthNest.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Media Contact */}
        <motion.div 
          className="bg-gray-50 rounded-lg p-8 mb-12"
          {...fadeInUp}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Media Contact</h2>
            <p className="text-gray-600 mb-6">
              For press inquiries, please contact our media relations team:
            </p>
            <div className="space-y-2">
              <p className="text-gray-800">
                <strong>Sarah Thompson</strong>
                <br />
                Director of Communications
              </p>
              <p className="text-gray-600">
                Email: press@healthnest.com
                <br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
        </motion.div>

        {/* Press Kit */}
        <motion.div 
          className="mb-12"
          {...fadeInUp}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Press Kit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Logos</h3>
              <p className="text-gray-600 mb-4">
                Download our logo in various formats and sizes.
              </p>
              <button className="inline-flex items-center text-primary-600 hover:text-primary-700">
                <Download className="h-5 w-5 mr-2" />
                Download logos
              </button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Images</h3>
              <p className="text-gray-600 mb-4">
                High-resolution product screenshots and images.
              </p>
              <button className="inline-flex items-center text-primary-600 hover:text-primary-700">
                <Download className="h-5 w-5 mr-2" />
                Download images
              </button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Overview</h3>
              <p className="text-gray-600 mb-4">
                Fact sheet, executive bios, and company information.
              </p>
              <button className="inline-flex items-center text-primary-600 hover:text-primary-700">
                <Download className="h-5 w-5 mr-2" />
                Download PDF
              </button>
            </div>
          </div>
        </motion.div>

        {/* Press Releases */}
        <motion.div 
          className="mb-12"
          {...fadeInUp}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.id}
                className="bg-white rounded-lg border border-gray-200 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(release.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{release.title}</h3>
                <p className="text-gray-600 mb-4">{release.excerpt}</p>
                <a
                  href={release.link}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700"
                >
                  Read full release
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Media Coverage */}
        <motion.div 
          {...fadeInUp}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Media Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaCoverage.map((article, index) => (
              <motion.div
                key={article.id}
                className="bg-white rounded-lg border border-gray-200 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="font-medium text-primary-600">{article.publication}</span>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <a
                  href={article.link}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700"
                >
                  Read article
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PressPage;