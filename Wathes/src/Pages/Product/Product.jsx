import { useContext } from "react";
import { theme } from "antd";
import { SearchData } from "../../App";
import HeaderCom from "../../UI/Component/HeaderCom/HeaderCom";
import CardCom from "../../UI/Component/CardCom/CardCom";
import FooterCom from "../../UI/Component/FooterCom/FooterCom";

export default function Product() {
  let ProductData = useContext(SearchData);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <HeaderCom />

      <div
        className="site-layout-content flex flex-wrap gap-3 justify-center item-center"
        style={{
          background: colorBgContainer,
          padding: "10px",
          
          // display:"flex"
        }}
      >
        {ProductData?.data?.map?.((e, i) => {
          return <CardCom key={i} data={e} />;
        })}
      </div>
      <FooterCom />
    </>
  );
}
