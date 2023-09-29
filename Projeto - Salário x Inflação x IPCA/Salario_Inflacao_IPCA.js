import entradaDados from 'readline-sync'

let colecao_salarios_IPCA = [
    { "Ano": "2010", "Salário": 510, "IPCA": 5.91 },
    { "Ano": "2011", "Salário": 545, "IPCA": 6.50 },
    { "Ano": "2012", "Salário": 622, "IPCA": 5.84 },
    { "Ano": "2013", "Salário": 678, "IPCA": 5.91 },
    { "Ano": "2014", "Salário": 724, "IPCA": 6.41 },
    { "Ano": "2015", "Salário": 788, "IPCA": 10.67 },
    { "Ano": "2016", "Salário": 880, "IPCA": 6.29 },
    { "Ano": "2017", "Salário": 937, "IPCA": 2.95 },
    { "Ano": "2018", "Salário": 954, "IPCA": 3.75 },
    { "Ano": "2019", "Salário": 998, "IPCA": 4.31 },
    { "Ano": "2020", "Salário": 1045, "IPCA": 4.52 }
]

console.log("\nEscolha uma das alternativas: \n");
console.log("1 - Listar os salários mínimos de 2010 à 2020");
console.log("2 - Lista o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");
console.log('\n');

let opcao = entradaDados.question('Digite o numero da sua escolha: ');

console.log("\n");

switch (opcao) {

    case '1':

        for (const dados of colecao_salarios_IPCA) {

            console.log("Ano: ".padEnd(30, ".") + " " + dados.Ano);
            console.log('Salário: '.padEnd(30, ".") + " " + "R$ " + dados.Salário.toFixed(2).replace('.', ','));
            console.log("\n");
        }

        break;

    case '2':

        for (const dados of colecao_salarios_IPCA) {

            console.log("Ano: ".padEnd(30, ".") + " " + dados.Ano);
            console.log('Índice IPCA: '.padEnd(30, ".") + " " + dados.IPCA.toFixed(2).replace('.', ',') + " %");
            console.log("\n");
        }
        
        break;

    case '3':

        let contador = "";
        let salarioAno = [];
        let percentualCrescimento = "";

        for (contador = 0; contador < colecao_salarios_IPCA.length; contador++) {

            salarioAno.push(colecao_salarios_IPCA[contador].Salário);

            percentualCrescimento = ((salarioAno[contador] - salarioAno[contador - 1]) / salarioAno[contador - 1]) * 100;

            if (colecao_salarios_IPCA[contador].Ano != 2010) {

                console.log("Ano: ".padEnd(30, ".") + " " + colecao_salarios_IPCA[contador].Ano);
                console.log("Salário: ".padEnd(30, ".") + " " + "R$ " + colecao_salarios_IPCA[contador].Salário.toFixed(2).replace('.', ','));
                console.log("Crescimento Salarial: ".padEnd(30, ".") + " " + percentualCrescimento.toFixed(2).replace('.', ',') + " %");
                console.log("Inflação IPCA: ".padEnd(30, ".") + " " + colecao_salarios_IPCA[contador].IPCA.toFixed(2).replace('.', ',') + " %");

            } else {

                console.log("Ano: ".padEnd(30, ".") + " " + colecao_salarios_IPCA[contador].Ano);
                console.log("Salário: ".padEnd(30, ".") + " " + "R$ " + colecao_salarios_IPCA[contador].Salário.toFixed(2).replace('.', ','));
                console.log("Crescimento Salarial: ".padEnd(30, ".") + " " + "-");
                console.log("Inflação IPCA: ".padEnd(30, ".") + " " + colecao_salarios_IPCA[contador].IPCA.toFixed(2).replace('.', ',') + " %");

            }

            console.log("\n");
        }

        break;
    default:
        console.log("Opção inválida!");
}