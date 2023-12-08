import React, {useState, useEffect} from "react";
import BraboLogoDark from '../assets/images/logo_dark.png';
import BraboLogoLight from '../assets/images/logo_light.png';
import { Link } from "react-router-dom";
import { BASE_URL } from "../api";

function Footer() {
  const[footerOne, setFooterOne] = useState([]);
  const[footerTwo, setFooterTwo] = useState([]);
  const[footerThree, setFooterThree] = useState([]);
  const[footerFour, setFooterFour] = useState([]);
  //const[footerFive, setFooterFive] = useState([]);

  useEffect(() => {

    // Load the HubSpot form script
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    const fetchData = async () => {
      try {
        const response_footer1 = await fetch(`${BASE_URL}/footer_braboappmenu`);
        const footerOne = await response_footer1.json();
        setFooterOne(footerOne);

        // Footer2
        const response_footer2 = await fetch(`${BASE_URL}/footer_platformmenu`);
        const footerTwo = await response_footer2.json();
        setFooterTwo(footerTwo);

        // Footer3
        const response_footer3 = await fetch(`${BASE_URL}/footer_resourcemenu`);
        const footerThree = await response_footer3.json();
        setFooterThree(footerThree);

        // Footer4
        const response_footer4 = await fetch(`${BASE_URL}/footer_companymenu`);
        const footerFour = await response_footer4.json();
        setFooterFour(footerFour);

        // Footer5
        // const response_footer5 = await fetch(`${BASE_URL}/footer_partnermenu`);
        // const footerFive = await response_footer5.json();
        // setFooterFive(footerFive);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    

    fetchData();

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '44600368',
          formId: '74a10882-7607-4435-8eec-3f3065dc194f',
          target: '#hubspot-form-container',
        });
      }
    });
    return () => {
      // Cleanup on component unmount
      document.body.removeChild(script);
    };
    
  }, []);
  return (
    <div>
      {/* <!-- footer --> */}
      <footer>
        <div className="container">
          <div className="footer-logo mb-4 mobile-logo">
              <Link to="#">
                <img className="img-fluid logo-dark" src={BraboLogoDark} alt="Brabo logo" width="160" height="32" />
                <img className="img-fluid logo-light" src={BraboLogoLight} alt="Brabo logo" width="160" height="32" />
              </Link>
          </div>
          <div className="row flex-row-reverse justify-content-between">            
            <div className="col-lg-8 offset-md-1">
              <div className="links">
              
                <ul>                  
                  <p className="mb-3">Brabo Apps</p>
                  {footerOne.map( (footer_menu1, index) => (
                    <li key={index}>
                      <Link to={footer_menu1.url} >{footer_menu1.title}</Link>
                    </li>
                  ))}                  
                </ul>
                
                <ul>
                  <p className="mb-3">Platform</p>
                  {footerTwo.map( (footer_menu2, index) => (
                    <li key={index}>
                       <Link to={footer_menu2.url} >{footer_menu2.title}</Link>
                    </li>
                  ))} 
                </ul>

                <ul>
                  <p className="mb-3">Resources</p>
                  {footerThree.map( (footer_menu3, index) => (
                    <li key={index}>
                       <Link to={footer_menu3.url} >{footer_menu3.title}</Link>
                    </li>
                  ))}                   
                </ul>

                <ul>
                  <p className="mb-3">Company</p>
                  {footerFour.map( (footer_menu4, index) => (
                    <li key={index}>
                       <Link to={footer_menu4.url} >{footer_menu4.title}</Link>
                    </li>
                  ))}                  
                </ul>

                <ul>
                  <p className="mb-3">Partners</p>
                    <li>
                       <Link to="/become-partner" >Become a Partner</Link>
                    </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 mt-4 mt-md-0">
              <div className="footer-logo mb-4 desktop-logo">
                <Link to="#">
                  <img className="img-fluid logo-dark" src={BraboLogoDark} alt="Brabo logo" width="160" height="32" />
                  <img className="img-fluid logo-light" src={BraboLogoLight} alt="Brabo logo" width="160" height="32" />
                </Link>
              </div>
              <p className="mb-4">Get In Touch</p>
              {/* <div id="hubspot-form-container"></div> */}
              <div className="gradient-border mb-3">
                <input type="phone number" name="Phone number" className="form-control" placeholder="Phone Number" />
              </div>
              <div className="gradient-border mb-3">		
                <input type="email" name="email" className="form-control" placeholder="E-mail address" />
              </div>
              <div className="gradient-border mb-3">		
                <input type="address" name="address" className="form-control" placeholder="Address" />				
              </div>
              <div className="footer-submit pt-5">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
          <div className="row footer-bottom">
              <div className="col-lg-6">
                  <ul className="mb-4">
                    <li><Link to="/company/get-in-touch">Contact Us</Link></li>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link to="/terms-condition">Terms of Use</Link></li>
                  </ul>
                  <p>Beechavenue 113, 1119 RB, Schiphol-Rijik, The Netherlands.</p>
              </div>
              <div className="col-lg-6">
                <ul className="social-media">
                  <li>
                    <Link to="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="42" viewBox="0 0 41 42" fill="none">
                    <circle opacity="0.5" cx="20.5" cy="21.1055" r="20.5" fill="black"/>
                    <path d="M21.9542 31.2363V21.8263H25.1115L25.5852 18.158H21.9542V15.8163C21.9542 14.7545 22.2478 14.031 23.7721 14.031L25.713 14.0302V10.7491C25.3773 10.7055 24.2252 10.6055 22.8842 10.6055C20.0839 10.6055 18.1669 12.3147 18.1669 15.453V18.158H15V21.8263H18.1669V31.2363H21.9542Z" fill="white"/>
                    </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle opacity="0.5" cx="20.5" cy="21.1055" r="20.5" fill="black"/>
                      <path d="M30.0002 29.6082V22.8693C30.0002 19.5573 29.2872 17.0273 25.4233 17.0273C23.5603 17.0273 22.3183 18.0393 21.8123 19.0053H21.7663V17.3263H18.1094V29.6082H21.9273V23.5133C21.9273 21.9033 22.2263 20.3623 24.2043 20.3623C26.1593 20.3623 26.1823 22.1793 26.1823 23.6053V29.5852H30.0002V29.6082Z" fill="white"/>
                      <path d="M11.8984 17.3242H15.7164V29.6061H11.8984V17.3242Z" fill="white"/>
                      <path d="M13.8056 11.207C12.5866 11.207 11.5977 12.196 11.5977 13.415C11.5977 14.634 12.5866 15.646 13.8056 15.646C15.0246 15.646 16.0136 14.634 16.0136 13.415C16.0136 12.196 15.0246 11.207 13.8056 11.207Z" fill="white"/>
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">                      
                      <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle opacity="0.5" cx="20.5" cy="21.1055" r="20.5" fill="black"/>
                      <path d="M32 14.6254C31.2191 14.968 30.3869 15.195 29.5194 15.3053C30.4119 14.7724 31.0931 13.935 31.4133 12.9257C30.5812 13.4218 29.6624 13.7723 28.6833 13.9678C27.8932 13.1265 26.7671 12.6055 25.5386 12.6055C23.1551 12.6055 21.2362 14.5401 21.2362 16.9118C21.2362 17.253 21.2651 17.5812 21.3359 17.8935C17.7568 17.719 14.5897 16.0035 12.4621 13.3903C12.0907 14.0348 11.8728 14.7724 11.8728 15.5665C11.8728 17.0575 12.6406 18.3792 13.7851 19.1443C13.0934 19.1312 12.4149 18.9304 11.84 18.6141C11.84 18.6272 11.84 18.6443 11.84 18.6613C11.84 20.7535 13.3323 22.4912 15.2892 22.8915C14.9388 22.9873 14.5569 23.0333 14.1605 23.0333C13.8849 23.0333 13.6066 23.0175 13.3454 22.9598C13.9032 24.6647 15.4861 25.9182 17.3683 25.9588C15.9035 27.1047 14.0437 27.795 12.0303 27.795C11.6773 27.795 11.3386 27.7793 11 27.736C12.9071 28.9658 15.1672 29.668 17.6045 29.668C25.5267 29.668 29.858 23.1055 29.858 17.4171C29.858 17.2268 29.8514 17.043 29.8423 16.8606C30.6967 16.2542 31.4146 15.4969 32 14.6254Z" fill="white"/>
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="41" height="42" viewBox="0 0 41 42" fill="none">
                      <circle opacity="0.5" cx="20.5" cy="21.1055" r="20.5" fill="black"/>
                      <path d="M20.5 12.5305C23.3 12.5305 23.65 12.5305 24.7875 12.618C27.675 12.7055 28.9875 14.1055 29.075 16.9055C29.1625 18.043 29.1625 18.3055 29.1625 21.1055C29.1625 23.9055 29.1625 24.2555 29.075 25.3055C28.9875 28.1055 27.5875 29.5055 24.7875 29.593C23.65 29.6805 23.3875 29.6805 20.5 29.6805C17.7 29.6805 17.35 29.6805 16.3 29.593C13.4125 29.5055 12.1 28.1055 12.0125 25.3055C11.925 24.168 11.925 23.9055 11.925 21.1055C11.925 18.3055 11.925 17.9555 12.0125 16.9055C12.1 14.1055 13.5 12.7055 16.3 12.618C17.35 12.5305 17.7 12.5305 20.5 12.5305ZM20.5 10.6055C17.6125 10.6055 17.2625 10.6055 16.2125 10.693C12.3625 10.868 10.2625 12.968 10.0875 16.818C10 17.868 10 18.218 10 21.1055C10 23.993 10 24.343 10.0875 25.393C10.2625 29.243 12.3625 31.343 16.2125 31.518C17.2625 31.6055 17.6125 31.6055 20.5 31.6055C23.3875 31.6055 23.7375 31.6055 24.7875 31.518C28.6375 31.343 30.7375 29.243 30.9125 25.393C31 24.343 31 23.993 31 21.1055C31 18.218 31 17.868 30.9125 16.818C30.7375 12.968 28.6375 10.868 24.7875 10.693C23.7375 10.6055 23.3875 10.6055 20.5 10.6055ZM20.5 15.6805C17.525 15.6805 15.075 18.1305 15.075 21.1055C15.075 24.0805 17.525 26.5305 20.5 26.5305C23.475 26.5305 25.925 24.0805 25.925 21.1055C25.925 18.1305 23.475 15.6805 20.5 15.6805ZM20.5 24.6055C18.575 24.6055 17 23.0305 17 21.1055C17 19.1805 18.575 17.6055 20.5 17.6055C22.425 17.6055 24 19.1805 24 21.1055C24 23.0305 22.425 24.6055 20.5 24.6055ZM26.1 14.2805C25.4 14.2805 24.875 14.8055 24.875 15.5055C24.875 16.2055 25.4 16.7305 26.1 16.7305C26.8 16.7305 27.325 16.2055 27.325 15.5055C27.325 14.8055 26.8 14.2805 26.1 14.2805Z" fill="white"/>
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="41" height="42" viewBox="0 0 41 42" fill="none">
                      <circle opacity="0.5" cx="20.5" cy="21.1055" r="20.5" fill="black"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M27.6187 14.3203L27.6187 14.3203L27.629 14.3212C28.3687 14.3829 28.7923 14.5364 29.0529 14.7047C29.2883 14.8568 29.4984 15.0894 29.6819 15.54C30.1054 16.5801 30.2391 18.3538 30.2391 21.4669C30.2391 24.5792 30.1058 26.3803 29.6801 27.435C29.4948 27.8941 29.2854 28.1223 29.0605 28.2657C28.812 28.424 28.4009 28.5692 27.6704 28.6098L27.6634 28.6102C24.4686 28.8026 17.3032 28.8029 14.0936 28.6112C13.3641 28.5487 12.9449 28.3962 12.6862 28.2291C12.4508 28.0771 12.2407 27.8444 12.0572 27.3939C11.6337 26.3537 11.5 24.5801 11.5 21.4669C11.5 18.3538 11.6337 16.5801 12.0572 15.54C12.2407 15.0894 12.4508 14.8568 12.6862 14.7047C12.9469 14.5364 13.3705 14.3829 14.1101 14.3212L14.1102 14.3212L14.1205 14.3203C17.2915 14.0339 24.4476 14.0339 27.6187 14.3203ZM10 21.4669C10 27.5546 10.4529 29.8129 13.9855 30.1075C17.2464 30.3038 24.4927 30.3038 27.7536 30.1075C31.2862 29.9111 31.7391 27.5546 31.7391 21.4669C31.7391 15.3793 31.2862 13.121 27.7536 12.8264C24.4927 12.5318 17.2464 12.5318 13.9855 12.8264C10.4529 13.121 10 15.3793 10 21.4669ZM19.6289 24.5939C18.9625 24.955 18.1523 24.4726 18.1523 23.7147V19.2185C18.1523 18.4606 18.9625 17.9782 19.6289 18.3394L23.7766 20.5874C24.4746 20.9657 24.4746 21.9675 23.7766 22.3458L19.6289 24.5939Z" fill="white"/>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </footer>
      {/* <!-- footer --> */}
    </div>
  );
}

export default Footer;
