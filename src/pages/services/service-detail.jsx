import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../api";
import { useParams } from 'react-router-dom';

function ServiceDetail () {
    const { slug } = useParams();
    const [serviceData, setServiceData] = useState(null);
    useEffect(() => {
        const fetchServiceBySlug = async () => {
            try {
                const response = await fetch(`${BASE_URL}/services?slug=${slug}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data && data.length > 0) {
                        setServiceData(data[0]); 
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
            {/* <!-- Banner --> */}
            {serviceData && (
            <section className="col-md-12 business-value sustainabilit-application-banner text-center" 
            style={{
                backgroundImage: `url(${serviceData.featured_image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
            }}
            >
                <div className="container">                
                    <div className="row justify-content-center">                        
                        <div className="col-md-8 content">
                            <div className="icon text-center mb-3">                            
                                <img className="img-fluid" src={serviceData.acf.icon.url} alt={serviceData.title.rendered} width="106" height="96"/>                             
                            </div>
                            <h2 className="mb-3">{serviceData.title.rendered}</h2>
                            <p className="mb-5" dangerouslySetInnerHTML={{ __html: serviceData.excerpt?.rendered || '' }}></p>
                            <p className="text-light mb-5">{serviceData.acf.sub_title}</p>
                        </div>                         
                    </div>
                
                </div>
            </section>
            )}
            {/* <!-- banner --> */}

            {/* <!-- Powerful-Allies --> */}
            <section className="col-md-12 brabo-sustainabilit-applications services-content text-center">
                <div className="container">
                    <div className="row justify-content-center">
                    {serviceData ? (
                        <div className="col-md-8">
                            <div className="content p-5">
                            <div dangerouslySetInnerHTML={{ __html: serviceData.content?.rendered || '' }}></div> </div>
                        </div>
                         ) : (                            
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </section>
            {/* <!-- Powerful-Allies --> */}

            {/* <!-- Key benefits --> */}
            <section className="col-md-12 Key-benefits">
            {serviceData ? (
                <div className="container">
                    <div className="mb-5 text-center">
                        <h2 className="mb-5">{serviceData.acf?.benefits_title}</h2>
                    </div>                    
                    <div className="row justify-content-center">
                        {serviceData.acf.benefit_list.map((benefit, index) => (				
                        <div className="col-md-4 mb-5" key={index}>
                            <div className="gradient-border benefits-box">                            
                                <div className="content text-center">
                                    <div className="box-img text-center mb-5">
                                        <img className="img-fluid" src={benefit.benefits_image} alt="{benefit.benefits_title}" width="100" height="99" />
                                    </div>
                                    <p className="heading mb-5">{benefit.benefits_title}</p>
                                    <p className="mt-">{benefit.benefits_description}</p>
                                </div>                                
                            </div>
                        </div>   
                        ))}                     
                    </div>
                    <div className="text-center mt-5 mb-5">
                        <Link to="#" className="btn btn-primary">Sign up for a Demo</Link>
                    </div>
                </div>
                ) : (
                    <p>Loading...</p>
                )}
            </section>
            {/* <!-- Key benefits --> */}
        </>
    );
}

export default ServiceDetail;