import cart from "./assets/cart.svg";
import alarm from "./assets/alarm.svg";
import favorite from "./assets/favorite.svg";
import user from "./assets/user.svg";
import scales from "./assets/Scales.svg";

import { useState } from "react";

// green
import cartGreen from "./assets/cart-green.svg";
import alarmGreen from "./assets/alarm-green.svg";
import favoriteGreen from "./assets/favorite-green.svg";
import userGreen from "./assets/user-green.svg";
import scalesGreen from "./assets/Scales-green.svg";

export default function Navigation() {
  const [isHovered, setIsHovered] = useState({
    user: false,
    scales: false,
    favorite: false,
    alarm: false,
    cart: false,
  });
  const handleMouseEnter = (item: string) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [item]: true,
    }));
  };

  const handleMouseLeave = (item: string) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [item]: false,
    }));
  };
  return (
    <nav className="navigation">
      <button
        onMouseEnter={() => handleMouseEnter("user")}
        onMouseLeave={() => handleMouseLeave("user")}
        className="button-nav"
        type="button"
      >
        <img
          width={20}
          height={20}
          src={isHovered.user ? userGreen : user}
          alt="user"
        />
        Увійти
      </button>

      <button
        onMouseEnter={() => handleMouseEnter("scales")}
        onMouseLeave={() => handleMouseLeave("scales")}
        className="button-nav"
        type="button"
      >
        <img
          width={20}
          height={20}
          src={isHovered.scales ? scalesGreen : scales}
          alt="scales"
        />
        Порівняння
      </button>

      <button
        onMouseEnter={() => handleMouseEnter("favorite")}
        onMouseLeave={() => handleMouseLeave("favorite")}
        className="button-nav"
        type="button"
      >
        <img
          width={20}
          height={20}
          src={isHovered.favorite ? favoriteGreen : favorite}
          alt="favorite"
        />
        Обране
      </button>

      <button
        onMouseEnter={() => handleMouseEnter("alarm")}
        onMouseLeave={() => handleMouseLeave("alarm")}
        className="button-nav"
        type="button"
      >
        <img
          width={20}
          height={20}
          src={isHovered.alarm ? alarmGreen : alarm}
          alt="alarm"
        />
        Повідомлення
      </button>

      <button
        onMouseEnter={() => handleMouseEnter("cart")}
        onMouseLeave={() => handleMouseLeave("cart")}
        type="button"
        className="cart"
      >
        <img
          width={23}
          height={23}
          src={isHovered.cart ? cartGreen : cart}
          alt="cart"
        />
        Кошик
      </button>
    </nav>
  );
}
