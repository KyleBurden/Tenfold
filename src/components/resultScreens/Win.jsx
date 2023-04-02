
function Win(){

    const refreshPage=()=>window.location.reload();

    return (
        <>
            <h1 className='win-style mb-5'>You Win!</h1>
            <button onClick={refreshPage} className='btn btn-secondary d-block mx-auto my-3 fs-4'>Play again!</button>
        </>
    );
}

export default Win;