// window.onload = function () {
//   	document.getElementById('BtnPrinter').onclick = OnPrintClick;
// };

// function OnPrintClick(){
// 	// console.log("sefwer");
// 	// var links = document.querySelector("link[class=bootstrapLink]");
// 	// console.log(links);
// 	// for (var i = 0; i < links.length; i++)
// 	// {
// 	// 	console.log(links[i]);
// 	// 	links[i].disabled = true;
// 	// }

// 	window.print();
// };
//  
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// 	console.log("scroll");
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector("nav.topnav").style.top = "0";
//   } else {
//     document.querySelector("nav.topnav").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }
window.onload = function () {
  var bfs = SupportFullScreen(document.body);

  if (bfs) {
    document.querySelectorAll('.btn-screen').forEach(
      function (_el) {
        _el.style.display = 'inline-block';
        _el.onclick = function () {
          var elParent = this.parentElement;
          changeFullScreen(elParent);
        };
      }
    );
  }

};

function SupportFullScreen(elem) {
  var b = elem.requestFullscreen !== null;
  var b_moz = elem.mozRequestFullScreen !== null;
  var b_wk = elem.webkitRequestFullscreen !== null;
  var b_ms = elem.msRequestFullscreen !== null;
  var ans = b || b_moz || b_wk || b_ms;
  return ans;
}

function changeFullScreen(elem) {
  var b = elem.requestFullscreen;
  var b_moz = elem.mozRequestFullScreen;
  var b_wk = elem.webkitRequestFullscreen;
  var b_ms = elem.msRequestFullscreen;

  var fullScreenClass = 'full-screen';

  if (SupportFullScreen(elem)) {

    // To full screen
    if (!elem.classList.contains(fullScreenClass)) {
      if (b) {
        elem.requestFullscreen();
      } else if (b_moz) { /* Firefox */
        elem.mozRequestFullScreen();
      } else if (b_wk) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
      } else if (b_ms) { /* IE/Edge */
        elem.msRequestFullscreen();
      }
      elem.classList.add(fullScreenClass);
    }
    // Out of full screen
    else {
      if (b) {
        document.exitFullscreen();
      } else if (b_moz) {
        document.mozCancelFullScreen();
      } else if (b_wk) {
        document.webkitExitFullscreen();
      } else if (b_ms) {
        document.msExitFullscreen();
      }
      elem.classList.remove(fullScreenClass);
    }

  }


}