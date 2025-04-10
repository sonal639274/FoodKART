// import React from 'react'
import './about.css'
import './all.min.css'
import './aos.css'
import './bootstrap.min.css'
import './jquery.fancybox.min.css'
import './nice-select.css'
import './owl.carousel.min.css'
import mobile_apps from "../../assets/mobile_apps.png";
import author_01 from "../../assets/author_01.png";
import author_03 from "../../assets/author_03.png";
import step_01 from "../../assets/step_01.png";
import step_02 from "../../assets/step_02.png";
import step_03 from "../../assets/step_03.png";
import step_04 from "../../assets/step_04.png";
import about_01 from "../../assets/Untitled design.png";
// import award_logo from "../../assets/award_logo.png";
// import signature from "../../assets/signature.png";
import author_02 from "../../assets/author_02.png";
import Header from '../Header/Header'
import { Link } from 'react-router-dom'



const AboutUs = () => {
  return (
    <>
      <Header/>
    {/* <div className="page-header-wrapper" >
        <div className="page-header-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mx-auto text-center">
                        <div className="page-header-container">
                            <div className="page-header-content">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
   
    <section className="half-column-content section-ptb about">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-sm-6 mb-xs-4">
                    <div className="post-thumb text-end">
                        <img src={about_01} alt="about" className="img-fluid"/>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                    <div className="post-content">
                        <div className="section-title-3">
                            <h2 className="heading-2-extra">We Had Such Delicious Dishes Every Time</h2>
                        </div>
                        <div className="post-text">
                            <p>Vestibulum convallis, elit ac suscipit rhoncus, nisi enim posuere arcu, at venenatis
                                risus purus vitae lectus. Cras ultricies diam felis, eget malesuada lorem ultricies ac.
                                In dapibus mi quis lorem suscipit.</p>
                            <p>Cras viverra id nunc et mollis. Mauris finibus quis justo vel ornare. Donec lacinia
                                libero eros, et suscipit tellus sodales eu. Donec eget lectus convallis, faucibus mi at,
                                imperdiet velit. Ut quis efficitur turpis. Etiam consequat commodo nisl, at eleifend
                                metus iaculis sed. Nullam venenatis mauris non enim faucibus egestas. Curabitur a libero
                                nec tellus pulvinar porttitor nec id nulla.</p>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    <section className="video-area-2 bg-semi-white py-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-sm-6 mb-xs-4">
                    <div className="post-content">
                        <div className="section-title-3">
                            <h2 className="heading-2-extra">Choose The Best Quality Food For You</h2>
                        </div>
                        <div className="post-text">
                            <p>Praesent fermentum nisl at ipsum facilisis viverra. Ut elementum accumsan finibus. Cras
                                placerat lacinia mi, ac dictum ante. Donec libero enim, tincidunt sit amet venenatis id,
                                maximus eu quam. </p>
                            <ul>
                                <li><i className="far fa-check-circle"></i> Pellentesque placerat, nisi congue vehicula
                                    efficitur.</li>
                                <li><i className="far fa-check-circle"></i> Mauris sagittis odio quis erat ultricies
                                    sagittis.</li>
                                <li><i className="far fa-check-circle"></i> Suspendisse vitae varius diam, a vulputate urna.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                    <div className="video-wrapper" >
                        <div className="video-block">
                            <div className="waves wave-1"></div>
                            <div className="waves wave-2"></div>
                            <div className="waves wave-3"></div>
                            <Link className="video" data-fancybox="" to="https://www.youtube.com/watch?v=lcU3pruVyUw">
                                <i className="far fa-play-circle"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <div className="order-step-area section-ptb">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 mx-auto mb-5">
                    <div className="section-title text-center">
                        <h2 className="heading-2-extra">Easy Order Steps</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-sm-6 text-center px-0">
                    <div className="single-step pt-5">
                        <h6 className="heading-6">Select your Meal</h6>
                        <img src={step_01} alt="step one" className=""/>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 text-center px-0">
                    <div className="single-step">
                        <img src={step_02} alt="step two" className="pb-5"/>
                        <h6 className="heading-6">Fill the details</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 text-center px-0">
                    <div className="single-step pt-5">
                        <h6 className="heading-6">Pay Cash/Online</h6>
                        <img src={step_03} alt="step one" className="pt-5"/>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 text-center px-0">
                    <div className="single-step">
                        <img src={step_04} alt="step two" className="pb-5"/>
                        <h6 className="heading-6">Enjoy Your Meal</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="clients-reviews-area section-ptb">
        <div className="container">
            <div className="row mb-4">
                <div className="col-lg-8 mx-auto">
                    <div className="section-title text-center mb-3">
                        <h2 className="heading-2-extra">What Our Clients Are Saying</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="reviews-wrapper carousel-style-one owl-carousel">
                        <div className="single-review p-4 shadow bg-white mb-3">
                            <div className="client-info">
                                <div className="client-thumb">
                                    <img src={author_01} alt="author" className="img-fluid"/>
                                </div>
                                <div className="client-bio">
                                    <h6 className="heading-6-alt">Mike Klein</h6>
                                    <p>Manager at restaurent</p>
                                </div>
                            </div>
                            <div className="client-text">
                                <p>Donec euismod facilisis placerat. Mauris mi risus, dictum nec ornare vitae, iaculis
                                    lacinia augue. Fusce efficitur risus ante, sit amet bibendum.</p>
                            </div>
                            <div className="review-icons">
                                <div className="star-icons">
                                    <ul>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <div className="quote-icons">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="single-review p-4 shadow bg-white mb-3">
                            <div className="client-info">
                                <div className="client-thumb">
                                    <img src={author_02} alt="author" className="img-fluid"/>
                                </div>
                                <div className="client-bio">
                                    <h6 className="heading-6-alt">John Duo</h6>
                                    <p>Manager at restaurent</p>
                                </div>
                            </div>
                            <div className="client-text">
                                <p>Donec euismod facilisis placerat. Mauris mi risus, dictum nec ornare vitae, iaculis
                                    lacinia augue. Fusce efficitur risus ante, sit amet bibendum.</p>
                            </div>
                            <div className="review-icons">
                                <div className="star-icons">
                                    <ul>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <div className="quote-icons">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="single-review p-4 shadow bg-white mb-3">
                            <div className="client-info">
                                <div className="client-thumb">
                                    <img src={author_03} alt="author" className="img-fluid"/>
                                </div>
                                <div className="client-bio">
                                    <h6 className="heading-6-alt">Curl Markes</h6>
                                    <p>Manager at restaurent</p>
                                </div>
                            </div>
                            <div className="client-text">
                                <p>Donec euismod facilisis placerat. Mauris mi risus, dictum nec ornare vitae, iaculis
                                    lacinia augue. Fusce efficitur risus ante, sit amet bibendum.</p>
                            </div>
                            <div className="review-icons">
                                <div className="star-icons">
                                    <ul>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <div className="quote-icons">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="single-review p-4 shadow bg-white mb-3">
                            <div className="client-info">
                                <div className="client-thumb">
                                    <img src={author_01} alt="author" className="img-fluid"/>
                                </div>
                                <div className="client-bio">
                                    <h6 className="heading-6-alt">Deniel Crackes</h6>
                                    <p>Manager at restaurent</p>
                                </div>
                            </div>
                            <div className="client-text">
                                <p>Donec euismod facilisis placerat. Mauris mi risus, dictum nec ornare vitae, iaculis
                                    lacinia augue. Fusce efficitur risus ante, sit amet bibendum.</p>
                            </div>
                            <div className="review-icons">
                                <div className="star-icons">
                                    <ul>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <div className="quote-icons">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
   
 
    <div className="apps-features section-pb">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-sm-5 mb-xs-5">
                    <div className="feature-thumb">
                        <img src={mobile_apps} alt="" className="img-fluid"/>
                    </div>
                </div>
                <div className="col-lg-7 col-sm-7">
                    <div className="fetures-info">
                        <div className="section-title-3 mb-3">
                            <h2 className="heading-2-extra">Get More Feature With Our Mobile Application</h2>
                        </div>
                        <div className="plane-text">
                            <p>
                                Donec vitae porta felis. Donec est est, pretium sit amet nibh sed, blandit tincidunt
                                urna. Donec laoreet eu felis et tristique. Morbi pretium convallis mauris. Quisque
                                iaculis dolor sollicitudin est
                                consectetur.
                            </p>
                        </div>
                        <div className="features-list mb-4">
                            <ul>
                                <li><span>1</span> Follow Delivery Status</li>
                                <li><span>2</span> Order From Any Location</li>
                                <li><span>3</span> Get Important Notices</li>
                            </ul>
                        </div>
                        <div className="download-links">
                            <ul>
                                <li className="apple-store">
                                    <Link to="#">
                                        <i className="fab fa-apple"></i>
                                        <span>Available On</span>
                                        App Store
                                    </Link>
                                </li>
                                <li className="play-store">
                                    <Link to="#">
                                        <span><i className="fab fa-google-play"></i> Available On</span>
                                        Google Store
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
   
    </>
  )
}

export default AboutUs
