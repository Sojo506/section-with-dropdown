import styles from "./dropDownStyles.module.css";
import icon_arrow_up from "../../assets/icon-arrow-up.svg";
import icon_arrow_down from "../../assets/icon-arrow-down.svg";

const DropDownItem = ({ option, optionItems, isActive, onToggle }) => {
  return (
    <div
      className={`${styles.dropdown} ${
        option === "Register" && styles.register
      }`}
    >
      <div className={styles.select} onClick={() => onToggle(option)}>
        <span>{option}</span>
        {optionItems.length !== 0 ? (
          isActive ? (
            <img src={icon_arrow_up} alt="icon arrow up" />
          ) : (
            <img src={icon_arrow_down} alt="icon arrow down" />
          )
        ) : (
          ""
        )}
      </div>
      {isActive && optionItems.length !== 0 && (
        <ul className={styles.menu}>
          {optionItems.map((item) => (
            <li
              key={item.id}
              className={`${styles.menu__item} ${
                item.active ? styles.active : ""
              }`}
            >
              {item.image && <img src={item.image} alt={`icon ${item.name}`} />}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownItem;
