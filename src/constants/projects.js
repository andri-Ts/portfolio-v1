import trouvetonnidImage from '../assets/trouvetonnid.png';
import fluideGif from '../assets/fluide.gif';

export const projects = [
  {
    id: 1,
    title: 'Trouve Ton Nid',
    description:
      "Application fullstack de gestion d'annonces immobilières avec messagerie en temps réel entre utilisateurs.",
    image: trouvetonnidImage,
    technologies: ['React', 'Node.js', 'MongoDB', 'JWT', 'WebSocket'],
    github: 'https://github.com/andri-Ts/TrouveTonNid-app',
    demo: 'https://trouve-ton-nid.vercel.app/',
    featured: true,
  },

  {
    id: 2,
    title: 'Fluid Simulation',
    description:
      'Simulation de fluide 2D temps réel avec moteur physique basé sur une grille cellulaire et rendu SDL2.',
    image: fluideGif,
    technologies: ['C', 'SDL2', 'Linux'],
    github: 'https://github.com/andri-Ts/fluide-simulation',
    demo: '',
    featured: true,
  },

  {
    id: 3,
    title: 'Moteur de base de données',
    description:
      "Développement d'un moteur SQL léger en C avec stockage binaire, gestion mémoire et exécution de requêtes.",
    image: null,
    technologies: ['C', 'Linux', 'SQL'],
    github: '',
    demo: '',
    featured: true,
  },

  {
    id: 4,
    title: 'Firmware STM32 Bare-metal',
    description:
      "Développement d'un firmware STM32 sans HAL avec configuration directe des registres, interruptions et timers.",
    image: null,
    technologies: ['C', 'STM32', 'Bare-metal'],
    github: '',
    demo: '',
    featured: true,
  },
];
