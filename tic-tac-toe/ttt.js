const gameBoard = (() => {
  board = document.getElementsByClassName("board-container")[0];

  const board_arr = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
  ];

  const build = () => {
    board_table = document.createElement("table");
    board.appendChild(board_table);

    for (i = 0; i < 3; i++) {
      row = document.createElement("tr");
      board_table.appendChild(row);
    }

    rows = document.getElementsByTagName("tr");

    for (const row of rows) {
      for (i = 0; i < 3; i++) {
        column = document.createElement("td");
        column.textContent = gameBoard.board_arr[row.rowIndex][i];
        row.appendChild(column);
      }
    }
  };

  const update = (symbol, row_index, column_index) => {
    board_arr[row_index][column_index] = symbol;
  };

  const add = (symbol, index) => (board_arr[index] = symbol);
  return { board_arr, add, build, update };
})();

const Player = (p_name, symbol) => {
  getName = () => p_name;
  getSymbol = () => symbol;
  return { getName, getSymbol };
};

const displayController = (() => {
  const render = () => {
    board_content = gameBoard.board_arr.flat();
    tiles = document.getElementsByTagName("td");
    let counter = 0;
    for (tile of tiles) {
      tile.textContent = board_content[counter];
      counter++;
    }
  };
  return { render };
})();
gameBoard.build();
gameBoard.update("X", 0, 2);
displayController.render();
gameBoard.update("O", 2, 1);
gameBoard.update("X", 0, 1);
console.log(gameBoard.board_arr);
