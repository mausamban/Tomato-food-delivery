import { NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const Nav = () => {
  return (
    <nav
      className="flex items-center justify-between px-[15vw] py-4
    h-[80px] shadow-sm shadow-[#ccc] sticky top-0 backdrop-blur-[2px] z-10"
    >
      <div className="logo">
        <img src={assets.logo} alt="Logo" className="h-7" />
      </div>

      <ul className="nav-links flex items-center gap-3 list-none text-lg">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-black" : ""
            }
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-black" : ""
            }
          >
            menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/app"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-black" : ""
            }
          >
            mobile-app
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-black " : ""
            }
          >
            contact us
          </NavLink>
        </li>
      </ul>

      <div className="nav-right flex items-center gap-6">
        <img src={assets.search_icon} className="h-6" alt="search" />
        <img src={assets.basket_icon} className="h-6" alt="cart" />
        <button className="border-2 px-4 py-1 border-red-500 rounded-full hover:bg-red-500 transition-colors hover:text-white">
          sign in
        </button>
      </div>
    </nav>
  );
};

export default Nav;
