export type Project = {
  title: string;
  description: string;
  url: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    title: "SetItUp – Social Networking Mobile App",
    description:
      "A collaborative social application developed during the VOIS Summer School of Engineering. SetItUp allows trusted friends to discover and connect compatible people on behalf of the users they manage. The app includes authentication, public and private profiles with photo galleries, friend management, manager assignment, filtered recommendations, likes and dislikes, automatic matches, real-time conversations, blocking controls, and responsive mobile and web interfaces. The project was developed using a role-rotation approach across software development, design, QA, DevOps, Agile practices, cybersecurity and AI.",
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
   description:
     "A Python-based website analysis tool developed for the Veridion internship challenge. It retrieves web pages, parses HTML script references, resolves relative URLs and detects technologies such as WordPress and jQuery using evidence-based rules. The project also handles HTTP and network errors and exports structured analysis results to JSON.",
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
    description:
      "An academic full-stack application for managing the workflow of an automotive service. It provides separate manager and client dashboards for organizing customers, vehicles, spare parts, stock and invoices, supported by an Express REST API and a relational MySQL database.",
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
    title: "Task Management Web Application",
    description:
      "A responsive to-do application built with HTML, CSS and vanilla JavaScript. Users can create tasks, mark them as completed, filter them by status and remove completed items. Task data is stored in LocalStorage and restored when the application is reopened.",
    url: "https://github.com/andreibarbuceanu/todo-web-app",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
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
     "An embedded Blackjack game developed in C++ for an ESP32 microcontroller. The application implements hit, stand and reset controls, displays player and dealer scores on an OLED screen, and uses LEDs and a buzzer for visual and audio feedback.",
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
