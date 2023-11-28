let vitorias = 101
let derrotas = 10
let Saldo = calcularSaldo(vitorias,derrotas)
let rank = cacularRanking(Saldo)


function calcularSaldo (win,lose) { 
    saldoVitorias = win - lose
    return saldoVitorias
}
function cacularRanking(pdl) { 
    if (pdl<=10) { 
        elo="Ferro"
    } else if (pdl<=20) { 
        elo="Bronze"
    } else if (pdl<=50) { 
        elo="Prata"
    } else if (pdl<=80) { 
        elo="Ouro"
    } else if (pdl<= 90) { 
        elo="Diamante"
    } else if (pdl<= 100) { 
        elo="Lendário"
    } else { 
        elo ="Imortal"
    } return elo
}
console.log(`O Herói tem de saldo de ${Saldo} e está no nível ${rank}`)