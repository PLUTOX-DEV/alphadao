import React from "react";

/* FAQItem component */
/*
  Place this at the top of your file or in a separate file and import it.
*/
export function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="bg-gradient-to-br from-purple-800/80 to-gray-900/80 border border-purple-900/40 rounded-xl shadow-lg transition-all duration-200">
      <button
        className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-100 text-base md:text-lg">{question}</span>
        <svg
          className={`w-5 h-5 text-purple-300 transform transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-4 text-gray-300 text-sm md:text-base transition-all duration-200">
          {answer}
        </div>
      )}
    </div>
  );
}