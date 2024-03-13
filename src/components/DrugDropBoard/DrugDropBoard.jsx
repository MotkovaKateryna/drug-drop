import React, { useState } from 'react';
import {
  StyledBoard,
  StyledBoardTitle,
  StyledItem,
  StyledThumb,
} from './DrugDropBoard.styled';

const DrugDropBoard = () => {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: 'ToDo',
      items: [
        { id: 4, title: 'Learn UI library' },
        { id: 5, title: 'Learn React Testing Library' },
        { id: 6, title: 'Make ToDo app with backend and auth' },
      ],
    },
    {
      id: 2,
      title: 'InProgress',
      items: [
        { id: 7, title: 'Learn Drug&Drop' },
        { id: 8, title: 'Learn Grid' },
      ],
    },
    {
      id: 3,
      title: 'Done',
      items: [
        { id: 9, title: 'Learn swiper' },
        { id: 10, title: 'Learn styled components' },
      ],
    },
  ]);

  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  function dragOverHandler(e) {
    e.preventDefault();
    if (e.target.className.includes('item')) {
      e.target.style.boxShadow = '0 4px 3px gray';
    }
  }

  function dragStartHandler(e, board, item) {
    // сохраняем текущую доску и текущую задачу
    setCurrentBoard(board);
    setCurrentItem(item);
  }

  function dragEndHandler(e) {
    e.target.style.boxShadow = 'none';
  }

  function dragLeaveHandler(e) {
    e.target.style.boxShadow = 'none';
  }

  function dropHandler(e, board, item) {
    e.preventDefault();
    e.target.style.boxShadow = 'none';
    // изменяем исходные масивы :
    // получить индекс в массиве у текущей карточки, которую мы держим в руке
    // const currentIndex = currentBoard.items.indexOf(currentItem);
    // удалить карточку с текущей доски
    // currentBoard.items.splice(currentIndex, 1);
    // индекс элемента над которым мы держим нашу карточку
    // const dropIndex = board.items.indexOf(item);
    // у доски на которую мы вставляем карточку после задачи над которой держим карточку
    // board.items.splice(dropIndex + 1, 0, currentItem);
    // чтобы произошел ререндеринг вызываем функцию setBoards , чтобы изменить состояние, передаем текущий массив досок измененный с помощью map
    // setBoards(
    //   boards.map(b => {
        // если текущий элемент итерации равен одной из досок которую мы изменяли, то мы будем возвращать измененные доски
    //     if (b.id === board.id) {
    //       return board;
    //     }
    //     if (b.id === currentBoard.id) {
    //       return currentBoard;
    //     }
    //     return b; // или просто возвращаем элемент итерации
    //   })
    // );
    
  }

  function dropCardHandler(e, board) {
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    board.items.push(currentItem);
    setBoards(
      boards.map(b => {
        // если текущий элемент итерации равен одной из досок которую мы изменяли, то мы будем возвращать измененные доски
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b; // или просто возвращаем элемент итерации
      })
    );
    e.target.style.boxShadow = 'none';
  }

  return (
    <StyledThumb>
      {boards.map(board => (
        <StyledBoard
          onDragOver={e => dragOverHandler(e)}
          onDrop={e => dropCardHandler(e, board)}
          key={board.id}
        >
          <StyledBoardTitle>{board.title}</StyledBoardTitle>
          {board.items.map(item => (
            <StyledItem
              draggable={true}
              onDragStart={e => dragStartHandler(e, board, item)}
              onDragLeave={e => dragLeaveHandler(e)}
              onDragEnd={e => dragEndHandler(e)}
              onDragOver={e => dragOverHandler(e)}
              onDrop={e => dropHandler(e, board, item)}
              key={item.id}
              className="item"
            >
              {item.title}
            </StyledItem>
          ))}
        </StyledBoard>
      ))}
    </StyledThumb>
  );
};

export default DrugDropBoard;
