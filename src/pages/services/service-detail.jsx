import React, {useEffect, useState, useCallback, useRef} from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../api";
import { useParams } from 'react-router-dom';
import { useLanguage } from "../../components/LanguageContext";



function ServiceDetail () {
    const { selectedLanguage } = useLanguage();
    const prevLanguage = useRef(null);
    const { slug } = useParams();
    const [serviceData, setServiceData] = useState(null);

    const initService = useCallback(async (langCode) => {
        console.log('initService called with langCode:', langCode);
        try {
          const slugResponse = await fetch(`${BASE_URL}/services?slug=${slug}`);
          if (slugResponse.ok) {
            const slugData = await slugResponse.json();
            if (slugData && slugData.length > 0) {
              const id = slugData[0].id; // Assuming the ID is present in the first item
              const response = await fetch(`${BASE_URL}/services/${id}`);
    
              if (response.ok) {
                const data = await response.json();
    
                if (langCode !== 'en') {
                  const matchingLang = data.lang.find(lang => lang.code === langCode) || data.lang.find(lang => lang.id === parseInt(langCode, 10)) || data.lang.find(lang => lang.code === 'en');
    
                  if (matchingLang) {
                    const idToUse = matchingLang.id;
                    const updatedResponse = await fetch(`${BASE_URL}/services/${idToUse}`);
                    if (updatedResponse.ok) {
                      const updatedData = await updatedResponse.json();
                      console.log('other lang data', updatedData);
                      setServiceData(updatedData);
                      document.title = updatedData.title.rendered || 'Brabo About';
                    } else {
                      setServiceData(data);
                      document.title = data.title.rendered || 'Brabo Home';
                      console.log('Failed to fetch data with updated language code, so en data');
                    }
                  } else {
                    console.log('No matching language found, using default data');
                    setServiceData(data);
                    document.title = data.title.rendered || 'Brabo About';
                  }
                } else {
                  console.log('default en data');
                  setServiceData(data);
                  document.title = data.title.rendered || 'Brabo About';
                }
              } else {
                throw new Error('Failed to fetch data');
              }
            } else {
              console.log('No data found for the slug');
            }
          } else {
            throw new Error('Failed to fetch slug data');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    
      }, []);
    // useEffect(() => {
    //     const fetchServiceBySlug = async () => {
    //         try {
    //             const response = await fetch(`${BASE_URL}/services?slug=${slug}`);
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 if (data && data.length > 0) {
    //                     setServiceData(data[0]); 
    //                 }
    //             } else {
    //                 throw new Error('Failed to fetch data');
    //             }
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchServiceBySlug();
    // }, [slug]);

    useEffect(() => {
		// Call initAbout only if selectedLanguage has changed
		if (selectedLanguage !== prevLanguage.current) {
			console.log('useEffect called with selectedLanguage:', selectedLanguage);
			console.log('useEffect called with previoes Language:', prevLanguage.current);
			initService(selectedLanguage);
			prevLanguage.current = selectedLanguage; // Update the previous language
			
		}
	}, [selectedLanguage, initService, prevLanguage]);

    return (
        <>
            {/* <!-- Banner --> */}
            {serviceData ? (
            <section className="col-md-12 business-value sustainabilit-application-banner text-center" 
            style={{
                backgroundImage: `url(${serviceData.acf.servicebanner.url})`,
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
                            <p className="mb-lg-5" dangerouslySetInnerHTML={{ __html: serviceData.excerpt?.rendered || '' }}></p>
                            <p className="text-light mb-lg-5">{serviceData.acf.sub_title}</p>
                        </div>                         
                    </div>
                
                </div>
            </section>
            ) : (
                <p>Loading...</p>
              )}
            {/* <!-- banner --> */}

            {/* <!-- Powerful-Allies --> */}
            <section className="col-md-12 brabo-sustainabilit-applications services-content text-center">
                <div className="container">
                    <div className="row justify-content-center">
                    {serviceData ? (
                        <div className="col-lg-8">
                            <div className="content p-lg-5">
                            <div dangerouslySetInnerHTML={{ __html: serviceData.content?.rendered || '' }}></div> </div>
                        </div>
                         ) : (                            
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </section>
            {/* <!-- Powerful-Allies --> */}

            {/* <!-- Additional LeftSide --> */}
            {serviceData && serviceData.acf && serviceData.acf.leftheading && serviceData.acf.leftdescription && serviceData.acf.leftimage && (
			<section className="col-md-12 case-study">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="contant">
								<h2 className="mb-4">{serviceData.acf.leftheading}</h2>
								<p>{serviceData.acf.leftdescription}</p>
								{/* <Link to="#" className="btn btn-primary">Read more</Link> */}
							</div>
						</div>
						<div className="col-lg-6">
							<div className="case-study-img text-center">
								<img className="img-fluid" src={serviceData.acf.leftimage.url} alt={serviceData.acf.leftheading} width="570" height="440" />
							</div>
							{/* <Link to="#" className="btn btn-primary hide-button mt-5">Read more</Link> */}
						</div>
					</div>
				</div>
			</section>
            )}
			{/* <!-- Additional LeftSide --> */}

            {/* <!-- Additional RightSide --> */}
            {serviceData && serviceData.acf && serviceData.acf.rightheading && serviceData.acf.rightdescription && serviceData.acf.rightimages && (
			<section className="col-md-12 case-study">
				<div className="container">
					<div className="row flex-row-reverse align-items-center">
                        <div className="col-lg-6">
                            <div className="contant">
								<h2 className="mb-4">{serviceData.acf.rightheading}</h2>
								<p>{serviceData.acf.rightdescription}</p>
								{/* <Link to="#" className="btn btn-primary">Read more</Link> */}
							</div>							
						</div>
						<div className="col-lg-6">
                            <div className="case-study-img text-center">
								<img className="img-fluid" src={serviceData.acf.rightimages.url} alt={serviceData.acf.rightheading} width="570" height="440" />
							</div>
                            {/* <Link to="#" className="btn btn-primary hide-button mt-5">Read more</Link> */}
						</div>
						
					</div>
				</div>
			</section>
            )}
			{/* <!-- Additional RightSide --> */}

            {/* <!-- Key benefits --> */}
            <section className="col-md-12 Key-benefits">
            {serviceData ? (
                <div className="container">
                    <div className="mb-5 text-center">
                        <h2 className="mb-5">{serviceData.acf?.benefits_title}</h2>
                    </div>                    
                    <div className="row justify-content-center">
                    {serviceData.acf && serviceData.acf.benefit_list ? (
                    serviceData.acf.benefit_list.map((benefit, index) => (				
                        <div className="col-lg-3 col-md-6 mb-lg-5 mb-3" key={index}>
                            <div className="gradient-border benefits-box">                            
                                <div className="content text-center">
                                    <div className="box-img text-center mb-lg-5 mb-3">
                                        <img className="img-fluid" src={benefit.benefits_image} alt="{benefit.benefits_title}" width="100" height="99" />
                                    </div>
                                    <p className="heading mb-lg-5 mb-4">{benefit.benefits_title}</p>
                                    <p className="mt-">{benefit.benefits_description}</p>
                                </div>                                
                            </div>
                        </div>   
                        ))
                        ) : (
                          <div class="alert alert-success text-center" role="alert">
                            No key Benefits are available in this language !
                          </div>
                        )}                    
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

            {/* Additional Content */}
            {serviceData && serviceData.acf && serviceData.acf.content && (
            <section className="col-md-12 brabo-sustainabilit-applications services-content text-center">
            <div className="container">
                <div className="row justify-content-center">
                
                    <div className="col-lg-8">
                    <div className="content p-lg-5">
                        <div dangerouslySetInnerHTML={{ __html: serviceData.acf.content }}></div>
                    </div>
                    </div>
               
                </div>
            </div>
            </section>
            )}
            {/* Additional Content */}

        </>
    );
}

export default ServiceDetail;