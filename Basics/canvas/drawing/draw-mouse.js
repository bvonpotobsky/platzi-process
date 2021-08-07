const canvas = document.querySelector('.myCanvas');
const context = canvas.getContext('2d');
const resetButton = document.querySelector('.reset');

let isDrawing = false;
let x = 0;
let y = 0;

function handleMouseDown(e) {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
}

function handleMouseMove(e) {
    if(isDrawing === true) {
        draw(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
}

function handleMouseUp(e) {
    if(isDrawing === true) {
        draw(context, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrawing = false;
    } 
}

function draw(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'white';
    context.lineWidth = 3;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}

canvas.addEventListener('mousedown', handleMouseDown); 
canvas.addEventListener('mousemove', handleMouseMove); 
window.addEventListener('mouseup', handleMouseUp);

resetButton.addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});

const bgColorButton = document.querySelector('.color');

bgColorButton.addEventListener('click', () => { 
    canvas.style.backgroundColor = COLORS[Math.floor(Math.random() * 51)];
});

const COLORS = [];
while (COLORS.length < 50) {
    COLORS.push(`rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`);
}
// Random number generator
function rand(frm, to) {
    return ~~(Math.random() * (to - frm)) + frm;
}





