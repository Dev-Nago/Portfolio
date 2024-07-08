import React from "react";

function Projects({ isDarkMode }) {
  const projects = [
    {
      image: "fa-solid fa-address-card text-5xl m-2",
      title: "Projet Portfolio",
      description: "Portfolio actuel réalisé dans le cadre de l'apprentissage de ReactJS",
      technos: {
        lang: "ReactJS",
        style: "TailwindCSS",
      },
      link: "/",
      github: "https://github.com/Dev-Nago/portfolio",
    },
    {
      image: "fa-brands fa-bitcoin text-5xl m-2",
      title: "Projet Crypto",
      description: "Mini Projet durant la formation réalisé en 2j sur un Thème donné.",
      technos: {
        lang: "HTML",
        style: "CSS",
        framework: "Pain JS",
        api: "REST API",
      },
      link: "http://crypto-v2.great-site.net/",
      github: "https://github.com/Dev-Nago",
    },
    {
      image: "fa-solid fa-circle-question text-5xl m-2",
      title: "Projet Quiz",
      description: "Projet de Quiz réalisé durant mon stage de formation comprenant inscription/connexion, base de données, classement etc...",
      technos: {
        lang: "PHP",
        style: "TailwindCSS",
        framework: "Symfony",
        bdd: "SQL",
      },
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
            <p className="m-2">Technos :</p>
            <ul>
              {projects.technos.lang ? <li>{projects.technos.lang}</li> : ""}
              {projects.technos.style ? <li>{projects.technos.style}</li> : ""}
              {projects.technos.framework ? <li>{projects.technos.framework}</li> : ""}
              {projects.technos.bdd ? <li>{projects.technos.bdd}</li> : ""}
              {projects.technos.api ? <li>{projects.technos.api}</li> : ""}
            </ul>
            
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
