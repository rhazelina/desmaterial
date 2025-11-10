import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, Github } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resourcesItems = {
    css: [
      'Layout', 'Keyframe', 'Gradients', 'Grid vs Flex', 'Position',
      'Marquee', 'Flip Animation', 'Hover Button', 'Background (cover/fixed/repeat)'
    ],
    webflow: [
      'Variable Hack', 'Hover Button', 'Position', 'Units & Sizing',
      'RGB & Hex', 'Grid vs Flex (inline-block)'
    ]
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/animations', label: 'Animations' },
    { path: '/components', label: 'Components' },
    { path: '/templates', label: 'Templates' },
    { path: '/pagedesk', label: 'More' },

  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`border-b border-stone-200/70 dark:border-stone-800/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-stone-950/70 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-sm' : ''
        }`}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link to="/" className="inline-flex items-center gap-2 group">
              <motion.img
                src="/belajar60detik.png"
                alt="Zetachune logo"
                className="h-7 w-7 rounded"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="text-xl font-semibold tracking-tight bg-gradient-to-r from-stone-900 to-stone-700 dark:from-stone-100 dark:to-stone-300 bg-clip-text text-transparent">
                x Zeth1
              </span>
            </Link>
          </motion.div>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <motion.div key={item.path} whileHover={{ y: -1 }}>
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-colors px-3 py-2 rounded-lg ${location.pathname === item.path
                      ? 'text-stone-900 dark:text-white bg-stone-100 dark:bg-stone-800'
                      : 'text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white hover:bg-stone-50 dark:hover:bg-stone-800/50'
                    }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            

            {/* Resources Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm font-medium text-stone-700 shadow-sm hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-200 dark:hover:bg-stone-800 transition-colors"
              >
                Resources [ON DEVELOP]
                <motion.div
                  animate={{ rotate: isResourcesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-64 origin-top-right rounded-2xl border border-stone-200 bg-white p-2 shadow-lg dark:border-stone-800 dark:bg-stone-900 z-50"
                  >
                    <div className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                      CSS
                    </div>
                    <ul className="space-y-0.5">
                      {resourcesItems.css.map((item) => (
                        <li key={item}>
                          <motion.a
                            whileHover={{ x: 4 }}
                            className="block rounded-xl px-3 py-2 text-sm hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                          >
                            {item}
                          </motion.a>
                        </li>
                      ))}
                    </ul>
                    <div className="px-3 pt-3 pb-1 mt-2 border-t border-stone-200 text-xs font-semibold uppercase tracking-wide text-stone-500 dark:border-stone-800 dark:text-stone-400">
                      Webflow
                    </div>
                    <ul className="space-y-0.5">
                      {resourcesItems.webflow.map((item) => (
                        <li key={item}>
                          <motion.a
                            whileHover={{ x: 4 }}
                            className="block rounded-xl px-3 py-2 text-sm hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                          >
                            {item}
                          </motion.a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <form role="search">
                <label htmlFor="search-desktop" className="sr-only">
                  Search
                </label>
                <input
                  id="search-desktop"
                  type="search"
                  placeholder="Search…"
                  className="h-9 w-64 rounded-full border border-stone-200 bg-white px-4 pr-10 text-sm shadow-sm outline-none placeholder:text-stone-400 focus:ring-2 focus:ring-stone-400 dark:border-stone-800 dark:bg-stone-900 transition-colors"
                />
                <Search className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
              </form>
            </motion.div>

            <motion.a
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/rhazelina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-stone-200 p-2 text-stone-700 shadow-sm hover:bg-stone-50 dark:border-stone-800 dark:text-stone-200 dark:hover:bg-stone-800 transition-colors"
            >
              <Github className="h-5 w-5" />
            </motion.a>

            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-full border border-stone-200 p-2 text-stone-700 shadow-sm hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 dark:border-stone-800 dark:text-stone-200 dark:hover:bg-stone-800 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-stone-200 dark:border-stone-800 overflow-hidden"
            >
              <nav className="space-y-2 py-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className="block rounded-xl px-3 py-2 text-sm font-medium hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-2"
                >
                  <form role="search">
                    <label htmlFor="search-mobile" className="sr-only">
                      Search
                    </label>
                    <input
                      id="search-mobile"
                      type="search"
                      placeholder="Search…"
                      className="h-10 w-full rounded-xl border border-stone-200 bg-white px-4 text-sm shadow-sm outline-none placeholder:text-stone-400 focus:ring-2 focus:ring-stone-400 dark:border-stone-800 dark:bg-stone-900 transition-colors"
                    />
                  </form>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;