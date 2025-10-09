"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ItineraryGridProps } from "./ItineraryGrid.types";

export const ItineraryGrid: React.FC<ItineraryGridProps> = ({ items }) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <section
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6"
      role="list"
      aria-label="Trip itinerary"
    >
      {items.map((it) => {
        const isExpanded = expandedCard === it.id;
        
        return (
          <article
            key={it.id}
            role="listitem"
            tabIndex={0}
            onClick={() => setExpandedCard(isExpanded ? null : it.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setExpandedCard(isExpanded ? null : it.id);
              }
            }}
            className={`
              bg-surface rounded-lg overflow-hidden shadow-sm 
              cursor-pointer group
              transition-all duration-300 ease-out
              hover:shadow-xl hover:-translate-y-1
              focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
              ${isExpanded ? 'ring-2 ring-primary shadow-xl -translate-y-1' : ''}
            `}
            aria-label={`Day ${it.day}: ${it.title}`}
          >
            <div className="relative w-full pb-[75%] overflow-hidden bg-border/20">
              {it.image ? (
                <Image
                  src={it.image}
                  alt={`${it.title} preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-border/30">
                  <svg 
                    className="w-12 h-12 text-textMuted/50" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    />
                  </svg>
                </div>
              )}
              
              <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-primaryText px-3 py-1 rounded-full text-xs font-bold shadow-md">
                Day {it.day}
              </div>
            </div>

            <div className="p-4 md:p-5">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-text line-clamp-2 group-hover:text-primary transition-colors duration-200">
                {it.title}
              </h3>
              
              <p className={`text-sm md:text-base text-textMuted leading-relaxed transition-all duration-300 ${
                isExpanded ? 'line-clamp-none' : 'line-clamp-2'
              }`}>
                {it.blurb}
              </p>

              {(it.durationHrs || it.costUSD || it.rating) && (
                <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-border text-xs md:text-sm text-textMuted">
                  {it.durationHrs && (
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{it.durationHrs} hrs</span>
                    </div>
                  )}
                  
                  {it.costUSD && (
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                      <span>${it.costUSD}</span>
                    </div>
                  )}
                  
                  {it.rating && (
                    <div className="flex items-center gap-1.5 text-primary font-medium">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{it.rating.toFixed(1)}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="px-4 pb-4 flex justify-center">
              <div className={`text-textMuted text-xs transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};
