function checkWinner(
  board,
  prevTurn,
  setStatus,
  setTurn,
  setAction,
  winAnimation
) {
  console.log('check');
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

export default checkWinner;
