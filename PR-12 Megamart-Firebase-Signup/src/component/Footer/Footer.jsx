import { Link } from 'react-router';
import './Footer.css'
const Footer = () => {
    return (
        <>
            <section className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-3">
                            <h5>TOP CATEGORIES</h5>
                            <div className='footer-list'>
                                <ul className="ps-0">
                                    <li><Link>Men</Link></li>
                                    <li><Link>Women</Link></li>
                                    <li><Link>Kids</Link></li>
                                    <li><Link>Footwear</Link></li>
                                    <li><Link>Innerwear</Link></li>
                                    <li><Link>Accessoies</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <h5>TOP BRANDS</h5>
                            <div className='footer-list'>
                                <ul className='ps-0'>
                                    <li><Link>U.S. Polo Assn.</Link></li>
                                    <li><Link>Arrow</Link></li>
                                    <li><Link>Flying Machine</Link></li>
                                    <li><Link>Tommy Hilfiger</Link></li>
                                    <li><Link>Calvin Klein</Link></li>
                                    <li><Link>AD By Arvind</Link></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <h5>USEFUL LINKS</h5>
                            <div className='footer-list'>
                                <ul className='ps-0'>
                                    <li><Link>About us</Link></li>
                                    <li><Link>Privacy Policy</Link></li>
                                    <li><Link>Terms and Conditions</Link></li>
                                    <li><Link>Returns and Cancellation Policy</Link></li>
                                    <li><Link>Help and FAQ's</Link></li>
                                    <li><Link>Delivery and Shipping Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <h5>CONTACT US</h5>
                            <div className='footer-list'>
                                <ul className='ps-0'>
                                <li><Link>+91-1234567899</Link></li>
                                <li><Link>care@megamartfashion.com</Link></li>
                                <li><Link>Message Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer;