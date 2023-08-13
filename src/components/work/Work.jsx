import Works from './Works';
import './work.css';

export default function Work(){
    return(
        <section className="work section" id='portfolio'>
            <h2 className="section-title">Portfolio</h2>
            <span className="section-subtitle">Most recent works</span>

            <Works/>
        </section>
    );
}