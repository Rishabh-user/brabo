import React from "react";
import { Link } from "react-router-dom";
import CohesiveIcon from '../../assets/images/Cohesive-icon.png'

function BecomePartner () {
    return (
        <>
            {/* <!-- Banner --> */}
            <section className="col-md-12 Become-Partner">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-12 text-center">
                            <h2 className="mb-5">Become a Partner</h2>
                            <div className="row justify-content-center">
                                <div className="col-md-7">
                                    <div className="contant">						
                                        <p className="mb-4">We believe in simplified integrations. That's why we strive to bridge knowledge and departments, software and solutions, technologies and organizations into one unified approach.</p>
                                        <p className="mb-5">By partnering with us, you'll gain access to a powerful network of experts who can help you navigate the complexities of Industry 4.0.</p>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <p className="text-hard">Let's work together to fight complexity with simplicity and achieve your goals with ease.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- banner --> */}

            {/* <!-- partners --> */}
            <section className="col-md-12 partners business-value">
                <div className="container">
                    <div className="row justify-content-center">				
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="gradient-border partners-box h-100">
                                <div className="content text-center">
                                    <div className="box-img text-center mb-5">
                                        <img className="img-fluid" src={CohesiveIcon} alt="Cohesive-icon" width="60" height="45" />
                                    </div>
                                    <p className="heading mb-3">Implementation Partner</p>
                                    <p className="mt-">Leveraging Brabo for your servicesnatoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="gradient-border partners-box h-100">
                                <div className="content text-center">
                                    <div className="box-img text-center mb-5">
                                        <img className="img-fluid" src={CohesiveIcon} alt="Cohesive-icon" width="60" height="45" />
                                    </div>
                                    <p className="heading mb-3">Build on top of Brabo</p>
                                    <p className="mt-">Power your industry offerings by building industry solutions for your market segment on top of Brabo. Don't call out the categories, just mention this in an ongoing story format. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="gradient-border partners-box h-100">
                                <div className="content text-center">
                                    <div className="box-img text-center mb-5">
                                        <img className="img-fluid" src={CohesiveIcon} alt="Cohesive-icon" width="60" height="45" />
                                    </div>
                                    <p className="heading mb-3">Integrate with Brabo</p>
                                    <p className="mt-">OT/IT systemsChannel Partners - seel in your industry/market that you have your services in. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- partners --> */}

            {/* <!-- Company Detail --> */}
            <section className="col-md-12 Personal-Detail">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h2 className="mb-5 text-center">Personal Detail</h2>				
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="Email-field">
                                        <div className="gradient-border mb-4">
                                            <input type="name" name="name" className="form-control" placeholder="Name *" />				
                                        </div>
                                        <div className="gradient-border mb-4">
                                            <input type="phone" name="phone" className="form-control" placeholder="Contact no*" />				
                                        </div>
                                        <div className="gradient-border mb-4">
                                            <input type="email" name="email" className="form-control" placeholder="E-mail*" />			
                                        </div>		  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            {/* <!-- Company Detail --> */}

            {/* <!-- Company Detail --> */}
            <section className="col-md-12 Company-Detail business-value">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <h2 className="mb-5 text-center">Company Detail</h2>				
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="Email-field">
                                        <div className="gradient-border mb-4">
                                            <input type="name" name="name" className="form-control" placeholder="Name *" />				
                                        </div>
                                        <div className="gradient-border mb-4">
                                            <input type="phone" name="phone" className="form-control" placeholder="Contact no*" />				
                                        </div>
                                        <div className="gradient-border mb-4">
                                            <input type="email" name="email" className="form-control" placeholder="E-mail*" />			
                                        </div>
                                        <div className="gradient-border mb-4">
                                            <input type="name" name="name" className="form-control" placeholder="Company website*" />				
                                        </div>
                                        <div className="gradient-border mb-4">
                                            <input type="text" name="text" className="form-control" placeholder="Number of employee*" />			
                                        </div>
                                        <div className="gradient-border mb-4">
                                            <input type="number" name="number" className="form-control" placeholder="Number of employee*" />		
                                        </div>
                                        <div className="gradient-border mb-4">
                                            <input type="text" name="text" className="form-control" placeholder="Type of partnership*" /> 			
                                        </div>
                                        <div className="gradient-border mb-4">
                                            <textarea className="form-control" rows="10" cols="5" placeholder="Leave a message*"></textarea>	
                                        </div>
                                        <div className="gradient-border mb-5">
                                            <input type="text" name="text" className="form-control" placeholder="How did you hear about the partner page*" />			
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
            {/* <!-- Company Detail --> */}
        </>
    );
}

export default BecomePartner;