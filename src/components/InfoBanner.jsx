const InfoBanner = ({ title = "Info", message, type = "info" }) => {
  const typeStyles = {
    info: "border-blue-200/80 bg-blue-50/60 dark:border-blue-900/40 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300",
    warning: "border-amber-200/80 bg-amber-50/60 dark:border-amber-900/40 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300",
    success: "border-emerald-200/80 bg-emerald-50/60 dark:border-emerald-900/40 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300",
  };

  return (
    <div
      role="alert"
      className={`rounded-2xl border p-4 shadow-sm ${typeStyles[type]}`}
    >
      <div className="flex items-start gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="mt-0.5 h-5 w-5"
        >
          <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
          <path
            d="M12 8v.01M11 12h1v4h1"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex-1">
          <p className="text-sm font-medium">{title}</p>
          <p className="mt-0.5 text-sm opacity-90">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;