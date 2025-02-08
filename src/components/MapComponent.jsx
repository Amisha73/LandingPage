import React from "react";

const MapComponent = () => {
  const data = [
    {
      id: 1,
      title: "Introduction to Programming",
      description:
        "Programming is the process of designing and building executable computer software to accomplish a specific task.",
    },
    {
      id: 2,
      title: "JavaScript",
      description:
        "JavaScript is a versatile scripting language that enables dynamic interactivity on websites.",
    },
    {
      id: 3,
      title: "Python",
      description:
        "Python is a popular high-level programming language known for its readability and vast ecosystem.",
    },
    {
      id: 4,
      title: "Java",
      description:
        "Java is a powerful object-oriented language widely used for web applications, mobile apps, and enterprise software.",
    },
    {
      id: 5,
      title: "C++",
      description:
        "C++ is a high-performance language used for system programming, game development, and real-time simulations.",
    },
    {
      id: 6,
      title: "Web Development",
      description:
        "Web development involves building websites and applications using HTML, CSS, JavaScript, and modern frameworks.",
    },
    {
      id: 7,
      title: "Database Management",
      description:
        "Databases store and manage data efficiently. SQL and NoSQL databases like MySQL and MongoDB are widely used.",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Programming Topics</h1>

      {data.map((item) => (
        <div key={item.id} className="p-4 border-b last:border-none border-gray-200">
          <h2 className="text-lg font-semibold text-lime-600">{item.title}</h2>
          <p className="text-gray-700">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MapComponent;
