import React from "react";
import Sketch from "react-p5";

function GraphMatrix() {
    function drawTarget(p5, xnum, ynum) {
        let sizeH = 500 / ynum; //eixo y dividido pelo número de linhas
        let sizeW = 500 / xnum; //eixo x dividido pelo número de colunas

        //para desenhar os retângulos das conexoes 
        let x = sizeW / 4; //espaçamento da margem em x
        for (let i = 1; i <= xnum; i++) {
            let y = sizeH / 4; //espaçamento da margem em x
            for (let j = 1; j <= ynum; j++) {
                p5.rect(x, y, sizeW / 2, sizeH / 2,5); //desenha quadrados
                if (i != xnum) {
                    p5.rect(x + (sizeW / 2), y + (sizeH / 2) / 3, sizeW / 2, (sizeH / 2) / 3); //desenha conexões em x 
                }
                if (j != ynum) {
                    p5.rect(x + (sizeW / 2) / 3, y + (sizeH / 2), (sizeW / 2) / 3, sizeH / 2); //desenha conexões em x 
                }
                y = y + (500 / (ynum));
            }
            x = x + (500 / xnum);
        }
    }
    const setup = (p5, parent) => {
        p5.createCanvas(500, 500).parent(parent);
    }

    const draw = p5 => {
        p5.background('#F0F0F3');
        drawTarget(p5, 6, 6);
    }

    return (
        <Sketch setup={setup} draw={draw}/>
    )
}

export default GraphMatrix;