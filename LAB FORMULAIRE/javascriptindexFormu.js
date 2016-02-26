function surligne(champ, erreur)
{
 if(erreur)
 champ.style.backgroundColor = "#ff7e5e";
 else
 champ.style.backgroundColor = "#aaffbb";
}

function verifMail(champ)
{
 var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
 if(!regex.test(champ.value))
 {
 surligne(champ, true);
 return false;
 }
 else
 {
 surligne(champ, false);
 return true;
 }
}

function verifID(champ)
{
	if(champ.value.length < 2 || champ.value.length > 25)
	{
		surligne(champ, true);
		return false;
	}
	else
	{
		surligne(champ, false);
		return true;
	}
}

function verifPassW(champ)
{
	if (champ.value.length > 4 || champ.value.length < 16)
	{
		surligne(champ, true);
		return true;
	}
	else
	{
		surligne(champ, false)
		return false;
	}
}

function verifNom(champ)
{
	if (champ.value.length < 2 || champ.value.length > 20)
	{
		surligne(champ, true);
		return false;
	}
	else
	{
		surligne(champ, false)
		return true;
	}
}

function verifPrenom(champ)
{
	if (champ.value.length < 2 || champ.value.length > 20)
	{
		surligne(champ, true);
		return false;
	}
	else
	{
		surligne(champ, false)
		return true;
	}
}


function verifForm(f)
{
 var pseudoOk = verifID(f.pseudo);
 var motdepasseOk = verifPassW (f.motdepasse);
 var nomOk = verifNom (f.nom);
 var prenomOk = verifPrenom (f.prenom);
 var mailOk = verifMail(f.adressemail);

 
 if(pseudoOk && motdepasseOk && nomOk && prenomOk && mailOk)
 return true;
 else
 {
 alert("Veuillez remplir correctement tous les champs");
 return false;
 }
 alert("Vous avez saisi le Nom : " +
document.getElementById("inscription").elements["given-name"].value);
}


