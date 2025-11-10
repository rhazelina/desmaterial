import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const HoverCard = ({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  githubUrl,
  className = '' 
}) => {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900 hover:shadow-lg transition-all duration-300 ${className}`}
    >
      {Icon && (
        <div className="mb-4 inline-flex rounded-xl bg-brand-50 p-3 text-brand-500 dark:bg-brand-900/20 dark:text-brand-400">
          <Icon className="h-6 w-6" />
        </div>
      )}
      
      <h3 className="text-base font-semibold mb-2">{title}</h3>
      <p className="text-sm text-stone-600 dark:text-stone-300 mb-4">
        {description}
      </p>
      
      <div className="flex items-center gap-3">
        {href && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white transition-colors"
          >
            View <ExternalLink className="h-3 w-3" />
          </motion.a>
        )}
        
        {githubUrl && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white transition-colors"
          >
            Code <Github className="h-3 w-3" />
          </motion.a>
        )}
      </div>
    </motion.article>
  );
};

export default HoverCard;