import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import LogoDark from '../assets/images/logo_dark.png';
import LogoLight from '../assets/images/logo.png';
import { BASE_URL } from '../api';


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

  return (
    <div>
      <header>
        <div className="container">
          <nav className="navigation">
            <div className="logo">
               <Link to="/"><img className='logo-dark' src={LogoDark} alt="Brabo Logo" width={180} height={35} /></Link>
               <Link to="/"><img className='logo-light' src={LogoLight} alt="Brabo Logo" width={42} height={32} /></Link>
            </div>
            <div className="nav-link">
              <ul className="main-navigation">
                {data.filter(menu => menu.post_parent === 0).map( (menu, index) => (
                  <li key={index}>
                    <Link to={menu.url}>{menu.title}</Link>
                    <ul className="subMenu gradient-border">
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
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
