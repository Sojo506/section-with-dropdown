import styles from "./brands.module.css";
import client_audiophile from "../../assets/client-audiophile.svg";
import client_databiz from "../../assets/client-databiz.svg";
import client_maker from "../../assets/client-maker.svg";
import client_meet from "../../assets/client-meet.svg";

const Brands = () => {
  return (
    <div className={styles.brands}>
      <img src={client_databiz} alt="image of client databiz" />
      <img src={client_audiophile} alt="image of client audiophile" />
      <img src={client_meet} alt="image of client meet" />
      <img src={client_maker} alt="image of client maker" />
    </div>
  );
};

export default Brands;
