// import { createContext, useEffect, useState } from "react";
import { Layout } from "antd";

// import WatchData from "../../Utils/WatchData.json";

// import CardCom from "../../UI/Components/CardCom/CardCom";
// import HomePage from "../UI/Components/HomePage";
// import HomePage from "../../UI/Components/HomePage";
// import Product from "../Product/Product";

import { createContext } from "react";
import HeaderCom from "../../UI/Component/HeaderCom/HeaderCom";
import FooterCom from "../../UI/Component/FooterCom/FooterCom";
import CrousalCom from "../../UI/Component/Crousal/CrousalCom";
import StyleCom1 from "../../UI/Component/Style1/StyleCom1";
import StyleCom2 from "../../UI/Component/Style2/StyleCom2";
import BestSellerCom from "../../UI/Component/BestSellerCom/BestSellerCom";
import DiscoverCom from "../../UI/Component/DiscoverCom/DiscoverCom";
import ModelCom from "../../UI/Component/ModelCom/ModelCom";
import GradeCom from "../../UI/Component/Grading/GradeCom";
import HomePage from "../../UI/Component/HomePage/HomePage";

export const SearchData = createContext();

const { Content } = Layout;

const HomeCom = () => {
  return (
    <Layout className="layout ">
      <HeaderCom />
      <Content>
        <HomePage />
        <CrousalCom />
        <StyleCom1 />
        <StyleCom2 />
        <BestSellerCom />
        <DiscoverCom />
        <ModelCom />
        {/* <GradeCom /> */}
      </Content>
      <FooterCom />
    </Layout>
  );
};
export default HomeCom;
