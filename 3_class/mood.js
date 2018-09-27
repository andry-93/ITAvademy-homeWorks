"use strict";

function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    const colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'],
        resultColor = {};
    let count = 0;
    colorsCount = (colorsCount<colors.length)?colorsCount:colors.length-1;
    for (let i=1; i<=colorsCount; i++ ) {
        let n = randomDiap(1, colors.length-1);
        if (colors[n] in resultColor) {
            continue;
        }
        const colorName = colors[n];
        resultColor[colorName]=n;
        count++;
        console.log( colorName );
    }
    console.log( 'цветов: ' + count);
}

mood(100);