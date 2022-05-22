import React from 'react'

export default function EndGame(props) {
    function againBtnFn(){
        props.addPlayerToScoreTable();
        props.changePage('game')
    }
    const xBtnFn = () =>{
        props.addPlayerToScoreTable();
        props.changePage('intro');
    }
    return (
    <div className='container'>
        <div className='row'>
            <div className='col-4'></div>
            <div className='col-4'>
                <input onClick={xBtnFn} 
                    style={{display:'block',width:'55px',height:'55px'}} 
                    className='buttons smallSize myFont myColor' value='X' type='submit'>
                </input> 
                <div className='orange smallSize myFont '>{props.lastGameRes}</div>
                <div className='smallSize myFont myColor whiteBorder'>
                    <div className='smallSize result'>
                        <span style={{color:'green'}}>Wins</span>  Loses 
                    </div>
                    <div className='smallSize result whiteBorder'>
                    <span style={{color:'green'}}>{props.player.win}</span> {props.player.lose}
                    </div>
                </div>
                <input type='submit' value='Again!' className='buttons smallSize myFont myColor' onClick={againBtnFn}></input>
            </div>
            <div className='col-4'></div>
        </div>
    </div>
  )
}
