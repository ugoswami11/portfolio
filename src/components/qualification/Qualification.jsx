import { useState } from 'react';
import './qualification.css';

export default function Qualification(){
    const [toggleQualiSection, setToggleQualiSection] = useState(2);

    const toggleTab = (index) => {
        setToggleQualiSection(index);
    }

    return(
        <section className="qualification section" id="experience">
            <h2 className="section-title">Qualification</h2>
            <span className="section-subtitle"> My personal journey</span>

            <div className="qualification-container container">
                <div className="qualification-tabs">
                    <div className={toggleQualiSection === 1 ? "qualification-button qualification-active button-flex": "qualification-button button-flex" }
                        onClick={()=> toggleTab(1)}
                    >
                        <i className='uil uil-graduation-cap qualification-icon'></i>
                        Education
                    </div>

                    <div className={toggleQualiSection === 2 ? "qualification-button qualification-active button-flex": "qualification-button button-flex" }
                        onClick={()=> toggleTab(2)}
                    >
                        <i className='uil uil-briefcase-alt qualification-icon'></i>
                        Experience
                    </div>
                </div>

                <div className="qualification-sections">
                    <div className={toggleQualiSection === 1 ? "qualification-content qualification-content-active" : "qualification-content"}>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Web development bootcamp</h3>
                                <span className="qualification-subtitle">Udemy</span>
                                <div className="qualification-calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div></div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            
                            <div>
                                <h3 className="qualification-title">Bachelors in Computer Application</h3>
                                <span className="qualification-subtitle">NSHM Knowledge Campus, Durgapur</span>
                                <div className="qualification-calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    2017-2020
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={toggleQualiSection === 2 ? "qualification-content qualification-content-active" : "qualification-content"}>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Full stack developer</h3>
                                <span className="qualification-subtitle">Cognizant</span>
                                <div className="qualification-calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    March, 2021 - present
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div></div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            
                            <div>
                                <h3 className="qualification-title">Frontend developer</h3>
                                <span className="qualification-subtitle">Cognizant</span>
                                <div className="qualification-calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    August, 2021 - February, 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Automation tester</h3>
                                <span className="qualification-subtitle">Cognizant</span>
                                <div className="qualification-calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    November, 2020 - July, 2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}