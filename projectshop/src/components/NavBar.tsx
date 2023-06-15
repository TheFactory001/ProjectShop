import React, { useRef, useState } from "react";
import styled from "styled-components";
import { BiCartAlt, BiSearchAlt2 } from "react-icons/bi";
import { MdClose } from "react-icons/md";
const Container = styled.header`
  height: 60px;
`;
const NavWrapper = styled.nav`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  font-family: "Helvetica Now Text Medium", Helvetica, Arial, sans-serif;
  font-size: 14px;
`;
const NavLogo = styled.div`
  flex: 1;
  cursor: pointer;
`;
const NavCenter = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const NavSearch = styled.div`
  text-align: center;
`;
const NavRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #f5f5f5;
  padding: 5px 10px;
  border-radius: 20px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  margin: 0 5px;
  height: 20px;
`;
const SearchIcon = styled.div``;

const CenterLinks = styled.span`
  cursor: pointer;
  padding: 10px 0;
  font-weight: 700;
  &:hover {
    border-bottom: 1px solid black;
  }
`;
const NavBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const searchItemRef = useRef<HTMLInputElement>(null);

  const [isCancelSearchVisible, setIsCancelSearchVisible] = useState(false);
  return (
    <Container>
      <NavWrapper>
        <NavLogo>TH3FACT</NavLogo>
        <NavCenter>
          <CenterLinks>BUY</CenterLinks>
          <CenterLinks>SELL</CenterLinks>
          <CenterLinks>DEALS</CenterLinks>
        </NavCenter>

        <NavRight>
          <NavSearch>
            <SearchContainer>
              <BiSearchAlt2 />
              <Input
                placeholder="Search"
                ref={searchItemRef}
                onInput={(e) => {
                  setSearchItem(e.currentTarget.value);
                }}
              ></Input>
              {searchItem ? (
                <MdClose
                  onClick={(e) => {
                    searchItemRef.current && (searchItemRef.current.value = "");
                    setSearchItem("");
                  }}
                />
              ) : null}
            </SearchContainer>
          </NavSearch>
          <BiCartAlt fontSize={"24px"} cursor={"pointer"} />
        </NavRight>
      </NavWrapper>
    </Container>
  );
};

export default NavBar;
