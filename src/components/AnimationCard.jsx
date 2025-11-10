import { useState, useEffect } from 'react';
import CodeBlock from './CodeBlock';

const AnimationCard = ({ 
  title, 
  animationComponent, 
  cssCode, 
  webflowCode,
  description 
}) => {
  const [activeTab, setActiveTab] = useState('preview');

  // Respect reduced motion preference
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
      <h2 className="text-base font-semibold">{title}</h2>
      {description && (
        <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
          {description}
        </p>
      )}
      
      <div className="mt-4">
        {/* Tab Navigation */}
        <div className="flex border-b border-stone-200 dark:border-stone-700">
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'preview'
                ? 'border-stone-900 text-stone-900 dark:border-stone-100 dark:text-stone-100'
                : 'border-transparent text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200'
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'code'
                ? 'border-stone-900 text-stone-900 dark:border-stone-100 dark:text-stone-100'
                : 'border-transparent text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200'
            }`}
          >
            Code
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === 'preview' && (
            <div className="rounded-xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-950/40">
              <div className="h-24 flex items-center justify-center">
                {reducedMotion ? (
                  <div className="text-sm text-stone-500 dark:text-stone-400">
                    Animation disabled (reduced motion preferred)
                  </div>
                ) : (
                  animationComponent
                )}
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-4">
              <CodeBlock code={cssCode} language="CSS" />
              <CodeBlock code={webflowCode} language="Webflow" />
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default AnimationCard;