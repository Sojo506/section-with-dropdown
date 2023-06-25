import styles from "./app.module.css";
import hero_mobile from "./assets/image-hero-mobile.png";
import hero_desktop from "./assets/image-hero-desktop.png";
import Navbar from "./components/navbar/Navbar";
import Brands from "./components/brands/Brands";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Función para actualizar el ancho de la ventana cuando cambie el tamaño
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agregar el evento de escucha para el cambio de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Eliminar el evento de escucha cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.image_container}>
          {windowWidth > 720 ? (
            <img
              className={styles.image__desktop}
              src={hero_desktop}
              alt="image brand desktop version"
            />
          ) : (
            <img
              className={styles.image__mobile}
              src={hero_mobile}
              alt="image brand mobile version"
            />
          )}
        </div>
        <div className={styles.main__content}>
          <h1>Make remote work</h1>

          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>

          <a href="#">Learn more</a>

          <Brands />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
