import React from "react";
import styled from "styled-components";
import { FaTwitter, FaFacebook, FaInstagram, FaMap } from "react-icons/fa";

const Container = styled.div`
  /* width: 100%; */
  min-height: 250px;
  background: black;
  padding: 40px;
  font-family: sans-serif;
  /* position: relative; */
`;
const SectionWrapper = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  gap: 100px;
  flex-wrap: wrap;
`;
const FooterSection = styled.div``;
const SectionHead = styled.h3`
  margin-bottom: 20px;
  letter-spacing: 1.5px;
  font-weight: bold;

  font-size: 16px;
`;
const SectionItems = styled.ul`
  list-style: none;
`;
const SectionItem = styled.li`
  margin-bottom: 10px;
  line-height: 18px;
  font-size: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Location = styled.div`
  color: white;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;
const Text = styled.span``;
const OtherSection = styled.div`
  display: flex;
  opacity: 50%;
  color: #f5f5f5;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  ${Text} {
    min-width: 300px;
    text-align: center;
    cursor: pointer;
  }
`;

const Icon = styled.span`
  /*    */
  margin-right: 10px;
`;
const Footer = () => {
  return (
    <Container>
      <SectionWrapper>
        <FooterSection>
          <SectionHead>COMPANY INFO</SectionHead>
          <SectionItems>
            <SectionItem>About Us</SectionItem>
            <SectionItem>Investors</SectionItem>
            <SectionItem>Other Ventures</SectionItem>
            <SectionItem>Careers</SectionItem>
          </SectionItems>
        </FooterSection>
        <FooterSection>
          <SectionHead>GET HELP</SectionHead>
          <SectionItems>
            <SectionItem>Faqs</SectionItem>
            <SectionItem>Order Canellation</SectionItem>
            <SectionItem>Shipping & Delivery</SectionItem>
            <SectionItem>Return</SectionItem>
            <SectionItem>Contact Us</SectionItem>
          </SectionItems>
        </FooterSection>
        <FooterSection>
          <SectionHead>JOIN US</SectionHead>
          <SectionItems>
            <SectionItem>Become a Seller</SectionItem>
            <SectionItem>Become a Tutor</SectionItem>
            <SectionItem>Bring Ideas</SectionItem>
          </SectionItems>
        </FooterSection>
        <FooterSection>
          <SectionHead>FOLLOW US</SectionHead>
          <SectionItems>
            <SectionItem>
              <Icon>
                <FaFacebook />
              </Icon>
              <Text>Facebook</Text>
            </SectionItem>
            <SectionItem>
              <Icon>
                <FaInstagram />
              </Icon>
              <Text>Instagram</Text>
            </SectionItem>
            <SectionItem>
              <Icon>
                <FaTwitter />
              </Icon>
              <Text>Twitter</Text>
            </SectionItem>
          </SectionItems>
        </FooterSection>
      </SectionWrapper>
      <Location>
        <Icon>
          <FaMap />
        </Icon>
        <Text>27 Zone 3, Wakajaiye, Ibadan, Nigeria</Text>
      </Location>
      <OtherSection>
        <Text>&#169; TheFactory, Inc. All Rights Reserved</Text>
        <Text>Terms of Use</Text>
        <Text>Privacy and Cookie Policy</Text>
      </OtherSection>
    </Container>
  );
};

export default Footer;
