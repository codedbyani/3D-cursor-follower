import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
import styles from "./brand.module.scss";

const CreateBrands = ({ brand }) => {
  return (
    <div>
      <img src={brand} alt={brand} />
    </div>
  );
};

const Brand = () => {
  const brands = [google, slack, atlassian, dropbox, shopify];
  return (
    <div className={`${styles.gpt3__brand} section__padding`}>
      {brands.map((brand, index) => {
        return <CreateBrands key={index} brand={brand} />;
      })}
    </div>
  );
};

export default Brand;
