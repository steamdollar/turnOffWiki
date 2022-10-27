import styled from "styled-components";

const ListBox = styled.span`
  width: 18%;
  height: 50%;
  min-height: 200px;
  border: 1px solid blue;
  position: absolute;
  right: 1%;
  padding: 1.5% 2%;

  > div {
    width: 60%;
    font-size: 24px;
    margin: 0 auto;
  }

  > ul {
    padding: 0;
    list-style: none;
    text-align: center;

    > li {
      margin: 1.5% 0 1.5% 0;
    }
  }
`;

const RecentChange = () => {
  return (
    <ListBox>
      <div>최근 변경 항목</div>
      <ul>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
      </ul>
    </ListBox>
  );
};

export default RecentChange;
