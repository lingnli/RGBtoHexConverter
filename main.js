//宣告
const colorInput = document.querySelector('form')
const hexOutput = document.querySelector('[data-hex]')
let colorR = 0



//監控輸入值
colorInput.addEventListener('input', event => {
  //R輸入值
  if (event.target.classList.contains("color-r")) {
    colorR = event.target.value

    let hexR = rgbtohex(colorR, 0, 0)
    console.log(hexR)
    event.target.parentElement.children[2].style.backgroundColor = String(hexR)

  }
  //G輸入值
  if (event.target.classList.contains("color-g")) {
    colorG = event.target.value
    let hexG = rgbtohex(0, colorG, 0)
    console.log(hexG)
    event.target.parentElement.children[2].style.backgroundColor = String(hexG)
  }
  //B輸入值
  if (event.target.classList.contains("color-b")) {
    colorB = event.target.value
    let hexB = rgbtohex(0, 0, colorB)
    console.log(hexB)
    event.target.parentElement.children[2].style.backgroundColor = String(hexB)
  }
})
//hex output




//監聽converter
colorInput.addEventListener('submit', event => {
  event.preventDefault()
  let colorR = event.target.children[0].children[1].value
  let colorG = event.target.children[1].children[1].value
  let colorB = event.target.children[2].children[1].value
  let colorHex = rgbtohex(colorR, colorG, colorB)
  console.log(colorHex)

  hexOutput.innerHTML = `
    <h2>HEX</h2>
    <div class="form-control display" style="padding:0px; padding-left:10px" id="hex">${colorHex}</div>
    <div class="color-display-box" style="background-color:${colorHex}"></div>
  `

})
//防呆：輸入為0~255 利用html去設定
//尋找其他方法





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

