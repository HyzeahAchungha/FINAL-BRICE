import React from "react";
import H5 from "../component/IMAGES/h5.jpg";
import "./readmore.css"

const Readmore= ()=>{
    return(
        <div>
            <div className="image-banner">
                <img src={H5} alt=""  className="img-fluid" />
            <div className="banner-content">
                <h1>HUIB School of Business: We Prepare You for What the World Offers Next</h1>
           
            </div>
            </div>

            <div className="page-content">
            <div className="row g-5">
            <div className="col-md-8">
              <h3 className="pb-4 mb-4 fst-italic border-bottom">
                School of Business
              </h3>
              
              <article className="blog-post">
              <h2 className="display-5 link-body-emphasis mb-1">What the World Offers</h2>
                <p className="blog-post-meta">January 1, 2024 by <a href="#">HUIB</a></p>

                <img src={H5}  height="50%" width="100%" alt="" /> <br /><br /><br />
                
                <p>
                  Our School of Business and Management Sciences is one of our oldest schools in HUIB.
                  With 38 business and Management degree programs and options in HND, B. Tech, BSc and MBA, we deliver everything a business graduate needs to lead, thrive and succeed in our dynamic, complex world.
                  Some of our key programs include; Management, Marketing, Human Resource Management, Project Management, Transport and Logistics Management, Accounting and Finance, Finance, Insurance and Risk Management Management Economics, Financial Management,
                  Tourism, Hospitality & Hotel Management, Banking and Finance, Accounting, Project Management and more
                </p><hr />
                <img src={H5}  height="50%" width="100%" alt="" /> <br /><br /><br />
                <p>
                  Our strengths are embracing innovation, adapting to challenges, and giving you the tools to solve any problem. We’re focused on the success of our students, our communities and our businesses.
                  We’re among the best business schools in Cameroon and in hybrid learning formats.
                  We’re a community of more than 15,000 ‘HUIBians’ in Business around the globe ready to support each other.
                  Let’s see what we can accomplish next.
                  For admission inquiries, please call or WhatsApp any of the following numbers <br />
                  677886820- ⁠675402368- ⁠673483542- ⁠678883228
                </p>

              </article>
                
                
              </div></div></div>

            <div className="container-fluid mt-3 mb-3 contact">
                <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                <div className="left-text">
                <h1>Leave A Comment</h1>
                <p className="text-muted">Leave a message or a recommendation for the administration for future improvements or adjustment of the programe
                </p>
            </div>

            <div className="col-8 ">
          <form action="" className="contact-form">
            <h2><strong>Send A Message</strong></h2>
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="form-group">
                  <label for="Name">Name</label>
                  <input type="text" className="form-control"/>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="form-group">
                  <label for="email">Email</label>
                  <input type="text" className="form-control"/>
                </div>
              </div>
              <div className="col-12 mt-3 mb-3">
                <div className="form-group">
                  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                </div>
              </div>
              <div className="col-6">
                <button className="btn btn-primary" type="submit">Send Message</button>
              </div>
          </div>
          </form>
        </div>

        </div></div></div>
        
        </div>
    )
}
export default Readmore
