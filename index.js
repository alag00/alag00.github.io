function OpenLarge(num) {
  var x = document.getElementById("largeProjects");
  var y = document.getElementById("smallProjects");
  var z = document.getElementById("soloProjects");

    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
}

function OpenSmall(num) {
  var x = document.getElementById("largeProjects");
  var y = document.getElementById("smallProjects");
  var z = document.getElementById("soloProjects");

    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
}

function OpenSolo(num) {
  var x = document.getElementById("largeProjects");
  var y = document.getElementById("smallProjects");
  var z = document.getElementById("soloProjects");

    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
}