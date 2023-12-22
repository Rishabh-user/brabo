import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import LogoDark from '../assets/images/logo_dark.png';
import LogoLight from '../assets/images/logo.png';
import { BASE_URL } from '../api';
import LogoLightMobile from '../assets/images/logo-mobile.png';

function Header() {
const[data, setData] = useState([]);
const[logoData, setLogoData] = useState([]);
const[logoLightData, setLogoLightData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch(`${BASE_URL}/primary_menu`);
        const data = await response.json();
        setData(data);

        const resp_logo = await fetch(`${BASE_URL}/widgets-area-image-light`);
        const logo = await resp_logo.json();
        setLogoData(logo);

        const resp_logolight = await fetch(`${BASE_URL}/widgets-area-image-dark`);
        const logo_dark = await resp_logolight.json();
        setLogoLightData(logo_dark);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  // Add sticky class
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

   // Toggle body classes based on darkMode state
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {    
    const body = document.querySelector('body');
    if (darkMode) {
      body.classList.add('dark'); 
    } else {
      body.classList.remove('dark'); 
    }
  }, [darkMode]);
  const toggleMode = () => {
    setDarkMode(prevMode => !prevMode);
  };
  // mobile menu
  const [navOpen, setNavOpen] = useState(false);
  const [subNavOpen, setSubNavOpen] = useState({});
  const toggleNav = () => {
    setSubNavOpen({});
  setNavOpen(!navOpen);
  };
   
  const toggleSubNav = (parentId) => {
    setSubNavOpen((prevState) => {
      const newState = { ...prevState };
      Object.keys(newState).forEach((key) => {
        if (key !== parentId) {
          newState[key] = false; // Close other submenus
        }
      });
      newState[parentId] = !prevState[parentId]; // Toggle the selected submenu
      return newState;
    });
  };
  
   // Function to decode HTML entities
   const decodeHtmlEntities = (html) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };
  const renderSubMenu = (parentId) => {
    const subMenuItems = data.filter((submenu) => submenu.menu_item_parent === parentId);
    if (!subMenuItems.length) {
      return null; // Return null if there are no submenu items
    }  
  
    return (
      <ul className={`subMenu gradient-border ${subNavOpen[parentId] ? 'subMenuOpen' : ''}`}>
        {subMenuItems.map((submenu, subindex) => (
          <li key={subindex}>
            <div onClick={() => toggleSubNav(submenu.post_name)}>
              <Link to={submenu.url}>{decodeHtmlEntities(submenu.title)}</Link>
            </div>
            {submenu.menu_item_parent && renderSubMenu(submenu.post_name)}
          </li>
        ))}
      </ul>
    );
  };



  return (
    <div className='position-relative'>
      <header className={`${isSticky ? 'sticky' : ''}`}>
        <div className="container">
          <nav className="navigation">            
              <div className="logo" onClick={toggleNav}>                
                <Link to="/">
                  {logoLightData && logoLightData.image_src_array && (
                    <img className='logo-light' src={logoLightData.image_src_array} alt="Brabo Logo" width={42} height={32} />
                  )}
                  {logoData && logoData.image_src_array && (
                    <img className='logo-dark' src={logoData.image_src_array} alt="Brabo Logo" width={42} height={32} />                  
                  )}
                </Link>
              </div>
            
            <div className={`nav-link ${navOpen ? 'open' : ''}`} >
              <ul className="main-navigation">
                {data.filter((menu) => menu.menu_item_parent === '0').map((menu, index) => (
                  <li key={index}>
                    <div onClick={() => toggleSubNav(menu.post_name)}>
                      <Link to={menu.url}>{decodeHtmlEntities(menu.title)}</Link>
                    </div>
                    {menu.menu_item_parent && renderSubMenu(menu.post_name)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav-button">
              <Link to="/schedule-demo" className="btn btn-primary">Schedule a Demo</Link>
              <div className='text-end'>
                  <div className="dark-light">
                      <label className="switch btn-color-mode-switch">
                          <input type="checkbox" name="color_mode" id="color_mode" value="1" defaultChecked={darkMode} onClick={toggleMode} />
                          <label htmlFor="color_mode" className="btn-color-mode-switch-inner">
                            <i className="fa-solid fa-moon"></i>  
                            <i className="fa fa-sun"></i>                        
                          </label>
                      </label>
                  </div>
                  <div className='language-swichter'>
                    <i className="fa-solid fa-globe me-2"></i>
                    <select name="" id="">
                      <option value="1">EN</option>
                      <option value="2">SP</option>
                      <option value="3">FR</option>
                      <option value="4">GR</option>
                    </select>
                  </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
