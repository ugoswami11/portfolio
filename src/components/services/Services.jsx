import { useState } from 'react';
import './services.css';

export default function Services(){
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    }

    return(
        <section className="services section" id="services">
            <h2 className="section-title">Services</h2>
            <span className="section-subtitle">What I offer</span>

            <div className="services-container container grid">
                <div className="services-content">
                    <div>
                        <i className="uil uil-web-grid services-icon"></i>
                        <h3 className="services-title">Product designer</h3>
                    </div>

                    <span className="services-button" onClick={()=> toggleTab(1)}>View more
                        <i className="uil uil-arrow-right services-button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i className="uil uil-times services-modal-close"
                                onClick={() => toggleTab(0)}></i>

                            <h3 className="services-modal-title">Product designer</h3>
                            <p className="services-modal-description">

                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        I create UX element interactions.
                                    </p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        I position your company brand.
                                    </p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Web page development
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services-content">
                    <div>
                        <i className="uil uil-web-grid services-icon"></i>
                        <h3 className="services-title">Product designer</h3>
                    </div>

                    <span className="services-button" onClick={()=> toggleTab(2)}>View more
                        <i className="uil uil-arrow-right services-button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i className="uil uil-times services-modal-close"
                                onClick={() => toggleTab(0)}></i>

                            <h3 className="services-modal-title">Product designer</h3>
                            <p className="services-modal-description">

                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        I create UX element interactions.
                                    </p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        I position your company brand.
                                    </p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Web page development
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services-content">
                    <div>
                        <i className="uil uil-web-grid services-icon"></i>
                        <h3 className="services-title">Product designer</h3>
                    </div>

                    <span className="services-button" onClick={()=> toggleTab(3)}>View more
                        <i className="uil uil-arrow-right services-button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i className="uil uil-times services-modal-close"
                                onClick={() => toggleTab(0)}></i>

                            <h3 className="services-modal-title">Product designer</h3>
                            <p className="services-modal-description">

                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        I create UX element interactions.
                                    </p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        I position your company brand.
                                    </p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Web page development
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}