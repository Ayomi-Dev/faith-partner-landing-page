"use client";

import { useState } from "react";
import { SectionLabel } from "@/app//components/uis/SectionLabel";
import { Button } from "@/app/components/uis/Button";
import { cn } from "@/app/lib/utils";

const INFO = [
  { icon: "📍", label: "Address", 
    content: `1, Faith Partners close, via Olorunsogo road, by Suru block b/stop, Matogbun Olambe Akute road, Ogun State, Nigeria` 
  },
  { icon: "📞", label: "Phone", content: "+234 8035820159\n+234 8023126905", isPhone: true },
  { icon: "💬", label: "WhatsApp", content: "+234 800 000 0000", isWhatsApp: true },
  { icon: "✉️", label: "Email", content: "admissions@faithpartners.edu.ng", isEmail: true },
];

const HOURS = [
  { day: "Mon – Fri", time: "7:30am – 5:00pm" },
  { day: "Saturday", time: "9:00am – 1:00pm" },
  { day: "Sunday", time: "Closed" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 reveal">
          <SectionLabel>Contact Us</SectionLabel>
          <h2 className="font-head font-bold text-navy text-3xl sm:text-4xl leading-tight mb-3">
            We&apos;d Love to Hear From You
          </h2>
          <p className="text-gray-500 max-w-120 leading-relaxed">
            Reach out to our admissions team — we&apos;re here to answer every question and help you
            make the right decision for your child.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14">
          {/* Info column */}
          <div className="space-y-5 reveal-left">
            {INFO.map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-lg shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-head font-bold text-navy text-sm mb-1">{item.label}</h4>
                  {item.isEmail ? (
                    <a href={`mailto:${item.content}`} className="text-sm text-gray-500 hover:text-navy transition-colors">
                      {item.content}
                    </a>
                  ) : item.isPhone ? (
                    <div className="space-y-0.5">
                      {item.content.split("\n").map((line) => (
                        <a key={line} href={`tel:${line.replace(/\s/g, "")}`} className="block text-sm text-gray-500 hover:text-navy transition-colors">
                          {line}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 whitespace-pre-line leading-relaxed">{item.content}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Office hours */}
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-lg shrink-0">
                🕐
              </div>
              <div>
                <h4 className="font-head font-bold text-navy text-sm mb-2">Office Hours</h4>
                <div className="space-y-1.5">
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between gap-6 text-sm text-gray-500 border-b border-gray-100 pb-1.5">
                      <span>{h.day}</span>
                      <span className="font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl border border-gray-200 bg-blue-50 h-48 flex items-center justify-center text-sm text-navy font-medium mt-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7924.979661667232!2d3.3445846756697417!3d6.7099161005911245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b95e0401986ed%3A0x25c79b73d994dca2!2sMatogbun%20Community%20High%20School!5e0!3m2!1sen!2sng!4v1785456744788!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                loading="lazy"
                style={{borderRadius: "15px"}}
              >
              </iframe>
            </div>
            📍 Google Maps 
          </div>

          {/* Form column */}
          <div className="reveal-right">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-card"
            >
              <h3 className="font-head font-bold text-navy text-xl mb-6">Send Us a Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <Field label="First Name" id="fname" placeholder="Adaeze" />
                <Field label="Last Name" id="lname" placeholder="Okonkwo" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <Field label="Email Address" id="email" type="email" placeholder="you@example.com" />
                <Field label="Phone Number" id="phone" type="tel" placeholder="+234 800 000 0000" />
              </div>

              <div className="mb-4">
                <label htmlFor="interest" className="block text-sm font-semibold font-head text-gray-800 mb-1.5">
                  I&apos;m interested in
                </label>
                <select
                  id="interest"
                  className="w-full border-[1.5px] border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900
                             focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition"
                >
                  <option value="">Select a programme</option>
                  {["Nursery School", "Primary School", "Junior Secondary", "Senior Secondary", "After-School", "General Enquiry"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold font-head text-gray-800 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your child and how we can help..."
                  className="w-full border-[1.5px] border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900
                             focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition resize-y min-h-25"
                />
              </div>

              <Button
                type="submit"
                className={cn(
                  "w-full flex items-center justify-center gap-2 font-head font-semibold text-[1rem] py-3.5 rounded-xl",
                  "transition-all duration-300",
                  sent
                    ? "bg-emerald text-white"
                    : "bg-gold text-navy-dark hover:bg-gold-dark hover:shadow-gold hover:-translate-y-0.5"
                )}
                variant="primary"
              >
                {sent ? (
                  "Message Sent ✓"
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold font-head text-gray-800 mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full border-[1.5px] border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900
                   focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition"
      />
    </div>
  );
}