var customWindow = Ti.UI.createWindow({
  backgroundColor: "white",
  title: "Text Field/Text Area",
	//fullscreen : true
});






var favoriteTeam = Ti.UI.createLabel({
		text : "Please enter your favorite NFL team",
		top: 10, 
  //left: 50,
  width: 200, 
  height: 50,
 color:"black",font: {
		fontSize: 12,
		fontFamily: "Arial"
	},
	width: "100%",
	bottom: 0,
	textAlign: "center"
  

	});
var textField = Ti.UI.createTextField({
   borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
   title: "Name",
  color: "black",
  top: 60, 
  //left: 50,
  width: 200, 
  height: 50
});
var leastFavoriteTeam = Ti.UI.createLabel({
		text : "Please enter your least favorite NFL team",
		top: 110, 
  //left: 50,
  width: 200, 
  height: 50,
   color:"black",font: {
		fontSize: 12,
		fontFamily: "Arial"
	},
	width: "100%",
	bottom: 0,
	textAlign: "center"
  

	});
var textField2 = Ti.UI.createTextField({
   borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
   title: "Name",
  color: "black",
  top: 155, 
  //left: 50,
  width: 200, 
  height: 50
});
var score1 = Ti.UI.createLabel({
		text : "Please enter your favorite teams final score of the game",
		top: 210, 
 left: 10,
 // width: 220, 
  height: 50,
  color:"black",
  font: {
		fontSize: 12,
		fontFamily: "Arial"
	},
	width: "100%",
	bottom: 0,
	textAlign: "center"
});
var textField3 = Ti.UI.createTextField({
   borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
   title: "Name",
  color: "black",
  top: 250, 
  //left: 50,
  width: 200, 
  height: 50
});
  var score2 = Ti.UI.createLabel({
		text : "Please enter your least favorite teams final score of the game",
		top:310, 
 right: 10,
  //width: 220, 
  height: 50,
  color:"black",font: {
		fontSize: 12,
		fontFamily: "Arial"
	},
	width: "100%",
	bottom: 0,
	textAlign: "center"
});


var textField4 = Ti.UI.createTextField({
   borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
   title: "Name",
  color: "black",
  top: 360, 
  //left: 50,
  width: 200, 
  height: 50
});
var getResults = Ti.UI.createLabel({
	text: "Get Results",
	backgroundColor: "#222",
	color: "#999",
	height: 50,
	font: {
		fontSize: 12,
		fontFamily: "Arial"
	},
	width: "50%",
	bottom: 20,
	textAlign: "center"
});

customWindow.add(favoriteTeam);
customWindow.add(textField);
customWindow.add(leastFavoriteTeam);
customWindow.add(textField2);
customWindow.add(getResults);
customWindow.add(score1);
customWindow.add(textField3);
customWindow.add(score2);
customWindow.add(textField4);



getResults.addEventListener("click", function() {
	var loadFile = Ti.include("customresults.js");
});

navigationWindow.openWindow(customWindow, {
		animation: true
	});
	
	
customWindow.open();
navigationWindow.open();
