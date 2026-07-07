import React from 'react';
import styles from './about.module.css';

function AboutLeft() {
  return (
    <div>
      <div className={styles.left}>
        <p className={styles.description}>
          Diplômé en ingénierie des systèmes embarqués, je conçois des
          applications web modernes tout en gardant un fort intérêt pour les
          logiciels proches du matériel.
        </p>

        <div className={styles.avatar}>Avatar</div>

        <p className={styles.description}>
          J'aime concevoir aussi bien des applications web modernes que des
          logiciels proches du matériel. Curieux de nature, j'apprécie apprendre
          de nouvelles technologies et relever des défis techniques.
        </p>
      </div>
    </div>
  );
}

export default AboutLeft;
