import icon_todo from "../assets/icon-todo.svg";
import icon_planning from "../assets/icon-planning.svg";
import icon_reminders from "../assets/icon-reminders.svg";
import icon_calendar from "../assets/icon-calendar.svg";

const menuOptions = {
  features: {
    name: "Features",
    options: [
      { id: 1, name: "Todo List", image: icon_todo },
      { id: 2, name: "Calendar", image: icon_calendar },
      { id: 3, name: "Reminders", image: icon_reminders },
      { id: 4, name: "Planning", image: icon_planning },
    ],
  },
  company: {
    name: "Company",
    options: [
      { id: 5, name: "History", image: "" },
      { id: 6, name: "Our Team", image: "" },
      { id: 7, name: "Blog", image: "" },
    ],
  },
  careers: {
    name: "Careers",
    options: [],
  },
  about: {
    name: "About",
    options: [],
  },
};

export { menuOptions };
