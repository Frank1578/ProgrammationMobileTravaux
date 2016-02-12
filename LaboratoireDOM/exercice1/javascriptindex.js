var cpt=0;

document.getElementById("btn").addEventListener("click", function()
{
	var p=document.getElementById("para1");
	
cpt++;
p.innerHTML = "Vous avez cliquer sur le bouton " + cpt + " fois";



});