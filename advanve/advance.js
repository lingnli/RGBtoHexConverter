
//宣告
const form = document.querySelector('.form')
//查getElementsByTagName 使用方法
var inputR = document.querySelector('.r-slide').value
var inputG = document.querySelector('.g-slide').value
var inputB = document.querySelector('.b-slide').value



//監聽slide
form.addEventListener('mousemove', event => {
  //event:change 當滑鼠放到定點才會改變
  //event:mousemove 當滑鼠拖曳即會改變

  if (event.target.classList.contains('r-slide')) {
    inputR = event.target.value
    document.querySelector('.r-number').innerText = String(inputR)
  }
  if (event.target.classList.contains('g-slide')) {
    inputG = event.target.value
    document.querySelector('.g-number').innerText = String(inputG)
  }
  if (event.target.classList.contains('b-slide')) {
    inputB = event.target.value
    document.querySelector('.b-number').innerText = String(inputB)
  }
  displayHex()
})


//顯示hex數字及背景顏色改騙
function displayHex() {
  let outputHex = rgbtohex(inputR, inputG, inputB)
  console.log(outputHex)
  document.querySelector('.hex').innerText = outputHex
  document.body.style.backgroundColor = String(outputHex)
  //改變背景顏色
}

//function
function rgbtohex(x, y, z) {
  let hexX = Number(x).toString(16)
  let hexY = Number(y).toString(16)
  let hexZ = Number(z).toString(16)

  if (hexX.length === 1) {
    hexX = '0' + hexX
  }

  if (hexY.length === 1) {
    hexY = '0' + hexY
  }
  if (hexZ.length === 1) {
    hexZ = '0' + hexZ
  }
  return "#" + hexX + hexY + hexZ
}
