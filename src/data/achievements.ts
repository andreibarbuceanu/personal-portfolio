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
    title: "Cambridge English C1 Certification",
    shortDescription:
      "Cambridge English qualification at CEFR Level C1.",
    fullDescription:
      "I passed the Cambridge English exam at C1 level, covering reading, writing, listening and speaking.",
    year: "2023",
    category: "Languages",
  },
  {
    id: 2,
    title: "Web Programming 101",
    shortDescription:
      "A practical introduction to frontend development.",
    fullDescription:
      "I completed this Cisco Networking Academy course while learning HTML, CSS, JavaScript, DOM manipulation, browser storage and network requests.",
    year: "2025",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Web Programming 102",
    shortDescription:
      "The next step in learning how web applications are built.",
    fullDescription:
      "This Cisco Networking Academy course helped me continue working with JavaScript, application structure and interactive interfaces.",
    year: "2026",
    category: "Web Development",
  },
  {
    id: 4,
    title: "IC3 Global Standard 5 Certification",
    shortDescription:
      "An international certification in essential digital skills.",
    fullDescription:
      "The certification covered computer fundamentals, productivity applications, online communication and basic cybersecurity.",
    year: "2023",
    category: "Certification",
  },
  {
    id: 5,
    title: "VOIS Summer School",
    shortDescription:
      "Hands-on sessions from several areas of software development.",
    fullDescription:
      "At the VOIS Summer School, I took part in practical sessions on Python, frontend development, cloud, DevOps, testing, AI, cybersecurity and Agile.",
    year: "2026",
    category: "Training",
  },
  {
    id: 6,
    title: "Database and SQL Coursework",
    shortDescription:
      "University coursework in relational databases and SQL.",
    fullDescription:
      "I studied database design, SQL queries, keys, joins, aggregation and CRUD operations in MySQL. I used these concepts in my automotive service application.",
    year: "2026",
    category: "Databases",
  },
  {
    id: 7,
    title: "Electronics and Telecommunications Engineering",
    shortDescription:
      "Second-year bachelor's student, preparing to start my third year.",
    fullDescription:
      "I study Electronics, Telecommunications and Information Technology. My courses include programming, databases, embedded systems and digital circuits.",
    year: "2024 – 2028",
    category: "Education",
  },
  {
    id: 8,
    title: "C and C++ Programming",
    shortDescription:
      "University coursework in C, C++, data structures and object-oriented programming.",
    fullDescription:
      "Through university laboratories, I worked with C and C++, pointers, dynamic memory, files, data structures and algorithms. I also studied object-oriented programming concepts such as classes, inheritance, polymorphism and exceptions.",
    year: "2024 – 2026",
    category: "Programming",
  },
];
