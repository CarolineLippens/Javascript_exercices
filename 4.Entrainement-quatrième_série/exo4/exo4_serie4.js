
let mdp = document.getElementById("motdepasse");
let confirm = document.getElementById("confirmation");
function enter(){
if (mdp.value==confirm.value){
    mdp.style.border = "thick solid #82C46C";
    confirm.style.border = "thick solid #82C46C";
}
else{
    mdp.style.border = "thick solid #C60800";
    confirm.style.border = "thick solid #C60800";
}
    }