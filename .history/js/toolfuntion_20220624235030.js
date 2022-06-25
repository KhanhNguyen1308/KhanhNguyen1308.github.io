function RGBtoHEX() {
    var rValue = parseInt(document.getElementById("rValue").value);
    var gValue = parseInt(document.getElementById("gValue").value);
    var bValue = parseInt(document.getElementById("bValue").value);
    
    var value = componentToHex(rValue) + componentToHex(gValue) + componentToHex(bValue);
    document.getElementById("resultHexCode").setAttribute('value',value);
}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}