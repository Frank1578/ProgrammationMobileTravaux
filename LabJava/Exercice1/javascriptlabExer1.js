var table=parseFloat(prompt("Entrez le chiffre pour avoir la table de multiplication "));

for(var i=0; i<13; i++)
{
	var result = table*i;
	console.log(i+"*"+table+"="+result);
}