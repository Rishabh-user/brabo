import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
// import Profile1 from '../../assets/images/profile-1.png';
// import Profile2 from '../../assets/images/profile-2.png';
// import Profile3 from '../../assets/images/profile-3.png';

import { Modal } from "react-bootstrap";
import { BASE_URL } from "../../api";

function OurPeople() {
  const [show, setShow] = useState(false);
  const [setSelectedId] = useState(null);
    const [selectedData, setSelectedData] = useState({});
   
  const handleShow = async (id) => {
    setSelectedId(id); // Set the selected ID
    setShow(true); // Show the modal
    
    try {
        const response = await fetch(`${BASE_URL}/teams/${id}`); // Fetch data based on the selected ID
        const data = await response.json();
        setSelectedData(data); // Set the fetched data in state
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
const handleClose = () => {
    setShow(false);
    setSelectedId(null);
    
    setSelectedData({});
};
  const[data, setData] = useState([]);
  //const[modalData, setModalDataById] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(`${BASE_URL}/teams`);
            const data = await response.json();           

            console.log('API Data:', data);
            setData(data);

            
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };
        fetchData();
    }, []);
    

    return (
        <div>
            <section className="col-md-12 profile">
                <div className="container">
                    <div className="mb-5 text-center">
                    <h2 className="mb-5">Solulever’s Finest</h2>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="row justify-content-center">
                        {data.map( (teams, index) => (
                            <div className="col-md-3 mb-5" key={index}> 
                                <div className="gradient-border profile-box h-100"  onClick={() => handleShow(teams.id)}>
                                    <div className="content text-center">
                                        <div className="box-img text-center mb-4">
                                        <img
                                            className="img-fluid"
                                            src={teams.featured_image}
                                            alt="profile-1"
                                            width={239}
                                            height={223}
                                        />
                                        </div>
                                        <p className="heading">{teams.title.rendered}</p>
                                        <p className="mb-3" dangerouslySetInnerHTML={{ __html: teams.excerpt.rendered || '' }}></p>

                                        <Link to="#">Read Bio <i className="fa fa-angle-right ms-1"></i></Link>
                                    </div>
                                </div>
                                
                            </div>
                        ))}
                        <Modal className="teams-modal" show={show} onHide={handleClose} size="lg" centered>
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="team-popup">
                                    <figure><img src={selectedData.featured_image} alt="" /></figure>
                                    <figcaption>
                                        <h4>{selectedData.title?.rendered}</h4>
                                        <p className="mb-3" dangerouslySetInnerHTML={{ __html: selectedData.excerpt?.rendered}}></p>
                                        <p className="mb-3" dangerouslySetInnerHTML={{ __html: selectedData.content?.rendered}}></p>
                                    </figcaption>
                                </div>
                               
                             
                                {selectedData.acf && selectedData.acf?.social_media_link ? (
                                    <Link to={selectedData.acf?.social_media_link.url} className="social-popup">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </Link>
                                    ) : (
                                        <span>Loading</span>
                                    )}
                            </Modal.Body>
                        </Modal>
                        </div> 
                    </div>
                    </div>
                    <div className="text-center mt-5 mb-5">
                        <Link to="#">Load More <br />
                            <span className="gradient-border load-icon">
                                <span className="content p-3"><i className="fa fa-angle-down ms-1"></i></span>
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
            
        </div>
        );
}

export default OurPeople;