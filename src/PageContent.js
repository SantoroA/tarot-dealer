import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default function PageContent(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode ? "#45046a" : "#f1ebbb",
    color: isDarkMode ? "#f1ebbb" : "#45046a",
    height: "100vh",
    width: "100vw",
    textAlign: "center",
  };
  return <div style={styles}>{props.children}</div>;
}
