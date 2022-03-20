import React from "react";

function Technologies() {
  const datas = [
    { name: "HTML", icon: "fa-brands fa-html5" },
    { name: "CSS", icon: "fa-brands fa-css3-alt" },
    { name: "PHP", icon: "fa-brands fa-php" },
    {
      name: "SQL",
      icon: "fa-solid fa-database",
    },
    { name: "React", icon: "fa-brands fa-react" },
    { name: "NodeJS", icon: "fa-brands fa-node-js" },
  ];

  return (
    <div
      className="bg-black p-10 flex flex-col justify-center items-center h-screen"
      id="Technos"
    >
      <div className="bg-white rounded-xl mt-32 p-5">
        <h1 className="text-3xl font-bold m-5">Technologies</h1>
        <div className="grid grid-cols-2 gap-2 text-2xl lg:grid-cols-4">
          {datas.map((data, key) => (
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
