import React, {useState, useEffect} from 'react';
//import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../../api';

function TeamModal({ showModal, handleClose, modalTitle, modalBody }) {
    const[data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(`${BASE_URL}/teams`);
            const data = await response.json();
            console.log('API Data:', data.title);
            setData(data);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, []);

  return (
   
    <>
 
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          {/* <Modal.Title>{modalTitle}</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
            <div>
                <figure>Image</figure>
                <figcaption>{data?.title?.rendered}</figcaption>
            </div>
        </Modal.Body>
        <Modal.Footer>
          qwerty
        </Modal.Footer>
      </Modal>
     
    </>
  );
}

export default TeamModal;