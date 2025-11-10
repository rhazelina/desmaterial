// components/ComponentModal.jsx
import { motion } from 'framer-motion';
import { X, Copy, Check, Eye, Code, Download } from 'lucide-react';
import { useState } from 'react';

const ComponentModal = ({ component, onClose }) => {
  const [activeTab, setActiveTab] = useState('preview');
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(component.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCode = () => {
    const blob = new Blob([component.code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${component.name.toLowerCase().replace(/\s+/g, '-')}.${component.technology.includes('react') ? 'jsx' : 'html'}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{component.name}</h2>
            <p className="text-gray-600 mt-1">{component.description}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b">
          <div className="flex">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-6 py-3 font-medium flex items-center gap-2 ${
                activeTab === 'preview'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Eye className="h-4 w-4" />
              Preview
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-6 py-3 font-medium flex items-center gap-2 ${
                activeTab === 'code'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Code className="h-4 w-4" />
              Code
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-auto max-h-[60vh]">
          {activeTab === 'preview' && (
            <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Live Preview
                </h3>
                <p className="text-gray-600">
                  This would show a live render of the component
                </p>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="relative">
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={downloadCode}
                  className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  title="Download"
                >
                  <Download className="h-4 w-4" />
                </button>
                <button
                  onClick={copyCode}
                  className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                <code className="text-sm">{component.code}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>Technology: {component.technology.join(', ')}</span>
              <span>Difficulty: {component.difficulty}</span>
            </div>
            <div className="flex gap-2">
              {component.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white border rounded-full text-sm text-gray-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ComponentModal;