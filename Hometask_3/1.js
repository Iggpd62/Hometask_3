const tCelsius = Number.parseFloat(prompt("Введите температуру в градусах Цельсия"));

function convert(x) {
    return ((9 / 5) * x + 32);
}
 
alert(`Цельсий = ${tCelsius}, Фаренгейт = ${convert(tCelsius).toFixed(1)}`);