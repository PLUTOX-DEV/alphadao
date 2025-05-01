import React from "react";

const milestones = [
  { quarter: "Q2 2025", event: "Product Launches" },
  { quarter: "Q3 2025", event: "Foundation Community Formation" },
  { quarter: "Q4 2025", event: "Ecosystem Expansion" },
  { quarter: "Q1 2026", event: "DePIN Integration" },
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="p-8 text-white bg-black/90">
      <h2 className="text-4xl font-bold text-purple-300 mb-4">Our DAO Roadmap</h2>
      <p className="mb-6 max-w-2xl">
        These are the key milestones driving the future of Alpha DAO:
      </p>
      <ul className="list-disc list-inside mb-8">
        {milestones.map(({ quarter, event }) => (
          <li key={quarter}>
            <strong>{quarter}:</strong> {event}
          </li>
        ))}
      </ul>
      <a
        href="assets/Untitled document.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-purple-400 text-white px-6 py-3 rounded-lg glow-button transition hover:scale-105 hover:bg-purple-600"
      >
        📅 View Full Roadmap
      </a>
    </section>
  );
};

export default Roadmap;
