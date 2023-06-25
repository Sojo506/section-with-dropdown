import { useState } from "react";
import DropDownItem from "./DropDownItem";
import styles from "./dropDownStyles.module.css";
import { menuOptions } from "../../utils/menuOptions";

const DropdownContainer = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { features, company, careers, about } = menuOptions;
  const handleDropdownToggle = (option) => {
    if (option === activeDropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(option);
    }
  };

  return (
    <>
      <div className={styles.desktop__container}>
        <DropDownItem
          option={features.name}
          optionItems={features.options}
          isActive={activeDropdown === features.name}
          onToggle={handleDropdownToggle}
        />
        <DropDownItem
          option={company.name}
          optionItems={company.options}
          isActive={activeDropdown === company.name}
          onToggle={handleDropdownToggle}
        />
        <DropDownItem
          option={careers.name}
          optionItems={careers.options}
          isActive={activeDropdown === careers.name}
          onToggle={handleDropdownToggle}
        />
        <DropDownItem
          option={about.name}
          optionItems={about.options}
          isActive={activeDropdown === about.name}
          onToggle={handleDropdownToggle}
        />
      </div>

      <div className={styles.desktop__container__auth}>
        <DropDownItem
          option="Login"
          optionItems={[]}
          isActive={activeDropdown === "Login"}
          onToggle={handleDropdownToggle}
        />
        <DropDownItem
          option="Register"
          optionItems={[]}
          isActive={activeDropdown === "Register"}
          onToggle={handleDropdownToggle}
        />
      </div>
    </>
  );
};

export default DropdownContainer;
