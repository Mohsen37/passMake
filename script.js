// select element in DOM
const genBtn = document.querySelector('.gen-btn');
const inputOne = document.getElementById('input-one')
const inputTwo = document.getElementById('input-two')
const copyOneBtn = document.getElementById('copy-one')
const copyTweBtn = document.getElementById('copy-two')

// Template for Random Generate
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let result = '';

function genIndex(list){
  return Math.ceil(Math.random()*list.length)-1
}


function genRand(){
  let word = '';
  for(let i = 0; i < 8; i++){
    word += characters[genIndex(characters)]
  }
  result = word
}

genBtn.addEventListener('click', function (){
  genRand();
  inputOne.value = result;
  genRand()
  inputTwo.value = result
})

copyOneBtn.addEventListener('click' ,function(){
  inputOne.select();
  inputOne.setSelectionRange(0, 999999);
  navigator.clipboard.writeText(inputOne.value)
})


copyTweBtn.addEventListener('click', function(){
  inputTwo.select();
  inputTwo.setSelectionRange(0, 999999);
  navigator.clipboard.writeText(inputTwo.value)
})