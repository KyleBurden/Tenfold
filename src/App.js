import { Container} from "react-bootstrap";
import Gamebox from "./components/Gamebox";
import StatsPage from './StatsPage';

function App() {
  return (
    <Container>
      <h1 className="text-center my-5 underline-bottom" >Tenfold App</h1>
      <div className="text-center">
        <Gamebox/>
        <br></br>
        <StatsPage/>
      </div>
    </Container>
    
    
  );
}

export default App;
