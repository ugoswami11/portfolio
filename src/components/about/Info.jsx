import './about.css';

export default function Info(){
    return(
        <div className="about-info grid">
            <div className="about-box">
                <i className='bx bx-award about-icon' ></i>
                <h3 className="about-title">Experience</h3>
                <span className="about-subtitle">3 years working</span>
            </div>
            <div className="about-box">
                <i className='bx bx-briefcase-alt about-icon' ></i>
                <h3 className="about-title">Completed</h3>
                <span className="about-subtitle">5+ projects</span>
            </div>
            <div className="about-box">
                <i class='bx bx-buildings about-icon'></i>
                <h3 className="about-title">Organization</h3>
                <span className="about-subtitle">Cognizant</span>
            </div>
        </div>
    );
}