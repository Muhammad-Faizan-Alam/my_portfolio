'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');
  const isSystem = theme === 'system';

  return (
    <div className="flex items-center gap-2">
      {/* Toggle Button */}
      <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        aria-label="Toggle Dark Mode"
        className={`relative w-11 h-6 flex items-center rounded-full transition-colors duration-300 focus:outline-none
          shadow border border-gray-400 dark:border-gray-700
          ${isDark ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-gray-200 to-gray-400'}`}
      >
        {/* Toggle circle */}
        <span
          className={`absolute top-1/2 -translate-y-1/2 left-1 transition-transform duration-300 w-4 h-4 rounded-full shadow-md flex items-center justify-center
            ${isDark ? 'translate-x-5 bg-gray-900' : 'translate-x-0 bg-white'}`}
        >
          {isDark ? (
            // Moon Icon (centered)
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f3f4f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
            </svg>
          ) : (
            // Sun Icon (centered)
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          )}
        </span>
      </button>
      {/* System Theme Button */}
      <button
        onClick={() => setTheme('system')}
        aria-label="Use System Theme"
        className={`w-8 h-6 flex items-center justify-center rounded-full border transition-all duration-300
          ${isSystem ? 'border-gray-900 bg-gray-200 dark:bg-gray-800' : 'border-gray-400 bg-gray-100 dark:bg-gray-700'}
          hover:border-gray-900`}
        title="Use system theme"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isSystem ? "#111" : "#888"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 0 20" />
          <path d="M12 2a15.3 15.3 0 0 0 0 20" />
        </svg>
      </button>
    </div>
  );
}