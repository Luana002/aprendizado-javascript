let alunos = [
    {nome: "Maria", nota1: 20, nota2: 23},
    {nome: "Fabio", nota1: 50, nota2: 41},
    {nome: "Luna", nota1: 20, nota2: 24},
    {nome: "Samuel", nota1: 45, nota2: 45},
    {nome: "Luana", nota1: 39, nota2: 51},
    {nome: "Italo", nota1: 22, nota2: 19},
    {nome: "Samira", nota1: 57, nota2: 43},
    {nome: "Paulo", nota1: 20, nota2: 11}
];

aprovados = [];
recuperacao = [];
reprovados = [];

console.log("_____________________________ Tabela _________________________________")
console.log("_____Alunos_____ | __primeiro bimestre__ | _____segundo bimestre____")
for (let i = 0; i < alunos.length; i++) {
    console.log(`${alunos[i].nome} \t\t | ${alunos[i].nota1} \t\t\t | ${alunos[i].nota2}`);
}
console.log();

console.log("---------------- Soma dos dois bimestres: -----------------");
for (let i = 0; i < alunos.length; i++) {
    const soma = alunos[i].nota1 + alunos[i].nota2
        console.log(`Posição ${i} : ${alunos[i].nome} , notas calculadas: ${soma} `);

    if (soma > 60) {
        aprovados.push(alunos[i].nome);
    } else if (soma >= 35) {
        recuperacao.push(alunos[i].nome);
    } else {
        reprovados.push(alunos[i].nome);
    }
}
console.log();

console.log("______________________________Final___________________________________")
console.log(`Alunos aprovados : ${aprovados}`);
console.log(`Alunos em recuperação : ${recuperacao}`);
console.log(`Alunos reprovados : ${reprovados}`);