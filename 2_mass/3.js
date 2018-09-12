'use strict';
function getNewArraySwap(a) {
	const even = a.length % 2 === 0,
				left = Math.floor(a.length / 2);
	return even ?
			[ ...a.slice(left) , ...a.slice(0, left) ] :
			[ ...a.slice(left+1) , a[left], ...a.slice(0, left) ];
}

console.log(getNewArraySwap([1,2,3,4,5,6]));
console.log(getNewArraySwap([1,2,3,4,5]));