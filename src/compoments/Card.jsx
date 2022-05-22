import React from 'react'
import cardimg1 from '../imgs/cardsImgs/1.png'
import cardimg2 from '../imgs/cardsImgs/2.png'
import cardimg3 from '../imgs/cardsImgs/3.png'
import cardimg4 from '../imgs/cardsImgs/4.png'
import cardimg5 from '../imgs/cardsImgs/5.png'
import cardimg6 from '../imgs/cardsImgs/6.png'
import cardimg7 from '../imgs/cardsImgs/7.png'
import cardimg8 from '../imgs/cardsImgs/8.png'
import cardimg9 from '../imgs/cardsImgs/9.png'
import cardimg10 from '../imgs/cardsImgs/10.png'
import cardimg11 from '../imgs/cardsImgs/11.png'
import cardimg12 from '../imgs/cardsImgs/12.png'
import cardimg13 from '../imgs/cardsImgs/13.png'
import def from '../imgs/cardsImgs/def.png'

export default function Card(props) {
  let imgForCard='';
  switch (props.card) {
    case 1:
      imgForCard = cardimg1;
      break;
    case 2:
      imgForCard = cardimg2;
      break;
    case 3:
      imgForCard = cardimg3;
      break;
    case 4:
    imgForCard = cardimg4;
    break;
    case 5:
    imgForCard = cardimg5;
    break;
    case 6:
    imgForCard = cardimg6;
    break;
    case 7:
    imgForCard = cardimg7;
    break;
    case 8:
    imgForCard = cardimg8;
    break;
    case 9:
    imgForCard = cardimg9;
    break;
    case 10:
    imgForCard = cardimg10;
    break;
    case 11:
    imgForCard = cardimg11;
    break;
    case 12:
    imgForCard = cardimg12;
    break;
    case 13:
    imgForCard = cardimg13;
    break;
    default:
      imgForCard =def;
      break;
  }
  return (
      <img className='card' src={imgForCard} alt="CARD-IMG" />
  )
}
