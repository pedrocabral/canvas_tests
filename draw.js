window.onload = function(){
  const canvas = document.getElementById("screen");
  const ctx = canvas.getContext("2d");
  ctx.moveTo(20,20);
  ctx.strokeStyle = "red";
  ctx.lineTo(180,20);
  ctx.stroke;
  
  let radius = canvas.height / 2;
  ctx.translate(radius, radius);
  radius = radius * 0.80;
  ctx.arc(0, 0, radius, 0 , 2 * Math.PI);
  ctx.strokeStyle = "black";
  ctx.stroke;
}
