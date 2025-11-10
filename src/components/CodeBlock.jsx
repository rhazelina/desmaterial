import { useCopyToClipboard } from '../hooks/useCopyToClipboard';

const CodeBlock = ({ code, language = 'code', showCopyButton = true }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  const handleCopy = () => {
    copyToClipboard(code);
  };

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-3 dark:border-stone-800 dark:bg-stone-950/40">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs uppercase tracking-wide text-stone-500">
          {language}
        </span>
        {showCopyButton && (
          <button
            onClick={handleCopy}
            className="text-xs rounded-lg border border-stone-300 px-2 py-1 hover:bg-stone-100 dark:border-stone-700 dark:hover:bg-stone-800 transition-colors"
          >
            {isCopied ? 'Copied!' : 'Copy'}
          </button>
        )}
      </div>
      <pre className="rounded-xl overflow-x-auto bg-stone-50 dark:bg-stone-900 p-3">
        <code className="text-sm font-mono">{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;