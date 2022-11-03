import styled from "styled-components";

const ListBox = styled.span`
  width: 17%;
  height: 35%;
  min-height: 200px;
  border: 1px solid blue;
  position: absolute;
  right: 1.2%;
  padding: 1% 2.2%;
  margin-top: 0.5%;

  > div {
    width: 60%;
    font-size: 24px;
    margin: 0 auto;
    text-align : center;
  }

  > ul {
    padding: 0;
    list-style: none;
    text-align: center;

    > li {
      margin: 2.5% 0 2.5% 0;
    }
  }
`;

const RecentChange = () => {
  return (
    <ListBox>
      <div>최근 변경 항목</div>
      <ul>
        <li>qwertyuiopasdfghj</li>
        <li>qwertyuiopasdfghj</li>
        <li>qwertyuiopasdfghj</li>
        <li>qwertyuiopasdfghj</li>
        <li>qwertyuiopasdfghj</li>
        <li>qwertyuiopasdfghj</li>
        <li>qwertyuiopasdfghj</li>
        <li>qwertyuiopasdfghj</li>
        <li>qwertyuiopasdfghj</li>
      </ul>
    </ListBox>
  );
};

export default RecentChange;
