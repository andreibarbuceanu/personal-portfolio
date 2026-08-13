export type SkillCategory = {
  title: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript", "MySQL"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "React", "Redux", "DOM Manipulation"],
  },
  {
    title: "Electronics",
    skills: [
      "Digital Electronics",
      "Analog Circuits",
      "ESP32",
      "FPGA",
      "PCB Design",
      "Logic Design",
      "Finite State Machines",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "GitHub Pages",
      "Clion",
      "Visual Studio Code",
      "Arduino IDE",
      "Xilinx Vivado",
      "OrCAD Capture",
      "OrCAD PCB Designer",
      "Cadence Allegro",
      "MATLAB",
    ],
  },
  {
    title: "Professional Skills",
    skills: [
      "Agile",
      "Analytical Thinking",
      "Problem Solving",
      "Attention to Detail",
      "Teamwork",
    ],
  },
];

export default skillCategories;
