"use client";

import { useState } from "react";

type Project = {
  id: number;
  title: string;
  shortDesc: string;
  longDesc: string;
  tags: string[];
  github: string;
  demo: string | null;
  year: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    shortDesc: "A short description of what this project does and its impact.",
    longDesc:
      "A longer write-up goes here — what problem it solves, how it works under the hood, and what you learned. This can cover architecture decisions, scale, and interesting challenges you ran into.",
    tags: ["Python", "Docker"],
    github: "https://github.com/rish-kun",
    demo: null,
    year: "2025",
  },
  {
    id: 2,
    title: "Project Two",
    shortDesc: "A short description of what this project does and its impact.",
    longDesc:
      "This project tackles distributed workload orchestration at scale. Built with Go and deployed on Kubernetes, it handles service discovery, rolling deployments, and automated rollback on failure.",
    tags: ["Go", "Kubernetes"],
    github: "https://github.com/rish-kun",
    demo: null,
    year: "2025",
  },
  {
    id: 3,
    title: "Project Three",
    shortDesc: "A short description of what this project does and its impact.",
    longDesc:
      "Fine-tuned a language model on domain-specific data using PyTorch and LoRA adapters. Explored quantisation for inference efficiency and built an agentic pipeline on top of the base model.",
    tags: ["ML", "PyTorch"],
    github: "https://github.com/rish-kun",
    demo: null,
    year: "2024",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project>(projects[0]);

  return (
    <div className="min-h-dvh flex flex-col">
      <main className="flex-1 px-8 lg:px-12 py-12">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 mb-1">
          Projects
        </h2>
        <p className="text-sm text-neutral-500 mb-10">Things I&apos;ve built.</p>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 lg:items-start">
          {/* Left: project list */}
          <div className="flex flex-col gap-3 lg:w-2/5 flex-shrink-0">
            {projects.map((project) => {
              const isActive = selected.id === project.id;
              return (
                <button
                  key={project.id}
                  onClick={() => setSelected(project)}
                  className={`text-left rounded-xl px-5 py-4 border transition-all duration-200 ${
                    isActive
                      ? "border-neutral-400 bg-neutral-50"
                      : "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50/50"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-semibold text-neutral-900">
                      {project.title}
                    </span>
                    <span className="text-xs mt-0.5 text-neutral-400">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-xs mt-1.5 leading-relaxed line-clamp-1 text-neutral-500">
                    {project.shortDesc}
                  </p>
                  <div className="flex gap-1.5 mt-3 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded bg-neutral-100 text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: detail panel */}
          <div className="lg:flex-1 rounded-2xl border border-neutral-200 bg-white p-7 flex flex-col gap-5 min-h-[260px]">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-neutral-900 leading-snug">
                  {selected.title}
                </h3>
                <span className="text-xs text-neutral-400 mt-0.5 block">
                  {selected.year}
                </span>
              </div>
              {/* Icon buttons: GitHub + hosted link */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-700 transition-colors"
                  aria-label="GitHub"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                {selected.demo ? (
                  <a
                    href={selected.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-700 transition-colors"
                    aria-label="Live demo"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </a>
                ) : (
                  <div
                    className="w-8 h-8 rounded-full bg-neutral-200 text-neutral-400 flex items-center justify-center cursor-not-allowed"
                    title="No live demo"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </div>
                )}
              </div>
            </div>

            <div className="w-6 h-px bg-neutral-200" />

            <p className="text-sm text-neutral-600 leading-relaxed">
              {selected.longDesc}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {selected.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-neutral-500 border border-neutral-200 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
