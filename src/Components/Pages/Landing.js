import React from "react";
import Navbar from "../Navbar.js";
import Footer from "../Footer.js";
import { Helmet } from "react-helmet";
import "bootstrap";
import "../Css/Landing.css";
import StoKCeL_S from "../Images/StoKCeL_S.png";  
import Background_Image_1 from "../Images/Background_Image_1.jpg";
import Background_Image_2 from "../Images/Background_Image_2.jpg";

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: window.location.href,
    };
    this.generateURLs = this.generateURLs.bind(this);
  }

  generateURLs() {
    if (window.location.pathname === "/") {
      this.setState({
        signup: this.state.url.concat("signup"),
        products: this.state.url.concat("products"),
      });
    }
  }

  componentDidMount() {
    this.generateURLs();
  }

  render() {
    return (
      <div className="landing">
        <Helmet>
          <title>fundify</title> 
        </Helmet>
        <div className="container-fluid">
          <Navbar />
          <section id="home">
            <div className="container">
              <div className="row">
                <div className="welcome-design col-12 ">
                  <img
                    src={StoKCeL_S}
                    alt="Landing"
                    className="welcome-logo"
                  />
                </div>
              </div>
              <div className="welcome-text col-12 text-center">
                <h2>Welcome to fundify</h2> 
                <h4>One Platform for all your Financial Advice</h4>
              </div>
              <div className="welcome-sign-up col-12 text-center">
                <a className="signup-button" href={this.state.signup}>
                  Join the Family Now
                </a>
              </div>
            </div>
          </section>
          <section id="services">
            <div className="container">
              <div className="row">
                <div className="service-design col-md-6 col-12">
                  <img
                    src={Background_Image_2}
                    alt="Invest Don't In-Waste"
                    className="service-logo"
                  />
                </div>
                <div className="service-text col-md-6 my-auto">
                  <div className="row service-heading">
                    <h2>Fundify: Invest Smart, Live Rich</h2>
                  </div>
                  <div className="row service-sub-heading me-5">
                    <h5>
                      fundify tells you when and where to invest and the
                      possible returns you can receive from it to help you reach
                      your dream vacation faster.
                    </h5>
                  </div>
                  <div className="row service-services">
                    <div className="col-6">
                      <ul className="Finanical-UL">
                        <li>
                          <h6>Stocks</h6>
                        </li>
                        <li>
                          <h6>Mutual Funds</h6>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul className="Finanical-UL">
                        <li>
                          <h6>SmallCases</h6>
                        </li>
                        <li>
                          <h6>Currency Trends</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="universe">
            <div className="container">
              <div className="row">
                <div className="universe-text col-md-6 col-12 my-auto px-5">
                  <div className="row universe-heading">
                    <h2>The fundify Family</h2> 
                  </div>
                  <div className="row universe-sub-heading ">
                    <h5>
                      A variety of products, all powered by a powerful machine
                      learning algorithm helping you invest in the correct place
                      at the correct time.
                    </h5>
                  </div>
                  <div className="row universe-have-a-look ">
                    <a className="products-button" href={this.state.products}>
                      Have a Look at the Products
                    </a>
                  </div>
                </div>
                <div className="universe-design order-first order-md-last col-md-6 col-12">
                  <img
                    src={Background_Image_1}
                    alt="Products"
                    className="universe-logo"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}
