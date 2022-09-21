const{noise} = require('@chriscourses/perlin-noise')
window.onload = main
function main() {
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = innerWidth;
canvas.height = innerHeight;
var colorsArray = ["rgb(24, 67, 208)", "blue", "rgb(17, 164, 233)", "rgb(94, 17, 238)", "rgb(255, 255, 255)"];
class Circle {
        constructor(x, y, radius, color,Offset) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.Offset= Offset;
            
        } 
        
            draw ()  {
                c.beginPath();
                c.arc(this.x, this.y,this.radius , 0, Math.PI * 2, false);
         
                c.arc(this.x,this.y,this.radius, 0, Math.PI * 2, false);
                c.fillStyle = this.color;
                c.fill();
                c.closePath();
               
            };
           update(){
            this.draw();
           }
       
         
        }
 var time = 0 ;  
const circleArray = [];
for(let i= 0 ; i  < 100 ; i++){
    circleArray.push( new Circle(-30,-30,Math.random() * 10, `hsl(${noise(1)  * i},100%,50%)`,i * 0.01));
}
function animate (){
    requestAnimationFrame(animate)
c.fillStyle = 'rgba(0,0,0,0.01)'
c.fillRect(0,0,canvas.width, canvas.height);     
        circleArray.forEach(circle => {
            circle.draw(circle);
            circle.y = noise(time + circle.Offset) * canvas.height * Math.sin(time);
            circle.x = noise(time + time + circle.Offset ) * canvas.width * Math.cos(time);
        })
        time += 0.001
    

      
    
   

    
}
animate();
}