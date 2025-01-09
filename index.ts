import * as fs from 'fs';

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log("Soma dos primeiros 13 números naturais:", SOMA);


function isFibonacci(num: number): boolean {
    let a = 0, b = 1, temp;
    
    while (b < num) {
        temp = b;
        b = a + b;
        a = temp;
    }

    return b === num || num === 0;
}

const number = 21;  // Pode ser qualquer número
if (isFibonacci(number)) {
    console.log(`${number} pertence à sequência de Fibonacci`);
} else {
    console.log(`${number} não pertence à sequência de Fibonacci`);
}

interface Faturamento {
    dia: number;
    valor: number;
}

const faturamento: Faturamento[] = JSON.parse(fs.readFileSync('faturamento.json', 'utf-8'));

const diasComFaturamento = faturamento.filter(f => f.valor > 0);

const menorFaturamento = Math.min(...diasComFaturamento.map(f => f.valor));

const maiorFaturamento = Math.max(...diasComFaturamento.map(f => f.valor));

const somaFaturamento = diasComFaturamento.reduce((acc, curr) => acc + curr.valor, 0);
const mediaFaturamento = somaFaturamento / diasComFaturamento.length;

const diasAcimaMedia = diasComFaturamento.filter(f => f.valor > mediaFaturamento).length;

console.log("Menor faturamento diário:", menorFaturamento);
console.log("Maior faturamento diário:", maiorFaturamento);
console.log("Média do faturamento diário:", mediaFaturamento);
console.log("Número de dias com faturamento superior à média:", diasAcimaMedia);


const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

const totalFaturamento = Object.values(faturamentoEstados).reduce((acc, value) => acc + value, 0);

Object.entries(faturamentoEstados).forEach(([estado, valor]) => {
    const percentual = (valor / totalFaturamento) * 100;
    console.log(`Percentual de faturamento de ${estado}: ${percentual.toFixed(2)}%`);
});


function inverterString(str: string): string {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

const stringOriginal = "Olá, mundo!";
const stringInvertida = inverterString(stringOriginal);

console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);
