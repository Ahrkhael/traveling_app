"use client";
import dynamic from "next/dynamic";
import styles from "./Map.module.css";

const Map = dynamic(() => import("./MapClient"), { ssr: false });

export default function MapWrapper({ position, name }) {
  return (
    <div className={styles.divWrapper}>
      <div className={styles.mapSkeleton}></div>
      <Map position={position} name={name} />
    </div>
  );
}
