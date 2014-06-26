var beginningWindow = Ti.UI.createWindow({
	backgroundColor : "black",
	title:"VFW Final Project",
	fullscreen : true
});
var galleryPage = Ti.UI.createLabel({
	text : "Gallery Page",
	backgroundColor : "#blue",
	left : 0,
	right : 0,
	color : "#000",
	height : 100,
	font : {
		fontSize : "40dp"
	},
	top : 0,
	textAlign : "center"

});
var dataPage = Ti.UI.createLabel({
	text : "Data Page",
	backgroundColor : "#white",
	left : 0,
	right : 0,
	color : "#000",
	height : 100,
	font : {
		fontSize : "40dp"
	},
	top :100,
	textAlign : "center"

});
var customPage = Ti.UI.createLabel({
	text : "Custom Page",
	backgroundColor : "red",
	left : 0,
	right : 0,
	color : "#000",
	height : 100,
	font : {
		fontSize : "40dp"
	},
	top :200,
	textAlign : "center"
});
//
var intro = Ti.UI.createLabel({
	text : "MDV 1830 : VFW /DeVaunte Ledee",
	color : "999",
	
	font : {
		fontSize : 20,
		fontFamily : "Arial"
	},
	width : "100%",
	bottom : 0,
	textAlign : "center",
		
	backgroundColor : "#222",
	
	height : 30,
	
	width : "100%",
	bottom : 100
});
var navigationWindow = Ti.UI.iOS.createNavigationWindow({
	window : beginningWindow
});


galleryPage.addEventListener("click", function() {
	var loadFile = Ti.include("galleryPage.js");
});

dataPage.addEventListener("click", function() {
	var loadFile = Ti.include("dataPage.js");
});
customPage.addEventListener("click", function() {
	var loadFile = Ti.include("customPage.js");
});


beginningWindow.add(intro);
beginningWindow.add(galleryPage);
beginningWindow.add(dataPage);
beginningWindow.add(customPage);
//beginningWindow.open();
navigationWindow.open();