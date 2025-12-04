import "./Header.css";
import Links from "./Links";
import location from "./assets/location.svg";
import HeaderBottom from "./Bottom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-undercontainer">
          <div className="header-left">
            <select name="language" id="language">
              <option value="ua">УКР</option>
              <option value="ru">РУС</option>
            </select>
            <button type="button">
              <img width={12} height={12} src={location} alt="location" />
              Київ
            </button>
          </div>
          <Links />
        </div>
        <HeaderBottom />
      </div>
    </header>
  );
}
