type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    title: 'Task Management Web Application',
    description:
      'A responsive task management application that allows users to create, edit, complete, delete and filter tasks. It uses browser storage to preserve task data between sessions and demonstrates dynamic DOM updates and client-side state management.',
    image: 'https://via.placeholder.com/600x400?text=Task+Management+App',
    url: 'https://github.com/andreibarbuceanu/todo-web-app',
    technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
  },
  {
    title: 'Blackjack Game on ESP32',
    description:
      'An embedded systems project that recreates the Blackjack card game on an ESP32 board. It includes an OLED display, physical buttons, external components and custom game logic implemented in C++.',
    image: 'https://via.placeholder.com/600x400?text=Blackjack+ESP32',
    url: '',
    technologies: ['ESP32', 'C++', 'Arduino IDE', 'OLED Display'],
  },
  {
    title: 'QR Code Generator & Scanner',
    description:
      'A modular Python desktop application for generating and scanning QR codes from images and webcam input. It includes input validation, file processing, session history and email delivery using SMTP.',
    image: 'https://via.placeholder.com/600x400?text=QR+Code+App',
    url: 'https://github.com/andreibarbuceanu/andreibarbuceanu-qr-code-app',
    technologies: ['Python', 'Tkinter', 'OpenCV', 'QRCode', 'SMTP'],
  },
  {
    title: 'Automotive Service Management Web Application',
    description:
      'A full-stack web application for managing clients, vehicles, invoices, automotive parts and inventory. It uses a React and TypeScript frontend, an Express REST API and a relational MySQL database with CRUD operations, joins, filtering and aggregation.',
    image: 'https://via.placeholder.com/600x400?text=Automotive+Service+App',
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
  title: 'Personal Portfolio Website',
  description:
    'A responsive personal portfolio built with React and TypeScript to showcase projects, achievements, GitHub activity and a downloadable CV. It includes multiple selectable layouts with preferences stored in localStorage and was deployed using GitHub Pages.',
  image: 'https://via.placeholder.com/600x400?text=Personal+Portfolio',
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
  title: 'Inductive Metal Detector',
  description:
    'An analog electronics project designed to detect metallic objects using inductive sensing. The project involved circuit design, operational amplifiers, signal analysis, testing and troubleshooting.',
  image: 'https://via.placeholder.com/600x400?text=Metal+Detector',
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