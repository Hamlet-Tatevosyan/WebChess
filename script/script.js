let divSquare = '<div id="s$row$col" class="square $color"></div>';
let divFigure = '<div id="f$fig$row$col" class="figure">$figure</div>';
let divTver = '<div id="t$row$col" class="tiv">$tiv</div>';
const BOARD_WIDTH = 8;
const BOARD_HEIGHT = 8;

let chess =
    [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];
let arr_en = {
    'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h':7

};
$(function ()
{
    addSquares();

    $('.buttonStart').click(function (event)
    {
        let format = /^[a-h{1}]+$/;
        let king_row = parseInt($('.king_row').change().val());
        // let king_col = parseInt($('.king_col').change().val());
        let kingcol = $('.king_col').change().val();
        let king_col = arr_en[kingcol];


        let kingwhite_row = parseInt($('.kingWhite_row').change().val());
        // let kingWhite_col = parseInt($('.kingWhite_col').change().val());
        let kingWhitecol = $('.kingWhite_col').change().val();
        let kingWhite_col = arr_en[kingWhitecol];

        let queen_row = parseInt($('.quen_row').change().val());
        // let queen_col = parseInt($('.quen_col').change().val());
        let queencol = $('.quen_col').change().val();
        let queen_col = arr_en[queencol];

        let bishop_row = parseInt($('.bishop_row').change().val());
        // let bishop_col = parseInt($('.bishop_col').change().val());
        let bishopcol = $('.bishop_col').change().val();
        let bishop_col = arr_en[bishopcol];

        let knight_row = parseInt($('.knight_row').change().val());
        // let knight_col = parseInt($('.knight_col').change().val());
        let knightcol = $('.knight_col').change().val();
        let knight_col = arr_en[knightcol];


        /*let arrFig =
            [
                king_row,
                kingwhite_row,
                queen_row,
                bishop_row,
                knight_row
            ];
        let arrFigCol =
            [
                kingcol,
                kingWhitecol,
                queencol,
                bishopcol,
                knightcol
            ];
        function checkNan(x) {
            return !isNaN(x);
        }


        if(arrFig.every(checkNan)) {
            alert('greq menak tver ev 0-7 tiruytum!!!')
            $('#res')[0].reset();

        }else{
            king(kingwhite_row,kingWhite_col);
            Knight(knight_row, knight_col)
            Bishop(bishop_row, bishop_col)
            queen(queen_row, queen_col)

            showFigure(king_row,king_col,'kibl');
            showFigure(kingwhite_row, kingWhite_col, 'kiwt');
            showFigure(queen_row, queen_col, 'quee');
            showFigure(bishop_row, bishop_col, 'bish')
            showFigure(knight_row, knight_col, 'knig')



            kingMove(kingwhite_row, kingWhite_col);
            KnightMove(knight_row, knight_col)
            BishopMove(bishop_row, bishop_col)
            queenMove(queen_row, queen_col)
            CheckMat(king_row, king_col);

            $('#res')[0].reset();
            $(this).off(event);

        }*/

        if(king_row == kingwhite_row && king_col == kingWhite_col) {
            alert("Nuyne")
            return;

        }
        else if(king_row == queen_row && king_col == queen_col) {
            alert("Nuyne")
            return;
        }
        else if(king_row == knight_row && king_col == knight_col) {
            alert("Nuyne")
            return;
        }
        else if(king_row == bishop_row && king_col == bishop_col) {
            alert("Nuyne")
            return;
        }
        else if(kingwhite_row == queen_row && kingWhite_col == queen_col) {
            alert("Nuyne")
            return;
        }
        else if(kingwhite_row == knight_row && kingWhite_col == knight_col) {
            alert("Nuyne")
            return;
        }
        else if(kingwhite_row == bishop_row && kingWhite_col == bishop_col) {
            alert("Nuyne")
            return;
        }
        else if(queen_row == bishop_row && queen_col == bishop_col) {
            alert("Nuyne")
            return;
        }
        else if(queen_row == knight_row && queen_col == knight_col) {
            alert("Nuyne")
            return;
        }
        else if(knight_row == bishop_row && knight_col == bishop_col) {
            alert("Nuyne")
            return;
        }
        if (!isNaN(king_row) && king_row <= 7 &&
            !isNaN(kingwhite_row) && kingwhite_row <= 7 &&
            !isNaN(queen_row) && queen_row <= 7  &&
            !isNaN(bishop_row) && bishop_row <= 7 &&
            !isNaN(knight_row) && knight_row <=7)
        {
            if(kingcol != '' && format.test(kingcol) &&
                kingWhitecol != '' && format.test(kingWhitecol) &&
                queencol != '' && format.test(queencol) &&
                bishopcol != '' && format.test(bishopcol) &&
                knightcol != '' && format.test(knightcol))
            {

                king(kingwhite_row, kingWhite_col);
                Knight(knight_row, knight_col)
                Bishop(bishop_row, bishop_col)
                queen(queen_row, queen_col)

                showFigure(king_row, king_col, 'kibl');
                showFigure(kingwhite_row, kingWhite_col, 'kiwt');
                showFigure(queen_row, queen_col, 'quee');
                showFigure(bishop_row, bishop_col, 'bish')
                showFigure(knight_row, knight_col, 'knig')


                kingMove(kingwhite_row, kingWhite_col);
                KnightMove(knight_row, knight_col)
                BishopMove(bishop_row, bishop_col)
                queenMove(queen_row, queen_col)
                CheckMat(king_row, king_col);

                $('#res')[0].reset();
                $(this).off(event);
            }else {
                alert('greq 0-7!!!')

            }

        }else {
            alert('Lracnel dashtery!!!')


        }


    })

    $('.newGame').click(function () {
        window.location.reload()
    })

});


function addSquares()
{
    $('.board').html('');
        for(let row = 0; row < BOARD_WIDTH; row++) {

            for (let col = 0; col < BOARD_HEIGHT; col++) {
                $('.board').append(divSquare
                    .replace('$row',row)
                    .replace('$col',col)
                    .replace('$color',
                        isBlack(row,col) ? 'black' : 'white'));
                tver(row,col);

            }
        }
}
function isBlack(row,col)
{
    return (row + col) % 2;
}
function tver(row,col)
{
    if (col == 0) {
        $("#s" + row + col).html(divTver
            .replace('$row', row)
            .replace('$col', col)
            .replace('$tiv', row));
    }

    if (row == 0) {
        let i = 0;
        $("#s" + row + col).html(divTver
            .replace('$row', row)
            .replace('$col', col)
            .replace('$tiv', String.fromCharCode(97 + col)));

        }





}
function showFigure(row,col,figure)
{
    $("#s" + row + col).html(divFigure
        .replace('$fig', figure)
        .replace('$row', row)
        .replace('$col', col)
        .replace('$figure',
            getChessFigure(figure)));
}
function getChessFigure(figure)
{
    switch (figure) {
        case 'kibl' : return '&#9818;';
        case 'kiwt' : return '&#9812;';
        case 'quee' : return '&#9813;';
        case 'bish' : return '&#9815;';
        case 'knig' : return '&#9816;';
        default : return  ' ';

    }

}
function Knight(row, col)
{
    chess[row][col] = 2;
}
function KnightMove(row, col)
{
    if (row-2 >= 0) {
        if (col-1 >= 0){
            if(chess[row - 2][col - 1] == 0){
                chess[row - 2][col - 1] = 1;

            }else if(chess[row - 2][col - 1] == 2){
                chess[row - 2][col - 1] = 3;
            }
        }

        if (col+1 <= BOARD_HEIGHT-1){
            if (chess[row - 2][+col + 1] == 0){
                chess[row - 2][+col + 1] = 1;

            }else if (chess[row - 2][+col + 1] == 2) {
                chess[row - 2][+col + 1] = 3;

            }
        }

    }
    if (row-1 >= 0) {
        if (col-2 >= 0){
            if(chess[row - 1][col - 2] == 0){
                chess[row - 1][col - 2] = 1;

            }else if(chess[row - 1][col - 2] == 2){
                chess[row - 1][col - 2] = 3;
            }
        }

        if (col+2 <= BOARD_HEIGHT-1)
            if(chess[row - 1][col + 2] == 0){
                chess[row - 1][col + 2] = 1;

            }else if(chess[row - 1][col + 2] == 2){
                chess[row - 1][col + 2] = 3;
            }

    }
    if (row + 1 <= BOARD_WIDTH-1) {
        if (col-2 >= 0) {
            if (chess[row + 1][col - 2] == 0) {
                chess[row + 1][col - 2] = 1;

            }else if(chess[row + 1][col - 2] == 2) {
                chess[row + 1][col - 2] = 3;
            }
        }


        if (col+2 <= BOARD_HEIGHT-1) {
            if (chess[row + 1][col + 2] == 0) {
                chess[row + 1][col + 2] = 1;

            }else if(chess[row + 1][col + 2] == 2){
                chess[row + 1][col + 2] = 3;

            }
        }

    }

    if (row + 2 <= BOARD_WIDTH - 1) {
        if (col - 1 >= 0){
            if (chess[row + 2][col - 1] == 0) {
                chess[row + 2][col - 1] = 1;

            }else if(chess[row + 2][col - 1] == 2) {
                chess[row + 2][col - 1] = 3;

            }
        }

        if (col+1 <= BOARD_HEIGHT-1) {
            if (chess[row + 2][col + 1] == 0) {
                chess[row + 2][col + 1] = 1;
            }else if(chess[row + 2][col + 1] == 2) {
                chess[row + 2][col + 1] = 3;

            }
        }
    }
}
function king(row, col)
{
    chess[row][col] = 'K';
}
function kingMove(row, col)
{
    for (let i = -1; i <= 1; i++) {
        if (col+i < 0 || col+i > BOARD_HEIGHT-1) continue;

        for (let j = -1; j <= 1; j++) {
            if (row+j < 0 || row+j > BOARD_WIDTH-1) continue;
            if (i == 0 && j == 0) continue;
            if (chess[row + j][col + i] == 0)
                chess[row + j][col + i] = 1;
            else {
                chess[row + j][col + i] = 3;
            }
            
        }
    }
}
function Bishop(row, col)
{
    chess[row][col] = 2;
}
function BishopMove(row, col)
{
    for (let i = 1; row+i <= BOARD_WIDTH-1 && col-i >= 0; i++) {
        if(chess[row + i][col - i] == 0){
            chess[row + i][col - i] = 1;
        }else if(chess[row + i][col - i] == 2){
            chess[row+i][col-i] = 3;
            break;
        }
    }

    for (let i = 1; row+i <= BOARD_WIDTH-1 && col+i <= BOARD_HEIGHT-1; i++) {

        if(chess[row + i][col + i] == 0){
            chess[row + i][col + i] = 1;
        }else if(chess[row + i][col + i] == 2){
            chess[row+i][col+i] = 3;
            break;
        }
    }

    for (let i = 1; row-i >= 0 && col+i <= BOARD_HEIGHT-1; i++) {
        if(chess[row - i][col + i] == 0){
            chess[row - i][col + i] = 1;
        }else if(chess[row - i][col + i] == 2){
            chess[row-i][col+i] = 3;
            break;
        }
    }

    for (let i = 1; row-i >= 0 && col-i >= 0; i++) {
        if(chess[row - i][col - i] == 0){
            chess[row - i][col - i] = 1;
        }else if(chess[row - i][col - i] == 2){
            chess[row-i][col-i] = 3;
            break;
        }
    }
    // console.log(chess)

}
function Rook(row, col)
{
    chess[row][col] = 2;
}
function RookMove(row, col)
{
    for (let i = 1; col-i >= 0; i++) {
        if(chess[row][col-i] == 0){
            chess[row][col-i] = 1;
        }else if(chess[row][col-i] == 2){
            chess[row][col-i] = 3;
            break;
        }

    }

    for (let i = 1; row+i <= BOARD_WIDTH-1; i++) {
        if(chess[row+i][col] == 0){
            chess[row+i][col] = 1;
        }else if(chess[row+i][col] == 2) {
            chess[row+i][col] = 3;
            break;
        }
    }

    for (let i = 1; col+i <= BOARD_HEIGHT-1; i++) {
        if(chess[row][col+i] == 0) {
            chess[row][col+i] = 1;
        }else if(chess[row][col+i] == 2){
            chess[row][col+i] = 3;
            break;
        }
    }

    for (let i = 1; row-i >= 0; i++) {
        if (chess[row-i][col] == 0) {
            chess[row-i][col] = 1;
        } else if(chess[row-i][col] == 2){
            chess[row-i][col] = 3;
            break;
        }
    }
}
function queen(row, col)
{
    chess[row][col] = 2;
}
function queenMove(row,col)
{
    RookMove(row, col);
    BishopMove(row,col);

}
function CheckMat(row, col)
{
    let t = true;
    let error = true;
    for (let i = -1; i <= 1; i++) {
        if (col + i < 0 || col + i > BOARD_HEIGHT - 1) continue;

        for (let j = -1; j <= 1; j++) {
            if (row + j < 0 || row + j > BOARD_WIDTH - 1) continue;
            if (i == 0 && j == 0) continue;
            if(chess[row + j][col + i] == 'K') {
                error = false;
                break;

            }else if(chess[row + j][col + i] == 0 || chess[row + j][col + i] == 2) {
                t = false;
                break;
            }
        }
    }

    if (!t) {
        $('.mat').append("Mat Chka")
    }
    else if (!error){
        $('.mat').append("Animast Qayl")
    }
    else {
        $('.mat').append("Mat")
    }
}

console.log(chess);