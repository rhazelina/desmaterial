// components/ComponentCard.jsx
import { motion } from 'framer-motion';
import { Eye, Code, Clock, Zap } from 'lucide-react';

const ComponentCard = ({ component, onView, listView = false }) => {
  const difficultyColors = {
    easy: 'text-green-600 bg-green-100',
    medium: 'text-yellow-600 bg-yellow-100',
    hard: 'text-red-600 bg-red-100'
  };

  const technologyIcons = {
    html: '🛠️',
    react: '⚛️',
    tailwind: '🎨',
    vue: '🟢',
    angular: '🔴'
  };

  if (listView) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{component.name}</h3>
            <p className="text-gray-600 mt-1">{component.description}</p>
            <div className="flex items-center gap-4 mt-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[component.difficulty]}`}>
                {component.difficulty}
              </span>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                {component.technology.join(', ')}
              </div>
              <div className="flex gap-1">
                {component.technology.map(tech => (
                  <span key={tech} className="text-sm">
                    {technologyIcons[tech]}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={onView}
            className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Eye className="h-4 w-4" />
            View
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-all"
    >
      {/* Preview Image */}
      <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <Code className="h-12 w-12 text-gray-400 mx-auto" />
          <p className="text-gray-500 mt-2">Component Preview</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900">{component.name}</h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[component.difficulty]}`}>
            {component.difficulty}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4">{component.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {component.technology.map(tech => (
              <span key={tech} className="text-sm" title={tech}>
                {technologyIcons[tech]}
              </span>
            ))}
          </div>

          <button
            onClick={onView}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm"
          >
            <Eye className="h-4 w-4" />
            View Code
          </button>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-3">
          {component.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ComponentCard;