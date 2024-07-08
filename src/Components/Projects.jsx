import React from "react";

function Projects({ isDarkMode }) {
  const projects = [
    {
      image: "fa-solid fa-address-card text-5xl m-2",
      title: "Projet Portfolio",
      description: "Portfolio actuel utilisant ReactJS, TailwindCSS",
      link: "/",
      github: "https://github.com/Dev-Nago/portfolio",
    },
    {
      image: "fa-brands fa-bitcoin text-5xl m-2",
      title: "Projet Crypto",
      description: "App Crypto utilisant Plain HTML/CSS/JS et API",
      link: "http://crypto-v2.great-site.net/",
      github: "https://github.com/Dev-Nago",
    },
    {
      image: "fa-solid fa-circle-question text-5xl m-2",
      title: "Projet Quiz",
      description: "Quiz utilisant BDD SQL, Symfony et TailwindCSS",
      link: "http://quizapp.great-site.net/",
      github: "https://github.com/Dev-Nago",
    },
  ];

  return (
    <div
      className={`p-5 flex flex-col ${
        isDarkMode ? "dark" : "light"
      } justify-center items-center sm:h-screen`}
      id="Projects"
    >
      <h1 className="text-4xl font-bold my-10 mt-32">Mes Projets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, key) => (
          <div
            key={key}
            className="bg-gradient-to-br from-orange-400 to-orange-100 rounded-xl shadow-lg shadow-current w-[300px] m-5 flex flex-col hover:scale-110 transition duration-500"
          >
            <i className={project.image}></i>
            <h2 className="m-2 text-xl font-semibold">{project.title}</h2>
            <p className="m-2">{project.description}</p>
            <div className="flex flex-row p-2 m-3">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black rounded-lg p-2 m-2 w-1/2 hover:text-orange-400"
              >
                Site
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black rounded-lg p-2 m-2 w-1/2 hover:text-orange-400"
              >
                Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
