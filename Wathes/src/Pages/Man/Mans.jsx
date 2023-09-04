import { useEffect, useState } from "react";
import watchProduct from "../../Utils/WatchData.json";
import HeaderCom from "../../UI/Component/HeaderCom/HeaderCom";
import FooterCom from "../../UI/Component/FooterCom/FooterCom";
import CardCom from "../../UI/Component/CardCom/CardCom";
// import propTypes from "prop-types";

export default function Man(props) {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    let filterData = watchProduct?.filter?.((e) => {
      return (
        e.gender === "Mans" &&
        e?.model
          ?.toLowerCase?.()
          ?.includes(props.searchText?.toLocaleLowerCase?.())
      );
    });
    setProductData(filterData);
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
// Man.propTypes = {
//   searchText: propTypes.object,
// };
