import s from "../../assets/sass/button.module.scss";

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
      className={s[variant]}
      type={type}
      name={name}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}