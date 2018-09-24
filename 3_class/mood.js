"use strict";

function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    const colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'],
        resultColor = {};
    console.log( 'цветов: ' + colorsCount );
    for (let i=1; i<=colorsCount; i++ ) {
        let n = randomDiap(1, 7);
        while (colors[n] in resultColor) {
            n=randomDiap(1,7);
        }
        resultColor[colors[n]]=n;
        const colorName = colors[n];
        console.log( colorName );
    }
}

mood(7);