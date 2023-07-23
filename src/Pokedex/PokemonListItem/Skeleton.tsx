import React, { CSSProperties } from "react";
import styles from "./Skeleton.module.css";

const Skeleton = ({ style }: { style: CSSProperties }) => {
  return (
    <div className={styles.skeleton} style={style}>
      Skeleton
    </div>
  );
};

export default Skeleton;
