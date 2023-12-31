import React, {useState, useEffect, useCallback, useRef} from "react";
import { Link } from "react-router-dom";
//import Map from '../../assets/images/map.png';
import VideoImg from '../../assets/images/video-img.png'
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../api";
import { useLanguage } from "../../components/LanguageContext";

function AboutUs() {
  const { selectedLanguage } = useLanguage();
	const prevLanguage = useRef(null);
  const { slug } = useParams();
  const [aboutData, setAboutData] = useState(null);

  const initAbout = useCallback(async (langCode) => {
		console.log('initAbout called with langCode:', langCode);
		try {

			const id = '219';
			const response = await fetch(`${BASE_URL}/pages/${id}`);

			if (response.ok) {
				const data = await response.json();

				if (langCode !== 'en') {
					const matchingLang = data.lang.find(lang => lang.code === langCode) || data.lang.find(lang => lang.id === parseInt(langCode, 10)) || data.lang.find(lang => lang.code === 'en');

					if (matchingLang) {
						const idToUse = matchingLang.id;
						const updatedResponse = await fetch(`${BASE_URL}/pages/${idToUse}`);
						if (updatedResponse.ok) {
							const updatedData = await updatedResponse.json();
							console.log('other lang data', updatedData);
							setAboutData(updatedData);
							document.title = updatedData.title.rendered || 'Brabo About';
						} else {
							setAboutData(data);
							document.title = data.title.rendered || 'Brabo Home';
							console.log('Failed to fetch data with updated language code, so en data');
						}
					} else {
						console.log('No matching language found, using default data');
						setAboutData(data);
						document.title = data.title.rendered || 'Brabo About';
					}
				} else {
					console.log('default en data');
					setAboutData(data);
					document.title = data.title.rendered || 'Brabo About';
				}
			} else {
				throw new Error('Failed to fetch data');
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}

	}, []);
  useEffect(() => {
		// Call initAbout only if selectedLanguage has changed
		if (selectedLanguage !== prevLanguage.current) {
			console.log('useEffect called with selectedLanguage:', selectedLanguage);
			console.log('useEffect called with previoes Language:', prevLanguage.current);
			initAbout(selectedLanguage);
			prevLanguage.current = selectedLanguage; // Update the previous language
			
		}
	}, [selectedLanguage, initAbout, prevLanguage]);

  // useEffect(() => {
  //     const fetchAbout = async () => {
  //         try {
  //           const id = '219';
  //             const response = await fetch(`${BASE_URL}/pages/${id}`);
  //             if (response.ok) {
  //               const data = await response.json();
  //               setAboutData(data);
  //             } else {
  //                 throw new Error('Failed to fetch data');
  //             }
  //         } catch (error) {
  //             console.error('Error fetching data:', error);
  //         }
  //     };
  //     fetchAbout();
  // }, [slug]);

  // change background image on dark and light mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [bgImage, setBgImage] = useState('');
  useEffect(() => {
    const isDark = document.body.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);
  useEffect(() => {
    const imageUrl = isDarkMode
      ? 'url(${aboutData.acf.dark_image.url})'
      : 'url(${aboutData.acf.light_image.url})';
    setBgImage(imageUrl);
  }, [isDarkMode]);
  // change background image on dark and light mode

  // change image on dark and light mode
	const [powerfullImg, setPowerfullImg] = useState('');	
	useEffect(() => {
		const handleBodyClassChange = () => {
		const isDark = document.body.classList.contains('dark');		
		if (aboutData && aboutData.acf) {
			const imageUrl = isDark
				? aboutData.acf.map_dark_image?.url || ''
				: aboutData.acf.map_light_image?.url || '';
        setPowerfullImg(imageUrl); 
			}
		};
		document.body.addEventListener('change', handleBodyClassChange);
		handleBodyClassChange();		  
	}, [aboutData]);

  return (
    <>
    {aboutData && (
      <div>
        {/* <!-- Banner --> */}  
        <div style={{overflow:"hidden"}}>     
          <section className="col-md-12 business-value banner-2 text-center about-us-banner" 
          style={{
              backgroundImage: `url(${aboutData.featured_image})`,
              backgroundPosition: 'center',
              position: 'relative',
          }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 content">
                  <h2>{aboutData.title.rendered}</h2>
                  <p className="mb-5" dangerouslySetInnerHTML={{ __html: aboutData.excerpt.rendered }}></p>
                  <div className="d-flex justify-content-center">
                    <Link to="/company/our-people" className="btn btn-primary me-lg-5 me-2">Leadership</Link>
                    <Link to="/company/careers" className="btn btn-outline-primary border-white">Careers</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>       
        </div> 
        {/* <!-- banner --> */}

        {/* <!-- Powerful-Allies --> */}
        <section className="col-md-12 Powerful-Allies text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12">
                <h2>{aboutData.acf.heading1}</h2>
                <h6 className="mb-5">One Family</h6>
                <p className="mb-5">{aboutData.acf.description1}</p>
                <div className="Powerful-Allies-img text-center">
                  <img className="img-fluid" src={powerfullImg} alt="how brabo" width="939" height="499"/>
                </div>
                <Link to={aboutData.acf.learn_more.url} className="btn btn-outline-primary border-blue">Learn more <i className="fa fa-angle-right ms-2"></i></Link>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Powerful-Allies --> */}

        {/* <!-- Our People --> */}
        <section className="col-md-12 our-people">
          <div className="container">
            <div className="row">
            <div className="col-lg-6">
                <div className="contant">
                  <h2 className="mb-4">{aboutData.acf.heading2}</h2>
                  <p className="mb-lg-4 sub-heading">{aboutData.acf.subheading2}</p>
                  <p>{aboutData.acf.description2}</p>                  
                  <Link to="/company/our-people" className="btn btn-outline-primary">Meet our Sol-Mates </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="our-people-img">
                  <img className="img-fluid" src={VideoImg} alt="case-study" width="529" height="400" />
                </div>
                <Link to="#" className="btn btn-outline-primary hide-button mt-5">Meet our Sol-Mates</Link>
              </div>              
            </div>
          </div>
        </section>
        {/* <!-- Our people --> */}

        {/* <!-- what-you-need --> */}
        <section className="col-md-12 what-you-need text-center" 
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12">
                <div className="content">
                  <h2 className="mb-3 mb-lg-5">{aboutData.acf.heading3}</h2>
                  <p className="mb-lg-5 mb-3 sub-heading">{aboutData.acf.subheading3}</p>
                  <p className="m-0">{aboutData.acf.description3}</p>
                  <p className="orange-text mb-5">All you need to do is, Reach Out.</p>
                  <Link to="/company/get-in-touch" className="btn btn-primary">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- what-you-need --> */}
      </div>
      )}
      </>
  );
}

export default AboutUs;
