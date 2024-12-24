import ButtonBox from "./ButtonBox";
function ButtonContainer({ onButtonClick }) {
  const buttonsNames = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0, "+", "-"],
    ["*", "/", "C"],
    ["=", "."],
  ];
  return (
    <>
      {buttonsNames.map((row, rowIndex) => (
        <ButtonBox key={rowIndex} buttons={row} onButtonClick={onButtonClick} />
      ))}
    </>
  );
}
export default ButtonContainer;
