const Player = (p_name, symbol) => {
  return { p_name, symbol };
};

const GameSetup = (() => {
  const initialize = () => {
    StateHandler.setActivePlayer(tim);
    window.alert("Game starts");
  };
  return { initialize };
})();

const gameBoard = (() => {
  board = document.getElementsByClassName("board-container")[0];
  board_table = document.getElementsByTagName("table")[0];

  const board_arr = ["", "", "", "", "", "", "", "", ""];

  const update = (index) => {
    board_arr[index] = StateHandler.getActivePlayer().symbol;
    displayController.render();
    if (StateHandler.getActivePlayer() == tim) {
      StateHandler.setActivePlayer(megz);
    } else StateHandler.setActivePlayer(tim);
  };
  return { board_arr, update };
})();

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

const tim = Player("Tim", "X");
const megz = Player("Megz", "O");
GameSetup.initialize();

const buttons = document.getElementsByClassName("table-button");
console.log(buttons);
Array.from(buttons).forEach((element) => {
  element.addEventListener("click", function () {
    element.disabled = true;
  });
});
