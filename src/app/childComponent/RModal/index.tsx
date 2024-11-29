"use client"
import clsx from 'clsx';
import React, { useState } from 'react';
import RButton from '../RButton';
import styles from './styles.module.css';

interface RModalProps {
  name: string;
  image?: string;
  text: string;
}
const RModal: React.FC<RModalProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <RButton
        onClick={openModal}
        buttonText='Read more'
      />

      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <RButton
                onClick={closeModal}
                buttonText='Close'
              />
            </div>
            <div className={clsx(styles.modalBody, styles.modalBodySm)}>
              <div className={styles.imageContainer}>
                <img src={props.image} alt={props.name} />
                <h2 className={styles.title}>{props.name}</h2>
              </div>
              <div className={styles.text}>{props.text}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RModal;
