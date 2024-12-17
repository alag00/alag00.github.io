
 function displayNextVideo() {
          x = (x === videos.length - 1) ? 0 : x + 1;
          document.getElementById("gameplayPreview").src = videos[x];
      }
      function changeVideo() {
          setInterval(displayNextVideo, 15000);
      }

      var videos = [], x = 0;
      videos[0] = "videos/PreviewCB.mp4#t=30";
      videos[1] = "videos/PreviewTT.mp4#t=37";
      videos[2] = "videos/PreviewUT.mp4#t=30";

/*
function ChangeVideoSource(currentIndex)
{
    var vid = document.getElementById("introBackground");
    currentIndex++;

    switch(currentIndex)
    {
    case 1:
    vid.src="videos/PreviewCB.mp4";
    break;

     case 2:
      vid.src="videos/PreviewCP.mp4";
        break;

         case 3:
          vid.src="videos/PreviewUT.mp4";
          currentIndex = 0;
            break;

    }
}
*/

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

    a.style.color = "rgb(180,180,40)";
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
     b.style.color = "rgb(180,180,40)";
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
         c.style.color = "rgb(180,180,40)";
}

