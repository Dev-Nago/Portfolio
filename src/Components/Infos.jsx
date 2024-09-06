import React from "react";

function Infos() {
  return (
    <div className="h-screen text-black" id="Infos">
      <div className="h-screen flex flex-col justify-center items-center max-w-5xl">
        <h1 className="text-2xl font-semibold m-5">
          Bienvenue,
        </h1>
        <h2 className="font-mono text-lg">Je me présente Plaia Jean-Claude</h2>
        <span className="text-orange-400 text-2xl font-semibold italic m-5">
          Développeur Web Junior / Data IA enthousiaste
        </span>
        <p className="m-5">
          Passionné d'informatique au sens large depuis tout jeune, j'ai suivi une formation de Développeur Web et Web Mobile en 2021 et j'ai également effectué une découverte des différents métiers du numérique pendant 1 mois et me suis pris de passion pour l'IA et la Data. Vous pouvez retrouver ici quelques projets et technologies utilisés durant ma formation dev web.
        </p>
        <p className="font-mono text-lg m-5">Je suis actuellement en formation de développeur IA/Data chez Simplon.co et je recherche une Alternance en Développement IA / Data Analyst pour Mars 2025.</p>
      </div>
    </div>
  );
}

export default Infos;
