export type Project = {
  title: string;
  description: string;
  url: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    title: 'Task Management Web Application',
    description:
      'A task manager built with HTML, CSS and JavaScript. Users can add, edit, complete, delete and filter tasks, while LocalStorage keeps them saved between visits.',
    url: 'https://github.com/andreibarbuceanu/todo-web-app',
    technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'This portfolio brings together my projects, achievements, recent GitHub activity and CV. I built it with React and TypeScript and added three themes that can be changed at any time.',
    url: 'https://github.com/andreibarbuceanu/personal-portfolio',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'GitHub API',
      'LocalStorage',
      'GitHub Pages',
    ],
  },
  {
    title: 'Automotive Service Management Web Application',
    description:
      'A full-stack app for keeping track of clients, cars, invoices, parts and stock in an automotive service. It uses a React frontend, an Express API and a MySQL database.',
    url: 'https://github.com/andreibarbuceanu/automotive-service-management-database-project',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MySQL',
      'REST API',
    ],
  },
  {
    title: 'QR Code Generator & Scanner',
    description:
      'A Python desktop app that creates QR codes and scans them from images or a webcam. It also keeps a session history and can send generated codes by email.',
    url: 'https://github.com/andreibarbuceanu/andreibarbuceanu-qr-code-app',
    technologies: ['Python', 'Tkinter', 'OpenCV', 'QRCode', 'SMTP'],
  },
  {
    title: 'Blackjack Game on ESP32',
    description:
      'A small Blackjack game built on an ESP32. The cards and game state are shown on an OLED display, and the game is controlled with physical buttons.',
    url: '',
    technologies: ['ESP32', 'C++', 'Arduino IDE', 'OLED Display'],
  },
  {
    title: 'Inductive Metal Detector',
    description:
      'An analog electronics project that uses inductive sensing to detect metal objects. I worked on the circuit, operational amplifiers, signal testing and troubleshooting.',
    url: '',
    technologies: [
      'Analog Electronics',
      'Operational Amplifiers',
      'Circuit Design',
      'Signal Analysis',
    ],
  },
];

export default projects;
