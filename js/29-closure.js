function makeCounter(count){

    return function(){
        return count++;
    };
}

let counter = makeCounter(0);
let counter2 = makeCounter(0);

console.log( counter() ); // 0 
console.log( counter() ); // 1

console.log( counter2() ); // 0
console.log( counter2() ); // 1

/////////////////////////////////

function createIncrementor(n){

    return function(num){
        return num + n;
    };
}

let addOne = createIncrementor(1);
let addTen = createIncrementor(10);

console.log( addOne(10) ); // 11 
console.log( addOne(41) ); // 51

console.log( addTen(10) ); // 11 
console.log( addTen(41) ); // 51


function urlGenerator(domain){

    return function (url){
        return `https://${url}.${domain}`;
    }
}

const urlCom = urlGenerator('com');
const urlCoIl = urlGenerator('co.il');

console.log( urlCom('google') );
console.log( urlCom('amazon') );

console.log( urlCoIl('ynet') );
console.log( urlCoIl('dafi') );