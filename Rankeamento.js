// Função para calcular o nível com base nas vitórias
function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;  // Calcula o saldo de vitórias e derrotas
    let nivel = "";  // Variável para armazenar o nível do jogador

    // Definindo o nível com base nas vitórias
    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna a mensagem
    return "O Herói tem um saldo de **" + saldoVitorias + "** vitórias, e está no nível **" + nivel + "**";
}

// Chamada da função com os valores
let resultado = calcularNivel(25, 25);

// Exibir o resultado no console
console.log(resultado);


