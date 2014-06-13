var loadFile = require("data");

/*var openDetail = function() {
	var detailWindow = Ti.UI.createWindow({
		backgroundColor : "black",
		fullscreen : true,
		title : this.title
	});

	var detailText = Ti.UI.createLabel({
		text : this.detail,
		top : 100,
		color : "#fff"

	});
	
	detailWindow.add(detailText);
	//navigationWindow.openWindow(detailWindow);
	detailWindow.open();
};*/

var mainWindow = Ti.UI.createWindow({
	backgroundColor : "#fff",
	title: "Team Lists",
	fullscreen : true
});

var navigationWindow = Ti.UI.iOS.createNavigationWindow({
	window : mainWindow
});

var listView = Ti.UI.createListView({
	backgroundColor : "#fff"
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

var sections = [];
for (var n in loadFile.data) {
	var listData = [];
	var listSection = Ti.UI.createListSection({
		headerTitle : loadFile.data[n].headTitle
	});
	for (var i = 0, j = loadFile.data[n].teams.length; i < j; i++) {
		listData.push({
			properties : {
				title : loadFile.data[n].teams[i].Title,
				desc: loadFile.data[n].teams[i].desc,
				accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE
			}
		});
	}
	listSection.setItems(listData);
	sections.push(listSection);
}
listView.addEventListener("itemclick", function(e){
	//console.log(e.section.headerTitle);
	var tt = e.section;
	var selectedItem = tt.getItemAt(e.itemIndex);
	console.log(selectedItem.properties);
	
	var detailWindow = Ti.UI.createWindow({
		backgroundColor : "#600",
		fullscreen : true,
		title : selectedItem.properties.title
	});
	
	var tt1 = Ti.UI.createLabel({
		text: selectedItem.properties.desc,
		color: "fff",
		top: 20,
		left: 10,
		right: 10
	});
	
	detailWindow.add(tt1);
	
	navigationWindow.openWindow(detailWindow, {
		animation: true
	});
	
});

var mainClose = function (){
	//mainWindow.close();
	navigationWindow.close();
};

test.addEventListener("click",mainClose);



listView.sections = sections;
mainWindow.add(listView);
mainWindow.add(test);
//mainWindow.open();
navigationWindow.open();
