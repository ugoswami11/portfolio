import './footer.css'

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container container">
                <h1 className="footer-title">Utkarsh</h1>

                <ul className="footer-list">
                    <li>
                        <a href="#about" className="footer-link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer-link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer-link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer-social">
                    <a href="https://www.instagram.com/ugoswami11/" target='_blank' className="footer-social-link">
                        <i class="bx bxl-instagram"></i>
                    </a>
                    <a href="https://twitter.com/ugoswami11" target='_blank' className="footer-social-link">
                        <i class="bx bxl-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/ugoswami11/" target='_blank' className="footer-social-link">
                        <i class="bx bxl-linkedin"></i>
                    </a>
                </div>
                <span className="footer-copy">
                    &#169; Utkarsh Goswami, All rights reserved
                </span>
            </div>
        </footer>
    );
}