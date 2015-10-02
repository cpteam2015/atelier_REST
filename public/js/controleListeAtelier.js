var data = new XMLHttpRequest();
data.open('GET','mockup.json',true);
//~ var doc = JSON.parse(data.responseText);
data.onreadystatechange = function () {
          if(data.readyState==4 && data.status == "200")
			  chargement(JSON.parse(data.responseText));
		  
        }        
data.send();
var Json;

function chargement (json) {
	
	Json = json;
	var j=0;
	var longJson = Json.length;
	var tabTitre = new Array(longJson);
	var tabTheme = new Array(longJson);
	
	for(i=0;i< longJson; i++)
	{
		var ligne = document.createElement('tr');
		ligne.innerHTML = '<td><input type="text" id ="idTitre_'+ i +'" name="Nom_Atelier" disabled=True style="width:97%;"><td><input type="text" id ="idTheme_'+ i +'" name="Theme" disabled=True style="width:97%;"></td><td><input type="button" id="visual_'+i+'" onclick=window.open("atelier.erb") value="visualiser" style="margin:0 10px;" /><input type="button" id="sup_'+i+'" onclick="supprimer('+i+');" value="supprimer" /></td></tr>'
		document.getElementById('listAt').appendChild(ligne);
		tabTitre[j] = Json[i].title;
		tabTheme[j] = Json[i].theme;
		document.getElementById('idTitre_'+i+'').value = tabTitre[j];
		document.getElementById('idTheme_'+i+'').value = tabTheme[j];
		j=j+1;		
	}
}

function supprimer(b)
{
	var nomAt = Json[b].title;
	var conf= confirm('Voulez-vous vraiment supprimer l\'atelier: '+ nomAt +' ?');
	if(conf)
	{
		var i = document.getElementById('sup_'+b+'').parentNode.parentNode.rowIndex;
		document.getElementById('listAt').deleteRow(i);		
	}
}

