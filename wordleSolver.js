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
const word = ["T","O","D","A","Y"];
var clickCount = 0;

function addWord(input,id, row, column) {
    letters[row][column] = input;
}

function showLetters() {
    if (clickCount < 6) { //row
        for (var i = 0; i < word.length; i++) { //column
            if (letters[clickCount][i] == word[i]) {
                var v = document.getElementById(idLabel[clickCount][i]);
                v.style.backgroundColor = "green";
            }
            else if ((letters[clickCount][i] != word[i]) && (word.includes(letters[clickCount][i]))) {
                var v = document.getElementById(idLabel[clickCount][i]);
                v.style.backgroundColor = "yellow";
            }
            else {
                var v = document.getElementById(idLabel[clickCount][i]);
                v.style.backgroundColor = "gray";
            }
        }        
        clickCount = clickCount + 1;
    }   
}
