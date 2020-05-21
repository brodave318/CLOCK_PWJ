const fonts = ['Black Ops One', 'Bungee Inline', 'Freckle Face', 'Lemonada', 'Orbitron', 'Pacifico', 'Piedra', 'Raleway Dots', 'Rye', 'Special Elite']
let index = 0
setInterval(() => {
  document.querySelector('.clock').innerHTML = new Date().toLocaleTimeString()
  document.querySelector('.clock').style.fontFamily = fonts[index]
  index++
  if (index > 9) index = 0
}, 1000)