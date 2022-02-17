const gameBoard = (() => {
  const board_arr = ["", "", "", "", "", "", "", "", ""];
  const add = (symbol, index) => (board_arr[index] = symbol);
  return { board_arr, add };
})();

const Player = (p_name, symbol) => {
  getName = () => p_name;
  getSymbol = () => symbol;
};

const displayController = (() => {
  const update = (symbol) => null; // add dom manipulation for board here
})();
