import { MdOutlineVisibility } from "react-icons/md";
import "./WidgetSmall.css";

const WidgetSmall = () => {
  return (
    <div className="widget__small">
      <span className="widget__small-title">New Join Members</span>
      <ul className="widget__small-list">
        <li className="widget__small-list-item">
          <img
            src="https://randomuser.me/api/portraits/women/26.jpg"
            alt="Rasm"
            className="item-img"
          />
          <div className="widget__small-user">
            <span className="username">Andrew Ayuu</span>
            <span className="user-title">Football Player</span>
          </div>
          <button className="widget__small-button">
            <MdOutlineVisibility className="button-icon" />
            Display
          </button>
        </li>
        <li className="widget__small-list-item">
          <img
            src="https://randomuser.me/api/portraits/women/26.jpg"
            alt="Rasm"
            className="item-img"
          />
          <div className="widget__small-user">
            <span className="username">Andrew Ayuu</span>
            <span className="user-title">Football Player</span>
          </div>
          <button className="widget__small-button">
            <MdOutlineVisibility className="button-icon" />
            Display
          </button>
        </li>
        <li className="widget__small-list-item">
          <img
            src="https://randomuser.me/api/portraits/women/26.jpg"
            alt="Rasm"
            className="item-img"
          />
          <div className="widget__small-user">
            <span className="username">Andrew Ayuu</span>
            <span className="user-title">Football Player</span>
          </div>
          <button className="widget__small-button">
            <MdOutlineVisibility className="button-icon" />
            Display
          </button>
        </li>
        <li className="widget__small-list-item">
          <img
            src="https://randomuser.me/api/portraits/women/26.jpg"
            alt="Rasm"
            className="item-img"
          />
          <div className="widget__small-user">
            <span className="username">Andrew Ayuu</span>
            <span className="user-title">Football Player</span>
          </div>
          <button className="widget__small-button">
            <MdOutlineVisibility className="button-icon" />
            Display
          </button>
        </li>
        <li className="widget__small-list-item">
          <img
            src="https://randomuser.me/api/portraits/women/26.jpg"
            alt="Rasm"
            className="item-img"
          />
          <div className="widget__small-user">
            <span className="username">Andrew Ayuu</span>
            <span className="user-title">Football Player</span>
          </div>
          <button className="widget__small-button">
            <MdOutlineVisibility className="button-icon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSmall;
