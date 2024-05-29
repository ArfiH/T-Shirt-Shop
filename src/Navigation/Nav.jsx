import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search product"
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <div className="cart-link" >
          <Link to="/cart">
            <AiOutlineShoppingCart className="nav-icons" />
          </Link>
        </div>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
