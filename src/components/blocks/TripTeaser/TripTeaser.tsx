"use client";
import React from "react";
import Image from "next/image";
import { TripTeaserProps } from "./TripTeaser.types";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

export const TripTeaser: React.FC<TripTeaserProps> = ({
  title,
  summary,
  coverUrl,
  tags = [],
  author,
  createdAt,
  readMins,
  primaryCta = { label: "Read guide", href: "#" },
  secondaryCta,
}) => {
  const dateLabel = createdAt
    ? new Date(createdAt).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : undefined;

  const PrimaryComponent = primaryCta.href ? "a" : "button";
  const SecondaryComponent = secondaryCta?.href ? "a" : "button";

  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 p-6 md:p-8 lg:p-10 bg-surface rounded-xl shadow-md transition-shadow duration-300 hover:shadow-xl">
      <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 order-2 lg:order-1">
        <header>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 text-text leading-tight line-clamp-3 hover:text-primary transition-colors duration-200">
            {title}
          </h2>
          {summary && (
            <p className="text-sm sm:text-base lg:text-lg text-textMuted leading-relaxed line-clamp-4">
              {summary}
            </p>
          )}
        </header>

        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2" role="list" aria-label="Post tags">
            {tags.slice(0, 4).map((t) => (
              <Tag key={t} className="bg-primary/10 text-primary border-primary/20 font-medium">
                {t}
              </Tag>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-textMuted">
          {author?.avatarUrl && (
            <Image
              src={author.avatarUrl}
              alt={`${author.name}'s avatar`}
              width={32}
              height={32}
              className="rounded-full ring-2 ring-border"
            />
          )}
          {author?.name && <span className="font-medium text-text">{author.name}</span>}
          {dateLabel && (
            <>
              <span aria-hidden="true">•</span>
              <time dateTime={createdAt}>{dateLabel}</time>
            </>
          )}
          {(readMins ?? 0) > 0 && (
            <>
              <span aria-hidden="true">•</span>
              <span>{readMins} min read</span>
            </>
          )}
        </div>

        <div className="flex flex-wrap gap-3 mt-2">
          <Button
            as={PrimaryComponent}
            variant="primary"
            size="lg"
            onClick={primaryCta.onClick}
            href={primaryCta.href}
            className="flex-1 sm:flex-none"
          >
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button
              as={SecondaryComponent}
              variant="ghost"
              size="lg"
              onClick={secondaryCta.onClick}
              href={secondaryCta.href}
              className="flex-1 sm:flex-none"
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>

      <div className="order-1 lg:order-2 w-full">
        {coverUrl ? (
          <div className="relative w-full pb-[62.5%] overflow-hidden rounded-lg bg-surface shadow-md group">
            <Image
              src={coverUrl}
              alt={`Cover image for ${title}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
        ) : (
          <div className="w-full h-full min-h-[200px] lg:min-h-[300px] flex items-center justify-center bg-border/30 rounded-lg border-2 border-dashed border-border">
            <span className="text-textMuted text-sm">No image provided</span>
          </div>
        )}
      </div>
    </article>
  );
};
