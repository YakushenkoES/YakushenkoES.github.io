window.onload = function () {
  	document.getElementById('menubtn').onclick = function(){
		var x = document.getElementById("MyTopNav");
		if(x.className === "topnav"){
			x.className +=" responsive";
		}
		else{
			x.className ="topnav";	
		}
	}
}


