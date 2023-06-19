import { BsCloudSlashFill } from "react-icons/bs";
import s from "../assets/sass/pageError.module.scss";

export default function PageError() {
  return (
    <div className={s.container}>
      <BsCloudSlashFill />
      <p>
        The Web server received an invalid response! <br />
        Please try again later
      </p>
    </div>
  );
}