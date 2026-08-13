export type Project = {
  title: string;
  description: string;
  url: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    title: "Task Management Web Application",
    description:
      "A responsive to-do application built with HTML, CSS and vanilla JavaScript. Users can create tasks, mark them as completed, filter them by status and remove completed items. Task data is stored in LocalStorage and restored when the application is reopened.",
    url: "https://github.com/andreibarbuceanu/todo-web-app",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio built with React and TypeScript to present my skills, projects, education, certifications and recent GitHub activity. It includes three selectable layouts, persistent user preferences, interactive project modals and a downloadable CV.",
    url: "https://github.com/andreibarbuceanu/personal-portfolio",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "GitHub API",
      "LocalStorage",
      "GitHub Pages",
    ],
  },
  {
    title: "Automotive Service Management Web Application",
    description:
      "An academic full-stack application for managing the workflow of an automotive service. It provides separate manager and client dashboards for organizing customers, vehicles, spare parts, stock and invoices, supported by an Express REST API and a relational MySQL database.",
    url: "https://github.com/andreibarbuceanu/automotive-service-management-database-project",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST API",
    ],
  },
  {
    title: "QR Code Generator & Scanner",
    description:
      "A modular Python desktop application for generating and scanning QR codes through a Tkinter interface. It can decode codes from image files or a live webcam feed, preview and save generated QR images, open decoded links, maintain a session history and share generated codes by email.",
    url: "https://github.com/andreibarbuceanu/andreibarbuceanu-qr-code-app",
    technologies: ["Python", "Tkinter", "OpenCV", "QRCode", "Pillow", "SMTP"],
  },
  {
    title: "Blackjack Game on ESP32",
    description:
      "An embedded Blackjack game developed in C++ for an ESP32 microcontroller. The application implements the game logic, displays cards and player status on an OLED screen, and uses physical buttons for player input, combining software development with basic hardware integration.",
    url: "",
    technologies: [
      "ESP32",
      "C++",
      "Arduino IDE",
      "OLED Display",
      "Embedded Systems",
    ],
  },
  {
    title: "Inductive Metal Detector",
    description:
      "An analog electronics project that detects nearby metal objects through changes in an inductive sensing circuit. I worked on assembling and testing the circuit, analysing its signals and using operational amplifiers to obtain a reliable response. The project also involved practical troubleshooting and adjustments based on measurement results.",
    url: "",
    technologies: [
      "Analog Electronics",
      "Operational Amplifiers",
      "Circuit Design",
      "Signal Analysis",
    ],
  },
];

export default projects;
