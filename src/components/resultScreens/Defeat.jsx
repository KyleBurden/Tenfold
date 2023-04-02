
function Defeat({word}){

    const refreshPage=()=>window.location.reload();

    return (
        <>
            <h3 className='text-danger scary display-2 mb-5'>Dead!</h3> 
            <h2 className='answer-box mx-5 p-4'>Word was: {word}</h2>
            <button onClick={refreshPage} className='btn btn-secondary d-block mx-auto my-3 fs-4'>Play again!</button>
        </>
    );
}

export default Defeat;