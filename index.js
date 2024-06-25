let palavra;
let anagramas = [];

console.log("Digite uma palavra para fazer os anagramas");

process.stdin.on("data", function (data) {
  palavra = data.toString().trim();

  palavra = palavra.split("");
  for (let i = 0; i < palavra.lenght; i++) {
    for (let j = 0; j < palavra.lenght; j++) {
      let aux = palavra[i];
      palavra[i] = palavra[j];
      palavra[j] = aux;

      if (anagramas.includes(palavra.join(""))) {
        anagramas.push(palavra.join(""));
        console.log(palavra.join(""));
      }
    }
  }
});
