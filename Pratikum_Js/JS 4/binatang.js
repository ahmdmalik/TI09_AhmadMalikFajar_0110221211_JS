const hs = document.getElementById("hasil")
const binatang = document.getElementById("binatang")
function imageBinatang() {
    if (binatang.value == "k") {
        return hs.src = "Kucing.jpg"
    } else if (binatang.value == "g") {
        return hs.src = "Kuda.jpg"
    } else if (binatang.value == "i") {
        return hs.src = "Tupai.jpg"
    } else if (binatang.value == "b") {
        return hs.src = "Zebra.jpg"
    } else {
        return hs.src = "Harimau.jpg"
    }
}
function imageConfirmation() {
    alert(hs.src)
}