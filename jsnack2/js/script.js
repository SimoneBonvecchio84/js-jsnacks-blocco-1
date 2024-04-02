const invitati = ["Gustavo", "Paperino", "Paperoga","Ermenegildo"];

let puoiPartecipare = false;

const nomeInvitato = prompt("nome partecipante");

for(let i = 0; i < invitati.length; i++) {
    if(nomeInvitato === invitati[i]) {
        puoiPartecipare = true;
    }

}

if(puoiPartecipare) {
    console.log("puoi entrare alla festa");
} else {
    console.log("signore lei non è il benvenuto, se ne vada per cortesia!");
}