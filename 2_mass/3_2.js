'use strict';
function getArrayReverse(a) {
    let count = a.length-1;
    for (let i = 0; i <= Math.floor(count/2); i++) {
        let t  =  a[count-i];
        a[count-i]=a[i];
        a[i] = t;
    }
    return a;
}
function getArraySwap(a) {
    getArrayReverse(a);
    const even = a.length % 2 === 0,
        left = (even)?Math.floor(a.length / 2):Math.floor(a.length / 2)+1;
    for (let iStart=0, iEnd=left; iStart<=left && iEnd<a.length; iStart++, iEnd++) {
        let temp=a[iEnd];
        a[iEnd]=a[iStart];
        a[iStart]=temp;
    }
    return a;
}

function getArrayRandom(min, max, n) {
    let a=[];
    for (let i=0;i<n;i++) {
        a[i]=Math.floor(Math.random() * (max - min)) + min;
    }
    console.log("Массив: "+a+" Длина массива:"+a.length)
    return a;
}

console.log(getArraySwap(getArrayRandom(0,10,4)));