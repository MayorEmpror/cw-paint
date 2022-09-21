$(document).ready(function(){  
    $(".clock-watch-icon").animate({
      marginTop : "2000px",
    },2000)
      $(".preloader").fadeOut(2000);
    $("canvas").on("mousemove", function(event){
        mouse.x = event.clientX;
        mouse.y = event.clientY - 170;
   })
      var colors = [
        [ "rgb(224, 7, 7)", " rgb(250, 142, 0)","rgb(250, 108, 0)"  ],
        [ "rgb(183, 250, 0)","rgb(83, 250, 0)","rgb(9, 74, 8)"      ],
        [ "rgb(20, 239, 162)","rgb(20, 213, 239)","rgb(0, 83, 236)" ],
        [ "rgb(67, 0, 236)", "rgb(102, 63, 145)", "rgb(242, 17, 212)"]];
      for(  let i = 0;i < colors[0].length; i++){
      $(".column1").append(`<div id="column-1-elements" class="elem" style= " margin-top: 2px; width:25px;height  : 25px;background-color  : ${colors[0][i]}; color : ${colors[0][i]}"title="color">t</div>`); }   
      for(  let j = 0;j < colors[1].length; j++){
      $(".column2").append(`<div id="column2-elements " class="elem" style= "margin-top: 2px;width:25px;height : 25px;background-color : ${colors[1][j]}; color : ${colors[1][j]}" title="color">t</div>`)}
      for(  let l = 0;l < colors[2].length; l++){
      $(".column3").append(`<div id="column3-elements " class="elem" style= "  margin-top: 2px;width:25px;height  : 25px;background-color  : ${colors[2][l]}; color : ${colors[2][l]}" title="color">t</div>`)} 
      for(  let k = 0;k < colors[3].length; k++){
      $(".column4").append(`<div id="column4-elements "  class="elem" style= "  margin-top: 2px;width:25px;height  : 25px;background-color  : ${colors[3][k]}; color : ${colors[3][k]}" title="color">t</div>`)}        
      $(".Color-palette").css({border : "1px solid blue",width : "300px",height : "100px",marginTop : "-44px",marginLeft : "-44px"})
      var selectionDetector = false ;
      $(".elem").on("click",function(){
      $("body").css({
          cursor: "url(cursor.cur),auto"
        })
        })
      $(".elem").on("dblclick",function (){
        if( selectionDetector === true){
      $("body").css({
          cursor : "auto",
        })
      }
       
      })
      
     const brush = new draw(mouse.x,mouse.y,10)
           var engaged = false;
      function animate(){
        if(engaged){
         requestAnimationFrame(animate)
             brush.construct();
            console.log(mouse.x);
            brush.x = mouse.x
            brush.y = mouse.y
         }  
        }
       $(canvas).on("mousedown", function(){
        engaged = true;
        $(this).on("mousemove", function(){
        animate();
        })
     })
     $(canvas).on("mouseup", function(){
      engaged = false;
     })


     
    })