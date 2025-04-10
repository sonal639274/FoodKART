import './Contact.css'
import immg1 from '../../assets/contact_thumb.png'
import '../AboutUS/about.css'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
    <div className="page-wrapper section">
        <div className="contact-wrapper ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <div className="single-contact d-flex align-items-center shadow custom-round">
                            <div className="sample-icon mr-2">
<FaLocationDot/>
                            </div>
                            <div className="contact-info">
                                <h6 className="heading-6 mb-1">Location</h6>
                                <p>203, Envato ka Yents, Behind Alis Str, Melbourne, Australia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="single-contact d-flex align-items-center shadow custom-round">
                            <div className="sample-icon mr-2">
                            <FaPhoneAlt />
                            </div>
                            <div className="contact-info">
                                <h6 className="heading-6 mb-1">Call Now</h6>
                                <p>+88-7010-7010</p>
                                <p>+61 934-759-8561</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="single-contact d-flex align-items-center shadow custom-round">
                            <div className="sample-icon mr-2">
                            <MdEmail />
                            </div>
                            <div className="contact-info">
                                <h6 className="heading-6 mb-1">Email</h6>
                                <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="92fbfcf4fdd2f4fdfdf6fde0bcf1fdff">[email�protected]</a></p>
                                <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c2b1a7b0b4aba1a782a4adada6adb0eca1adaf">[email�protected]</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="contact-form-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-5 mb-lg-0 pb-5 pb-lg-0">
                        <div className="contact-form">
                            <div className="comments-form-wrapper mt-5">
                                <div className="comments-form">
                                    <form action="#">
                                        <div className="row mt-4">
                                            <div className="col">
                                                <input type="text" className="form-control shadown" placeholder="First Name" required=""/>
                                            </div>
                                            <div className="col">
                                                <input type="text" className="form-control shadown" placeholder="Last Name" required=""/>
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col">
                                                <input type="text" className="form-control shadown" placeholder="Email" required=""/>
                                            </div>
                                            <div className="col">
                                                <input type="text" className="form-control shadown" placeholder="Phone" required=""/>
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col">
                                                <textarea name="user_message" id="user_message" cols="30" rows="5" className="form-control" placeholder="Review Here..."></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" className="default-btn mt-5">Submit Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-xs-none">
                        <div className="contact-thumb text-center">
                            <img src={immg1} alt="contact" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="subscribe-area section-ptb-2">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 mb-xs-5">
                    <div className="subscribe-title text-white">
                        <i className="fas fa-envelope-open-text"></i>
                        <h2 className="heading-2-extra  text-white d-inline-block mb-0 ml-2">Subscribe To Our Newsletter
                        </h2>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="subscribe-form">
                        <form action="#">
                            <div className="form-group d-flex mb-0">
                                <input type="email" className="form-control" placeholder="Your Email" required=""/>
                                <button type="submit">Subscribe Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact
