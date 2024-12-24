import "bootstrap/dist/css/bootstrap.min.css";
import OuterContainer from "./components/OuterContainer";

function App() {
  return (
    <div className="container">
      <div className="row d-flex flex-row justify-content-center mt-5">
        <div className="col-12 col-md-5">
          <OuterContainer></OuterContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
