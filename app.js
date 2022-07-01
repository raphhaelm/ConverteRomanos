const roman = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000}

function convert() {
    let ans = 0
    let entrada = document.getElementById("in").value
    let saida = document.getElementById("out")
    console.log(entrada)
    for(let i = entrada.length-1; ~i; i--){
        console.log(entrada)
        let numero = roman[entrada.charAt(i)]
        if(4* numero < ans) {
            ans -= numero
            saida.value = ans
        } else {
            ans += numero
            saida.value = ans
        }
    }
    return ans
}

