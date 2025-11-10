// components/ComponentsLibrary.jsx
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, Copy, Check, Eye, Code, Palette, Layout, Zap, Sparkles } from 'lucide-react';
import { useState, useMemo } from 'react';
import ComponentCard from './ComponentCard';
import ComponentModal from './ComponentModal';
import FilterSidebar from './FilterSidebar';

const ComponentsLibrary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [filters, setFilters] = useState({
    category: 'all',
    technology: 'all',
    difficulty: 'all'
  });

  const components = [
    {
      id: 1,
      name: 'Navigation Bar',
      description: 'Responsive navigation with mobile menu',
      category: 'navigation',
      technology: ['html', 'tailwind'],
      difficulty: 'easy',
      preview: '/components/navbar-preview.jpg',
      code: `<!-- Navigation Bar -->
<nav class="bg-white shadow-lg">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex justify-between">
      <div class="flex space-x-7">
        <div>
          <a href="#" class="flex items-center py-4 px-2">
            <span class="font-semibold text-gray-500 text-lg">Navigation</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>`,
      tags: ['responsive', 'mobile-friendly']
    },
    {
      id: 2,
      name: 'Pricing Cards',
      description: 'Beautiful pricing section with multiple tiers',
      category: 'cards',
      technology: ['react', 'tailwind'],
      difficulty: 'medium',
      preview: '/components/pricing-preview.jpg',
      code: `function PricingCard({ plan, price, features }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold">{plan}</h3>
      <div className="my-4">
        <span className="text-3xl font-bold">${price}</span>
        <span className="text-gray-600">/month</span>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index}>✓ {feature}</li>
        ))}
      </ul>
    </div>
  );
}`,
      tags: ['pricing', 'responsive']
    },
    {
      id: 3,
      name: 'Contact Form',
      description: 'Modern contact form with validation',
      category: 'forms',
      technology: ['react', 'tailwind'],
      difficulty: 'medium',
      preview: '/components/form-preview.jpg',
      code: `function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">
        Send Message
      </button>
    </form>
  );
}`,
      tags: ['form', 'validation']
    },
    {
      id: 4,
      name: 'Testimonial Grid',
      description: 'Customer testimonials in a responsive grid',
      category: 'testimonials',
      technology: ['html', 'tailwind'],
      difficulty: 'easy',
      preview: '/components/testimonials-preview.jpg',
      code: `<!-- Testimonial Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-gray-50 p-6 rounded-lg">
    <p class="text-gray-600 mb-4">"Excellent service and quality!"</p>
    <p class="font-semibold">- John Doe</p>
  </div>
  <!-- More testimonials -->
</div>`,
      tags: ['grid', 'responsive']
    },
    {
      id: 5,
      name: 'Dashboard Stats',
      description: 'Statistics cards for dashboard layouts',
      category: 'dashboard',
      technology: ['react', 'tailwind'],
      difficulty: 'medium',
      preview: '/components/stats-preview.jpg',
      code: `function StatCard({ title, value, change }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
      <p className="text-sm text-green-600 mt-1">{change} increase</p>
    </div>
  );
}`,
      tags: ['dashboard', 'metrics']
    },
    {
      id: 6,
      name: 'Product Card',
      description: 'E-commerce product display card',
      category: 'ecommerce',
      technology: ['html', 'tailwind'],
      difficulty: 'easy',
      preview: '/components/product-preview.jpg',
      code: `<!-- Product Card -->
<div class="bg-white rounded-lg shadow-md overflow-hidden">
  <img src="/product.jpg" alt="Product" class="w-full h-48 object-cover">
  <div class="p-4">
    <h3 class="font-semibold text-lg">Product Name</h3>
    <p class="text-gray-600 mt-1">$29.99</p>
    <button class="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md w-full">
      Add to Cart
    </button>
  </div>
</div>`,
      tags: ['ecommerce', 'product']
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

  const filteredComponents = useMemo(() => {
    return components.filter(component => {
      const matchesSearch = component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           component.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           component.tags.some(tag => tag.includes(searchQuery.toLowerCase()));
      
      const matchesCategory = filters.category === 'all' || component.category === filters.category;
      const matchesTechnology = filters.technology === 'all' || component.technology.includes(filters.technology);
      const matchesDifficulty = filters.difficulty === 'all' || component.difficulty === filters.difficulty;

      return matchesSearch && matchesCategory && matchesTechnology && matchesDifficulty;
    });
  }, [searchQuery, filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Palette className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Component Library</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search components..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <FilterSidebar
            categories={categories}
            filters={filters}
            onFilterChange={setFilters}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Stats */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredComponents.length} of {components.length} components
              </p>
            </div>

            {/* Components Grid */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredComponents.map((component) => (
                  <ComponentCard
                    key={component.id}
                    component={component}
                    onView={() => setSelectedComponent(component)}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredComponents.map((component) => (
                  <ComponentCard
                    key={component.id}
                    component={component}
                    onView={() => setSelectedComponent(component)}
                    listView
                  />
                ))}
              </div>
            )}

            {/* Empty State */}
            {filteredComponents.length === 0 && (
              <div className="text-center py-12">
                <Search className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">No components found</h3>
                <p className="mt-2 text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Component Modal */}
      {selectedComponent && (
        <ComponentModal
          component={selectedComponent}
          onClose={() => setSelectedComponent(null)}
        />
      )}
    </div>
  );
};

export default ComponentsLibrary;