import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./navBar.module.css";
import logo from "../../assets/LOL_Logo.jpg";

const Navbar = ({ onSearch }) => {
  return (
    <div className={style.container}>
      <div className={style.buttons}>
        <NavLink to={"/"} className={style.home}>
          <img src={logo} className={style.logo} alt="" />
        </NavLink>
        <NavLink to={"/about"} className={style.about}>
          <button>About</button>
        </NavLink>
        <NavLink to={"/tienda"} className={style.about}>
          <button>Tienda</button>
        </NavLink>
      </div>

      <div className={style.search}>
        <SearchBar onSearch={onSearch} />
        <NavLink className={style.cart}></NavLink>
      </div>
    </div>
  );
};

export default Navbar;
