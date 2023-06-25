import { forwardRef } from "react";
import styles from "../../assets/sass/input.module.scss";

const Input = forwardRef((
  { variant, type, name, placeholder }, ref
) => {
  return (
    <input 
      className={styles[variant]}
      ref={ref}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
});

export default Input;