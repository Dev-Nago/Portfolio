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
    <div className="bg-black h-full p-10" id="Technos">
      <div className="bg-white justify-center rounded-xl m-auto sm:w-1/2">
        <h1 className="text-3xl font-bold">Technologies</h1>
        <div className="grid grid-cols-2 gap-2 text-2xl m-5 lg:grid-cols-4">
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
