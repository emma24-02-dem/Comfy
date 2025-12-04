import phone from "./assets/Phone.svg";
import { useState } from "react";
import HelpMenu from "./HelpMenu";
export default function Links() {
  const [isHelpMenuVisible, setIsHelpMenuVisible] = useState(false);

  return (
    <nav className="header-right">
      <a className="header-link" href="#">
        Акції
      </a>
      <a className="header-link" href="#">
        Подарункові картки
      </a>
      <a className="header-link" href="#">
        Магазин
      </a>
      <a className="header-link" href="#">
        Доставка
      </a>
      <a className="header-link" href="#">
        Повернення
      </a>
      <a className="header-link" href="#">
        Trade-in
      </a>
      <a className="header-link" href="#">
        COMFY допомагає
      </a>
      <a
        onMouseOver={() => setIsHelpMenuVisible(true)}
        onMouseLeave={() => setIsHelpMenuVisible(false)}
        className="header-right-phone"
        href="#"
      >
        <img width={12} height={12} src={phone} alt="phone" />
        Допомога
        {isHelpMenuVisible && <HelpMenu />}
      </a>
    </nav>
  );
}
