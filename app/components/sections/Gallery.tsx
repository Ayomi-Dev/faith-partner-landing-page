"use client";

import { GALLERY_ITEMS } from "@/app/lib/datas";
import { useState } from "react";
import { SectionLabel } from "../uis/SectionLabel";
import { cn } from "@/app/lib/utils";
import Image from "next/image";


const CATS = ["all", "campus", "academics", "sports", "events", "graduation"] as const;
type Cat = (typeof CATS)[number];

export function Gallery() {
  const [active, setActive] = useState<Cat>("all");

  const visible = GALLERY_ITEMS.filter((g) => active === "all" || g.cat === active);
  const randomVisble = visible.sort(() => Math.random() - 0.5) 

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 reveal">
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="font-head font-bold text-navy text-3xl sm:text-4xl leading-tight">
            Life at LordFaith Partners in Pictures
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8 reveal">
          {CATS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "px-4 py-2 rounded-full border font-head text-sm font-semibold transition-all capitalize",
                active === cat
                  ? "bg-(--navy) text-white border-(--navy)"
                  : "bg-white text-gray-500 border-gray-200 hover:border-navy hover:text-navy"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid — using CSS columns */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 reveal">
          {randomVisble.map((item, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-3 rounded-xl overflow-hidden relative group cursor-pointer"
            >
              <div
                className={cn(
                  "flex items-center justify-center text-4xl transition-transform duration-500 group-hover:scale-105",
                  item.h
                )}
                aria-hidden="true"
              >
               <Image 
                src={item.img} 
                width={0} height={0} 
                style={{ width: "100%", height: "100%"}} 
                alt={item.cat}
                loading="eager"
              />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy-dark/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="text-white" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}