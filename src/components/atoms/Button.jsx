// la funcion recibe el texto del boton, el tipo de boton (primario o secundario) 
// y una funcion onClick para manejar el evento de click
import "./Button.css";

function Button({ text, variant = "primary", onClick }) {
  return (
    <button className={variant === "primary" ? "btn-primary" : "btn-secondary"} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;