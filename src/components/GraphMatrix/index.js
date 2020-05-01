import React from "react";
import Sketch from "react-p5";

function GraphMatrix() {
  function drawTarget(p5, xnum, ynum, matrizWidth, matrizHeigth) {
    let b = p5.color('#FFFAFA')

    let sizeH = 480 / ynum; //eixo y dividido pelo número de linhas
    let sizeW = 480 / xnum; //eixo x dividido pelo número de colunas

    //para desenhar os retângulos das conexoes
    let x = sizeW / 4; //espaçamento da margem em x
    for (let i = 0; i < xnum; i++) {
      let y = sizeH / 4; //espaçamento da margem em x
      for (let j = 0; j < ynum; j++) {
        p5.fill(b);
        p5.rect(x, y, sizeW / 2, sizeH / 2, 5); //desenha quadrados
        if (i != xnum - 1) {
          colors(p5, matrizWidth, i, j);
          p5.rect(x + (sizeW / 2), y + (sizeH / 2) / 3, sizeW / 2, (sizeH / 2) / 3); //desenha conexões em x
        }
        if (j != ynum - 1) {
          colors(p5, matrizHeigth, i, j);
          p5.rect(x + (sizeW / 2) / 3, y + (sizeH / 2), (sizeW / 2) / 3, sizeH / 2); //desenha conexões em x
        }
        y = y + (480 / (ynum));
      }
      x = x + (480 / xnum);
    }
  }
  function colors(p5, matriz, i, j) {
    let b = p5.color('#FFFAFA')
    let v = p5.color('#FF0000')
    let a = p5.color('#FFFF00')
    let g = p5.color('#98FB98')

    switch (matriz[j][i]) {
      case 0:
        p5.fill(b);
        break;
      case 1:
        p5.fill(g);
        break;
      case 2:
        p5.fill(a);
        break;
      case 3:
        p5.fill(v);
        break;
    }
  }

  let x = 10;
  let y = 10;

  let matrizWidth = [];
  for (let i = 0; i < y; i++) {
    let linha = [];
    for (let j = 0; j < (x - 1); j++) {
      linha.push(0);
    }
    matrizWidth.push(linha);
  }

  let matrizHeigth = [];
  for (let i = 0; i < (y - 1); i++) {
    let linha = [];
    for (let j = 0; j < (x); j++) {
      linha.push(0);
    }
    matrizHeigth.push(linha);
  }

  const setup = (p5, parent) => {
    p5.createCanvas(480, 480).parent(parent);
  }

  const draw = p5 => {
    p5.background('#F0F0F3');
    drawTarget(p5, x, y, matrizWidth, matrizHeigth);
    let k = Math.round(Math.random() * (x - 2));
    let l = Math.round(Math.random() * (y - 1));
    matrizWidth[l][k] = Math.round(Math.random() * 3);

    let m = Math.round(Math.random() * (x - 1));
    let n = Math.round(Math.random() * (y - 2));
    matrizHeigth[n][m] = Math.round(Math.random() * 3);
  }

  return (
    <Sketch setup={setup} draw={draw} />
  )
}

export default GraphMatrix;
