import styled from "styled-components";

const StyledWrap = styled.div`
  width: 60%;
  height: 100%;
  padding: 0 2%;
  margin: 0 auto;
  border: 1px solid black;
`;

const StyledTitle = styled.div`
  margin: 0 auto;
  padding: 3% 0 0 0;
  color: blue;
  height: 20%;
  min-height: 200px;
  text-align: center;
  font-size: 32px;
`;

export default function Home() {
  return (
    <StyledWrap>
      <StyledTitle> welcome to turnOffWiki!!</StyledTitle>
      <div> doing sth</div>
    </StyledWrap>
  );
}
