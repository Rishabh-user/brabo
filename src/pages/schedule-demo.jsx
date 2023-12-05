import React from "react";
import VideoImg from '../assets/images/video-img.png';
import { Link } from "react-router-dom";

function ScheduleDemo () {
    return (
        <>
            {/* <!-- Banner --> */}
            <section className="col-md-12 Schedule-Demo">
                <div className="container">
                    <div className="row flex-row-reverse align-items-center">
                        <div className="col-md-6">
                            <div className="Schedule-Demo-img">
                                <img className="img-fluid" src={VideoImg} alt="case-study" width="529" height="400" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contant">
                                <h2 className="mb-5">Schedule a Demo</h2>						
                                <p className="mb-4">See our Digital Manufacturing Platform and Solutions live in action with a personalized demo from our experts.</p>
                                <p className="mb-5 sub-heading">Elevate your Digital Manufacturing transformation programs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- banner --> */}
           {/* <!-- give A Live Demo --> */}
            <section className="col-md-12 give-live-demo business-value">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h2 className="mb-5 text-center">Give a live demo</h2>				
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="Email-field">
                                        <div className="gradient-border mb-4">
                                            <input type="name" name="name" className="form-control" placeholder="Name *" />				
                                        </div>
                                        <div className="gradient-border mb-4">
                                            <input type="email" name="email" className="form-control" placeholder="Business e-mail*" />			
                                        </div>
                                        <div className="gradient-border mb-4">
                                            <input type="name" name="name" className="form-control" placeholder="Company name*" />				
                                        </div>
                                        <div className="gradient-border mb-4">
                                            <input type="email" name="email" className="form-control" placeholder="Country*" />			
                                        </div>
                                        <div className="gradient-border mb-4">
                                            <input type="phone" name="phone" className="form-control" placeholder="Phone number*" />			
                                        </div>
                                        <div className="gradient-border mb-5">
                                            <textarea className="form-control" rows="10" cols="5" placeholder="Leave a message*"></textarea>	
                                        </div>							
                                    </div>	
                                    <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked1" />
                                    <label className="form-check-label" htmlFor="flexCheckChecked1">
                                        By clicking on Schedule a Demo, you acknowledge having read our Privacy Policy and to receive communications with regards to Solulever's products and services.
                                    </label>
                                    </div>
                                    <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                                    <label className="form-check-label" htmlFor="flexCheckChecked2">
                                        By clicking on SUBMIT, you acknowledge having read our Privacy Policy and to receive communications with regards to Solulever's products and services. I agree to the data submitted being stored andused to send me email updates from Brabo*
                                    </label>
                                    </div>
                                    <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked3" />
                                    <label className="form-check-label" htmlFor="flexCheckChecked3">
                                        I agree to receive communications regarding Solulever's products, services, and events. I can unsubscribe at any time. View <Link to="#"> privacy policy. </Link> *By clicking Submit below, you consent to allow Solulever to store and process the personal information submitted above to provide you with the content requested.
                                    </label>
                                    </div>
                                    <div className="submit-button">
                                        <button className="btn btn-primary">Subscribe</button>
                                    </div>		  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Give A Live Demo -->      */}
        </>
    );
}

export default ScheduleDemo;