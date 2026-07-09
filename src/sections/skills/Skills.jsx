import React from 'react';
import styles from './skills.module.css';
import Section from '../../components/ui/section/Section';
import { skills } from '../../constants/skills';
import SkillCategory from './SkillCategory';

function Skills() {
  return (
    <Section id="skills" className={styles.skills}>
      <span className={styles.badge}>COMPÉTENCES</span>

      <h2 className={styles.title}>
        Mes <span>compétences</span>
      </h2>

      <p className={styles.description}>
        Les technologies que j'utilise pour concevoir des applications web, des
        logiciels embarqués et des projets modernes.
      </p>

      <div className={styles.grid}>
        {skills.map((category) => (
          <SkillCategory key={category.id} category={category} />
        ))}
      </div>
    </Section>
  );
}

export default Skills;
