// Cria um elemento div que será o container
var container = document.getElementById('container')



/// Cria um elemento div com a classe grid
var grid = document.createElement("div");
grid.className = "grid";

// Adiciona 256 elementos div com a classe square à grid
for (var i = 0; i < 256; i++) {
  var square = document.createElement("div");
  square.className = "square";

  // Adiciona um event listener de mouseover ao quadrado
  square.addEventListener("mouseover", function() {
    // Define a cor de fundo do quadrado como preto quando o mouse passar por cima dele
    this.style.backgroundColor = "black";
  });

  grid.appendChild(square);
}

container.appendChild(grid);
function Limpar(){
  document.querySelectorAll(".square").style.backgroundColor = "white";
}