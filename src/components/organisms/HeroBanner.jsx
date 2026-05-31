import "./HeroBanner.css";
import Button from "../atoms/Button";
import { featuredContent } from "../../data/mockData";

function HeroBanner() {
  return (
    <div
      className="hero-banner"
      style={{ backgroundImage: "url(" + featuredContent.image + ")" }}
      /*backgroundImage en el div en lugar de una etiqueta img porque 
      se controla mejor el tamaño y posicion con css como Dios manda*/
    >
      <div className="hero-banner__overlay" />

      <div className="hero-banner__content">
        <div className="hero-banner__rank">
          <span className="hero-banner__rank-badge">TOP</span>
          <span className="hero-banner__rank-text">
            N.º {featuredContent.rank} en TV hoy
          </span>
        </div>

        <h1 className="hero-banner__title">{featuredContent.title}</h1>
        <p className="hero-banner__description">{featuredContent.description}</p>

        <div className="hero-banner__buttons">
          <Button text="▶ Reproducir" variant="primary" />
          <Button text="ⓘ Más información" variant="secondary" />
        </div>
      </div>

      <div className="hero-banner__fade" />
    </div>
  );
}

export default HeroBanner;