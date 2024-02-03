"use client";
// pages/index.js
import Head from "next/head";
import { useState } from "react";
import Intro from "./components/intro";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeTab, setActiveTab] = useState("fitpage");
  const [activeSkillSection, setActiveSkillSection] = useState("languages");
  const scrollToSection = (section: any) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  };

  const scrollToSkillSection = (section: any) => {
    setActiveSkillSection(section);
  };

  const experienceData: Record<
    string,
    { title: string; date: string; points: string[] }
  > = {
    fitpage: {
      title: "Senior Application Developer | Fitpage, BKC",
      date: "March 2022 - Present",
      points: [
        "Automated photo processing, reducing manual efforts from 3 days to 6 hours.",
        "Led the refactoring of image compression, resulting in a 50% decrease in processing time.",
        "Solely engineered and launched the initial phase of the workout builder tool.",
        // Add more points as needed
      ],
    },
    ajackus: {
      title: "Software Engineer | Ajackus Consultancy, Andheri",
      date: "May 2020 - March 2022",
      points: [
        "Contributed to the development of a reusable component library, ensuring code consistency across multiple projects.",
        "Developed an online code editor, leading to a significant 30% reduction in customer support tickets.",
        "Led code optimization, performed thorough code reviews, and implemented robust unit testing.",
        // Add more points as needed
      ],
    },
    sygina: {
      title: "Software Engineer Trainee | Sygina Datasystem, CST",
      date: "March 2019 - May 2020",
      points: [
        "Developed, maintained, and shipped production code for client websites using HTML, CSS, Sass, JavaScript, and jQuery.",
        "Built frontend modules and REST APIs for clients including Times of India, Lokmat.",
        // Add more points as needed
      ],
    },
  };

  return (
    <div className="bg-black text-white font-nerdFont">
      <Head>
        <title>Sahil Hawal - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="fixed top-0 left-0 right-0 p-4 flex justify-end z-10 bg-black">
        <a
          className={`mx-4 cursor-pointer ${
            activeSection === "home" && "text-blue-500"
          }`}
          onClick={() => scrollToSection("home")}
        >
          /Home
        </a>
        <a
          className={`mx-4 cursor-pointer ${
            activeSection === "experience" && "text-blue-500"
          }`}
          onClick={() => scrollToSection("experience")}
        >
          /Experience
        </a>
        <a
          className={`mx-4 cursor-pointer ${
            activeSection === "skills" && "text-blue-500"
          }`}
          onClick={() => scrollToSection("skills")}
        >
          /Skills
        </a>
        <a
          className={`mx-4 cursor-pointer ${
            activeSection === "projects" && "text-blue-500"
          }`}
          onClick={() => scrollToSection("projects")}
        >
          /Projects
        </a>
        <a
          className={`mx-4 cursor-pointer ${
            activeSection === "contact" && "text-blue-500"
          }`}
          onClick={() => scrollToSection("contact")}
        >
          /Contact
        </a>
      </nav>
      <main className="max-w-[360px] lg:max-w-[900px] 2xl:max-w-[1200px] mx-auto">
        <Intro />
        <section className="mx-auto my-40 flex flex-col justify-center">
          {/* Vertical Tabs on Left */}
          <h2 className="text-2xl border-b-2 border-white pb-2 mb-4">
            Experience
          </h2>
          <div className="flex my-9 h-[200px]">
            <div className="flex flex-col mr-8 gap-4">
              <button
                className={`text-lg mb-4 focus:outline-none ${
                  activeTab === "fitpage" && "border-b-2 border-blue-500"
                }`}
                onClick={() => setActiveTab("fitpage")}
              >
                Fitpage
              </button>
              <button
                className={`text-lg mb-4 focus:outline-none ${
                  activeTab === "ajackus" && "border-b-2 border-blue-500"
                }`}
                onClick={() => setActiveTab("ajackus")}
              >
                Ajackus
              </button>
              <button
                className={`text-lg focus:outline-none ${
                  activeTab === "sygina" && "border-b-2 border-blue-500"
                }`}
                onClick={() => setActiveTab("sygina")}
              >
                Sygina
              </button>
            </div>

            {/* Content based on active tab */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold">
                {experienceData[activeTab].title}
              </h3>
              <p className="text-gray-400">{experienceData[activeTab].date}</p>
              <ul className="list-disc pl-6">
                {experienceData[activeTab].points.map(
                  (point: any, index: any) => (
                    <li key={index}>{point}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </section>
        <section className="mx-auto my-40 flex flex-col justify-center  lg:max-w-[900px] 2xl:max-w-[1200px]">
          <h2 className="text-2xl border-b-2 border-white pb-2 mb-4">Skills</h2>

          {/* Skill categories */}
          <div className="mb-6 flex">
            {["languages", "frameworks/Libraries", "databases", "tools"].map(
              (category) => (
                <button
                  key={category}
                  className={`text-lg mx-4 focus:outline-none ${
                    activeSkillSection === category &&
                    "border-b-2 border-blue-500"
                  }`}
                  onClick={() => scrollToSkillSection(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              )
            )}
          </div>

          {/* Skill content based on active skill section */}
          <div className="h-[200px]">
            {activeSkillSection === "languages" && (
              <ul className="list-disc pl-6">
                <li>JavaScript, TypeScript</li>
                <li>HTML, CSS</li>
                <li>Ruby</li>
                <li>Python</li>
              </ul>
            )}

            {activeSkillSection === "frameworks/Libraries" && (
              <ul className="list-disc pl-6">
                <li>React</li>
                <li>Next.js</li>
                <li>Redux</li>
                <li>Tailwind</li>
                <li>Nest.js</li>
                <li>Ruby on Rails</li>
              </ul>
            )}

            {activeSkillSection === "databases" && (
              <ul className="list-disc pl-6">
                <li>SQL (PostgreSQL)</li>
              </ul>
            )}

            {activeSkillSection === "tools" && (
              <ul className="list-disc pl-6">
                <li>AWS Rekognition</li>
                <li>Kafka</li>
                <li>Bull Queue</li>
                <li>Docker</li>
                <li>Git</li>
                <li>Vim</li>
                <li>tmux</li>
              </ul>
            )}
          </div>
        </section>
        {/* <section className="container mx-auto mb-8">
          <h2 className="text-2xl border-b-2 border-white pb-2 mb-4">
            Tech that I have worked extensively on
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">React Hook Form</h3>
            <p>
              A simple neovim distribution to quickly set up an IDE-like
              experience in your terminal.
            </p>
            <p className="text-gray-400">
              <a href="your_kiss_vim_project_link">Link</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Kafka</h3>
            <p>A minimal, dark theme for VS Code.</p>
            <p className="text-gray-400">
              <a href="your_everything_zen_project_link">Link</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Image Processing</h3>
            <p>A minimal, dark theme for VS Code.</p>
            <p className="text-gray-400">
              <a href="your_everything_zen_project_link">Link</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Code Editor</h3>
            <p>A minimal, dark theme for VS Code.</p>
            <p className="text-gray-400">
              <a href="your_everything_zen_project_link">Link</a>
            </p>
          </div>
        </section> */}

        <section className="mx-auto my-40 flex flex-col">
          <h2 className="text-2xl border-b-2 border-white pb-2 mb-4">
            Projects
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-1">
              <span className="border-b-2 border-blue-500">Kiss-vim</span>
            </h3>
            <p>
              A simple neovim distribution to quickly set up an IDE-like
              experience in your terminal.
            </p>
            <p className="text-gray-400">
              <a href="your_kiss_vim_project_link">Link</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">
              <span className="border-b-2 border-blue-500">Everything-zen</span>
            </h3>
            <p>A minimal, dark theme for VS Code.</p>
            <p className="text-gray-400">
              <a href="your_everything_zen_project_link">Link</a>
            </p>
          </div>
        </section>
      </main>
      <div className="fixed left-8 bottom-0">
        <div className="flex flex-col gap-3 space-y-4 justify-center items-center">
          {/* Email */}
          <div className="flex items-center">
            <a href="mailto:sahilhawal1996@gmail.com">
              <FaEnvelope className=" h-5 w-5 text-white" />
              {/* <p>sahilhawal1996@gmail.com</p> */}
            </a>
          </div>
          {/* GitHub */}
          <div className="flex items-center">
            <a
              href="https://github.com/sahilhawal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className=" h-5 w-5 text-white" />
              {/* <p>sahilhawal</p> */}
            </a>
          </div>
          {/* LinkedIn */}
          <div className="flex items-center">
            <a
              href="https://www.linkedin.com/in/sahil-hawal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className=" h-5 w-5 text-white" />
              {/* <p>sahil-hawal</p> */}
            </a>
          </div>
          <div className="flex items-center">
            <div className="w-0.5 h-[140px] bg-white"></div>
          </div>
        </div>
      </div>

      <footer className="text-center py-4 text-white">
        <p>&copy; 2024 Sahil Hawal. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
