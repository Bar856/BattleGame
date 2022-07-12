import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Intro from './compoments/Intro';
import Game from './compoments/Game';
import EndGame from './compoments/EndGame';
import Score from './compoments/Score';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [player, setPlayer] = useState({
    name:"",
    win:0,
    lose:0,
    games:0
  });
  // fns cards
  // shuffle the array
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  };
  // crate 52 card package with 4 of a kind to every card
  function crateCardsPack(){
    let cards_package = [];
    for (let i=1;i<=13;i++){
      for (let j=1;j<=4;j++){
        cards_package.push(i)
      }
    }
    return cards_package;
  };
  // returns 2 arrays with cards ofr palyer and comp
  function getTwoRandomPacks(){
    let cards = crateCardsPack();
    let pack1 = [];
    let pack2 = [];
    shuffle(cards);
    for (let i=0;i<26;i++){
      pack1.push(cards[i]);
    }
    for (let i=26;i<52;i++){
      pack2.push(cards[i]);
    }
    return [pack1,pack2];
  };
  //alert
  const notify = (text) => toast(text);
  const [lastGameRes, setLastGameRes] = useState('')
  // login Fncs
  const [playerLoggedIn, setPlayerLoggedIn] = useState(false)
  const logoutFn = () =>{
    setPlayerLoggedIn(false);
    setPlayer({
      name: '',
      win: 0,
      lose: 0,
      games: 0,
    })
  }
  // setname player - login
  const setName = (n) =>{
    setPlayerLoggedIn(true);
    let tmpPlayer;
    tmpPlayer = players.filter(p=>p.name===n)[0];
    if (tmpPlayer){
      setPlayer(tmpPlayer)
    }else{
      let tmpAr = [...players];
      let newPlayer ={
        name: n,
        win: 0,
        lose: 0,
        games: 0,
      };
      tmpAr.push(newPlayer);
      setPlayers([...tmpAr])
      setPlayer(newPlayer)
    }
  };
  // win , lose , games
  const addWinToPlayer = () =>{
    setPlayer({
      name: player.name,
      win: player.win+1,
      lose: player.lose,
      games: player.games+1,
    })
  };
  const addGameToPlayer = () =>{
    setPlayer({
      name: player.name,
      win: player.win,
      lose: player.lose,
      games: player.games+1,
    })
  };
  const addLoseToPlayer = () =>{
    setPlayer({
      name: player.name,
      win: player.win,
      lose: player.lose+1,
      games: player.games+1,
    })
  };
  // score board 
  const playersAr=[];
  const [players, setPlayers] = useState(playersAr);
  const addPlayerToScoreTable = () =>{
    let tmpAr=[...players]
    let playerIndex;
    tmpAr.forEach((p,i)=>{
      if (p.name === player.name){
        playerIndex = i;
      }
    })
    tmpAr[playerIndex] = player;
    setPlayers([...tmpAr])
  }  

  // pages 
  const pages = {
    intro:'intro',
    game:'game',
    end:'end',
    score:'score'
  };
  const [currentPage, setCurrentPage] = useState(pages.intro)
  const changePage = (pageName) =>{
    setCurrentPage(pageName)
  }

  const switchPage = () =>{
    switch (currentPage) {
      case pages.intro:
        return <Intro notify={notify} player={player} logoutFn={logoutFn} 
                playerLoggedIn={playerLoggedIn} changePage={changePage} setName={setName}/>
      case pages.game:
        return <Game notify={notify} addGameToPlayer={addGameToPlayer}  player={player}  changePage={changePage} 
                addWinToPlayer={addWinToPlayer} addLoseToPlayer={addLoseToPlayer} 
                getTwoRandomPacks={getTwoRandomPacks} setLastGameRes={setLastGameRes}/>
      case pages.end:
        return <EndGame lastGameRes={lastGameRes} addPlayerToScoreTable={addPlayerToScoreTable} players={players} 
                changePage={changePage} player={player}/>
      case pages.score:
        return <Score changePage={changePage} players={players}/>
      default:
        break;
    }
  };
  //test
  // app
  return (
    <div className="App">
      {switchPage()}
      
    </div>
  );
}
export default App;
