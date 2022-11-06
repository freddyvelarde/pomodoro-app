import styled from "styled-components";
import { darkTheme } from "../../styles/colors";

interface menuProps {
  pomo: boolean;
  short: boolean;
  long: boolean;
}

export const MenuStyles = styled.div<menuProps>`
  background: ${darkTheme.secondary};
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  padding: 1vh 1.5%;
  height: 8vh;
  border-radius: 25px;

  .box {
    cursor: pointer;
    /* background: ${darkTheme.button}; */
    color: ${darkTheme.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    transition: 0.3s;
  }

  .pomo {
    background: ${({ pomo }) => (pomo ? darkTheme.button : "transparent")};
    color: ${({ pomo }) => (!pomo ? darkTheme.text : darkTheme.primary)};
  }
  .short {
    background: ${({ short }) => (short ? darkTheme.button : "transparent")};
    color: ${({ short }) => (!short ? darkTheme.text : darkTheme.primary)};
  }
  .long {
    background: ${({ long }) => (long ? darkTheme.button : "transparent")};
    color: ${({ long }) => (!long ? darkTheme.text : darkTheme.primary)};
  }
`;
