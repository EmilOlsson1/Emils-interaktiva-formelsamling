$(document).ready(function() {
	$('#val_equipfc').change(function() {
		$('#val_equipnofc').prop('disabled', $(this).val() == "B");
	});
});

function myFunction(){

	var e = document.getElementById("mySelect");
	if (e.value == 1){
		document.getElementById("arbete").disabled = true;
		document.getElementById("arbete").value = "";
		document.getElementById("kraft").disabled = false;
		document.getElementById("sträcka").disabled = false;
	}

	if (e.value == 2){
		document.getElementById("arbete").disabled = false;
		document.getElementById("kraft").disabled = true;
		document.getElementById("kraft").value = "";
		document.getElementById("sträcka").disabled = false;
	}
	if (e.value == 3){
		document.getElementById("arbete").disabled = false;
		document.getElementById("kraft").disabled = false;
		document.getElementById("sträcka").disabled = true;
		document.getElementById("sträcka").value = "";
	}
}

function calculate(){
	var e = document.getElementById("mySelect");
	if (e.value == 1){
		calculateWork();
	}
	if (e.value == 2){
		calculateForce();
	}
	if (e.value == 3){
		calculateSträcka();
	}
}

// Beräkning av arbete:
function calculateWork(){
	var a = Number(document.getElementById("kraft").value);
	var c = Number(document.getElementById("sträcka").value);
	document.getElementById("arbete").value = a * c;
}

// Beräkning av kraft:
function calculateForce(){
	var a = Number(document.getElementById("arbete").value);
	var c = Number(document.getElementById("sträcka").value);
	document.getElementById("kraft").value = a / c;
}	

// Beräkning av sträcka:
function calculateSträcka(){
	var a = Number(document.getElementById("arbete").value);
	var b = Number(document.getElementById("kraft").value);
	document.getElementById("sträcka").value = a / b;
}	

// Nollställningsknapp:
function resetForm() {
  document.getElementById("mySelect").reset();
}