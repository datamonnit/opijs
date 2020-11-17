let canvas = document.getElementById('myCanvas');
let strokeColor = document.getElementById('btnStrokeColor');
let fillColor = document.getElementById('btnFillColor');
let bgColor = document.getElementById('btnBgColor');
let strokeWidth = document.getElementById('btnStrokeWidth');


let ctx = canvas.getContext('2d');

prepareCanvas = () => {
    ctx.fillStyle = bgColor.value;
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.strokeRect(0, 0, canvas.width, canvas.height)
}

drawSomething = (e) => {

    let target = e.target.id;

    if (target == 'btnDraw') {
        ctx.fillStyle = fillColor.value;
        ctx.strokeStyle = strokeColor.value;
        ctx.strokeRect(10, 10, 50, 50);
        ctx.fillRect(10, 10, 50, 50);
    }

    if (target == 'btnClear') {
        prepareCanvas();
    }

    if (target == 'btnSave') {
        let dataURL = canvas.toDataURL();
        document.getElementById('canvasImg').src = dataURL;
    }
}

drawPencil = (e) => {
    if (e.buttons == 1) {
        console.log(e)
        console.log(e.layerX + " " + e.layerY);
        ctx.fillStyle = fillColor.value;
        // ctx.fillRect(e.x, e.y, strokeWidth.value, strokeWidth.value)
        ctx.beginPath();
        ctx.arc(e.layerX, e.layerY, strokeWidth.value/2, 0, Math.PI * 2, true); // Outer circle
        ctx.fill();
    }
}

window.addEventListener("load", prepareCanvas);
document.addEventListener("click", drawSomething);
canvas.addEventListener("mousemove", drawPencil)
