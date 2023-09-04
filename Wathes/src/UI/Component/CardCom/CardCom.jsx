import { Button, Card, Layout } from "antd";
import React from "react";
import { CardBody, CardSubtitle, CardTitle } from "reactstrap";
import { Heart } from "lucide-react";
import "../CardCom/CardCom.css";
import PropTypes from "prop-types";

export default function CardCom({ productData }) {
  return (
    <>
      <Card
        className="cards"
        style={{
          width: "18rem",
          borderColor: "black",
          padding: "10px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div>
          <img
            alt="Sample"
            src={productData?.img}
            className="img pb-3"
            style={{ display: "flex", height: "250px", color: "" }}
          />
        </div>
        {/* <>
          <section className="section" id="men">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section-heading">
                    <h2>Men's Latest</h2>
                    <span>
                      Details to details is what makes Hexashop different from
                      the other themes.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="men-item-carousel">
                    <div className="owl-men-item owl-carousel">
                      <div className="item">
                        <div className="thumb">
                          <div className="hover-content">
                            <ul>
                              <li>
                                <a href="single-product.html">
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="single-product.html">
                                  <i className="fa fa-star"></i>
                                </a>
                              </li>
                              <li>
                                <a href="single-product.html">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <img src="/images/men-01.jpg" alt="" />
                        </div>
                        <div className="down-content">
                          <h4>classNameic Spring</h4>
                          <span>$120.00</span>
                          <ul className="stars">
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="item">
                        <div className="thumb">
                          <div className="hover-content">
                            <ul>
                              <li>
                                <a href="single-product.html">
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="single-product.html">
                                  <i className="fa fa-star"></i>
                                </a>
                              </li>
                              <li>
                                <a href="single-product.html">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <img src="/images/men-02.jpg" alt="" />
                        </div>
                        <div className="down-content">
                          <h4>Air Force 1 X</h4>
                          <span>$90.00</span>
                          <ul className="stars">
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="item">
                        <div className="thumb">
                          <div className="hover-content">
                            <ul>
                              <li>
                                <a href="single-product.html">
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="single-product.html">
                                  <i className="fa fa-star"></i>
                                </a>
                              </li>
                              <li>
                                <a href="single-product.html">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <img src="/images/men-03.jpg" alt="" />
                        </div>
                        <div className="down-content">
                          <h4>Love Nana ‘20</h4>
                          <span>$150.00</span>
                          <ul className="stars">
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="item">
                        <div className="thumb">
                          <div className="hover-content">
                            <ul>
                              <li>
                                <a href="single-product.html">
                                  <i className="fa fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="single-product.html">
                                  <i className="fa fa-star"></i>
                                </a>
                              </li>
                              <li>
                                <a href="single-product.html">
                                  <i className="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <img src="/images/men-01.jpg" alt="" />
                        </div>
                        <div className="down-content">
                          <h4>classNameic Spring</h4>
                          <span>$120.00</span>
                          <ul className="stars">
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div>
            <img alt="Sample" src={productData.img} className="img pb-3" />
          </div>
        </> */}

        <CardBody style={{ padding: "0px" }}>
          <CardSubtitle
            className="pt-1 pb-2 "
            tag="h6"
            style={{ fontSize: "13.5px", color: "green" }}
          >
            {productData?.categories}
          </CardSubtitle>
          <CardTitle
            tag="h5"
            className="font-medium"
            style={{ color: "goldenrod", fontSize: "12px" }}
          >
            {productData?.title}
          </CardTitle>

          <CardTitle tag="h5" className="text-base font-normal pb-3">
            {productData?.model}
          </CardTitle>

          <CardTitle tag="h5" className="text-base font-normal pb-3">
            {productData?.Price}
          </CardTitle>

          <div className="text-center m-0 p-2 display-inline">
            <Button className="btnn ">Buy Now</Button>
            <Button color="" className="m-2  ">
              <Heart />
            </Button>
          </div>

          <div className="position"></div>
        </CardBody>
      </Card>
    </>
  );
}
CardCom.propTypes = {
  productData: PropTypes.object,
};
