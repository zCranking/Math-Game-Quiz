function adduser(){
    player_1 = document.getElementById("player_1_input").value;
    player_2 = document.getElementById("player_2_input").value;

    localStorage.setItem("player_1", player_1);
    localStorage.setItem("player_2", player_2);

    window.location="game_page.html";
}
function animate1(){
    document.getElementById("arrow-right").style.boxShadow = "0px 15px 20px rgba(46, 229, 157, 0.4)";
    document.getElementById("arrow-right").style.backgroundColor = "#8aea92"; 
    document.getElementById("arrow-right").style.color = "#fff";
    document.getElementById("arrow-right").style.transform = "translateX(8px)";
}
function animate2(){
    document.getElementById("arrow-right").style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);";
    document.getElementById("arrow-right").style.cursor = "pointer";
    document.getElementById("arrow-right").style.outline = "none";
    document.getElementById("arrow-right").style.transform = "translateX(-16px)";
    document.getElementById("arrow-right").style.color = "#000";
	document.getElementById("arrow-right").style.backgroundColor = "rgb(124, 208, 236)";
}
