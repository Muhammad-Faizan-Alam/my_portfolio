'use client';
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, formRef.current, process.env.USER_ID)
    emailjs.sendForm(
      'service_kzzqaug',
      'template_pg4hu0w',
      formRef.current,
      'AhqwNL_QIxex_6qtJ'
    )
      .then(() => {
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        formRef.current.reset();
      }, (error) => {
        alert('Failed to send: ' + error.text);
      });
  };

  return (
    <section className="relative py-10 px-2 sm:px-6 md:px-12">
      <div className="backdrop-blur-md p-6 md:p-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-emerald-400 mb-2 tracking-tight text-center">
          <span className="bg-gradient-to-r from-blue-600 to-emerald-400 dark:from-emerald-400 dark:to-blue-700 bg-clip-text text-transparent">Contact Me</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
          Have a project, idea, or just want to say hello? Fill out the form below or reach out directly!
        </p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6"
          autoComplete="off"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-semibold text-blue-900 dark:text-emerald-300">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded-xl border border-blue-200 dark:border-emerald-700 bg-white/70 dark:bg-gray-800/70 text-blue-900 dark:text-emerald-200 shadow focus:ring-2 focus:ring-blue-400 dark:focus:ring-emerald-400 transition"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-blue-900 dark:text-emerald-300">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-xl border border-blue-200 dark:border-emerald-700 bg-white/70 dark:bg-gray-800/70 text-blue-900 dark:text-emerald-200 shadow focus:ring-2 focus:ring-blue-400 dark:focus:ring-emerald-400 transition"
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 font-semibold text-blue-900 dark:text-emerald-300">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 rounded-xl border border-blue-200 dark:border-emerald-700 bg-white/70 dark:bg-gray-800/70 text-blue-900 dark:text-emerald-200 shadow focus:ring-2 focus:ring-blue-400 dark:focus:ring-emerald-400 transition resize-none"
              placeholder="Type your message here..."
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-400 dark:from-emerald-600 dark:to-blue-700 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-300 focus:outline-none"
              disabled={sent}
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
              {sent ? "Sent!" : "Send Message"}
            </button>
          </div>
        </form>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
          <div>
            <span className="font-bold text-blue-900 dark:text-emerald-300">Email:</span>{' '}
            <a href="mailto:alifaizanch3101@gmail.com" className="underline hover:text-blue-700 dark:hover:text-emerald-400 transition">alifaizanch3101@gmail.com</a>
          </div>
          <div>
            <span className="font-bold text-blue-900 dark:text-emerald-300">Phone:</span>{' '}
            <a href="tel:+923184757136" className="underline hover:text-blue-700 dark:hover:text-emerald-400 transition">+92 318 4757136</a>
          </div>
        </div>
        {/* Decorative Glow */}
        <div className="absolute -z-10 inset-0 pointer-events-none opacity-60 blur-2xl"
          style={{
            background: 'radial-gradient(circle at 60% 40%, #60a5fa33 0%, transparent 70%)'
          }}
        />
      </div>
    </section>
  );
};

export default Contact;