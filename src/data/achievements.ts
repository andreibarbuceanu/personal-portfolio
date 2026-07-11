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
      "Earned a Cambridge English qualification at CEFR Level C1.",
    fullDescription:
      "Successfully completed the Cambridge English examination, demonstrating advanced communication skills in reading, writing, listening and speaking at CEFR Level C1.",
    year: "2023",
    category: "Languages",
  },
  {
    id: 2,
    title: "Web Programming 101",
    shortDescription:
      "Completed a practical course covering frontend web development fundamentals.",
    fullDescription:
      "Completed the Web Programming 101 course through Cisco Networking Academy, gaining practical experience with HTML, CSS, JavaScript, DOM manipulation, browser storage and network requests.",
    year: "2025",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Web Programming 102",
    shortDescription:
      "Expanded my knowledge of modern web application development.",
    fullDescription:
      "Completed the Web Programming 102 course through Cisco Networking Academy, strengthening my understanding of JavaScript, application structure, interactive interfaces and modern web development practices.",
    year: "2026",
    category: "Web Development",
  },
  {
    id: 4,
    title: "IC3 Global Standard 5 Certification",
    shortDescription:
      "Earned an internationally recognized digital literacy certification.",
    fullDescription:
      "Completed the IC3 Global Standard 5 certification, covering computing fundamentals, productivity applications, online communication, cybersecurity awareness and essential digital skills.",
    year: "2023",
    category: "Certification",
  },
  {
    id: 5,
    title: "VOIS Summer School",
    shortDescription:
      "Participated in hands-on sessions covering software development and emerging technologies.",
    fullDescription:
      "Participated in the VOIS Summer School, attending practical sessions on Python, frontend development, cloud computing, DevOps, quality assurance, artificial intelligence, cybersecurity, Agile practices and software architecture.",
    year: "2026",
    category: "Training",
  },
  {
    id: 6,
    title: "Database and SQL Coursework",
    shortDescription:
      "Studied relational databases and developed a full-stack MySQL application.",
    fullDescription:
      "Completed university coursework focused on relational database design, SQL queries, primary and foreign keys, joins, aggregation and CRUD operations using MySQL. Applied these concepts in an automotive service management application.",
    year: "2026",
    category: "Databases",
  },
  {
    id: 7,
    title: "Electronics and Telecommunications Engineering",
    shortDescription:
      "Pursuing a bachelor's degree at POLITEHNICA Bucharest.",
    fullDescription:
      "Studying Electronics, Telecommunications and Information Technology at the National University of Science and Technology POLITEHNICA Bucharest. Relevant areas include programming, databases, embedded systems, digital circuits and web development.",
    year: "2024 – 2028",
    category: "Education",
  },
];