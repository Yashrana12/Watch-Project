import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "../Style2/StyleCom2.css";

export default function StyleCom2() {
  return (
    <>
      {/* <div
        classNameNameName="style2
            sm:mb-0"
      >
        <Container classNameNameName="p-0">
          <Row
            classNameNameName="frag justify-center items-center  
                    sm:flex-col  "
          >
            <Col
              classNameNameName="flex-1 text-left font 
                        sm:text-center"
            >
              <h5 classNameNameName="font-semibold tracking-wider lowercase">
                EAU DE PARFUM
              </h5>
              <h1 classNameNameName="text-6xl">instinctive</h1>
              <h1 classNameNameName="text-6xl">and</h1>
              <h1 classNameNameName="text-6xl">electric</h1>
              <div classNameNameName="rightpara pe-20 text-lg font-extrabold pb-3 text-justify sm:pe-0">
                <p>
                  {" "}
                  true chance is that which you create for yourself. A state of
                  mind, a way of being. CHANCE perfume sweeps you up into a
                  whirlwind of fantasy with its floral notes, which are
                  heightened by pink pepper. Unpredictable and in constant
                  motion.
                </p>
              </div>
              <div
                classNameNameName="flex justify-start
                            sm:justify-center"
              >
                <Link to="/Products">
                  <button classNameNameName="button uppercase font-bold text-base ">
                    Discover
                  </button>
                </Link>
              </div>
            </Col>
            <Col
              classNameNameName="flex-1 flex justify-start rel 
                        sm:flex-col pb-32"
            >
              <div classNameNameName="img1">
                <img />
              </div>
              <div classNameNameName="img2">
                <img />
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}

      <section className="section text-center" id="social">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Social Media</h2>
                <span>
                  Details to details is what makes Hexashop different from the
                  other themes.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row images">
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>Fashion</h6>
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <img src="images/fashion1.jpg" alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>New</h6>
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <img src="images/new2.jpg" alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>Brand</h6>
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <img src="images/b.jpg" alt="" />
              </div>
            </div>

            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>Leather</h6>
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <img src="images/lather.jpg" alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>Box</h6>
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <img src="images/box.jpg" alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>Model-Chart</h6>
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <img src="images/model.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
