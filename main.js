function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

function Aluno(nome, idade, matricula) {
    Pessoa.call(this, nome, idade);
    this.matricula = matricula;
}

function Professor(nome, idade, disciplina) {
    Pessoa.call(this, nome, idade);
    this.disciplina = disciplina;
}

const aluno1 = new Aluno('Isac', 20, '251111');
const aluno2 = new Aluno('João', 18, '251212');
const professor1 = new Professor('Odilon', 40, 'Orientação a Objetos em Java');

console.log(`Aluno 1: ${aluno1.nome}, ${aluno1.idade} anos, Matrícula: ${aluno1.matricula}`);
console.log(`Aluno 2: ${aluno2.nome}, ${aluno2.idade} anos, Matrícula: ${aluno2.matricula}`);
console.log(`Professor: ${professor1.nome}, ${professor1.idade} anos, Disciplina: ${professor1.disciplina}`);
