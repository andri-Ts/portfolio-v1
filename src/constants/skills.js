import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaLinux,
} from 'react-icons/fa';

import {
  SiExpress,
  SiMongodb,
  SiVite,
  SiC,
  SiCplusplus,
  SiStmicroelectronics,
  SiCmake,
} from 'react-icons/si';

export const skills = [
  {
    id: 1,
    title: 'Frontend',
    technologies: [
      { id: 1, name: 'React', icon: FaReact },
      { id: 2, name: 'JavaScript', icon: FaJs },
      { id: 3, name: 'HTML5', icon: FaHtml5 },
      { id: 4, name: 'CSS3', icon: FaCss3Alt },
      { id: 5, name: 'Vite', icon: SiVite },
    ],
  },

  {
    id: 2,
    title: 'Backend',
    technologies: [
      { id: 1, name: 'Node.js', icon: FaNodeJs },
      { id: 2, name: 'Express', icon: SiExpress },
      { id: 3, name: 'MongoDB', icon: SiMongodb },
    ],
  },

  {
    id: 3,
    title: 'Systèmes embarqués',
    technologies: [
      { id: 1, name: 'C', icon: SiC },
      { id: 2, name: 'C++', icon: SiCplusplus },
      { id: 3, name: 'STM32', icon: SiStmicroelectronics },
    ],
  },

  {
    id: 4,
    title: 'Outils',
    technologies: [
      { id: 1, name: 'Git', icon: FaGitAlt },
      { id: 2, name: 'Linux', icon: FaLinux },
      { id: 3, name: 'Docker', icon: FaDocker },
      { id: 4, name: 'CMake', icon: SiCmake },
    ],
  },
];
