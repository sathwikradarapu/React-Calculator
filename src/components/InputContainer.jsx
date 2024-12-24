import styles from "./InputContainer.module.css";
function InputContainer({ displayValue }) {
  return (
    <div className="text-center">
      <input
        type="text"
        className={styles["width-class"]}
        value={displayValue}
        readOnly
      />
    </div>
  );
}
export default InputContainer;
