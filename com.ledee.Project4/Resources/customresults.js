var favoriteTeam = textField.value;
var leastFavoriteTeam = textField2.value;
var fTScore = textField3.value;
var lFTScore = textField4.value;

var customResultWindow = Ti.UI.createWindow({
  backgroundColor: "#999",
  title: "Results",
	//fullscreen : true
});
 var results = Ti.UI.createLabel({
	text: "Your favorite team is the "+ favoriteTeam + " and your least favorite team is the " + leastFavoriteTeam 
	+ " when the " + favoriteTeam + " played the " + leastFavoriteTeam +" the final score was the "
	+ favoriteTeam + " - " + fTScore + " and the " + leastFavoriteTeam + " - " + lFTScore ,
	backgroundColor: "#222",
	color: "#999",
	//height: "100%",
	width:"100%",
	font: {
		fontSize: 12,
		fontFamily: "Arial"
	},
	width: "100%",
	//top: 100,
	textAlign: "center"
});



customResultWindow.add(results);
//customResultWindow.open();
navigationWindow.openWindow(customResultWindow, {
		animation: true
	});
	