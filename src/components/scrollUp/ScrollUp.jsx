import './scrollUp.css';

export default function ScrollUp(){
    

    window.addEventListener('scroll', function(){
        const scrollup = document.querySelector(".scrollup");
        if(this.scrollY >= 560) scrollup.classList.add("show-scroll");
        else scrollup.classList.remove("show-scroll");
    });

    return(
        
        <a href="#home" className="scrollup">
            <i className="uil uil-arrow-up scrollup-icon"></i>
        </a>
    );
}
