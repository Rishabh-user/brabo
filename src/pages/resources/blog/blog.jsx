import React from "react";
import { Link } from "react-router-dom";
import DashboardImg from '../../../assets/images/Dashboard-img.png';
import ExportIcon from '../../../assets/images/export-icon.png';
import ShareIcon from '../../../assets/images/share-icon.png';
import ShareIcon2 from '../../../assets/images/share-icon-2.png';


function Blog () { 
    return (
        <>
        {/* <!--Knowledge Hub Banner --> */}
        <section className="col-md-12 business-value Knowledge-Hub-banner text-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 content">
                        <h2 className="mb-3">Knowledge Hub</h2>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus in odio eget dignissim. Nulla ac fermentum tellus. Praesent at risus a libero finibus pharetra. In hac habitasse platea dictumst. Praesent porttitor nulla est, lacinia convallis diam tincidunt sit amet. Nam hendrerit vel turpis in bibendum. Integer in urna et felis mattis molestie.</p>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--  Knowledge Hub banner --> */}

        {/* <!-- filter By --> */}
        <section className="col-md-12 filter-by">
            <div className="container">
                <div className="row justify-content-center">
                    <h2 className="mb-5">Filter by</h2>				
                    <div className="row">
                        <div className="col-md-4">
                            <div className="Email-field">
                                <div className="gradient-border mb-4">
                                    <select name="cars" id="cars" className="content w-100">
                                        <option value="volvo">Type & categories</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>				
                                </div>														
                            </div>								  
                        </div>
                        <div className="col-md-4">
                            <div className="Email-field">
                                <div className="gradient-border mb-4">
                                    <input type="name" name="name" className="form-control" placeholder="Topics"/>				
                                </div>														
                            </div>								  
                        </div>
                        <div className="col-md-4">
                            <div className="Email-field">
                                <div className="gradient-border mb-4">
                                    <input type="name" name="name" className="form-control" placeholder="Industry"/>				
                                </div>														
                            </div>								  
                        </div>
                    </div>
                </div>
                <div className="sort-by d-flex align-items-center">
                    <h4 className="me-3">Sort By:</h4>						
                    <div className="sort-by-button btn gradient-border me-3"><span className="content">Feature</span></div>		
                    <div className="sort-by-button btn gradient-border"><span className="content">Most recent</span></div>		
                </div>
            </div>
        </section>
        {/* <!-- filter By --> */}

        {/* <!-- Our Blog --> */}
        <section className="col-md-12 our-Blog">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="Blog-box">
                                    <div className="Blog-img text-center">
                                        <img className="img-fluid" src={DashboardImg} alt="Dashboard-img" width="423" height="242"/>
                                    </div>
                                    <div className="gradient-border">							
                                        <div className="content">								
                                            <div className="mt-3">
                                                <div className="d-flex mb-2 align-item-center">
                                                    <figure>
                                                        <img className="img-fluid" src={ExportIcon} alt="export-icon" width="30" height="30"/>
                                                    </figure>
                                                    <figcaption>
                                                        <h3>Blog</h3>
                                                    </figcaption>
                                                </div>
                                                <p className="sub-heading">NEWS LETTER TRENDS 2023</p>
                                                <p className="text-light">Yet another year is coming to a close. Many of the 2022 trends we anticipated, did find their use in digital products across our devices this year. As we are about to welcome 2023, we are taking a more careful....</p>
                                                <div className="share-time d-flex mb-4 align-item-center">
                                                    <div className="d-flex between">
                                                        <figure>
                                                            <img className="img-fluid" src={ShareIcon} alt="export-icon" width="18" height="18"/>
                                                        </figure>
                                                        <figcaption className="ms-2">
                                                            <p className="share-text">Sarang gujrathi</p>
                                                        </figcaption>
                                                    </div>
                                                    <div>
                                                        <span>8 min read</span>
                                                    </div>
                                                </div>
                                                <div className="button-share d-flex align-item-center">
                                                    <figure className="m-0">
                                                        <Link to="#"className="btn btn-outline-primary btn-sm btn-orange">Read More</Link>
                                                    </figure>
                                                    <figcaption className="">
                                                        <img className="img-fluid" src={ShareIcon2} alt="export-icon" width="25" height="25"/>
                                                    </figcaption>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="Blog-box">
                                    <div className="Blog-img text-center">
                                        <img className="img-fluid" src={DashboardImg} alt="Dashboard-img" width="423" height="242"/>
                                    </div>
                                    <div className="gradient-border">							
                                        <div className="content">								
                                            <div className="mt-3">
                                                <div className="d-flex mb-2 align-item-center">
                                                    <figure>
                                                        <img className="img-fluid" src={ExportIcon} alt="export-icon" width="30" height="30"/>
                                                    </figure>
                                                    <figcaption>
                                                        <h3>Blog</h3>
                                                    </figcaption>
                                                </div>
                                                <p className="sub-heading">NEWS LETTER TRENDS 2023</p>
                                                <p className="text-light">Yet another year is coming to a close. Many of the 2022 trends we anticipated, did find their use in digital products across our devices this year. As we are about to welcome 2023, we are taking a more careful....</p>
                                                <div className="share-time d-flex mb-4 align-item-center">
                                                    <div className="d-flex between">
                                                        <figure>
                                                            <img className="img-fluid" src={ShareIcon} alt="export-icon" width="18" height="18"/>
                                                        </figure>
                                                        <figcaption className="ms-2">
                                                            <p className="share-text">Sarang gujrathi</p>
                                                        </figcaption>
                                                    </div>
                                                    <div>
                                                        <span>8 min read</span>
                                                    </div>
                                                </div>
                                                <div className="button-share d-flex align-item-center">
                                                    <figure className="m-0">
                                                        <Link to="#"className="btn btn-outline-primary btn-sm btn-orange">Read More</Link>
                                                    </figure>
                                                    <figcaption className="">
                                                        <img className="img-fluid" src={ShareIcon2} alt="export-icon" width="25" height="25"/>
                                                    </figcaption>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="Blog-box">
                                    <div className="Blog-img text-center">
                                        <img className="img-fluid" src={DashboardImg} alt="Dashboard-img" width="423" height="242"/>
                                    </div>
                                    <div className="gradient-border">							
                                        <div className="content">								
                                            <div className="mt-3">
                                                <div className="d-flex mb-2 align-item-center">
                                                    <figure>
                                                        <img className="img-fluid" src={ExportIcon} alt="export-icon" width="30" height="30"/>
                                                    </figure>
                                                    <figcaption>
                                                        <h3>Blog</h3>
                                                    </figcaption>
                                                </div>
                                                <p className="sub-heading">NEWS LETTER TRENDS 2023</p>
                                                <p className="text-light">Yet another year is coming to a close. Many of the 2022 trends we anticipated, did find their use in digital products across our devices this year. As we are about to welcome 2023, we are taking a more careful....</p>
                                                <div className="share-time d-flex mb-4 align-item-center">
                                                    <div className="d-flex between">
                                                        <figure>
                                                            <img className="img-fluid" src={ShareIcon} alt="export-icon" width="18" height="18"/>
                                                        </figure>
                                                        <figcaption className="ms-2">
                                                            <p className="share-text">Sarang gujrathi</p>
                                                        </figcaption>
                                                    </div>
                                                    <div>
                                                        <span>8 min read</span>
                                                    </div>
                                                </div>
                                                <div className="button-share d-flex align-item-center">
                                                    <figure className="m-0">
                                                        <Link to="#"className="btn btn-outline-primary btn-sm btn-orange">Read More</Link>
                                                    </figure>
                                                    <figcaption className="">
                                                        <img className="img-fluid" src={ShareIcon2} alt="export-icon" width="25" height="25"/>
                                                    </figcaption>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="Blog-box">
                                    <div className="Blog-img text-center">
                                        <img className="img-fluid" src={DashboardImg} alt="Dashboard-img" width="423" height="242"/>
                                    </div>
                                    <div className="gradient-border">							
                                        <div className="content">								
                                            <div className="mt-3">
                                                <div className="d-flex mb-2 align-item-center">
                                                    <figure>
                                                        <img className="img-fluid" src={ExportIcon} alt="export-icon" width="30" height="30"/>
                                                    </figure>
                                                    <figcaption>
                                                        <h3>Blog</h3>
                                                    </figcaption>
                                                </div>
                                                <p className="sub-heading">NEWS LETTER TRENDS 2023</p>
                                                <p className="text-light">Yet another year is coming to a close. Many of the 2022 trends we anticipated, did find their use in digital products across our devices this year. As we are about to welcome 2023, we are taking a more careful....</p>
                                                <div className="share-time d-flex mb-4 align-item-center">
                                                    <div className="d-flex between">
                                                        <figure>
                                                            <img className="img-fluid" src={ShareIcon} alt="export-icon" width="18" height="18"/>
                                                        </figure>
                                                        <figcaption className="ms-2">
                                                            <p className="share-text">Sarang gujrathi</p>
                                                        </figcaption>
                                                    </div>
                                                    <div>
                                                        <span>8 min read</span>
                                                    </div>
                                                </div>
                                                <div className="button-share d-flex align-item-center">
                                                    <figure className="m-0">
                                                        <Link to="#"className="btn btn-outline-primary btn-sm btn-orange">Read More</Link>
                                                    </figure>
                                                    <figcaption className="">
                                                        <img className="img-fluid" src={ShareIcon2} alt="export-icon" width="25" height="25"/>
                                                    </figcaption>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 recent">
                        <div className="search-field">
                            <div className="gradient-border mb-4">
                                <input type="search" name="search" className="form-control" placeholder="Search from below list"/>	
                            </div>														
                        </div>
                        <div className="recent-post gradient-border">
                            <div className="content">
                                <h4 className="mb-3">Recents Post</h4>
                                <p className="mb-3">take us whenever you go so that you know what’s gemipsum doloecommando dolor anean massa.</p>
                                <p className="mb-3">take us whenever you go so that you know what’s gemipsum doloecommando dolor anean massa.</p>
                                <p className="mb-3">take us whenever you go so that you know what’s gemipsum doloecommando dolor anean massa.</p>
                                <p className="mb-3">take us whenever you go so that you know what’s gemipsum doloecommando dolor anean massa.</p>
                                <p className="mb-3">take us whenever you go so that you know what’s gemipsum doloecommando dolor anean massa.</p>
                                <div className="mt-5 mb-5">
                                    <ul>
                                        <h4 className="mb-3">Articles</h4>
                                        <li className="mb-3"><Link to="#">Sustainability App</Link></li>
                                        <li className="mb-3"><Link to="#">Sustainability App</Link></li>
                                        <li className="mb-3"><Link to="#">Sustainability App</Link></li>
                                        <li className="mb-3"><Link to="#">Sustainability App</Link></li>
                                        <li className="mb-3"><Link to="#">Sustainability App</Link></li>
                                        <li className="mb-3"><Link to="#">Sustainability App</Link></li>
                                        <li className="mb-3"><Link to="#">Sustainability App</Link></li>
                                    </ul>
                                </div>
                                <div className="">
                                    <ul className="mb-5">
                                        <h4 className="mb-3">Categories</h4>
                                        <li className="mb-3"><Link to="#">Sustainability App</Link></li>
                                        <li className="mb-3"><Link to="#">Sustainability App</Link></li>
                                        <li className="mb-3"><Link to="#">Sustainability App</Link></li>
                                        <li className="mb-3"><Link to="#">Sustainability App</Link></li>
                                        <li className="mb-3"><Link to="#">Sustainability App</Link></li>
                                        <li className="mb-3"><Link to="#">Sustainability App</Link></li>
                                        <li className="mb-3"><Link to="#">Sustainability App</Link></li>
                                    </ul>
                                </div>							
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center View-all-button banner-gap">
                    <Link to="#" className="view-button">View All</Link>
                </div>
            </div>
        </section>
        {/* <!-- Our Blog --> */}

        {/* <!-- Stay-connected --> */}
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
                                    <div className="gradient-border d-flex mb-4">
                                        <input type="email" name="email" className="form-control" placeholder="E-mail address" />
                                        <button className="btn btn-primary">Subscribe</button>									
                                    </div>
                                    <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckChecked">
                                        By clicking on SUBMIT, you acknowledge having read our Privacy Policy and to receive communications with regards to Solulever's products and services. I agree to the data submitted being stored andused to send me email updates from Brabo*
                                    </label>
                                    </div>
                                    <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckChecked">
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
        {/* <!-- Stay-connected --> */}
        </>
    );
}

export default Blog;