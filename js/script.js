function hitungLuas() {
    var sideLength = parseFloat(document.getElementById("sideLength").value);
    var result = sideLength * sideLength;
    document.getElementById("luasDesc").innerHTML = `Luas Persegi adalah hasil perkalian panjang sisi (${sideLength})* (${sideLength}).`;
    document.getElementById("luas").innerHTML = "Luas Persegi: " + result;
}

function hitungKeliling() {
    var sideLength = parseFloat(document.getElementById("sideLength").value);
    var result = 4 * sideLength;
    document.getElementById("kelilingDesc").innerHTML = `Keliling Persegi adalah jumlah keempat sisi persegi (${sideLength} + ${sideLength} + ${sideLength} + ${sideLength}).`;
    document.getElementById("keliling").innerHTML = "Keliling Persegi: " + result;
}

function resetForm() {
    document.getElementById("sideLength").value = "";
    document.getElementById("luasDesc").innerHTML = "Luas Persegi adalah hasil perkalian panjang sisi dengan sisi.";
    document.getElementById("luas").innerHTML = "0";
    document.getElementById("kelilingDesc").innerHTML = "Keliling Persegi adalah jumlah keempat sisi persegi.";
    document.getElementById("keliling").innerHTML = "0";
}