"use client";

import { motion } from "framer-motion";

const trainings = [
  {
    title: "Coding Camp 2025 Powered by DBS Foundation",
    issuer: "Dicoding Indonesia and DBS Foundation",
    period: "Feb 2025 - Jul 2025",
    track: "Front-End and Back-End Developer",
    description:
      "Completed intensive training in software development with a focus on front-end and back-end web development, gaining hands-on experience with HTML, CSS, JavaScript, React, Node.js, Git/GitHub, and RESTful APIs. As part of the program, built an interactive batik motif recognition website using React.js, Tailwind CSS, and Axios, integrated with a machine learning model through a RESTful API. Collaborated with back-end and machine learning teams to integrate FastAPI, PostgreSQL, and a TensorFlow CNN model, achieving over 90% accuracy in batik image recognition. Developed responsive interfaces and server-side integrations, and successfully deployed the platform via Netlify as an educational and cultural preservation tool.",
    skills: [
      "React.js",
      "JavaScript",
      "Node.js",
      "REST API",
      "FastAPI",
      "Tailwind CSS",
      "Python",
      "PostgreSQL",
      "axios",
      "Supabase",
      "TensorFlow",
      "CNN",
      "Postman",
      "Git/GitHub",
      "RESTful APIs",
    ],
    file: "/docs/[Coding Camp 2025] Certificate - FC204D5Y2327 (1).pdf",
  },
];

const certifications = [
  {
    title: "Introduction to Programming Logic (Programming Logic 101)",
    issuer: "Dicoding Indonesia",
    period: "February 2025 - February 2028",
    file: "/docs/sertifikat_course_302_2704490_160225072220 Pengenalan ke Logika Pemrograman (Programming Logic 101).pdf",
  },
  {
    title: "Git with GitHub Fundamentals",
    issuer: "Dicoding Indonesia",
    period: "February 2025 - February 2028",
    file: "/docs/Belajar Dasar Git dengan GitHub.pdf",
  },
  {
    title: "Programming Fundamentals for Software Developers",
    issuer: "Dicoding Indonesia",
    period: "February 2025 - February 2028",
    file: "/docs/Memulai Dasar Pemrograman untuk Menjadi Pengembang.pdf",
  },
  {
    title: "Basic Web Programming",
    issuer: "Dicoding Indonesia",
    period: "February 2025 - February 2028",
    file: "/docs/Belajar Dasar Pemrograman Web.pdf",
  },
  {
    title: "Basic Javascript Programming ",
    issuer: "Dicoding Indonesia",
    period: "March 2025 - March 2028",
    file: "/docs/Basic Javascript Programming.pdf",
  },
  {
    title: "Beginner Front-End Web Development",
    issuer: "Dicoding Indonesia",
    period: "March 2025 - March 2028",
    file: "/docs/Beginner Front-End Web Development.pdf",
  },
  {
    title: "Web Front-End Development Fundamentals",
    issuer: "Dicoding Indonesia",
    period: "April 2025 - April 2028",
    file: "/docs/Web Front-End Development Fundamentals.pdf",
  },
  {
    title: "Beginner Back-End Development with JavaScript",
    issuer: "Dicoding Indonesia",
    period: "June 2025 - June 2028",
    file: "/docs/Beginner Back-End Development with JavaScript.pdf",
  },
  {
    title: "Intermediate Web Development",
    issuer: "Dicoding Indonesia",
    period: "June 2025 - June 2028",
    file: "/docs/Intermediate Web Development.pdf",
  },
  {
    title: "English for Business Communication",
    issuer: "The British Institute",
    period: "June 2025",
    file: "/docs/English for Business Communication.pdf",
  },
  {
    title: "TOEFL Prediction Test",
    issuer: "Webster English Course",
    period: "July 2025 - July 2028",
    file: "/docs/Naldi Pradipta Sertifikat TOEFL.pdf",
  },
];

function SectionColumn({ title, children, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>
      {children}
    </motion.div>
  );
}

export default function TrainingCertifications() {
  return (
    <section
      className="container mx-auto px-6 py-10"
      aria-labelledby="training-certifications-title"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 id="training-certifications-title" className="text-3xl font-bold">
            Training &amp; Certifications
          </h1>
          <p className="mt-2 text-gray-600">
            Professional training programs and certifications I have completed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <SectionColumn title="Training" delay={0.1}>
            <div className="space-y-4">
              {trainings.map((training) => (
                <article
                  key={training.title}
                  className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-sm font-medium text-gray-500">
                    {training.period}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">
                    {training.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gray-700">
                    {training.track}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Issued by {training.issuer}
                  </p>
                  <p className="mt-3 text-justify leading-relaxed text-gray-600">
                    {training.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {training.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {training.file && (
                    <a
                      href={encodeURI(training.file)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900"
                    >
                      View Training Certificate
                    </a>
                  )}
                </article>
              ))}
            </div>
          </SectionColumn>

          <SectionColumn title="Certifications" delay={0.2}>
            {certifications.length > 0 ? (
              <div className="space-y-4">
                {certifications.map((certification) => (
                  <article
                    key={certification.title}
                    className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <p className="text-sm font-medium text-gray-500">
                      {certification.issuer} | Valid: {certification.period}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold">
                      {certification.title}
                    </h3>
                    {certification.file ? (
                      <a
                        href={encodeURI(certification.file)}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900"
                      >
                        View Certificate
                      </a>
                    ) : (
                      <p className="mt-4 text-sm text-gray-500">
                        The certificate file has not been added yet.
                      </p>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              <p className="rounded-lg border border-dashed border-gray-300 p-5 text-gray-600">
                No certifications to display yet.
              </p>
            )}
          </SectionColumn>
        </div>
      </div>
    </section>
  );
}
