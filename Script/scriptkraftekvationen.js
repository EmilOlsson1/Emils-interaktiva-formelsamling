$(document).ready(function() {
	$('#val_equipfc').change(function() {
		$('#val_equipnofc').prop('disabled', $(this).val() == "B");
	});
});

function myFunction(){

	var e = document.getElementById("mySelect");
	if (e.value == 1){
		document.getElementById("kraft").disabled = true;
		document.getElementById("kraft").value = "";
		document.getElementById("massa").disabled = false;
		document.getElementById("acceleration").disabled = false;
	}

	if (e.value == 2){
		document.getElementById("kraft").disabled = false;
		document.getElementById("massa").disabled = true;
		document.getElementById("massa").value = "";
		document.getElementById("acceleration").disabled = false;
	}
	if (e.value == 3){
		document.getElementById("kraft").disabled = false;
		document.getElementById("massa").disabled = false;
		document.getElementById("acceleration").disabled = true;
		document.getElementById("acceleration").value = "";
	}
}

function calculate(){
	var e = document.getElementById("mySelect");
	if (e.value == 1){
		calculateForce();
	}
	if (e.value == 2){
		calculateMass();
	}
	if (e.value == 3){
		calculateAcceleration();
	}
}

// Beräkning av kraft:
function calculateForce(){
	var a = Number(document.getElementById("massa").value);
	var c = Number(document.getElementById("acceleration").value);
	document.getElementById("kraft").value = a * c;
}

// Beräkning av massa:
function calculateMass(){
	var a = Number(document.getElementById("kraft").value);
	var c = Number(document.getElementById("acceleration").value);
	document.getElementById("massa").value = a / c;
}	

// Beräkning av acceleration:
function calculateAcceleration(){
	var a = Number(document.getElementById("kraft").value);
	var b = Number(document.getElementById("massa").value);
	document.getElementById("acceleration").value = a / b;
}	

// Nollställningsknapp:
function resetForm() {
  document.getElementById("mySelect").reset();
}