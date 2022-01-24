import React, { useState } from "react";
import { FiX } from "react-icons/fi";

import useOptionsModal from "shared/hooks/useOptionsModal";

import {
  ModalContainer,
  Content,
  ListItem,
  List,
  Info,
  Title,
  Subtitle,
  QuantitySection,
  ModalSettings,
} from "./styles";
import { options } from "./data";
import useCart from "shared/hooks/useCart";

interface IItems {
  additionals: string;
  filling: string;
  size_dish: string;
  size: string;
}

const ModalContent = () => {
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState({} as IItems);
  const [quantity, setQuantity] = useState(1);

  const { setCartItems } = useCart();
  const { closeOptionsModal, productInfo } = useOptionsModal();

  function handleChange(e) {
    setPrice((prevState) => prevState + e.price);

    const item = { [e.target.name]: e.target.value };

    setItems({ ...items, ...item });
  }

  function handleFinishOrder() {
    setCartItems({
      ...items,
      quantity,
      price,
      name: productInfo.name,
    });

    closeOptionsModal();
  }

  return (
    <ModalContainer>
      <Content>
        <FiX className="close" onClick={closeOptionsModal} />
        <Title>{productInfo && productInfo.name}</Title>
        <Subtitle>Escolha uma opção abaixo</Subtitle>

        <h3>Opção</h3>
        <List>
          {options.options.map((opt) => (
            <ListItem>
              <label>
                <input
                  type="radio"
                  value={opt.size}
                  name="size"
                  onChange={(e) => handleChange({ ...e, price: opt.value })}
                />
                {opt.size}
              </label>

              <span>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(opt.value)}
              </span>
            </ListItem>
          ))}
        </List>

        <h3>Adicionais grátis:</h3>
        {options.free_additionals.map((free_add) => (
          <>
            <Info>
              <h4>{free_add.title}</h4>
              <p>{`Escolha até ${free_add.max_choices} opções`}</p>
            </Info>

            <List>
              {free_add.additionals.map((add) => (
                <ListItem>
                  <label>
                    <input
                      type="radio"
                      value={add.name}
                      name={free_add.name}
                      onChange={(e) => handleChange({ ...e, price: 0 })}
                    />
                    {add.name}
                  </label>
                </ListItem>
              ))}
            </List>
          </>
        ))}

        <h3>Adicionais pagos</h3>
        {options.paid_additionals.map((paid_add) => (
          <>
            <Info>
              <h4>{paid_add.title}</h4>
            </Info>
            <List>
              {paid_add.additionals.map((add) => (
                <ListItem>
                  <label>
                    <input
                      type="radio"
                      value={add.name}
                      name={paid_add.name}
                      onChange={(e) => handleChange({ ...e, price: add.value })}
                    />
                    {add.name}
                  </label>

                  <span>
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(add.value)}
                  </span>
                </ListItem>
              ))}
            </List>
          </>
        ))}

        <h3>Quantidade</h3>
        <QuantitySection>
          <button
            type="button"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            disabled={quantity === 1}
            className="less"
          >
            {" - "}
          </button>
          <span className="quantity_display">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="more"
          >
            {" + "}
          </button>
        </QuantitySection>

        <div className="textarea">
          <textarea
            name=""
            id=""
            cols={20}
            rows={10}
            placeholder="Alguma observação p/ este pedido ?"
          />
        </div>

        <ModalSettings>
          <button onClick={closeOptionsModal} type="button">
            CANCELAR
          </button>
        </ModalSettings>
        <button type="button" onClick={handleFinishOrder}>
          ADICIONAR AO PEDIDO
        </button>
      </Content>
    </ModalContainer>
  );
};

export default ModalContent;
