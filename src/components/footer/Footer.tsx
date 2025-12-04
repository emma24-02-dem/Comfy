import "./Footer.css";
import Fridge from "./Fridge.svg";
import Laptop from "./Laptop.svg";
import Smartphone from "./Smartphone.svg";
import TV from "./TV.svg";
import WashingMachine from "./WashingMachine.svg";
export default function Footer() {
  return (
    <div className="footer">
      <div
        style={{
          borderTopLeftRadius: "0.5rem",
          borderBottomLeftRadius: "0.5rem",
        }}
        className="footer-item"
      >
        <img width={40} height={40} src={Smartphone} alt="Смартфони" />
        Смартфони
        <span className="separator"></span>
      </div>
      <div className="footer-item">
        <img width={40} height={40} src={TV} alt="Телевізори" />
        Телевізори
        <span className="separator"></span>
      </div>
      <div className="footer-item">
        <img width={40} height={40} src={Laptop} alt="Ноутбуки" />
        Ноутбуки
        <span className="separator"></span>
      </div>
      <div className="footer-item">
        <img width={40} height={40} src={Fridge} alt="Холодильники" />
        Холодильники
        <span className="separator"></span>
      </div>
      <div
        style={{
          borderBottomRightRadius: "0.5rem",
          borderTopRightRadius: "0.5rem",
        }}
        className="footer-item"
      >
        <img width={40} height={40} src={WashingMachine} alt="Пральні машини" />
        Пральні
        <br />
        машини
      </div>
    </div>
  );
}
