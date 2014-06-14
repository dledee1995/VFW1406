var beginningWindow = Ti.UI.createWindow({
	backgroundColor : "black",
	fullscreen : true
});

var tableView = Ti.UI.createLabel({
	text : "Table View",
	backgroundColor : "#fff",
	left : 0,
	right : 0,
	color : "#000",
	height : 50,
	font : {
		fontSize : "60dp"
	},
	top : 150,
	textAlign : "center"

});
var listView = Ti.UI.createLabel({
	text : "List View",
	backgroundColor : "#fff",
	left : 0,
	right : 0,
	color : "#000",
	height : 50,
	font : {
		fontSize : "60dp"
	},
	bottom : 150,
	textAlign : "center"
});

/*var loadNow = function() {

	var loadFile = require("Newapp");
	//loadFile.window();
};*/
/*var loadThis = function() {

	var loadFile = require("newapp2");
	//loadFile.window();
};*/

//listView.addEventListener("click", loadNow);
listView.addEventListener("click", function() {
	var loadFile = Ti.include("Newapp.js");
});

tableView.addEventListener("click", function() {
	var loadFile = Ti.include("Newapp2.js");
});
beginningWindow.add(listView);
beginningWindow.add(tableView);
beginningWindow.open();
