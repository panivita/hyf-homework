function getRenderedGame(position) {
    const result = [];
    for (let i = 0; i < position.length; i++) {
        const element = '*' + position[i].join('*') + '*';
        result.push(element);
    }

    const rendered = '*******\n' + result.join('\n') + '\n*******';
    return rendered;
}

const position = [
    ['x', 'o', ' '],
    [' ', 'o', ' '],
    [' ', 'o', 'x']
];

const renderedGame = getRenderedGame(position);
console.log(renderedGame);

function getGameinfo(position) {

    const cell0 = position[0][0];
    const cell1 = position[0][1];
    const cell2 = position[0][2];
    const cell3 = position[1][0];
    const cell4 = position[1][1];
    const cell5 = position[1][2];
    const cell6 = position[2][0];
    const cell7 = position[2][1];
    const cell8 = position[2][2];

    const lines = [
        [cell0, cell1, cell2],
        [cell3, cell4, cell5],
        [cell6, cell7, cell8],
        [cell0, cell3, cell6],
        [cell1, cell4, cell7],
        [cell2, cell5, cell8],
        [cell0, cell4, cell8],
        [cell2, cell4, cell6]
    ];

    const xLine = lines.find(line => line.every(cell => cell === 'x'));
    const oLine = lines.find(line => line.every(cell => cell === 'o'));

    const gameInfo = {
        winner: undefined,
        loser: undefined,
        hasEnded: false,
    };

    if (xLine) {
        gameInfo.winner = 'x';
        gameInfo.loser = 'o';
        gameInfo.hasEnded = true;
    }
    if (oLine) {
        gameInfo.winner = 'o';
        gameInfo.loser = 'x';
        gameInfo.hasEnded = true;
    }
    return gameInfo;
}
const gameInfo = getGameinfo(position);
console.log(gameInfo);