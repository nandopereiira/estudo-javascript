// PAR E IMPAR

function parimpar(n) {
    if (n%2==0){
        return 'par'
    } else {
        return 'impar'
    }
}
let res = parimpar(12)
console.log(res)

// SOMA

function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log (soma(7, 3))

// DOBRO

let dobro = function (x) {
    return x*2
}
console.log(dobro(10))

