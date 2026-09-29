import Image from "next/image";
import { motion } from "framer-motion";
import Me1 from "@/public/image/me1.jpg";
import Me2 from "@/public/image/me2.jpg";
import Me4 from "@/public/image/me4.jpg";
import Hr from "@/components/Hr";

function Title() {
  return (
    <div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
      <div className="flex justify-center items-center flex-col my-5 self-start ">
        <Hr variant="long"></Hr>
        <h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <Title />
      <div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
        <div className="flex justify-center items-start flex-col mb-5 ">
          <div className="images relative w-full  aspect-square">
            <div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: 100 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                className="w-full h-full"
              >
                <Image
                  src={Me1}
                  alt="Naldi"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                />
              </motion.div>
            </div>
            <div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                transition={{ delay: 0.3 }}
                className="w-full h-full"
              >
                <Image
                  src={Me4}
                  alt="Naldi"
                  layout="fill"
                  objectFit="cover"
                  className="scale-110"
                  placeholder="blur"
                />
              </motion.div>
            </div>
            <div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="w-full h-full"
              >
                <Image
                  src={Me2}
                  alt="Naldi"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="top"
                  className="scale-110"
                  placeholder="blur"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          className="flex justify-center items-start flex-col mb-5 md:px-10"
          initial={{
            opacity: 0,
            x: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.5,

            type: "spring",
          }}
        >
          <h2 className="text-2xl font-bold tracking-wider mb-3">
            Naldi Pradipta
          </h2>

          <p className="text-gray-600 text-justify title text-lg">
            Hey there, I&rsquo;m Naldi Pradipta, a
            <span className="text-black font-medium"> Fullstack Developer</span>{" "}
            with a strong interest in
            <span className="text-black font-medium">
              {" "}
              web development, Artificial Intelligence, and Machine Learning.
            </span>{" "}
            I hold a Bachelor&rsquo;s degree in
            <span className="text-black font-medium">
              {" "}
              Informatics Engineering
            </span>{" "}
            from
            <span className="text-black font-medium">
              {" "}
              Universitas Esa Unggul
            </span>
            , graduating with a GPA of
            <span className="text-black font-medium"> 3.58/4.00.</span> I have
            hands-on experience building web applications across the frontend,
            backend, database, and API layers, as well as designing user
            interfaces and integrating machine learning models. One of my main
            projects is
            <span className="text-black font-medium"> BatikEye</span>, an
            interactive batik motif recognition platform powered by a TensorFlow
            CNN model. Beyond development, I enjoy exploring
            <span className="text-black font-medium">
              {" "}
              UI/UX design, AI, machine learning, and emerging technologies.
            </span>{" "}
            I&rsquo;m a
            <span className="text-black font-medium">
              {" "}
              lifelong learner
            </span>{" "}
            who enjoys adapting to new technologies, solving problems, and
            continuously improving my skills through real-world projects.
          </p>
        </motion.div>
      </div>
    </>
  );
}
