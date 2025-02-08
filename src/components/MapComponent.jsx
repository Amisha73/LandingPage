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
    {
      id: 8,
      title: "Machine Learning",
      description:
        "Machine learning is a branch of AI that enables systems to learn patterns and make decisions without explicit programming.",
    },
    {
      id: 9,
      title: "Cyber Security",
      description:
        "Cyber security focuses on protecting systems, networks, and data from digital attacks and unauthorized access.",
    },
    {
      id: 10,
      title: "Cloud Computing",
      description:
        "Cloud computing allows on-demand access to computing resources and services over the internet, enhancing scalability and efficiency.",
    },
  ];

  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Programming Topics
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-lime-100 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <h2 className="text-lg font-semibold text-lime-800">{item.title}</h2>
            <p className="text-gray-700 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapComponent;
