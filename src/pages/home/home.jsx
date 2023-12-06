import React, {useState, useEffect} from "react";
import BraboLogo from '../../assets/images/logo_light.png';
//import Video from '../../assets/video/banner-video.mp4';
import CaseStudy from '../../assets/images/case-study-img.png';
import HowBrabo from '../../assets/images/how-brabo-img.png';
import DataUnlock from '../../assets/images/unlock-data-img.png';
import ContinousInnovation from '../../assets/images/Continuous-Innovation-img.png';
import SunnyLandscape from '../../assets/images/sunny-landscape.png'
import ThirdRendering from '../../assets/images/3d-rendering.png';
import EngineerUse from '../../assets/images/engineer-use.png';
import { Link } from "react-router-dom";
// import Sustainability from '../../assets/images/Energy-Monitoring-Carousel-screen-2.png';
// import RemoteManOps from '../../assets/images/Remote-ManOps-Carousel-screen-2.png';
// import YieldOptimisation from '../../assets/images/Yield-optimisation-Carousel-screen-2.png';
// import ProcessAnalytics from '../../assets/images/Process-Analytics.png';
// import AssetAnalytics from '../../assets/images/Asset-Analytics.png';
// import PredictiveMaintenance from '../../assets/images/Predictive-Maintenance.png'


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BASE_URL } from "../../api";
import { useParams } from 'react-router-dom';


function Home() {
	const options = {
		items: 3,
		autoplay:true,
		autoplayTimeout: 3000,
		loop: true,
		margin: 20,
		dots:false,
		nav: true,
		navText: [
			"<span class='custom-prev'><i class='fa-solid fa-angle-left'></i></span>",
			"<span class='custom-next'><i class='fa-solid fa-angle-right'></i></span>"
		  ],
	  };
	const options1 = {
		items: 3,
		autoplay: true,
		autoplayTimeout: 3000,
		loop: true,
		center:true,
		margin: 10,
		dots:false,
		nav: false,		
	}; 
	const options2 = {
		items: 3,
		autoplay: true,
		autoplayTimeout: 3000,
		loop: true,
		center:true,
		margin: 20,
		dots:true,
		nav: false,		
	}; 

	const { slug } = useParams();
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        const fetchServiceBySlug = async () => {
            try {
                const response = await fetch(`${BASE_URL}/services`);
                if (response.ok) {
                    const data = await response.json();
                    if (Array.isArray(data)) {
						setServiceData(data);
					  }
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchServiceBySlug();
    }, [slug]);	
  return (
  <>
  {/* Banner Start */}
	<div className="col-md-12 main_banner">
		<div className="container">
			<div className="row flex-row-reverse align-items-end banner-gap">
				<div className="col-md-6">
					<OwlCarousel className='owl-theme' {...options1}>
					{Array.isArray(serviceData) &&
        				serviceData.map((item) => (
						<div className="item" key={item.id}>
							<img className="img-fluid" src={item.featured_image} alt={item.title.rendered} />	
						</div>
					))}
					</OwlCarousel>
				</div>
				<div className="col-md-6">
					<Link to="#" className="banner-logo">
						<img className="img-fluid" src={BraboLogo} alt="Brabo logo" width="456" height="80" />
					</Link>
					<br />

					<Link to="#" className="btn btn-primary">Schedule a demo</Link>
				</div>
			</div>
			<div className="animation-line">
				<div className="line line1">
					<svg xmlns="http://www.w3.org/2000/svg" width="17" height="75" viewBox="0 0 17 75" fill="none">
						<path fillRule="evenodd" clipRule="evenodd" d="M9.86654 16.8487C13.8911 16.1872 16.9613 12.6925 16.9613 8.48067C16.9613 3.79693 13.1644 0 8.48067 0C3.79693 0 0 3.79693 0 8.48067C0 12.6925 3.07036 16.1872 7.09493 16.8487V74.279H9.86654V16.8487ZM14.1897 8.48067C14.1897 11.6337 11.6337 14.1897 8.48067 14.1897C5.32764 14.1897 2.77161 11.6337 2.77161 8.48067C2.77161 5.32764 5.32764 2.77161 8.48067 2.77161C11.6337 2.77161 14.1897 5.32764 14.1897 8.48067Z" fill="url(#paint0_linear_1435_19199)" fillOpacity="0.53"/>
						<defs>
							<linearGradient id="paint0_linear_1435_19199" x1="8.48068" y1="-1.1204e-07" x2="24.9444" y2="74.279" gradientUnits="userSpaceOnUse">
							  <stop stopColor="white"/>
							  <stop offset="1" stopColor="white" stopOpacity="0"/>
							</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="line line2">
					<svg xmlns="http://www.w3.org/2000/svg" width="55" height="120" viewBox="0 0 55 120" fill="none">
						<path fillRule="evenodd" clipRule="evenodd" d="M46.9704 18.2068C51.3693 17.5389 54.7402 13.7409 54.7402 9.15547C54.7402 4.09905 50.6412 0 45.5848 0C40.5283 0 36.4293 4.09905 36.4293 9.15547C36.4293 13.7408 39.8001 17.5388 44.1988 18.2067V78.8035H0V119.179H2.77161V81.5751H46.9704V18.2068ZM51.9686 9.15547C51.9686 12.6812 49.1105 15.5393 45.5848 15.5393C42.059 15.5393 39.2009 12.6812 39.2009 9.15547C39.2009 5.62976 42.059 2.77161 45.5848 2.77161C49.1105 2.77161 51.9686 5.62976 51.9686 9.15547Z" fill="url(#paint0_linear_1435_19200)" fillOpacity="0.53"/>
						<defs>
							<linearGradient id="paint0_linear_1435_19200" x1="54.6006" y1="-4.23472e-07" x2="27.3701" y2="119.179" gradientUnits="userSpaceOnUse">
							  <stop stopColor="white"/>
							  <stop offset="1" stopColor="white" stopOpacity="0"/>
							</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="line line3">
					<svg xmlns="http://www.w3.org/2000/svg" width="55" height="120" viewBox="0 0 55 120" fill="none">
						<path fillRule="evenodd" clipRule="evenodd" d="M7.76978 100.972C3.37089 101.64 -4.00866e-07 105.438 0 110.024C4.42047e-07 115.08 4.09905 119.179 9.15547 119.179C14.2119 119.179 18.3109 115.08 18.3109 110.024C18.3109 105.438 14.9402 101.64 10.5414 100.972L10.5414 40.3755L54.7402 40.3755L54.7402 0L51.9686 2.42301e-07L51.9686 37.6039L7.76978 37.6039L7.76978 100.972ZM2.77161 110.024C2.7716 106.498 5.62976 103.64 9.15547 103.64C12.6812 103.64 15.5393 106.498 15.5393 110.024C15.5393 113.549 12.6812 116.407 9.15547 116.407C5.62976 116.407 2.77161 113.549 2.77161 110.024Z" fill="url(#paint0_linear_1435_19201)" fillOpacity="0.53"/>
						<defs>
							<linearGradient id="paint0_linear_1435_19201" x1="8.86941" y1="119.179" x2="65.4101" y2="-3.62939e-06" gradientUnits="userSpaceOnUse">
							  <stop stopColor="white"/>
							  <stop offset="1" stopColor="white" stopOpacity="0"/>
							</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="line line4">
					<svg xmlns="http://www.w3.org/2000/svg" width="197" height="109" viewBox="0 0 197 109" fill="none">
						<path fillRule="evenodd" clipRule="evenodd" d="M0 0V108.924H115.022V60.6981H178.28C178.823 65.2362 182.685 68.7542 187.37 68.7542C192.426 68.7542 196.525 64.6551 196.525 59.5987C196.525 54.5423 192.426 50.4432 187.37 50.4432C182.884 50.4432 179.152 53.6686 178.367 57.9265H112.25V106.152H2.77161V0H0ZM193.754 59.5987C193.754 63.1244 190.895 65.9826 187.37 65.9826C183.844 65.9826 180.986 63.1244 180.986 59.5987C180.986 56.073 183.844 53.2148 187.37 53.2148C190.895 53.2148 193.754 56.073 193.754 59.5987Z" fill="url(#paint0_linear_1435_19202)" fillOpacity="0.53"/>
						<defs>
							<linearGradient id="paint0_linear_1435_19202" x1="190.132" y1="51.5519" x2="-36.8624" y2="46.2858" gradientUnits="userSpaceOnUse">
							  <stop stopColor="white"/>
							  <stop offset="1" stopColor="white" stopOpacity="0"/>
							</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="line line5">
					<svg xmlns="http://www.w3.org/2000/svg" width="75" height="18" viewBox="0 0 75 18" fill="none">
						<path fillRule="evenodd" clipRule="evenodd" d="M17.4151 7.17142C16.7536 3.14687 13.2589 0.0765379 9.04708 0.0765381C4.36333 0.0765383 0.566406 3.87347 0.566406 8.55721C0.566406 13.241 4.36333 17.0379 9.04708 17.0379C13.2589 17.0379 16.7536 13.9676 17.4151 9.94303L74.8453 9.94302V7.17142L17.4151 7.17142ZM9.04708 2.84814C12.2001 2.84814 14.7562 5.40418 14.7562 8.55721C14.7562 11.7102 12.2001 14.2663 9.04708 14.2663C5.89405 14.2663 3.33801 11.7102 3.33801 8.55721C3.33801 5.40418 5.89405 2.84814 9.04708 2.84814Z" fill="url(#paint0_linear_1435_19203)" fillOpacity="0.53"/>
						<defs>
							<linearGradient id="paint0_linear_1435_19203" x1="0.566406" y1="8.39136" x2="74.8454" y2="8.39135" gradientUnits="userSpaceOnUse">
							  <stop stopColor="white"/>
							  <stop offset="1" stopColor="white" stopOpacity="0"/>
							</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="line line6">
					<svg xmlns="http://www.w3.org/2000/svg" width="59" height="124" viewBox="0 0 59 124" fill="none">
						<path fillRule="evenodd" clipRule="evenodd" d="M9.15547 0C14.2119 6.02973e-08 18.3109 4.09905 18.3109 9.15547C18.3109 13.8398 14.793 17.7025 10.2549 18.2456L10.2549 81.5035H58.4809V123.336H55.7093V84.2751H7.48333L7.48333 18.1586C3.2254 17.3728 -5.3487e-08 13.6408 0 9.15547C6.02973e-08 4.09905 4.09904 -6.02973e-08 9.15547 0ZM9.15547 2.7716C12.6812 2.7716 15.5393 5.62976 15.5393 9.15547C15.5393 12.6812 12.6812 15.5393 9.15547 15.5393C5.62976 15.5393 2.77161 12.6812 2.77161 9.15547C2.77161 5.62976 5.62976 2.7716 9.15547 2.7716Z" fill="url(#paint0_linear_1435_19204)" fillOpacity="0.53"/>
						<defs>
							<linearGradient id="paint0_linear_1435_19204" x1="29.2404" y1="0" x2="58.758" y2="123.614" gradientUnits="userSpaceOnUse">
						  <stop stopColor="white"/>
						  <stop offset="1" stopColor="white" stopOpacity="0"/>
						</linearGradient>
						</defs>
					</svg>
				</div>
			</div>
		</div>
	</div>
	{/* Banner End */}

  {/* <!-- Business Value --> */}
	<section className="col-md-12 business-value text-center">
		<div className="container">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<h2>Unlocking <br /> Business Value</h2>
					<p className="mb-5">From visibility to actionable insights across your manufacturing operations. Leverage  Brabo Apps to achieve unparalleled production efficiency,
						shine production quality and surpass your sustainability targets.</p>
					<Link to="#" className="btn btn-primary">Get Started</Link>
				</div>
			</div>
			<div className="gredient-line">
				<div className="line line1">
					<svg width="355" height="197" viewBox="0 0 355 197" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M0 0V196.5H207.5V109.5H321.618C322.598 117.687 329.566 124.033 338.017 124.033C347.138 124.033 354.533 116.638 354.533 107.517C354.533 98.3947 347.138 91 338.017 91C329.925 91 323.192 96.8186 321.775 104.5H202.5V191.5H5V0H0ZM349.533 107.517C349.533 113.877 344.377 119.033 338.017 119.033C331.656 119.033 326.5 113.877 326.5 107.517C326.5 101.156 331.656 96 338.017 96C344.377 96 349.533 101.156 349.533 107.517Z" fill="url(#paint0_linear_1562_2612)" fillOpacity="0.53"/>
						<defs>
						<linearGradient id="paint0_linear_1562_2612" x1="343" y1="93" x2="-66.5" y2="83.5" gradientUnits="userSpaceOnUse">
						<stop stopColor="#FF5C00"/>
						<stop offset="1" stopColor="white" stopOpacity="0"/>
						</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="line line2">
					<svg width="99" height="215" viewBox="0 0 99 215" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M84.7351 32.8452C92.6707 31.6404 98.7519 24.7886 98.7519 16.5166C98.7519 7.39471 91.3571 0 82.2353 0C73.1135 0 65.7188 7.39471 65.7188 16.5166C65.7188 24.7885 71.7997 31.6401 79.7351 32.8451V142.162H0V215H5V147.162H84.7351V32.8452ZM93.7519 16.5166C93.7519 22.877 88.5957 28.0331 82.2353 28.0331C75.8749 28.0331 70.7188 22.877 70.7188 16.5166C70.7188 10.1561 75.8749 5 82.2353 5C88.5957 5 93.7519 10.1561 93.7519 16.5166Z" fill="url(#paint0_linear_1562_2610)" fillOpacity="0.53"/>
						<defs>
						<linearGradient id="paint0_linear_1562_2610" x1="98.5" y1="-7.63946e-07" x2="49.3759" y2="215" gradientUnits="userSpaceOnUse">
						<stop stopColor="#2F54EB"/>
						<stop offset="1" stopColor="white" stopOpacity="0"/>
						</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="line line3">
					<svg width="32" height="134" viewBox="0 0 32 134" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M18.2993 30.3952C25.5596 29.2018 31.0984 22.8973 31.0984 15.2992C31.0984 6.84969 24.2487 0 15.7992 0C7.34969 0 0.5 6.84969 0.5 15.2992C0.5 22.8974 6.03895 29.2019 13.2993 30.3952V134H18.2993V30.3952ZM26.0984 15.2992C26.0984 20.9873 21.4873 25.5984 15.7992 25.5984C10.1111 25.5984 5.5 20.9873 5.5 15.2992C5.5 9.61111 10.1111 5 15.7992 5C21.4873 5 26.0984 9.61111 26.0984 15.2992Z" fill="url(#paint0_linear_1562_2609)" fillOpacity="0.53"/>
						<defs>
						<linearGradient id="paint0_linear_1562_2609" x1="15.7992" y1="-2.02122e-07" x2="45.5" y2="134" gradientUnits="userSpaceOnUse">
						<stop stopColor="#FF5C00"/>
						<stop offset="1" stopColor="white" stopOpacity="0"/>
						</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="line line4">
					<svg width="100" height="215" viewBox="0 0 100 215" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M14.5168 182.155C6.58112 183.36 0.499999 190.211 0.5 198.483C0.500001 207.605 7.89472 215 17.0166 215C26.1384 215 33.5331 207.605 33.5331 198.483C33.5331 190.211 27.4522 183.36 19.5168 182.155L19.5168 72.8378L99.2519 72.8378L99.2518 0L94.2518 4.37114e-07L94.2519 67.8378L14.5168 67.8378L14.5168 182.155ZM5.5 198.483C5.5 192.123 10.6561 186.967 17.0166 186.967C23.377 186.967 28.5331 192.123 28.5331 198.483C28.5331 204.844 23.377 210 17.0166 210C10.6561 210 5.5 204.844 5.5 198.483Z" fill="url(#paint0_linear_1562_2611)" fillOpacity="0.53"/>
						<defs>
						<linearGradient id="paint0_linear_1562_2611" x1="16.5005" y1="215" x2="118.5" y2="-3.42016e-06" gradientUnits="userSpaceOnUse">
						<stop stopColor="#FF5C00"/>
						<stop offset="1" stopColor="white" stopOpacity="0"/>
						</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="line line5">
					<svg width="135" height="31" viewBox="0 0 135 31" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M30.8952 12.7992C29.7019 5.5389 23.3974 -3.32126e-07 15.7992 0C7.34969 3.6934e-07 0.5 6.84969 0.5 15.2992C0.5 23.7487 7.34969 30.5984 15.7992 30.5984C23.3974 30.5984 29.7018 25.0595 30.8952 17.7992L134.5 17.7992V12.7992L30.8952 12.7992ZM15.7992 5C21.4873 5 26.0984 9.61111 26.0984 15.2992C26.0984 20.9873 21.4873 25.5984 15.7992 25.5984C10.1111 25.5984 5.5 20.9873 5.5 15.2992C5.5 9.61111 10.1111 5 15.7992 5Z" fill="url(#paint0_linear_1562_2613)" fillOpacity="0.53"/>
						<defs>
						<linearGradient id="paint0_linear_1562_2613" x1="0.5" y1="15" x2="134.5" y2="15" gradientUnits="userSpaceOnUse">
						<stop stopColor="#2F54EB"/>
						<stop offset="1" stopColor="white" stopOpacity="0"/>
						</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="line line6">
					<svg width="106" height="216" viewBox="0 0 106 216" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M17.0166 0C26.1384 1.08777e-07 33.5331 7.39471 33.5331 16.5166C33.5331 24.9671 27.1867 31.9354 19 32.9152L19 147.033H106V222.5H101V152.033H14L14 32.7583C6.31864 31.3407 0.5 24.6081 0.5 16.5166C0.5 7.39471 7.89471 -1.08777e-07 17.0166 0ZM17.0166 5C23.377 5 28.5331 10.1561 28.5331 16.5166C28.5331 22.877 23.377 28.0331 17.0166 28.0331C10.6561 28.0331 5.5 22.877 5.5 16.5166C5.5 10.1561 10.6561 5 17.0166 5Z" fill="url(#paint0_linear_1562_2614)" fillOpacity="0.53"/>
						<defs>
						<linearGradient id="paint0_linear_1562_2614" x1="53.25" y1="0" x2="106.5" y2="223" gradientUnits="userSpaceOnUse">
						<stop stopColor="#2F54EB"/>
						<stop offset="1" stopColor="white" stopOpacity="0"/>
						</linearGradient>
						</defs>
					</svg>
				</div>
			</div>
			<OwlCarousel className='owl-theme' {...options2}>
			{Array.isArray(serviceData) &&
        		serviceData.map((item) => (
				<div className='item' key={item.id}>
					<div className="">
						<img className="img-fluid" src={item.featured_image} alt={item.title.rendered} width="423" height="242"/>
					</div>
					<div className="business-value-slider gradient-border">							
						<div className="content">								
							<div className="mt-3">
								<h3>{item.title.rendered}</h3>
								<p className="mb-5" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered || '' }}></p>
								<Link to="/service/:slug" className="btn btn-outline-primary btn-sm btn-orange">Learn More</Link>
							</div>
						</div>
					</div>
				</div>
			))}
			</OwlCarousel>
		</div>
	</section>
	{/* <!-- Business Value --> */}

	
  {/* <!-- Case Study --> */}
	<section className="col-md-12 case-study">
		<div className="container">
			<div className="row flex-row-reverse align-items-center">
				<div className="col-md-6">
					<div className="case-study-img text-center">
						<img className="img-fluid" src={CaseStudy} alt="case-study" width="529" height="400"/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="contant">
						<h2 className="mb-4">UPL Implementation Case Study</h2>
						<p className="mb-5">With Use cases covered and business value delivered.</p>
						<span>Praesent id sollicitudin diam, mattis dictum enim.</span>
						<Link to="#" className="btn btn-primary">Read more</Link>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- Case Study --> */}

  {/* <!-- How Brabo is Leveraging --> */}
	<section className="col-md-12 how-brabo">
		<div className="container-fluid">
			<div className="row flex-row-reverse align-items-center">				
				<div className="col-md-5 offset-md-1">
					<div className="contant">
						<h2 className="mb-4">How Brabo is Leveraging the power of Hyperscalers like AWS ?</h2>
						<span>Praesent id sollicitudin diam, mattis dictum enim. </span>
						<Link to="#" className="btn btn-primary">Read more</Link>
					</div>
				</div>
				<div className="col-md-6">
					<div className="how-brabo-img text-center">
						<img className="img-fluid" src={HowBrabo} alt="how brabo" width="537" height="371"/>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- How Brabo is Leveraging --> */}

	{/* <!-- NOCIL Case Study --> */}
	<section className="col-md-12 case-study">
		<div className="container">
			<div className="row flex-row-reverse align-items-center">
				<div className="col-md-6">
					<div className="case-study-img text-center">
						<img className="img-fluid" src={CaseStudy} alt="case-study" width="529" height="400"/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="contant">
						<h2 className="mb-4">NOCIL Case Study</h2>
						<p className="mb-5">With Use cases covered and business value delivered.</p>
						<span>Praesent id sollicitudin diam, mattis dictum enim.</span>
						<Link to="#" className="btn btn-primary">Read more</Link>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- NOCIL Case Study --> */}

  {/* <!-- Unlock Your Data's Potential --> */}
	<section className="col-md-12 unlock-your-data text-center">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h2>Unlock Your Data's Potential</h2>
					<p className="mb-5"> The Ultimate Digital Technology Stack for Data- Driven Success</p>
					<div className="unlock-data-img text-center">
						<img className="img-fluid" src={DataUnlock} alt="how brabo" width="1777" height="951"/>
					</div>
					<Link to="#" className="btn btn-primary">Learn about the Modern Tech Stack </Link>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- Unlock Your Data's Potential --> */}

  {/* <!-- Continuous Innovation --> */}
	<section className="col-md-12 Continuous-Innovation">
		<div className="container-fluid">
			<div className="row flex-row-reverse align-items-center">				
				<div className="col-md-6">
					<div className="contant">
						<h2 className="mb-4">Continuous Innovation, Enabled</h2>
						<p>Brainstorm design options - features can be created or designed and developed in actionable forms - End user focused - UI/UX experience (self-explanatory of the features that we are promoting - automatically widgets are moveable.</p>
						<p>Bringing the concept of 'enabling your people' with a lifecycle (brainstorm design options) of sorts showcase</p>
						<span className="mb-4">Build your own custom apps using simple & intuitive canvas.</span>
						<Link to="#" className="btn btn-primary">Read more</Link>
					</div>
				</div>
				<div className="col-md-6">
					<div className="Continuous-Innovation-img">
						<img className="img-fluid" src={ContinousInnovation} alt="Continuous-Innovation" width="558" height="550"/>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- Continuous Innovation --> */}

  {/* <!-- Platform Affordability --> */}
	<section className="col-md-12 Platform-Affordability text-center">
		<div className="container">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<h2>Platform Affordability</h2>
					<p className="mb-4">ROI first, Scale as you grow, NO CAPEX model, Business Value</p>
					<p className="mb-5">At Solilever, we believe in the power of light to transform and elevate everyday experiences. With a commitment to innovation and sustainability, we have crafted a remarkable range of lighting solutions that bring brilliance into your life.</p>
					<Link to="#" className="btn btn-primary">Read more</Link>
				</div>
			</div>
			<div className="gredient-line">
				<div className="line line1">
					<svg width="277" height="190" viewBox="0 0 277 190" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M0 -7V190H162.122V102.779H251.283C252.049 110.986 257.493 117.349 264.095 117.349C271.222 117.349 277 109.935 277 100.79C277 91.6451 271.222 84.2316 264.095 84.2316C257.773 84.2316 252.513 90.065 251.406 97.7659H158.215V184.987H3.90655V-7H0ZM273.093 100.79C273.093 107.167 269.065 112.336 264.095 112.336C259.126 112.336 255.097 107.167 255.097 100.79C255.097 94.4135 259.126 89.2443 264.095 89.2443C269.065 89.2443 273.093 94.4135 273.093 100.79Z" fill="url(#paint0_linear_1435_25882)" fillOpacity="0.53"/>
						<defs>
						<linearGradient id="paint0_linear_1435_25882" x1="267.989" y1="86.2366" x2="-52.0247" y2="80.4509" gradientUnits="userSpaceOnUse">
						<stop stopColor="white"/>
						<stop offset="1" stopColor="white" stopOpacity="0"/>
						</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="line line2">
					<svg width="99" height="215" viewBox="0 0 99 215" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M84.7351 32.8452C92.6707 31.6404 98.7519 24.7886 98.7519 16.5166C98.7519 7.39471 91.3571 0 82.2353 0C73.1135 0 65.7188 7.39471 65.7188 16.5166C65.7188 24.7885 71.7997 31.6401 79.7351 32.8451V142.162H0V215H5V147.162H84.7351V32.8452ZM93.7519 16.5166C93.7519 22.877 88.5957 28.0331 82.2353 28.0331C75.8749 28.0331 70.7188 22.877 70.7188 16.5166C70.7188 10.1561 75.8749 5 82.2353 5C88.5957 5 93.7519 10.1561 93.7519 16.5166Z" fill="url(#paint0_linear_1435_25880)" fillOpacity="0.53"/>
						<defs>
						<linearGradient id="paint0_linear_1435_25880" x1="98.5" y1="-7.63946e-07" x2="49.3759" y2="215" gradientUnits="userSpaceOnUse">
						<stop stopColor="white"/>
						<stop offset="1" stopColor="white" stopOpacity="0"/>
						</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="line line3">
					<svg width="32" height="134" viewBox="0 0 32 134" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M18.2993 30.3952C25.5596 29.2018 31.0984 22.8973 31.0984 15.2992C31.0984 6.84969 24.2487 0 15.7992 0C7.34969 0 0.5 6.84969 0.5 15.2992C0.5 22.8974 6.03895 29.2019 13.2993 30.3952V134H18.2993V30.3952ZM26.0984 15.2992C26.0984 20.9873 21.4873 25.5984 15.7992 25.5984C10.1111 25.5984 5.5 20.9873 5.5 15.2992C5.5 9.61111 10.1111 5 15.7992 5C21.4873 5 26.0984 9.61111 26.0984 15.2992Z" fill="url(#paint0_linear_1435_25879)" fillOpacity="0.53"/>
						<defs>
						<linearGradient id="paint0_linear_1435_25879" x1="15.7992" y1="-2.02122e-07" x2="45.5" y2="134" gradientUnits="userSpaceOnUse">
						<stop stopColor="white"/>
						<stop offset="1" stopColor="white" stopOpacity="0"/>
						</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="line line4">
					<svg width="100" height="203" viewBox="0 0 100 203" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M14.5168 170.155C6.58112 171.36 0.499999 178.211 0.5 186.483C0.500001 195.605 7.89472 203 17.0166 203C26.1384 203 33.5331 195.605 33.5331 186.483C33.5331 178.211 27.4522 171.36 19.5168 170.155L19.5168 60.8378L99.2519 60.8378L99.2518 -12L94.2518 -12L94.2519 55.8378L14.5168 55.8378L14.5168 170.155ZM5.5 186.483C5.5 180.123 10.6561 174.967 17.0166 174.967C23.377 174.967 28.5331 180.123 28.5331 186.483C28.5331 192.844 23.377 198 17.0166 198C10.6561 198 5.5 192.844 5.5 186.483Z" fill="url(#paint0_linear_1435_25881)" fillOpacity="0.53"/>
						<defs>
						<linearGradient id="paint0_linear_1435_25881" x1="16.5005" y1="203" x2="118.5" y2="-12" gradientUnits="userSpaceOnUse">
						<stop stopColor="white"/>
						<stop offset="1" stopColor="white" stopOpacity="0"/>
						</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="line line5">
					<svg width="135" height="31" viewBox="0 0 135 31" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M30.8952 12.7992C29.7019 5.5389 23.3974 -3.32126e-07 15.7992 0C7.34969 3.6934e-07 0.5 6.84969 0.5 15.2992C0.5 23.7487 7.34969 30.5984 15.7992 30.5984C23.3974 30.5984 29.7018 25.0595 30.8952 17.7992L134.5 17.7992V12.7992L30.8952 12.7992ZM15.7992 5C21.4873 5 26.0984 9.61111 26.0984 15.2992C26.0984 20.9873 21.4873 25.5984 15.7992 25.5984C10.1111 25.5984 5.5 20.9873 5.5 15.2992C5.5 9.61111 10.1111 5 15.7992 5Z" fill="url(#paint0_linear_1435_25883)" fillOpacity="0.53"/>
						<defs>
						<linearGradient id="paint0_linear_1435_25883" x1="0.5" y1="15" x2="134.5" y2="15" gradientUnits="userSpaceOnUse">
						<stop stopColor="white"/>
						<stop offset="1" stopColor="white" stopOpacity="0"/>
						</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="line line6">
					<svg width="106" height="200" viewBox="0 0 106 200" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M17.0166 0C26.1384 1.08777e-07 33.5331 7.39471 33.5331 16.5166C33.5331 24.9671 27.1867 31.9354 19 32.9152L19 147.033H106V222.5H101V152.033H14L14 32.7583C6.31864 31.3407 0.5 24.6081 0.5 16.5166C0.5 7.39471 7.89471 -1.08777e-07 17.0166 0ZM17.0166 5C23.377 5 28.5331 10.1561 28.5331 16.5166C28.5331 22.877 23.377 28.0331 17.0166 28.0331C10.6561 28.0331 5.5 22.877 5.5 16.5166C5.5 10.1561 10.6561 5 17.0166 5Z" fill="url(#paint0_linear_1435_25884)" fillOpacity="0.53"/>
						<defs>
						<linearGradient id="paint0_linear_1435_25884" x1="53.25" y1="0" x2="106.5" y2="223" gradientUnits="userSpaceOnUse">
						<stop stopColor="white"/>
						<stop offset="1" stopColor="white" stopOpacity="0"/>
						</linearGradient>
						</defs>
					</svg>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- Platform Affordability --> */}

  {/* <!-- Help us --> */}
	<section className="col-md-12 help-us">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-10 text-center">
					<h2 className="mb-5">Help us solve data problems across industries</h2>
					<div className="row">
						<div className="col-md-4">
							<div className="box">								
								<Link to="#" className="gradient-border">
									<div className="content">
										Join us
									</div>
								</Link>
								<p className="mt-4">Illuminate your world with <br />Solilever.</p>
							</div>
						</div>
						<div className="col-md-4 box-center">
							<div className="box">
								<Link to="#" className="gradient-border">
									<div className="content">
										Become a Partner
									</div>
								</Link>
								<p className="mt-4">Illuminate your world with <br />Solilever.</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="box">
								<Link to="#" className="gradient-border">
									<div className="content">
										Academic collabortion
									</div>
								</Link>
								<p className="mt-4">Illuminate your world with <br />Solilever.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- Help us --> */}

  {/* <!-- Stay Connected --> */}
	<section className="col-md-12 Stay-connected">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-10">
					<h2 className="mb-4 text-center">Stay Connected, Stay Informed, Stay Ahead!</h2>
					<p className="text-center">ROI first, Scale as you grow, NO CAPEX </p>
					<span className="mb-5 text-center d-block">Illuminate your world with Solilever. Light the way to a brighter, more sustainable future.</span>					
					<div className="row">
						<div className="col-md-12">
							<div className="Email-field">
								<div className="gradient-border d-flex mb-4 p-2">
									<input type="email" name="email" className="form-control" placeholder="E-mail address" />
									<button className="btn btn-primary">Subscribe</button>									
								</div>
								<div className="form-check mb-3">
								  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked1" />
								  <label className="form-check-label" htmlFor="flexCheckChecked1">
								    By clicking on SUBMIT, you acknowledge having read our Privacy Policy and to receive communications with regards to Solulever's products and services. I agree to the data submitted being stored andused to send me email updates from Brabo*
								  </label>
								</div>
								<div className="form-check">
								  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
								  <label className="form-check-label" htmlFor="flexCheckChecked2">
								    I agree to receive communications regarding Solulever's products, services, and events. I can unsubscribe at any time. View <Link to="#">privacy policy.</Link> *By clicking Submit below, you consent to allow Solulever to store and process the personal information submitted above to provide you with the content requested.
								  </label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- Stay Connected --> */}

  {/* <!-- Follow us on Linked In --> */}
	<section className="col-md-12 follow-us-linkedin">
		<div className="container">
      		<div className="heading mb-5 text-center">
					<h2>Follow us on Linked In</h2>
			</div>
			<OwlCarousel className='owl-theme' {...options}>
				<div className='item'>
					<div className="linkedin-box gradient-border">
						<Link to="#">
							<div className="content">
								<div className="inner-top">
									<p className="heading">LinkedIn</p>
									<span className="date">March 16</span>
								</div>
								<div className="box-img text-center">
									<img className="img-fluid" src={SunnyLandscape} alt="sunny-landscape" width="423" height="242"/>
								</div>
								<div className="inner-bottom">
									<p>Illuminate your world with Solilever. Light the way to a brighter, more sustainable future.</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
				<div className='item'>
					<div className="linkedin-box gradient-border">
						<Link to="#">
							<div className="content">
								<div className="inner-top">
									<p className="heading">LinkedIn</p>
									<span className="date">March 16</span>
								</div>
								<div className="box-img text-center">
									<img className="img-fluid" src={ThirdRendering} alt="sunny-landscape" width="423" height="242"/>
								</div>
								<div className="inner-bottom">
									<p>Illuminate your world with Solilever. Light the way to a brighter, more sustainable future.</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
				<div className='item'>
					<div className="linkedin-box gradient-border">
						<Link to="#">
							<div className="content">
								<div className="inner-top">
									<p className="heading">LinkedIn</p>
									<span className="date">March 16</span>
								</div>
								<div className="box-img text-center">
									<img className="img-fluid" src={EngineerUse} alt="sunny-landscape" width="423" height="242"/>
								</div>
								<div className="inner-bottom">
									<p>Illuminate your world with Solilever. Light the way to a brighter, more sustainable future.</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
				<div className='item'>
					<div className="linkedin-box gradient-border">
						<Link to="#">
							<div className="content">
								<div className="inner-top">
									<p className="heading">LinkedIn</p>
									<span className="date">March 16</span>
								</div>
								<div className="box-img text-center">
									<img className="img-fluid" src={ThirdRendering} alt="sunny-landscape" width="423" height="242"/>
								</div>
								<div className="inner-bottom">
									<p>Illuminate your world with Solilever. Light the way to a brighter, more sustainable future.</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</OwlCarousel>
			
		</div>
	</section>
	{/* <!-- Follow us on Linked In --> */}

  </>  
  );
}

export default Home;