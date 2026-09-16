function tambah(){
    let angka1 = document.getElementById("angka_pertama").value
    let angka2 = document.getElementById("angka_kedua").value

    angka1 = Number(angka1)
    angka2 = Number(angka2)

    document.getElementById("hasil").innerHTML = angka1 + angka2
}

function kurang(){
    let angka1 = document.getElementById("angka_pertama").value
    let angka2 = document.getElementById("angka_kedua").value

    angka1 = Number(angka1)
    angka2 = Number(angka2)

    document.getElementById("hasil").innerHTML = angka1 - angka2
}

function kali(){
    let angka1 = document.getElementById("angka_pertama").value
    let angka2 = document.getElementById("angka_kedua").value

    angka1 = Number(angka1)
    angka2 = Number(angka2)

    document.getElementById("hasil").innerHTML = angka1 * angka2
}

function bagi(){
    let angka1 = document.getElementById("angka_pertama").value
    let angka2 = document.getElementById("angka_kedua").value

    angka1 = Number(angka1)
    angka2 = Number(angka2)

    document.getElementById("hasil").innerHTML = angka1 / angka2
}

function modulus(){
    let angka1 = document.getElementById("angka_pertama").value
    let angka2 = document.getElementById("angka_kedua").value

    angka1 = Number(angka1)
    angka2 = Number(angka2)

    document.getElementById("hasil").innerHTML = angka1 % angka2
}

function resetKalkulator(){
    document.getElementById("angka_pertama").value = ""
    document.getElementById("angka_kedua").value = ""
    document.getElementById("hasil").innerHTML = "0"
}

function darkMode(){
    document.getElementById("content").style.backgroundColor = "#0f172a"
    document.getElementById("kalkulator").style.backgroundColor = "#111827"
    document.getElementById("kalkulator").style.color = "white"
    document.getElementById("hasil").style.backgroundColor = "#0f172a"
}

function lightMode(){
    document.getElementById("content").style.backgroundColor = "#e8f0ff"
    document.getElementById("kalkulator").style.backgroundColor = "white"

    document.querySelector(".header h1").style.color = "#222"
    document.querySelector(".header p").style.color = "#666"

    document.querySelector("label").style.color = "#333"
    document.querySelectorAll("label")[1].style.color = "#333"

    document.querySelector(".pembuat p").style.color = "#666"
    document.querySelector(".pembuat span").style.color = "#555"

    document.getElementById("hasil").style.backgroundColor = "#eef4ff"
}