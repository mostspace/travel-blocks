"use client";
import React, { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { TripTeaser } from "@/components/blocks/TripTeaser";
import { ItineraryGrid } from "@/components/blocks/ItineraryGrid";
import type { Post, User, ItineraryItem } from "@/lib/data/types";

type Payload = {
  posts: Post[];
  users: User[];
  itinerary: ItineraryItem[];
  latency: number;
};

export default function Page() {
  const [data, setData] = useState<Payload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    fetch("/api/posts")
      .then((r) => r.json())
      .then((p: Payload) => {
        if (!ignore) {
          setData(p);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!ignore) {
          setError("Failed to load");
          setLoading(false);
        }
      });
    return () => {
      ignore = true;
    };
  }, []);

  const firstPost = data?.posts?.[0];
  const author = data?.users?.find((u) => u.id === firstPost?.userId);
  const items = data?.itinerary ?? [];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text">
          Travel Blocks
          <span className="block text-lg md:text-xl font-normal text-textMuted mt-1">
            Themeable components for travel experiences
          </span>
        </h1>
        <ThemeToggle />
      </div>

      {loading && (
        <div className="p-8 md:p-12 bg-surface rounded-xl shadow-md text-center animate-pulse">
          <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-textMuted">Loading content… (simulated latency)</p>
        </div>
      )}

      {error && (
        <div className="p-6 md:p-8 bg-surface rounded-xl shadow-md border-l-4 border-red-500">
          <p className="text-red-500 font-medium mb-2">Failed to load content</p>
          <p className="text-textMuted mb-4">{error}</p>
          <button 
            onClick={() => location.reload()}
            className="px-4 py-2 bg-primary text-primaryText rounded-md hover:opacity-90 transition-opacity font-medium"
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && firstPost && (
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          <TripTeaser
            title={firstPost.title}
            summary={firstPost.summary}
            coverUrl={firstPost.coverUrl}
            tags={firstPost.tags}
            author={
              author
                ? { name: author.name, avatarUrl: author.avatarUrl }
                : undefined
            }
            createdAt={firstPost.createdAt}
            readMins={firstPost.readMins}
            primaryCta={{ label: "Read guide", href: "#" }}
            secondaryCta={{ label: "Save for later", href: "#" }}
          />

          <section>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-text">
              Sample Itinerary
            </h2>
            <ItineraryGrid
              items={items.map((i) => ({
                id: i.id,
                day: i.day,
                title: i.title,
                blurb: i.blurb,
                image: i.image,
                durationHrs: i.durationHrs,
                costUSD: i.costUSD,
                rating: i.rating,
              }))}
            />
          </section>

          <footer className="text-center py-6 border-t border-border">
            <p className="text-xs md:text-sm text-textMuted">
              Loaded in ~{data?.latency}ms (simulated latency)
            </p>
          </footer>
        </div>
      )}
    </main>
  );
}
