import { Container} from "react-bootstrap";
import Gamebox from "./components/Gamebox";

function App() {
  return (
    <Container>
      <h1 className="text-center my-5 underline-bottom" >Tenfold App</h1>
      <div className="text-center">
        <Gamebox/>
      </div>
    </Container>
    
  );
}

export default App;
