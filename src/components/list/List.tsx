import "./List.css";
import comment from "./Comm.svg";
import star from "./Star.svg";
import cart from "./Cart.svg";
import arrowLeft from "../../baner/arrow-left.svg";
import arrowRight from "../../baner/arrow-right.svg";

export default function List() {
  return (
    <div className="list">
      <h2>Вішліст дня</h2>
      <div className="list-inside">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "1rem",
            gap: "0.5rem",
          }}
        >
          <img
            width={140}
            height={140}
            src="https://comfy.ua/media/catalog/product/cache/5/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/_/y/_yes_fun_903468__01.jpg"
            alt="yes"
          />
          <p>
            Ялинка штучна YES! Fun
            <br />
            Мальвіна 0,4 м зелена
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "0.5rem",
          }}
        >
          <i className="list-i">
            <img width={15} height={15} src={star} alt="star" />
            <p>5</p>
          </i>
          <i className="list-i">
            <img width={15} height={15} src={comment} alt="comment" />
            <p>12</p>
          </i>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <article>
            <div style={{ position: "relative" }}>
              <p className="price">149 ₴</p>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  top: "-2px",
                  fontSize: "0.7rem",
                  borderRadius: "15px",
                  right: "-20px",
                  position: "absolute",
                  padding: "0.2rem",
                  color: "red",
                  background: "rgba(255, 0, 0, 0.1)",
                }}
              >
                -20 %
              </p>
            </div>
            <p className="currentPrice">
              99 <span style={{ fontSize: "1.2rem" }}>₴</span>
            </p>
          </article>
          <button className="buy" type="button">
            <img width={25} height={25} src={cart} alt="cart" />
          </button>
        </div>
        <p style={{ fontSize: "0.8rem", letterSpacing: "1px" }}>
          <strong>+ 1 ₴</strong> на бонусний рахунок
        </p>
      </div>

      <div className="bottom-list">
        <div className="bottom-center">
          <button className="arrow" type="button">
            <img width={10} height={10} src={arrowLeft} alt="" />
          </button>
          <div className="circles">
            <span style={{ background: "#43b02a" }} className="circle"></span>
            <span
              style={{ background: "rgb(200, 200, 200)" }}
              className="circle"
            ></span>
            <span
              style={{ background: "rgb(200, 200, 200)" }}
              className="circle"
            ></span>
          </div>
          <button className="arrow" type="button">
            <img width={10} height={10} src={arrowRight} alt="" />
          </button>
        </div>
        <a href="">Переглянути усі товари</a>
      </div>
    </div>
  );
}
