const body = document.body;
const width = body.offsetWidth;
const height = body.offsetHeight;
const widthAmount = document.getElementById('widthAmount');
const heightAmount = document.getElementById('heightAmount');
widthAmount.innerHTML = width;
heightAmount.innerHTML = height;

console.log(width);
console.log(height);