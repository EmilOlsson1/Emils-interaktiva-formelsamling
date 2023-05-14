$(document).ready(function() {
  $('#val_equipfc').change(function() {
    $('#val_equipnofc').prop('disabled', $(this).val() == "B");
  });
});

function myFunction() {
  var e = document.getElementById("mySelect");
  if (e.value == 1) {
    document.getElementById("kraft").disabled = true;
    document.getElementById("kraft").value = "";
    document.getElementById("massa").disabled = false;
    document.getElementById("acceleration").disabled = false;
  }

  if (e.value == 2) {
    document.getElementById("kraft").disabled = false;
    document.getElementById("massa").disabled = true;
    document.getElementById("massa").value = "";
    document.getElementById("acceleration").disabled = false;
  }
  if (e.value == 3) {
    document.getElementById("kraft").disabled = false;
    document.getElementById("massa").disabled = false;
    document.getElementById("acceleration").disabled = true;
    document.getElementById("acceleration").value = "";
  }
}

function calculate() {
  var e = document.getElementById("mySelect");
  if (e.value == 1) {
    calculateForce();
  }
  if (e.value == 2) {
    calculateMass();
  }
  if (e.value == 3) {
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
  document.getElementById("mySelect").value = "1";
  document.getElementById("kraft").disabled = true;
  document.getElementById("kraft").value = "";
  document.getElementById("massa").disabled = false;
  document.getElementById("massa").value = "";
  document.getElementById("acceleration").disabled = false;
  document.getElementById("acceleration").value = "";
}

// Function to validate inputs and display alert message
function validateInputs() {
  const massaInput = document.getElementById('massa');
  const accelerationInput = document.getElementById('acceleration');

  const massaValue = massaInput.value;
  const accelerationValue = accelerationInput.value;

  const pattern = /^[0-9]+(\.[0-9]+)?([eE][-+]?[0-9]+)?$/; // Pattern to allow numerical values (including decimal and powers of 10)

  if (!massaValue.match(pattern) || !accelerationValue.match(pattern)) {
    // If the inputs do not match the pattern, display alert message
    alert('Vänligen ange giltiga numeriska värden');
  } else {
    // Inputs are valid, perform calculation or further processing
    calculate();
  }
}

// Add event listener to the "Beräkna" button
const calculateButton = document.getElementById('myBtn');
calculateButton.addEventListener('click', validateInputs);