import { useState, useRef } from 'react';
import {
  Info,
  Search,
  ChevronDown,
  ExternalLink,
  Instagram
} from 'lucide-react';
import CodeBlock from '../components/CodeBlock';


const PageDesk = () => {
  const [instagramUrl, setInstagramUrl] = useState('');
  const [embedPreview, setEmbedPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  // Handle Instagram embed
  const handleInstagramEmbed = async () => {
    if (!instagramUrl.trim()) return;

    setIsLoading(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Basic URL validation
      if (instagramUrl.includes('instagram.com')) {
        setEmbedPreview({
          type: 'instagram',
          url: instagramUrl,
          title: 'Instagram Content Preview',
          description: 'Preview of your Instagram content'
        });
      } else {
        throw new Error('Invalid Instagram URL');
      }
    } catch (error) {
      setEmbedPreview({
        type: 'error',
        message: 'Failed to load Instagram preview. Please check the URL and try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      // Simulate file processing
      setIsLoading(true);
      setTimeout(() => {
        setEmbedPreview({
          type: 'file',
          fileName: file.name,
          fileSize: (file.size / 1024 / 1024).toFixed(2),
          url: URL.createObjectURL(file)
        });
        setIsLoading(false);
      }, 800);
    }
  };

  // Clear embed preview
  const clearEmbedPreview = () => {
    setEmbedPreview(null);
    setInstagramUrl('');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 antialiased dark:bg-stone-950 dark:text-stone-100 transition-colors">
      {/* Info Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="rounded-2xl border border-blue-200/80 bg-blue-50/60 p-4 shadow-sm dark:border-blue-900/40 dark:bg-blue-950/40">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <span className="font-medium">ON DEVELOPING </span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-stone-900 to-stone-700 dark:from-stone-100 dark:to-stone-300 bg-clip-text text-transparent">
            Content Title
          </h1>
          <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
            Category , Name as author
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="card p-6 bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:shadow-lg transition-all duration-300">
              <h2 className="text-3xl font-semibold">Explanation</h2>
              <span class="flex items-center">
                <span class="h-px flex-1 bg-gray-300"></span>
                <span class="h-px flex-1 bg-gray-300"></span>
              </span>
              <div className="mt-4 space-y-4 text-stone-700 dark:text-stone-300 leading-relaxed">
                <p>
                  Tulis penjelasan materi di sini. Jaga paragraf tetap singkat dan fokus pada nilai yang disampaikan video.
                </p>
                <p>
                  Gunakan contoh seperlunya, dan beri <em className="font-medium text-stone-900 dark:text-stone-100">highlight</em> pada istilah penting agar mudah dipindai.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, consequatur iste sapiente incidunt unde laborum fuga molestias doloremque, possimus natus blanditiis itaque, temporibus maiores quod pariatur perspiciatis ad neque accusantium?
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className="p-10 m-3 text-center">
          <h2 class="text-5xl font-extrabold dark:text-white">Common Question</h2>

          <div className="space-y-4 m-10 p-3">
            <details class="group card p-6 bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:shadow-lg transition-all duration-300 [&amp;_summary::-webkit-details-marker]:hidden" open="">
              <summary class="flex items-center justify-between gap-1.5 text-gray-900 dark:text-white">
                <h2 class="text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

                <svg class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>

              <p class="pt-4 text-gray-900 dark:text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa
                in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis
                explicabo consequuntur distinctio corporis earum similique!
              </p>
            </details>

            <details class="group card p-6 bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:shadow-lg transition-all duration-300 [&amp;_summary::-webkit-details-marker]:hidden" open="">
              <summary class="flex items-center justify-between gap-1.5 text-gray-900 dark:text-white">
                <h2 class="text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

                <svg class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>

              <p class="pt-4 text-gray-900 dark:text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa
                in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis
                explicabo consequuntur distinctio corporis earum similique!
              </p>
            </details>

            <details class="group card p-6 bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:shadow-lg transition-all duration-300 [&amp;_summary::-webkit-details-marker]:hidden" open="">
              <summary class="flex items-center justify-between gap-1.5 text-gray-900 dark:text-white">
                <h2 class="text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

                <svg class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>

              <p class="pt-4 text-gray-900 dark:text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa
                in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis
                explicabo consequuntur distinctio corporis earum similique!
              </p>
            </details>
          </div>
        </div>

      </section>
    </div>
  );
};

export default PageDesk;