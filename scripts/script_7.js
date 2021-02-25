
let question = prompt("Wesh canne à pêche, bienvenue chez moi le chat-bot adolescent tu veux quoi ? ");

console.log("En écrivant `quit` tu arrète l'interraction avec le bot !");

let splitted = question.split("");
if (splitted[splitted.length - 1] === '?') {
    console.log("Ouais Ouais...");
} else if (question.includes("Fortnite") || question.includes("fortnite") || question.includes("fortnite".toUpperCase())
) {
    console.log("On s'fait une partie soum-soum ??");
} else if (question.toUpperCase() === question && question !== "") {
    console.log("Pwaaaaaah, calme toi...");
} else if (question === "") {
    console.log("T'es en PLS ???");
} else {
    console.log("Balek.");
}