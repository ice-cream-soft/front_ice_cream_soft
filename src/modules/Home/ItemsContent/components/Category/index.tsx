import Image from "next/image";
import React, { useState } from "react";

import mock from "../../../../../shared/assets/icons/ice_cream_soft_logo.png";

import { CategoryContainer } from "./styles";

interface IItem {
  name: string;
  description: string;
  thumbnail: string;
}

interface ICategoryProps {
  category: {
    name: string;
    items: Array<IItem>;
  };
}

const Category = ({ category }: ICategoryProps) => {
  const { name, items } = category;

  const [showItems, setShowItems] = useState(false);

  return (
    <CategoryContainer>
      <button onClick={() => setShowItems(!showItems)}>{name}</button>

      {showItems && (
        <ul className="items">
          {items.map((item) => (
            <li className="item">
              <Image
                src={!item.thumbnail ? mock : item.thumbnail}
                height={"120px"}
                width={"120px"}
                alt=""
              />

              <div className="info">
                <h4>{item.name}</h4>
                <span>{item.description}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </CategoryContainer>
  );
};

export default Category;
