import React, {useState, useEffect, useCallback} from "react";
import { Link } from "react-router-dom";

import { Modal } from "react-bootstrap";
import { BASE_URL } from "../../api";

function OurPeople() {
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});   
  const handleShow = async (id) => {
        setShow(true); // Show the modal        
        try {
            const response = await fetch(`${BASE_URL}/teams/${id}`); // Fetch data based on the selected ID
            const data = await response.json();
            setSelectedData(data); 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handleClose = () => {
        setShow(false);        
        setSelectedData({});
    };
    const [teamData, setTeamData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    
    const fetchData = useCallback(async () => {
        try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/teams?page=${currentPage}`);
        if (response.ok) {
            const data = await response.json();
            setTeamData((prevData) => {
                const filteredData = data.filter((item) => !prevData.some((existingItem) => existingItem.id === item.id));
                return [...prevData, ...filteredData];
            });
        } else {
            throw new Error('Failed to fetch data');
        }
        } catch (error) {
        console.error('Error fetching data:', error);
        } finally {
        setLoading(false);
        }
    }, [currentPage]);
    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const loadMore = () => {
        setCurrentPage(currentPage + 1);
    };

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
                        {teamData.map( (teams, index) => (
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
                                        <span></span>
                                    )}
                            </Modal.Body>
                        </Modal>
                        </div> 
                    </div>
                    </div>
                    <div className="text-center mt-5 mb-5"> 
                        <button type="button" onClick={loadMore} className="load-more-btn">Load More <br />
                            <span className="gradient-border load-icon">
                                <span className="content p-3"><i className="fa fa-angle-down ms-1"></i></span>
                            </span>
                        </button>
                      
                    </div>
                </div>
            </section>
            
        </div>
        );
}

export default OurPeople;