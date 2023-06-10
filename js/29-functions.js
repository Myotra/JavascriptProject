// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi(); //  "John" or "Pete"?

function getMathResult(baseNum, countNum) {
    let result = '';
    
    if(typeof(countNum) != 'number' || countNum == 0 || countNum < 0){
        result = baseNum;
    }
    else{
        for (var i = 1; i <= countNum; i++) {
            result += (baseNum*i);
            if(i < countNum){
                result += '---';
            }
        }
    }
    
    return result;
}

console.log( getMathResult(10, '5') );

console.log( getMathResult(20, -5));


function getCoupeNumber(num) {
    
    if(typeof(num) != 'number' || num < 0 || !Number.isInteger(num)){
                return 'Ошибка. Проверьте правильность введенного номера места';
            }
            
    if(num === 0 || num > 36){
        return 'Таких мест в вагоне не существует';
    }
    
    let result;

    // My solution
    // const arr = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16], [17,18,19,20], [21,22,23,24],
    //              [25, 26, 27, 28], [29, 30, 31, 32],[33,34,35,36]];                 
    
    // for(let i = 0; i < arr.length; i++){
    //     for (var j = 0; j < arr[i].length; j++) {
    //         if(arr[i][j] == num){
    //             result = i + 1;
    //         }
    //     }
    // }

    result = Math.ceil(num / 4);
    
    return result;
    
}

console.log(getCoupeNumber(33));



function getTimeFromMinutes(m) {
    if(typeof(m) != 'number' || m < 0 || !Number.isInteger(m)){
        return 'Ошибка, проверьте данные';
    }

    let hours = parseInt(m / 60);
    let minutes = m % 60;

    // My solution
    // let postfix;
    // if(((hours % 10) == 0) || (hours >= 12 && hours < 21)){
    //     postfix = 'ов';
    // }
    // else if(!(hours >= 12 && hours < 21) && (hours % 10) == 2 || (hours % 10) == 3 || (hours % 10) == 4){
    //     postfix = 'а';
    // }
    // else{
    //     postfix = '';
    // }

    // Teacher's solution
    let postfix = '';

    switch (hours) {
        case 0: 
        postfix = 'часов';
            break;
        case 1:
            postfix = 'час';
            break;
        case 2:
        case 3:
        case 4:
            postfix = 'часа';
            break;
        default:
            postfix = 'часов';
    }

    // return `Это ${hours} час${postfix} и ${minutes} минут`;

    return `Это ${hours} ${postfix} и ${minutes} минут`;
}

console.log(getTimeFromMinutes(150)); 
console.log(getTimeFromMinutes(1345)); 
console.log(getTimeFromMinutes(743)); 
console.log(getTimeFromMinutes(50)); 
console.log(getTimeFromMinutes(60)); 
console.log(getTimeFromMinutes(0)); 
console.log(getTimeFromMinutes(-150)); 


function findMaxNumber(a, b, c, d) {
    
    if(typeof(a) != 'number' || typeof(b) != 'number' || typeof(c) != 'number' || typeof(d) != 'number' ||
       a === undefined || b === undefined || c === undefined || d === undefined){
        return 0;
    }


    // My solution
    // let arr = [a,b,c,d];
    // arr.sort(a => a);
    // console.log(arr);
    // return arr[arr.length - 1];

    // Teacher's solution
    return Math.max(a,b,c,d);

}


console.log(findMaxNumber(11, 5, 6.6, 1));
console.log(findMaxNumber(1, 5, '6', '10'));
console.log(findMaxNumber(8, 5, 3));


function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }
    
    let result = ''

    let resultArr = [];

    for (let i = 0; i < num; i++) {
       
        if(i == 0){
            resultArr[i] = 0;
        }
        else if(i == 1){
            resultArr[i] = 1;
        }
        else{
            resultArr[i] = resultArr[i-1] + resultArr[i-2];
        }

        result += resultArr[i];
        if(i != num-1){
            result +=  ' ';
        }
         
                
    }

    return result;
}

console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(1));