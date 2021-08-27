let active = false;

function tenda() {
    if(!active){
        document.getElementById("tenda").style.visibility = "visible";
        active = true;
    }else{
        document.getElementById("tenda").style.visibility = "hidden";
        active = false;
    }
}
