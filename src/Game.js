import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file here

function Game() {
  const [turn, setTurn] = useState('X');
  const [action, setAction] = useState("'s Turn");
  const [prevTurn, setPrevTurn] = useState('X');
  const [board, setBoard] = useState([
    { a1: '' },
    { b1: '' },
    { c1: '' },
    { a2: '' },
    { b2: '' },
    { c2: '' },
    { a3: '' },
    { b3: '' },
    { c3: '' },
  ]);
  const [status, setStatus] = useState('playing');

  useEffect(() => {
    checkWinner();
  });

  function winAnimation(cells = []) {
    const winArray = cells.map((obj) => Object.keys(obj)[0]);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    (async () => {
      for (const cell of winArray) {
        await delay(500);
        document.getElementById(cell).style.backgroundColor =
          'rgb(132, 210, 255)';
      }
    })();
  }

  function checkWinner() {
    const checkTieArr = board.map((item) => {
      return Object.values(item)[0];
    });
    let i = 0;
    for (const item of checkTieArr) {
      if (item) {
        i++;
      }
    }
    if (i === 9 && status === 'playing') {
      setAction("IT'S A TIE!");
      setTurn('');
      setStatus('Game Over');
    }

    const checkColumnA = board.filter((obj) => {
      const key = Object.keys(obj)[0]; // Get the key of the object
      return key.startsWith('a'); // Check if the key starts with 'a'
    });
    const lettersA = checkColumnA.filter((obj) =>
      Object.values(obj).includes(prevTurn)
    );
    if (lettersA.length === 3) {
      console.log(`${prevTurn} WINS`);
      setStatus('Game Over');
      setTurn(prevTurn);
      setAction(' WINS!');
      winAnimation(lettersA);
    }
    const checkColumnB = board.filter((obj) => {
      const key = Object.keys(obj)[0];
      return key.startsWith('b');
    });
    const lettersB = checkColumnB.filter((obj) =>
      Object.values(obj).includes(prevTurn)
    );
    if (lettersB.length === 3) {
      setStatus('Game Over');
      setTurn(prevTurn);
      setAction(' WINS!');
      winAnimation(lettersB);
    }
    const checkColumnC = board.filter((obj) => {
      const key = Object.keys(obj)[0];
      return key.startsWith('c');
    });
    const lettersC = checkColumnC.filter((obj) =>
      Object.values(obj).includes(prevTurn)
    );
    if (lettersC.length === 3) {
      setStatus('Game Over');
      setTurn(prevTurn);
      setAction(' WINS!');
      winAnimation(lettersC);
    }
    const checkRow1 = board.filter((obj) => {
      const keys = Object.keys(obj);
      return keys.length === 1 && keys[0].endsWith('1');
    });
    const letters1 = checkRow1.filter((obj) =>
      Object.values(obj).includes(prevTurn)
    );
    if (letters1.length === 3) {
      console.log(`${prevTurn} WINS`);
      setStatus('Game Over');
      setTurn(prevTurn);
      winAnimation(letters1);
      setAction(' WINS!');
    }
    const checkRow2 = board.filter((obj) => {
      const keys = Object.keys(obj);
      return keys.length === 1 && keys[0].endsWith('2');
    });
    const letters2 = checkRow2.filter((obj) =>
      Object.values(obj).includes(prevTurn)
    );
    if (letters2.length === 3) {
      console.log(`${prevTurn} WINS`);
      setStatus('Game Over');
      setTurn(prevTurn);
      winAnimation(letters2);
      setAction(' WINS!');
    }
    const checkRow3 = board.filter((obj) => {
      const keys = Object.keys(obj);
      return keys.length === 1 && keys[0].endsWith('3');
    });
    const letters3 = checkRow3.filter((obj) =>
      Object.values(obj).includes(prevTurn)
    );
    if (letters3.length === 3) {
      console.log(`${prevTurn} WINS`);
      setStatus('Game Over');
      setTurn(prevTurn);
      winAnimation(letters3);
      setAction(' WINS!');
    }
    const checkDiag1 = board.filter((obj) => {
      const key = Object.keys(obj)[0];
      return key.includes('a1') || key.includes('b2') || key.includes('c3');
    });
    const lettersDiag1 = checkDiag1.filter((obj) =>
      Object.values(obj).includes(prevTurn)
    );
    if (lettersDiag1.length === 3) {
      setStatus('Game Over');
      setTurn(prevTurn);
      winAnimation(lettersDiag1);
      setAction(' WINS!');
    }
    const checkDiag2 = board.filter((obj) => {
      const key = Object.keys(obj)[0];
      return key.includes('a3') || key.includes('b2') || key.includes('c1');
    });
    const lettersDiag2 = checkDiag2.filter((obj) =>
      Object.values(obj).includes(prevTurn)
    );
    if (lettersDiag2.length === 3) {
      setStatus('Game Over');
      setTurn(prevTurn);
      winAnimation(lettersDiag2);
      setAction(' WINS!');
    }
  }

  function handleClick(e) {
    if (status === 'Game Over') {
      return;
    }
    const cellId = e.target.id;
    if (document.getElementById(cellId).innerHTML === '') {
      setBoard((prevBoard) =>
        prevBoard.map((item) => {
          if (Object.keys(item).includes(cellId)) {
            return { [cellId]: turn };
          }
          return item;
        })
      );
      setPrevTurn(turn);
      setTurn((prevTurn) => (prevTurn === 'X' ? 'O' : 'X'));
    }
  }

  return (
    <>
      <div id='game-container'>
        <div>
          <h1>Tic Tac Toe</h1>
        </div>
        <div>
          <h2>
            {turn}
            {action}
          </h2>
        </div>
        <div id='grid-container'>
          {board.map((cell, index) => (
            <div key={index} id={Object.keys(cell)} onClick={handleClick}>
              {Object.values(cell)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Game;
