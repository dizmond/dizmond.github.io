var letters = [
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ]
];
const word = ["T","O","D","A","Y"];
var clickCount = 0;

function addWord(input,id, row, column) {
    letters[row][column] = input;
    colorChange(input,id,column);
}

function showLetters() {
    console.log(letters.join(''));
}

function colorChange(input,id, column) {

    if (input == word[column]){
        var v = document.getElementById(id);
        v.style.backgroundColor = "green";
    }
    else if ((input != word[column]) && (word.includes(input))){
        var v = document.getElementById(id);
        v.style.backgroundColor = "yellow";
    }
    
}