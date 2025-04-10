import img1 from "../../assets/01_1.jpg";
import img2 from "../../assets/02.png";
import img3 from "../../assets/03.png";
import img4 from "../../assets/04.png";
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <>
      <div className="blog-area section">
        <div className="container">
            <div className="row mb-4">
                <div className="col-lg-8 mx-auto">
                    <div className="section-title text-center mb-3">
                        <h2 className="heading-2-extra">Our Latest Blog & News</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-xs-5">
                    <div className="single-blog">
                        <div className="card border-0">
                            <Link to="#"><img src={img1} className="card-img-top pb-3" alt="blog title"/></Link>
                            <div className="post-body">
                                <h5 className="heading-5"><Link to="#">All City Cafes And Restaurants Switched To Delivery
                                        Mode</Link></h5>
                                <p className="card-text">
                                    Nam facilisis id metus non mollis. Curabitur euismod in augue eu efficitur. Etiam
                                    imperdiet pretium.
                                </p>
                                <div className="post-footer pt-3">
                                    <div className="post-date">
                                        <p><i className="fas fa-calendar-alt"></i> 7 March, 2020</p>
                                    </div>
                                    <div className="post-feedback">
                                        <div className="comments-count pr-3">
                                            <i className="fas fa-comment"></i>
                                            <span>125</span>
                                        </div>
                                        <div className="views-count">
                                            <i className="fas fa-eye"></i>
                                            <span>250</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="post-lists">
                        <div className="single-blog">
                            <div className="post-thumb pr-3">
                                <Link to="#">
                                    <img src={img2} className="card-img-top pb-3" alt="blog title"/>
                                </Link>
                            </div>
                            <div className="post-body">
                                <h5 className="heading-5"><Link to="#">Creative Packaging as a Marketing Move Minus eos
                                        egestas</Link></h5>
                                <div className="post-footer pt-2">
                                    <div className="post-date">
                                        <p><i className="fas fa-calendar-alt"></i> 7 March, 2020</p>
                                    </div>
                                    <div className="post-feedback">
                                        <div className="comments-count pr-3">
                                            <i className="fas fa-comment"></i>
                                            <span>125</span>
                                        </div>
                                        <div className="views-count">
                                            <i className="fas fa-eye"></i>
                                            <span>250</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-blog">
                            <div className="post-thumb pr-3">
                                <Link to="#">
                                    <img src={img3} className="card-img-top pb-3" alt="blog title"/>
                                </Link>
                            </div>
                            <div className="post-body">
                                <h5 className="heading-5"><Link to="#">Creative Packaging as a Marketing Move Minus eos
                                        egestas</Link></h5>
                                <div className="post-footer pt-2">
                                    <div className="post-date">
                                        <p><i className="fas fa-calendar-alt"></i> 7 March, 2020</p>
                                    </div>
                                    <div className="post-feedback">
                                        <div className="comments-count pr-3">
                                            <i className="fas fa-comment"></i>
                                            <span>125</span>
                                        </div>
                                        <div className="views-count">
                                            <i className="fas fa-eye"></i>
                                            <span>250</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-blog">
                            <div className="post-thumb pr-3">
                                <Link to="#">
                                    <img src={img4} className="card-img-top pb-3" alt="blog title"/>
                                </Link>
                            </div>
                            <div className="post-body">
                                <h5 className="heading-5"><Link to="#">Creative Packaging as a Marketing Move Minus eos
                                        egestas</Link></h5>
                                <div className="post-footer pt-2">
                                    <div className="post-date">
                                        <p><i className="fas fa-calendar-alt"></i> 7 March, 2020</p>
                                    </div>
                                    <div className="post-feedback">
                                        <div className="comments-count pr-3">
                                            <i className="fas fa-comment"></i>
                                            <span>125</span>
                                        </div>
                                        <div className="views-count">
                                            <i className="fas fa-eye"></i>
                                            <span>250</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <div className="subscribe-area section-ptb-2" >
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

export default Blog
