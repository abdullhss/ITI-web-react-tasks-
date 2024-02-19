const canvas = document.getElementById('c');
const contx = canvas.getContext('2d');

contx.beginPath();
contx.moveTo(50, 30);

contx.font="10pt Georgia"
contx.fillText("C",90,80)
contx.lineTo(50, 180);

contx.font="10pt Georgia"
contx.fillText("B",90,200)
contx.lineTo(120, 180);

contx.font="10pt Georgia"
contx.fillText("A",20,80)
contx.fillStyle = 'red';
contx.fill();
