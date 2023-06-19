import s from "../../assets/sass/button.module.scss";
import c from "classnames";

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
      className={c(s.button, s[variant])}
      type={type}
      name={name}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}