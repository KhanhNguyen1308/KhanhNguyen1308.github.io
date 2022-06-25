function openTool(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


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
