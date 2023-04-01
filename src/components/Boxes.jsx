import { Container } from "react-bootstrap"


//10 chances
//10 letter words
function Boxes({lives}){
    const lifeCount =Array.from(Array(parseInt(lives)).keys());
    return (
        <>
            {lifeCount.map((i)=>(
                
                <Container className="d-flex d-row justify-content-center">
                <div className="input-box" id={i} contentEditable="true"></div>
                <div className="input-box" id={i+1} contentEditable="true"></div>
                <div className="input-box" id={i+2} contentEditable="true"></div>
                <div className="input-box" id={i+3} contentEditable="true"></div>
                <div className="input-box" id={i+4} contentEditable="true"></div>
                <div className="input-box" id={i+5} contentEditable="true"></div>
                <div className="input-box" id={i+6} contentEditable="true"></div>
                <div className="input-box" id={i+7} contentEditable="true"></div>
                <div className="input-box" id={i+8} contentEditable="true"></div>
                <div className="input-box" id={i+9} contentEditable="true"></div>
                </Container>    
            ))}
        </>
        
        
    )
}

export default Boxes