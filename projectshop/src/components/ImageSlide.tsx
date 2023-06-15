import React from "react";
import styled from "styled-components";
import test_image from "../assets/fashion colour1.jpg";
import test_image2 from "../assets/food color 1.jpg";
import test_image3 from "../assets/hair colour 1.jpg";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 400px;
  position: relative;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
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

const ImageSlide = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={test_image} />
        {/* <Image src={test_image} />
        <Image src={test_image} /> */}
        <Text>FASHION</Text>
      </Wrapper>
    </Container>
  );
};

export default ImageSlide;
