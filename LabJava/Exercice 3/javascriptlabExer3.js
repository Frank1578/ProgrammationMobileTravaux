

var resultat=Math.floor((Math.random()*20) + 1);

while(nombre!=resultat)
{
	var nombre=prompt("Entrez un chiffre: ");
	if(nombre<resultat)
	{
		alert("Le nombre est plus petit");
	}
	else if(nombre>resultat)
	{
		alert("Le nombre est plus grand");
	}
	else
	{
		alert("Bravo, vous avez gagné!");
	}
}