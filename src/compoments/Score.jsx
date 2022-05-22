import React from 'react'
import TableRow from './TableRow';

export default function Score(props) {
  var orgninzedArr = [];
  orgninzedArr = props.players.sort((a,b) =>  b.win-a.win );
  return (
    <div className='container'>
      <div className='row'>
        <h1 className='bigSize myFont myColor'>Top Players</h1>
        <table className='table myFont myColor smallSize whiteBorder' id='scoreTable'>
          <tbody>
              <tr>
                <td>No.</td>
                <td>Name</td>
                <td>Wins</td>
                <td>Loses</td>
              </tr>
                  {
                      orgninzedArr.map((p,i)=>{
                      return <TableRow key={i} p={p} i={i+1}/>
                      })
                  }
            </tbody>
        </table>   
      </div>
      <input value='Back' type='submit' onClick={()=>props.changePage('intro')} 
        style={{width:'180px',height:'55px'}} className='buttons verySmallSize myFont myColor'>
      </input>
    </div>
  )
}
