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
    const lifeData={one:[],two:[],three:[], four:[],five:[],six:[], seven:[],eight:[],nine:[], ten:[]}


    const lifeOne=document.querySelectorAll('.box0');
    const lifeTwo=document.querySelectorAll('.box1');
    const lifeThree=document.querySelectorAll('.box2');
    const lifeFour=document.querySelectorAll('.box3');
    const lifeFive=document.querySelectorAll('.box4');
    const lifeSix=document.querySelectorAll('.box5');
    const lifeSeven=document.querySelectorAll('.box6');
    const lifeEight=document.querySelectorAll('.box7');
    const lifeNine=document.querySelectorAll('.box8');
    const lifeTen=document.querySelectorAll('.box9');

    lifeOne.forEach((box,id,array)=>{
        if(id===(array.length-1)){
            box.addEventListener('input', (e)=>{
                lifeOne.one.push(e.data);
                console.log('checkoutput');
            })
            

        }
        box.addEventListener('input', (e)=>{
            lifeOne.one.push(e.data)
        })
    })



    return (
        <div className="game-box">
           <h2 className="mb-5">The word is {word}</h2>
           <Boxes lives='10'/>
        </div>
    )
}

export default Gamebox