"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Hr from "@/components/Hr";

const experience = {
  position: "Public Relations and Information Coordinator",
  organization:
    "Informatics Engineering Student Association (HIMASTIKA), Faculty of Computer Science, Universitas Esa Unggul",
  period: "April 2024 - December 2024",
};

const photos = [
  {
    src: "/image/Foto Koor.jpg",
    alt: "Naldi at an organizational event",
    fit: "contain",
  },
  {
    src: "/image/Foto Divisi.jpg",
    alt: "Naldi during an organizational activity",
  },
  {
    src: "/image/me6.jpg",
    alt: "Naldi during an organizational activity",
  },
];

export default function OrganizationalExperience() {
  return (
    <section
      className="container mx-auto px-6 py-10"
      aria-labelledby="organizational-experience-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <Hr variant="long" />
          <motion.h2
            id="organizational-experience-title"
            className="mt-3 text-3xl font-bold"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Organizational Experience
          </motion.h2>
        </div>

        <motion.article
          className="rounded-2xl border border-gray-300/30 bg-white/20 p-6 shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-sm font-medium text-gray-500">
            {experience.period}
          </p>
          <h3 className="mt-1 text-xl font-bold text-black">
            {experience.position}
          </h3>
          <p className="mt-2 leading-relaxed text-gray-700">
            {experience.organization}
          </p>
          <p className="mt-4 text-justify leading-relaxed text-gray-600">
            As{" "}
            <strong>
              Coordinator of the Public Relations and Information Division at
              HIMASTIKA, Universitas Esa Unggul
            </strong>
            , I managed internal and external communication and coordinated
            information distribution through the organization&rsquo;s digital
            media platforms. I contributed to planning and organizing various
            programs, including seminars, community service, comparative
            studies, inaugurations, and student gatherings. I also collaborated
            with members across divisions to coordinate information needs,
            prepare communication materials, and ensure effective information
            delivery. This experience strengthened my skills in{" "}
            <strong>
              communication, teamwork, coordination, content management, and
              leadership
            </strong>
            .
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {photos.map((photo) => (
              <div
                key={photo.src ?? photo.alt}
                className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100"
              >
                {photo.src ? (
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    quality={100}
                    className={
                      photo.fit === "contain"
                        ? "object-contain"
                        : "object-cover"
                    }
                  />
                ) : (
                  <div className="flex h-full items-center justify-center border border-dashed border-gray-300 text-sm text-gray-500">
                    Third photo coming soon
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
