import { forwardRef } from "react";
import s from "../../assets/sass/input.module.scss";

const Input = forwardRef((
  { variant, type, name, placeholder }, ref
) => {
  return (
    <input 
      ref={ref}
      className={s[variant]}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
});

export default Input;