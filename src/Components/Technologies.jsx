import React from "react";

function Technologies({ isDarkMode }) {
  const data_front = [
    { name: "HTML", icon: "fa-brands fa-html5" },
    { name: "CSS", icon: "fa-brands fa-css3-alt" },
    { name: "React", icon: "fa-brands fa-react" },
  ];
  const data_back = [
    { name: "PHP", icon: "fa-brands fa-php" },
    { name: "NodeJS", icon: "fa-brands fa-node-js" },
    { name: "Python", icon: "fa-brands fa-python" },
    { name: "SQL", icon: "fa-solid fa-database" },
  ];

  return (
    <div
      className={`p-10 flex flex-col justify-center items-center h-screen ${
        isDarkMode ? "light" : "dark"
      }`}
      id="Technos"
    >
      <div className="border-2 border-orange-400 rounded-xl mt-32 p-5">
        <h1 className="text-3xl font-bold m-5">Technologies</h1>
        <h2 className="text-xl font-bold m-5">Front</h2>
        <div className="grid grid-cols-2 gap-2 text-2xl lg:grid-cols-4">
          {data_front.map((data, key) => (
            <div
              key={key}
              className="m-3 border-2 border-orange-400 rounded-lg"
            >
              <div>{data.name}</div>
              <div>
                <i className={data.icon}></i>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-xl font-bold m-5">Back</h2>
        <div className="grid grid-cols-2 gap-2 text-2xl lg:grid-cols-4">
          {data_back.map((data, key) => (
            <div
              key={key}
              className="m-3 border-2 border-orange-400 rounded-lg"
            >
              <div>{data.name}</div>
              <div>
                <i className={data.icon}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
