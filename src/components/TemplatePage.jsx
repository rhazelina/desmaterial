// components/TemplatesPage.jsx
import { motion } from 'framer-motion';
import { Search, Filter, Grid, Download, Eye, Zap, Layout, Palette } from 'lucide-react';
import { useState } from 'react';

const TemplatesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const templates = [
    {
      id: 1,
      name: 'E-commerce Store',
      description: 'Complete online store template with product listings, cart, and checkout',
      category: 'ecommerce',
      preview: '/templates/ecommerce-preview.jpg',
      pages: ['Home', 'Products', 'Cart', 'Checkout'],
      technology: ['React', 'Tailwind CSS'],
      price: 'Free',
      popularity: 95
    },
    {
      id: 2,
      name: 'Dashboard Admin',
      description: 'Modern admin dashboard with charts, tables, and analytics',
      category: 'dashboard',
      preview: '/templates/dashboard-preview.jpg',
      pages: ['Dashboard', 'Analytics', 'Users', 'Settings'],
      technology: ['React', 'Tailwind CSS'],
      price: 'Free',
      popularity: 88
    },
    {
      id: 3,
      name: 'Portfolio Website',
      description: 'Elegant portfolio template for designers and developers',
      category: 'portfolio',
      preview: '/templates/portfolio-preview.jpg',
      pages: ['Home', 'About', 'Projects', 'Contact'],
      technology: ['HTML', 'Tailwind CSS'],
      price: 'Free',
      popularity: 92
    },
    {
      id: 4,
      name: 'Blog Platform',
      description: 'Modern blog template with article listings and author pages',
      category: 'blog',
      preview: '/templates/blog-preview.jpg',
      pages: ['Home', 'Articles', 'Categories', 'About'],
      technology: ['Next.js', 'Tailwind CSS'],
      price: 'Free',
      popularity: 85
    },
    {
      id: 5,
      name: 'Landing Page',
      description: 'High-converting landing page template for startups',
      category: 'landing',
      preview: '/templates/landing-preview.jpg',
      pages: ['Hero', 'Features', 'Testimonials', 'CTA'],
      technology: ['HTML', 'Tailwind CSS'],
      price: 'Free',
      popularity: 90
    },
    {
      id: 6,
      name: 'SAAS Application',
      description: 'Complete SAAS application template with authentication',
      category: 'saas',
      preview: '/templates/saas-preview.jpg',
      pages: ['Login', 'Dashboard', 'Billing', 'Settings'],
      technology: ['React', 'Tailwind CSS'],
      price: 'Free',
      popularity: 82
    }
  ];

  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'dashboard', name: 'Dashboard' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'blog', name: 'Blog' },
    { id: 'landing', name: 'Landing Page' },
    { id: 'saas', name: 'SAAS' }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Layout className="h-8 w-8 text-green-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Template Library</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map(template => (
            <motion.div
              key={template.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition-all"
            >
              {/* Preview */}
              <div className="h-48 bg-gradient-to-br from-green-50 to-blue-50 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Layout className="h-12 w-12 text-gray-400" />
                </div>
                {/* Popularity Badge */}
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Zap className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium">{template.popularity}%</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{template.name}</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {template.price}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{template.description}</p>

                {/* Technology */}
                <div className="flex items-center gap-2 mb-4">
                  {template.technology.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Pages */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Includes pages:</h4>
                  <div className="flex flex-wrap gap-1">
                    {template.pages.map(page => (
                      <span
                        key={page}
                        className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs"
                      >
                        {page}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    Preview
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <Search className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">No templates found</h3>
            <p className="mt-2 text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplatesPage;