var openDetail = function() {
	
	//console.log("working");
	
	var detailWindow = Ti.UI.createWindow({
		backgroundColor : "blue",
		fullscreen : true
	});
	
	var header = Ti.UI.createLabel({
		text: this.title,
		backgroundColor:"#fff",
		left:0,
		right:0,
		color: "#000",
		height: 50,
		font:{fontSize:"14dp"},
		top: 0,
		textAlign: "center"
		
	});
	var detailText = Ti.UI.createLabel({
		text: this.detail,
		top:header.height +100,
		color: "#fff"
		
	});
	
	var label = Ti.UI.createLabel({
		text: " CloseWindow",
		backgroundColor:"#000",
		left:0,
		right:0,
		color: "#fff",
		height: 50,
		font:{fontSize:"14dp"},
		bottom: 0
		
	});
	
	label.addEventListener("click",function() {
		detailWindow.close();
		
	});
	detailWindow.add(detailText);
	detailWindow.add(header);
	detailWindow.add(label);
	detailWindow.open();
};


var nbaTeams = [{
	Title : "Heat",desc: "They are the miami Heat."
}, {
	Title : "Spurs",desc: "They are the San antonio Spurs"},
	{
		Title : "Lakers",desc: "They are the Los Angeles Lakers"
	
}];
var nflTeams = [{
	Title : "Panthers",desc: "They are the Carolina Panthers."
}, {
	Title : "Giants",desc: "They are the New York Giants."},
	{
		Title : "Broncos",desc: "They are the Denver Broncos."
	
}];
var mainWindow = Ti.UI.createWindow({
	backgroundColor : "#fff",
	fullscreen : true
});
var mainLabel = Ti.UI.createLabel({
		text: " CloseWindow",
		backgroundColor:"#000",
		left:0,
		right:0,
		color: "#fff",
		height: 50,
		font:{fontSize:"14dp"},
		bottom: 0
		
	});
	
mainLabel.addEventListener("click",function() {
	mainWindow.close();
});

var table = Ti.UI.createTableView({
	top : 10,
	left : 10,
	right : 10,
	bottom : 80
});



var nflSection = Ti.UI.createTableViewSection({
	headerTitle : "Nfl Teams",
	footerTitle : "This is the footer."

});

for (var i = 0; i < nflTeams.length; i++) {
	var theRow = Ti.UI.createTableViewRow({
		title : nflTeams[i].Title,
		detail:nflTeams[i].desc

	});
	nflSection.add(theRow);
	theRow.addEventListener("click", openDetail);
};

var nbaSection = Ti.UI.createTableViewSection({
	headerTitle : "nba Teams",
	footerTitle : "This is the footer."

});
for (var i = 0; i < nbaTeams.length; i++) {
	var theRow = Ti.UI.createTableViewRow({
		title : nbaTeams[i].Title,
		detail:nbaTeams[i].desc


	});
	nbaSection.add(theRow);
	theRow.addEventListener("click", openDetail);
};

var tableSections = [nflSection, nbaSection];

table.setData(tableSections);
mainWindow.add(mainLabel);
mainWindow.add(table);
mainWindow.open();
//detailWindow.open();
