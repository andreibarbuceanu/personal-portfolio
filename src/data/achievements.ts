export interface Achievement {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  year: string;
  category: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Electronics and Telecommunications Engineering",
    shortDescription:
      "Bachelor's student in Electronics, Telecommunications and Information Technology at POLITEHNICA Bucharest.",
    fullDescription:
      "I study Electronics, Telecommunications and Information Technology at POLITEHNICA Bucharest. By the end of my second year, my coursework has included Signals and Systems, Electronic Devices, Fundamental Electronic Circuits, Digital Integrated Circuits, Microprocessor Architecture, Microcontrollers, Databases, and Data Structures and Algorithms.",
    year: "2024 – 2028",
    category: "Education",
  },
  {
    id: 3,
    title: "C, C++ and Data Structures",
    shortDescription:
      "University coursework in procedural programming, object-oriented programming and fundamental data structures.",
    fullDescription:
      "My programming coursework at ETTI started with the fundamentals of C and gradually progressed to object-oriented programming in C++. Through laboratory exercises and assignments, I worked with pointers, dynamic memory, files, classes and objects. I later applied these concepts while implementing linked lists, stacks, queues, trees and hash-based data structures, which helped me better understand how data can be organized and processed efficiently.",
    year: "2024 – 2026",
    category: "Programming",
  },
  {
    id: 4,
    title: "Database Design and SQL",
    shortDescription:
      "University coursework covering relational database design, SQL and database programming.",
    fullDescription:
      "During my second year at ETTI, I studied how relational databases are designed, queried and integrated into software applications. The course covered data modelling, relationships between entities, normalization, SQL queries, views, stored procedures, triggers and transactions. I applied these concepts in laboratory exercises using MySQL and later used them to design the database for my automotive service management application.",
    year: "2026",
    category: "Databases",
  },
  {
    id: 2,
    title: "CAD Techniques for Electronics",
    shortDescription:
      "University coursework focused on schematic design and the main stages of PCB development.",
    fullDescription:
      "During my second year at ETTI, I studied the main stages involved in designing electronic modules using CAD tools. In the laboratory, I worked with OrCAD Capture, OrCAD PCB Designer and Cadence Allegro to create electronic schematics, manage component libraries, design footprints, place components and route PCB connections. I also learned about design rule checks, THT and SMT components, and preparing a PCB project for manufacturing.",
    year: "2026",
    category: "Electronics",
  },
  {
    id: 5,
    title: "Web Programming 101 – Fundamentals",
    shortDescription:
      "Cisco Networking Academy coursework focused on building interactive web pages with HTML, CSS and JavaScript.",
    fullDescription:
      "Web Programming 101 gave me my first structured introduction to frontend development. I learned how to build and style web pages with HTML and CSS, add interactivity with JavaScript, work with the DOM and store data in the browser. The practical exercises helped me understand how the main parts of a web page work together and gave me the foundation for developing my first personal web applications.",
    year: "2025",
    category: "Web Development",
  },
  {
    id: 6,
    title: "Web Programming 102 – Modern Web Applications",
    shortDescription:
      "Cisco Networking Academy coursework focused on building structured and reusable web applications.",
    fullDescription:
      "Web Programming 102 helped me move from basic interactive pages to more structured web applications. I worked with TypeScript, React and Redux while learning how to organize an application into reusable components, manage state and build responsive user interfaces. The course gave me a stronger foundation for developing larger projects, which I later applied while building my personal portfolio.",
    year: "2026",
    category: "Web Development",
  },
  {
   id: 7,
   title: "VOIS Summer School of Software Engineering",
   shortDescription:
     "An industry-focused software engineering program combining technical workshops, Agile teamwork and the development of a collaborative React Native application.",
   fullDescription:
     "The VOIS Summer School of Software Engineering provided hands-on exposure to several areas of modern software development, including Python, frontend development, cloud technologies, DevOps, software testing, artificial intelligence and cybersecurity. Alongside the technical workshops, I worked as part of a team on SetItUp, a collaborative React Native application developed using Agile practices and rotating responsibilities across development, testing, design and other project roles. The program helped me better understand how different technologies and disciplines connect throughout the software development lifecycle and how software teams collaborate on real-world projects.",
   year: "2026",
   category: "Training",
  },
  {
    id: 8,
    title: "Cambridge English C1 Certification",
    shortDescription:
      "Cambridge English qualification demonstrating advanced proficiency at CEFR Level C1.",
    fullDescription:
      "I obtained a Cambridge English qualification at CEFR Level C1 after being assessed in reading, writing, listening and speaking. Preparing for the exam helped me develop the language skills I now use when reading technical documentation, following university courses and communicating in international academic and professional environments.",
    year: "2023",
    category: "Languages",
  },
  {
    id: 9,
    title: "IC3 Digital Literacy – Global Standard 5",
    shortDescription:
      "An internationally recognized certification covering essential computer, productivity and online skills.",
    fullDescription:
      "I earned the IC3 Global Standard 5 certification by completing its three core areas: Computing Fundamentals, Key Applications and Living Online. The certification validated my understanding of computer hardware and software, productivity applications, online communication, cloud-based tools and safe use of the internet. It gave me a solid digital foundation before I began studying more specialized programming and engineering subjects.",
    year: "2023",
    category: "Certification",
  },
];
