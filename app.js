document.getElementById('player').addEventListener('mouseover', sumarPuntos);

puntos = 0;
tiempo = 60;
necessarios = 50;

function sumarPuntos() {
    puntos++;
    document.getElementById('score').innerHTML = 'Puntos: <b>' + puntos + '/' + necessarios + '  </b>';
    randNum = Math.round(Math.random()*475);
    randNum2 = Math.round(Math.random()*475);
    document.getElementById('player').style.marginTop = randNum + 'px';
    document.getElementById('player').style.marginLeft = randNum2 + 'px';
    if (puntos == 50) {
        alert('GANASTE');
        tiempo = 60;
        puntos = 0;
    }
}

function restarTiempo() {
    tiempo--;
    document.getElementById('tiempo').innerHTML = '&nbsp;&nbsp;&nbsp;Tiempo: ' + tiempo;
    if (tiempo == 0) {
        alert('PERDISTE');
        tiempo = 60;
        puntos = 0;
    }

}

setInterval(restarTiempo, 1000);