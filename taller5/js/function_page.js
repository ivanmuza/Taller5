var dirPref = ['cll', 'cra', 'av', 'anv', 'trans'];

function valDireccion() {
    var dir = document.getElementById("dir");
    var flag = false;
    for (var i = 0; i < dirPref.length; i++) {
        if (dir.value.indexOf(dirPref[i]) == 0) {
            flag = true;
            break;
        }
    }
    if (!flag) {
        dir.classList.remove("input-valid");
        dir.classList.add("input-invalid");
        document.getElementById("dir_feedback").style.display = "block";
        dir.value = '';
    } else {
        dir.classList.remove("input-invalid");
        dir.classList.add("input-valid");
        document.getElementById("dir_feedback").style.display = "none";
    }
    return flag;
}

function randomPrefDir() {
    var dir = document.getElementById("dir");
    var randomPref = Math.floor(Math.random() * ((dirPref.length) - 0) + 0);
    dir.value = dirPref[randomPref] + ' ';
}

function togglePass(idPass) {
    var x = document.getElementById("pass" + idPass);
    var eye = document.getElementById("pass-eye" + idPass);
    if (x.type === "password") {
        x.type = "text";
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    } else {
        x.type = "password";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }
}

function registrarse() {
	window.location.href = "welcomePage.html";
}

function validarTamContraseña(){
	var pass1 = document.getElementById("pass1");
    if (pass1.value.length >= 15 && pass1.value.length <= 20) {
        pass1.classList.remove("input-invalid");
        pass1.classList.add("input-valid");
        document.getElementById("pass1_feedback").style.display = "none";
    } else {
        pass1.classList.remove("input-valid");
        pass1.classList.add("input-invalid");
        document.getElementById("pass1_feedback").style.display = "block";
        pass1.value = '';
    }
}

function validarContraseñas(){
	var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    if (pass1.value == pass2.value) {
        pass2.classList.remove("input-invalid");
        pass2.classList.add("input-valid");
        document.getElementById("pass2_feedback").style.display = "none";
    } else {
        pass2.classList.remove("input-valid");
        pass2.classList.add("input-invalid");
        document.getElementById("pass2_feedback").style.display = "block";
        pass2.value = '';
    }
}

function onloadPage() {
    randomPrefDir();
    /*var formPage = document.getElementById("formPage");
    formPage.onsubmit = function() {
        registrarse()
    };*/
    var dir = document.getElementById("dir");
    dir.addEventListener('change', valDireccion);
    var pass1 = document.getElementById("pass1");
    pass1.addEventListener('change', validarTamContraseña);
    var pass2 = document.getElementById("pass2");
    pass2.addEventListener('change', validarContraseñas);
}

function showContent() {
        element = document.getElementById("content");
        check = document.getElementById("check");
        if (check.checked) {
            element.style.display='block';
        }
        else {
            element.style.display='none';
        }
    }

$(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      //values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] ); //+ " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) );// +
     // " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );