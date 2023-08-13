import Data from './Data';
import Scrolldown from './Scrolldown';
import Social from './Social';
import './home.css';


export default function Home(){
    return(
        <section className="home section" id='home'>
            <div className="home-container container grid">
                <div className="home-content grid">
                    <Social/>
                    <div className="home-img">

                    </div>
                    <Data/>
                </div>
                <Scrolldown/>
            </div>
        </section>
    );
}