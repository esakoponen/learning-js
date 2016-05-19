// chessboard
var size = 8
var board = ''
// generate the board
for (var i = 0; i < size * size; i++) {
  if (i % size == 0) {
    board = board + ' '
  }
  else {
    board = board + '#'
  }
}

console.log(board)
console.log('0123456701234567012345670123456701234567012345670123456701234567')
console.log('')

// print the board
//for (var i = 0; i < size * size; i = i + size) {
var i = 0;
while(i < size * size) {
  console.log(board.substring(i, i + size) + '|' + i + ' to ' + (i + size - 1))
  i = i + size;
}

// 0123456701234567012345670123456701234567012345670123456701234567
//  # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// 1234567812345678123456781234567812345678123456781234567812345678
//  # # # ## # # #  # # # # # # # # # # # ## # # # # # # ## # # #
