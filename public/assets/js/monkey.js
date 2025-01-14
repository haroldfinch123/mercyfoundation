var x=document.getElementById("hands");
var y=document.getElementById("animcon");
function closeye()
{
	console.log("Closing the eyes");
	y.style.backgroundImage="url(https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/monkey_pwd.gif)";
	x.style.marginTop="0%";
}
function openeye()
{
	console.log("Opening the eyes");
	y.style.backgroundImage="url(https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/monkey.gif)";
	x.style.marginTop="110%";
}