import "./Baner.css";
import arrowRight from "./arrow-right.svg";
import arrowLeft from "./arrow-left.svg";

export default function Baner() {
  return (
    <div className="baner">
      <button className="banner-arrow-left " type="button">
        <img width={20} height={20} src={arrowLeft} alt="arrow" />
      </button>
      <img
        src="https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://comfy.ua/media/slider/248x440 1033054.jpg/w_320"
        alt=""
      />
      <img
        src="https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://comfy.ua/media/slider/248x440_1945.jpg/w_320"
        alt=""
      />
      <img
        src="https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://comfy.ua/media/slider/248x440_1667.jpg/w_320"
        alt=""
      />
      <button className="banner-arrow-right " type="button">
        <img width={20} height={20} src={arrowRight} alt="arrow" />
      </button>
    </div>
  );
}
