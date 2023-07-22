let Player = (() =>
{
    let _sign = 'X';
    let _secondSign = 'O';
    let setSign = (sign) =>
    {
        if (sign == _sign)
        {
            return;
        }
        _sign = sign;
        _secondSign = 'X';
    }

    let getPlayer1Sign = () => _sign;
    let getPlayer2Sign = () => _secondSign;
    return {
        getPlayer1Sign,
        getPlayer2Sign,
        setSign
    }
})();
// --------------------------------------------------------------------------------------------

let gameBoard = (() =>
{
    let _board = Array.from(document.getElementsByClassName('btn-p'));
    // console.log(_board[ 1 ].innerText == '');

    function draw (num, player)
    {
        _board[ num ].innerText = player.getSign();
    }
    let clear = () =>
    {
        for (let i = 0; i < _board.length; i++)
        {
            _board[ i ].innerText = '';
        }
    }


    let emptyGrids = [];
    for (let i = 0; i < _board.length; i++)
    {
        if (_board[ i ].innerText == '')
        {
            emptyGrids.push(i);
        }
    }


    return {
        draw,
        clear,
        emptyGrids
    };
})();



// -======================================================-=============================
const button1 = document.getElementById('xButton');
const button2 = document.getElementById('oButton');

let level = document.querySelector('#levels');
level.addEventListener('change', () =>
{
    if (level == 'easy')
    {
        minimaxAlgorithm.setPercentage(0);
    } else if (level == 'medium')
    {
        minimaxAlgorithm.setPercentage(75);
    } else if (level == 'hard')
    {
        minimaxAlgorithm.setPercentage(90);
    } else if (level == 'insane')
    {
        minimaxAlgorithm.setPercentage(100);
    }
    console.log(level.value);

    console.log("computer Precision: ", minimaxAlgorithm.getComputerPrecision());

})

button1.addEventListener('click', () =>
{
    console.log("Player Chooses:", button1.value);
    gameBoard.clear();
    // console.log("computer Precision: ", minimaxAlgorithm.getComputerPrecision());
    Player.setSign(`X`);
});
button2.addEventListener('click', () =>
{
    console.log("Player Chooses:", button2.value);
    gameBoard.clear();
    // console.log("computer Precision: ", minimaxAlgorithm.getComputerPrecision());
    Player.setSign(`O`);
})
// ==============================================
function handleClick (e)
{
    if (e.target.matches('p'))
    {
        let sign = Player.getPlayer1Sign();
        e.target.innerText = `${ sign }`;
        if (sign == 'X')
        {
            Player.setSign(`O`);
        } else
        {
            Player.setSign(`X`);
        }
    }
}
let button = document.querySelector('.board');

button.addEventListener('click', handleClick, false);

