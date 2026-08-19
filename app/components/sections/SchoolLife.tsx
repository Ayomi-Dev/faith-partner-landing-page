"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { LIFE_ACTIVITIES } from "@/app/lib/constants";
import { SectionLabel } from "../uis/SectionLabel";
import E1 from "@/public/assets/images/events/event7.jpeg"
import E2 from "@/public/assets/images/sports/sport.jpeg"
import E3 from "@/public/assets/images/events/event34.jpeg"
import E4 from "@/public/assets/images/events/music.jpeg"
import E5 from "@/public/assets/images/events/event5.jpeg"
import E6 from "@/public/assets/images/events/event11.jpeg"
import E7 from "@/public/assets/images/events/event8.jpeg"
import E8 from "@/public/assets/images/events/event16.jpeg"
import E9 from "@/public/assets/images/events/event19.jpeg"

const slides = [
  {
    image: E1,
    title: "Law Profession Showcase",
    description:
    "Students explore the world of law through engaging talks and practical insights from legal professionals, discovering the importance of justice, integrity, advocacy, and leadership."
  },
  {
    image: E2,
    title: "Inter-House Sports",
    description:
      "Competition, teamwork and sportsmanship come alive during our annual sporting events.",
  },
  {
    image: E3,
    title: "STEM & Innovation",
    description:
      "Hands-on science and technology projects inspire curiosity, creativity and problem-solving.",
  },
  {
    image: E4,
    title: "Music & Performing Arts",
    description:
      "Students develop confidence through drama, choir, dance and instrumental performances.",
  },
  {
    image: E5,
    title: "Cultural Day Celebration",
    description: "Students proudly showcase Nigeria's rich cultural heritage through music, dance, fashion and food."
  },
  { 
    image: E6,
    title: "Defence, Aviation & Service Careers",
    description:
    "Students explore diverse careers in the military, navy, aviation, and other service professions, gaining valuable insights into leadership, discipline, teamwork, technology, and the spirit of service."
  },
  {
    image: E7,
    title: "Catering & Hospitality Careers",
    description:
    "Students explore exciting careers in catering, hospitality, culinary arts, and event management, gaining practical insights into creativity, professionalism, customer service, entrepreneurship, and the art of creating memorable experiences."
  },
  {
    image: E8,
    title: "Medicine & Healthcare Careers",
    description:
      "Students discover the rewarding world of medicine and healthcare through insights from doctors, nurses, and other healthcare professionals, learning about compassion, discipline, teamwork, science, and the importance of caring for others."
  },
  {
    image: E9,
    title: "Corporate Careers Showcase",
    description:
      "Students gain valuable insights into the corporate world, exploring careers in business, finance, technology, management, and administration while developing an understanding of professionalism, communication, leadership, teamwork, and innovation."
  }
];

export function SchoolLife() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="life" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="reveal-left">
            <SectionLabel>Student Life</SectionLabel>

            <h2 className="font-head font-bold text-navy text-3xl sm:text-4xl leading-tight mb-4">
              More Than Academics — A Life of Rich Experiences
            </h2>

            <p className="text-gray-500 leading-relaxed mb-8">
              Our students grow as leaders, artists, athletes, and innovators
              through a vibrant co-curricular programme that complements every
              lesson.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {LIFE_ACTIVITIES.map((a) => (
                <div
                  key={a.title}
                  className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-4 hover:border-gold hover:shadow-card transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center text-2xl shrink-0">
                    {a.icon}
                  </div>

                  <div>
                    <h4 className="font-head font-bold text-navy text-sm">
                      {a.title}
                    </h4>

                    <p className="text-gray-500 text-xs">
                      {a.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="reveal">

            <div className="relative h-162.5 rounded-3xl overflow-hidden">

              <AnimatePresence mode="wait">

                <motion.div
                  key={current}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  {/* Background image */}
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.12 }}
                    transition={{
                      duration: 8,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slides[current].image}
                      alt={slides[current].title}
                      fill
                      priority
                      sizes="true"
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Dark Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Floating Badge */}
                  <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: .25 }}
                    className="absolute top-6 left-6"
                  >
                    <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-full px-5 py-2 text-white text-sm">
                      Student Experiences
                    </div>
                  </motion.div>

                  {/* Caption */}
                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: .3,
                      duration: .6,
                    }}
                    className="absolute left-6 right-6 bottom-8"
                  >
                    <div className="backdrop-blur-xl bg-white/10 border border-white/15 rounded-2xl p-6">

                      <h3 className="font-head text-white text-2xl font-bold mb-3">
                        {slides[current].title}
                      </h3>

                      <p className="text-white/80 leading-relaxed">
                        {slides[current].description}
                      </p>

                    </div>
                  </motion.div>

                </motion.div>

              </AnimatePresence>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      current === index
                        ? "w-10 bg-white"
                        : "w-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}