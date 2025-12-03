var turn = 1;
var gameOver = false;

$(".cell").click(function () {

    if (!$(this).hasClass("r") || gameOver) return;

    if (turn === 1) {
        $(this).addClass("o-check").removeClass("r");
        $("#screen").text("PLAYER 2 TURN FOLLOWS");
        turn = 2;
    } else {
        $(this).addClass("x-check").removeClass("r");
        $("#screen").text("PLAYER 1 TURN FOLLOWS");
        turn = 1;
    }

    check("o-check");
    check("x-check");
});

function check(symbol) {
    const wins = [
        [".sq1", ".sq2", ".sq3"],
        [".sq4", ".sq5", ".sq6"],
        [".sq7", ".sq8", ".sq9"],
        [".sq1", ".sq4", ".sq7"],
        [".sq2", ".sq5", ".sq8"],
        [".sq3", ".sq6", ".sq9"],
        [".sq1", ".sq5", ".sq9"],
        [".sq3", ".sq5", ".sq7"]
    ];

    for (let c of wins) {
        if (
            $(c[0]).hasClass(symbol) &&
            $(c[1]).hasClass(symbol) &&
            $(c[2]).hasClass(symbol)
        ) {
            $(c[0] + "," + c[1] + "," + c[2]).addClass("wincss");
            $("#screen").text((symbol === "o-check" ? "O" : "X") + " WINS!");
            gameOver = true;
        }
    }
}

$(".reset").click(function () {
    $(".cell").removeClass("o-check x-check wincss r")
               .addClass("r");
    $("#screen").text("PLAYER 1 TURN FOLLOWS");

    turn = 1;
    gameOver = false;
});
