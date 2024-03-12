import React, { useState } from 'react'
import { StyledCard, StyledThumb } from './SortCard.styled'

const SortCard = () => {
    const [cardList, setCardList] = useState([
        {id:1, order: 1, text: 'Card 1'},
        {id:2, order: 2, text: 'Card 2'},
        {id:3, order: 3, text: 'Card 3'},
        {id:4, order: 4, text: 'Card 4'},
        {id:5, order: 5, text: 'Card 5'},
        {id:6, order: 6, text: 'Card 6'},
    ])
    const [currentCard, setCurrentCard] = useState(null);

    function dragStartHandler(e, card) {
        console.log('drag', card);
        setCurrentCard(card);
    }
    function dragLeaveHandler(e) {
        e.target.style.background = 'white';
    }

    function dragEndHandler(e) {
        e.target.style.background = 'white';
    }

    function dragOverHandler(e) {
        e.preventDefault();
        e.target.style.background = 'lightgray';
    }

    function dropHandler(e, card) {// логика сортировки карточек, изменять массив с помощью map
        e.preventDefault();
       setCardList(cardList.map(c => {
        if(c.id === card.id) {
            return {...c, order: currentCard.order}
        }
        if (c.id === currentCard.id) {
            return {...c, order: card.order}
        }
        return c
       }))
       e.target.style.background ='white';
    }

    const sortCards = (a, b) => {
if (a.order > b.order){
    return 1
} else {
    return -1
}
    }
  return (
    <StyledThumb>
        {cardList.sort(sortCards).map(card => <StyledCard
        onDragStart={(e)=>dragStartHandler(e,card)}
        onDragLeave={(e)=> dragLeaveHandler(e)}
        onDragEnd={(e)=> dragEndHandler(e)}
        onDragOver={(e)=> dragOverHandler(e)}
        onDrop={(e)=> dropHandler(e, card)}
        draggable={true}
        key={card.id}
        >{card.text}</StyledCard>)
        }
    </StyledThumb>
  )
}

export default SortCard