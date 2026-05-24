// Recibe un numero del 1-100 para representar progress
// El div exterior es la barra gris de fondo (100% de ancho)
// El div interior es la barra roja que crece según el porcentaje usando width: \${progress}%``
import "./ProgressBar.css";

function ProgressBar({ progress }) {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar__fill"
        style={{ width: progress + "%" }}
      />
    </div>
  );
}

export default ProgressBar;