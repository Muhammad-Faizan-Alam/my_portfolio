'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle Dark Mode"
      className={`relative w-14 h-8 flex items-center rounded-full transition-colors duration-300 focus:outline-none
        ${isDark ? 'bg-gray-800' : 'bg-gray-300'}`}
    >
      {/* Toggle circle */}
      <span
        className={`absolute left-1 top-1 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300
          ${isDark ? 'translate-x-6 bg-gray-200' : 'translate-x-0 bg-black'}`}
      />

      {/* Sun Icon */}
      <span className="absolute left-2 z-10">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isDark ? "#000000" : "#ffffff"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-100'}`}
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </span>

      {/* Moon Icon */}
      <span className="absolute right-2 z-10">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isDark ? "#000000" : "#64748b"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
        </svg>
      </span>
    </button>
  );
}