$(document).ready(function() {
	$('#val_equipfc').change(function() {
		$('#val_equipnofc').prop('disabled', $(this).val() == "B");
	});
});

function myFunction(){

	var e = document.getElementById("mySelect");
	if (e.value == 1){
		document.getElementById("densitet").disabled = true;
		document.getElementById("densitet").value = "";
		document.getElementById("massa").disabled = false;
		document.getElementById("volym").disabled = false;
	}

	if (e.value == 2){
		document.getElementById("densitet").disabled = false;
		document.getElementById("massa").disabled = true;
		document.getElementById("massa").value = "";
		document.getElementById("volym").disabled = false;
	}
	if (e.value == 3){
		document.getElementById("densitet").disabled = false;
		document.getElementById("massa").disabled = false;
		document.getElementById("volym").disabled = true;
		document.getElementById("volym").value = "";
	}
}

function calculate(){
	var e = document.getElementById("mySelect");
	if (e.value == 1){
		calculateDens();
	}
	if (e.value == 2){
		calculateMass();
	}
	if (e.value == 3){
		calculateVol();
	}
}

// Beräkning av densitet:
function calculateDens(){
	var a = Number(document.getElementById("massa").value);
	var c = Number(document.getElementById("volym").value);
	document.getElementById("densitet").value = a / c;
}

// Beräkning av massa:
function calculateMass(){
	var a = Number(document.getElementById("densitet").value);
	var c = Number(document.getElementById("volym").value);
	document.getElementById("massa").value = a * c;
}	

// Beräkning av volym:
function calculateVol(){
	var a = Number(document.getElementById("densitet").value);
	var b = Number(document.getElementById("massa").value);
	document.getElementById("volym").value = b / a;
}	