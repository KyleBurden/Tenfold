import {useState, useEffect} from 'react'
import Boxes from './Boxes'
import Defeat from './resultScreens/Defeat'
import Win from './resultScreens/Win'

function Gamebox(){

    useEffect(()=>{
        fetchData();
    },[]);
    
    //wordlist state
    const [WORD,setWord]=useState('');
    const [life,setLife]=useState(5);
    
    //fetch wordlists
    async function fetchData(){
        const URL='http://localhost:3000/words.json';
        const response=await fetch(URL);
        const data=await response.json();
        setWord(data[parseInt(Math.random()*5)]);        
    }


    //why is the function running 4 times?????
    //need to disable inputs after user inputs also
    function disableBoxRow(nodes){
        nodes.forEach(node=>{
            node.setAttribute('contentEditable','false');
            node.classList.remove('text-cursor');
            node.classList.add('locked-cursor');
        })
    }

    //function to not consider backspace
    function monitor(data){
        if(data===null){
            return false;
        }
        else{
            return true;
        }
    }

    //check correct letters
    const checkCorrectLetters=(rowData)=>{
        let resultsObject=[];
        let resultsIndex=[1,1,1,1,1,1,1,1,1,1];
        rowData.forEach((data,id)=>{
            if(data===WORD[id]){
                resultsObject.push({letter:WORD[id],position:id});
                resultsIndex[id]=0;
            }
        })
        return checkMisplacedLetters(rowData,resultsObject,resultsIndex);
    };
    
    //check wrong letters
    const checkMisplacedLetters=(dataRow,matchedInfo,resultsIndex)=>{
        let cachedWord=WORD;
        matchedInfo.forEach(data=>{
            cachedWord=cachedWord.replace(data.letter,'#');
        });
    
        dataRow.forEach((data,id)=>{
            if(cachedWord.includes(data)){
                const index = cachedWord.indexOf(data);
                resultsIndex[id] = 2;
                cachedWord = cachedWord.slice(0, index) + '#' + cachedWord.slice(index+1);
            }
        })
        return resultsIndex;
    };

    //function to check correct and wrong values
    function checkInputs(rowData,nodeData){
        disableBoxRow(nodeData);
        let results=checkCorrectLetters(rowData);
        nodeData.forEach((node,id)=>{
            if(results[id]===0){
                node.classList.add('background-green');
            }
            else if(results[id]===2){
                node.classList.add('background-yellow');
            }
        })
        let winstatus=369;//for fun
        results.forEach(num=>winstatus+=num)
        if(winstatus===369){
            setLife(1000)
        }
        else{
            setLife(life-1);
        }
    }

    
    const lifeOne=document.querySelectorAll('.box0');
    const lifeTwo=document.querySelectorAll('.box1');
    const lifeThree=document.querySelectorAll('.box2');
    const lifeFour=document.querySelectorAll('.box3');
    const lifeFive=document.querySelectorAll('.box4');
    
    
    const lifeMatrix=[lifeOne,lifeTwo,lifeThree,lifeFour,lifeFive];
    const lifeData={one:[],two:[],three:[],four:[],five:[]}

    //focus on first element
    lifeOne[0]&&lifeOne[0].focus()

    //for the event listeners
    lifeMatrix.forEach((data,mid)=>{
        let handler;
        if(mid===0){handler=lifeData.one}
        else if(mid===1){handler=lifeData.two}
        else if(mid===2){handler=lifeData.three}
        else if(mid===3){handler=lifeData.four}
        else if(mid===4){handler=lifeData.five}

        data.forEach((box,id,array)=>{
            if(id===(array.length-1)){
                box.addEventListener('input',(e)=>{
                    monitor(data)&&handler.push(e.data);
                    checkInputs(handler,data);
                    //lifeMatrix[mid+1][0].focus();
                })
            }
            else{
                box.addEventListener('input',(e)=>{
                    monitor(data)&&handler.push(e.data);
                    data[id+1].focus();
                })      
            }
        })
    });

    //game gives 5 lives
    return (
        <div className='game-box'>
            {/* <h2 className=''>The word is {WORD}</h2> */}
            {/* <h2 className='mb-5'>You only have {life} lives</h2> */}
            {/* {(life===0)?<h3>Dead! Word was {WORD}</h3>:(life===1000)?<h3>You Win!</h3>:<> <h2 className='mb-5'>You only have {life} lives</h2><Boxes lives='5'/></>} */}
            {(life===0)?<Defeat word={WORD}/>:(life===1000)?<Win/>:<> <h2 className='mb-5'>You only have {life} lives</h2><Boxes lives='5'/></>}
            
        </div>
    );
}

//todo
//backend NodeJS
//beter finish screens

export default Gamebox;