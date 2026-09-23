import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

export interface ProjectMockupCardProps {
  title: string;
  category: string;
  location: string;
  description: string;
  metrics: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
}

export const ProjectMockupCard = ({
  title,
  category,
  location,
  description,
  metrics,
  link,
  imageUrl,
  imageAlt,
}: ProjectMockupCardProps) => {
  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Top Browser Bar */}
      <div className="bg-stone-100 border-b border-stone-200 px-5 py-3.5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
        </div>
        <div className="text-xs font-mono text-stone-500 bg-white px-3 py-1 rounded-md border border-stone-200">
          {link.replace("https://", "")}
        </div>
        <div className="w-8"></div>
      </div>

      {/* Visual Image */}
      <div className="w-full h-64 bg-stone-100 overflow-hidden shrink-0">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Structured Content Area */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          {/* Badges Row - Clean and Never Overlapping */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-800 border border-sky-200">
              {category}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
              {metrics}
            </span>
          </div>

          <div className="text-xs font-semibold text-stone-600 uppercase tracking-wider mb-1">
            {location}
          </div>

          <h3 className="text-2xl font-bold text-stone-900 mb-3">
            {title}
          </h3>

          <p className="text-stone-600 text-sm leading-relaxed mb-6">
            {description}
          </p>
        </div>

        {/* Action Link */}
        <div className="pt-4 border-t border-stone-100 mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-sm font-bold text-sky-800 hover:text-sky-900 transition gap-1.5"
          >
            Visit Live Application <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
