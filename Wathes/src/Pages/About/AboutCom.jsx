import React from "react";

import { Content } from "antd/es/layout/layout";
import { Container } from "reactstrap";
import "../About/About.css";
import HeaderCom from "../../UI/Component/HeaderCom/HeaderCom";
import FooterCom from "../../UI/Component/FooterCom/FooterCom";

export default function AboutCom() {
  return (
    <>
      <HeaderCom />
      <Content>
        <div className="about-home">
          <div className="about-page">
            <Container>
              <div className="about-text">
                <p className="mb-0 text-xl font-bold">
                  {" "}
                  prestigious, high-end, iconic, timeless, and sophisticated.
                </p>
                <h1 className="text-7xl font-light">About Us</h1>
              </div>
            </Container>
          </div>
        </div>
      </Content>
      <FooterCom />
    </>
  );
}
