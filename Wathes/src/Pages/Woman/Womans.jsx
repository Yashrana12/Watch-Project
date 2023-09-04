import { useEffect, useState } from "react";
import watchProduct from "../../Utils/WatchData.json";
import HeaderCom from "../../UI/Component/HeaderCom/HeaderCom";
import FooterCom from "../../UI/Component/FooterCom/FooterCom";
import CardCom from "../../UI/Component/CardCom/CardCom";
// import propTypes from "prop-types";

export default function Womans(props) {
  const [productData, SetProductData] = useState([]);

  useEffect(() => {
    let filterData = watchProduct?.filter?.((e) => {
      e.gender === "Woman" &&
        e?.model
          ?.toLocaleLowerCase?.()
          ?.includes(props.searchText?.toLocaleLowerCase?.());
    });
    SetProductData(filterData);
  }, [props.searchText]);
  return (
    <>
      <HeaderCom />
      <div
        className=" d-flex  flex-wrap"
        style={{
          gap: "25px",
          padding: "0px 60px",
          margin: "auto",
          borderRadius: "20px",
        }}
      >
        {productData?.map?.((e) => {
          return <CardCom key={e.model} productData={e} />;
        })}
      </div>
      <FooterCom />
    </>
  );
}
// Womans.propTypes = {
//   searchText: propTypes.object,
// };
