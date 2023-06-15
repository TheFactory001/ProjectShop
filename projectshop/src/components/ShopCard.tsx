import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 300px;
  height: 400px;
  background: #f5f5f5;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  object-fit: cover;
`;

const ShopCard = () => {
  return (
    <Container>
      <ImageWrapper></ImageWrapper>
    </Container>
  );
};

export default ShopCard;
