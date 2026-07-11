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
      "Achieved Cambridge English qualification at C1 level.",
    fullDescription:
      "Successfully passed the Cambridge English examination with Grade A, demonstrating advanced English communication skills at CEFR Level C1. Strong performance was achieved across reading, listening, speaking and use of English.",
    year: "2023",
    category: "Languages",
  },

  {
    id: 2,
    title: "Web Programming 101 Graduate",
    shortDescription:
      "Completed a web development course focused on modern frontend technologies.",
    fullDescription:
      "Successfully completed the Web Programming 101 course, gaining practical experience with HTML, CSS, JavaScript, DOM manipulation, animations and network requests used in modern web applications.",
    year: "2025",
    category: "Web Development",
  },

  {
    id: 3,
    title: "IC3 Global Standard 5 Certification",
    shortDescription:
      "Earned internationally recognized digital literacy certification.",
    fullDescription:
      "Completed the IC3 Global Standard 5 certification pathway, covering computing fundamentals, productivity applications, online communication, cybersecurity awareness and digital literacy skills.",
    year: "2023",
    category: "Certification",
  },

  {
    id: 4,
    title: "Web Development Portfolio",
    shortDescription:
      "Built a personal portfolio using React, TypeScript and CSS.",
    fullDescription:
      "I created a personal portfolio website to present my projects, technical skills and GitHub activity. The application uses React, TypeScript, reusable components, GitHub API integration, a CV section and responsive design.",
    year: "2026",
    category: "Web Development",
  },
  {
    id: 5,
    title: "Full-Stack Development",
    shortDescription:
      "Developed an auto service orders management platform.",
    fullDescription:
      "I built a full-stack web application for managing repair orders in an auto service. The project includes a modern React and TypeScript frontend, Tailwind CSS styling, a Node.js and Express backend, and a SQLite database.",
    year: "2026",
    category: "Full-Stack Development",
  },
  {
    id: 6,
    title: "Embedded Systems Experience",
    shortDescription:
      "Created hardware-based projects using ESP32 and OLED displays.",
    fullDescription:
      "I worked on embedded systems projects using ESP32 boards, physical buttons and OLED displays. One example is a Blackjack game where I implemented the game logic, user interaction and visual output directly on the microcontroller.",
    year: "2025",
    category: "Embedded Systems",
  },
  {
    id: 7,
    title: "Python Application Development",
    shortDescription:
      "Built a desktop QR code scanner and generator.",
    fullDescription:
      "I developed a Python desktop application with a Tkinter interface for generating QR codes and scanning them from images or webcam input. The project combines GUI development with image processing using OpenCV.",
    year: "2026",
    category: "Python Development",
  },
  {
    id: 8,
    title: "Engineering Education",
    shortDescription:
        "Studying Electronics, Telecommunications and Information Technology.",
    fullDescription:
        "As a student at the Faculty of Electronics, Telecommunications and Information Technology, I have worked on projects involving programming, embedded systems, databases, web development and digital systems design.",
    year: "2022-2026",
    category: "Education",
  },
];