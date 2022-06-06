import React from 'react'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';


export default function Intro(props) {
    const [name, setName] = useState('')
    const capitalizeFirstLetter = (n) => {return n.charAt(0).toUpperCase() + n.slice(1);}
    const checkInput = () => {
        if (props.playerLoggedIn){
            props.changePage('game');
        }else{
            if (name.length){
                props.setName(name);
                props.changePage('game');
            }else{
                props.notify("Please Fill The Name Field!");
            };
        }
    };
    const openScore = () => props.changePage('score');
    return (
    <div className='container'>
        <ToastContainer className='verySmallSize myColor myFont'/>
        <div className='row'>
            <div className='col-4'>
            </div>
            <div className='col-4'>
                <h1 className='bigSize myFont myColor'>WAR!⚔️</h1>
                {
                    props.playerLoggedIn ? <h2 className='smallSize myFont myColor'>Welcome {props.player.name}</h2> : ''
                }
                <input maxLength={10} style={props.playerLoggedIn ? {display:'none'} : {display:'inline'}} 
                    onChange={(e)=>{setName(capitalizeFirstLetter(e.target.value))}} 
                    className='smallSize myColor myFont' type="text" name="name" 
                    placeholder='Enter Your Name'
                />
                <input className='smallSize myColor myFont buttons' onClick={checkInput} 
                id='startButton' type="submit" value="Start"/>
                <input className='smallSize myColor myFont buttons' onClick={openScore} 
                    id='scoreButton' type="submit" value="Score Table"/>
                <div>
                    <input style={props.playerLoggedIn ? {display:'inline'} : {display:'none'}} 
                        className='smallBtns verySmallSize myColor myFont' onClick={props.logoutFn} 
                        id='logoutBtn' type="submit" value="Logout"
                    />
                </div>
            </div>
            <div className='col-4'>
            </div>
        </div>
    </div>
  )
}
