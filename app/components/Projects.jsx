import React from 'react'
import Image from 'next/image'
// If using shadcn/ui carousel:
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// Example projects data (replace with your real data)
const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern, responsive portfolio built with Next.js, Tailwind CSS, and Next-themes. Features dark mode, smooth animations, and a beautiful UI.",
    image: "/projects/portfolio.png",
    tags: ["Next.js", "Tailwind CSS", "Next-Themes"],
    link: "/",
    github: "https://github.com/Muhammad-Faizan-Alam/my_portfolio"
  },
  {
    title: "E-Pharmacy Store",
    desc: "A scalable & highly secure pharamcy e-commerce web app with product management, cart, and secure checkout. A separate secure Admin side for management. Built using Next.js, and MongoDB. AI integrated for chat, medicines Search by disease or symptoms, etc.",
    image: "/projects/pharmacy.png",
    tags: ["Next.js", "Shadcn", "MongoDB"],
    link: "https://pharmacy-smoky.vercel.app/",
    github: "https://github.com/Muhammad-Faizan-Alam/ecommerce"
  },
  {
    title: "Financial Dashboard",
    desc: "A real-time Financial Managing app with authentication. Powered by Next.js and Next-Auth.",
    image: "/projects/budgetHive.png",
    tags: ["Next.js", "Next-Auth", "PostgreSQL"],
    link: "https://financial-dashboard-6wqm.vercel.app",
    github: "https://github.com/Muhammad-Faizan-Alam/financial-dashboard"
  }
];

const Projects = () => {
  return (
    <section className="relative py-10 px-2 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-emerald-400 mb-2 tracking-tight text-center">
          <span className="bg-gradient-to-r from-blue-600 to-emerald-400 dark:from-emerald-400 dark:to-blue-700 bg-clip-text text-transparent">My Projects</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Here are some of my featured projects. Each project is a unique blend of creativity, technology, and problem-solving.
        </p>
        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((proj, idx) => (
              <CarouselItem key={proj.title} className="flex justify-center lg:py-10">
                <div className="group relative bg-white/80 dark:bg-gray-900/80 border border-blue-100 dark:border-emerald-900 rounded-3xl shadow-2xl w-full max-w-md flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-200/60 dark:hover:shadow-emerald-700/40">
                  {/* Project Image */}
                  <div className="overflow-hidden rounded-t-3xl">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      width={480}
                      height={192}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-blue-900 dark:text-emerald-300 tracking-tight mb-2">{proj.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-base mb-4 flex-1">{proj.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {proj.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-blue-100 dark:bg-emerald-900/60 text-blue-800 dark:text-emerald-300 text-xs font-semibold tracking-wide shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-auto">
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-400 dark:from-emerald-600 dark:to-blue-700 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-300"
                      >
                        Live
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-blue-400 dark:border-emerald-400 text-blue-700 dark:text-emerald-300 font-bold hover:bg-blue-50 dark:hover:bg-emerald-950 transition"
                      >
                        Code
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M16 18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12z" />
                          <path d="M8 10h8M8 14h6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  {/* Decorative Glow */}
                  <div className="absolute -z-10 inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl pointer-events-none"
                    style={{
                      background: idx % 2 === 0
                        ? 'radial-gradient(circle at 30% 70%, #60a5fa33 0%, transparent 80%)'
                        : 'radial-gradient(circle at 70% 30%, #34d39933 0%, transparent 80%)'
                    }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;