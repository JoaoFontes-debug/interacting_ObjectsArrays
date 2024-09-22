/*
2. Verificando Propriedades 
O Objetivo: Crie um objeto livro com propriedades 
titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.
 */

const livro = {
    titulo: "A utilidade do Inútil",
    autor: "Nuccio Ordine",
    anoPublicacao: "04/02/2016",
    genero: "Ensaio",
  };
  
  for (const x in livro) {
    if (x === "editora") {
      console.log("tem editora");
    } else {
      livro.editora = "";
      console.log(livro);
      break;
    }
}
  