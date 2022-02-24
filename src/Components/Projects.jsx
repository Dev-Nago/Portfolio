import React from "react";

function Projects() {
  const projects = [
    {
      image: "fa-solid fa-address-card text-5xl m-2",
      title: "Projet Portfolio",
      description: "En cours...",
      link: "/",
      github: "https://github.com/Dev-Nago/portfolio",
    },
    {
      image: "fa-brands fa-bitcoin text-5xl m-2",
      title: "Projet Crypto",
      description: "En cours...",
      link: "/",
      github: "https://github.com/Dev-Nago",
    },
    {
      image: "fa-solid fa-film text-5xl m-2",
      title: "Projet Movies",
      description: "En cours...",
      link: "/",
      github: "https://github.com/Dev-Nago",
    },
  ];

  return (
    <div className="bg-black text-white p-5 h-full" id="Projects">
      <h1 className="text-4xl m-5 font-bold">Mes Projets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, key) => (
          <div key={key} className="bg-orange-400 rounded-xl m-5 flex flex-col">
            <i className={project.image}></i>
            <h2 className="m-2 text-xl font-semibold">{project.title}</h2>
            <p className="m-2">{project.description}</p>
            <div className="flex flex-row p-2 m-3">
              <a
                href={project.link}
                className="bg-white rounded-lg text-orange-400 p-2 m-2 w-1/2"
              >
                Site
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="bg-white rounded-lg text-orange-400 p-2 m-2 w-1/2"
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
