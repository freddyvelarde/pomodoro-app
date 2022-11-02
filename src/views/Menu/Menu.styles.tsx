import styled from "styled-components";
import { darkTheme } from "../../styles/colors";

export const MenuStyles = styled.div`
  background: ${darkTheme.secondary};
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  padding: 1vh 1.5%;
  height: 8vh;
  border-radius: 25px;

  .box {
    cursor: pointer;
    background: ${darkTheme.button};
    color: ${darkTheme.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
  }
`;
