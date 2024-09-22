/**
8. Criando Novos Arrays a Partir de Objetos
O Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.
 */

const films = [
    {title:'American Beauty', director:'Sam Mendes', releaseYear: 1999},
    {title:'\C\'est pas moi, je le jure!', director:'Philippe Falardeau', releaseYear: 2008},
    {title:'Pulp Fiction', director:'Quentin Tarantino', releaseYear: 1994},
    {title:'Forrest Gump', director:'Robert Zemeckis', releaseYear: 1994}

];

const newArray = [];

films.forEach((element,index) => {
  newArray[index] = element.title;  
})

console.log(newArray);