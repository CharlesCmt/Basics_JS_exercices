
function factorial(n) {
    if (n < 0) return;
    if (n < 2) return 1;
    return n * factorial(n - 1);
}

console.log("Welcome to the factorial calculate ! ");
let numb = prompt("De quelle nmbre souhaite-tu calculer la factorielle ?");
console.log("Voici le résultat : " + factorial(numb));
