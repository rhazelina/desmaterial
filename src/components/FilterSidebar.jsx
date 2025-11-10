// components/FilterSidebar.jsx
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';

const FilterSidebar = ({ categories, filters, onFilterChange }) => {
  const technologies = [
    { id: 'all', name: 'All Technologies' },
    { id: 'html', name: 'HTML/CSS' },
    { id: 'react', name: 'React' },
    { id: 'tailwind', name: 'Tailwind CSS' },
    { id: 'vue', name: 'Vue.js' },
    { id: 'angular', name: 'Angular' }
  ];

  const difficulties = [
    { id: 'all', name: 'All Levels' },
    { id: 'easy', name: 'Beginner' },
    { id: 'medium', name: 'Intermediate' },
    { id: 'hard', name: 'Advanced' }
  ];

  const clearFilters = () => {
    onFilterChange({
      category: 'all',
      technology: 'all',
      difficulty: 'all'
    });
  };

  const hasActiveFilters = filters.category !== 'all' || filters.technology !== 'all' || filters.difficulty !== 'all';

  return (
    <div className="w-64 flex-shrink-0">
      <div className="sticky top-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </h3>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <X className="h-4 w-4" />
              Clear
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-3">Category</h4>
          <div className="space-y-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => onFilterChange({ ...filters, category: category.id })}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex justify-between items-center ${
                  filters.category === category.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <span>{category.name}</span>
                <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Technology Filter */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-3">Technology</h4>
          <div className="space-y-2">
            {technologies.map(tech => (
              <button
                key={tech.id}
                onClick={() => onFilterChange({ ...filters, technology: tech.id })}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  filters.technology === tech.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {tech.name}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Filter */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-3">Difficulty</h4>
          <div className="space-y-2">
            {difficulties.map(diff => (
              <button
                key={diff.id}
                onClick={() => onFilterChange({ ...filters, difficulty: diff.id })}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  filters.difficulty === diff.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {diff.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="p-4 bg-blue-50 rounded-lg"
          >
            <h4 className="font-medium text-blue-900 mb-2">Active Filters</h4>
            <div className="space-y-1">
              {filters.category !== 'all' && (
                <div className="text-sm text-blue-700">
                  Category: {categories.find(c => c.id === filters.category)?.name}
                </div>
              )}
              {filters.technology !== 'all' && (
                <div className="text-sm text-blue-700">
                  Technology: {technologies.find(t => t.id === filters.technology)?.name}
                </div>
              )}
              {filters.difficulty !== 'all' && (
                <div className="text-sm text-blue-700">
                  Difficulty: {difficulties.find(d => d.id === filters.difficulty)?.name}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;