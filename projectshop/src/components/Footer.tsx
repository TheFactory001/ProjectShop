import React from "react";
import styled from "styled-components";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Container = styled.div`
  /* width: 100%; */
  height: 300px;
  background: black;
  padding: 40px;
  font-family: sans-serif;
`;
const SectionWrapper = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  gap: 100px;
`;
const FooterSection = styled.div``;
const SectionHead = styled.h3`
  margin-bottom: 20px;
  letter-spacing: 1.5px;
  font-weight: bold;
  /* font-weight: 700;
  font-size: 18px; */
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
const Text = styled.span``;
const Icon = styled.span`
  font-size: 24px;
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
    </Container>
  );
};

export default Footer;
