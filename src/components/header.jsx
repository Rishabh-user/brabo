import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import LogoDark from '../assets/images/logo_dark.png';
import LogoLight from '../assets/images/logo.png';
import { BASE_URL } from '../api';
import LogoLightMobile from '../assets/images/logo-mobile.png';

function Header() {
const[data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/primary_menu`);
        const data = await response.json();
        console.log('API Data:', data);
        setData(data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Toggle body classes based on darkMode state
    const body = document.querySelector('body');
    if (darkMode) {
      body.classList.add('dark'); // Replace 'dark-theme' with your dark mode class
    } else {
      body.classList.remove('dark'); // Replace 'dark-theme' with your dark mode class
    }
  }, [darkMode]);
  const toggleMode = () => {
    setDarkMode(prevMode => !prevMode);
  };
  // mobile menu
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  
  const [subNavOpen, setSubNavOpen] = useState({});
  const toggleSubNav = (parentId) => {
    setSubNavOpen((prevState) => ({
      ...prevState,
      [parentId]: !prevState[parentId],
    }));
  };

  return (
    <div>
      <header>
        <div className="container">
          <nav className="navigation">
            <div className="logo" onClick={toggleNav}>
               <Link to="/" >
                <img className='logo-dark desktop-logo' src={LogoDark} alt="Brabo Logo" width={180} height={35}
                
                />
                </Link>
               <Link to="/">
                  <img className='logo-light' src={LogoLight} alt="Brabo Logo" width={42} height={32} />                  
                </Link>
               <Link to="/">
                  <img className='logo-dark mobile-logo' src={LogoLightMobile} alt="Brabo Logo" width={42} height={32} />
                </Link>
            </div>
            <div className={`nav-link ${navOpen ? 'open' : ''}`} >
              <ul className="main-navigation">
                {data.filter(menu => menu.post_parent === 0).map( (menu, index) => (
                  <li key={index}>
                    <div onClick={() => toggleSubNav(menu.object_id)}>
                      <Link to={menu}>{menu.title}</Link>
                    </div>
                    <ul className={`subMenu gradient-border ${subNavOpen[menu.object_id] ? 'subMenuOpen' : ''}`} >
                       {data.filter(submenu => submenu.post_parent == menu.object_id)
                       .map( ( submenu, subindex) => (
                        <li key={subindex}><Link to={submenu.url}>{submenu.title}</Link></li>
                       ) )
                       }
                    </ul>
                  </li>
                ))
                }                
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
