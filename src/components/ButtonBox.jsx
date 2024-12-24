import styles from "./ButtonBox.module.css";
function ButtonBox(props) {
  return (
    <>
      <div className="d-flex flex-row justify-content-center flex-wrap">
        <div className="mb-2">
          {props.buttons.map((item) => (
            <button
              className={`${styles["button-class"]}`}
              onClick={() => props.onButtonClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
export default ButtonBox;
