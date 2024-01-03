import React, {useState, useEffect} from "react";
//import BlogView from '../../../../assets/images/blog-view-img.png'
import { Link } from "react-router-dom";
import Author from '../../../../assets/images/profile-1.png';
import { useParams } from 'react-router-dom'; 
import { BASE_URL } from "../../../../api";


function BlogDetail () { 
    const { postId } = useParams();
    const [postData, setPostData] = useState(null);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${BASE_URL}/posts/${postId}`);
                if (response.ok) {
                  const data = await response.json();
                  setPostData(data);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchPosts();
    }, [postId]);
    const decodeHtmlEntities = (html) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };
    return (
        <> 
        {postData && (
            <div>
            {/* <!--View Resources banner --> */}
            <section className="col-md-12 View-Resources-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 content">
                            <h2 className="mb-4">{decodeHtmlEntities(postData.title.rendered)}</h2>
                            <div className="" dangerouslySetInnerHTML={{__html: postData.excerpt.rendered}}></div>
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
                                <img className="img-fluid" src={postData.featured_image} alt="blog-view-img" width="1000" height="540"/>
                            </div>
                            <div className="blog-view-text">
                                <div className="" dangerouslySetInnerHTML={{__html: postData.content.rendered}}></div>
                            </div>
                            <div className="blog-links">
                                <h5>Sources</h5>
                                <p><Link to="#">https.///degsdxbf</Link></p>
                                <ul>
                                    <li>								
                                        <Link>
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <i className="fa-brands fa-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <i className="fa-solid fa-share-nodes"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <i className="fa-brands fa-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <i className="fa-regular fa-envelope"></i>
                                        </Link>
                                    </li>                                    
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
            <section className="col-md-12 ">
                <div className="container">                    
                    <div className="row">
                        <div className="Blog-about-author">
                            <figure>
                                <img className="img-fluid" src={Author} alt="Brabo logo" width="160" height="32" />
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
            </div>
        )}
        </>
    );
}

export default BlogDetail;