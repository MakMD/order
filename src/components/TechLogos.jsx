import React from "react";
import styles from "./TechLogos.module.css";

// Прості SVG іконки технологій
const logos = [
  {
    name: "React",
    svg: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>React</title>
        <path d="M12.001 2.002c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10s10-4.477 10-10c0-5.522-4.478-10-10-10zm0 18.002c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.32-10.395c.22-.48.133-1.065-.2-1.45l-1.39-1.643c-.333-.385-.91-.53-1.404-.38l-4.223 1.25c-.495.15-1.01 1.01-1.01 1.01s-.18.39-.18.88c0 .49.18.88.18.88s.44.86 1.01 1.01l4.224 1.25c.494.15.91-.53.91-.53s.42-.64.2-1.45c-.22-.81 1.48-1.594 1.48-1.594s-1.7-.783-1.48-1.595zM12 13.33a1.33 1.33 0 1 1 0-2.66 1.33 1.33 0 0 1 0 2.66z" />
      </svg>
    ),
  },
  {
    name: "Vite",
    svg: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Vite</title>
        <path d="M22.375 16.89L13.12 1.432a2.331 2.331 0 0 0-4.06.01L.563 16.9a2.33 2.33 0 0 0 2.023 3.483h18.828a2.33 2.33 0 0 0 2.023-3.483l-1.062-.01zM12.11 4.594l6.43 11.23H5.68l6.43-11.23z" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    svg: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Supabase</title>
        <path d="M18.435 7.11a7.48 7.48 0 0 0-13.15 2.19c-.033.2-.05.39-.05.59a5.49 5.49 0 0 0-1.033 10.89h14.5a4.5 4.5 0 0 0 .2-8.98zm-1.745 6.09H7.285l4.98-6.09 4.425 6.09z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    svg: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Figma</title>
        <path d="M15 0H9C6.79 0 5 1.79 5 4v16c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4zm-4 4h2v4h-2V4zm0 6h2v4h-2v-4zm-2 4H7v-4h2v4zm0-6H7V6h2v2zm6 2h-2v4h2v-4z" />
      </svg>
    ),
  },
];

const TechLogos = () => {
  return (
    <div className={styles.logoContainer}>
      {logos.map((logo) => (
        <div key={logo.name} className={styles.logoWrapper} title={logo.name}>
          {logo.svg}
        </div>
      ))}
    </div>
  );
};

export default TechLogos;
