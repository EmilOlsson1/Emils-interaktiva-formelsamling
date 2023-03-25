$(document).ready(function() {
	$('#val_equipfc').change(function() {
		$('#val_equipnofc').prop('disabled', $(this).val() == "B");
	});
});

function myFunction(){

	var e = document.getElementById("mySelect");
	if (e.value == 1){
		document.getElementById("spänning").disabled = true;
		document.getElementById("spänning").value = "";
		document.getElementById("ström").disabled = false;
		document.getElementById("resistans").disabled = false;
	}

	if (e.value == 2){
		document.getElementById("spänning").disabled = false;
		document.getElementById("ström").disabled = true;
		document.getElementById("ström").value = "";
		document.getElementById("resistans").disabled = false;
	}
	if (e.value == 3){
		document.getElementById("spänning").disabled = false;
		document.getElementById("ström").disabled = false;
		document.getElementById("resistans").disabled = true;
		document.getElementById("resistans").value = "";
	}
}

function calculate(){
	var e = document.getElementById("mySelect");
	if (e.value == 1){
		calculateSpänning();
	}
	if (e.value == 2){
		calculateStröm();
	}
	if (e.value == 3){
		calculateResistans();
	}
}

// Beräkning av spänning:
function calculateSpänning(){
	var a = Number(document.getElementById("ström").value);
	var c = Number(document.getElementById("resistans").value);
	document.getElementById("spänning").value = a * c;
}

// Beräkning av ström:
function calculateStröm(){
	var a = Number(document.getElementById("spänning").value);
	var c = Number(document.getElementById("resistans").value);
	document.getElementById("ström").value = a / c;
}	

// Beräkning av resistans:
function calculateResistans(){
	var a = Number(document.getElementById("spänning").value);
	var b = Number(document.getElementById("ström").value);
	document.getElementById("resistans").value = a / b;
}	

// Nollställningsknapp:
function resetForm() {
  document.getElementById("mySelect").reset();
}