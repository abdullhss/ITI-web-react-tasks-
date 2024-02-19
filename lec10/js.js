const canvas = document.getElementById('c');
  const contx = canvas.getContext('2d');


  const gradient = contx.createLinearGradient(0, 0, 0, 500);
  gradient.addColorStop(0.15, 'rgba(14,128,124,1)');
  gradient.addColorStop(0.35, 'rgba(255,255,255,1)');
  
  contx.fillStyle = gradient;
  contx.fillRect(50, 50, 150, 100);

  
  const gradient1 = contx.createLinearGradient(0, 0, 0, 500);
  gradient1.addColorStop(0.70, 'rgba(255,255,255,1)');
  gradient1.addColorStop(0.25, 'rgba(0,255,50,1)');
  
  contx.fillStyle = gradient1;
  contx.fillRect(50, 150, 150, 100);

  contx.beginPath();
  contx.moveTo(70, 90);
  contx.lineTo(180, 90);
  contx.strokeStyle = 'black';
  contx.lineWidth = 2;
  contx.stroke();

  const gradient2 = contx.createLinearGradient(0, 0, 0, 500);
  gradient2.addColorStop(0.30, 'rgba(0,0,0,1)');
  gradient2.addColorStop(0.40, 'rgba(255,255,255,1)');
  
  
  contx.beginPath();
  contx.moveTo(70, 90);
  contx.lineTo(70, 200);
  contx.strokeStyle = gradient2;
  contx.lineWidth = 2;
  contx.stroke();

  
  contx.beginPath();
  contx.moveTo(180, 90);
  contx.lineTo(180, 200);
  contx.strokeStyle = gradient2;
  contx.lineWidth = 2;
  contx.stroke();

