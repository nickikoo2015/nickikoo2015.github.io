// JavaScript Document
var aCount = 0;
var bCount = 0;
var answer = generateRandomDigits();
var counter = 0; //計算Rounds

function checkAnswer(guessNum, answer) {
    aCount = bCount = 0;
    var usedAns = [0, 0, 0, 0];
    var usedGuessNum = [0, 0, 0, 0];
    /*
    用於判斷數字重複狀況
    */
    for (var i = 0; i < answer.length; i += 1) {
        if (answer[i] == guessNum[i]) {
            aCount += 1;
            usedGuessNum[i] = usedAns[i] = 1;
        }
    }
    /*
    判斷答案有幾個A
    i是答案欄的第幾位數，如有A，則在used對應欄位標註為1
    */

    for (var i = 0; i < answer.length; i += 1) {
        for (var j = 0; j < guessNum.length; j += 1) {
            if (answer[i] === guessNum[j] && i !== j && usedAns[i] === 0 && usedGuessNum[j] === 0) {
                bCount += 1;
                usedAns[i] = usedGuessNum[j] = 1;
            }
        }
    }
    /* 
    判斷答案有幾個B
    i是正確答案欄的第幾位數，j是玩家猜測欄的第幾位數
    如果答案欄和猜測欄有數字相同，且在不同的欄位，而且此欄位數字在used未被標註為1，
    如有B，則在used對應欄位標註為1
    */
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
    log.innerHTML = log.innerHTML + "<tr><td>" + counter + "</td> <td>" + guessNum + "</td> <td>" + aCount + "A" + bCount + "B</li></td></tr>";
    if (aCount === 4)
    //alert("Correct answer!!!");
        swal("Good job!", "Correct answer!!!", "success")
}

function generateRandomDigits() {
    var result = "";
    for (var i = 0; i < 4; i += 1) {
        var pickNumber = Math.floor(Math.random() * 9);
        result = result.concat(pickNumber.toString());
    }
    return result;
}
/*
產生隨機答案
*/

function reset() {
    answer = generateRandomDigits();
    var log = document.getElementById("log");
    log.innerHTML = "<tr><td>Rounds</td><td>Your Guess</td><td>Answer</td></tr>";
    counter = 0;
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
    console.log("length=" + object.value.length);
    if (object.value.length > 1)
        object.value = object.value.slice(0, 1);
}

function autoFocus(fromfield, tofield) {
    var length = fromfield.value.length;
    if (length >= 1) {
        document.getElementsByName(tofield)[0].value = "";
        document.getElementsByName(tofield)[0].focus();
    }
}

function show() {
    swal("The answer is " + answer);
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
