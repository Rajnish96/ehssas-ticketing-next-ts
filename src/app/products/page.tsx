"use client";
import RButton from '@/childComponent/RButton'
import React from 'react'
import styles from "./styles.module.css";

function Products() {
  return (
    <div className={styles.container}>

      <RButton
        type="submit"
        buttonText='Send Message'
        className={styles.submitButton}
        variant="outlined"
        disabled
      />

    </div>
  )
}

export default Products