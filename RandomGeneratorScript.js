document
.getElementById("meuId")
.getElementById("meuId2")
.getElementById("meuId3")
.getElementById("meuId4")
.getElementById("meuId5")
.getElementById("meuId6")

.textContent = updateNumber();


function getRandomArbitrary() {
    return ((Math.random() * (60 - 1)) + 1).toFixed(0);
}

/*function updateNumber(){
    document.getElementById("meuId1").textContent = getRandomArbitrary();
    document.getElementById("meuId2").textContent = getRandomArbitrary();
    document.getElementById("meuId3").textContent = getRandomArbitrary();
    document.getElementById("meuId4").textContent = getRandomArbitrary();
    document.getElementById("meuId5").textContent = getRandomArbitrary();
    document.getElementById("meuId6").textContent = getRandomArbitrary();
}
*/
function updateNumber(){
    document.getElementById("meuId").textContent = getRandomArbitrary();
    document.getElementById("meuId2").textContent = getRandomArbitrary();
    document.getElementById("meuId3").textContent = getRandomArbitrary();
    document.getElementById("meuId4").textContent = getRandomArbitrary();
    document.getElementById("meuId5").textContent = getRandomArbitrary();
    document.getElementById("meuId6").textContent = getRandomArbitrary();

}