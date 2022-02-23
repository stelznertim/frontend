const Player = (p_name, symbol) => {
  return { p_name, symbol };
};

const gameSetup = (() => {
  const initialize = () => {
    gameStateHandler.setActivePlayer(tim);
    window.alert("Game starts");
  };
  return { initialize };
})();

const gameBoard = (() => {
  board = document.getElementsByClassName("board-container")[0];
  board_table = document.getElementsByTagName("table")[0];
  count = 0;

  const board_arr = ["", "", "", "", "", "", "", "", ""];
  const round = () => count++;
  const getRound = () => count;
  const update = (index) => {
    round();
    board_arr[index] = gameStateHandler.getActivePlayer().symbol;
    displayController.render();
    gameStateHandler.checkBoard(board_arr);
    if (gameStateHandler.getActivePlayer() == tim) {
      gameStateHandler.setActivePlayer(megz);
    } else gameStateHandler.setActivePlayer(tim);
  };
  return { board_arr, update, getRound };
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

const gameStateHandler = (() => {
  const WINNING_OPTIONS = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const setActivePlayer = (Player) => (activePlayer = Player);
  const getActivePlayer = () => activePlayer;
  const game_over = (result) => {
    console.log(result);
    if (result == "win") {
      window.alert("You won, " + getActivePlayer().p_name + "!");
    } else {
      window.alert("Its a tie. So youre actually both Loosers. Take this L");
    }
  };
  const sameSymbolCheck = (element) => element == getActivePlayer().symbol;
  const checkBoard = (board) => {
    console.log("NEW ROUND");
    if (
      WINNING_OPTIONS.some((option) => {
        return [board[option[0]], board[option[1]], board[option[2]]].every(
          (element) => sameSymbolCheck(element)
        );
      })
    ) {
      game_over("win");
      console.log("Invoke");
    } else if (gameBoard.getRound() == 9) {
      game_over("tie");
    }
  };
  const restart = () => document.location.reload();
  return {
    setActivePlayer,
    getActivePlayer,
    checkBoard,
    sameSymbolCheck,
    restart,
  };
})();

const tim = Player("Tim", "X");
const megz = Player("Megz", "O");
gameSetup.initialize();

const currentPlayer = document.getElementById("active-player");
const buttons = document.getElementsByClassName("table-button");
Array.from(buttons).forEach((element) => {
  element.addEventListener("click", function () {
    element.disabled = true;
    currentPlayer.textContent =
      gameStateHandler.getActivePlayer().p_name +
      " (" +
      gameStateHandler.getActivePlayer().symbol +
      ")";
  });
});
