const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  // 꺼내는 애를 만들고,
  // 꺼낸 후에는 보드를 수정해주고,
  // 바스켓이 꺼낸 숫자 넣고,

  let basket = [];
  let newArr = [];

  const newMoves = [];

  moves.forEach((move) => {
    newMoves.push(move - 1);
  });
  console.log(newMoves);

  for (let j = 0; j < newMoves.length; j++) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][newMoves[j]] !== 0) {
        basket.push(board[i][newMoves[j]]);
        board[i][newMoves[j]] = 0;
        break;
      }
    }
  }
  console.log(basket);
  let markNum = basket.length;

  // 터뜨릴건지 확인하는 애 만들고,
  // 떠뜨리고 정리해주는 애 만들자.
  for (let j = 0; j < 100; j++) {
    function chkBox(box) {
      for (let i = 0; i < box.length; i++) {
        if (box[i] === box[i + 1]) {
          box.splice(i, 2);
        }
      }
      return box;
    }
    chkBox(basket);
  }

  console.log(basket);

  let check = markNum - basket.length;

  console.log(check);
  var answer = check;
  return answer;
}

console.log(solution(board, moves));
