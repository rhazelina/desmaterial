import { motion } from 'framer-motion';
import { Play, Code, Zap, Sparkles, Search, Filter, Copy, Check, Download, Share2, Eye, Settings, Palette, Smartphone, Monitor, Tablet } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import InfoBanner from '../components/InfoBanner';
import AnimationCard from '../components/AnimationCard';
import HoverCard from '../components/HoverCard';
import CodeBlock from '../components/CodeBlock';

// Animation variants
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
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Animations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedCode, setCopiedCode] = useState(null);
  const [previewDevice, setPreviewDevice] = useState('desktop');
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  const categories = [
    'all', 'entrance', 'exit', 'attention', 'hover', 'scroll', 'advanced'
  ];

  const featuredAnimations = [
    {
      title: "Fade In Up",
      description: "Smooth entrance animation for elements",
      icon: Play,
      href: "#fade-in-up",
      category: 'entrance',
      tags: ['basic', 'entrance']
    },
    {
      title: "Soft Bounce",
      description: "Gentle bouncing effect for attention",
      icon: Zap,
      href: "#soft-bounce",
      category: 'attention',
      tags: ['attention', 'interactive']
    },
    {
      title: "3D Flip",
      description: "Depth-aware flip animations",
      icon: Sparkles,
      href: "#3d-flip",
      category: 'advanced',
      tags: ['3d', 'advanced']
    },
    {
      title: "Marquee",
      description: "Smooth infinite scrolling text",
      icon: Code,
      href: "#marquee",
      category: 'advanced',
      tags: ['continuous', 'text']
    },
    {
      title: "Stagger Grid",
      description: "Cascading grid item animations",
      icon: Sparkles,
      href: "#stagger-grid",
      category: 'entrance',
      tags: ['grid', 'stagger']
    },
    {
      title: "Morph Shape",
      description: "Smooth shape transformations",
      icon: Palette,
      href: "#morph-shape",
      category: 'advanced',
      tags: ['morph', 'svg']
    },
    {
      title: "Typewriter",
      description: "Classic typing text effect",
      icon: Code,
      href: "#typewriter",
      category: 'attention',
      tags: ['text', 'typing']
    },
    {
      title: "Pulse Glow",
      description: "Pulsing with glow effects",
      icon: Zap,
      href: "#pulse-glow",
      category: 'attention',
      tags: ['glow', 'pulse']
    }
  ];

  const animationExamples = [
    {
      title: "Fade In Up",
      description: "Smooth entrance animation for elements",
      category: 'entrance',
      tags: ['basic', 'entrance'],
      animationComponent: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 / animationSpeed }}
          className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-medium dark:border-stone-700 dark:bg-stone-800"
        >
          Halo dunia
        </motion.div>
      ),
      cssCode: `/* CSS */
@keyframes fadeInUp { 
  from { 
    opacity: 0; 
    transform: translateY(8px);
  } 
  to { 
    opacity: 1; 
    transform: translateY(0);
  } 
}
.element { 
  animation: fadeInUp .6s ease-out both; 
}`,
      framerCode: `// Framer Motion
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Your content
</motion.div>`,
      tailwindCode: `<!-- Tailwind CSS -->
<div class="animate-fade-in-up">
  Your content
</div>

/* In your CSS */
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out;
}`
    },
    {
      title: "Soft Bounce",
      description: "Gentle bouncing effect for attention",
      category: 'attention',
      tags: ['bounce', 'attention'],
      animationComponent: (
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 1.5 / animationSpeed,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="rounded-xl border border-stone-200 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm font-medium text-white"
        >
          Bouncing element
        </motion.div>
      ),
      cssCode: `/* CSS */
@keyframes softBounce { 
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-8px) scale(1.05); }
}
.element { 
  animation: softBounce 1.5s ease-in-out infinite; 
}`,
      framerCode: `// Framer Motion
<motion.div
  animate={{ 
    y: [0, -8, 0],
    scale: [1, 1.05, 1]
  }}
  transition={{ 
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  Your content
</motion.div>`
    },
    {
      title: "3D Flip",
      description: "Depth-aware flip animations",
      category: 'advanced',
      tags: ['3d', 'flip', 'advanced'],
      animationComponent: (
        <motion.div
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.6 / animationSpeed }}
          style={{ transformStyle: 'preserve-3d' }}
          className="w-24 h-24 cursor-pointer"
        >
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm absolute backface-hidden">
            Front
          </div>
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm absolute backface-hidden rotate-y-180">
            Back
          </div>
        </motion.div>
      ),
      cssCode: `/* CSS */
.flip-card {
  perspective: 1000px;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flip-card-front, .flip-card-back {
  backface-visibility: hidden;
}
.flip-card-back {
  transform: rotateY(180deg);
}`,
      framerCode: `// Framer Motion
<motion.div
  whileHover={{ rotateY: 180 }}
  transition={{ duration: 0.6 }}
  style={{ transformStyle: 'preserve-3d' }}
>
  <div style={{ backfaceVisibility: 'hidden' }}>
    Front
  </div>
  <div style={{ 
    backfaceVisibility: 'hidden',
    rotateY: 180 
  }}>
    Back
  </div>
</motion.div>`
    },
    {
      title: "Stagger Children",
      description: "Cascading animations for multiple elements",
      category: 'entrance',
      tags: ['stagger', 'grid', 'list'],
      animationComponent: (
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1 / animationSpeed
              }
            }
          }}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 gap-2"
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.4 / animationSpeed }}
              className="h-8 rounded bg-gradient-to-r from-blue-400 to-purple-400"
            />
          ))}
        </motion.div>
      ),
      framerCode: `// Framer Motion
<motion.div
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
  initial="hidden"
  animate="visible"
>
  {items.map((item) => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
      }}
    />
  ))}
</motion.div>`
    }
  ];

  const filteredAnimations = featuredAnimations.filter(animation => {
    const matchesSearch = animation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         animation.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         animation.tags.some(tag => tag.includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || animation.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredExamples = animationExamples.filter(example => {
    const matchesSearch = example.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         example.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         example.tags.some(tag => tag.includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || example.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyToClipboard = async (code, type) => {
    await navigator.clipboard.writeText(code);
    setCopiedCode(type);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const exportAnimation = (animation) => {
    const data = {
      title: animation.title,
      description: animation.description,
      css: animation.cssCode,
      framer: animation.framerCode,
      tailwind: animation.tailwindCode,
      timestamp: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${animation.title.toLowerCase().replace(/\s+/g, '-')}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto max-w-7xl px-4"
    >
      {/* Header Section */}
      <motion.section variants={itemVariants} className="mt-6">
        <InfoBanner 
          message="Kumpulan contoh keyframes CSS + kode siap salin dengan implementasi Framer Motion." 
          type="info"
        />
      </motion.section>

      {/* Hero Section */}
      <motion.section 
        variants={itemVariants}
        className="mt-10 md:mt-16 text-center relative"
      >
        <motion.h1 
          className="text-4xl/tight md:text-6xl/tight font-extrabold tracking-tight bg-gradient-to-r from-stone-900 via-stone-700 to-stone-900 dark:from-stone-100 dark:via-stone-300 dark:to-stone-100 bg-clip-text text-transparent"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Animation Playground
        </motion.h1>
        <motion.p 
          className="mt-6 text-xl text-stone-600 dark:text-stone-300 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Discover beautiful, performant animations with CSS, Tailwind, and Framer Motion
        </motion.p>

        {/* Animated Background */}
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.section>

      {/* Controls Section */}
      <motion.section 
        variants={containerVariants}
        className="mt-12 sticky top-4 z-10 bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-stone-200 dark:border-stone-700"
      >
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="flex-1 w-full lg:max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search animations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full text-sm font-medium capitalize transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Settings */}
          <div className="flex items-center gap-4">
            {/* Animation Speed */}
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-stone-400" />
              <select
                value={animationSpeed}
                onChange={(e) => setAnimationSpeed(parseFloat(e.target.value))}
                className="text-sm bg-transparent border-none focus:outline-none focus:ring-0"
              >
                <option value={0.5}>0.5x</option>
                <option value={1}>1x</option>
                <option value={1.5}>1.5x</option>
                <option value={2}>2x</option>
              </select>
            </div>

            {/* Preview Device */}
            <div className="flex items-center gap-1 border-l border-stone-200 dark:border-stone-700 pl-4">
              <button
                onClick={() => setPreviewDevice('mobile')}
                className={`p-1 rounded ${previewDevice === 'mobile' ? 'bg-blue-500 text-white' : 'text-stone-400'}`}
              >
                <Smartphone className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPreviewDevice('tablet')}
                className={`p-1 rounded ${previewDevice === 'tablet' ? 'bg-blue-500 text-white' : 'text-stone-400'}`}
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPreviewDevice('desktop')}
                className={`p-1 rounded ${previewDevice === 'desktop' ? 'bg-blue-500 text-white' : 'text-stone-400'}`}
              >
                <Monitor className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Animations Grid */}
      <motion.section 
        variants={containerVariants}
        className="mt-8"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-2xl font-bold mb-6 flex items-center gap-2"
        >
          <Sparkles className="w-6 h-6 text-blue-500" />
          Featured Animations
          <span className="text-sm font-normal text-stone-500 bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded-full">
            {filteredAnimations.length}
          </span>
        </motion.h2>
        
        {filteredAnimations.length === 0 ? (
          <motion.div
            variants={itemVariants}
            className="text-center py-12 text-stone-500"
          >
            <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No animations found matching your criteria.</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAnimations.map((animation, index) => (
              <motion.div
                key={animation.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                whileTap={{ scale: 0.95 }}
                custom={index}
              >
                <HoverCard {...animation} />
              </motion.div>
            ))}
          </div>
        )}
      </motion.section>

      {/* Interactive Examples */}
      <motion.section 
        variants={containerVariants}
        id="examples" 
        className="mt-16"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2"
        >
          <Code className="w-6 h-6 text-blue-500" />
          Interactive Examples
          <span className="text-sm font-normal text-stone-500 bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded-full">
            {filteredExamples.length}
          </span>
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-12">
          {filteredExamples.map((example, index) => (
            <motion.div
              key={example.title}
              variants={itemVariants}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="scroll-mt-20"
              id={example.href?.replace('#', '')}
            >
              <AnimationCard 
                {...example} 
                previewDevice={previewDevice}
                onCopyCode={copyToClipboard}
                copiedCode={copiedCode}
                onExport={() => exportAnimation(example)}
                animationSpeed={animationSpeed}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        variants={containerVariants}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { label: 'Animations', value: '50+' },
          { label: 'Categories', value: '7' },
          { label: 'Code Examples', value: '100+' },
          { label: 'Weekly Users', value: '1.2k' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 rounded-2xl border border-stone-200 dark:border-stone-700 bg-white/50 dark:bg-stone-800/50 backdrop-blur-sm"
          >
            <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">
              {stat.value}
            </div>
            <div className="text-sm text-stone-600 dark:text-stone-400 mt-1">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Performance Tips */}
      <motion.section 
        variants={containerVariants}
        className="mt-20 rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-stone-50 p-8 shadow-sm dark:border-stone-800 dark:from-stone-900 dark:to-stone-950"
      >
        <motion.h3 
          variants={itemVariants}
          className="text-xl font-bold mb-6 flex items-center gap-2"
        >
          <Zap className="w-5 h-5 text-yellow-500" />
          Performance Tips
        </motion.h3>
        <motion.ul 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-stone-600 dark:text-stone-300"
        >
          {[
            "Use transform and opacity for 60fps animations",
            "Leverage will-change for complex animations",
            "Respect prefers-reduced-motion for accessibility",
            "Use hardware-accelerated properties",
            "Optimize animation duration (300-700ms)",
            "Consider motion design principles",
            "Avoid animating layout-changing properties",
            "Use CSS transitions when possible"
          ].map((tip, index) => (
            <motion.li
              key={tip}
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <motion.div
                className="w-2 h-2 bg-blue-500 rounded-full shrink-0"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ delay: index * 0.2, duration: 2, repeat: Infinity }}
              />
              {tip}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        variants={containerVariants}
        className="mt-20 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Animate Your Projects?
          </h3>
          <p className="mb-6 opacity-90 max-w-md mx-auto">
            Start implementing these animations in your projects today. Copy, customize, and create amazing user experiences.
          </p>
          <div className="flex gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download All Examples
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-transparent border border-white text-white rounded-full font-semibold flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Share Collection
            </motion.button>
          </div>
        </motion.div>
      </motion.section>
    </motion.main>
  );
};

export default Animations;