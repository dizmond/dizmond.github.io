var letters = [
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ]
];

var idLabel = [
    ["00","01","02","03","04"],
    ["10","11","12","13","14"],
    ["20","21","22","23","24"],
    ["30","31","32","33","34"],
    ["40","41","42","43","44"],
    ["50","51","52","53","54"]
];
const word = ["W","A","T","E","R"];
var clickCount = 1;
var rowNum = 6;
var official_word_guessed_flag = false;
function addWord(input,id, row, column) {
    if (official_word_guessed_flag == false) {
        letters[row][column] = input;
    }
}

function showLetters() {
    var word_guessed_check_flag = true;
    if ((clickCount <= 6) && (official_word_guessed_flag == false)) { //row
        for (var i = 0; i < word.length; i++) { //column
            if (letters[clickCount-1][i] == word[i]) {
                var v = document.getElementById(idLabel[clickCount-1][i]);
                v.style.backgroundColor = "green";
            }
            else if ((letters[clickCount-1][i] != word[i]) && (word.includes(letters[clickCount-1][i]))) {
                var v = document.getElementById(idLabel[clickCount-1][i]);
                v.style.backgroundColor = "yellow";
                word_guessed_check_flag = false;
            }
            else {
                var v = document.getElementById(idLabel[clickCount-1][i]);
                v.style.backgroundColor = "transparent";
                word_guessed_check_flag = false;
            }
        }
        if ((word_guessed_check_flag) && (clickCount < 6)) { //flag is true only if word has been guesssed
            official_word_guessed_flag = true;
            for (var r = clickCount; r < rowNum; r++) {
                for (var c = 0; c < word.length; c++) {
                    var v = document.getElementById(idLabel[r][c]);
                    v.style.backgroundColor = "gray"; 
                }
            }
        }        
        clickCount = clickCount + 1;
        console.log(letters.join(','));
    }   
}
