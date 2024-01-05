import React from "react";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import creativePeople from '../../assets/images/creavite-people.jpg'

function ThePlateform() {
    return(
        <>
            {/* <!-- Platform-Banner --> */}
            <section class="col-md-12 Platform-banner mb-5 mt-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            <h1 class="mb-4 text-center">The Platform</h1>	
                            <p class="mb-2 text-center">Starting with the 5 pillars of- connect, context, analyse, react and Historize.</p>	
                            <p class="slim-text text-center">Define Architecture in a simplified fashion with a diagram and little text mentioned below-</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Platform-Banner --> */}

            {/* <!-- Platform-tabs-one --> */}
            <section class="col-md-12 Platform-tabs mb-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div className="col-md-12">
                            <div class="heading mb-5">
                                <p class="mb-4">Simplified Implementation</p>
                            </div>                        
                            <Tabs
                                defaultActiveKey="dashboard-builder"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="dashboard-builder" title="Dashboard Builder">
                                    <div>
                                        <p className="mt-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="cep" title="CEP">
                                    <div>
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="kpi" title="KPI Builder">
                                    <div>
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="contextualizationpi" title="Contextualization">
                                    <div>
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Platform-tabs-one --> */}

            {/* <!-- Platform-tabs-two --> */}
            <section class="col-md-12 Platform-tabs mb-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div className="col-md-12">
                            <div class="heading mb-5">
                                <p class="mb-4">Build your own</p>
                            </div>
                            <Tabs
                                defaultActiveKey="apps"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="apps" title="apps">
                                    <div>
                                        <p className="mt-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="analytics" title="Analytics">
                                    <div>
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="sm-workflows" title="SM workflows">
                                    <div>
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="automation" title="Automation">
                                    <div>
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="northbound" title="Northbound">
                                    <div>
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Platform-tabs-two --> */}

            {/* <!-- Platform-tabs-three --> */}
            <section class="col-md-12 Platform-tabs mb-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div className="col-md-12">
                            <div class="heading mb-5">
                                <p class="mb-4">Comprehensive integration (Plug & play )</p>
                            </div>
                            <Tabs
                                defaultActiveKey="drivers"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="drivers" title="Drivers">
                                    <div>
                                        <p className="mt-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="it-integration" title="IT Integration">
                                    <div>
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Platform-tabs-three --> */}

            {/* <!-- Platform-tabs-four --> */}
            <section class="col-md-12 Platform-tabs mb-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div className="col-md-12">
                            <div class="heading mb-5">
                                <p class="mb-4">Cloud Ecosystem</p>
                            </div>                       
                            <Tabs
                                defaultActiveKey="aws"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="aws" title="AWS">
                                    <div>
                                        <p className="mt-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="gcp" title="GCP">
                                    <div>
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="azure" title="Azure">
                                    <div>
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Platform-tabs-four --> */}

            {/* <!-- Platform-center-button --> */}
            <section class="col-md-12">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="submit-button text-center">
                            <button class="btn btn-primary">Sign up for a Demo</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Platform-center-button --> */}

            {/* <!-- How it works --> */}
            <section class="col-md-12 Platform-works text-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="content p-5">
                            <h2 class="mb-5">How it works?</h2>
                            <p class="mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>
                        </div>
                        <div class="Dashboard-img text-center mb-5">
                            <img class="img-fluid" src={creativePeople} alt="creavite-people" width="1366" height="760"/>
                        </div>
                        <div class="submit-button text-center">
                            <button class="btn btn-primary">Get in touch</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- How it works --> */}

            {/* <!-- Platform-center-heading --> */}
            <section class="col-md-12 Platform-banner">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="text-center">
                            <h1 class="mb-4 text-center">The Edge</h1>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Platform-center-heading --> */}

            {/* <!-- Platform-tabs-five --> */}
            <section class="col-md-12 Platform-tabs mb-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div className="col-md-12">
                            <div class="heading mb-5">
                                <p class="mb-4">BLA</p>
                            </div>
                            <Tabs
                                defaultActiveKey="what-does"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="what-does" title="What is does">
                                    <div>
                                        <p className="mt-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="configuration" title="Configuration">
                                    <div>
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="models" title="Models">
                                    <div>
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Platform-tabs-five --> */}

            {/* <!-- Platform-tabs-five --> */}
            <section class="col-md-12 Platform-tabs">
                <div class="container">
                    <div class="row justify-content-center">
                        <div className="col-md-12">
                            <div class="heading mb-5">
                                <p class="mb-4">Power of cloud at the edge</p>
                            </div>
                            <Tabs
                                defaultActiveKey="large-data"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="large-data" title="Large data volume scenaios">
                                    <div>
                                        <p className="mt-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="real-time" title="Real time use cases">
                                    <div>
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="cloud-connectors" title="Cloud Connectors">
                                    <div>
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Platform-tabs-five --> */}

            {/* <!-- BEA --> */}
            <section class="col-md-12 Platform-tabs">
                <div class="container">
                    <div class="row justify-content-center">
                        <div className="col-md-12">
                            <div class="heading mb-5">
                                <p class="mb-4">BEA</p>
                            </div>
                            <Tabs
                                defaultActiveKey="bea"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="bea" title="Write up on BEA">
                                    <div>
                                        <p className="mt-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- BEA --> */}
        </>
    )
}

export default ThePlateform;