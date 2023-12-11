import React from "react";
import BlogView from '../../../../assets/images/blog-view-img.png'
import { Link } from "react-router-dom";


function BlogDetail () { 
    return (
        <>
            {/* <!--View Resources banner --> */}
            <section className="col-md-12 View-Resources-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 content">
                            <h2 className="mb-4">Industry 4.0 and the sustainability goals of the manufacturing sector</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus in odio eget dignissim. Nulla ac fermentum tellus. Praesent at risus a libero finibus pharetra. In hac habitasse platea dictumst. Praesent porttitor nulla est, lacinia convallis diam tincidunt sit amet. Nam hendrerit vel turpis in bibendum. Integer in urna et felis mattis molestie.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--  View Resources banner --> */}

            {/* <!-- Blog-view --> */}
            <section className="Blog-view pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="blog-view-img">
                                <img className="img-fluid" src={BlogView} alt="blog-view-img" width="1000" height="540"/>
                            </div>
                            <div className="blog-view-text">
                                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus in odio eget dignissim. Nulla ac fermentum tellus. Praesent at risus a libero finibus pharetra. In hac habitasse platea dictumst. Praesent porttitor nulla est, lacinia convallis diam tincidunt sit amet. Nam hendrerit vel turpis in bibendum. Integer in urna et felis mattis molestie.</p>
                            </div>
                            <div className="blog-view-text">
                                <p className="">Donec ipsum ante, congue sit amet condimentum eget, rutrum porta neque. Donec consequat efficitur aliquam. Mauris ut dapibus ex, id porta mauris. Maecenas vitae nunc velit. Vivamus viverra eros et diam pharetra, at ornare dolor varius. Integer ullamcorper nisl nec diam condimentum eleifend. Ut fermentum commodo dolor, eget vehicula risus pulvinar vel. Morbi ut dolor risus. Donec mollis nulla sit amet lectus pharetra, et pulvinar ligula faucibus. Morbi ut venenatis augue, sit amet imperdiet purus. Vestibulum placerat magna neque, eget maximus dui sagittis id. Donec urna lacus, ornare vel leo eu, tincidunt bibendum leo. Vestibulum at arcu dapibus, accumsan erat eleifend, dictum neque. Quisque diam nibh, tempor a sollicitudin sed, egestas ut diam. Fusce in ultrices felis.</p>
                            </div>
                            <div className="blog-view-text">
                                <p className="">In sodales dolor tellus, eu dapibus sem elementum vitae. Suspendisse ex magna, lacinia et augue sit amet, posuere pellentesque sem. Cras venenatis dui dapibus congue bibendum. Aenean auctor lacus orci, sed porta purus pharetra sed. Vivamus non mi ligula. Aenean elit dolor, suscipit quis ex vel, finibus commodo enim. Phasellus vehicula quis ex id volutpat. Aliquam at quam a augue elementum egestas. Cras dictum elit arcu, et volutpat ligula auctor consectetur. Fusce cursus eleifend egestas.</p>
                            </div>
                            <div className="blog-view-text">
                                <p className="">Fusce venenatis convallis efficitur. Proin laoreet nulla vitae ligula eleifend sollicitudin vel ut dolor. Proin vitae nulla id tortor luctus iaculis quis ac tellus. Praesent elementum nulla eu malesuada pellentesque. Etiam varius dui nec placerat pretium. Sed et enim leo. Phasellus id varius ante. Aliquam a turpis sit amet libero dapibus tincidunt. Proin pulvinar, ligula sed commodo aliquam, sapien ipsum lacinia est, sed venenatis felis libero imperdiet dui. Curabitur ullamcorper imperdiet elit ut iaculis. Mauris quis diam gravida, tincidunt urna at, sagittis ante. Vivamus in justo vel orci suscipit mattis vitae eget leo. Aliquam placerat libero finibus viverra faucibus. Sed ac eros ligula. In vulputate risus non iaculis tempus. Nulla sem lorem, lobortis ut nibh quis, interdum congue nisl.</p>
                            </div>
                            <div className="blog-links">
                                <h5>Sources</h5>
                                <p><Link to="#">https.///degsdxbf</Link></p>
                                <ul>
                                    <Link to="#">
                                        <li>								
                                            <img className="img-fluid" src="assets/images/share-icon.png" alt="share-icon" width="16" height="16"/>
                                        </li>
                                    </Link>
                                    <Link to="#">
                                        <li>								
                                            <img className="img-fluid" src="assets/images/share-icon.png" alt="share-icon" width="16" height="16"/>
                                        </li>
                                    </Link>
                                    <Link to="#">
                                        <li>								
                                            <img className="img-fluid" src="assets/images/share-icon.png" alt="share-icon" width="16" height="16"/>
                                        </li>
                                    </Link>
                                    <Link to="#">
                                        <li>								
                                            <img className="img-fluid" src="assets/images/share-icon.png" alt="share-icon" width="16" height="16"/>
                                        </li>
                                    </Link>
                                    <Link to="#">
                                        <li>								
                                            <img className="img-fluid" src="assets/images/share-icon.png" alt="share-icon" width="16" height="16"/>
                                        </li>
                                    </Link>
                                    <Link to="#">
                                        <li>								
                                            <img className="img-fluid" src="assets/images/share-icon.png" alt="share-icon" width="16" height="16"/>
                                        </li>
                                    </Link>
                                    <Link to="#">
                                        <li>								
                                            <img className="img-fluid" src="assets/images/share-icon.png" alt="share-icon" width="16" height="16"/>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="gradient-border">
                                <div className="content stay-Connected">						
                                    <h2 className="mb-4 text-center">Stay Connected, Stay Informed, Stay Ahead!</h2>
                                    <p className="text-center">ROI first, Scale as you grow, NO CAPEX </p>
                                    <span className="mb-5 text-center d-block">Illuminate your world with Solilever. Light the way to a brighter, more sustainable future.</span>
                                    <div className="Email-field">
                                        <div className="gradient-border d-flex mb-5">
                                            <input type="email" name="email" className="form-control" placeholder="E-mail address" />
                                            <button className="btn btn-primary">Subscribe</button>							
                                        </div>
                                        <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            By clicking on SUBMIT, you acknowledge having read our Privacy Policy and to receive communications with regards to Solulever's products and services. I agree to the data submitted being stored andused to send me email updates from Brabo*
                                        </label>
                                        </div>
                                        <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
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
            {/* <!-- Blog-view --> */}

            {/* <!-- ABOUT THE AUTHOR --> */}
            <section className="col-md-12 Blog-about-author">
                <div className="container">
                    <div className="row">
                        <div className="d-flex">
                            <figure>
                                <img className="img-fluid" src="assets/images/logo_light.png" alt="Brabo logo" width="160" height="32" />
                            </figure>
                            <figcaption>
                                <h3 className="mb-4">ABOUT THE AUTHOR</h3>
                                <h4 className="mb-4">SARANG GUJARATHI | A Client Partner</h4>
                                <p>Sarang client partner at solilever , holds 40+ years of experience working with leading manufacturing
                                solurion providers. He has diversified experience in chemical Pharma CPG Automative and metal industries 
                                amongst many others. he is noe healing pan india sales solulever, with focus on selling cutting edge industry
                                4.0 solution and desrupting manufacturing space with digital transformationn, coming with a rich customer 
                                base and trusted relationshio . He is a MR. Dependable for most of he manufacturingcompanies in india. He
                                is passionate about tennies, travelling, stock market and investing his time in fitness activity.</p>
                            </figcaption>					
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ABOUT THE AUTHOR --> */}
        </>
    );
}

export default BlogDetail;