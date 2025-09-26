import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


function Footer() {
    return (
        <>
            <section className='Footer'>
                <div className="footer-img">
                    <div className="logo-img">
                        <img src="logo.png" alt="" width="74px " />
                    </div>
                    <div className="pattern-img">
                        <img src="footer-pattern.png" alt="" width="114px" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-xl-3">
                            <h3>Information</h3>
                            <ul>
                                <li>
                                    Home
                                </li>
                                <li>
                                    Blog
                                </li>
                                <li>
                                    About Us
                                </li>
                                <li>
                                    Menu
                                </li>
                                <li>
                                    Contact Us
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                            <h3>Top Items</h3>
                            <ul>
                                <li>
                                    Pepperoni
                                </li>
                                <li>
                                    Swiss Mushroom
                                </li>
                                <li>
                                    Barbeque Chicken
                                </li>
                                <li>
                                    Vegetarian
                                </li>
                                <li>
                                    Ham & Cheese
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                            <h3>Others</h3>
                            <ul>
                                <li>
                                    Checkout
                                </li>
                                <li>
                                    Cart
                                </li>
                                <li>
                                    Product
                                </li>
                                <li>
                                    Locations
                                </li>
                                <li>
                                    Legal
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                            <h3>Social Media</h3>
                            <ul className='socialmedia d-flex'>
                                <li>
                                    <FaFacebookSquare />

                                </li>
                                <li>
                                    <FaPinterestSquare />

                                </li>
                                <li>
                                    <FaSquareTwitter />


                                </li>
                                <li>
                                    <FaInstagramSquare />

                                </li>
                            </ul>

                            <p>Signup and get exclusive offers and coupon codes</p>

                            <button className='rounded-5 py-2 px-4 bg-warning border-0 text-white fw-bold'>SIGN UP</button>
                        </div>

                        <div className="col-12">
                            <div className="row">
                                <div className="col-8">
                                    <ul className='legal d-flex'>
                                        <li>Privacy Policy</li>
                                        <li>Refund Policy</li>
                                        <li>Cookie Policy</li>
                                        <li>Terms & Conditions</li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <ul className='app d-flex justify-content-end'>
                                        <li>
                                            <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/google-play.png" alt="" />

                                        </li>
                                        <li>
                                            <img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/app-stor.png" alt="" />

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Footer;