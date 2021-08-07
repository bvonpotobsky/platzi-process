const canvas = document.querySelector('.villa');
const context = canvas.getContext('2d');
const map = 'tile.png';

const bgCanva = {
    url: 'villa.png',
    chargeOk: false,
}

bgCanva.img = new Image();
bgCanva.img.src = map;

const animals = {
    chicken: {
        url: 'pollo.png',
        chargeOk: false,
    },
    pig: {
        url: 'cerdo.png',
        chargeOk: false,
    },
    cow: {
        url: 'vaca.png',
        chargeOk: false,
    },
}
animals.chicken.img = new Image();
animals.chicken.img.src = 'pollo.png';

animals.pig.img = new Image();
animals.pig.img.src = 'cerdo.png';

animals.cow.img = new Image();
animals.cow.img.src = 'vaca.png';

bgCanva.img.addEventListener('load', drawMap);

async function drawMap() {
    bgCanva.chargeOk = true;
    context.drawImage(bgCanva.img, 0, 0);
}
        
setTimeout(() => {
    context.drawImage(animals.chicken.img, 50, 180);
    context.drawImage(animals.pig.img, 100, 200);
    context.drawImage(animals.cow.img, 20, 150);
}, 1000);


