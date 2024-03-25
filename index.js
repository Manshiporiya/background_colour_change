const red = document.getElementById('red')
 const black = document.getElementById('black')
 const blue = document.getElementById('blue')
 const green = document.getElementById('green')
 const pink = document.getElementById('pink')
 const redBtn = document.getElementById('redBtn')
 const blackBtn = document.getElementById('blackBtn')
 const blueBtn = document.getElementById('blueBtn')
 const greenBtn = document.getElementById('greenBtn')
 const pinkBtn = document.getElementById('pinkBtn')
 
 redBtn.addEventListener("click", function(){
   document.body.style.background = 'red';
 })

 blackBtn.addEventListener("click", function(){
     document.body.style.background = 'black';
 })

 blueBtn.addEventListener("click", function(){
     document.body.style.background = 'blue';
 })

 greenBtn.addEventListener("click", function(){
    document.body.style.background = 'green';
})

pinkBtn.addEventListener("click", function(){
    document.body.style.background = 'pink';
})