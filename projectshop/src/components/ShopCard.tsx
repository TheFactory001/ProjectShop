import React from "react";
import styled from "styled-components";
import ClayShop from "../assets/clay-banks-Ox6SW103KtM-unsplash.jpg";
import { IoMdStar } from "react-icons/io";

const InfoRectangle = styled.div`
  min-height: 100px;
  min-width: 300px;
  max-width: 100%;
  /* background: #f5f5f5; */
  background: black;
  color: #f5f5f5;
  padding: 20px;
  /* background-color: black; */
  margin-top: -150px;
  z-index: 1;
  opacity: 0;
  position: relative;
  transition: all 1s ease;
`;
const ShopButton = styled.button`
  width: 150px;
  height: 40px;
  position: absolute;
  right: 20px;
  bottom: 20px;
  outline: none;
  background: black;
  color: #f5f5f5;
  border: none;
  opacity: 100%;
  z-index: 2;
  font-weight: 700;
  transition: all 1s ease;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    outline: white solid 1px;
    font-size: 20px;
  }
`;

const Container = styled.div`
  /* width: 300px;
  height: 400px; */
  background: #f5f5f5;
  position: relative;
  &:hover ${InfoRectangle} {
    opacity: 1;
  }
  &:hover ${ShopButton} {
    color: black;
    background: #f5f5f5;
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
  min-height: 400px;
  min-width: 300px;
  opacity: 100%;
`;

const OWNERWRAPPER = styled.h3`
  font-weight: 700;
  font-size: 20px;
  color: #f5f5f5;
  margin-bottom: 10px;
`;
const RateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;
const RateLabel = styled.span`
  /* margin-left: 10px; */
  width: 80px;
`;

const Rates = styled.span``;
const ProductsCategory = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 10px;
`;
const Product = styled.span`
  min-width: 80px;
`;
const ShopAd = styled.p`
  font-style: italic;
`;

interface Props {
  image: string;
}

const ShopCard = ({ image }: Props) => {
  const rate = 5;
  const unrate = 5 - rate;
  return (
    <Container>
      <ImageWrapper>
        <Image src={image} />
      </ImageWrapper>
      <InfoRectangle>
        <OWNERWRAPPER>CLAY'S SHOP</OWNERWRAPPER>
        <ProductsCategory>
          <Product>Pastries</Product>
          <Product>Coffee</Product>
          <Product>Breakfast</Product>
        </ProductsCategory>
        <RateWrapper>
          <RateLabel>Ratings:</RateLabel>
          <Rates>
            {[...Array(Math.floor(rate))].map((i, e) => (
              <IoMdStar />
            ))}
            {
              //half star rating for fractions
              rate % 1 !== 0 ? <IoMdStar /> : null
            }

            {
              // no fill left portion
              [...Array(Math.floor(unrate))].map((i, e) => (
                <IoMdStar />
              ))
            }
          </Rates>
        </RateWrapper>
        <ShopAd>Shop at a go, shop easy</ShopAd>
      </InfoRectangle>
      <ShopButton>ENTER SHOP</ShopButton>
    </Container>
  );
};

export default ShopCard;
