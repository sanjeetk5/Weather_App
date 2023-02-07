import { useContext } from "react";
import { ThemeContext } from "./AppContextProvider";
const Button = ({ onClick , btnText }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button

    className="butt"
      style={{
        background: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
        cursor: "pointer",
        border : theme === "dark" ? "1px solid white" : "1px solid black"
        
      }}
      onClick = {onClick}
    >{btnText}</button>
  );
};

export default Button;
