function somar() {
    n1 = document.getElementById('n1').value;
    n2 = document.getElementById('n2').value;

    resultado = Number.parseInt(n1) + Number.parseInt(n1);

    document.getElementById('result').value = resultado;
}

function subtrair() {
    n1 = document.getElementById('n1_sub').value;
    n2 = document.getElementById('n2_sub').value;

    resultado = Number.parseInt(n1) - Number.parseInt(n2);

    document.getElementById('result_sub').value = resultado;
}

function multiplicar() {
    n1 = document.getElementById('n1_mul').value;
    n2 = document.getElementById('n2_mul').value;

    resultado = Number.parseInt(n1) * Number.parseInt(n2);

    document.getElementById('result_mul').value = resultado;
}

function dividir() {
    n1 = document.getElementById('n1_div').value;
    n2 = document.getElementById('n2_div').value;

    resultado = Number.parseInt(n1) / Number.parseInt(n2);

    document.getElementById('result_div').value = resultado;
}

function media() {
    n1 = document.getElementById('n1_med').value;
    n2 = document.getElementById('n2_med').value;
    n3 = document.getElementById('n3_med').value;

    resultado = ((Number.parseInt(n1) + Number.parseInt(n2) + Number.parseInt(n3)) / 3);

    document.getElementById('result_med').value = resultado;

}

function limpar_soma() {
    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";
    document.getElementById('result').value = "";
}




