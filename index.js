let selectedColor = ''
const painting = document.querySelector('.painting')

painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor
})
selectedColor = document.querySelector('.color-choice')
// Blue
selectedColor = document.querySelector('#blue')
selectedColor.addEventListener('click', function() {
    selectedColor = 'blue'
})
// Red
selectedColor = document.querySelector('#red')
selectedColor.addEventListener('click', function() {
    selectedColor = 'red'
})
// Yellow
selectedColor = document.querySelector('#yellow')
selectedColor.addEventListener('click', function() {
    selectedColor = 'yellow'
})
// Green
selectedColor = document.querySelector('#green')
selectedColor.addEventListener('click', function() {
    selectedColor = 'green'
})
// Purple
selectedColor = document.querySelector('#purple')
selectedColor.addEventListener('click', function(){
    selectedColor = 'purple'
})

let selectedColor2 = 'white'
painting.addEventListener('dblclick', function(f){
    f.target.style.backgroundColor = selectedColor2
})

let button = document.createElement('button')
button.textContent = 'CLEAR'
button.setAttribute('id','button')
document.body.append(button)
button.addEventListener('click', function(g){
     let coloredIn = document.querySelectorAll(".pixel")
     for(let i = 0; i < coloredIn.length; i++)
     coloredIn[i].style.backgroundColor = 'white'
})