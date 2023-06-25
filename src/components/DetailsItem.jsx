import styles from "../assets/sass/weatherDetails.module.scss";

export default function DetailsItem({ Icon, title, value, wall }) {
  return (
    <div className={styles.detailsItem}>
      <Icon />
      <span><span className={styles.title}>{title}: </span>{value}</span>
      <span className={styles.wall}>{wall && "|"}</span>
    </div>
  );
}