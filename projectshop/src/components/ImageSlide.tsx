import React, { useState } from "react";
import styled from "styled-components";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import test_image from "../assets/fashion colour1.jpg";
import test_image2 from "../assets/food color 1.jpg";
import test_image3 from "../assets/hair colour 1.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 400px;
  position: relative;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Image = styled.img`
  width: 600px;
  object-fit: cover;
`;
const Text = styled.p`
  font-weight: 400;
  font-size: 24px;
  position: absolute;
  bottom: 0;
  background-color: #f5f5f5;
  color: black;
  margin-bottom: 10px;
  padding: 5px;
`;
const Arrow = styled.div<{ direction: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  opacity: 50%;

  font-size: 24px;
  height: 40px;
  width: 40px;
  cursor: pointer;
  margin: auto;

  &:hover {
    background: #f5f5f5;
    opacity: 100%;
  }
`;
const ImageSlide = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const handleRightClick = (previousImageIndex: number) => {
    if (currentImage < 2) {
      setCurrentImage(previousImageIndex + 1);
    } else {
      setCurrentImage(0);
    }
  };
  const handleLeftClick = (previousImageIndex: number) => {
    if (currentImage > 0) {
      setCurrentImage(previousImageIndex - 1);
    } else {
      setCurrentImage(2);
    }
  };
  return (
    <Container>
      <Arrow direction="left">
        <MdNavigateBefore onClick={() => handleLeftClick(currentImage)} />
      </Arrow>

      {currentImage === 0 ? (
        <ImageWrapper>
          <Image src={test_image} />
          <Image src={test_image} />
          <Image src={test_image} />
          <Text>FASHION</Text>
        </ImageWrapper>
      ) : currentImage === 1 ? (
        <ImageWrapper>
          <Image src={test_image2} />
          <Text>FOOD</Text>
        </ImageWrapper>
      ) : (
        <ImageWrapper>
          <Image src={test_image3} />
          <Text>BEAUTY</Text>
        </ImageWrapper>
      )}

      <Arrow direction="right">
        <MdNavigateNext onClick={() => handleRightClick(currentImage)} />
      </Arrow>
    </Container>
  );
};

export default ImageSlide;
