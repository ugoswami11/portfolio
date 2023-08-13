import Backend from "./Backend";
import Frontend from "./Frontend";
import './skills.css';

export default function Skills(){
    return(
        <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>
            <span className="section-subtitle">My technical level</span>

            <div className="skills-container container grid">
                <Frontend/>
                <Backend/>
            </div>
        </section>
    );
}