import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ExportIcon from '../../../assets/images/export-icon.png';
import ShareIcon from '../../../assets/images/share-icon.png';
import ShareIcon2 from '../../../assets/images/share-icon-2.png';
import { BASE_URL } from "../../../api";
import { useParams } from "react-router-dom";
//import FilterBlog from "./filter-blog";

function Blog () { 
    const { slug } = useParams();
    const [postData, setPostData] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedIndustry, setSelectedIndustry] = useState('');
    const[industry, setIndustry] = useState([]);
    const[category, setCategory] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${BASE_URL}/posts`);
                if (response.ok) {
                  const data = await response.json();
                  setPostData(data);
                // get industry
                const responseIndustry = await fetch(`${BASE_URL}/post-industry`);
                if (!responseIndustry.ok) {
                throw new Error('Network response was not ok');
                }
                const dataIndustry = await responseIndustry.json();
                setIndustry(dataIndustry);
                // get category
                const responseCategory = await fetch(`${BASE_URL}/post-categories`);
                if (!responseCategory.ok) {
                throw new Error('Network response was not ok');
                }
                const dataCategory = await responseCategory.json();
                setCategory(dataCategory);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchPosts();
    }, [slug]);
    const decodeHtmlEntities = (html) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };
    const handleIndustryChange = (event) => { // filter based on industry
        setSelectedIndustry(event.target.value);
    };
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    const filteredPosts = postData
    ? postData.filter((post) => {
            const categoryMatch =
                selectedCategory === '' || // if no category is selected
                post.categories.some(
                    (category) => category.name === selectedCategory
                );
                

        const titleMatch = post.title.rendered
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        const industryMatch =
            selectedIndustry === '' ||
            post.industry === selectedIndustry;    

            return categoryMatch && titleMatch && industryMatch;
        })
    : [];

    const recentPosts = postData ? postData.slice(0, 5) : []; // latest post        
    
    return (
        <>
        {/* <!--Knowledge Hub Banner --> */}
        <section className="col-md-12 business-value Knowledge-Hub-banner text-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 content">
                        <h2 className="mb-3">Knowledge Hub</h2>
                        <p className="mb-lg-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus in odio eget dignissim. Nulla ac fermentum tellus. Praesent at risus a libero finibus pharetra. In hac habitasse platea dictumst. Praesent porttitor nulla est, lacinia convallis diam tincidunt sit amet. Nam hendrerit vel turpis in bibendum. Integer in urna et felis mattis molestie.</p>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--  Knowledge Hub banner --> */}

        {/* <!-- filter By --> */}
        {/* <FilterBlog setSelectedCategory={setSelectedCategory} /> */}
        <section className="col-md-12 filter-by">
        <div className="container">
            <h2 className="mb-lg-5 mb-4">Filter by</h2>	
            <div className="row justify-content-center">                    			
                <div className="col-md-4">
                    <div className="Email-field">
                        <div className="gradient-border mb-4">                            
                            <select className="content w-100" onChange={handleCategoryChange}>
                                <option value="">Select Category</option>
                                {category.map((item)  => (
                                    <option key={item.id} value={item.name}>{item.name}</option>
                                ))}                                
                            </select>				
                        </div>														
                    </div>								  
                </div>
                <div className="col-md-4">
                    <div className="Email-field">
                        <div className="gradient-border mb-4">
                            <input type="name" name="name" className="form-control" placeholder="Topics"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            />				
                        </div>														
                    </div>								  
                </div>
                <div className="col-md-4">
                    <div className="Email-field">
                        <div className="gradient-border mb-4">
                            <select className="content w-100" onChange={handleIndustryChange}>
                                {industry.map((item)  => (
                                    <option key={item.id} value={item.name}>{item.name}</option>
                                ))}
                            </select>				
                        </div>														
                    </div>								  
                </div>
            </div>
            <div className="sort-by">
                <h4>Sort By:</h4>						
                <div className="sort-by-button gradient-border"><span className="content">Feature</span></div>		
                <div className="sort-by-button gradient-border"><span className="content">Most recent</span></div>		
            </div>
        </div>
    </section>
        {/* <!-- filter By --> */}

        {/* <!-- Our Blog --> */}
        <section className="col-md-12 our-Blog">
            <div className="container-fluid">
                <div className="blog-post">
                    <div className="article">
                        <div className="blog">
                        {filteredPosts && filteredPosts.length > 0 ? (
                                    filteredPosts.map((item, id) => (
                            <div className="blog-item" key={id}>
                                <Link to={`/resources/${item.slug}`} className="Blog-box">
                                    <div className="Blog-img text-center p-3">
                                        <img className="img-fluid" src={item.featured_image} alt="Dashboard-img" width="560" height="435"/>
                                    </div>
                                    <div className="gradient-border">							
                                        <div className="content">								
                                            <div className="mt-3">
                                                <div className="d-flex mb-2 align-item-center">
                                                    <figure>
                                                        <img className="img-fluid" src={ExportIcon} alt="export-icon" width="30" height="30"/>
                                                    </figure>
                                                    <figcaption>
                                                        <h3>{decodeHtmlEntities(item.title.rendered)}</h3>                                                    
                                                    </figcaption>                                                    
                                                </div>
                                                {item.categories.map((category, index) => (
                                                    <p className="sub-heading" key={index}>{decodeHtmlEntities(category.name)}</p>
                                                ))}
                                                <div className="" dangerouslySetInnerHTML={{__html: item.excerpt.rendered}}></div>
                                                
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
                                </Link>
                            </div>
                            ))
                           ) : (
                            <p>No posts found.</p>
                        )}
                        </div>
                    </div>
                    <div className="aside recent">                        
                        <div className="recent-post gradient-border">
                            <div className="content">
                                <h4 className="mb-3">Recents Post</h4>
                                <ul>
                                    {recentPosts.map((recentItem, index) => (
                                        <li className="mb-2"  key={index}><Link to="#">{decodeHtmlEntities(recentItem.title.rendered)}</Link></li>
                                    ))}
                                </ul>
                                
                                <div className="mt-5">
                                    <h4 className="mb-3">Categories</h4>
                                    <ul>                                        
                                        {category.map((item, index) => (
                                            <li className="mb-2" key={index}><Link to="#">{decodeHtmlEntities(item.name)}</Link></li>
                                        ))}
                                    </ul>
                                </div>							
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center View-all-button banner-gap">
                    <Link to="#" className="btn btn-primary view-button">View All</Link>
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
                                    <div className="gradient-border d-flex m-1 mb-4 p-2">
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
        {/* <!-- Stay-connected --> */}
        </>
    );
}

export default Blog;