const gameBoard = (() => {
  board = document.getElementsByClassName("board-container")[0];
  board_table = document.getElementsByTagName("table")[0];

  const board_arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const update = (symbol, index) => {
    board_arr[index] = symbol;
    console.log("Invoked button");
  };

  return { board_arr, update };
})();

const Player = (p_name, symbol) => {
  return { p_name, symbol };
};

const displayController = (() => {
  const render = () => {
    board_content = gameBoard.board_arr;
    tiles = document.getElementsByTagName("button");
    let counter = 0;
    for (tile of tiles) {
      tile.textContent = board_content[counter];
      counter++;
    }
  };
  return { render };
})();

const StateHandler = (() => {
  const setActivePlayer = (Player) => (activePlayer = Player);
  const getActivePlayer = () => activePlayer;
  return { setActivePlayer, getActivePlayer };
})();

const GameSetup = (() => {
  const initialize = () => {
    const Tim = Player("Tim", "X");
    const Megz = Player("Megz", "O");
    StateHandler.setActivePlayer(Tim);
    window.alert("Game starts");
  };
  return { initialize };
})();
GameSetup.initialize();
