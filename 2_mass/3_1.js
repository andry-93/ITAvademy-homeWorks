'use strict';
function getArraySwap(a) {
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

console.log(getArraySwap(getArrayRandom(0,10,5)));