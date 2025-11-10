// src/pages/Templates.jsx
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, Download, Eye, Zap, Clock, Star, Layout, Palette, Code, Sparkles } from 'lucide-react';
import { useState } from 'react';

const Templates = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const templates = [
    {
      id: 1,
      name: 'Modern Portfolio',
      description: 'Elegant portfolio template for designers and developers with smooth animations',
      category: 'portfolio',
      preview: '/templates/portfolio-preview.jpg',
      pages: 8,
      technology: ['React', 'Tailwind', 'Framer Motion'],
      price: 'Free',
      popularity: 95,
      downloads: '2.4k',
      tags: ['responsive', 'dark-mode', 'animations'],
      lastUpdated: '2 days ago'
    },
    {
      id: 2,
      name: 'E-commerce Store',
      description: 'Complete online store with product listings, cart, and checkout flow',
      category: 'ecommerce',
      preview: '/templates/ecommerce-preview.jpg',
      pages: 12,
      technology: ['Next.js', 'Tailwind', 'Stripe'],
      price: 'Free',
      popularity: 88,
      downloads: '1.8k',
      tags: ['ecommerce', 'payments', 'responsive'],
      lastUpdated: '1 week ago'
    },
    {
      id: 3,
      name: 'Dashboard Admin',
      description: 'Modern admin dashboard with charts, analytics, and user management',
      category: 'dashboard',
      preview: '/templates/dashboard-preview.jpg',
      pages: 15,
      technology: ['React', 'Tailwind', 'Recharts'],
      price: 'Free',
      popularity: 92,
      downloads: '3.1k',
      tags: ['dashboard', 'analytics', 'charts'],
      lastUpdated: '3 days ago'
    },
    {
      id: 4,
      name: 'Blog Platform',
      description: 'SEO-optimized blog template with article management and categories',
      category: 'blog',
      preview: '/templates/blog-preview.jpg',
      pages: 10,
      technology: ['Next.js', 'Tailwind', 'MDX'],
      price: 'Free',
      popularity: 85,
      downloads: '1.2k',
      tags: ['blog', 'seo', 'markdown'],
      lastUpdated: '5 days ago'
    },
    {
      id: 5,
      name: 'Landing Page',
      description: 'High-converting landing page for startups and SaaS products',
      category: 'landing',
      preview: '/templates/landing-preview.jpg',
      pages: 6,
      technology: ['React', 'Tailwind', 'GSAP'],
      price: 'Free',
      popularity: 90,
      downloads: '4.2k',
      tags: ['landing', 'conversion', 'animated'],
      lastUpdated: '1 day ago'
    },
    {
      id: 6,
      name: 'SAAS Application',
      description: 'Complete SaaS template with authentication and subscription management',
      category: 'saas',
      preview: '/templates/saas-preview.jpg',
      pages: 18,
      technology: ['Next.js', 'Tailwind', 'Auth.js'],
      price: 'Free',
      popularity: 87,
      downloads: '2.1k',
      tags: ['saas', 'auth', 'billing'],
      lastUpdated: '1 week ago'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Templates', count: templates.length },
    { id: 'portfolio', name: 'Portfolio', count: templates.filter(t => t.category === 'portfolio').length },
    { id: 'ecommerce', name: 'E-commerce', count: templates.filter(t => t.category === 'ecommerce').length },
    { id: 'dashboard', name: 'Dashboard', count: templates.filter(t => t.category === 'dashboard').length },
    { id: 'blog', name: 'Blog', count: templates.filter(t => t.category === 'blog').length },
    { id: 'landing', name: 'Landing Page', count: templates.filter(t => t.category === 'landing').length },
    { id: 'saas', name: 'SAAS', count: templates.filter(t => t.category === 'saas').length }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.tags.some(tag => tag.includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            className="flex items-center justify-center mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="relative">
              <Layout className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              <Sparkles className="h-6 w-6 text-yellow-500 absolute -top-1 -right-1" />
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            Template Gallery [PREVIEW]
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover beautiful, production-ready templates. Copy, customize, and launch faster.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="flex-1 w-full lg:max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-4">
              <div className="flex bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Categories */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 mt-6 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Templates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {selectedCategory === 'all' ? 'All Templates' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {filteredTemplates.length} templates found
            </p>
          </div>

          {filteredTemplates.length === 0 ? (
            <motion.div
              variants={itemVariants}
              className="text-center py-16"
            >
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No templates found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => (
                <motion.div
                  key={template.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                  className="group"
                >
                  <TemplateCard template={template} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredTemplates.map((template) => (
                <motion.div
                  key={template.id}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                >
                  <TemplateCard template={template} listView />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { icon: Layout, label: 'Templates', value: '50+' },
            { icon: Download, label: 'Downloads', value: '45K+' },
            { icon: Star, label: 'Rating', value: '4.9/5' },
            { icon: Clock, label: 'Updated', value: 'Daily' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <stat.icon className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Template Card Component
const TemplateCard = ({ template, listView = false }) => {
  if (listView) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300 group">
        <div className="flex items-center gap-6">
          {/* Preview */}
          <div className="flex-shrink-0 w-32 h-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
            <Layout className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {template.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{template.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  {template.price}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Zap className="h-4 w-4 text-yellow-500" />
                {template.popularity}% popular
              </div>
              <div className="flex items-center gap-1">
                <Download className="h-4 w-4 text-blue-500" />
                {template.downloads} downloads
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-gray-500" />
                {template.lastUpdated}
              </div>
            </div>

            <div className="flex items-center gap-2 mt-3">
              {template.technology.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download
            </button>
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Preview
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Preview Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <Layout className="h-12 w-12 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
        </div>
        
        {/* Popularity Badge */}
        <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
          <Zap className="h-4 w-4 text-yellow-500" />
          <span className="text-sm font-semibold">{template.popularity}%</span>
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          {template.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {template.name}
          </h3>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {template.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Layout className="h-4 w-4" />
              {template.pages} pages
            </span>
            <span className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              {template.downloads}
            </span>
          </div>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {template.lastUpdated}
          </span>
        </div>

        {/* Technology */}
        <div className="flex flex-wrap gap-2 mb-4">
          {template.technology.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {template.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="flex-1 bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 font-semibold">
            <Download className="h-4 w-4" />
            Download
          </button>
          <button className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
            <Eye className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Templates;