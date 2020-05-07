var Juego = "tablero";
var Opciones = 3;
var turno = "O";

CrearTablero();
$(".cuadro").click(function() {
    $(this).val(turno);
    Jugar();
    turno = (turno == "O") ? "X" : "O";
    $('#turnoActual').val(turno);
});

//Functions main
function CrearTablero() {
    for (i = 1; i <= Opciones; i++) {
        for (j = 1; j <= Opciones; j++) {
            $("#" + Juego).append("<input class='cuadro btn btn-default btn-lg' type='button' value='-' id='" + i + j + "'/>");
        }
        $("#" + Juego).append("<hr>");
    }
    $("#" + Juego).append('<input type="button" id="iniciar" onclick="Reiniciar()" value="Reiniciar" class="btn btn-danger btn-lg disabled"/>');
}

function Reiniciar() {
    $(".alert").hide('slow');
    $(".cuadro").each(function(index) {
        $(this).val('-');
    });
    $("#iniciar").addClass("disabled");
}

function cerrarAlert() {
    $(".alert").hide('slow');
    $("#iniciar").removeClass("disabled");
    Reiniciar();
}

function Jugar() {
    for (i = 1; i <= Opciones; i++) {
        for (j = 1; j <= Opciones; j++) {
            Filas = 1;
            columnas = 1;
            Diagonal = 1;
            DiagonalInversa = 1;
            Turnos = 0;

            $(".cuadro").each(function(index) {
                elid = $(this).attr('id');

                if ((elid.charAt(0) == i) && ($(this).val() == turno)) {
                    Filas++;
                    if (Filas == (Opciones + 1)) {
                        Ganador();
                    }
                }

                if ((elid.charAt(1) == j) && ($(this).val() == turno)) {
                    columnas++;
                    if (columnas == (Opciones + 1)) {
                    }
                }
                if ((elid.charAt(1) == elid.charAt(0)) && ($(this).val() == turno)) {
                    Diagonal++;
                    if (Diagonal == (Opciones + 1)) {
                    }
                }
                valorTotaldiagonal = parseInt(elid.charAt(1)) + parseInt(elid.charAt(0));
                if (((valorTotaldiagonal) == (Opciones + 1)) && ($(this).val() == turno)) {
                    DiagonalInversa++;
                    if (DiagonalInversa == (Opciones + 1)) {
                    }
                }
                if ($(this).val() != "-") {
                    Turnos++;
                    if (Turnos == (Opciones * Opciones)) {
                    }
                }
                if (Turnos == 9) {
                    Reiniciar();
                }

            });
        }
    }
}

