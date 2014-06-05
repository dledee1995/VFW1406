var windowProperties = {
	title : "Window",
	backgroundColor : "green",
	fullscreen : true
};
var mainWindow = Ti.UI.createWindow(windowProperties);

var headerView = Ti.UI.createView({
	backgroundColor : "black",
	height : "100",
	borderRadius : 10,
	borderWidth : 5,
	borderColor : "blue",
	top : 20,
	left : 20,
	right : 20,
	
});

var array = ["football","basketball","soccer","golf","volleyball"];
var arrayText = Ti.UI.createLabel({
	text : array,
	color:"#fff",
	font:{fontSize: 10, fontFamily: "times New Roman", fontStyle: "italic"}
	
	
});
var previousView = Ti.UI.createView({
	
	backgroundColor : "black",
	height : "50",
	width : "50",
	borderRadius : 5,
	borderWidth : 5,
	borderColor : "blue",
	bottom : 20,
	left : 20,
	
	
});
var previousText = Ti.UI.createLabel({
	text : "Previous",
	color:"#fff",
	font:{fontSize: 10, fontFamily: "times New Roman", fontStyle: "italic"}
	
});

var nextView = Ti.UI.createView({
	
	backgroundColor : "black",
	height : "50",
	width : "50",
	borderRadius : 5,
	borderWidth : 5,
	borderColor : "blue",
	bottom : 20,
	right : 20,
});
var nextText = Ti.UI.createLabel({
	text : "Next",
	color:"#fff",
	font:{fontSize: 10, fontFamily: "times New Roman", fontStyle: "italic"}
	
});

previousView.add(previousText);
nextView.add(nextText);
headerView.add(arrayText);
mainWindow.add(nextView);
mainWindow.add(previousView);
mainWindow.add(headerView);
mainWindow.open();
