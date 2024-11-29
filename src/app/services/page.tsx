"use client"
import React from "react";
import styles from "./styles.module.css";

const Services: React.FC = () => {
  const services = [
    { key: "web", label: "Web Development", description: "Details about Web Development..." },
    { key: "software", label: "Software Development", description: "Details about Software Development..." },
    { key: "mobile", label: "Mobile App Development", description: "Details about Mobile App Development..." },
    { key: "cloud", label: "Cloud Computing Services", description: "Details about Cloud Computing Services..." },
    { key: "consulting", label: "IT Consulting & Digitization", description: "Details about IT Consulting & Digitization..." },
    { key: "uiux", label: "UI/UX Design", description: "Details about UI/UX Design..." },
    { key: "gis", label: "GIS Consulting", description: "Details about GIS Consulting..." },
  ];

  return (
    <div className={styles.servicesContainer}>
      <div className={styles.servicesContent}>
        <div className={styles.servicesContentHeader}>Our Services</div>
        <div className={styles.servicesContentBody}>
          We offer a comprehensive suite of IT services tailored to meet the
          diverse needs of our clients nationwide. Our expertise spans across
          designing and developing intuitive digital solutions, ensuring
          seamless user experiences, harnessing the power of cloud computing,
          and providing strategic consulting for digital transformation.
        </div>
      </div>
      <div className={styles.servicesChart}>
        <svg width="100%" height="100%" viewBox="0 0 600 400">
          {/* Central "Services" label with rounded background */}
          <rect x="20" y="160" width="100" height="30" rx="15" ry="15" fill="#4A90E2" />
          <text x="70" y="180" textAnchor="middle" fill="#fff" fontSize="14">Services</text>

          {/* Lines and service nodes */}
          {services.map((service, index) => {
            const y = 50 + index * 50; // Y-position for each service node
            const controlY = 175 + (y - 175) / 2; // Control point for curve
            return (
              <g key={service.key} style={{ cursor: "pointer" }}>
                {/* Branching line from central point to each service node */}
                <path
                  d={`M120,175 Q150,${controlY} 200,${y}`}
                  fill="none"
                  stroke="#003366"
                  strokeWidth="1.5"
                  strokeDasharray="5,5"
                />
                {/* Service node circle */}
                <circle cx="200" cy={y} r="5" fill="#003366" />
                {/* Service label */}
                <text x="220" y={y + 5} fill="#4A90E2" fontSize="14">{service.label}</text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default Services;
