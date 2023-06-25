import styles from "../../assets/sass/button.module.scss";
import classnames from "classnames";

export default function Button({
  variant,
  children,
  type,
  name,
  disabled,
  onClick
}) {
  return (
    <button 
      className={classnames(
        styles.button, 
        styles[variant]
      )}
      type={type}
      name={name}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}