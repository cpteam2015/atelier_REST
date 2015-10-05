var data = new XMLHttpRequest();
data.open('GET','/atelier',true);
//~ var doc = JSON.parse(data.responseText);
data.onreadystatechange = function () {
          if(data.readyState==4 && data.status == "200")
			  chargement(JSON.parse(data.responseText));
		  
        }        
data.send();

function chargement (json) {
	console.log(json);
	for(i=0;i< json.length; i++){
		var ligne = document.createElement('tr');
		ligne.innerHTML = '<td><input type="text" disabled=True style="width:97%;" value="'+json[i].titre+'"><td>'
								// <input type="text" disabled=True style="width:97%;" value="'+json[i].theme+'"></td>
								// <td><input type="button" onclick=window.open("atelier/'+json[i]._id+'") value="visualiser" style="margin:0 10px;" />
								// <input type="button" onclick="supprimer('+json[i]._id+');" value="supprimer" /></td></tr>'
		document.getElementById('listAt').appendChild(ligne);
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

