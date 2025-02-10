let img = document.getElementsByTagName("img")[0]
let button = document.querySelector(".rx")
let button2 = document.querySelector(".ry")
let button3 = document.querySelector(".rd")
let input2 = document.getElementById("op")
let input3 = document.getElementById("bg")
let input4 = document.querySelector("#sa")
let res = document.querySelector(".re")
function rotatex() {
    img.style.rotate = "90deg"
}
function rotateY() {
    img.style.rotate = "-90deg"
}
function rotate8() {
    img.style.rotate = "180deg"
}
function rotate360() {
    img.style.rotate = "360deg"
}
function ppacity() {
    let val = input2.value / 100;
    img.style.filter = `opacity(${val})`
}
function bg() {
    let val = input3.value / 100
    img.style.filter = `brightness(${val})`

}
function sa() {
    let val = input4.value / 100
    img.style.filter = `saturate(${val})`

}
function reset() {
    img.style.filter = "none"
    img.style.rotate = "none"
}
 const fileInput = document.getElementById('fileInput');
        const preview = document.getElementById('preview');
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    preview.src = e.target.result;
                    preview.classList.remove('hidden');
                }
                reader.onerror = function(error) {
                    console.log('Error: ', error);
                }
                reader.readAsDataURL(file);
            }
        });
button.addEventListener("click", rotatex)
button2.addEventListener("click", rotateY)
button3.addEventListener("click", rotate360)
input2.addEventListener("input", ppacity)
input3.addEventListener("input", bg)
input4.addEventListener("input", sa)
res.addEventListener("click", reset)