var detailWindow = Ti.UI.createWindow({
	backgroundColor : "#999",
	fullscreen : true,
});
var back = Ti.UI.createLabel({
	text: "<< back",
	backgroundColor: "#222",
	color: "999",
	height: 50,
	font: {
		fontSize: 25,
		fontFamily: "Arial"
	},
	width: "100%",
	bottom: 0,
	textAlign: "center"
});
var test = Ti.UI.createLabel({

	text : "Single Shots",
	backgroundColor : "#222",
	color : "#999",
	height : 50,
	font : {
		fontSize : 23,
		fontFamily : "Arial"
	},
	width : "100%",
	top : 0,
	textAlign : "center"
});
var mainClose = function (){
	detailWindow.close();
	
};

back.addEventListener("click",mainClose);
win.addEventListener("click", function(e) {
	console.log(e.source.index);

	//window
detailWindow.add(back);
	detailWindow.add(test);
	detailWindow.open();
});
