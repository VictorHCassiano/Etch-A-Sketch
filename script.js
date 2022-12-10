var container = document.getElementById('container')

var elementos = "square16x16"
let nQuadrados = 0


 
/// Cria um elemento div com a classe grid
var grid = document.createElement("div");
grid.className = "grid";


  function s64x64(){
    removerGrid(nQuadrados)
     nQuadrados = 4096
    criarGrid(4096,"square64x64")
  }
  function s32x32(){
    removerGrid(nQuadrados)
    nQuadrados = 1024
    criarGrid(1024,"square32x32")
  }
  function s16x16(){
    removerGrid(nQuadrados)
    nQuadrados = 256
    criarGrid(256,"square16x16")
  }
//Cria a grid do tamanho escolhido com as funcoes acima
    function criarGrid(nQuadrados,elementos){
  for (var i = 0; i < nQuadrados; i++) {
    var square = document.createElement("div");
    square.className = elementos;
    square.id = "square"
  
    square.addEventListener("mouseover", function() {
      // Define a cor de fundo do quadrado como preto quando o mouse passar por cima dele
      this.style.backgroundColor = "black";
    });

    grid.appendChild(square);
  }
}

 function removerGrid(nQuadrados){
   removerQuadrado = document.querySelectorAll('#square')
  for (let i = 0; i < nQuadrados; i++){
    removerQuadrado[i].remove()
  }
 }

container.appendChild(grid);
function Limpar(){
   // Volta todos os quadrados da grid para branco
   var limparQuadrado = document.querySelectorAll('#square');
   for (var i = 0; i < limparQuadrado.length; i++) {
    limparQuadrado[i].style.backgroundColor = "white";
   }
}