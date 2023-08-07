import footer_styles from "../styles/footer.module.css"

export default function Footer() {
    return (
        <footer id="footer" className={footer_styles.footer}>

            <div className={footer_styles.footer_top}>
                <div className="container">
                    <div className={footer_styles.row}>

                        <div className={footer_styles.footer_contact} col-lg-3 col-md-6>
                            <h3>Medilab</h3>
                            <p>
                                A108 Adam Street <br></br>
                                New York, NY 535022<br></br>
                                United States <br></br>
                                <strong>Phone:</strong> +1 5589 55488 55<br></br>
                                <strong>Email:</strong> info@example.com<br></br>
                            </p>
                        </div>
                        
                        <div className={footer_styles.footer_links} col-lg-3 col-md-6>
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className={footer_styles.footer_links} col-lg-3 col-md-6>
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container d-md-flex py-4">

                <div className="me-md-auto text-center text-md-start">

                    <div className="copyright">
                        &copy; Copyright <strong><span>Tramites Santiago</span></strong> 2023. Todos los derechos reservados
                    </div>

                    <div className={footer_styles.credits}>
                        <a href="https://www.xetid.cu">XETID</a>
                    </div>

                    <br/>

                    <div className={footer_styles.social_links} text-center text-md-right pt-3 pt-md-0>
                        <a href="https://www.twitter.com/XETID2" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="https://www.facebook.com/xetid" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="https://www.youtube.com/channel/UCAIOEM8b1tMh2VHwp8ZKBrg" className="youtube"><i className="bx bxl-youtube"></i></a>
                        <a href="https://www.telegram.me/XETID-Cuba" className="telegram"><i className="bx bxl-telegram"></i></a>
                        <a href="xetid@xetid.cu" className="correo"><i className="bx bxs-envelope"></i></a>
                    </div>
                </div>

            </div>
        </footer>

    )
    
}