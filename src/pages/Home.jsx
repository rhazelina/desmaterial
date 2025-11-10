import { motion } from 'framer-motion';
import { ArrowRight, Star, Github, Zap, Code2 } from 'lucide-react';
import InfoBanner from '../components/InfoBanner';
import HoverCard from '../components/HoverCard';

const Home = () => {
  const features = [
    {
      title: "CSS Animations",
      description: "Beautiful keyframe animations with pure CSS",
      icon: Zap,
      href: "/animations"
    },
    {
      title: "React Components",
      description: "Reusable React components with Framer Motion",
      icon: Code2,
      href: "/components"
    },
    {
      title: "Webflow Templates",
      description: "Export animations for Webflow projects",
      icon: Star,
      href: "https://tmint.co/store/"
    },
    {
      title: "Open Source",
      description: "MIT licensed - use anywhere, contribute back",
      icon: Github,
      href: "https://github.com/rhazelina"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto max-w-6xl px-4"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Info Banner */}
      <motion.section variants={itemVariants} className="mt-8">
        <InfoBanner
          message="Welcome to Rhazelina-Dev Repo.  A collection of modern, performant animations and UI components. [ ON DEVELOP BTW, ENJOY]"
        />
      </motion.section>

      {/* Hero Section */}
      <motion.section variants={containerVariants} className="mt-12 md:mt-20 text-center relative">
        <motion.h1
          variants={itemVariants}
          className="text-5xl/tight md:text-7xl/tight font-extrabold tracking-tight bg-gradient-to-r from-stone-900 via-stone-700 to-stone-900 dark:from-stone-100 dark:via-stone-300 dark:to-stone-100 bg-clip-text text-transparent"
        >
          DesMaterial x Belajar60Detik
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-8 text-xl md:text-2xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto leading-relaxed"
        >
          Curated collection of <b>CSS animations</b>, <b>React components</b>, and <b>Webflow resources</b>.
          Built with Tailwind CSS, Framer Motion, and love for clean design.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/"
            className="inline-flex items-center gap-3 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white shadow-lg hover:bg-stone-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 transition-all duration-300"
          >
            <Github className="h-4 w-4" />
            Star on GitHub
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="/animations"
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-800 shadow-sm hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-200 dark:hover:bg-stone-800 transition-all duration-300"
          >
            Explore Animations
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
        >
          {[
            { number: "50+", label: "Animations" },
            { number: "100+", label: "Components" },
            { number: "MIT", label: "License" },
            { number: "∞", label: "Possibilities" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <motion.div
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-stone-700 to-stone-900 dark:from-stone-300 dark:to-stone-100 bg-clip-text text-transparent"
                whileHover={{ scale: 1.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <HoverCard {...feature} />
          </motion.div>
        ))}
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={containerVariants}
        className="mt-20 md:mt-32 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="rounded-3xl bg-gradient-to-br from-stone-900 to-stone-700 dark:from-stone-100 dark:to-stone-300 p-8 md:p-12 text-white dark:text-stone-900 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Ready to Animate?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Start using these animations in your projects today. Everything is open source and free to use.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/animations"
              className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-stone-900 px-6 py-3 text-sm font-medium text-stone-900 dark:text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>
      </motion.section>
    </motion.main>
  );
};

export default Home;