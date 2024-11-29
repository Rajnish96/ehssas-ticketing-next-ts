"use client"
import about from "@/assets/about.png";
import RModal from "@/childComponent/RModal";
import { data } from "@/constants/ConstantData";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";
interface DataItem {
    name: string;
    director: string;
    text: string;
    image: {
        src: string;
    };
}
const About: React.FC = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={clsx(styles.gridContainer, styles.gridContainerMd)}>
                <div>
                    <h3 className={styles.title}>About Us</h3>
                </div>
                <div className={styles.imageContainer}>
                    <img
                        className={styles.responsiveImage}
                        src={about.src} // Ensure this is correct, `about.src` or `about` depending on your build tool
                        alt="Responsive Image"
                    />
                </div>
                <div>
                    <p className={styles.textBlock}>
                        {/* About content here */}
                    </p>
                </div>
            </div>
            <div
                className={clsx(
                    styles.cardGrid,
                    styles.cardGridSm,
                    styles.cardGridMd
                )}
            >
                {data?.map((item: DataItem, index: number) => (
                    <div className={styles.card} key={index}>
                        <img src={item?.image.src} className={styles.cardImage} alt={item?.name} />
                        <h4 className={styles.cardName}>{item?.name}</h4>
                        <h2 className={styles.cardDirector}>{item?.director}</h2>
                        <div className={styles.modalButtonContainer}>
                            <RModal
                                name={item?.name}
                                image={item?.image.src}
                                text={item?.text}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
