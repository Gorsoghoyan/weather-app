import { BsCloudSlashFill } from "react-icons/bs";
import styles from "../assets/sass/pageError.module.scss";

export default function PageError() {
  return (
    <div className={styles.container}>
      <BsCloudSlashFill />
      <p>
        The Web server received an invalid response! <br />
        Please try again later
      </p>
    </div>
  );
}