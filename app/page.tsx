"use client";
// pages/index.js
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeTab, setActiveTab] = useState("fitpage");
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  };

  const experienceData = {
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

      <nav className="fixed top-4 left-0 right-0 p-4 flex justify-end z-10">
        <a
          className={`mx-4 cursor-pointer ${
            activeSection === "home" && "text-blue-500"
          }`}
          onClick={() => scrollToSection("home")}
        >
          Home
        </a>
        <a
          className={`mx-4 cursor-pointer ${
            activeSection === "experience" && "text-blue-500"
          }`}
          onClick={() => scrollToSection("experience")}
        >
          Experience
        </a>
        <a
          className={`mx-4 cursor-pointer ${
            activeSection === "skills" && "text-blue-500"
          }`}
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </a>
        <a
          className={`mx-4 cursor-pointer ${
            activeSection === "projects" && "text-blue-500"
          }`}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </a>
        <a
          className={`mx-4 cursor-pointer ${
            activeSection === "contact" && "text-blue-500"
          }`}
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </a>
      </nav>

      <section className="bg-black h-screen flex items-center justify-around relative">
        <div className="relative w-1/2 h-full">
          <img
            src="/sahil.png"
            alt="Sahil Hawal"
            className="absolute bottom-0"
          />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div>
            <h1 className="text-9xl font-bold">Sahil Hawal</h1>
            <p className="text-4xl">Software Engineer</p>
            <p className="text-lg max-w-2xl mt-4">
              Hi! I'm a software engineer with 4.5+ years of experience in
              developing web applications and backend systems. I enjoy planning
              and building things, and I'm always up for exploring new
              technologies.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto my-20 h-[500px] container flex items-center">
        <div className="w-full">
          {/* Vertical Tabs on Left */}
          <h2 className="text-2xl border-b-2 border-white pb-2 mb-4">
            Experience
          </h2>
          <div className="flex my-9">
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
                {experienceData[activeTab].points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto mb-8">
        <h2 className="text-2xl border-b-2 border-white pb-2 mb-4">Projects</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Kiss-vim</h3>
          <p>
            A simple neovim distribution to quickly set up an IDE-like
            experience in your terminal.
          </p>
          <p className="text-gray-400">
            <a href="your_kiss_vim_project_link">Link</a>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Everything-zen</h3>
          <p>A minimal, dark theme for VS Code.</p>
          <p className="text-gray-400">
            <a href="your_everything_zen_project_link">Link</a>
          </p>
        </div>
      </section>

      <section className="container mx-auto mb-8">
        <h2 className="text-2xl border-b-2 border-white pb-2 mb-4">Projects</h2>
        {/* Add your project details here */}
      </section>

      <section className="container mx-auto mb-8">
        <h2 className="text-2xl border-b-2 border-white pb-2 mb-4">Contact</h2>
        <p>Navi Mumbai, MH India</p>
        <p>+91 7666046688</p>
        <p>Email: sahilhawal1996@gmail.com</p>
        <p>Github: sahilhawal</p>
        <p>LinkedIn: sahil-hawal</p>
      </section>

      <footer className="text-center py-4 bg-gray-800">
        <p>&copy; 2024 Sahil Hawal. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
