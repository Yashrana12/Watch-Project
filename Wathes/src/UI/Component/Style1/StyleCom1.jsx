import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../Style1/StyleCom1.css";

export default function StyleCom1() {
  return (
    <>
      <div className="style1">
        <Container className=" container-fluid">
          <Row
            className="justify-center items-center frag 
                    sm:flex-col"
          >
            <Col
              className="flex-1 flex justify-end
                        sm:flex-col  rel "
            >
              <div className="img1 ">
                <img />
              </div>
            </Col>
            <Col
              className="fontt flex-1
                        sm:text-center"
            >
              <h5 className="">New watches 2023</h5>
              <h1 className="text-6xl">The new watches</h1>
              <h1 className="text-6xl"></h1>
              <h1 className="text-6xl"></h1>
              <div className="rightpara ps-20 text-lg font-extrabold pb-3 text-justify sm:ps-0">
                <p>
                  With its latest creations, Rolex demonstrates its perpetual
                  pursuit of excellence.
                </p>
                <p>
                  or the Watches & Wonders event in 2023, Rolex has unveiled
                  three new versions of its Sky-Dweller, including an updated
                  movement and two new dial colours. One of the new dial colours
                  is a blue-green shade, which is a first for any Rolex model
                  and is paired with an Everose Gold case and bracelet.
                </p>
                <p>
                  The GMT Master II now comes with a new bezel combo of black
                  and gray. This kind of thing might be Rolex's big release in a
                  typical year, but the brand has really gone all out for 2023.
                  The new GMT Master II references only come in two-tone
                  ("Rolesor," or a steel-and-gold combo) and full yellow gold.
                </p>
              </div>
              <div
                className="flex justify-end 
                            sm:justify-center"
              >
                <Link to="/Products">
                  <button className="button uppercase font-bold text-base">
                    Shop now
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
