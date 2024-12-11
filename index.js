function OpenLarge(num) {
  var x = document.getElementById("largeProjects");
  var y = document.getElementById("smallProjects");
  var z = document.getElementById("soloProjects");

    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";

    var a = document.getElementById("groupLargeButton");
    var b = document.getElementById("groupSmallButton");
    var c = document.getElementById("groupSoloButton");

    a.style.background = "rgb(30, 20, 20)";
    b.style.background = "rgb(10, 15, 10)";
    c.style.background = "rgb(10, 10, 15)";

    a.style.color = "yellow";
    b.style.color = "gray";
    c.style.color = "gray";

}

function OpenSmall(num) {
  var x = document.getElementById("largeProjects");
  var y = document.getElementById("smallProjects");
  var z = document.getElementById("soloProjects");

    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";

     var a = document.getElementById("groupLargeButton");
     var b = document.getElementById("groupSmallButton");
     var c = document.getElementById("groupSoloButton");

     a.style.background = "rgb(15, 10, 10)";
     b.style.background = "rgb(20, 30, 20)";
     c.style.background = "rgb(10, 10, 15)";

     a.style.color = "gray";
     b.style.color = "yellow";
     c.style.color = "gray";
}

function OpenSolo(num) {
  var x = document.getElementById("largeProjects");
  var y = document.getElementById("smallProjects");
  var z = document.getElementById("soloProjects");

    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";

         var a = document.getElementById("groupLargeButton");
         var b = document.getElementById("groupSmallButton");
         var c = document.getElementById("groupSoloButton");

         a.style.background = "rgb(15, 10, 10)";
         b.style.background = "rgb(10, 15, 10)";
         c.style.background = "rgb(20, 20, 30)";

         a.style.color = "gray";
         b.style.color = "gray";
         c.style.color = "yellow";
}

