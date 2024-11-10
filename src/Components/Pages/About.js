import React from "react";
import Navbar from "../Navbar.js";
import Footer from "../Footer.js";
import { Helmet } from "react-helmet";
import "bootstrap";
import "../Css/About.css";
import Investyx_S from "../Images/Investyx_S.png";  // Keeping image name unchanged

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: window.location.href,
    };
  }

  render() {
    return (
      <div className="about">
        <Helmet>
          <title>fundify | About</title> {/* Updated title */}
        </Helmet>
        <div className="container-fluid">
          <Navbar />
          <section id="about-text">
            <div className="container">
              <div className="row">
                <div className="about-heading">
                  <h2>
                    Using Artificial Intelligence to Make Investing Easier
                  </h2>
                </div>
                <hr className="about-horizontal-line" />
                <div className="about-passage ">
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        We started creating fundify on the 1st of September 2024
                        with a clear goal: to create a single unique platform
                        that could answer all the "When", "Where", and "How
                        Much" kind of questions when it comes to investing.
                      </p>
                      <p>
                        When we started investing, we suffered innumerable
                        losses at the hands of various stocks, mainly because of
                        the lack of knowledge. To get back on our feet, we
                        decided to use our technical skills to solve all our
                        financial questions.
                      </p>
                      <p>
                        We created this platform as a submission for our Mini
                        Project in our 3rd Year, but decided, why stop there? We
                        realized the potential and possible future of this idea,
                        and that's why we presented this to MIT WPU University.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        MIT-WPU's Incubation Center has helped us harness our
                        skills and create something that could be loved and used
                        all over India. Along with their guidance and support,
                        they have mentored us and played a crucial role in
                        building the start-up we are today.
                      </p>
                      <p>
                        After a long and hard struggle, we have achieved a
                        milestone in being one of the very few companies that
                        provide financial support at a cheap price. But our
                        journey does not end there. We plan on creating more
                        features using our technical skills to make people
                        wealthier and, hopefully, make the world a better place.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="about-people">
            <div className="container">
              <div className="row">
                <div className="about-people-heading">
                  <h2>Founders</h2>
                </div>
                <hr className="about-horizontal-line" />
                <div className="row about-people-photos justify-content-around align-items-center ">
                  <div className="col-md-3 col-sm-6 about-person">
                    <img
                      src={Investyx_S}
                      alt="Sudhanshu Athanimath"
                      className="about-photo"
                    />
                    <div className="about-overlay-text">
                      <h4>Sudhanshu Athanimath</h4>
                      <div className="founder">
                        <h6>Co-Founder, CTO</h6>
                      </div>
                      <br></br>
                      <h5>
                        Sudhanshu specializes in Deep Learning and is the Lead
                        Backend and API Developer. So if anything goes wrong,
                        you know who to blame.
                      </h5>
                      <div className="social-row row justify-content-center align-items-center">
                        <div className="social-list col-3">
                          <div className="social-item">
                            <a
                              href="https://github.com"
                              className="social-link"
                            >
                              <i className="fab fa-github"></i>
                            </a>
                          </div>
                        </div>
                        <div className="social-list col-3">
                          <div className="social-item">
                            <a
                              href="https://www.linkedin.com"
                              className="social-link"
                            >
                              <i className="fab fa-linkedin"></i>
                            </a>
                          </div>
                        </div>
                        <div className="social-list col-3">
                          <div className="social-item">
                            <a
                              href="https://twitter.com/"
                              className="social-link"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 about-person">
                    <img
                      src={Investyx_S}
                      alt="Rishabh Oswal"
                      className="about-photo"
                    />
                    <div className="about-overlay-text">
                      <h4>Rishabh Oswal</h4>
                      <h6>Co-Founder, COO</h6>
                      <br></br>
                      <h5>
                        Rishabh is good (like Really Good) in the Frontend
                        aspect of a project and is the Lead Frontend Developer
                        for fundify.
                      </h5>
                      <div className="social-row row justify-content-center align-items-center">
                        <div className="social-list col-3">
                          <div className="social-item">
                            <a
                              href="https://github.com/pegacheex"
                              className="social-link"
                            >
                              <i className="fab fa-github"></i>
                            </a>
                          </div>
                        </div>
                        <div className="social-list col-3">
                          <div className="social-item">
                            <a
                              href="h"
                              className="social-link"
                            >
                              <i className="fab fa-linkedin"></i>
                            </a>
                          </div>
                        </div>
                        <div className="social-list col-3">
                          <div className="social-item">
                            <a
                              href="https://twitter.com/"
                              className="social-link"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 about-person">
                    <img
                      src={Investyx_S}
                      alt="Akshat Agrwal"
                      className="about-photo"
                    />
                    <div className="about-overlay-text">
                      <h4>Akshat Agrwal</h4>
                      <h6>Co-Founder, CFO</h6>
                      <br></br>
                      <h5>
                        Akshat's strengths include managing financial risk,
                        giving financial advice, and basically ensuring we get
                        paid well enough.
                      </h5>
                      <div className="social-row row justify-content-center align-items-center">
                        <div className="social-list col-3">
                          <div className="social-item">
                            <a
                              href="https://github.com/Akshat1603/"
                              className="social-link"
                            >
                              <i className="fab fa-github"></i>
                            </a>
                          </div>1
                        </div>
                        <div className="social-list col-3">
                          <div className="social-item">
                            <a
                              href="https://www.linkedin.com/in/akshat-agarwal-660a2928a/"
                              className="social-link"
                            >
                              <i className="fab fa-linkedin"></i>
                            </a>
                          </div>
                        </div>
                        <div className="social-list col-3">
                          <div className="social-item">
                            <a
                              href="https://twitter.com/"
                              className="social-link"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}
