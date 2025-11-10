// src/pages/Components.jsx
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, Eye, Code, Copy, Check, Zap, Palette, Layout, Sparkles, Download, Star } from 'lucide-react';
import { useState } from 'react';

const Components = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [copiedComponent, setCopiedComponent] = useState(null);

  const components = [
    {
      id: 1,
      name: 'Navigation Bar',
      description: 'Responsive navigation with mobile menu and dark mode support',
      category: 'navigation',
      technology: ['React', 'Tailwind'],
      difficulty: 'easy',
      preview: '/components/navbar-preview.jpg',
      code: `// Navigation Component
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">Logo</span>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          {/* Navigation items */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-900 dark:text-white">Home</a>
              <a href="#" className="text-gray-500 dark:text-gray-300">About</a>
              <a href="#" className="text-gray-500 dark:text-gray-300">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}`,
      tags: ['responsive', 'mobile-friendly', 'dark-mode'],
      usage: '12.4k',
      rating: 4.9
    },
    {
      id: 2,
      name: 'Pricing Cards',
      description: 'Beautiful pricing section with multiple tiers and toggle switch',
      category: 'cards',
      technology: ['React', 'Tailwind'],
      difficulty: 'medium',
      preview: '/components/pricing-preview.jpg',
      code: `// Pricing Cards Component
export default function PricingCard({ plan, price, features, popular }) {
  return (
    <div className={\`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 \${
      popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
    }\`}>
      {popular && (
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-bold mt-4">{plan}</h3>
      <div className="my-4">
        <span className="text-3xl font-bold"></span>
        <span className="text-gray-600 dark:text-gray-400">/month</span>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-4 w-4 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
        Get Started
      </button>
    </div>
  );
}`,
      tags: ['pricing', 'responsive', 'featured'],
      usage: '8.7k',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Contact Form',
      description: 'Modern contact form with validation and loading states',
      category: 'forms',
      technology: ['React', 'Tailwind'],
      difficulty: 'medium',
      preview: '/components/form-preview.jpg',
      code: `// Contact Form Component
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle form submission
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Name
        </label>
        <input
          type="text"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          type="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          rows={4}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50 transition-colors"
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}`,
      tags: ['form', 'validation', 'interactive'],
      usage: '15.2k',
      rating: 4.9
    },
    {
      id: 4,
      name: 'Testimonial Grid',
      description: 'Customer testimonials in a responsive masonry grid layout',
      category: 'testimonials',
      technology: ['React', 'Tailwind'],
      difficulty: 'easy',
      preview: '/components/testimonials-preview.jpg',
      code: `// Testimonial Grid Component
export default function TestimonialGrid() {
  const testimonials = [
    {
      id: 1,
      content: "This product changed my workflow completely!",
      author: "Sarah Johnson",
      role: "Product Designer"
    },
    // More testimonials...
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.content}"</p>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}`,
      tags: ['grid', 'responsive', 'masonry'],
      usage: '6.3k',
      rating: 4.7
    },
    {
      id: 5,
      name: 'Dashboard Stats',
      description: 'Statistics cards for dashboard with trend indicators',
      category: 'dashboard',
      technology: ['React', 'Tailwind'],
      difficulty: 'medium',
      preview: '/components/stats-preview.jpg',
      code: `// Stats Card Component
export default function StatCard({ title, value, change, trend }) {
  const isPositive = trend === 'up';
  
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
      <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{value}</p>
      <p className={\`text-sm mt-1 \${
        isPositive ? 'text-green-600' : 'text-red-600'
      }\`}>
        {isPositive ? '↑' : '↓'} {change}
      </p>
    </div>
  );
}`,
      tags: ['dashboard', 'metrics', 'analytics'],
      usage: '9.8k',
      rating: 4.8
    },
    {
      id: 6,
      name: 'Product Card',
      description: 'E-commerce product card with image gallery and quick actions',
      category: 'ecommerce',
      technology: ['React', 'Tailwind'],
      difficulty: 'easy',
      preview: '/components/product-preview.jpg',
      code: `// Product Card Component
export default function ProductCard({ product }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <Heart className={\`h-4 w-4 \${
            isLiked ? 'text-red-500 fill-current' : 'text-gray-400'
          }\`} />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-1"></p>
        <button className="w-full mt-3 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}`,
      tags: ['ecommerce', 'product', 'interactive'],
      usage: '11.5k',
      rating: 4.9
    }
  ];

  const categories = [
    { id: 'all', name: 'All Components', count: components.length },
    { id: 'navigation', name: 'Navigation', count: components.filter(c => c.category === 'navigation').length },
    { id: 'cards', name: 'Cards', count: components.filter(c => c.category === 'cards').length },
    { id: 'forms', name: 'Forms', count: components.filter(c => c.category === 'forms').length },
    { id: 'testimonials', name: 'Testimonials', count: components.filter(c => c.category === 'testimonials').length },
    { id: 'dashboard', name: 'Dashboard', count: components.filter(c => c.category === 'dashboard').length },
    { id: 'ecommerce', name: 'E-commerce', count: components.filter(c => c.category === 'ecommerce').length }
  ];

  const filteredComponents = components.filter(component => {
    const matchesSearch = component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         component.tags.some(tag => tag.includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyCode = async (code, componentId) => {
    await navigator.clipboard.writeText(code);
    setCopiedComponent(componentId);
    setTimeout(() => setCopiedComponent(null), 2000);
  };

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
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
              <Palette className="h-12 w-12 text-purple-600 dark:text-purple-400" />
              <Sparkles className="h-6 w-6 text-yellow-500 absolute -top-1 -right-1" />
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-600 to-pink-600 dark:from-white dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
            Component Library [PREVIEW]
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Production-ready React components. Copy, paste, and customize for your projects.
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
                  placeholder="Search components..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
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
                      ? 'bg-purple-500 text-white' 
                      : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-purple-500 text-white' 
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
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Components Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {selectedCategory === 'all' ? 'All Components' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {filteredComponents.length} components found
            </p>
          </div>

          {filteredComponents.length === 0 ? (
            <motion.div
              variants={itemVariants}
              className="text-center py-16"
            >
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No components found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredComponents.map((component) => (
                <motion.div
                  key={component.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                  className="group"
                >
                  <ComponentCard 
                    component={component} 
                    onCopyCode={copyCode}
                    copiedComponent={copiedComponent}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredComponents.map((component) => (
                <motion.div
                  key={component.id}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                >
                  <ComponentCard 
                    component={component} 
                    onCopyCode={copyCode}
                    copiedComponent={copiedComponent}
                    listView
                  />
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
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Palette, label: 'Components', value: '200+' },
            { icon: Download, label: 'Downloads', value: '150K+' },
            { icon: Star, label: 'Rating', value: '4.8/5' },
            { icon: Zap, label: 'Usage', value: '65K+' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <stat.icon className="h-8 w-8 text-purple-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Component Card Component
const ComponentCard = ({ component, onCopyCode, copiedComponent, listView = false }) => {
  const difficultyColors = {
    easy: 'text-green-600 bg-green-100 dark:bg-green-900/20',
    medium: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20',
    hard: 'text-red-600 bg-red-100 dark:bg-red-900/20'
  };

  if (listView) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300 group">
        <div className="flex items-center gap-6">
          {/* Preview */}
          <div className="flex-shrink-0 w-32 h-24 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg flex items-center justify-center">
            <Code className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {component.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{component.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[component.difficulty]}`}>
                  {component.difficulty}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Zap className="h-4 w-4 text-yellow-500" />
                {component.usage} uses
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500" />
                {component.rating}/5
              </div>
            </div>

            <div className="flex items-center gap-2 mt-3">
              {component.technology.map((tech) => (
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
            <button 
              onClick={() => onCopyCode(component.code, component.id)}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center gap-2"
            >
              {copiedComponent === component.id ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              {copiedComponent === component.id ? 'Copied!' : 'Copy Code'}
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
      <div className="relative h-48 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <Code className="h-12 w-12 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
        </div>
        
        {/* Difficulty Badge */}
        <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-lg">
          <span className={`text-sm font-semibold ${difficultyColors[component.difficulty]}`}>
            {component.difficulty}
          </span>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
          <Star className="h-3 w-3 fill-current" />
          {component.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {component.name}
          </h3>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {component.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <Zap className="h-4 w-4" />
            {component.usage} uses
          </div>
          <div className="flex items-center gap-4">
            {component.technology.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {component.tags.map((tag) => (
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
          <button 
            onClick={() => onCopyCode(component.code, component.id)}
            className="flex-1 bg-purple-500 text-white py-3 px-4 rounded-lg hover:bg-purple-600 transition-colors flex items-center justify-center gap-2 font-semibold"
          >
            {copiedComponent === component.id ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            {copiedComponent === component.id ? 'Copied!' : 'Copy Code'}
          </button>
          <button className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
            <Eye className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Components;