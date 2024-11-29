import styles from "./page.module.css";
import React from 'react';
import heroImg from "@/assets/heroImage.png";
import vision from "@/assets/vision.png";
import mission from "@/assets/mission.png";
import values from "@/assets/values.png";

const Home: React.FC = () => {
  return (
    <div className={styles.homeSection}>
      <div className={styles.homeHero}>
        <div className={styles.homeHeroContent}>
          <h1 className={styles.homeTitle}>When Code Meets Conservation</h1>
          <p className={styles.homeParagraph}>
            We are a team of developers and experts merging code with conservation, creating digital platforms to foster sustainable responsibility. Driven by our commitment to the environment, every line of code we write aspires towards a greener future.
          </p>
        </div>
        <div className={`${styles.homeImageContainer} ${styles.heroImage}`}>
          <img src={heroImg.src} alt="Hero" />
        </div>
      </div>

      <div className={styles.homeGrid}>
        <div className={styles.homeCard}>
          <img className={styles.homeIcon} src={vision.src} alt="Vision" />
          <h2 className={styles.homeCardTitle}>Our Vision</h2>
          <p className={styles.homeCardParagraph}>
            Envisioning a world where every organization, in any sector, adopts custom digital solutions to optimize processes, foster growth, and create a positive global impact.
          </p>
        </div>

        <div className={styles.homeCard}>
          <img className={styles.homeIcon} src={mission.src} alt="Mission" />
          <h2 className={styles.homeCardTitle}>Our Mission</h2>
          <p className={styles.homeCardParagraph}>
            Empowering businesses to streamline operations, grow sustainably, and make a meaningful impact worldwide, bridging ambition with technological advancement.
          </p>
        </div>

        <div className={styles.homeCard}>
          <img className={styles.homeIcon} src={values.src} alt="Values" />
          <h2 className={styles.homeCardTitle}>Our Values</h2>
          <p className={styles.homeCardParagraph}>
            Integrity, innovation, collaboration, and sustainability guide us. We prioritize ethical practices, foster creativity, encourage teamwork, and commit to a sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;