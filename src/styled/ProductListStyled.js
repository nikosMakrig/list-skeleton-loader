import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  width: 60vw;
`;

const Header = styled.header`
  border-bottom: 1px solid rgba(151,151,151,0.3);
  text-align: center;
  padding-bottom: 5px;
  margin-bottom: 60px;
  padding-top: 30px;
  font-size: 22px;
  font-weight: bold;
  font-family: Arial,serif;
`;

export default {
  ListContainer,
  Header
}
