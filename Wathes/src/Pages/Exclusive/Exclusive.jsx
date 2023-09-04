import { useEffect, useState } from "react";
import watchData from "../../Utils/WatchData.json";
import HeaderCom from "../../UI/Component/HeaderCom/HeaderCom";
import FooterCom from "../../UI/Component/FooterCom/FooterCom";
import CardCom from "../../UI/Component/CardCom/CardCom";
// import propTypes from "prop-types";

export default function Exclusive({ searchText }) {
  const [productData, SetProductData] = useState([]);
  useEffect(() => {
    let filterData = watchData?.filter?.((e) => {
      return (
        e.categories === "Exclusive" &&
        e?.model?.toLowerCase?.()?.includes?.(searchText?.toLowerCase?.())
      );
    });
    SetProductData(filterData);
  }, [searchText]);
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
// Exclusive.propTypes = {
//   searchText: propTypes.object,
// };
