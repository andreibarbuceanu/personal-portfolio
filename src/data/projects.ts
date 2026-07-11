type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
  technologies: string[]; // list of technologies used in the project
};

const projects: Project[] = [
  {
    title: 'To-Do Management Website',
    description:
      'A web application that allows users to add, edit, delete, complete and filter tasks. The project demonstrates dynamic content management, task organization and interactive user interfaces using JavaScript.',
    image: 'https://via.placeholder.com/600x400?text=To-Do+App',
    url: 'https://github.com/andreibarbuceanu/todo-web-app',
    technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
  },
  {
    title: 'Blackjack Game on ESP32',
    description:
      'An embedded systems project that recreates the Blackjack card game on an ESP32 board using an OLED display, buttons and custom game logic implemented in C++.',
    image: 'https://via.placeholder.com/600x400?text=Blackjack+ESP32',
    url: '#',
    technologies: ['ESP32', 'C++', 'Arduino IDE', 'OLED Display'],
  },
  {
    title: 'QR Code Scanner and Generator',
    description:
      'A desktop application capable of generating QR codes and scanning them from images or webcam input. The project combines a graphical user interface with image processing functionality.',
    image: 'https://via.placeholder.com/600x400?text=QR+Code+App',
    url: 'https://github.com/andreibarbuceanu/andreibarbuceanu-qr-code-app',
    technologies: ['Python', 'Tkinter', 'OpenCV', 'QRCode'],
  },
  {
    title: 'Auto Service Orders Management Website',
    description:
      'A full-stack web application developed for managing repair orders within an auto service. The system allows users to create, edit, search and track service orders through a modern interface connected to a database.',
    image: 'https://via.placeholder.com/600x400?text=Auto+Service',
    url: '#',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'SQLite'],
  },
];

export default projects;
