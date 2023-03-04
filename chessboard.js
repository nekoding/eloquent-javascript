// Exercises pg 38

/**
 * Logic
 * 
 * 0 | 0 1 2 3 4 5 6 7 8
 * 1 | 0 1 2 3 4 5 6 7 8
 * 2 | 0 1 2 3 4 5 6 7 8
 * 
 * if row % 2 == 0 && col % 2 != 0 -> print "#"
 * if row % 2 != 0 && col %2 == 0 -> print "#"
 * 
 * else -> print " "
 */

const gridSize = 8
let chessboardTemplates = '';

for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
        if (row % 2 == 0 && col % 2 != 0) {
            chessboardTemplates += "#"
        } else if (row%2 != 0 && col % 2 == 0) {
            chessboardTemplates += "#"  
        } else {
            chessboardTemplates += " "
        }
    }

    chessboardTemplates += "\n"
}

console.log(chessboardTemplates)