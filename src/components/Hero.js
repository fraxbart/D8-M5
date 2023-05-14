import Carousel from "react-bootstrap/Carousel";
import { carouselItems } from "..//data/carouselData";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Hero() {
  const { theme } = useContext(ThemeContext);
  return (
    <Carousel
      style={{
        backgroundColor: theme.background,
        color: theme.text,
        padding: "2rem",
        textAlign: "center",
      }}
    >
      {carouselItems.map((item) => {
        return (
          <Carousel.Item key={item.id}>
            <img className="d-block w-100" src={item.image} alt={item.title} />
            <Carousel.Caption style={{ margin: "-44px" }}>
              <h3 style={{ color: "red" }}>
                <strong>{item.title}</strong>
              </h3>
              <h5 style={{ color: "red" }}>
                <strong>{item.description}</strong>
              </h5>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Hero;
