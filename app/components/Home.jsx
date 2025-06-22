'use client'
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle"; // Adjust path if needed

const typingLines = [
  "a Full Stack Web Developer.",
  "a Computer Scientist.",
  "an Open Source Enthusiast.",
  "a Lifelong Learner."
];

const TYPING_SPEED = 60;
const BACKSPACE_SPEED = 30;
const DELAY_BETWEEN_LINES = 1200;

const Home = () => {
  const [displayed, setDisplayed] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);
  const timeoutRef = useRef();

  useEffect(() => {
    if (typing) {
      if (charIdx < typingLines[lineIdx].length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed((prev) => prev + typingLines[lineIdx][charIdx]);
          setCharIdx((idx) => idx + 1);
        }, TYPING_SPEED);
      } else {
        timeoutRef.current = setTimeout(() => setTyping(false), DELAY_BETWEEN_LINES);
      }
    } else {
      if (charIdx > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed((prev) => prev.slice(0, -1));
          setCharIdx((idx) => idx - 1);
        }, BACKSPACE_SPEED);
      } else {
        setTyping(true);
        setLineIdx((idx) => (idx + 1) % typingLines.length);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [typing, charIdx, lineIdx]);

  return (
    <section className="relative min-h-screen w-full mb-20 overflow-hidden">
      {/* Theme toggle button for mobile */}
      <div className="absolute top-4 right-4 z-30 block md:hidden">
        <ThemeToggle />
      </div>
      {/* Section-only, non-scrolling background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `linear-gradient(120deg, rgba(130,130,130,0.7) 0%, rgba(50,50,50,0.4) 100%), url('/profile1.jpg') center/cover no-repeat`,
          backgroundAttachment: "scroll"
        }}
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative z-10 pt-[20%] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg mb-4">
          MUHAMMAD FAIZAN ALAM
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-emerald-300 mb-2 flex items-center justify-center min-h-[2.5em]">
          <span className="text-white mr-2">I'm</span>
          <span className="relative">
            <span className="text-emerald-300">{displayed}</span>
            <span className="absolute -right-2 top-0 animate-pulse text-white">|</span>
          </span>
        </h2>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="#Projects"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-400 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            View Projects
          </a>
          <a
            href="#Contact"
            className="px-6 py-3 rounded-full border border-emerald-400 text-emerald-200 font-bold hover:bg-emerald-600/80 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-60 blur-2xl"
        style={{
          background: 'radial-gradient(circle at 60% 40%, #60a5fa33 0%, transparent 70%)'
        }}
      />
    </section>
  );
};

export default Home;