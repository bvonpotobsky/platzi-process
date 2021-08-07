const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
let linea = 0;
const lineas = 30;

// drawing functionality
function draw(color, xStart, yStart, xEnd, yEnd) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();
    ctx.closePath();
}

while(linea < lineas){
    let yI, yF, xI, xF, nxf, nyf;
    xF = 30 * linea;
    yI = 30 * (linea + 1);
    xI = 30 * linea;
    yF = 30 * (linea + 1);
    nxf = 900 - xF;
    nyf = 900 - yF;
    draw('#AAF', xI, 900, 900, nyf);    
    draw('#AAF', 0, xF, nxf, 0);
    draw('#AAF', 0, xF, yF, 900);
    draw('#AAF', xI, 0, 900, yF);
}

