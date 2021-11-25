var canvas = document.getElementById('line');
var context = canvas.getContext('2d');

context.beginPath();        
context.moveTo(130, 0);    
context.lineTo(130, 100);   
context.lineTo(0, 180);
context.lineWidth = 1;     
context.strokeStyle = 'rgba(255, 255, 255, 0.5)';
context.stroke();    

context.beginPath();        
context.moveTo(220, 0);    
context.lineTo(220, 35);   
context.lineTo(135, 85);
context.lineWidth = 1;     
context.strokeStyle = 'rgba(255, 255, 255, 0.5)';
context.stroke();    

context.beginPath();        
context.moveTo(100, 125);    
context.lineTo(100, 330);   
context.lineTo(170, 400);
context.lineTo(170, 540);
context.lineTo(120, 600);
context.lineTo(120, 790);
context.lineWidth = 1;     
context.strokeStyle = 'rgba(255, 255, 255, 0.5)';
context.stroke();    

context.beginPath();        
context.moveTo(610, 330);    
context.lineTo(400, 330);
context.lineTo(295, 430);
context.lineTo(295, 790)   
context.lineWidth = 1;     
context.strokeStyle = 'rgba(255, 255, 255, 0.5)';
context.stroke();    

