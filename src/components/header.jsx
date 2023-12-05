import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import LogoLight from '../assets/images/logo.png';
import { BASE_URL } from '../api';


function Header() {
const[data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/menu`);
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
               <Link to="/"><img src={LogoLight} alt="Brabo Logo" width={42} height={32} /></Link>
            </div>
            <div className="nav-link">
              {/* <ul className="main-navigation">
                <li>
                  <Link>Brabo App</Link>
                  <ul className="subMenu gradient-border">
                    <li><Link to="/brabo-app/sustainabity-app">Sustainability App</Link></li>
                    <li><Link to="#">Remote ManOps App</Link></li>
                    <li><Link to="#">Yield Optimisation App</Link></li>
                    <li><Link to="#">Assets Analytics App</Link></li>
                    <li><Link to="#">Process Analytics</Link></li>
                    <li><Link to="#">Predictive Maintenance App</Link></li>
                  </ul>
                </li>
                <li>
                  <Link>Company</Link>
                  <ul className="subMenu gradient-border">
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/our-people">Our People</Link></li>
                    <li><Link to="#">Careers</Link></li>
                    <li><Link to="#">Contact us</Link></li>
                  </ul>
                </li>
                <li>
                  <Link>Platform</Link>
                  <ul className="subMenu gradient-border">
                    <li><Link to="#">The Platform</Link></li>
                    <li><Link to="#">The Edge</Link></li>
                  </ul>
                </li>
                <li>
                  <Link>Resources</Link>
                  <ul className="subMenu gradient-border">
                    <li><Link to="#">Blog</Link></li>
                    <li><Link to="#">Case Studies</Link></li>
                    <li><Link to="#">Press Release</Link></li>
                    <li><Link to="#">Events & Webinar</Link></li>
                    <li><Link to="#">Section-A</Link></li>
                    <li><Link to="#">Section-B</Link></li>
                  </ul>
                </li>
              </ul> */}
              <ul className="main-navigation">
                {data.filter(menu => menu.post_parent === 0)
                .map( (menu, index) => (
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
