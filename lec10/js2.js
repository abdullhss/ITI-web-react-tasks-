const canvas = document.getElementById('c');
const ctxt = canvas.getContext('2d');
const ctxt1 = canvas.getContext('2d');

const gradient = ctxt.createRadialGradient(300, 170, 0, 250, 250, 150);
  gradient.addColorStop(0.80, 'rgba(20,20,250,0.85)');
  gradient.addColorStop(0.05, 'rgba(255,255,255,0.5)');

  ctxt.beginPath();
  ctxt.arc(250, 250, 150, 0, 2 * Math.PI);
  ctxt.fillStyle = gradient;
  ctxt.fill();



  const gradient1 = ctxt1.createRadialGradient(300, 300, 0, 250, 250, 90);
  gradient1.addColorStop(0.10, 'rgba(255,255,255,0.4)');
  gradient1.addColorStop(0.80, 'rgba(0,0,255,0.85)');

  ctxt1.beginPath();
  ctxt1.arc(250, 250, 90, 0, 2 * Math.PI);
  ctxt1.fillStyle = gradient1;
  ctxt1.fill();
  
  ctxt1.fillStyle = "white"
  ctxt1.font="70pt Georgia"
  ctxt1.fillText("N",210,280)