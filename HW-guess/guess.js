// JavaScript Document
var aCount = 0;
var bCount = 0;
var counter = 0;
var answer = generateRandomDigits();

function checkAnswer(guessNum, answer) {
    aCount = bCount = 0;
    var usedAns = [0, 0, 0, 0];
    var usedGuessNum = [0, 0, 0, 0];
    for(var i = 0; i < answer.length; i += 1) {
        if (answer[i] == guessNum[i]) {
            aCount+=1;
            usedGuessNum[i] = usedAns[i] = 1;
        }
    }

    // i是正確答案欄的第幾位數，j是玩家猜測欄的第幾位數
    for(var i = 0; i < answer.length; i += 1) {
        for (var j = 0; j < guessNum.length; j += 1) {
            if (answer[i] === guessNum[j] && i !== j
                 && usedAns[i] === 0 && usedGuessNum[j] === 0) {
                bCount += 1;
                usedAns[i] = usedGuessNum[j] = 1;
            }
        }
    }
}

function handleClick() {
    var n1 = document.getElementsByName("N1")[0].value;
    var n2 = document.getElementsByName("N2")[0].value;
    var n3 = document.getElementsByName("N3")[0].value;
    var n4 = document.getElementsByName("N4")[0].value;
    var guessNum = n1.concat(n2).concat(n3).concat(n4);
    
    checkAnswer(guessNum, answer);
//    alert(aCount + "A" + bCount + "B");
    var log = document.getElementById("log");
    counter += 1;
    log.innerHTML = log.innerHTML + "<tr><td>"+ counter + "</td> <td>" + guessNum + "</td> <td>"+ aCount + "A" + bCount + "B</li></td></tr>";
    if (aCount === 4)
        alert("Correct answer!!!");
}

function generateRandomDigits() {
    var result = "";
    for (var i = 0; i < 4; i+=1) {
        var pickNumber = Math.floor(Math.random() * 9);
        result = result.concat(pickNumber.toString());
    }
    return result;
}

function reset() {
    answer = generateRandomDigits();
    var log = document.getElementById("log");
    log.innerHTML = "<tr><td>Rounds</td><td>Your Guess</td><td>Answer</td></tr>";
    counter=0;
    /*
    var used = [0, 0, 0, 0, 0, 0, 0, 0,0, 0];
    answer = "";
    for (var i = 0; i < 4;) {
        var pickNumber = Math.floor(Math.random() * 9);
        if (used[pickNumber] === 0) {
            used[pickNumber] = 1;
            answer = answer.concat(pickNumber.toString());
            console.log("pick=" + pickNumber);
            i+=1;
        }
    }
    */
}

function checkNumLength(object) {
    if (object.value.length > 1)
        object.value = object.value.slice(0, 1);
}

function show() {
    alert("The answer is " + answer);
}
/*
for (var i = 0; i < answer.length; i += 1) {
    for (var j = 0; j < guessNum.length; j += 1) {
        if (answer[i] === guessNum {
                if (i === j) {
                    aCount += 1;
                } else {
                    bCount += 1;
                }
            };
        }
};
*/

/*
var guessNum.round(Math.random()*(9998)+1);


*/