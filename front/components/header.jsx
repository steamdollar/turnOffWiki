import styled from "styled-components";

const HeaderComponent = styled.div`
  padding: 0 15%;
  width: 100%;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #b7d3e9;
  font-size: 17px;
  box-sizing: border-box;
`;

const StyledLogo = styled.div`
  width: 5%;
`;

const StyledFunc = styled.div`
  width: 55%;
  height: 100%;
  min-height: 40px;
  align-items: center;
  padding: 0 1%;
  font-size: 17px;

  > span {
    text-align: center;
    display: inline-block;
    height: 100%;
    margin: 0 1.5% 0 1%;
  }

  > input {
    width: 68%;
    height: 40px;
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
        <span>🔍</span>
        <span>login</span>
      </StyledFunc>
    </HeaderComponent>
  );
};

export default Header;
