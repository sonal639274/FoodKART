import { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
const [toggle, setToggle] = useState(false);
  const logout = () => {
    localStorage.removeItem("token")
    setToken("");
    navigate('/')
  }

  const handleSetMenu = (e)=>{
    setMenu(e);
    setToggle(false);
  }
  return (
    <div className='navbar'>
      <Link id="link" to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className='navbar-menu'>
        <Link id="link" to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <Link id="link" to='/about' onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About Us</Link>
        <Link id="link" to='/blog' onClick={() => setMenu("blog")} className={menu === "blog" ? "active" : ""}>Blogs</Link>
        <Link id="link" to='/contact' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</Link>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link id="link" to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ?
          <button onClick={() => setShowLogin(true)}>Login</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='nav-profile-dropdown'>
              <Link to="/myorders"><li><img src={assets.bag_icon} alt="" /><p>Orders</p></li></Link>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>

            </ul>
          </div>}
      </div>
{
  toggle ?
 "":
      <IoMdMenu className='menu-icon' onClick={()=>setToggle(prev=>!prev)}/>
}
      <div className={toggle?"toggle-menu-icon":"none"}>
      <RxCross2 className='menu-icon' onClick={()=>setToggle(prev=>!prev)}/>
        <ul className='navbar-menu-icon'>
          <Link id="link" to='/' onClick={() => handleSetMenu("home")} className={menu === "home" ? "active-menu" : ""}>Home</Link>
          <Link id="link" to='/about' onClick={() => handleSetMenu("about")} className={menu === "about" ? "active-menu" : ""}>About Us</Link>
          <Link id="link" to='/blog' onClick={() => handleSetMenu("blog")} className={menu === "blog" ? "active-menu" : ""}>Blogs</Link>
          <Link id="link" to='/contact' onClick={() => handleSetMenu("contact")} className={menu === "contact" ? "active-menu" : ""}>Contact</Link>
        </ul>
        <div className="navbar-right-toggle-icon">
          <div className="navbar-search-toggle-icon">
            <Link id="link" to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          {!token ?
            <button onClick={() => setShowLogin(true)}>Login</button>
            : <div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
              <ul className='nav-profile-dropdown'>
                <Link to="/myorders"><li><img src={assets.bag_icon} alt="" /><p>Orders</p></li></Link>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>

              </ul>
            </div>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
