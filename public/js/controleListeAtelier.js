var data = new XMLHttpRequest();
data.open('GET','mockup.json',true);
data.onreadystatechange = function () {
          if(x.readyState==4 && x.status == "200")
			chargement(JSON.parse(x.responseText));
		  else
			dump("erreur pendant le chargement de la page.\n");
        }
        
data.send();

function chargement (json) {
	
	var Json = json;
	var longJson = Json.length;
	var tabTitre = new Array(longJson);
	var tabTheme = new Array(longJson);
	
	for(i=0;i< longJson; i++)
		{
			Json = Json[i];
			var ligne = document.createElement('tr');
			ligne.innerHTML = '<td><input type="text" id ="idTitre_'+ i +'" name="Nom_Atelier" disabled=True style="width:97%;"><td><input type="text" id ="idTheme_'+ i +'" name="Theme" disabled=True style="width:97%;"></td><td><input type="button" id="visual_'+i+'" onclick=window.open("atelier.html") value="visualiser" style="margin:0 10px;" /><input type="button" id="sup_'+i+'" onclick="supprimer('+i+');" value="supprimer" /></td></tr>'
			document.getElementById('listAt').appendChild(ligne);
			tabTitre[j] = console.log (Json['title']);
			tabTheme[j] = console.log (Json['theme']);
			document.getElementById('idTitre_'+i+'').value = tabTitre[j];
			document.getElementById('idTheme_'+i+'').value = tabTheme[j];
			j=j+1;
			
		}
	
}

window.onload = chargement;
