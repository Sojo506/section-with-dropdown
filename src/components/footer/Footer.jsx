import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        developed by &lt;<span className={styles.sojo}>Sojo506</span>/&gt;
      </p>
    </div>
  );
};

export default Footer;
