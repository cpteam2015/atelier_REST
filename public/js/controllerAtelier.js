var x = new XMLHttpRequest();
x.open('GET','mockup.json',true);
x.onreadystatechange = function () {
          if(x.readyState==4 && x.status == "200")
			fillForm(JSON.parse(x.responseText));
        }
x.send();

function fillForm (json) {
	json = json[0];
	console.log (json['title']);
	for (key in json)

		if(key=='date'  || key=='public'){
			for (k in json[key]){
				console.log(json[key])
				document.getElementById(k).checked = json[key][k]
			}
		}else{
			if(key=='free')
				document.getElementById(key).checked = json[key]
			else{
				console.log(json[key]);
				document.getElementById(key).value = json[key]
			}
		}

}
