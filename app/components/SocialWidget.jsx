'use client';
import { socialLinks } from "./store"; // Make sure your socialLinks array is exported from store.js

const SocialWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-center gap-2 pointer-events-auto">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="
            flex items-center justify-center
            shadow-md
            rounded-full
            bg-white/90 dark:bg-gray-900/90
            border-2 border-blue-200 dark:border-emerald-700
            w-9 h-9
            hover:scale-110 hover:shadow-xl
            transition
            backdrop-blur-md
          "
        >
          <span
            dangerouslySetInnerHTML={{ __html: link.icon }}
            className="w-5 h-5 text-blue-700 dark:text-emerald-400 flex items-center justify-center"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialWidget;