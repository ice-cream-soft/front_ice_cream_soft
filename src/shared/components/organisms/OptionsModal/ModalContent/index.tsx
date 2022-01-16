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

const ModalContent = () => {
  const [quantity, setQuantity] = useState(1);

  const { closeOptionsModal, productInfo } = useOptionsModal();

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
                <input type="radio" value={opt.size} name="qnt" />
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
                      name={free_add.title}
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
                      name={paid_add.title}
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
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            disabled={quantity === 1}
            className="less"
          >
            {" - "}
          </button>
          <span className="quantity_display">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className="more">
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
          <button onClick={closeOptionsModal}>CANCELAR</button>
          <button onClick={closeOptionsModal}>ADICIONAR AO PEDIDO</button>
        </ModalSettings>
      </Content>
    </ModalContainer>
  );
};

export default ModalContent;
