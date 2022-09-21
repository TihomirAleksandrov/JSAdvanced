function solve(inputArr) {
    let table = [[false, false, false], [false, false, false], [false, false, false]];
    let isTaken = false;
    let player = '';
    let turnIndex = 0;

    for (let i = 0; i < inputArr.length; i++) {

        if (turnIndex % 2 == 0) {
            player = 'X';
        } else {
            player = 'O';
        }

        let splitCommand = inputArr[i].split(' ');

        let row = Number(splitCommand[0]);
        let col = Number(splitCommand[1]);

        if (table[row][col] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue;
        } else {
            table[row][col] = player;
            turnIndex++;
        }

        let rowSymbols = table[row];
        let colSymbols = [];

        for (let row = 0; row < table.length; row++) {
            colSymbols.push(table[row][col]);
        }

        let firstDiagonalSymbols = [];
        let secondDiagonalSymbols = [];

        let firstDiagonalIndex = 0;
        let secondDiagonalIndex = 2;

        for (let r = 0; r < table.length; r++) {
            firstDiagonalSymbols.push(table[r][firstDiagonalIndex]);
            secondDiagonalSymbols.push(table[r][secondDiagonalIndex]);

            firstDiagonalIndex++;
            secondDiagonalIndex--;
        }

        let areRowsEqual = rowSymbols.every(x => x === player);
        let areColsEqual = colSymbols.every(x => x === player);
        let areDiagonals1Equal = firstDiagonalSymbols.every(x => x === player);
        let areDiagonals2Equal = secondDiagonalSymbols.every(x => x === player);

        if (areRowsEqual || areColsEqual || areDiagonals1Equal || areDiagonals2Equal) {
            console.log(`Player ${player} wins!`);
            printTable();
            break;
        } else {
            let thereIsFalse = false;

            for (let i = 0; i < table.length; i++) {
                if (table[i].includes(false)) {
                    thereIsFalse = true;
                }
            }
            if (thereIsFalse) {
                continue;
            } else {
                console.log("The game ended! Nobody wins :(");
                printTable();
                break;
            }
        }
    }

    function printTable() {
        for (let row = 0; row < table.length; row++) {
            console.log(table[row].join("\t"));
        }
    }
}

solve(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]
);