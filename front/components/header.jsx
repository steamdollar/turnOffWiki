import styled from "styled-components";

const HeaderComponent = styled.div`
  padding: 0 15%;
  width: 100%;
  min-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #b7d3e9;
  font-size: 20px;
  box-sizing: border-box;
`;

const StyledLogo = styled.div`
  width: 5%;
`;

const StyledFunc = styled.div`
  width: 45%;
  height: 100%;
  min-height: 50px;
  border: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1%;
  font-size: 16px;

  > span {
    text-align: center;
    border-right: 1px solid white;
    display: inline-block;
    height: 100%;
  }

  > input {
    width: 70%;
    height: 100%;
  }
`;

const Header = () => {
  return (
    <HeaderComponent>
      <StyledLogo>
        <a href="/">
          <img />
          logo
        </a>
      </StyledLogo>

      <StyledFunc>
        <span>random</span>
        <input />
        <span>검색</span>
        <span>login</span>
      </StyledFunc>
    </HeaderComponent>
  );
};

export default Header;
