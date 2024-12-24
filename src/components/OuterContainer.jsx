import styles from "./OuterContainer.module.css";
import InputContainer from "./InputContainer";
import ButtonContainer from "./ButtonContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function OuterContainer() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div
      className={`${styles["border-class"]} d-flex-flex-row justify-content-center`}
    >
      <InputContainer displayValue={calVal}></InputContainer>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}
export default OuterContainer;
