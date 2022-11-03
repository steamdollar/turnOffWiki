import styled from "styled-components";

const StyledWrap = styled.div`
  width: 60%;
  height: 15%;
  padding: 0.5% 2%;
  margin: 0 auto;
  border: 1px solid black;
`;

const StyledTitle = styled.div`
  margin: 0 auto;
  color: blue;
  height: 20%;
  text-align: center;
  font-size: 36px;
  border: 1px solid red;
  margin 2% 0 0.5% 0;
`;

const Slogan = styled.div`
  font-size : 17px;
  text-align: right;
`

const Rule = styled.div`
  border : 1px solid blue;

  > ul {
    padding: 0;
    list-style: none;

    > li {
      margin: 2.5% 0 2.5% 0;
    }
`

export default function Home() {
  return (
    <>
    <StyledWrap>
      <StyledTitle> Welcome to turnOffWiki!!</StyledTitle>

      <Slogan>
        위키 사이트의 지식을 믿지 마세요!
        당신보다 바보가 쓴 글이 당신 인생을 골로 보낼 수 있습니다!
      </Slogan>

      <Rule>
        <h1> Rule </h1>
        <ul>
          <li>1. 이메일 인증 후, 메타마스크를 이용해 로그인해주세요.</li>
          <li>2. 로그인하지 않으면 문서를 읽는 작업만이 가능합니다.</li>
          <li>3. 양질의 글을 작성, 편집할 경우 tow coin을 1개씩 지급합니다.</li>
          <li>4. 기여한 문서가 추천을 많이 받을 경우 (현재 기준 5개) coin을 지급하며, 기준 갯수는 가변적입니다.</li>
          <li>5. 어뷰징 행위가 적발될 경우 이용이 중지 될 수 있습니다.</li>
        </ul>
      </Rule>
    </StyledWrap>
    </>
  );
}
