"use strict";
function calcularSoma() {
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;
    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }
    return SOMA;
}
console.log("Desafio 1 - Soma:", calcularSoma());
function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;
    while (b < numero) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b === numero || numero === 0;
}
const numeroFibonacci = 21; // Substitua pelo número desejado
console.log(`Desafio 2 - O número ${numeroFibonacci} ` +
    (pertenceFibonacci(numeroFibonacci) ? "pertence" : "não pertence") +
    " à sequência de Fibonacci.");
const faturamentoMensal = [
    0, 100, 200, 300, 0, 50, 400, 800, 0, 0, 150, 600, 250, 0, 50, 700, 0, 0, 0, 300,
    100, 0, 250, 150, 0, 500, 100, 200, 0, 700, 600,
];
function analisarFaturamento(dados) {
    const diasComFaturamento = dados.filter((valor) => valor > 0);
    const menorValor = Math.min(...diasComFaturamento);
    const maiorValor = Math.max(...diasComFaturamento);
    const mediaMensal = diasComFaturamento.reduce((acc, val) => acc + val, 0) /
        diasComFaturamento.length;
    const diasAcimaDaMedia = diasComFaturamento.filter((valor) => valor > mediaMensal).length;
    return { menorValor, maiorValor, diasAcimaDaMedia };
}
const resultadoFaturamento = analisarFaturamento(faturamentoMensal);
console.log("Desafio 3 - Análise de Faturamento:", resultadoFaturamento);
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
};
function calcularPercentualPorEstado(dados) {
    const total = Object.values(dados).reduce((acc, val) => acc + val, 0);
    const percentuais = {};
    for (const estado in dados) {
        percentuais[estado] = ((dados[estado] / total) * 100).toFixed(2) + "%";
    }
    return percentuais;
}
console.log("Desafio 4 - Percentual por Estado:", calcularPercentualPorEstado(faturamentoPorEstado));
function inverterString(texto) {
    let invertida = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertida += texto[i];
    }
    return invertida;
}
const stringParaInverter = "OpenAI"; // Substitua pela string desejada
console.log(`Desafio 5 - String invertida: "${stringParaInverter}" -> "${inverterString(stringParaInverter)}"`);
