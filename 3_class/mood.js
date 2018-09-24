"use strict";

function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    const colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'],
        resultColor = {};
    colorsCount = (colorsCount<colors.length)?colorsCount:colors.length-1;
    console.log( 'цветов: ' + colorsCount);
    for (let i=1; i<=colorsCount; i++ ) {
        let n = randomDiap(1, colors.length-1);
        while (colors[n] in resultColor) {
            n=randomDiap(1,colors.length-1);
        }
        resultColor[colors[n]]=n;
        const colorName = colors[n];
        console.log( colorName );
    }
}

mood(5);