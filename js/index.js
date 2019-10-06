
console.log("Houston, we have a connection");



function BuildAlg(turn) {
    var spanAlgCtrl = document.getElementById("spanAlg");
    spanAlgCtrl.innerHTML += turn;
}

function BuildCell(turn) {
    var spanCellCtrl = document.getElementById("spanCell");
    spanCellCtrl.innerHTML += turn;
}