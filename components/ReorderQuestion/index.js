import React, { useState, useCallback, useEffect } from "react";
import { Card } from "./Card";
import update from "immutability-helper";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const style = {
  width: 400
};
const Container = ({ items, onChange, title }) => {
  {

    const prep = (items) => {
      if (items === undefined || items === null) {
        return null;
      }

      return items
        .map((item, index) => {
          return {
            id: index,
            text: item,
            shuffle: Math.floor(Math.random() * 1000)
          };
        })
        .sort((a, b) => (a.shuffle > b.shuffle ? 1 : -1));
    };

    const [cards, setCards] = useState(prep(items));
    const [correct, setCorrect] = useState(null);

    useEffect(() => {
      setCards(prep(items))
    }, [items]);


    
    const handleCheck = () => {
      const outOfOrder = cards
        .map((card, index) => (card.id === index ? card : null))
        .filter((c) => c === null);

      const isCorrect = outOfOrder.length === 0;
      setCorrect(isCorrect);
      
    };

    const moveCard = useCallback(
      (dragIndex, hoverIndex) => {
        setCorrect(null);
        const dragCard = cards[dragIndex];
        const tmpNewCards = update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard]
          ]
        });
        onChange(tmpNewCards.map((c) => c.text));
        setCards(
          update(cards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard]
            ]
          })
        );

        
      },
      [cards]
    );
    const renderCard = (card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      );
    };
    return (
      <DndProvider backend={HTML5Backend}>
        <div>{title}</div>
        <div style={style}>{cards && cards.map((card, i) => renderCard(card, i))}</div>
        
      </DndProvider>
    );
  }
};

export default Container;
