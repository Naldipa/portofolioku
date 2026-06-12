"use client";
import Hr from "@/components/Hr";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    id: 1,
    startDate: "Dec 2025",
    endDate: "Jan 2026",
    company: "Pusat Penelitian dan Penerbitan UIN Jakarta",
    position: "Project-Based Fullstack Developer",
    type: "Freelance",
    location: "Jakarta, Indonesia",
    description:
      "Developed a dashboard system for Pusat Penelitian dan Penerbitan UIN Jakarta using PHP, Laravel, Filament, and Blade. Built admin interfaces and structured dashboard features to support research and publication data management. Implemented CRUD workflows, reusable Blade views, and Filament resources to improve internal data organization and operational efficiency.",
    skills: [
      "PHP",
      "Laravel",
      "Filament",
      "Blade",
      "MySQL",
      "Dashboard Development",
      "Fullstack Development",
    ],
  },
  {
    id: 2,
    startDate: "Jul 2024",
    endDate: "Oct 2024",
    company: "Esa Unggul University",
    position: "Fullstack Developer",
    type: "Project-Based",
    location: "Jakarta, Indonesia",
    description:
      "Developed an e-commerce website focused on selling electronic products. Built a responsive user interface using HTML, CSS, and JavaScript, and developed the backend using PHP with MySQL database integration for structured product, customer, and transaction data management. Integrated a payment gateway API to support smooth and secure online payment processing.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "Payment Gateway API",
      "Responsive Design",
      "E-Commerce",
    ],
  },
  {
    id: 3,
    startDate: "May 2025",
    endDate: "Jul 2025",
    company: "Coding Camp 2025 Powered by DBS Foundation",
    position: "Fullstack Developer",
    type: "Capstone Project",
    location: "Remote, Indonesia",
    description:
      "Built an interactive website for batik motif recognition using React.js, Tailwind CSS, and Axios, integrated with an ML model through a RESTful API. Collaborated with back-end and ML teams to integrate FastAPI, PostgreSQL, and a TensorFlow CNN model for batik image recognition with over 90% accuracy. Successfully deployed the platform via Netlify, enabling public access to an educational and cultural preservation tool.",
    skills: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "Axios",
      "FastAPI",
      "PostgreSQL",
      "TensorFlow",
      "Netlify",
      "GitHub",
    ],
  },
  {
    id: 4,
    startDate: "Oct 2025",
    endDate: "Jan 2026",
    company: "Esa Unggul University",
    position: "Web Development",
    type: "Internship",
    location: "Jakarta, Indonesia",
    description:
      "Contributed to the development and maintenance of university website features to support digital marketing initiatives. Assisted in implementing and optimizing website UI/UX to improve user engagement and accessibility. Collaborated with the digital marketing team to update website content, landing pages, and promotional pages. Participated in debugging, testing, and improving website performance and responsiveness.",
    skills: [
      "Web Development",
      "UI/UX",
      "JavaScript",
      "Git/GitHub",
      "Landing Pages",
      "Debugging",
      "Testing",
      "Responsive Design",
      "Teamwork",
    ],
  },
  {
    id: 5,
    startDate: "Feb 2025",
    endDate: "Jul 2025",
    company: "Coding Camp 2025 Powered by DBS Foundation",
    position: "Fullstack Developer Trainee",
    type: "Independent Study",
    location: "Remote, Indonesia",
    description:
      "Completed intensive training in software development with a focus on front-end and back-end web development. Gained skills in HTML, CSS, JavaScript, React, Node.js, Git/GitHub, and RESTful APIs. Developed responsive front-end interfaces and server-side applications through hands-on projects.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Postman",
      "Git/GitHub",
      "RESTful APIs",
    ],
  },
];

experiences.reverse();

function Title() {
  return (
    <div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
      <div className="flex justify-center items-center flex-col my-5 self-start">
        <Hr variant="long"></Hr>
        <motion.h1
          className="text-3xl font-bold mt-3"
          initial={{
            opacity: 0,
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.7,
            type: "spring",
          }}
        >
          Professional Experience
        </motion.h1>
      </div>
    </div>
  );
}

function TimelineCard({ experience, index, isEven }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className={`flex ps-10 md:ps-0 ${
        isEven
          ? "md:justify-center md:translate-x-68"
          : "md:justify-center md:-translate-x-68"
      } justify-center mb-4`}
    >
      <div className="bg-gradient-to-r from-black to-gray-800 text-white px-12 py-3 rounded-xl shadow-lg border border-gray-600 min-w-max">
        <div className="flex items-center justify-center gap-6">
          <div className="text-center">
            <div className="text-sm font-bold">{experience.startDate}</div>
            <div className="text-xs text-gray-300">Start</div>
          </div>
          <div className="w-px h-8 bg-gray-500"></div>
          <div className="text-center">
            <div className="text-sm font-bold">{experience.endDate}</div>
            <div className="text-xs text-gray-300">End</div>
          </div>{" "}
          <div className="w-px h-8 bg-gray-500"></div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-400">
              {experience.location}
            </div>
            <div className="text-xs text-gray-300">Location</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceCard({ experience, index, isEven }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`relative group ${
        isEven ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
      } md:w-1/2`}
    >
      {" "}
      {/* Card */}
      <div
        className={`bg-white/20 backdrop-blur-sm border border-gray-300/30 rounded-2xl p-6 shadow-lg 
				hover:shadow-xl hover:bg-white/30 transition-all duration-300 ml-12 md:ml-0`}
      >
        {/* Company & Position */}
        <div className="mb-4">
          <h3 className="font-bold text-xl text-black mb-1">
            {experience.company}
          </h3>
          <h4 className="font-medium text-lg text-gray-700">
            {experience.position}
            <span className="text-sm font-normal text-gray-500 ml-2">
              - {experience.type}
            </span>
          </h4>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-justify leading-relaxed mb-4">
          {experience.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-gray-200/60 hover:bg-gray-300/60 border border-gray-400/40 text-black px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Wrapper({ children }) {
  return (
    <div className="mx-auto container px-6 py-10">
      <div className="flex justify-center items-center flex-col">
        {children}
      </div>
    </div>
  );
}

export default function Experience() {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <>
      <Title />
      <Wrapper>
        {" "}
        <div className="relative w-full max-w-6xl mx-auto">
          {" "}
          {/* Timeline line - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full"></div>
          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-0 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full"></div>{" "}
          {/* Experience cards */}
          <div className="space-y-12 md:space-y-16 relative">
            <AnimatePresence>
              {displayedExperiences.map((experience, index) => (
                <div key={experience.id} className="relative">
                  {/* Timeline period card - flows naturally above content */}
                  <TimelineCard
                    experience={experience}
                    index={index}
                    isEven={index % 2 === 1}
                  />

                  {/* Timeline dot - positioned at the start of the experience card */}
                  <div
                    className={`absolute w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg z-30
										md:left-1/2 md:-translate-x-1/2 md:top-4
										left-0 -translate-x-1/2 top-5`}
                  />

                  {/* Experience content card */}
                  <ExperienceCard
                    experience={experience}
                    index={index}
                    isEven={index % 2 === 1}
                  />
                </div>
              ))}
            </AnimatePresence>
          </div>
          {/* Expand/Collapse button */}
          {experiences.length > 3 && (
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium 
									transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
              >
                {showAll ? (
                  <>
                    Show Less
                    <svg
                      className="w-4 h-4 transform rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    View More Experience
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </>
                )}
              </button>
            </motion.div>
          )}{" "}
          {/* Gradient fade effect at bottom */}
          {!showAll && (
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stale-300 to-transparent pointer-events-none"></div>
          )}
        </div>
      </Wrapper>
    </>
  );
}
