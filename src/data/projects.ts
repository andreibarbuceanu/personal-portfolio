export type Project = {
  title: string;
  shortDescription: string;
  fullDescription: string;
  url: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    title: "SetItUp – Social Networking Mobile App",
    shortDescription:
      "A collaborative social networking application built with React Native and Firebase during the VOIS Summer School of Engineering.",
    fullDescription:
      "A collaborative social application developed during the VOIS Summer School of Engineering. It includes authentication, user profiles, friend management, manager assignment, filtered recommendations, matching and real-time conversations, using Firebase services and an Agile, team-based development workflow.",
    url: "https://github.com/alexandrauntea/SetItUp",
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "Expo Router",
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Storage",
      "Jest",
      "React Native Testing Library",
      "Agile",
    ],
  },
  {
    title: "Website Technologies Scraper",
    shortDescription:
      "A Python tool that analyzes websites and detects technologies from their pages and script references.",
    fullDescription:
      "A Python website analysis tool developed for the Veridion internship challenge. It retrieves web pages, parses script references, resolves relative URLs and detects technologies such as WordPress and jQuery while handling HTTP errors and exporting structured results to JSON.",
    url: "https://github.com/andreibarbuceanu/website-tech-scraper",
    technologies: [
      "Python",
      "urllib",
      "HTMLParser",
      "HTTP",
      "JSON",
      "Web Scraping",
    ],
  },
  {
    title: "Automotive Service Management Web Application",
    shortDescription:
      "A full-stack platform for managing customers, vehicles, inventory and invoices in an automotive service.",
    fullDescription:
      "An academic full-stack application for managing an automotive service workflow. It provides separate manager and client dashboards for customers, vehicles, spare parts, stock and invoices, with a React frontend connected to an Express REST API and MySQL database.",
    url: "https://github.com/andreibarbuceanu/automotive-service-management-database-project",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Axios",
      "React Router",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST API",
    ],
  },
  {
    title: "Personal Portfolio Website",
    shortDescription:
      "A responsive React and TypeScript portfolio with selectable themes, project modals and GitHub activity integration.",
    fullDescription:
      "A responsive personal portfolio built with React and TypeScript to present my projects, skills, achievements and CV. It includes three selectable themes, persistent preferences, interactive project modals, GitHub activity integration and responsive layouts for desktop and mobile devices.",
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
    title: "Task Management Web Application",
    shortDescription:
      "A responsive browser-based task manager with filtering and persistent storage.",
    fullDescription:
      "A responsive task management application built with HTML, CSS and vanilla JavaScript. Users can create, complete, filter and delete tasks, while browser LocalStorage keeps the task list available after page refreshes or when the application is reopened.",
    url: "https://github.com/andreibarbuceanu/todo-web-app",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
  },
  {
    title: "QR Code Generator & Scanner",
    shortDescription:
      "A Python desktop application for generating and scanning QR codes from images or a webcam.",
    fullDescription:
      "A modular Python desktop application for generating and scanning QR codes through a Tkinter interface. It supports image and webcam scanning, QR previews, saved images, decoded links, session history and email sharing through separate reusable application modules.",
    url: "https://github.com/andreibarbuceanu/andreibarbuceanu-qr-code-app",
    technologies: ["Python", "Tkinter", "OpenCV", "QRCode", "Pillow", "SMTP"],
  },
  {
    title: "Blackjack Game on ESP32",
    shortDescription:
      "An embedded Blackjack game for ESP32 with OLED display, physical controls and audiovisual feedback.",
    fullDescription:
      "An embedded Blackjack game developed in C++ for an ESP32 microcontroller. It implements hit, stand and reset controls, displays player and dealer scores on an OLED screen, and provides visual and audio feedback using LEDs and a buzzer.",
    url: "https://github.com/andreibarbuceanu/ESP32-Blackjack",
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
    shortDescription:
      "An analog electronics project that detects nearby metal objects using an inductive sensing circuit.",
    fullDescription:
      "An analog electronics project for detecting nearby metal objects through changes in an inductive sensing circuit. The project involved circuit assembly, testing, signal analysis, operational amplifiers and practical troubleshooting to obtain a stable and reliable detection response.",
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
