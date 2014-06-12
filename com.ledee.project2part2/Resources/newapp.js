var loadFile = require("data");

var mainWindow = Ti.UI.createWindow({
	backgroundColor : "#fff",
	fullscreen : true
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
				accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE
			}
		});
	}
	
	listSection.setItems(listData);
	sections.push(listSection);
}

var mainClose = function (){
	mainWindow.close();
};

test.addEventListener("click",mainClose);



listView.sections = sections;
mainWindow.add(listView);
mainWindow.add(test);
mainWindow.open();