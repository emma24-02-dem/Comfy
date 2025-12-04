import apps from "./assets/apps.svg";
import Navigation from "./Navigation";
import search from "./assets/search.svg";

export default function HeaderBottom() {
  return (
    <div className="header-bottom">
      <div className="header-logo-catalogue">
        <img
          src="https://comfy.ua/skin/frontend/enterprise/comfy_3/modules/common/img/logo_main.svg"
          alt="Comfy - мережа магазинів побутової техніки та електроніки"
        />
        <button type="button" className="header-catalogue">
          <img width={25} height={25} src={apps} alt="apps" />
          Каталог
        </button>
      </div>
      <form className="header-search">
        <input className="header-search-input" type="text" />
        <button className="header-search-button" type="submit">
          Знайти
          <img width={20} height={20} src={search} alt="search" />
        </button>
      </form>
      <Navigation />
    </div>
  );
}
