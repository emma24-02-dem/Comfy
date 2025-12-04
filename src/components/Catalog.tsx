import "./Catalog.css";
import LightningBolt from "./assets/LightningBolt.svg";
import SmartPhone from "./assets/Smartphone.svg";
import Cooker from "./assets/Cooker.svg";
import Drill from "./assets/Drill.svg";
import CookingPot from "./assets/CookingPot.svg";
import Experiment from "./assets/Experiment.svg";
import HairDryer from "./assets/HairDryer.svg";
import Headphones from "./assets/Headphones.svg";
import Joystick from "./assets/Joystick.svg";
import Laptop from "./assets/Laptop.svg";
import Powder from "./assets/Powder.svg";
import Sofa from "./assets/Sofa.svg";
import TV from "./assets/TV.svg";
import WashingMachine from "./assets/WashingMachine.svg";
import WatchesFrontView from "./assets/WatchesFrontView.svg";

export default function Catalog() {
  return (
    <div className="catalog">
      <ul>
        <li>
          <img width={20} height={20} src={LightningBolt} alt="1" />
          Енергозабезпечення
        </li>
        <li>
          <img width={20} height={20} src={SmartPhone} alt="1" />
          Смартфони та телефони{" "}
        </li>
        <li>
          <img width={20} height={20} src={Laptop} alt="1" />
          Ноутбуки, планшети та 
          <br />
          комп'ютерна техніка{" "}
        </li>
        <li>
          <img width={20} height={20} src={Cooker} alt="1" />
          Техніка для кухні{" "}
        </li>
        <li>
          <img width={20} height={20} src={WashingMachine} alt="1" />
          Техніка для дому{" "}
        </li>
        <li>
          <img width={20} height={20} src={TV} alt="1" />
          Телевізори та мультимедіа{" "}
        </li>
        <li>
          <img width={20} height={20} src={WatchesFrontView} alt="1" />
          Смарт-годинники та гаджети{" "}
        </li>
        <li>
          <img width={20} height={20} src={Headphones} alt="1" />
          Аудіо, фото та відео{" "}
        </li>
        <li>
          <img width={20} height={20} src={Joystick} alt="1" />
          Ігрові консолі та геймінг{" "}
        </li>
        <li>
          <img width={20} height={20} src={HairDryer} alt="1" />
          Краса і здоров'я
        </li>
        <li>
          <img width={20} height={20} src={CookingPot} alt="1" />
          Посуд{" "}
        </li>
        <li>
          <img width={20} height={20} src={Experiment} alt="1" />
          Побутова хімія{" "}
        </li>
        <li>
          <img width={20} height={20} src={Sofa} alt="1" />
          Текстиль та декор{" "}
        </li>
        <li>
          <img width={20} height={20} src={LightningBolt} alt="1" />
          Дім, відпочинок та зоотовари{" "}
        </li>
        <li>
          <img width={20} height={20} src={Powder} alt="1" />
          Дитячі товари{" "}
        </li>
        <li>
          <img width={20} height={20} src={Drill} alt="1" />
          Інструменти і автотовари{" "}
        </li>
      </ul>
    </div>
  );
}
