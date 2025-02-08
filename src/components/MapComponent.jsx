import React from "react";

const MapComponent = () => {
  const data = [
    {
      id: 1,
      title: "Introduction to Programming",
      description:
        "Programming is the process of designing and building executable computer software to accomplish a specific task.",
        image: "https://i.pinimg.com/736x/15/d4/cc/15d4ccb3fe1197dc92aad654c6c212f5.jpg"
    },
    {
      id: 2,
      title: "JavaScript",
      description:
        "JavaScript is a versatile scripting language that enables dynamic interactivity on websites.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Fa9ibq6EIHg85WeA1GYNCyHbfMf3DtJ6Sw&s"
    },
    {
      id: 3,
      title: "Python",
      description:
        "Python is a popular high-level programming language known for its readability and vast ecosystem.",
        image:"data:image/png;base64,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"
    },
    {
      id: 4,
      title: "Java",
      description:
        "Java is a powerful object-oriented language widely used for web applications, mobile apps, and enterprise software.",
        image: "data:image/png;base64,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"
    },
    {
      id: 5,
      title: "C++",
      description:
        "C++ is a high-performance language used for system programming, game development, and real-time simulations.",
        image: "https://media.istockphoto.com/id/1486662537/photo/c-programming-language-for-mobile-development-concept-smartphone-on-the-laptop-keyboard-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=Bbc7ushhPMOVaR9qHDa-0FkchHFXzet900Wuc-GE9HY="
    },
    {
      id: 6,
      title: "Web Development",
      description:
        "Web development involves building websites and applications using HTML, CSS, JavaScript, and modern frameworks.",
        image: "https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 7,
      title: "Database Management",
      description:
        "Databases store and manage data efficiently. SQL and NoSQL databases like MySQL and MongoDB are widely used.",
        image: "https://plus.unsplash.com/premium_photo-1664297989345-f4ff2063b212?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGF0YWJhc2V8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 8,
      title: "Machine Learning",
      description:
        "Machine learning is a branch of AI that enables systems to learn patterns and make decisions without explicit programming.",
        image: "https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww"
    },
    {
      id: 9,
      title: "Cyber Security",
      description:
        "Cyber security focuses on protecting systems, networks, and data from digital attacks and unauthorized access.",
        image: "https://plus.unsplash.com/premium_photo-1674669009418-2643aa58b11b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3liZXIlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 10,
      title: "Cloud Computing",
      description:
        "Cloud computing allows on-demand access to computing resources and services over the internet, enhancing scalability and efficiency.",
        image: "https://plus.unsplash.com/premium_photo-1683120968693-9af51578770e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D"
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
            <div>
            <img
              src={item.image}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            </div>
            <h2 className="text-lg font-semibold text-lime-800">{item.title}</h2>
            <p className="text-gray-700 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapComponent;
