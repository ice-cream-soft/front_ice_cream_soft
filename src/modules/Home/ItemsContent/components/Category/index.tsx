import Image from "next/image";
import React, { useState } from "react";
import useOptionsModal from "shared/hooks/useOptionsModal";

import mock from "../../../../../shared/assets/icons/ice_cream_soft_logo.png";

import { CategoryContainer, Item, Info } from "./styles";

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
  const { openOptionsModal, setProductInfo } = useOptionsModal();

  const [showItems, setShowItems] = useState(true);

  function handleShowOptions(name: string) {
    openOptionsModal();
    setProductInfo({ name });
  }

  return (
    <CategoryContainer>
      <button onClick={() => setShowItems(!showItems)}>{name}</button>

      {showItems && (
        <ul className="items">
          {items.map((item) => (
            <Item onClick={() => handleShowOptions(item.name)}>
              <div className="wrapper">
                <Image
                  src={!item.thumbnail ? mock : item.thumbnail}
                  height={"120px"}
                  width={"120px"}
                  alt=""
                />
              </div>

              <Info>
                <h4>{item.name}</h4>
                <span>{item.description}</span>
              </Info>
            </Item>
          ))}
        </ul>
      )}
    </CategoryContainer>
  );
};

export default Category;
