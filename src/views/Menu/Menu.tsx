import { MenuStyles } from "./Menu.styles";

export default function Menu() {
  return (
    <MenuStyles>
      <div className="box">
        <span>pomodoro</span>
      </div>
      <div className="box">
        <span>short break</span>
      </div>
      <div className="box">
        <span>long break</span>
      </div>
    </MenuStyles>
  );
}
