import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from './Card'
import { ToastContainer } from 'react-toastify';

export default function Game(props) {
    const [compScore, setCompScore] = useState(0);
    const [userScore, setUserScore] = useState(0);
    const [compDeck, setCompDeck] = useState([]);
    const [userDeck, setUserDeck] = useState([]);
    const [round, setRound] = useState(0)
    const [hitButton, setHitButton] = useState('HIT')
    const [deckClicked, setDeckClicked] = useState(false)
    useEffect(() => {
        if (round == 2)
         {hitBtnFn()}
    },)
    
    const deckFn = () =>{
        setDeckClicked(true);
        document.getElementById("deckBtn").disabled=true;
        let arrays = props.getTwoRandomPacks();
        setCompScore(0);
        setUserScore(0);
        setRound(1);
        setCompDeck(arrays[0])
        setUserDeck(arrays[1])
    }
    const checkForFinish = () =>{
        if (compScore > userScore){
            props.addLoseToPlayer();
            props.setLastGameRes("You Lose");
        }
        else if (compScore < userScore){
            props.addWinToPlayer();
            props.setLastGameRes("You Won!");
        }else{
            props.addGameToPlayer();
            props.setLastGameRes('Tie!')
        }
        return props.changePage('end')
    }
    const checkScore = () => {
        if (compDeck[0] > userDeck[0]){
            setCompScore(compScore+1)
        } else if (userDeck[0] > compDeck[0]){
            setUserScore(userScore+1)
        }
    }
    const getNextCards= () =>{
        setCompDeck(compDeck.splice(1,compDeck.length))
        setUserDeck(userDeck.splice(1,userDeck.length))
    }
    const hitBtnFn = () =>{
        if(deckClicked){
            if (round===26){
                setHitButton('FINISH');
            }
            if(round<27){
                checkScore();
                getNextCards();
                setRound(round+1);
            }else{
                checkForFinish();
            }
        }else{
            props.notify('Get Cards First!')
        }
    };
    return (
        <div className='container'>
            <ToastContainer/>
            <div className='row'>
                <div className='col-3 myColor'>
                    <div className='row whiteBorder'>
                        <div className='myFont smallSize'>Round NO. {round}</div>
                    </div>
                    <div className='row whiteBorder'>
                        <div className='orange myFont bigSize'>All Games</div>
                        <div className='myFont smallSize'>loses: {props.player.lose}</div>
                        <div className='green myFont smallSize'>Wins : {props.player.win}</div>
                    </div>
                </div>
                <div className='col-6 whiteBorder'>
                    <div className=' blurBg myColor myFont'>
                        <div className='row col-3'>
                            <div className='col-8'>
                            </div>
                            <div className='col-3'>
                                <h2 className='bigSize'>Computer</h2>
                                <div className='deckCards'>
                                    {<Card card={compDeck[0]}/>}
                                </div> 
                            </div>
                        </div>
                        <div className='row col3'>
                            <div className='col-7'>
                            </div>
                            <div className='col-3'>
                                {<Card card={userDeck[0]}/>}
                                <h2 className='bigSize playerNameOnGame'>{props.player.name}</h2>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4'>
                                <input className='myColor myFont buttons smallSize gameButtons' type={"submit"} id='deckBtn' value="Get Cards" onClick={deckFn}></input>
                            </div>
                            <div className='col-4'>
                                <input className=' myColor myFont buttons smallSize gameButtons' onClick={hitBtnFn} type="submit" value={hitButton}></input>            
                            </div>
                            <div className='col-4'>
                                <input onClick={()=>props.changePage('intro')}  
                                        className='myColor myFont buttons verySmallSize smallBtns' type='submit' value='Exit'>
                                </input>                            
                            </div>
                        </div>
                    </div>
                    <div style={deckClicked ? {display:''} : {display:'none'}} className='row whiteBorder'>
                        {
                            userDeck.map((c,i) => {
                                if (i!==0){
                                    return <Card key={i} card={c}/>
                                }
                            })
                        }
                    </div>
                </div>
                <div className='col-3 myColor' >
                    <div className='row whiteBorder'>
                        <div className='orange myFont bigSize'>Score</div>
                        <div className='myFont smallSize'>Comp: {compScore}</div>
                        <div className='green myFont smallSize'>{props.player.name}: {userScore}</div>
                    </div>
                </div>
            </div>
        </div>
  )
}
