const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней

for (var i = 0; i <= lines; i++) {

    for (var j = lines; j > i; j--) {
        
        result += ' ';
    }

    for(var k = 0; k <= i*2; k++ ){
        result += '*';
    }
    
    result += '\n';
}
console.log(result);