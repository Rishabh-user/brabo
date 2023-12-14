import React, {useState, useEffect} from "react";
import { BASE_URL } from "../../api";

function PrivacyPolicy () {
  const [privacyPolicyData, setprivacyPolicyData] = useState(null);
  useEffect(() => {
      const fetchPrivacyPolicy = async () => {
          try {
            const id = '303';
              const response = await fetch(`${BASE_URL}/pages/${id}`);
              if (response.ok) {
                const data = await response.json();
                setprivacyPolicyData(data);
              } else {
                  throw new Error('Failed to fetch data');
              }
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
      fetchPrivacyPolicy();
  }, []);
    return (
        <>
        {privacyPolicyData && (
        <div>
            {/* <!-- Banner --> */}
            <section className="col-md-12 Schedule-Demo policy-pages" 
            style={{
                backgroundImage: `url(${privacyPolicyData.featured_image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
            }}
            >
                <div className="container">
                    <div className="row justify-content-center align-items-center">                        
                        <div className="col-md-6 text-center">
                            <h2 className="mb-5">{privacyPolicyData.title.rendered}</h2>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- banner --> */}
            {/* Privacy Policy */}
            <section className="col-md-12 policy-pages-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="mb-lg-5 mb-3">{privacyPolicyData.title.rendered}</h2>
                            <p className="mb-5" dangerouslySetInnerHTML={{ __html: privacyPolicyData.content?.rendered }}></p>
                       </div>
                    </div>
                </div>
            </section>
            {/* Privacy Policy */}
            </div>
        )}
        </>
    );
}

export default PrivacyPolicy;