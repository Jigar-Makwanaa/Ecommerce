import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="foot-newsletter">
                    <div className="container">
                        <div className="row">
                            <div className="main">
                                <div className="left-side">
                                    <div className="icon">
                                        <i class="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className="content">
                                        <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                                        <p>Get all the latest information on Events, Sales and Offers.</p>
                                    </div>
                                </div>
                                <div className="right-side">
                                    <div className="main">
                                        <div className="search">
                                            <input type="text" placeholder='Your E-mail address' />
                                        </div>
                                        <div className="btn">
                                            <a href="#">SUBSCRIBE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="foot-content">
                    <div className="container">
                        <div className="row">
                            <div className="main">
                                <div className="address">
                                    <div className="logo">
                                        <img src="../logo.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h3>Got Question? Call us 24/7</h3>
                                        <h2>1-800-570-7777
                                        </h2>
                                        <p>Register now to get updates on pronot get <br /> up icons & coupons ster now toon.</p>
                                    </div>
                                    <div className="icon">
                                        <ul>
                                            <li>
                                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="fa-brands fa-youtube"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="fa-brands fa-pinterest"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box">
                                    <h3>COMPANY</h3>
                                    <ul>
                                        <li>About Us</li>
                                        <li>Team Member</li>
                                        <li>Career</li>
                                        <li>Contact Us</li>
                                        <li>Affilate</li>
                                        <li>Order History</li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <h3>MY ACCOUNT</h3>
                                    <ul>
                                        <li>Track My Order</li>
                                        <li>View Cart</li>
                                        <li>Sign In</li>
                                        <li>Help</li>
                                        <li>My Wishlist</li>
                                        <li>Privacy Policy</li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <h3>CUSTOMER SERVICE</h3>
                                    <ul>
                                        <li>Payment Methods</li>
                                        <li>Money-back guarantee!</li>
                                        <li>Product Returns</li>
                                        <li>Support Center</li>
                                        <li>Shipping</li>
                                        <li>Term and Conditions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer