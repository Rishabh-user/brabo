import React from 'react';


function GetinTouch() {

  return (
    <div>
      <section className="col-md-12 Schedule-Demo">
            <div className="container">
                <div className="row justify-content-center text-center">                    
                    <div className="col-md-6">
                        <div className="contant">
                            <h2 className="mb-5">Get in touch</h2>						
                            <p className="mb-4">Do you have a question about our product and Solution?</p>
                            <p className="mb-5">Please enter your information, describe your inquiry and a member of the team will get back to you as soon as possible.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-lg-5">
                        <div className="col-md-8">				
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="Email-field">
                                        <div className="gradient-border mb-4">
                                            <input type="name" name="name" className="form-control" placeholder="First name*" />				
                                        </div>
                                        <div className="gradient-border mb-4">
                                            <input type="name" name="name" className="form-control" placeholder="Last Name*" />				
                                        </div>
                                        <div className="gradient-border mb-4">
                                            <input type="email" name="email" className="form-control" placeholder="Work e-mail*" />			
                                        </div>
                                        <div className="gradient-border mb-4">
                                            <input type="name" name="name" className="form-control" placeholder="Company name*" />				
                                        </div>
                                        <div className="gradient-border mb-4">
                                            <input type="email" name="email" className="form-control" placeholder="Job Title*" />			
                                        </div>
                                        <div className="gradient-border mb-4">
                                            <input type="phone" name="phone" className="form-control" placeholder="Industry*" />			
                                        </div>
                                        <div className="gradient-border mb-5">
                                            <textarea className="form-control" rows="10" placeholder="More about your inquiry*"></textarea>	
                                        </div>							
                                    </div>	
                                    <div className="form-check mb-3 mt-lg-5">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked1" />
                                    <label className="form-check-label" htmlFor="flexCheckChecked1">
                                        By clicking on Schedule a Demo, you acknowledge having read our Privacy Policy and to receive communications with regards to Solulever's products and services.
                                    </label>
                                    </div>                                    
                                    <div className="submit-button text-center mt-lg-5 pt-lg-5">
                                        <button className="btn btn-primary">Submit</button>
                                    </div>		  
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    </div>
  );
}

export default GetinTouch;
