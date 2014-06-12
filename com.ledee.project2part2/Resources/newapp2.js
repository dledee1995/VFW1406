var loadFile = require("data");

var openDetail = function() {
	var detailWindow = Ti.UI.createWindow({
		backgroundColor : "blue",
		fullscreen : true,
		title : this.title
	});

	var detailText = Ti.UI.createLabel({
		text : this.detail,
		top : 100,
		color : "#fff"

	});
	
	detailWindow.add(detailText);
	navigationWindow.openWindow(detailWindow);
};

var mainWindow = Ti.UI.createWindow({
	backgroundColor : "#fff",
	fullscreen : true,
	title : "Team Lists"
});

var test = Ti.UI.createLabel({
	text: "<< back",
	backgroundColor: "#222",
	color: "#999",
	height: 50,
	font: {
		fontSize: 12,
		fontFamily: "Arial"
	},
	width: "100%",
	bottom: 0,
	textAlign: "center"
});

var navigationWindow = Ti.UI.iOS.createNavigationWindow({
	window : mainWindow
});
/*var beginningNavigationWindow =Ti.UI.iOS.createNavigationWindow({
 	window: mainWindow
});*/

var table = Ti.UI.createTableView({
	top : 10,
	//top : 40,
	left : 10,
	right : 10,
	bottom : 80
});

var tableSections = [];
for (var n in loadFile.data) {
	//create tableViewSections
	var tvs = Ti.UI.createTableViewSection({
		headerTitle : loadFile.data[n].headTitle,
		footerTitle : loadFile.data[n].footTitle
	});
	for (var i = 0, j = loadFile.data[n].teams.length; i < j; i++) {
		var row = Ti.UI.createTableViewRow({
			title : loadFile.data[n].teams[i].Title,
			detail : loadFile.data[n].teams[i].desc
		});
		tvs.add(row);
		row.addEventListener("click", openDetail);
	}
	tableSections.push(tvs);
}

// rich note: added close event listener
var mainClose = function (){
	navigationWindow.close();
	
};

test.addEventListener("click",mainClose);

mainWindow.add(test);
table.setData(tableSections);
mainWindow.add(table);
//mainWindow.open();
navigationWindow.open();
//beginningNavigationWindow.open();