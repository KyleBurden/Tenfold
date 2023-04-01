import { useState, useEffect } from "react"
import Boxes from "./Boxes";


function Gamebox(){

    useEffect(()=>{
        fetchData();

    }, []);

    //wordlist state
    const [words,setWords] =useState([])

    async function fetchData(){
        const URL ='http://localhost:3000/words.json'
        const response =await fetch(URL)
        const data = await response.json()
        setWords(data);
    }

    const getRandomWord=()=>words[parseInt(Math.random()*5)];

    const word=getRandomWord();



    return (
        <div className="game-box">
           <h2 className="mb-5">The word is {word}</h2>
           <Boxes lives='11'/>
        </div>
    )
}

export default Gamebox