import React from "react";
import styled from "styled-components";
import ShopCard from "./ShopCard";
import ClayShop from "../assets/clay-banks-Ox6SW103KtM-unsplash.jpg";
import BlakeSalon from "../assets/BlakeSAlon.jpg";
import EkaterinaBakery from "../assets/ekaterina-bakery.jpg";

const Container = styled.div`
  margin: 60px 40px;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 20px;
`;
const CardWrapper = styled.div`
  flex: 1;
`;
const ShopText = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
const ShopSection = () => {
  return (
    <Container>
      <ShopText>SHOPS</ShopText>
      <Wrapper>
        <CardWrapper>
          <ShopCard image={ClayShop} />
        </CardWrapper>
        <CardWrapper>
          <ShopCard image={BlakeSalon} />
        </CardWrapper>
        <CardWrapper>
          <ShopCard image={EkaterinaBakery} />
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};

export default ShopSection;
