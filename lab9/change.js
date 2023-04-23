function Makechange() {
    var borderR = document.getElementById("borderR").value;
    var borderG = document.getElementById("borderG").value;
    var borderB = document.getElementById("borderB").value;
    var borderwidth = document.getElementById("width").value;
    var bgR = document.getElementById("bgR").value;
    var bgG = document.getElementById("bgG").value;
    var bgB = document.getElementById("bgB").value;

    var tag = document.getElementById("sentence");
    tag.style.borderColor = `rgb(${borderR},${borderG},${borderB})`;
    tag.style.borderWidth = borderwidth
    tag.style.backgroundColor = `rgb(${bgR},${bgG},${bgB})`;}